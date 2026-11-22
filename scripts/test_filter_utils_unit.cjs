/**
 * MORFE - Phase 5.2 Filter Utilities & Logic Production Unit Test Battery
 *
 * Directly compiles and executes the actual exported production functions from:
 *   src/utils/filterUtils.ts
 *
 * Validates:
 *   1. normalizeText (edge cases: hyphens, underscores, multiple spaces, casing, symbols)
 *   2. parseUrlFilters (color/colour and fabric/material aliases, comma lists, repeated params,
 *      deduplication, rejection of unknown/invalid colours, default fallbacks)
 *   3. serializeUrlFilters (alias cleanup, canonical serialization, preservation of unrelated params and #hash)
 *   4. isSizeAvailable (variant availability, colorUnavailableSizes, multi-colour OR rule, unselected colour handling)
 *   5. productMatchesFilters (pure combinatorial filtering, OR within facet, AND across facets)
 *   6. computeFacetCounts (disjunctive faceting independently verified against a reference calculation across 10 scenarios)
 */

const path = require('path');
const esbuild = require('esbuild');

// ---------------------------------------------------------------------------
// 1. Direct Production Function Loader (No Duplicated Implementation)
// ---------------------------------------------------------------------------
function loadProductionModule(relPath) {
  const filePath = path.join(__dirname, '..', relPath);
  const result = esbuild.buildSync({
    entryPoints: [filePath],
    write: false,
    format: 'cjs',
    target: 'node18',
  });
  const mod = { exports: {} };
  const fn = new Function('module', 'exports', 'require', '__dirname', '__filename', result.outputFiles[0].text);
  fn(mod, mod.exports, require, path.dirname(filePath), path.basename(filePath));
  return mod.exports;
}

const filterUtils = loadProductionModule('src/utils/filterUtils.ts');
const mockData = loadProductionModule('src/data/mockData.ts');

const {
  normalizeText,
  isSizeAvailable,
  productMatchesFilters,
  computeFacetCounts,
  parseUrlFilters,
  serializeUrlFilters,
  AVAILABLE_CATEGORIES,
  AVAILABLE_MATERIALS,
  AVAILABLE_COLORS,
  AVAILABLE_SIZES,
  DEFAULT_FILTER_STATE,
} = filterUtils;

const PRODUCTS = mockData.PRODUCTS;

let totalUnitTests = 0;
let passedUnitTests = 0;

function assertUnit(condition, testName, expected = '', actual = '') {
  totalUnitTests++;
  if (condition) {
    console.log(`  [PASS] Unit ${totalUnitTests.toString().padStart(2, '0')}: ${testName}`);
    passedUnitTests++;
  } else {
    console.error(`  [FAIL] Unit ${totalUnitTests.toString().padStart(2, '0')}: ${testName}`);
    if (expected || actual) {
      console.error(`         Expected: ${expected}`);
      console.error(`         Actual:   ${actual}`);
    }
    process.exitCode = 1;
  }
}

console.log('========================================================================');
console.log(' MORFE PHASE 5.2 PRODUCTION FILTER UTILITIES UNIT TEST BATTERY');
console.log('========================================================================\n');

// =========================================================================
// SECTION 1: normalizeText Edge Cases
// =========================================================================
console.log('--- SECTION 1: normalizeText Production Function Edge Cases ---');

assertUnit(normalizeText('Warm-white') === 'warm white', 'normalizeText handles hyphens (Warm-white -> warm white)');
assertUnit(normalizeText('Warm__White') === 'warm white', 'normalizeText handles multiple underscores (Warm__White -> warm white)');
assertUnit(normalizeText('  Warm   White  ') === 'warm white', 'normalizeText collapses multiple internal spaces and trims');
assertUnit(normalizeText('__HUNTER---green__') === 'hunter green', 'normalizeText handles mixed underscores and hyphens');
assertUnit(normalizeText('') === '' && normalizeText(null) === '', 'normalizeText handles empty or null gracefully');

// =========================================================================
// SECTION 2: parseUrlFilters Production Function & Invalid Colour Rejection
// =========================================================================
console.log('\n--- SECTION 2: parseUrlFilters Production Function & Invalid Colour Parsing ---');

