import { Product, BeddingCategory, BeddingMaterial, BedSize, FilterState, FacetCounts } from '../types';

export const DEFAULT_FILTER_STATE: FilterState = {
  categories: [],
  colors: [],
  materials: [],
  sizes: [],
  sortBy: 'featured',
};

export const AVAILABLE_CATEGORIES: { label: string; value: BeddingCategory }[] = [
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

export const AVAILABLE_MATERIALS: { label: string; value: BeddingMaterial; desc?: string }[] = [
  { label: 'Eve Linen', value: 'Eve Linen', desc: '100% French Flax Linen' },
  { label: 'Darcy Corduroy', value: 'Darcy Corduroy', desc: 'Plush Ribbed Cotton' },
  { label: 'Eden Cotton', value: 'Eden Cotton', desc: 'Smooth Cotton Percale' },
  { label: 'Jude Organic Cotton', value: 'Jude Organic Cotton', desc: 'Crisp Certified Organic' },
  { label: 'Frankie Flannelette', value: 'Frankie Flannelette', desc: 'Brushed Cozy Warmth' },
  { label: 'Leo Washed Cotton', value: 'Leo Washed Cotton', desc: 'Soft Lived-In Finish' },
  { label: 'Sofia Ruched Cotton', value: 'Sofia Ruched Cotton', desc: 'Textured Dimensional Weave' },
  { label: 'Low Down Recycled', value: 'Low Down Recycled', desc: 'Lightweight Recycled Down' },
  { label: 'Cloud Corn Plant-Based', value: 'Cloud Corn Plant-Based', desc: 'Hypoallergenic Corn Loft' },
  { label: 'Wonder Wool', value: 'Wonder Wool', desc: 'Natural Australian Wool' },
  { label: 'Bouclé Cotton', value: 'Bouclé Cotton', desc: 'Tactile Looped Accent' },
  { label: 'Velvet', value: 'Velvet', desc: 'Sumptuous Lustrous Finish' },
  { label: 'Rory Washed Cotton', value: 'Rory Washed Cotton', desc: 'Pre-Washed Casual Layer' },
  { label: 'Tommy 600 GSM Cotton', value: 'Tommy 600 GSM Cotton', desc: 'Plush Absorbent Toweling' },
  { label: 'Cloudknit Jersey', value: 'Cloudknit Jersey', desc: 'Super-Soft Breathable Knit' },
  { label: 'Mulberry Silk', value: 'Mulberry Silk', desc: 'Grade 6A Pure Silk' },
  { label: 'Microfibre', value: 'Microfibre', desc: 'Smooth Protective Shield' },
];

export interface ColorSwatchItem {
  label: string;
  hex: string;
}

export const AVAILABLE_COLORS: ColorSwatchItem[] = [
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

export const AVAILABLE_SIZES: { label: string; value: BedSize }[] = [
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

/**
 * Normalizes text for case-, hyphen-, and space-insensitive matching.
 */
export function normalizeText(s: string): string {
  return (s || '').toLowerCase().replace(/[-_]/g, ' ').trim();
}

/**
 * Checks whether a product has a given size, and whether that size is available.
 * If selectedColors are provided, size availability is checked specifically against
 * the matching selected colourway(s).
 */
export function isSizeAvailable(
  product: Product,
  size: BedSize,
  selectedColors?: string[]
): boolean {
  const normSize = normalizeText(size);
  const hasSize = product.sizes.some(s => {
    const ns = normalizeText(s);
    return ns === normSize || ns.startsWith(normSize);
  });
  if (!hasSize) return false;

  // Product-level unavailable sizes check
  if (product.unavailableSizes && product.unavailableSizes.some(s => {
    const ns = normalizeText(s);
    return ns === normSize || ns.startsWith(normSize);
  })) {
    return false;
  }

  // Variant/colourway-specific availability check
  if (selectedColors && selectedColors.length > 0) {
    const matchingColors = product.colors.filter(c => 
      selectedColors.some(sc => {
        const nsc = normalizeText(sc);
        const nc = normalizeText(c.name);
        return nc === nsc || nc.includes(nsc) || nsc.includes(nc);
      })
    );

    if (matchingColors.length > 0) {
      return matchingColors.some(c => {
        const unavail = product.colorUnavailableSizes && product.colorUnavailableSizes[c.name];
        if (!unavail) return true;
        return !unavail.some(s => {
          const ns = normalizeText(s);
          return ns === normSize || ns.startsWith(normSize);
        });
      });
    }
  }

  // When no specific colours are selected, check if at least one colourway has the size available
  if (product.colorUnavailableSizes && Object.keys(product.colorUnavailableSizes).length > 0) {
    const someColorAvailable = product.colors.some(c => {
      const unavail = product.colorUnavailableSizes && product.colorUnavailableSizes[c.name];
      if (!unavail) return true;
      return !unavail.some(s => {
        const ns = normalizeText(s);
        return ns === normSize || ns.startsWith(normSize);
      });
    });
    return someColorAvailable;
  }

  return true;
}

/**
 * Determines whether a product satisfies all active facet groups (AND between groups, OR within groups).
 */
export function productMatchesFilters(
  product: Product,
  filters: FilterState
): boolean {
  // Category facet (OR within group)
  if (filters.categories.length > 0) {
    const catMatch = filters.categories.some(cat => 
      (cat as string) === 'all' || normalizeText(cat) === normalizeText(product.category)
    );
    if (!catMatch) return false;
  }

  // Fabric / Material facet (OR within group)
  if (filters.materials.length > 0) {
    const matMatch = filters.materials.some(mat =>
      normalizeText(mat) === normalizeText(product.material)
    );
    if (!matMatch) return false;
  }

  // Colour facet (OR within group)
  if (filters.colors.length > 0) {
    const colorMatch = filters.colors.some(fc => {
      const nfc = normalizeText(fc);
      return product.colors.some(c => {
        const nc = normalizeText(c.name);
        return nc === nfc || nc.includes(nfc) || nfc.includes(nc);
      });
    });
    if (!colorMatch) return false;
  }

  // Size facet (OR within group, respecting variant availability)
  if (filters.sizes.length > 0) {
    const sizeMatch = filters.sizes.some(sz => 
      isSizeAvailable(product, sz, filters.colors)
    );
    if (!sizeMatch) return false;
  }

  return true;
}

/**
 * Sorts products deterministically without mutating the original array.
 */
export function sortProducts(
  products: Product[],
  sortBy: FilterState['sortBy']
): Product[] {
  return [...products].sort((a, b) => {
    if (sortBy === 'price-low') {
      return (a.minPrice || a.price) - (b.minPrice || b.price);
    }
    if (sortBy === 'price-high') {
      return (b.minPrice || b.price) - (a.minPrice || a.price);
    }
    if (sortBy === 'rating') {
      return b.rating - a.rating;
    }
    // 'featured': Bestsellers prioritized, then default catalogue stability
    return (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0);
  });
}

/**
 * Computes dynamic facet counts for each filter option using standard disjunctive faceting:
 * For each facet group, filter by all OTHER active facet groups and count matching products.
 */
export function computeFacetCounts(
  products: Product[],
  filters: FilterState
): FacetCounts {
  // 1. Categories counts (exclude category filter)
  const nonCatFilters: FilterState = { ...filters, categories: [] };
  const catProducts = products.filter(p => productMatchesFilters(p, nonCatFilters));
  const categoryCounts: Record<string, number> = {};
  AVAILABLE_CATEGORIES.forEach(c => {
    categoryCounts[c.value] = catProducts.filter(p => 
      normalizeText(p.category) === normalizeText(c.value)
    ).length;
  });

  // 2. Materials counts (exclude material filter)
  const nonMatFilters: FilterState = { ...filters, materials: [] };
  const matProducts = products.filter(p => productMatchesFilters(p, nonMatFilters));
  const materialCounts: Record<string, number> = {};
  AVAILABLE_MATERIALS.forEach(m => {
    materialCounts[m.value] = matProducts.filter(p => 
      normalizeText(p.material) === normalizeText(m.value)
    ).length;
  });

  // 3. Colors counts (exclude color filter)
  const nonColorFilters: FilterState = { ...filters, colors: [] };
  const colorProducts = products.filter(p => productMatchesFilters(p, nonColorFilters));
  const colorCounts: Record<string, number> = {};
  AVAILABLE_COLORS.forEach(c => {
    const nLabel = normalizeText(c.label);
    colorCounts[c.label] = colorProducts.filter(p => 
      p.colors.some(pc => {
        const npc = normalizeText(pc.name);
        return npc === nLabel || npc.includes(nLabel) || nLabel.includes(npc);
      })
    ).length;
  });

  // 4. Sizes counts (exclude size filter)
  const nonSizeFilters: FilterState = { ...filters, sizes: [] };
  const sizeProducts = products.filter(p => productMatchesFilters(p, nonSizeFilters));
  const sizeCounts: Record<string, number> = {};
  AVAILABLE_SIZES.forEach(s => {
    sizeCounts[s.value] = sizeProducts.filter(p => 
      isSizeAvailable(p, s.value, filters.colors)
    ).length;
  });

  return {
    categories: categoryCounts,
    colors: colorCounts,
    materials: materialCounts,
    sizes: sizeCounts,
  };
}

/**
 * Returns the total count of active filter selections (excluding sortBy).
 */
export function getActiveFilterCount(filters: FilterState): number {
  return (
    filters.categories.length +
    filters.colors.length +
    filters.materials.length +
    filters.sizes.length
  );
}

/**
 * Parses URL search string into a validated FilterState object.
 * Supports repeated parameters (?color=Russet&color=Olive) and comma-separated lists.
 */
export function parseUrlFilters(search: string): FilterState {
  if (!search) return { ...DEFAULT_FILTER_STATE };

  const params = new URLSearchParams(search);

  // Helper for reading repeated or comma-split parameters
  const getValues = (key: string): string[] => {
    const raw = params.getAll(key);
    const result: string[] = [];
    raw.forEach(v => {
      v.split(',').forEach(part => {
        const trimmed = part.trim();
        if (trimmed && !result.includes(trimmed)) {
          result.push(trimmed);
        }
      });
    });
    return result;
  };

  const rawCategories = getValues('category').filter(c => c.toLowerCase() !== 'all');
  const rawColors = getValues('color');
  const rawFabrics = getValues('fabric').concat(getValues('material'));
  const rawSizes = getValues('size');
  const sortParam = params.get('sort');

  const validSorts: FilterState['sortBy'][] = ['featured', 'price-low', 'price-high', 'rating'];
  const sortBy = (sortParam && validSorts.includes(sortParam as any))
    ? (sortParam as FilterState['sortBy'])
    : 'featured';

  return {
    categories: rawCategories as BeddingCategory[],
    colors: rawColors,
    materials: rawFabrics as BeddingMaterial[],
    sizes: rawSizes as BedSize[],
    sortBy,
  };
}

/**
 * Serializes FilterState into a URL query parameter string, preserving unrelated params.
 */
export function serializeUrlFilters(
  filters: FilterState,
  existingSearch = ''
): string {
  const params = new URLSearchParams(existingSearch);

  // Remove facet-specific params to be rebuilt cleanly
  params.delete('category');
  params.delete('color');
  params.delete('fabric');
  params.delete('material');
  params.delete('size');
  params.delete('sort');

  // Categories
  filters.categories.forEach(cat => {
    if (cat && (cat as string) !== 'all') {
      params.append('category', cat);
    }
  });

  // Colors
  filters.colors.forEach(col => {
    if (col) params.append('color', col);
  });

  // Materials / Fabrics
  filters.materials.forEach(mat => {
    if (mat) params.append('fabric', mat);
  });

  // Sizes
  filters.sizes.forEach(sz => {
    if (sz) params.append('size', sz);
  });

  // Sort
  if (filters.sortBy && filters.sortBy !== 'featured') {
    params.set('sort', filters.sortBy);
  }

  // Preserve or set view=catalog if any facet filter is active
  const hasActiveFacets = getActiveFilterCount(filters) > 0 || (filters.sortBy && filters.sortBy !== 'featured');
  if (hasActiveFacets && !params.has('view')) {
    params.set('view', 'catalog');
  }

  const result = params.toString();
  return result ? `?${result}` : '';
}
