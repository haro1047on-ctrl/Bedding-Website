/**
 * MORFE - Colourway Image Ownership & Provenance Auditor
 *
 * Evaluates every product, colourway, and image asset in the catalogue against
 * reliable source ground truth (imageManifest.json & raw product records).
 * Distinguishes:
 *  - verified: Ownership established from reliable source records
 *  - unverified: Asset exists but cannot be proven from source records
 *  - missing: No image or empty gallery
 *  - invalid_or_inaccessible: File missing on disk or invalid URL
 *
 * Produces machine-readable output: src/data/image_ownership_report.json
 */

const fs = require('fs');
const path = require('path');

console.log('========================================================================');
console.log(' MORFE COLOURWAY IMAGE OWNERSHIP & PROVENANCE AUDITOR');
console.log('========================================================================\n');

// 1. Load mockData.ts
const mockContent = fs.readFileSync('src/data/mockData.ts', 'utf8');
const match = mockContent.match(/export const PRODUCTS: Product\[\] = (\[[\s\S]*?\]);\n\nexport const BEDROOM_LOOKS/);
if (!match) {
  console.error('[FAIL] Could not parse PRODUCTS from mockData.ts');
  process.exit(1);
}
const products = JSON.parse(match[1]);

// 2. Load manifest
const manifestPath = 'src/data/imageManifest.json';
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

// Build reverse lookup index from manifest:
// map imageSrc -> array of { productId, color, role, alt }
const manifestLookup = new Map();
for (const [prodId, prodData] of Object.entries(manifest)) {
  if (Array.isArray(prodData.images)) {
    prodData.images.forEach(img => {
      const src = img.src || img.remoteUrl;
      if (src) {
        if (!manifestLookup.has(src)) manifestLookup.set(src, []);
        manifestLookup.get(src).push({
          productId: prodId,
          productTitle: prodData.title,
          color: prodData.color,
          colorOrPrint: img.colorOrPrint,
          alt: img.alt,
          role: img.role
        });
      }
      if (img.remoteUrl && img.remoteUrl !== img.src) {
        if (!manifestLookup.has(img.remoteUrl)) manifestLookup.set(img.remoteUrl, []);
        manifestLookup.get(img.remoteUrl).push({
          productId: prodId,
          productTitle: prodData.title,
          color: prodData.color,
          colorOrPrint: img.colorOrPrint,
          alt: img.alt,
          role: img.role
        });
      }
    });
  }
}

const auditRecords = [];
const summary = {
  totalProducts: products.length,
  totalColorways: 0,
  totalImageEvaluations: 0,
  verifiedOwnership: 0,
  unverifiedOwnership: 0,
  missingImage: 0,
  invalidOrInaccessible: 0
};