const resOliveColor = parseUrlFilters('?color=Olive');
assertUnit(resOliveColor.colors.length === 1 && resOliveColor.colors[0] === 'Olive', 'Accepts color=Olive -> canonical Olive');

const resOliveColour = parseUrlFilters('?colour=olive');
assertUnit(resOliveColour.colors.length === 1 && resOliveColour.colors[0] === 'Olive', 'Accepts colour=olive -> canonical Olive');

const resWarmWhite = parseUrlFilters('?color=WARM-WHITE');
assertUnit(resWarmWhite.colors.length === 1 && resWarmWhite.colors[0] === 'Warm White', 'Accepts color=WARM-WHITE -> canonical Warm White');

const resUnknownColor = parseUrlFilters('?color=UnknownColour123');
assertUnit(resUnknownColor.colors.length === 0, 'Ignores color=UnknownColour123 (invalid colours safely rejected)');

const resDedupeColor = parseUrlFilters('?color=Olive&colour=olive');
assertUnit(resDedupeColor.colors.length === 1 && resDedupeColor.colors[0] === 'Olive', 'Deduplicates color=Olive&colour=olive -> single Olive');

const resCommaUnknown = parseUrlFilters('?color=Olive,UnknownColour123');
assertUnit(resCommaUnknown.colors.length === 1 && resCommaUnknown.colors[0] === 'Olive', 'Comma-separated color=Olive,UnknownColour123 -> only canonical Olive');

const resFabric = parseUrlFilters('?fabric=Darcy%20Corduroy');
assertUnit(resFabric.materials.length === 1 && resFabric.materials[0] === 'Darcy Corduroy', 'Accepts fabric=Darcy Corduroy');

const resMaterial = parseUrlFilters('?material=darcy-corduroy');
assertUnit(resMaterial.materials.length === 1 && resMaterial.materials[0] === 'Darcy Corduroy', 'Accepts material alias with hyphen -> canonical Darcy Corduroy');

const resDedupeMaterial = parseUrlFilters('?fabric=Darcy%20Corduroy&material=darcy-corduroy');
assertUnit(resDedupeMaterial.materials.length === 1, 'Deduplicates identical selections across fabric and material aliases');

const resInvalidMaterial = parseUrlFilters('?fabric=FictionalFabric999');
assertUnit(resInvalidMaterial.materials.length === 0, 'Ignores unknown fabrics safely');

const resCategory = parseUrlFilters('?category=Quilt%20Covers');
assertUnit(resCategory.categories.length === 1 && resCategory.categories[0] === 'Quilt Covers', 'Accepts category=Quilt Covers');

const resInvalidCategory = parseUrlFilters('?category=NonExistentCategory');
assertUnit(resInvalidCategory.categories.length === 0, 'Ignores unknown categories safely');

const resSize = parseUrlFilters('?size=Queen');
assertUnit(resSize.sizes.length === 1 && resSize.sizes[0] === 'Queen', 'Accepts size=Queen');

const resInvalidSize = parseUrlFilters('?size=SuperMegaGigantic');
assertUnit(resInvalidSize.sizes.length === 0, 'Ignores unknown sizes safely');

const resSortPriceLow = parseUrlFilters('?sort=price-low');
assertUnit(resSortPriceLow.sortBy === 'price-low', 'Parses valid sort=price-low');

const resSortInvalid = parseUrlFilters('?sort=arbitrary-nonsense');
assertUnit(resSortInvalid.sortBy === 'featured', 'Falls back to default "featured" on invalid sort');

const resEmpty = parseUrlFilters('');
assertUnit(resEmpty.categories.length === 0 && resEmpty.colors.length === 0 && resEmpty.sortBy === 'featured', 'Returns default filter state on empty string');

// =========================================================================
// SECTION 3: serializeUrlFilters Production Function & Hash Preservation
// =========================================================================
console.log('\n--- SECTION 3: serializeUrlFilters Production Function & Hash Preservation ---');

const serializedAliased = serializeUrlFilters({
  ...DEFAULT_FILTER_STATE,
  colors: ['Olive'],
  materials: ['Darcy Corduroy'],
}, '?colour=olive&material=darcy-corduroy&utm_campaign=winter_sale&ref=affiliate#details');

