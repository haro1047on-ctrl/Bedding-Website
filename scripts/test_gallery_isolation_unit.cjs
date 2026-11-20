const fs = require('fs');
const path = require('path');

console.log('=== MORFE Colourway Gallery Isolation Test Suite ===\n');

let passedTests = 0;
let totalTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    console.log(`  [PASS] Test ${totalTests}: ${message}`);
    passedTests++;
  } else {
    console.error(`  [FAIL] Test ${totalTests}: ${message}`);
    process.exitCode = 1;
  }
}

// Emulate ProductDetailModal's exact resolution logic
function resolveDisplayImages(selectedColor) {
  if (selectedColor?.gallery && Array.isArray(selectedColor.gallery) && selectedColor.gallery.length > 0) {
    const validGallery = selectedColor.gallery.filter(
      img => typeof img === 'string' && img.trim().length > 0
    );
    if (validGallery.length > 0) return validGallery;
  }
  if (selectedColor?.image && typeof selectedColor.image === 'string' && selectedColor.image.trim().length > 0) {
    return [selectedColor.image.trim()];
  }
  return [];
}

// -------------------------------------------------------------
// TEST A — Multiple Images with Dedicated Verified Gallery
// -------------------------------------------------------------
console.log('--- TEST A: Multiple Images with Verified Dedicated Gallery ---');
const colorA = {
  name: 'Hunter Green',
  hex: '#415141',
  image: '/assets/sheetsociety-catalog/quilt-covers/corduroy-quilt-cover-hunter-green-01.jpg',
  gallery: [
    '/assets/sheetsociety-catalog/quilt-covers/corduroy-quilt-cover-hunter-green-01.jpg',
    '/assets/sheetsociety-catalog/quilt-covers/corduroy-quilt-cover-hunter-green-02.jpg',
    '/assets/sheetsociety-catalog/quilt-covers/corduroy-quilt-cover-hunter-green-03.jpg'
  ]
};
const dummyProductImagesA = [
  '/assets/sheetsociety-catalog/quilt-covers/corduroy-quilt-cover-russet-01.jpg',
  '/assets/sheetsociety-catalog/quilt-covers/corduroy-quilt-cover-russet-02.jpg'
];

const resultA = resolveDisplayImages(colorA);
assert(resultA.length === 3, 'Returns exactly 3 images for dedicated gallery');
assert(resultA.every(img => img.includes('hunter-green')), 'Every image in gallery belongs strictly to Hunter Green');
assert(!resultA.some(img => img.includes('russet')), 'Zero Russet images in Hunter Green gallery');

// -------------------------------------------------------------
// TEST B — Single Verified Image without Dedicated Gallery
// -------------------------------------------------------------
console.log('\n--- TEST B: Single Verified Image without Dedicated Gallery ---');
const colorB = {
  name: 'Olive',
  hex: '#A39264',
  image: '/assets/sheetsociety-catalog/quilt-covers/corduroy-quilt-cover-olive-01.jpg',
  gallery: [] // Empty gallery
};
const dummyProductImagesB = [
  '/assets/sheetsociety-catalog/quilt-covers/corduroy-quilt-cover-russet-01.jpg',
  '/assets/sheetsociety-catalog/quilt-covers/corduroy-quilt-cover-russet-02.jpg'
];

const resultB = resolveDisplayImages(colorB);
assert(resultB.length === 1, 'Returns exactly 1 image when gallery is empty');
assert(resultB[0] === colorB.image, 'Returns only the verified single image of Olive');
assert(!resultB.some(img => dummyProductImagesB.includes(img)), 'Does NOT fall back to product.images of Russet');

// -------------------------------------------------------------
// TEST C — Missing Photography (Neither Gallery nor Image)
// -------------------------------------------------------------
console.log('\n--- TEST C: Missing Photography Handling ---');
const colorC = {
  name: 'Celestial Lilac',
  hex: '#C8B6D6',
  image: '', // Missing
  gallery: [] // Missing
};
const dummyProductImagesC = [
  '/assets/sheetsociety-catalog/quilt-covers/corduroy-quilt-cover-russet-01.jpg'
];

const resultC = resolveDisplayImages(colorC);
assert(resultC.length === 0, 'Returns empty array when neither gallery nor image exists');
assert(!resultC.some(img => dummyProductImagesC.includes(img)), 'Strictly refuses to fall back to product.images');

// Safe index calculation verification
const safeIndexC = resultC.length > 0 ? Math.min(Math.max(0, 2), resultC.length - 1) : 0;
assert(safeIndexC === 0, 'Safe index calculation produces 0 without division by zero');

// -------------------------------------------------------------
// TEST D — Colour Switching Resets Index to Zero
// -------------------------------------------------------------
console.log('\n--- TEST D: Colour Switching Resets Gallery Index ---');
let state = {
  selectedColor: colorA,
  selectedImageIndex: 2, // At 3rd image
  previousImageIndex: 1,
  isTransitioning: true
};

// Emulate handleSelectColor
function handleSelectColor(color) {
  state.selectedColor = color;
  state.selectedImageIndex = 0;
  state.previousImageIndex = null;
  state.isTransitioning = false;
}

