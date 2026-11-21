/**
 * MORFE - Phase 3 Catalogue Normalization & Variant Availability Script
 *
 * 1. Normalizes raw 'Default Title' entries in mockData.ts to clean domain size values.
 * 2. Injects authentic Sheet Society unavailable variant data into products and colorways.
 * 3. Preserves all verified pricing, images, and product metadata.
 */

const fs = require('fs');
const path = require('path');

const mockPath = path.join(__dirname, '..', 'src', 'data', 'mockData.ts');
const rawMockContent = fs.readFileSync(mockPath, 'utf8');

const pMatch = rawMockContent.match(/export const PRODUCTS: Product\[\] = (\[[\s\S]*?\]);\n\nexport const BEDROOM_LOOKS/);
if (!pMatch) {
  console.error('[FAIL] Could not match PRODUCTS array in mockData.ts');
  process.exit(1);
}

const products = JSON.parse(pMatch[1]);
console.log(`[INFO] Loaded ${products.length} products from mockData.ts`);

// 1. Normalization of 11 products with 'Default Title'
let normalizedDefaultTitleCount = 0;
products.forEach(p => {
  if (p.sizes && p.sizes.includes('Default Title')) {
    normalizedDefaultTitleCount++;
    if (p.category === 'Pillowcases') {
      p.sizes = ['European (65x65cm)'];
      p.dimensions = { 'European (65x65cm)': '65cm x 65cm' };
      p.variantPrices = { 'European (65x65cm)': p.price };
    } else if (p.category === 'Bed Sheets & Sets') {
      p.sizes = ['Standard Set'];
      p.dimensions = { 'Standard Set': 'Fitted Sheet, Flat Sheet & 2 Pillowcases' };
      p.variantPrices = { 'Standard Set': p.price };
    } else {
      p.sizes = ['One Size'];
      p.dimensions = { 'One Size': 'Standard sizing' };
      p.variantPrices = { 'One Size': p.price };
    }
  }
});

console.log(`[PASS] Normalized ${normalizedDefaultTitleCount} products with 'Default Title'`);

// 2. Map of Authentic Unavailable Variants from raw_sheetsociety_products.json
const authenticUnavailable = {
  'corduroy-quilt-cover-olive': {
    colorMap: { 'Olive': ['Double', 'King'] },
    unavail: ['Double', 'King']
  },
  'corduroy-quilt-cover-terracotta': {
    colorMap: { 'Terracotta': ['Single'] },
    unavail: ['Single']
  },
  'linen-quilt-cover-warm-white': {
    colorMap: { 'Warm White': ['Double', 'Queen', 'King', 'Super King'] },
    unavail: ['Double', 'Queen', 'King', 'Super King']
  },
  'linen-quilt-cover-sage': {
    colorMap: { 'Sage': ['Single'] },
    unavail: ['Single']
  },
  'chambray-linen-quilt-cover-oatmeal': {
    colorMap: { 'Oatmeal': ['Single'] },
    unavail: ['Single']
  },
  'organic-cotton-quilt-cover-bay-blue': {
    colorMap: { 'Bay Blue': ['Super King'] },
    unavail: ['Super King']
  },
  'flannelette-quilt-cover-blythe-stripe': {
    colorMap: { 'Blythe Stripe': ['King'] },
    unavail: ['King']
  },
  'linen-fitted-sheet-warm-white': {
    colorMap: { 'Warm White': ['King Single', 'Double', 'Queen', 'King', 'Super King'] },
    unavail: ['King Single', 'Double', 'Queen', 'King', 'Super King']
  },
  'flannelette-fitted-sheet-blythe-stripe': {
    colorMap: { 'Blythe Stripe': ['Double', 'King', 'Super King'] },
    unavail: ['Double', 'King', 'Super King']
  },
  'linen-flat-sheet-warm-white': {
    colorMap: { 'Warm White': ['Double', 'King', 'Super King'] },
    unavail: ['Double', 'King', 'Super King']
  },
  'linen-flat-sheet-marshmallow': {
    colorMap: { 'Marshmallow': ['King'] },
    unavail: ['King']
  },
  'flannelette-flat-sheet-blythe-stripe': {
    colorMap: { 'Blythe Stripe': ['Single'] },
    unavail: ['Single']
  },
  'linen-pillowcases-warm-white': {
    colorMap: { 'Warm White': ['Standard Size'] },
    unavail: ['Standard Size']
  },
  'flannelette-bed-cover-jimmy-stripe': {
    colorMap: { 'Jimmy Stripe': ['Single/King Single', 'Double/Queen'] },
    unavail: ['Single/King Single', 'Double/Queen']
  },
  'flannelette-blanket-jimmy-stripe': {
    colorMap: { 'Jimmy Stripe': ['Small', 'Medium - Large'] },
    unavail: ['Small', 'Medium - Large']
  }
};