assertUnit(!serializedAliased.includes('colour='), 'serializeUrlFilters completely deletes "colour" alias');
assertUnit(!serializedAliased.includes('material='), 'serializeUrlFilters completely deletes "material" alias');
assertUnit(serializedAliased.includes('color=Olive'), 'serializeUrlFilters outputs canonical "color" parameter');
assertUnit(serializedAliased.includes('fabric=Darcy+Corduroy') || serializedAliased.includes('fabric=Darcy%20Corduroy'), 'serializeUrlFilters outputs canonical "fabric" parameter');
assertUnit(serializedAliased.includes('utm_campaign=winter_sale'), 'serializeUrlFilters strictly preserves unrelated utm_campaign parameter');
assertUnit(serializedAliased.includes('ref=affiliate'), 'serializeUrlFilters strictly preserves unrelated ref parameter');
assertUnit(serializedAliased.endsWith('#details'), 'serializeUrlFilters strictly preserves URL hash (#details)');

const serializedCleared = serializeUrlFilters({
  ...DEFAULT_FILTER_STATE,
}, '?view=catalog&category=Quilt%20Covers&color=Olive&fabric=Darcy%20Corduroy&utm_campaign=winter_sale#details');

assertUnit(!serializedCleared.includes('category='), 'Clearing filters removes category parameter');
assertUnit(!serializedCleared.includes('color='), 'Clearing filters removes color parameter');
assertUnit(!serializedCleared.includes('fabric='), 'Clearing filters removes fabric parameter');
assertUnit(serializedCleared.includes('utm_campaign=winter_sale'), 'Clearing filters preserves unrelated parameters');
assertUnit(serializedCleared.endsWith('#details'), 'Clearing filters preserves URL hash (#details)');

// =========================================================================
// SECTION 4: isSizeAvailable Production Function with Inventory Provenance
// =========================================================================
console.log('\n--- SECTION 4: isSizeAvailable Production Function with Inventory Provenance ---');

const corduroyQuiltCover = PRODUCTS.find(p => p.id === 'corduroy-quilt-cover-russet');
assertUnit(!!corduroyQuiltCover, 'Target product corduroy-quilt-cover-russet exists in authentic catalogue');

assertUnit(isSizeAvailable(corduroyQuiltCover, 'Double', ['Olive']) === false, 'isSizeAvailable: Olive in Double is unavailable on corduroy quilt cover');
assertUnit(isSizeAvailable(corduroyQuiltCover, 'King', ['Olive']) === false, 'isSizeAvailable: Olive in King is unavailable on corduroy quilt cover');
assertUnit(isSizeAvailable(corduroyQuiltCover, 'Queen', ['Olive']) === true, 'isSizeAvailable: Olive in Queen is available on corduroy quilt cover');
assertUnit(isSizeAvailable(corduroyQuiltCover, 'Double', ['Russet']) === true, 'isSizeAvailable: Russet in Double is available on corduroy quilt cover');
assertUnit(isSizeAvailable(corduroyQuiltCover, 'Double', ['Olive', 'Russet']) === true, 'isSizeAvailable OR rule: Double available when both Olive and Russet are selected');
assertUnit(isSizeAvailable(corduroyQuiltCover, 'Queen', ['NonExistentColor']) === false, 'isSizeAvailable returns false when product has none of the selected colors');

// =========================================================================
// SECTION 5: productMatchesFilters Production Function
// =========================================================================
console.log('\n--- SECTION 5: productMatchesFilters Combinatorial Logic ---');

const quiltCoversMatches = PRODUCTS.filter(p => productMatchesFilters(p, {
  ...DEFAULT_FILTER_STATE,
  categories: ['Quilt Covers'],
}));
assertUnit(quiltCoversMatches.length === 15, 'Category filter: Quilt Covers matches exactly 15 products', 15, quiltCoversMatches.length);

const disjunctiveCategoryMatches = PRODUCTS.filter(p => productMatchesFilters(p, {
  ...DEFAULT_FILTER_STATE,
  categories: ['Quilt Covers', 'Fitted Sheets'],
}));
assertUnit(disjunctiveCategoryMatches.length === 23, 'Category OR multi-filter: Quilt Covers (15) OR Fitted Sheets (8) yields 23 products', 23, disjunctiveCategoryMatches.length);