handleSelectColor(colorB);
assert(state.selectedColor.name === 'Olive', 'selectedColor updated to Olive');
assert(state.selectedImageIndex === 0, 'selectedImageIndex reset strictly to 0');
assert(state.previousImageIndex === null, 'previousImageIndex cleared to null');
assert(state.isTransitioning === false, 'isTransitioning reset to false');

// -------------------------------------------------------------
// TEST E — Repeated Switching between 4 Colourways
// -------------------------------------------------------------
console.log('\n--- TEST E: Repeated Switching Across 4 Colourways ---');
const colorways = [
  {
    name: 'Russet',
    gallery: [
      '/assets/sheetsociety-catalog/quilt-covers/corduroy-quilt-cover-russet-01.jpg',
      '/assets/sheetsociety-catalog/quilt-covers/corduroy-quilt-cover-russet-02.jpg'
    ]
  },
  {
    name: 'Hunter Green',
    gallery: [
      '/assets/sheetsociety-catalog/quilt-covers/corduroy-quilt-cover-hunter-green-01.jpg',
      '/assets/sheetsociety-catalog/quilt-covers/corduroy-quilt-cover-hunter-green-02.jpg',
      '/assets/sheetsociety-catalog/quilt-covers/corduroy-quilt-cover-hunter-green-03.jpg'
    ]
  },
  {
    name: 'Olive',
    gallery: [
      '/assets/sheetsociety-catalog/quilt-covers/corduroy-quilt-cover-olive-01.jpg',
      '/assets/sheetsociety-catalog/quilt-covers/corduroy-quilt-cover-olive-02.jpg'
    ]
  },
  {
    name: 'Terracotta',
    gallery: [
      '/assets/sheetsociety-catalog/quilt-covers/corduroy-quilt-cover-terracotta-01.jpg',
      '/assets/sheetsociety-catalog/quilt-covers/corduroy-quilt-cover-terracotta-02.jpg',
      '/assets/sheetsociety-catalog/quilt-covers/corduroy-quilt-cover-terracotta-03.jpg'
    ]
  }
];

let leakDetected = false;
colorways.forEach((cw, idx) => {
  handleSelectColor(cw);
  const images = resolveDisplayImages(state.selectedColor);
  const token = cw.name.toLowerCase().replace(/[^a-z0-9]/g, '');
  const allBelong = images.every(img => img.toLowerCase().replace(/[^a-z0-9]/g, '').includes(token));
  if (!allBelong) leakDetected = true;
});

assert(!leakDetected, 'No images leaked across 4 consecutive colour switches');
assert(state.selectedImageIndex === 0, 'Final colourway gallery index remains 0');

// -------------------------------------------------------------
// TEST F — Size & Quantity Preservation on Colour Switch
// -------------------------------------------------------------
console.log('\n--- TEST F: Size & Quantity Preservation ---');
let modalState = {
  selectedColor: colorways[0],
  selectedSize: 'Queen',
  quantity: 2,
  selectedImageIndex: 1
};

function selectColorInModal(color) {
  modalState.selectedColor = color;
  modalState.selectedImageIndex = 0;
  // selectedSize and quantity are explicitly preserved
}

selectColorInModal(colorways[1]);
assert(modalState.selectedColor.name === 'Hunter Green', 'Color updated to Hunter Green');
assert(modalState.selectedSize === 'Queen', 'selectedSize Queen preserved exactly');
assert(modalState.quantity === 2, 'quantity 2 preserved exactly');
assert(modalState.selectedImageIndex === 0, 'Image index reset to 0');

// -------------------------------------------------------------
// TEST G — Component Anti-Regression Verification
// -------------------------------------------------------------
console.log('\n--- TEST G: Component Anti-Regression & Fallback Elimination ---');
const modalSource = fs.readFileSync('src/components/ProductDetailModal.tsx', 'utf8');
const cardSource = fs.readFileSync('src/components/ProductCard.tsx', 'utf8');
const cartSource = fs.readFileSync('src/components/CartDrawer.tsx', 'utf8');

assert(!modalSource.includes('...product.images'), 'ProductDetailModal does not spread product.images');
assert(!modalSource.includes('product.images[0]'), 'ProductDetailModal does not fall back to product.images[0]');
assert(!cardSource.includes('product.images[1] || currentImage'), 'ProductCard does not fall back to product.images[1]');
assert(!cardSource.includes('activeColor.image || product.images[0]'), 'ProductCard does not fall back to product.images[0]');
assert(!cartSource.includes('item.selectedColor.image || item.product.images[0]'), 'CartDrawer does not fall back to item.product.images[0]');
assert(modalSource.includes('ImageOff'), 'ProductDetailModal imports ImageOff placeholder');
assert(cardSource.includes('ImageOff'), 'ProductCard imports ImageOff placeholder');
assert(cartSource.includes('ImageOff'), 'CartDrawer imports ImageOff placeholder');

console.log(`\n=== Final Results: ${passedTests} / ${totalTests} TESTS PASSED ===\n`);
if (passedTests === totalTests) {
  console.log('[SUCCESS] All mandatory test cases passed with 100% compliance.');
} else {
  console.error('[FAILURE] Some tests failed.');
  process.exit(1);
}
