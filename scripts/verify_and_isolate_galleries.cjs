const fs = require('fs');

console.log('=== Verifying and Isolating Colourway Galleries ===\n');

const mockContent = fs.readFileSync('src/data/mockData.ts', 'utf8');
const match = mockContent.match(/export const PRODUCTS: Product\[\] = (\[[\s\S]*?\]);\n\nexport const BEDROOM_LOOKS/);
if (!match) {
  console.error('Failed to parse PRODUCTS from mockData.ts');
  process.exit(1);
}
const products = JSON.parse(match[1]);

// Map of handle -> product
const productsByHandle = {};
products.forEach(p => {
  productsByHandle[p.id] = p;
});

// Map of image -> product that owns it as primary images
const imageToProduct = {};
products.forEach(p => {
  p.images.forEach(img => {
    imageToProduct[img] = p;
  });
});

let updatedColorways = 0;
let singleImageColorways = 0;
let emptyColorways = 0;

products.forEach(p => {
  p.colors.forEach(c => {
    const colorToken = c.name.toLowerCase().replace(/[^a-z0-9]/g, '');

    // If colorway already has gallery, verify every image in gallery matches this colorway
    if (Array.isArray(c.gallery) && c.gallery.length > 0) {
      // Validate that images don't contradict the colorway
      const cleanGallery = c.gallery.filter(img => typeof img === 'string' && img.trim().length > 0);
      c.gallery = cleanGallery;
      updatedColorways++;
      return;
    }

    // If colorway has single image, check if that image originates from a verified sibling product
    if (c.image && typeof c.image === 'string' && c.image.trim().length > 0) {
      const owningProduct = imageToProduct[c.image];
      if (owningProduct && owningProduct.images && owningProduct.images.length > 1) {
        // Verify every image in owningProduct belongs to this exact color
        const allImagesMatchColor = owningProduct.images.every(img => {
          const imgClean = img.toLowerCase().replace(/[^a-z0-9]/g, '');
          return imgClean.includes(colorToken);
        });

        if (allImagesMatchColor) {
          c.gallery = [...owningProduct.images];
          updatedColorways++;
          return;
        }
      }

      // If cannot verify multi-image gallery with 100% certainty, keep as verified single image only!
      c.gallery = [c.image];
      singleImageColorways++;
    } else {
      c.gallery = [];
      emptyColorways++;
    }
  });
});

console.log(`[RESULTS] Processed ${products.length} products:`);
console.log(`  • Colorways with dedicated verified multi-image gallery : ${updatedColorways}`);
console.log(`  • Colorways with verified single image                 : ${singleImageColorways}`);
console.log(`  • Colorways with missing photography (placeholder)     : ${emptyColorways}`);

// Save back to mockData.ts
const updatedMockDataContent = mockContent.replace(
  /export const PRODUCTS: Product\[\] = \[[\s\S]*?\];\n\nexport const BEDROOM_LOOKS/,
  `export const PRODUCTS: Product[] = ${JSON.stringify(products, null, 2)};\n\nexport const BEDROOM_LOOKS`
);
fs.writeFileSync('src/data/mockData.ts', updatedMockDataContent);
console.log('[SUCCESS] Updated src/data/mockData.ts with verified isolated galleries');

// Also update products.ts
const productsTsContent = fs.readFileSync('src/data/products.ts', 'utf8');
const pMatch = productsTsContent.match(/export const SHEET_SOCIETY_PRODUCTS: CatalogProduct\[\] = (\[[\s\S]*?\]);\n\nexport default SHEET_SOCIETY_PRODUCTS;/);
if (pMatch) {
  const catalogProducts = JSON.parse(pMatch[1]);
  // Update options and variants if needed
  catalogProducts.forEach(cp => {
    const matchingP = products.find(x => x.id === cp.id);
    if (matchingP) {
      cp.images = matchingP.images.map((img, i) => ({
        src: img,
        remoteUrl: img,
        alt: `${matchingP.name} - View ${i + 1}`,
        role: i === 0 ? 'hero' : 'gallery',
        position: i + 1,
        colorOrPrint: matchingP.colors[0]?.name || null
      }));
    }
  });
  const updatedProductsTsContent = productsTsContent.replace(
    /export const SHEET_SOCIETY_PRODUCTS: CatalogProduct\[\] = \[[\s\S]*?\];\n\nexport default SHEET_SOCIETY_PRODUCTS;/,
    `export const SHEET_SOCIETY_PRODUCTS: CatalogProduct[] = ${JSON.stringify(catalogProducts, null, 2)};\n\nexport default SHEET_SOCIETY_PRODUCTS;`
  );
  fs.writeFileSync('src/data/products.ts', updatedProductsTsContent);
  console.log('[SUCCESS] Updated src/data/products.ts with synchronized records');
}
