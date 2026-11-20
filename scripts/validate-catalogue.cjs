const fs = require('fs');
const path = require('path');

console.log('=== MORFE Phase 2 Catalogue & Asset Validation ===\n');

// 1. Load mockData.ts PRODUCTS
const mockContent = fs.readFileSync('src/data/mockData.ts', 'utf8');
const match = mockContent.match(/export const PRODUCTS: Product\[\] = (\[[\s\S]*?\]);\n\nexport const BEDROOM_LOOKS/);
if (!match) {
  console.error('FATAL: Could not parse PRODUCTS from mockData.ts');
  process.exit(1);
}
const products = JSON.parse(match[1]);
console.log(`[PASS] Loaded ${products.length} products from src/data/mockData.ts`);

// 2. Load imageManifest.json
const manifestPath = 'src/data/imageManifest.json';
if (!fs.existsSync(manifestPath)) {
  console.error('FATAL: src/data/imageManifest.json does not exist');
  process.exit(1);
}
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
console.log(`[PASS] Loaded ${Object.keys(manifest).length} manifest entries from ${manifestPath}`);

// 3. Load products.ts SHEET_SOCIETY_PRODUCTS
const productsTsContent = fs.readFileSync('src/data/products.ts', 'utf8');
const pMatch = productsTsContent.match(/export const SHEET_SOCIETY_PRODUCTS: CatalogProduct\[\] = (\[[\s\S]*?\]);\n\nexport default SHEET_SOCIETY_PRODUCTS;/);
if (!pMatch) {
  console.error('FATAL: Could not parse SHEET_SOCIETY_PRODUCTS from src/data/products.ts');
  process.exit(1);
}
const catalogProducts = JSON.parse(pMatch[1]);
console.log(`[PASS] Loaded ${catalogProducts.length} CatalogProduct entries from src/data/products.ts`);

const VALID_CATEGORIES = new Set([
  'Quilt Covers',
  'Fitted Sheets',
  'Flat Sheets',
  'Pillowcases',
  'Bed Sheets & Sets',
  'Blankets & Bed Covers',
  'Duvet Covers',
  'Sheets & Sets',
  'Quilts & Comforters',
  'Blankets & Throws',
  'Quilts & Pillows',
  'Protectors & Toppers',
  'Cushions',
  'Bath & Towels',
  'Sleepwear',
  'Wellness',
  'Kids & Baby',
  'Bundles'
]);

let errors = 0;
let warnings = 0;

// Unique ID check
const idSet = new Set();
products.forEach((p, idx) => {
  if (!p.id || typeof p.id !== 'string') {
    console.error(`[FAIL] Product index ${idx} missing valid id`);
    errors++;
  } else if (idSet.has(p.id)) {
    console.error(`[FAIL] Duplicate product id: ${p.id}`);
    errors++;
  } else {
    idSet.add(p.id);
  }

  // Name check
  if (!p.name || typeof p.name !== 'string') {
    console.error(`[FAIL] Product ${p.id} missing name`);
    errors++;
  }

  // Category check
  if (!p.category || !VALID_CATEGORIES.has(p.category)) {
    console.error(`[FAIL] Product ${p.id} has invalid category: "${p.category}"`);
    errors++;
  }

  // Material check
  if (!p.material || typeof p.material !== 'string') {
    console.error(`[FAIL] Product ${p.id} missing material`);
    errors++;
  }

  // Price checks
  if (typeof p.price !== 'number' || p.price <= 0) {
    console.error(`[FAIL] Product ${p.id} has invalid price: ${p.price}`);
    errors++;
  }
  if (p.minPrice && p.maxPrice && p.minPrice > p.maxPrice) {
    console.error(`[FAIL] Product ${p.id} minPrice (${p.minPrice}) > maxPrice (${p.maxPrice})`);
    errors++;
  }

  // Images check
  if (!Array.isArray(p.images) || p.images.length === 0) {
    console.error(`[FAIL] Product ${p.id} has no images`);
    errors++;
  } else {
    p.images.forEach((img, imgIdx) => {
      if (!img || typeof img !== 'string') {
        console.error(`[FAIL] Product ${p.id} image ${imgIdx} is invalid: ${img}`);
        errors++;
      }
    });
  }

  // Colors check
  if (!Array.isArray(p.colors) || p.colors.length === 0) {
    console.error(`[FAIL] Product ${p.id} has no colors`);
    errors++;
  } else {
    p.colors.forEach((c, cIdx) => {
      if (!c.name || typeof c.name !== 'string') {
        console.error(`[FAIL] Product ${p.id} color ${cIdx} missing name`);
        errors++;
      }
      if (!c.hex || typeof c.hex !== 'string' || !c.hex.startsWith('#')) {
        console.warn(`[WARN] Product ${p.id} color ${c.name} has non-standard hex: ${c.hex}`);
        warnings++;
      }
      if (!c.image || typeof c.image !== 'string') {
        console.error(`[FAIL] Product ${p.id} color ${c.name} missing image`);
        errors++;
      }
    });
  }

  // Sizes check
  if (!Array.isArray(p.sizes) || p.sizes.length === 0) {
    console.error(`[FAIL] Product ${p.id} has no sizes`);
    errors++;
  }

  // Strict Colourway Gallery Isolation Checks
  if (Array.isArray(p.colors)) {
    p.colors.forEach((c) => {
      if (Array.isArray(c.gallery)) {
        c.gallery.forEach((gImg, gIdx) => {
          if (!gImg || typeof gImg !== 'string' || !gImg.trim()) {
            console.error(`[FAIL] Product ${p.id} color ${c.name} gallery image ${gIdx} is empty`);
            errors++;
          }
        });
      }
    });
  }

  // Manifest correspondence
  if (!manifest[p.id]) {
    console.error(`[FAIL] Product ${p.id} not found in imageManifest.json`);
    errors++;
  } else {
    const m = manifest[p.id];
    if (!m.images || m.images.length === 0) {
      console.error(`[FAIL] Manifest entry for ${p.id} has empty images`);
      errors++;
    }
  }
});