// Also correlate colourway cross-availability across siblings:
// E.g. corduroy-quilt-cover-russet has colors Russet, Hunter-green, Olive, Terracotta.
// When customer selects 'Olive', 'Double' and 'King' must be unavailable!
const corduroyColorMap = {
  'Olive': ['Double', 'King'],
  'Terracotta': ['Single']
};

const linenQuiltColorMap = {
  'Warm White': ['Double', 'Queen', 'King', 'Super King'],
  'Sage': ['Single'],
  'Oatmeal': ['Single']
};

const linenFittedColorMap = {
  'Warm White': ['King Single', 'Double', 'Queen', 'King', 'Super King']
};

const linenFlatColorMap = {
  'Warm White': ['Double', 'King', 'Super King'],
  'Marshmallow': ['King']
};

let availabilityInjectedCount = 0;
products.forEach(p => {
  // Check direct product match
  if (authenticUnavailable[p.id]) {
    p.colorUnavailableSizes = authenticUnavailable[p.id].colorMap;
    p.unavailableSizes = authenticUnavailable[p.id].unavail;
    availabilityInjectedCount++;
  }

  // Cross-colorway mapping for corduroy quilt covers
  if (p.id.includes('corduroy-quilt-cover')) {
    p.colorUnavailableSizes = {
      ...(p.colorUnavailableSizes || {}),
      ...corduroyColorMap
    };
    if (p.colors[0] && corduroyColorMap[p.colors[0].name]) {
      p.unavailableSizes = corduroyColorMap[p.colors[0].name];
    }
  }

  // Cross-colorway mapping for linen quilt covers
  if (p.id.includes('linen-quilt-cover') || p.id === 'chambray-linen-quilt-cover-oatmeal') {
    p.colorUnavailableSizes = {
      ...(p.colorUnavailableSizes || {}),
      ...linenQuiltColorMap
    };
    if (p.colors[0] && linenQuiltColorMap[p.colors[0].name]) {
      p.unavailableSizes = linenQuiltColorMap[p.colors[0].name];
    }
  }

  // Cross-colorway mapping for linen fitted sheets
  if (p.id.includes('linen-fitted-sheet')) {
    p.colorUnavailableSizes = {
      ...(p.colorUnavailableSizes || {}),
      ...linenFittedColorMap
    };
    if (p.colors[0] && linenFittedColorMap[p.colors[0].name]) {
      p.unavailableSizes = linenFittedColorMap[p.colors[0].name];
    }
  }

  // Cross-colorway mapping for linen flat sheets
  if (p.id.includes('linen-flat-sheet')) {
    p.colorUnavailableSizes = {
      ...(p.colorUnavailableSizes || {}),
      ...linenFlatColorMap
    };
    if (p.colors[0] && linenFlatColorMap[p.colors[0].name]) {
      p.unavailableSizes = linenFlatColorMap[p.colors[0].name];
    }
  }
});

console.log(`[PASS] Injected authentic Sheet Society unavailable sizes across products and colourway siblings.`);

// Replace PRODUCTS array in mockData.ts
const updatedProductsJson = JSON.stringify(products, null, 2);
const updatedMockContent = rawMockContent.replace(
  /export const PRODUCTS: Product\[\] = \[[\s\S]*?\];\n\nexport const BEDROOM_LOOKS/,
  `export const PRODUCTS: Product[] = ${updatedProductsJson};\n\nexport const BEDROOM_LOOKS`
);

fs.writeFileSync(mockPath, updatedMockContent, 'utf8');
console.log(`[SUCCESS] Written updated mockData.ts with normalized sizes and authentic variant availability!`);
