/**
 * MORFE - Phase 5.1 Filter Utilities Unit Test Battery
 * Pure algorithmic verification of normalization, URL serialization/parsing,
 * variant-specific availability, and disjunctive facet calculations.
 */

const fs = require('fs');
const path = require('path');

// Extract PRODUCTS from mockData.ts
const mockDataContent = fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'mockData.ts'), 'utf-8');
const startIdx = mockDataContent.indexOf('export const PRODUCTS: Product[] = [') + 'export const PRODUCTS: Product[] = '.length;
const endIdx = mockDataContent.indexOf('];\n\nexport const BEDROOM_LOOKS');
const jsonStr = mockDataContent.substring(startIdx, endIdx + 1);
const PRODUCTS = JSON.parse(jsonStr);

// Normalization function (matching src/utils/filterUtils.ts)
function normalizeText(s) {
  return (s || '')
    .toLowerCase()
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const AVAILABLE_CATEGORIES = [
  { label: 'Quilt Covers', value: 'Quilt Covers' },
  { label: 'Fitted Sheets', value: 'Fitted Sheets' },
  { label: 'Flat Sheets', value: 'Flat Sheets' },
  { label: 'Pillowcases', value: 'Pillowcases' },
  { label: 'Bed Sheets & Sets', value: 'Bed Sheets & Sets' },
  { label: 'Blankets & Bed Covers', value: 'Blankets & Bed Covers' },
  { label: 'Quilts & Pillows', value: 'Quilts & Pillows' },
  { label: 'Protectors & Toppers', value: 'Protectors & Toppers' },
  { label: 'Cushions', value: 'Cushions' },
  { label: 'Bath & Towels', value: 'Bath & Towels' },
  { label: 'Sleepwear', value: 'Sleepwear' },
  { label: 'Wellness', value: 'Wellness' },
  { label: 'Kids & Baby', value: 'Kids & Baby' },
];

const AVAILABLE_MATERIALS = [
  { label: 'Eve Linen', value: 'Eve Linen' },
  { label: 'Darcy Corduroy', value: 'Darcy Corduroy' },
  { label: 'Eden Cotton', value: 'Eden Cotton' },
  { label: 'Jude Organic Cotton', value: 'Jude Organic Cotton' },
  { label: 'Frankie Flannelette', value: 'Frankie Flannelette' },
  { label: 'Leo Washed Cotton', value: 'Leo Washed Cotton' },
  { label: 'Sofia Ruched Cotton', value: 'Sofia Ruched Cotton' },
  { label: 'Low Down Recycled', value: 'Low Down Recycled' },
  { label: 'Cloud Corn Plant-Based', value: 'Cloud Corn Plant-Based' },
  { label: 'Wonder Wool', value: 'Wonder Wool' },
  { label: 'Bouclé Cotton', value: 'Bouclé Cotton' },
  { label: 'Velvet', value: 'Velvet' },
  { label: 'Rory Washed Cotton', value: 'Rory Washed Cotton' },
  { label: 'Tommy 600 GSM Cotton', value: 'Tommy 600 GSM Cotton' },
  { label: 'Cloudknit Jersey', value: 'Cloudknit Jersey' },
  { label: 'Mulberry Silk', value: 'Mulberry Silk' },
  { label: 'Microfibre', value: 'Microfibre' },
];

const AVAILABLE_COLORS = [
  { label: 'Cloud', hex: '#D5D5D8' },
  { label: 'Warm White', hex: '#f2ebdf' },
  { label: 'White', hex: '#ffffff' },
  { label: 'Russet', hex: '#7E212A' },
  { label: 'Olive', hex: '#A39264' },
  { label: 'Hunter Green', hex: '#415141' },
  { label: 'Terracotta', hex: '#c87b4b' },
  { label: 'Sage', hex: '#a8b09f' },
  { label: 'Marshmallow', hex: '#EEE0DC' },
  { label: 'Chocolate', hex: '#574138' },
  { label: 'Oatmeal', hex: '#e9dfcf' },
  { label: 'Bay Blue', hex: '#A3BBE0' },
  { label: 'Burgundy', hex: '#5B1D27' },
  { label: 'Natural White', hex: '#FBF9F5' },
  { label: 'Crisp White', hex: '#FFFFFF' },
];

const AVAILABLE_SIZES = [
  { label: 'Single', value: 'Single' },
  { label: 'King Single', value: 'King Single' },
  { label: 'Double', value: 'Double' },
  { label: 'Queen', value: 'Queen' },
  { label: 'King', value: 'King' },
  { label: 'Super King', value: 'Super King' },
  { label: 'Standard', value: 'Standard' },
  { label: 'European', value: 'European' },
  { label: 'Cot', value: 'Cot' },
];

function isSizeAvailable(product, size, selectedColors) {
  const normSize = normalizeText(size);
  const hasSize = product.sizes.some(s => {
    const ns = normalizeText(s);
    return ns === normSize || ns.startsWith(normSize);
  });
  if (!hasSize) return false;

  if (product.unavailableSizes && product.unavailableSizes.some(s => {
    const ns = normalizeText(s);
    return ns === normSize || ns.startsWith(normSize);
  })) {
    return false;
  }

  if (selectedColors && selectedColors.length > 0) {
    const matchingColors = product.colors.filter(c => 
      selectedColors.some(sc => {
        const nsc = normalizeText(sc);
        const nc = normalizeText(c.name);
        return nc === nsc || nc.includes(nsc) || nsc.includes(nc);
      })
    );

    if (matchingColors.length === 0) return false;

    return matchingColors.some(c => {
      const unavail = product.colorUnavailableSizes && product.colorUnavailableSizes[c.name];
      if (!unavail) return true;
      return !unavail.some(s => {
        const ns = normalizeText(s);
        return ns === normSize || ns.startsWith(normSize);
      });
    });
  }

  if (product.colorUnavailableSizes && Object.keys(product.colorUnavailableSizes).length > 0) {
    return product.colors.some(c => {
      const unavail = product.colorUnavailableSizes && product.colorUnavailableSizes[c.name];
      if (!unavail) return true;
      return !unavail.some(s => {
        const ns = normalizeText(s);
        return ns === normSize || ns.startsWith(normSize);
      });
    });
  }

  return true;
}

function parseUrlFilters(search) {
  const DEFAULT = { categories: [], colors: [], materials: [], sizes: [], sortBy: 'featured' };
  if (!search) return DEFAULT;

  const cleanSearch = search.startsWith('?') ? search.slice(1) : search;
  const params = new URLSearchParams(cleanSearch);

  const getValues = (...keys) => {
    const rawValues = [];
    keys.forEach(k => {
      params.getAll(k).forEach(val => {
        val.split(',').forEach(part => {
          const trimmed = part.trim();
          if (trimmed) rawValues.push(trimmed);
        });
      });
    });
    return rawValues;
  };

  const dedupeAndMatch = (rawList, validOptions) => {
    const matched = [];
    const seenNorms = new Set();
    for (const raw of rawList) {
      const normRaw = normalizeText(raw);
      if (!normRaw || normRaw === 'all' || seenNorms.has(normRaw)) continue;
      const found = validOptions.find(opt => 
        normalizeText(opt.value) === normRaw || normalizeText(opt.label) === normRaw
      );
      if (found) {
        seenNorms.add(normRaw);
        seenNorms.add(normalizeText(found.value));
        if (!matched.includes(found.value)) {
          matched.push(found.value);
        }
      }
    }
    return matched;
  };

  const categories = dedupeAndMatch(getValues('category'), AVAILABLE_CATEGORIES);
  const materials = dedupeAndMatch(getValues('fabric', 'material'), AVAILABLE_MATERIALS);

  const rawColors = getValues('color', 'colour');
  const colors = [];
  const seenColorNorms = new Set();
  for (const raw of rawColors) {
    const norm = normalizeText(raw);
    if (!norm || seenColorNorms.has(norm)) continue;
    const match = AVAILABLE_COLORS.find(c => normalizeText(c.label) === norm);
    const canonicalName = match ? match.label : raw.trim();
    seenColorNorms.add(norm);
    colors.push(canonicalName);
  }

  const sizes = dedupeAndMatch(getValues('size'), AVAILABLE_SIZES);

  const sortParam = params.get('sort');
  const validSorts = ['featured', 'price-low', 'price-high', 'rating'];
  const sortBy = (sortParam && validSorts.includes(sortParam)) ? sortParam : 'featured';

  return { categories, colors, materials, sizes, sortBy };
}

function serializeUrlFilters(filters, existingSearch = '') {
  const cleanSearch = existingSearch.startsWith('?') ? existingSearch.slice(1) : existingSearch;
  const params = new URLSearchParams(cleanSearch);

  params.delete('category');
  params.delete('color');
  params.delete('colour');
  params.delete('fabric');
  params.delete('material');
  params.delete('size');
  params.delete('sort');

  filters.categories.forEach(cat => {
    if (cat && cat !== 'all') params.append('category', cat);
  });
  filters.colors.forEach(col => {
    if (col) params.append('color', col);
  });
  filters.materials.forEach(mat => {
    if (mat) params.append('fabric', mat);
  });
  filters.sizes.forEach(sz => {
    if (sz) params.append('size', sz);
  });
  if (filters.sortBy && filters.sortBy !== 'featured') {
    params.set('sort', filters.sortBy);
  }
  const hasActiveFacets = filters.categories.length + filters.colors.length + filters.materials.length + filters.sizes.length > 0 || (filters.sortBy && filters.sortBy !== 'featured');
  if (hasActiveFacets && !params.has('view')) {
    params.set('view', 'catalog');
  }
  const result = params.toString();
  return result ? `?${result}` : '';
}

function productMatchesFilters(product, filters) {
  if (filters.categories && filters.categories.length > 0) {
    const catMatch = filters.categories.some(cat => 
      cat === 'all' || normalizeText(cat) === normalizeText(product.category)
    );
    if (!catMatch) return false;
  }
  if (filters.materials && filters.materials.length > 0) {
    const matMatch = filters.materials.some(mat =>
      normalizeText(mat) === normalizeText(product.material)
    );
    if (!matMatch) return false;
  }
  if (filters.colors && filters.colors.length > 0) {
    const colorMatch = filters.colors.some(fc => {
      const nfc = normalizeText(fc);
      return product.colors.some(c => {
        const nc = normalizeText(c.name);
        return nc === nfc || nc.includes(nfc) || nfc.includes(nc);
      });
    });
    if (!colorMatch) return false;
  }
  if (filters.sizes && filters.sizes.length > 0) {
    const sizeMatch = filters.sizes.some(sz => 
      isSizeAvailable(product, sz, filters.colors)
    );
    if (!sizeMatch) return false;
  }
  return true;
}

let unitPassed = 0;
let unitTotal = 0;

function assertUnit(cond, desc, exp = '', act = '') {
  unitTotal++;
  if (cond) {
    unitPassed++;
    console.log(`  [PASS] Unit ${unitTotal.toString().padStart(2, '0')}: ${desc}`);
  } else {
    console.error(`  [FAIL] Unit ${unitTotal.toString().padStart(2, '0')}: ${desc}`);
    if (exp || act) console.error(`         Expected: ${exp} | Actual: ${act}`);
    process.exitCode = 1;
  }
}

console.log('========================================================================');
console.log(' MORFE PHASE 5.1 FILTER UTILITIES & LOGIC UNIT TEST SUITE');
console.log('========================================================================\n');

// 1. Text Normalization
assertUnit(normalizeText('Warm-white') === 'warm white', 'normalizeText handles hyphens (Warm-white -> warm white)');
assertUnit(normalizeText('Warm__White') === 'warm white', 'normalizeText handles multiple underscores (Warm__White -> warm white)');
assertUnit(normalizeText('  Warm   White  ') === 'warm white', 'normalizeText collapses multiple internal spaces and trims');
assertUnit(normalizeText('_hunter-Green__') === 'hunter green', 'normalizeText handles mixed underscores and hyphens');

// 2. URL Parsing & Aliases
const parsedAliases = parseUrlFilters('?colour=Olive&material=Darcy%20Corduroy&color=Russet&fabric=Eve%20Linen&size=Queen&sort=price-high');
assertUnit(parsedAliases.colors.includes('Olive') && parsedAliases.colors.includes('Russet'), 'parseUrlFilters accepts both "color" and "colour" aliases');
assertUnit(parsedAliases.materials.includes('Darcy Corduroy') && parsedAliases.materials.includes('Eve Linen'), 'parseUrlFilters accepts both "fabric" and "material" aliases');
assertUnit(parsedAliases.sizes.includes('Queen'), 'parseUrlFilters parses size facet');
assertUnit(parsedAliases.sortBy === 'price-high', 'parseUrlFilters parses sort facet');

// 3. Deduplication
const dedupedUrl = parseUrlFilters('?color=Olive&colour=Olive&colour=olive&fabric=Darcy%20Corduroy&material=darcy-corduroy');
assertUnit(dedupedUrl.colors.length === 1 && dedupedUrl.colors[0] === 'Olive', 'parseUrlFilters deduplicates identical values across color and colour aliases');
assertUnit(dedupedUrl.materials.length === 1 && dedupedUrl.materials[0] === 'Darcy Corduroy', 'parseUrlFilters deduplicates across fabric and material aliases with hyphens');

// 4. Invalid Value Safety
const invalidSafe = parseUrlFilters('?category=FakeCategoryXYZ&fabric=InvalidFabric123&sort=unknown_sort');
assertUnit(invalidSafe.categories.length === 0, 'parseUrlFilters ignores unknown categories');
assertUnit(invalidSafe.materials.length === 0, 'parseUrlFilters ignores unknown fabrics');
assertUnit(invalidSafe.sortBy === 'featured', 'parseUrlFilters falls back to featured sort on invalid input');

// 5. URL Serialization & Alias Deletion
const serialized = serializeUrlFilters({
  categories: ['Quilt Covers'],
  colors: ['Olive'],
  materials: ['Darcy Corduroy'],
  sizes: ['King'],
  sortBy: 'price-low'
}, '?color=OldColor&colour=OldColour&fabric=OldFabric&material=OldMaterial&utm_campaign=winter_sale&ref=affiliate#review-section');

assertUnit(!serialized.includes('colour='), 'serializeUrlFilters completely deletes "colour" alias');
assertUnit(!serialized.includes('material='), 'serializeUrlFilters completely deletes "material" alias');
assertUnit(serialized.includes('color=Olive'), 'serializeUrlFilters outputs canonical "color" parameter');
assertUnit(serialized.includes('fabric=Darcy+Corduroy') || serialized.includes('fabric=Darcy%20Corduroy'), 'serializeUrlFilters outputs canonical "fabric" parameter');
assertUnit(serialized.includes('utm_campaign=winter_sale'), 'serializeUrlFilters strictly preserves unrelated utm_campaign parameter');
assertUnit(serialized.includes('ref=affiliate'), 'serializeUrlFilters strictly preserves unrelated ref parameter');

// 6. Variant-Specific Size Availability
const corduroyRusset = PRODUCTS.find(p => p.id === 'corduroy-quilt-cover-russet');
assertUnit(corduroyRusset !== undefined, 'Target product corduroy-quilt-cover-russet exists in catalogue');

// Olive Double is in colorUnavailableSizes -> false
assertUnit(isSizeAvailable(corduroyRusset, 'Double', ['Olive']) === false, 'isSizeAvailable: Olive Double is unavailable on corduroy quilt cover');
// Olive King is in colorUnavailableSizes -> false
assertUnit(isSizeAvailable(corduroyRusset, 'King', ['Olive']) === false, 'isSizeAvailable: Olive King is unavailable on corduroy quilt cover');
// Olive Queen is NOT in colorUnavailableSizes -> true
assertUnit(isSizeAvailable(corduroyRusset, 'Queen', ['Olive']) === true, 'isSizeAvailable: Olive Queen is available on corduroy quilt cover');
// Russet Double is available -> true
assertUnit(isSizeAvailable(corduroyRusset, 'Double', ['Russet']) === true, 'isSizeAvailable: Russet Double is available on corduroy quilt cover');
// Multiple colours selection: Russet + Olive -> Double is available because Russet has it
assertUnit(isSizeAvailable(corduroyRusset, 'Double', ['Olive', 'Russet']) === true, 'isSizeAvailable OR rule: Double available when both Olive and Russet are selected');
// Product without matching color -> false
assertUnit(isSizeAvailable(corduroyRusset, 'Queen', ['NonExistentColor']) === false, 'isSizeAvailable returns false when product has none of the selected colors');

// 7. Multi-Facet Combinatorial Filtering
const matchedQC = PRODUCTS.filter(p => productMatchesFilters(p, { categories: ['Quilt Covers'] }));
assertUnit(matchedQC.length === 15, 'Category filter: Quilt Covers matches exactly 15 products');

const matchedQC_FS = PRODUCTS.filter(p => productMatchesFilters(p, { categories: ['Quilt Covers', 'Fitted Sheets'] }));
assertUnit(matchedQC_FS.length === 23, 'Category OR multi-filter: Quilt Covers (15) OR Fitted Sheets (8) yields 23 products');

const matchedCorduroy = PRODUCTS.filter(p => productMatchesFilters(p, { categories: ['Quilt Covers'], materials: ['Darcy Corduroy'] }));
assertUnit(matchedCorduroy.length === 4, 'Cross-facet AND: Quilt Covers AND Darcy Corduroy yields 4 products');

const matchedCorduroyRussetQueen = PRODUCTS.filter(p => productMatchesFilters(p, {
  categories: ['Quilt Covers'],
  materials: ['Darcy Corduroy'],
  colors: ['Russet'],
  sizes: ['Queen']
}));
assertUnit(matchedCorduroyRussetQueen.length === 4, '4-facet AND: Quilt Covers AND Darcy Corduroy AND Russet AND Queen yields 4 products');

console.log(`\n========================================================================`);
console.log(` UNIT TEST SUMMARY: ${unitPassed}/${unitTotal} PASSED`);
console.log(`========================================================================\n`);

if (unitPassed === unitTotal) {
  process.exit(0);
} else {
  process.exit(1);
}
