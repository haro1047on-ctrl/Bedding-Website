# MORFE — Phase 5, 5.1 & 5.2 Implementation Report
## Advanced Product Listing Page (PLP) Faceted Filtering & Persistent URL State

**Project:** MORFE — The Quiet Atelier  
**Repository:** `haro1047on-ctrl/Bedding-Website`  
**Active Branch:** `feature/phase-5-plp-faceted-filtering`  
**Accepted Phase 4 Baseline:** `aec2928fd01a8ec2731e0cba18d8368e00b3f3e3`  
**Technology Stack:** React 18, Vite 5, TypeScript 5, Tailwind CSS 3, Chrome DevTools Protocol (CDP)  

---

## 1. Executive Summary

Phase 5, 5.1, and 5.2 establish a production-grade **Advanced Faceted Filtering System** and **Persistent URL Query Parameter & Hash Engine** for the MORFE bedding e-commerce storefront Product Listing Page (PLP).

Guided by the visual restraint and quiet luxury aesthetic of the reference site (*Sheet Society*), this implementation enables multi-dimensional discovery across MORFE's 167-product catalogue while strictly preserving all previous baselines:
- **Phase 2 Baseline:** Strict 3-tier colourway image isolation, zero fallback leakage, thumbnail cart fidelity.
- **Phase 3 Baseline:** Dynamic size variant pricing, variant-specific inventory availability, and cross-colourway size reconciliation.
- **Phase 4 Baseline:** 5-column mega-menu navigation, 14-category horizontal pill strip, editorial vignettes, and responsive drawer hierarchy.

### Key Milestones Achieved
1. **Direct Production-Function Architecture:** Test suites directly import and execute the actual production functions from `src/utils/filterUtils.ts` without duplicate implementations.
2. **Strict Invalid Colour Parsing & Canonicalization:** `parseUrlFilters()` only accepts colours matching known entries in `AVAILABLE_COLORS` (case-insensitive, normalized via `normalizeText()`). Invalid/unknown colour parameters (e.g. `UnknownColour123`) are safely ignored, while valid colours (e.g. `color=WARM-WHITE` or `colour=olive`) resolve to their canonical labels (`Warm White`, `Olive`).
3. **Multi-Facet Combinatorial Logic:** Disjunctive multi-selection (OR within the same facet group, AND across distinct facet groups) across Category, Fabric/Material, Colour, and Bed Size.
4. **Independent Disjunctive Facet Counting Truth:** `computeFacetCounts()` derives dynamic option counts independently per facet group without cross-facet distortion, validated against an independent reference calculation across 10 deterministic scenarios.
5. **Real Application URL Update Flow & Hash Preservation:** The application URL engine strictly preserves `#details` (and any URL hash) across all filter additions, modifications, removals, clears, deep links, and browser history transitions. Unrelated parameters (`utm_campaign`, `utm_source`, `ref`, `cart`, `product`) are strictly preserved.
6. **Variant-Specific Size Availability Integration:** Size filtering rigorously accounts for variant-level stock rules (evaluating both `product.unavailableSizes` and `product.colorUnavailableSizes` for selected colourways, applying the multi-colour OR availability rule).
7. **Interactive UI Surfaces Verified via CDP Pointer Dispatch:**
   - Desktop horizontal filter toolbar with dropdown menus, checkbox indicators, and colour swatches.
   - Interactive Active Filter Chips bar with individual `[X]` dismissal and "Clear All" batch reset.
   - Elegant Empty State container ("No products found") with a high-contrast "Reset Filters" recovery action.
   - Fully responsive, accessible Mobile Filter Drawer (<1024px) with slide-in animation, category/fabric/colour/size multi-selectors, and sticky action buttons.

---

## 2. Architecture & Design Specifications

### 2.1 Filtering & Sorting Engine (`src/utils/filterUtils.ts`)

The filtering engine is decoupled into pure, deterministic utility functions:

#### A. Text Normalization
```typescript
export function normalizeText(s: string): string {
  return (s || '')
    .toLowerCase()
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}
```
Eliminates format mismatches across product records:
- `Warm-white` → `warm white`
- `Warm__White` → `warm white`
- `  Warm   White  ` → `warm white`
- `__HUNTER---green__` → `hunter green`

#### B. Strict Colour Parsing & Invalid Value Rejection
```typescript
  // 3. Colours (accepts 'color' and 'colour')
  const rawColors = getValues('color', 'colour');
  const validColors: string[] = [];
  const seenColorNorms = new Set<string>();

  for (const raw of rawColors) {
    const norm = normalizeText(raw);
    if (!norm || seenColorNorms.has(norm)) continue;

    // Match against AVAILABLE_COLORS for canonical casing; ignore invalid or unrecognized colours
    const match = AVAILABLE_COLORS.find(c => normalizeText(c.label) === norm);
    if (match) {
      seenColorNorms.add(norm);
      seenColorNorms.add(normalizeText(match.label));
      if (!validColors.includes(match.label)) {
        validColors.push(match.label);
      }
    }
  }
```