products.forEach(p => {
  p.colors.forEach(c => {
    summary.totalColorways++;
    const imagesToAudit = new Set();
    if (c.image && typeof c.image === 'string') imagesToAudit.add(c.image.trim());
    if (Array.isArray(c.gallery)) {
      c.gallery.forEach(img => {
        if (typeof img === 'string') imagesToAudit.add(img.trim());
      });
    }

    if (imagesToAudit.size === 0 || (imagesToAudit.size === 1 && imagesToAudit.has(''))) {
      summary.missingImage++;
      auditRecords.push({
        productId: p.id,
        productName: p.name,
        colorway: c.name,
        image: null,
        status: 'missing',
        reason: 'No photography exists in colourway record (triggers dedicated ImageOff placeholder)'
      });
      return;
    }

    imagesToAudit.forEach(img => {
      if (!img) {
        summary.missingImage++;
        auditRecords.push({
          productId: p.id,
          productName: p.name,
          colorway: c.name,
          image: '',
          status: 'missing',
          reason: 'Empty image string'
        });
        return;
      }

      summary.totalImageEvaluations++;

      // Check physical existence / accessibility
      let isAccessible = true;
      let accessReason = '';
      if (img.startsWith('/')) {
        const localPath = path.join('public', img);
        if (!fs.existsSync(localPath)) {
          isAccessible = false;
          accessReason = `Local file does not exist on disk at public${img}`;
        } else if (fs.statSync(localPath).size === 0) {
          isAccessible = false;
          accessReason = `Local file exists but is 0 bytes at public${img}`;
        }
      } else if (img.startsWith('http://') || img.startsWith('https://')) {
        try {
          new URL(img);
        } catch (e) {
          isAccessible = false;
          accessReason = `Invalid URL structure: ${e.message}`;
        }
      } else {
        isAccessible = false;
        accessReason = `Unknown path protocol for image: ${img}`;
      }

      if (!isAccessible) {
        summary.invalidOrInaccessible++;
        auditRecords.push({
          productId: p.id,
          productName: p.name,
          colorway: c.name,
          image: img,
          status: 'invalid_or_inaccessible',
          reason: accessReason
        });
        return;
      }

      // Check provenance against source manifest
      const manifestMatches = manifestLookup.get(img) || [];
      const colorClean = c.name.toLowerCase().replace(/[^a-z0-9]/g, '');

      // Check if image belongs to this product directly or a sister product matching this color
      let matchingSource = null;
      for (const m of manifestMatches) {
        const mColor = (m.colorOrPrint || m.color || '').toLowerCase().replace(/[^a-z0-9]/g, '');
        if (mColor === colorClean || colorClean.includes(mColor) || mColor.includes(colorClean)) {
          matchingSource = m;
          break;
        }
      }

      if (matchingSource) {
        summary.verifiedOwnership++;
        auditRecords.push({
          productId: p.id,
          productName: p.name,
          colorway: c.name,
          image: img,
          status: 'verified',
          reason: `Verified against source manifest entry "${matchingSource.productId}" (${matchingSource.colorOrPrint || matchingSource.color})`
        });
      } else if (manifestMatches.length > 0) {
        // Image was in manifest but associated with a different color
        summary.unverifiedOwnership++;
        auditRecords.push({
          productId: p.id,
          productName: p.name,
          colorway: c.name,
          image: img,
          status: 'unverified',
          reason: `Image found in manifest under different shade "${manifestMatches[0].colorOrPrint || manifestMatches[0].color}". Ownership cannot be established with certainty.`
        });
      } else {
        // Image not found in manifest records at all
        summary.unverifiedOwnership++;
        auditRecords.push({
          productId: p.id,
          productName: p.name,
          colorway: c.name,
          image: img,
          status: 'unverified',
          reason: `Image not traced to any authoritative source manifest record.`
        });
      }
    });
  });
});

console.log('--- Image Provenance Audit Results ---');
console.log(`  • Total Products Scanned           : ${summary.totalProducts}`);
console.log(`  • Total Colourways Scanned          : ${summary.totalColorways}`);
console.log(`  • Total Image Evaluations          : ${summary.totalImageEvaluations}`);
console.log(`  • Verified Ownership               : ${summary.verifiedOwnership}`);
console.log(`  • Unverified Ownership             : ${summary.unverifiedOwnership}`);
console.log(`  • Missing Photography (Placeholders): ${summary.missingImage}`);
console.log(`  • Invalid or Inaccessible Images    : ${summary.invalidOrInaccessible}`);

const reportPayload = {
  timestamp: new Date().toISOString(),
  commit: 'bba374d',
  summary,
  records: auditRecords
};

// Write machine-readable output
const outputPath = 'src/data/image_ownership_report.json';
fs.writeFileSync(outputPath, JSON.stringify(reportPayload, null, 2));
console.log(`\n[PASS] Machine-readable report saved to ${outputPath}`);

// Also copy to brain artifact directory if accessible
const brainArtifactPath = path.resolve('C:\\Users\\Haroon\\.gemini\\antigravity\\brain\\e84136e9-c5a8-4d91-9b0e-cda03eab405e\\image_ownership_report.json');
try {
  fs.writeFileSync(brainArtifactPath, JSON.stringify(reportPayload, null, 2));
  console.log(`[PASS] Machine-readable report saved to artifact directory: ${brainArtifactPath}`);
} catch (e) {
  console.log(`[NOTE] Could not write to artifact directory: ${e.message}`);
}