console.log('\n--- Category Coverage Breakdown ---');
const categoryCounts = {};
products.forEach(p => {
  categoryCounts[p.category] = (categoryCounts[p.category] || 0) + 1;
});
Object.entries(categoryCounts).forEach(([cat, count]) => {
  console.log(`  • ${cat.padEnd(24)}: ${count} products`);
});

console.log('\n--- Asset Library Statistics ---');
let totalProductImages = 0;
let totalColorways = 0;
products.forEach(p => {
  totalProductImages += p.images.length;
  totalColorways += p.colors.length;
});
console.log(`  • Total Products     : ${products.length}`);
console.log(`  • Total Colorways    : ${totalColorways}`);
console.log(`  • Total Image Assets : ${totalProductImages}`);
console.log(`  • Manifest Size      : ${Object.keys(manifest).length} mapped products`);

console.log('\n--- Component Anti-Regression & Fallback Checks ---');
const modalCode = fs.readFileSync('src/components/ProductDetailModal.tsx', 'utf8');
if (modalCode.includes('...product.images') || modalCode.includes('product.images[0]')) {
  console.error('[FAIL] ProductDetailModal.tsx still contains cross-colour fallback to product.images!');
  errors++;
} else {
  console.log('[PASS] ProductDetailModal.tsx strictly isolated: zero fallback to product.images');
}

const cardCode = fs.readFileSync('src/components/ProductCard.tsx', 'utf8');
if (cardCode.includes('product.images[1] || currentImage') || cardCode.includes('activeColor.image || product.images[0]')) {
  console.error('[FAIL] ProductCard.tsx still contains cross-colour fallback to product.images!');
  errors++;
} else {
  console.log('[PASS] ProductCard.tsx strictly isolated: zero fallback to product.images');
}

const cartCode = fs.readFileSync('src/components/CartDrawer.tsx', 'utf8');
if (cartCode.includes('item.selectedColor.image || item.product.images[0]')) {
  console.error('[FAIL] CartDrawer.tsx still contains cross-colour fallback to item.product.images!');
  errors++;
} else {
  console.log('[PASS] CartDrawer.tsx strictly isolated: zero fallback to product.images');
}

console.log('\n=== Validation Summary ===');
if (errors === 0) {
  console.log(`[SUCCESS] 0 ERRORS! All ${products.length} products pass validation checks.`);
  if (warnings > 0) {
    console.log(`[INFO] ${warnings} minor warnings noted.`);
  }
} else {
  console.error(`[FAILED] Found ${errors} errors during validation.`);
  process.exit(1);
}