#### C. Variant-Specific Size Availability
```typescript
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

    // If the product does not offer any of the selected colours, size is not available
    if (matchingColors.length === 0) {
      return false;
    }

    // A size is available if at least one matching colourway supports that size (OR logic)
    return matchingColors.some(c => {
      const unavail = product.colorUnavailableSizes && product.colorUnavailableSizes[c.name];
      if (!unavail) return true;
      return !unavail.some(s => {
        const ns = normalizeText(s);
        return ns === normSize || ns.startsWith(normSize);
      });
    });
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
```

#### D. Disjunctive Facet Counting Algorithm
Unlike standard conjunctive faceting which collapses counts to zero as filters are added, disjunctive faceting calculates option counts for facet group $F$ by applying active filters from all facet groups **except** $F$:
- When calculating Category counts: filters for Fabric, Colour, and Size are applied; Category filter is omitted.
- When calculating Fabric counts: filters for Category, Colour, and Size are applied; Fabric filter is omitted.
- When calculating Colour counts: filters for Category, Fabric, and Size are applied; Colour filter is omitted.
- When calculating Size counts: filters for Category, Fabric, and Colour are applied; Size filter is omitted.

This allows customers to explore alternative options within a facet without having to deselect their current choice.

---

### 2.2 URL Query Parameter & Hash Engine

The URL engine adheres to standard RESTful and e-commerce query conventions while supporting natural user and marketing variations:

| Facet Group | Supported Aliases | Canonical Output | Example Query String |
|:---|:---|:---|:---|
| **Category** | `category` | `category` | `?category=Quilt%20Covers&category=Fitted%20Sheets` |
| **Fabric** | `fabric`, `material` | `fabric` | `?fabric=Darcy%20Corduroy` |
| **Colour** | `color`, `colour` | `color` | `?color=Olive&color=Russet` |
| **Size** | `size` | `size` | `?size=Queen&size=King` |
| **Sorting** | `sort` | `sort` | `?sort=price-low` (omitted when `'featured'`) |
| **Routing** | `view` | `view` | `?view=catalog` |

#### Canonical Serialization & Hash Preservation Format
When updating or clearing filters:
1. URL hash is extracted if present in existing search or path:
   `const hashIdx = existingSearch.indexOf('#');`
2. Both aliases are deleted from the query parameters:
   - `params.delete('color')` and `params.delete('colour')`
   - `params.delete('fabric')` and `params.delete('material')`
3. Canonical aliases (`category`, `fabric`, `color`, `size`, `sort`) are serialized.
4. Unrelated query parameters (`utm_campaign`, `utm_source`, `ref`, `cart`, `product`, etc.) and the URL hash (e.g. `#details`) are strictly appended and preserved.

---

### 2.3 Component Hierarchy & Enhancements

```
src/
├── App.tsx                     # URL deep-linking router, popstate handler, view switching, hash preservation
├── types/
│   └── index.ts                # FilterState, FacetCounts type definitions
├── utils/
│   └── filterUtils.ts          # Normalization, pure filtering, disjunctive counting, URL serialization/parsing
└── components/
    ├── CatalogView.tsx         # Complete PLP: desktop toolbar, chips row, 4-col grid, drawer, empty state, pushState sort
    ├── ProductCard.tsx         # 3-tier image resolution, swatch hover continuity, product-card testid
    ├── Header.tsx              # Mega-menu, category selection, brand wordmark navigation
    └── CategoryStrip.tsx       # Horizontal category discovery pills
```

---

## 3. Data Models & Type Definitions

```typescript
// src/types/index.ts

export interface FilterState {
  categories: BeddingCategory[];
  colors: string[];
  materials: BeddingMaterial[];
  sizes: BedSize[];
  sortBy: 'featured' | 'price-low' | 'price-high' | 'rating';
}

export interface FacetCounts {
  categories: Record<string, number>;
  colors: Record<string, number>;
  materials: Record<string, number>;
  sizes: Record<string, number>;
}
```

---

## 4. Verification Deliverables

- **Production Unit Test Battery:** `scripts/test_filter_utils_unit.cjs` (55/55 passed, 100%)
- **Automated CDP Browser Interaction Test Battery:** `scripts/test_phase5_filters.cjs` (66/66 passed, 100%)
- **Machine-Readable Results Artifact:** `src/data/phase5_filter_test_results.json`
- **Formal Verification Report:** `PHASE_5_FINAL_VERIFICATION_REPORT.md`