const crossFacetMatches = PRODUCTS.filter(p => productMatchesFilters(p, {
  ...DEFAULT_FILTER_STATE,
  categories: ['Quilt Covers'],
  materials: ['Darcy Corduroy'],
}));
assertUnit(crossFacetMatches.length === 4, 'Cross-facet AND: Quilt Covers AND Darcy Corduroy yields exactly 4 products', 4, crossFacetMatches.length);

const fourFacetMatches = PRODUCTS.filter(p => productMatchesFilters(p, {
  ...DEFAULT_FILTER_STATE,
  categories: ['Quilt Covers'],
  materials: ['Darcy Corduroy'],
  colors: ['Russet'],
  sizes: ['Queen'],
}));
assertUnit(fourFacetMatches.length === 4, '4-facet AND: Quilt Covers AND Darcy Corduroy AND Russet AND Queen yields exactly 4 products', 4, fourFacetMatches.length);

// =========================================================================
// SECTION 6: Independent Disjunctive Facet Count Validation (10 Scenarios)
// =========================================================================
console.log('\n--- SECTION 6: Independent Disjunctive Facet Count Validation (computeFacetCounts) ---');

// Straightforward independent reference predicates over catalogue data
function refMatchesCat(p, cats) {
  if (!cats || cats.length === 0) return true;
  return cats.some(c => c === 'all' || c.toLowerCase().trim() === p.category.toLowerCase().trim());
}

function refMatchesMat(p, mats) {
  if (!mats || mats.length === 0) return true;
  return mats.some(m => m.toLowerCase().trim() === p.material.toLowerCase().trim());
}

function refMatchesCol(p, cols) {
  if (!cols || cols.length === 0) return true;
  return cols.some(sc => {
    const nsc = sc.toLowerCase().replace(/[-_]+/g, ' ').trim();
    return p.colors.some(c => {
      const nc = c.name.toLowerCase().replace(/[-_]+/g, ' ').trim();
      return nc === nsc || nc.includes(nsc) || nsc.includes(nc);
    });
  });
}

function refHasSize(p, sz, selectedColors) {
  const normSize = sz.toLowerCase().replace(/[-_]+/g, ' ').trim();
  const hasBase = p.sizes.some(s => {
    const ns = s.toLowerCase().replace(/[-_]+/g, ' ').trim();
    return ns === normSize || ns.startsWith(normSize);
  });
  if (!hasBase) return false;
  if (p.unavailableSizes && p.unavailableSizes.some(s => {
    const ns = s.toLowerCase().replace(/[-_]+/g, ' ').trim();
    return ns === normSize || ns.startsWith(normSize);
  })) return false;

  if (selectedColors && selectedColors.length > 0) {
    const matching = p.colors.filter(c => selectedColors.some(sc => {
      const nsc = sc.toLowerCase().replace(/[-_]+/g, ' ').trim();
      const nc = c.name.toLowerCase().replace(/[-_]+/g, ' ').trim();
      return nc === nsc || nc.includes(nsc) || nsc.includes(nc);
    }));
    if (matching.length === 0) return false;
    return matching.some(c => {
      const unavail = p.colorUnavailableSizes && p.colorUnavailableSizes[c.name];
      if (!unavail) return true;
      return !unavail.some(s => {
        const ns = s.toLowerCase().replace(/[-_]+/g, ' ').trim();
        return ns === normSize || ns.startsWith(normSize);
      });
    });
  }

  if (p.colorUnavailableSizes && Object.keys(p.colorUnavailableSizes).length > 0) {
    return p.colors.some(c => {
      const unavail = p.colorUnavailableSizes && p.colorUnavailableSizes[c.name];
      if (!unavail) return true;
      return !unavail.some(s => {
        const ns = s.toLowerCase().replace(/[-_]+/g, ' ').trim();
        return ns === normSize || ns.startsWith(normSize);
      });
    });
  }
  return true;
}

function refMatchesSz(p, sizes, selectedColors) {
  if (!sizes || sizes.length === 0) return true;
  return sizes.some(sz => refHasSize(p, sz, selectedColors));
}

function computeIndependentReferenceCounts(allProducts, f) {
  // A. Category counts (exclude category filter)
  const catBase = allProducts.filter(p => refMatchesMat(p, f.materials) && refMatchesCol(p, f.colors) && refMatchesSz(p, f.sizes, f.colors));
  const categories = {};
  AVAILABLE_CATEGORIES.forEach(c => categories[c.value] = catBase.filter(p => refMatchesCat(p, [c.value])).length);

  // B. Material counts (exclude material filter)
  const matBase = allProducts.filter(p => refMatchesCat(p, f.categories) && refMatchesCol(p, f.colors) && refMatchesSz(p, f.sizes, f.colors));
  const materials = {};
  AVAILABLE_MATERIALS.forEach(m => materials[m.value] = matBase.filter(p => refMatchesMat(p, [m.value])).length);

  // C. Colour counts (exclude colour filter)
  const colBase = allProducts.filter(p => refMatchesCat(p, f.categories) && refMatchesMat(p, f.materials) && refMatchesSz(p, f.sizes, []));
  const colors = {};
  AVAILABLE_COLORS.forEach(c => colors[c.label] = colBase.filter(p => refMatchesCol(p, [c.label])).length);

  // D. Size counts (exclude size filter)
  const sizeBase = allProducts.filter(p => refMatchesCat(p, f.categories) && refMatchesMat(p, f.materials) && refMatchesCol(p, f.colors));
  const sizes = {};
  AVAILABLE_SIZES.forEach(s => sizes[s.value] = sizeBase.filter(p => refHasSize(p, s.value, f.colors)).length);

  return { categories, materials, colors, sizes };
}

function verifyCountsMatch(scenarioName, filters) {
  const prod = computeFacetCounts(PRODUCTS, filters);
  const ref = computeIndependentReferenceCounts(PRODUCTS, filters);
  let match = true;
  let mismatchDetail = '';

  for (const group of ['categories', 'materials', 'colors', 'sizes']) {
    for (const key of Object.keys(ref[group])) {
      if (prod[group][key] !== ref[group][key]) {
        match = false;
        mismatchDetail = `${group}.${key}: prod=${prod[group][key]} vs ref=${ref[group][key]}`;
        break;
      }
    }
    if (!match) break;
  }
  assertUnit(match, `Scenario ${scenarioName}: all disjunctive facet counts match independent reference calculation`, 'all match', match ? 'all match' : mismatchDetail);
}

// 10 Mandatory Validation Scenarios
verifyCountsMatch('1 (No filters)', { ...DEFAULT_FILTER_STATE });
verifyCountsMatch('2 (One Category: Quilt Covers)', { ...DEFAULT_FILTER_STATE, categories: ['Quilt Covers'] });
verifyCountsMatch('3 (One Material: Darcy Corduroy)', { ...DEFAULT_FILTER_STATE, materials: ['Darcy Corduroy'] });
verifyCountsMatch('4 (One Colour: Olive)', { ...DEFAULT_FILTER_STATE, colors: ['Olive'] });
verifyCountsMatch('5 (One Size: Queen)', { ...DEFAULT_FILTER_STATE, sizes: ['Queen'] });
verifyCountsMatch('6 (Multiple in same facet: Quilt Covers OR Fitted Sheets)', { ...DEFAULT_FILTER_STATE, categories: ['Quilt Covers', 'Fitted Sheets'] });
verifyCountsMatch('7 (Multiple active facet groups: Quilt Covers AND Olive)', { ...DEFAULT_FILTER_STATE, categories: ['Quilt Covers'], colors: ['Olive'] });
verifyCountsMatch('8 (4-facet combination: Quilt Covers + Darcy Corduroy + Olive + Queen)', {
  ...DEFAULT_FILTER_STATE,
  categories: ['Quilt Covers'],
  materials: ['Darcy Corduroy'],
  colors: ['Olive'],
  sizes: ['Queen'],
});
verifyCountsMatch('9 (Removing active filter: remove Queen size from 4-facet)', {
  ...DEFAULT_FILTER_STATE,
  categories: ['Quilt Covers'],
  materials: ['Darcy Corduroy'],
  colors: ['Olive'],
  sizes: [],
});
verifyCountsMatch('10 (Clearing all filters)', { ...DEFAULT_FILTER_STATE });

console.log('\n========================================================================');
console.log(` PRODUCTION UNIT TEST SUMMARY: ${passedUnitTests}/${totalUnitTests} PASSED`);
console.log('========================================================================\n');

if (passedUnitTests !== totalUnitTests) {
  process.exit(1);
}
