import React, { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import { Product, BeddingCategory, BeddingMaterial, BedSize, ColorVariant, FilterState } from '../types';
import { ProductCard } from './ProductCard';
import { ChevronDown, X, SlidersHorizontal, Check, RotateCcw } from 'lucide-react';
import {
  DEFAULT_FILTER_STATE,
  AVAILABLE_CATEGORIES,
  AVAILABLE_MATERIALS,
  AVAILABLE_COLORS,
  AVAILABLE_SIZES,
  normalizeText,
  productMatchesFilters,
  sortProducts,
  computeFacetCounts,
  getActiveFilterCount,
  parseUrlFilters,
  serializeUrlFilters,
} from '../utils/filterUtils';

interface CatalogViewProps {
  products: Product[];
  initialCategory?: BeddingCategory | 'all';
  onSelectProduct: (product: Product, initialColor?: ColorVariant) => void;
  onQuickView: (product: Product, initialColor?: ColorVariant) => void;
  onNavigateHome: () => void;
}

export const CatalogView: React.FC<CatalogViewProps> = ({
  products,
  initialCategory = 'all',
  onSelectProduct,
  onQuickView,
  onNavigateHome,
}) => {
  // Initialize filter state from URL if present, otherwise from initialCategory
  const [filters, setFilters] = useState<FilterState>(() => {
    if (typeof window !== 'undefined' && window.location.search) {
      const fromUrl = parseUrlFilters(window.location.search);
      if (getActiveFilterCount(fromUrl) > 0 || fromUrl.sortBy !== 'featured') {
        return fromUrl;
      }
    }
    if (initialCategory && initialCategory !== 'all') {
      return {
        ...DEFAULT_FILTER_STATE,
        categories: [initialCategory],
      };
    }
    return { ...DEFAULT_FILTER_STATE };
  });

  const [activeDropdown, setActiveDropdown] = useState<'category' | 'material' | 'color' | 'size' | 'sort' | null>(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Listen to browser Back/Forward navigation (popstate)
  useEffect(() => {
    const handlePopState = () => {
      if (typeof window !== 'undefined') {
        const urlFilters = parseUrlFilters(window.location.search);
        setFilters(urlFilters);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Synchronize FilterState into browser URL query parameters
  const updateUrl = useCallback((newFilters: FilterState, method: 'push' | 'replace' = 'push') => {
    if (typeof window === 'undefined') return;
    const currentSearch = window.location.search;
    const newSearch = serializeUrlFilters(newFilters, currentSearch);
    if (newSearch !== currentSearch) {
      const newUrl = window.location.pathname + newSearch + window.location.hash;
      if (method === 'push') {
        window.history.pushState(null, '', newUrl);
      } else {
        window.history.replaceState(null, '', newUrl);
      }
    }
  }, []);

  // Synchronize when parent updates initialCategory (e.g. from Mega-Menu)
  const isFirstMountRef = useRef(true);
  const prevInitialCategoryRef = useRef(initialCategory);

  useEffect(() => {
    if (isFirstMountRef.current) {
      isFirstMountRef.current = false;
      prevInitialCategoryRef.current = initialCategory;
      return;
    }
    if (prevInitialCategoryRef.current !== initialCategory) {
      prevInitialCategoryRef.current = initialCategory;
      if (initialCategory && initialCategory !== 'all') {
        setFilters(prev => {
          const next: FilterState = { ...prev, categories: [initialCategory] };
          updateUrl(next, 'push');
          return next;
        });
      } else if (initialCategory === 'all') {
        setFilters(prev => {
          const next: FilterState = { ...prev, categories: [] };
          updateUrl(next, 'push');
          return next;
        });
      }
    }
  }, [initialCategory, updateUrl]);

  // Central filter update helper
  const updateFilters = useCallback((updater: (prev: FilterState) => FilterState, method: 'push' | 'replace' = 'push') => {
    setFilters(prev => {
      const next = updater(prev);
      updateUrl(next, method);
      return next;
    });
  }, [updateUrl]);

  // Facet toggle helpers
  const toggleCategory = (cat: BeddingCategory) => {
    updateFilters(prev => {
      const exists = prev.categories.some(c => normalizeText(c) === normalizeText(cat));
      const nextCats = exists
        ? prev.categories.filter(c => normalizeText(c) !== normalizeText(cat))
        : [...prev.categories, cat];
      return { ...prev, categories: nextCats };
    });
  };

  const toggleMaterial = (mat: BeddingMaterial) => {
    updateFilters(prev => {
      const exists = prev.materials.some(m => normalizeText(m) === normalizeText(mat));
      const nextMats = exists
        ? prev.materials.filter(m => normalizeText(m) !== normalizeText(mat))
        : [...prev.materials, mat];
      return { ...prev, materials: nextMats };
    });
  };

  const toggleColor = (colLabel: string) => {
    updateFilters(prev => {
      const exists = prev.colors.some(c => normalizeText(c) === normalizeText(colLabel));
      const nextColors = exists
        ? prev.colors.filter(c => normalizeText(c) !== normalizeText(colLabel))
        : [...prev.colors, colLabel];
      return { ...prev, colors: nextColors };
    });
  };

  const toggleSize = (sz: BedSize) => {
    updateFilters(prev => {
      const exists = prev.sizes.some(s => normalizeText(s) === normalizeText(sz));
      const nextSizes = exists
        ? prev.sizes.filter(s => normalizeText(s) !== normalizeText(sz))
        : [...prev.sizes, sz];
      return { ...prev, sizes: nextSizes };
    });
  };

  const removeFilter = (type: 'category' | 'material' | 'color' | 'size', value: string) => {
    updateFilters(prev => {
      switch (type) {
        case 'category':
          return { ...prev, categories: prev.categories.filter(c => normalizeText(c) !== normalizeText(value)) };
        case 'material':
          return { ...prev, materials: prev.materials.filter(m => normalizeText(m) !== normalizeText(value)) };
        case 'color':
          return { ...prev, colors: prev.colors.filter(c => normalizeText(c) !== normalizeText(value)) };
        case 'size':
          return { ...prev, sizes: prev.sizes.filter(s => normalizeText(s) !== normalizeText(value)) };
      }
    });
  };

  const clearAllFilters = () => {
    updateFilters(prev => ({
      ...DEFAULT_FILTER_STATE,
      sortBy: prev.sortBy,
    }));
    setActiveDropdown(null);
  };

  const handleSortChange = (newSort: FilterState['sortBy']) => {
    updateFilters(prev => ({ ...prev, sortBy: newSort }), 'replace');
  };

  // Filter & Sort evaluation
  const filteredProducts = useMemo(() => {
    const matched = products.filter(p => productMatchesFilters(p, filters));
    return sortProducts(matched, filters.sortBy);
  }, [products, filters]);

  // Dynamic facet counts calculated via disjunctive faceting
  const facetCounts = useMemo(() => {
    return computeFacetCounts(products, filters);
  }, [products, filters]);

  const activeFiltersCount = useMemo(() => {
    return getActiveFilterCount(filters);
  }, [filters]);

  // Dynamic Category Title and Description
  const getCategoryTitle = () => {
    if (filters.categories.length === 0) return 'Bedding';
    if (filters.categories.length === 1) return filters.categories[0];
    if (filters.categories.length === 2) return `${filters.categories[0]} & ${filters.categories[1]}`;
    return `Bedding (${filters.categories.length} Categories)`;
  };

  const getCategoryDescription = () => {
    if (filters.categories.length === 1) {
      switch (filters.categories[0]) {
        case 'Quilt Covers':
          return 'Elevate your sleep space with our signature French flax linen, plush ribbed corduroy, and crisp organic cotton quilt covers with hidden invisible zipper closures.';
        case 'Fitted Sheets':
          return 'Featuring our signature 55cm extra-deep wall and 3cm thick ribbed elastic that stays snug and anchored to even the deepest mattresses.';
        case 'Flat Sheets':
          return 'Crafted with a generous 20cm folded double-layer top hem for effortless styling and luxurious layering.';
        case 'Pillowcases':
          return 'Finished with our deep 22cm envelope closure to ensure your pillow stays tucked discreetly inside all night.';
        case 'Bed Sheets & Sets':
          return 'Complete coordinated bedtime suites comprising fitted sheet, flat sheet, and matching pillowcase sets.';
        case 'Blankets & Bed Covers':
          return 'Lightweight waffle blankets and quilted textured bed covers for year-round warmth and visual depth.';
        case 'Quilts & Pillows':
          return 'Naturally breathable, temperature-regulating quilts and pillows filled with Australian wool, plant-based corn fibre, and recycled down.';
        case 'Protectors & Toppers':
          return 'Protect and extend your mattress and pillows with quilted cotton, waterproof shields, and thermo-regulating Cool Mode layers.';
        case 'Cushions':
          return 'Tactile bouclé, cotton corduroy, and plush velvet accent cushions to elevate and finish your bedroom sanctuary.';
        case 'Bath & Towels':
          return '600 GSM combed cotton bath sheets, hand towels, and bath mats with plush absorption and enduring softness.';
        case 'Sleepwear':
          return 'Ultra-soft Cloudknit jersey and double-brushed flannelette loungewear tailored for restorative sleep.';
        case 'Wellness':
          return 'Magnesium soaks, calming sleep mists, natural wax candles, and mulberry silk pillowcases for intentional bedtime rituals.';
        case 'Kids & Baby':
          return 'Cot fitted sheets, bassinet bedding, and organic swaddles crafted for gentle skin and sweet dreams.';
      }
    }
    return 'Explore our complete range of bed linen, quilt covers, sheets, and pillowcases. Thoughtfully designed in 100% natural fibres with cohesive palettes and lived-in softness.';
  };

  return (
    <div className="w-full bg-[#fbf9f6] min-h-screen pb-24 pt-28 sm:pt-32 font-grotesque text-[#000000]">
      
      {/* Editorial Title Banner */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 pt-4 pb-6">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-xs font-grotesque text-[#000000]/50 mb-3" aria-label="Breadcrumb">
          <button onClick={onNavigateHome} className="hover:text-[#000000] transition-colors">
            Home
          </button>
          <span>/</span>
          <span className="text-[#000000]/70">Bedding</span>
          {filters.categories.length > 0 && (
            <>
              <span>/</span>
              <span className="text-[#000000] font-medium">{getCategoryTitle()}</span>
            </>
          )}
        </nav>

        {/* Title and Short Narrative */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#e5e5e5]">
          <div>
            <h1 className="font-awesome text-4xl sm:text-5xl lg:text-6xl text-[#000000] font-normal tracking-tight">
              {getCategoryTitle()}
            </h1>
            <p className="text-xs sm:text-sm text-[#000000]/70 font-grotesque mt-2.5 max-w-2xl leading-relaxed">
              {getCategoryDescription()}
            </p>
          </div>

          <div data-testid="product-count-badge" className="text-xs font-grotesque text-[#000000]/60 whitespace-nowrap self-start md:self-end">
            Showing <strong className="text-[#000000] font-medium">{filteredProducts.length}</strong> products
          </div>
        </div>

        {/* MORFE Horizontal Category Pill Strip */}
        <div className="py-4 flex items-center space-x-2 overflow-x-auto no-scrollbar border-b border-[#e5e5e5]">
          <button
            type="button"
            data-testid="pill-category-all"
            onClick={() => updateFilters(prev => ({ ...prev, categories: [] }))}
            className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide whitespace-nowrap transition-all duration-150 ${
              filters.categories.length === 0
                ? 'bg-[#000000] text-[#fbf9f6] shadow-sm'
                : 'bg-white border border-[#e5e5e5] text-[#000000] hover:border-[#000000]'
            }`}
          >
            All Bedding
          </button>
          {AVAILABLE_CATEGORIES.map((cat) => {
            const isActive = filters.categories.some(c => normalizeText(c) === normalizeText(cat.value));
            const count = facetCounts.categories[cat.value] || 0;
            return (
              <button
                key={cat.label}
                type="button"
                data-testid={`pill-category-${cat.value.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                onClick={() => toggleCategory(cat.value)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide whitespace-nowrap transition-all duration-150 flex items-center space-x-1.5 ${
                  isActive
                    ? 'bg-[#000000] text-[#fbf9f6] shadow-sm'
                    : 'bg-white border border-[#e5e5e5] text-[#000000] hover:border-[#000000]'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] ${isActive ? 'text-white/70' : 'text-[#000000]/40'}`}>
                  ({count})
                </span>
              </button>
            );
          })}
        </div>

        {/* MORFE Horizontal Filter Dropdown Toolbar */}
        <div ref={dropdownRef} className="relative py-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#e5e5e5]">
          
          {/* Desktop Filter Dropdown Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            
            {/* Category Dropdown */}
            <div className="relative">
              <button
                type="button"
                data-testid="filter-dropdown-category"
                onClick={() => setActiveDropdown(activeDropdown === 'category' ? null : 'category')}
                className={`px-3.5 py-2 border rounded-full text-xs font-medium flex items-center space-x-2 transition-colors ${
                  filters.categories.length > 0
                    ? 'border-[#000000] bg-[#000000] text-white'
                    : activeDropdown === 'category'
                    ? 'border-[#000000] bg-white text-[#000000]'
                    : 'border-[#e5e5e5] bg-white text-[#000000] hover:border-[#000000]'
                }`}
              >
                <span>Category {filters.categories.length > 0 ? `(${filters.categories.length})` : ''}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'category' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'category' && (
                <div data-testid="dropdown-menu-category" className="absolute top-full left-0 mt-2 w-72 bg-white border border-[#e5e5e5] shadow-xl p-3.5 z-30 rounded-md max-h-96 overflow-y-auto">
                  <div className="flex items-center justify-between mb-2.5 px-1 border-b border-sand-border/40 pb-2">
                    <span className="text-[11px] font-semibold text-[#000000]/60 uppercase tracking-wider">
                      Categories
                    </span>
                    {filters.categories.length > 0 && (
                      <button
                        type="button"
                        onClick={() => updateFilters(prev => ({ ...prev, categories: [] }))}
                        className="text-[10px] text-terracotta underline hover:opacity-80"
                      >
                        Reset
                      </button>
                    )}
                  </div>
                  <div className="space-y-1">
                    {AVAILABLE_CATEGORIES.map((cat) => {
                      const isSelected = filters.categories.some(c => normalizeText(c) === normalizeText(cat.value));
                      const count = facetCounts.categories[cat.value] || 0;
                      return (
                        <button
                          key={cat.value}
                          type="button"
                          data-testid={`option-category-${cat.value.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                          onClick={() => toggleCategory(cat.value)}
                          className={`w-full text-left px-2.5 py-1.5 text-xs rounded hover:bg-[#fbf9f6] flex items-center justify-between transition-colors ${
                            isSelected ? 'font-semibold text-[#000000] bg-[#fbf9f6]' : 'text-[#000000]/80'
                          }`}
                        >
                          <div className="flex items-center space-x-2">
                            <div className={`w-3.5 h-3.5 border rounded flex items-center justify-center ${isSelected ? 'bg-umber border-umber text-white' : 'border-sand-border'}`}>
                              {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                            </div>
                            <span>{cat.label}</span>
                          </div>
                          <span className="text-[10px] text-soft-graphite/50 font-mono">({count})</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Fabric Dropdown */}
            <div className="relative">
              <button
                type="button"
                data-testid="filter-dropdown-material"
                onClick={() => setActiveDropdown(activeDropdown === 'material' ? null : 'material')}
                className={`px-3.5 py-2 border rounded-full text-xs font-medium flex items-center space-x-2 transition-colors ${
                  filters.materials.length > 0
                    ? 'border-[#000000] bg-[#000000] text-white'
                    : activeDropdown === 'material'
                    ? 'border-[#000000] bg-white text-[#000000]'
                    : 'border-[#e5e5e5] bg-white text-[#000000] hover:border-[#000000]'
                }`}
              >
                <span>Fabric {filters.materials.length > 0 ? `(${filters.materials.length})` : ''}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'material' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'material' && (
                <div data-testid="dropdown-menu-material" className="absolute top-full left-0 mt-2 w-72 bg-white border border-[#e5e5e5] shadow-xl p-3.5 z-30 rounded-md max-h-96 overflow-y-auto">
                  <div className="flex items-center justify-between mb-2.5 px-1 border-b border-sand-border/40 pb-2">
                    <span className="text-[11px] font-semibold text-[#000000]/60 uppercase tracking-wider">
                      Select Fabric
                    </span>
                    {filters.materials.length > 0 && (
                      <button
                        type="button"
                        onClick={() => updateFilters(prev => ({ ...prev, materials: [] }))}
                        className="text-[10px] text-terracotta underline hover:opacity-80"
                      >
                        Reset
                      </button>
                    )}
                  </div>
                  <div className="space-y-1">
                    {AVAILABLE_MATERIALS.map((mat) => {
                      const isSelected = filters.materials.some(m => normalizeText(m) === normalizeText(mat.value));
                      const count = facetCounts.materials[mat.value] || 0;
                      return (
                        <button
                          key={mat.value}
                          type="button"
                          data-testid={`option-material-${mat.value.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                          onClick={() => toggleMaterial(mat.value)}
                          className={`w-full text-left px-2.5 py-1.5 text-xs rounded hover:bg-[#fbf9f6] flex items-center justify-between transition-colors ${
                            isSelected ? 'font-semibold text-[#000000] bg-[#fbf9f6]' : 'text-[#000000]/80'
                          }`}
                        >
                          <div className="flex items-center space-x-2">
                            <div className={`w-3.5 h-3.5 border rounded flex items-center justify-center ${isSelected ? 'bg-umber border-umber text-white' : 'border-sand-border'}`}>
                              {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                            </div>
                            <span className="truncate">{mat.label}</span>
                          </div>
                          <span className="text-[10px] text-soft-graphite/50 font-mono">({count})</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Colour Dropdown */}
            <div className="relative">
              <button
                type="button"
                data-testid="filter-dropdown-color"
                onClick={() => setActiveDropdown(activeDropdown === 'color' ? null : 'color')}
                className={`px-3.5 py-2 border rounded-full text-xs font-medium flex items-center space-x-2 transition-colors ${
                  filters.colors.length > 0
                    ? 'border-[#000000] bg-[#000000] text-white'
                    : activeDropdown === 'color'
                    ? 'border-[#000000] bg-white text-[#000000]'
                    : 'border-[#e5e5e5] bg-white text-[#000000] hover:border-[#000000]'
                }`}
              >
                <span>Colour {filters.colors.length > 0 ? `(${filters.colors.length})` : ''}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'color' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'color' && (
                <div data-testid="dropdown-menu-color" className="absolute top-full left-0 mt-2 w-80 bg-white border border-[#e5e5e5] shadow-xl p-3.5 z-30 rounded-md max-h-96 overflow-y-auto">
                  <div className="flex items-center justify-between mb-2.5 px-1 border-b border-sand-border/40 pb-2">
                    <span className="text-[11px] font-semibold text-[#000000]/60 uppercase tracking-wider">
                      Palette Swatches
                    </span>
                    {filters.colors.length > 0 && (
                      <button
                        type="button"
                        onClick={() => updateFilters(prev => ({ ...prev, colors: [] }))}
                        className="text-[10px] text-terracotta underline hover:opacity-80"
                      >
                        Reset
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {AVAILABLE_COLORS.map((c) => {
                      const isSelected = filters.colors.some(col => normalizeText(col) === normalizeText(c.label));
                      const count = facetCounts.colors[c.label] || 0;
                      return (
                        <button
                          key={c.label}
                          type="button"
                          data-testid={`option-color-${c.label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                          onClick={() => toggleColor(c.label)}
                          className={`text-left px-2 py-1.5 text-xs rounded hover:bg-[#fbf9f6] flex items-center justify-between transition-colors ${
                            isSelected ? 'font-semibold bg-[#fbf9f6] text-[#000000]' : 'text-[#000000]/80'
                          }`}
                        >
                          <div className="flex items-center space-x-2 truncate">
                            <span
                              className="w-3.5 h-3.5 rounded-full border border-black/15 flex-shrink-0 relative flex items-center justify-center shadow-xs"
                              style={{ backgroundColor: c.hex }}
                            >
                              {isSelected && <Check className="w-2.5 h-2.5 text-white drop-shadow stroke-[3]" />}
                            </span>
                            <span className="truncate">{c.label}</span>
                          </div>
                          <span className="text-[10px] text-soft-graphite/50 font-mono ml-1">({count})</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Size Dropdown */}
            <div className="relative">
              <button
                type="button"
                data-testid="filter-dropdown-size"
                onClick={() => setActiveDropdown(activeDropdown === 'size' ? null : 'size')}
                className={`px-3.5 py-2 border rounded-full text-xs font-medium flex items-center space-x-2 transition-colors ${
                  filters.sizes.length > 0
                    ? 'border-[#000000] bg-[#000000] text-white'
                    : activeDropdown === 'size'
                    ? 'border-[#000000] bg-white text-[#000000]'
                    : 'border-[#e5e5e5] bg-white text-[#000000] hover:border-[#000000]'
                }`}
              >
                <span>Size {filters.sizes.length > 0 ? `(${filters.sizes.length})` : ''}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'size' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'size' && (
                <div data-testid="dropdown-menu-size" className="absolute top-full left-0 mt-2 w-64 bg-white border border-[#e5e5e5] shadow-xl p-3.5 z-30 rounded-md">
                  <div className="flex items-center justify-between mb-2.5 px-1 border-b border-sand-border/40 pb-2">
                    <span className="text-[11px] font-semibold text-[#000000]/60 uppercase tracking-wider">
                      Available Sizes
                    </span>
                    {filters.sizes.length > 0 && (
                      <button
                        type="button"
                        onClick={() => updateFilters(prev => ({ ...prev, sizes: [] }))}
                        className="text-[10px] text-terracotta underline hover:opacity-80"
                      >
                        Reset
                      </button>
                    )}
                  </div>
                  <div className="space-y-1">
                    {AVAILABLE_SIZES.map((s) => {
                      const isSelected = filters.sizes.some(sz => normalizeText(sz) === normalizeText(s.value));
                      const count = facetCounts.sizes[s.value] || 0;
                      return (
                        <button
                          key={s.value}
                          type="button"
                          data-testid={`option-size-${s.value.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                          onClick={() => toggleSize(s.value)}
                          className={`w-full text-left px-2.5 py-1.5 text-xs rounded hover:bg-[#fbf9f6] flex items-center justify-between transition-colors ${
                            isSelected ? 'font-semibold text-[#000000] bg-[#fbf9f6]' : 'text-[#000000]/80'
                          }`}
                        >
                          <div className="flex items-center space-x-2">
                            <div className={`w-3.5 h-3.5 border rounded flex items-center justify-center ${isSelected ? 'bg-umber border-umber text-white' : 'border-sand-border'}`}>
                              {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                            </div>
                            <span>{s.label}</span>
                          </div>
                          <span className="text-[10px] text-soft-graphite/50 font-mono">({count})</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Clear All Filters Button if any active */}
            {activeFiltersCount > 0 && (
              <button
                type="button"
                data-testid="clear-filters-toolbar"
                onClick={clearAllFilters}
                className="text-xs text-[#000000]/60 underline hover:text-[#000000] flex items-center space-x-1 pl-2 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Clear ({activeFiltersCount})</span>
              </button>
            )}

          </div>

          {/* Mobile Filter Button */}
          <button
            type="button"
            data-testid="mobile-filter-open"
            onClick={() => setMobileFiltersOpen(true)}
            className="lg:hidden px-4 py-2 bg-white border border-[#e5e5e5] text-xs font-medium text-[#000000] flex items-center space-x-2 rounded-full cursor-pointer hover:border-[#000000] transition-colors"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Filters {activeFiltersCount > 0 ? `(${activeFiltersCount})` : ''}</span>
          </button>

          {/* Sort By Dropdown (Right Side) */}
          <div className="flex items-center space-x-2 text-xs font-grotesque">
            <span className="text-[#000000]/60">Sort:</span>
            <select
              data-testid="sort-select"
              value={filters.sortBy}
              onChange={(e) => handleSortChange(e.target.value as any)}
              className="bg-white border border-[#e5e5e5] text-xs text-[#000000] py-2 px-3 rounded-full focus:outline-none focus:border-[#000000] cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High (PKR)</option>
              <option value="price-high">Price: High to Low (PKR)</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

        </div>

        {/* DELIVERABLE: Active Filter Chips Row */}
        {activeFiltersCount > 0 && (
          <div data-testid="active-filter-chips" className="py-3 flex flex-wrap items-center gap-2 border-b border-[#e5e5e5] animate-fadeIn">
            <span className="text-[11px] uppercase tracking-wider text-[#000000]/60 font-semibold mr-1">
              Active:
            </span>
            {filters.categories.map(cat => (
              <button
                key={`chip-cat-${cat}`}
                type="button"
                data-testid={`active-chip-category-${cat.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                onClick={() => removeFilter('category', cat)}
                className="inline-flex items-center space-x-1.5 px-3 py-1 bg-white border border-sand-border text-xs rounded-full text-umber hover:border-umber hover:bg-oat/20 transition-all cursor-pointer shadow-2xs"
              >
                <span>{cat}</span>
                <X className="w-3 h-3 text-[#000000]/50 hover:text-[#000000]" />
              </button>
            ))}
            {filters.materials.map(mat => (
              <button
                key={`chip-mat-${mat}`}
                type="button"
                data-testid={`active-chip-material-${mat.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                onClick={() => removeFilter('material', mat)}
                className="inline-flex items-center space-x-1.5 px-3 py-1 bg-white border border-sand-border text-xs rounded-full text-umber hover:border-umber hover:bg-oat/20 transition-all cursor-pointer shadow-2xs"
              >
                <span>Fabric: {mat}</span>
                <X className="w-3 h-3 text-[#000000]/50 hover:text-[#000000]" />
              </button>
            ))}
            {filters.colors.map(col => (
              <button
                key={`chip-col-${col}`}
                type="button"
                data-testid={`active-chip-color-${col.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                onClick={() => removeFilter('color', col)}
                className="inline-flex items-center space-x-1.5 px-3 py-1 bg-white border border-sand-border text-xs rounded-full text-umber hover:border-umber hover:bg-oat/20 transition-all cursor-pointer shadow-2xs"
              >
                <span>Colour: {col}</span>
                <X className="w-3 h-3 text-[#000000]/50 hover:text-[#000000]" />
              </button>
            ))}
            {filters.sizes.map(sz => (
              <button
                key={`chip-sz-${sz}`}
                type="button"
                data-testid={`active-chip-size-${sz.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                onClick={() => removeFilter('size', sz)}
                className="inline-flex items-center space-x-1.5 px-3 py-1 bg-white border border-sand-border text-xs rounded-full text-umber hover:border-umber hover:bg-oat/20 transition-all cursor-pointer shadow-2xs"
              >
                <span>Size: {sz}</span>
                <X className="w-3 h-3 text-[#000000]/50 hover:text-[#000000]" />
              </button>
            ))}
            <button
              type="button"
              data-testid="clear-all-filters"
              onClick={clearAllFilters}
              className="text-xs text-[#000000]/60 hover:text-[#000000] underline ml-2 py-1 cursor-pointer transition-colors"
            >
              Clear All
            </button>
          </div>
        )}

      </div>

      {/* Main Full-Width 4-Column Responsive Grid */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 pt-6">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-24 bg-white border border-[#e5e5e5] p-8 space-y-3 rounded-md shadow-xs">
            <h3 className="font-awesome text-3xl text-[#000000] font-normal">
              No products found
            </h3>
            <p className="text-xs text-[#000000]/70 font-grotesque max-w-sm mx-auto leading-relaxed">
              We couldn't find any bedding items matching your current filters. Try removing some filters or resetting to view all products.
            </p>
            <button
              type="button"
              data-testid="empty-reset-filters"
              onClick={clearAllFilters}
              className="mt-3 px-6 py-2.5 bg-[#000000] text-white text-xs font-grotesque uppercase tracking-widest hover:bg-[#333333] rounded-full transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelectProduct={onSelectProduct}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        )}
      </div>

      {/* Mobile Filters Drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="fixed inset-0 bg-[#000000]/50 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div data-testid="mobile-filter-drawer" className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#fbf9f6] p-6 shadow-2xl flex flex-col justify-between overflow-y-auto z-10 animate-slideInRight">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#e5e5e5]">
                <span className="font-awesome text-2xl text-[#000000] font-normal">Filters</span>
                <button 
                  type="button"
                  data-testid="mobile-filter-close"
                  onClick={() => setMobileFiltersOpen(false)} 
                  className="p-1 text-[#000000] hover:opacity-70 transition-opacity"
                  aria-label="Close filters"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Filter Options */}
              <div className="mt-5 space-y-6 text-xs font-grotesque">
                
                {/* Categories */}
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="font-semibold text-[#000000] uppercase tracking-wider block">
                      Category
                    </span>
                    {filters.categories.length > 0 && (
                      <button
                        type="button"
                        onClick={() => updateFilters(prev => ({ ...prev, categories: [] }))}
                        className="text-[10px] text-terracotta underline"
                      >
                        Reset
                      </button>
                    )}
                  </div>
                  <div className="space-y-1 max-h-48 overflow-y-auto pr-1">
                    {AVAILABLE_CATEGORIES.map((c) => {
                      const isSelected = filters.categories.some(cat => normalizeText(cat) === normalizeText(c.value));
                      const count = facetCounts.categories[c.value] || 0;
                      return (
                        <button
                          key={c.value}
                          type="button"
                          onClick={() => toggleCategory(c.value)}
                          className={`w-full text-left py-2 px-2.5 rounded flex items-center justify-between transition-colors ${
                            isSelected ? 'bg-[#000000] text-white font-medium' : 'text-[#000000]/80 hover:bg-white'
                          }`}
                        >
                          <span>{c.label}</span>
                          <span className={`text-[10px] font-mono ${isSelected ? 'text-white/70' : 'text-[#000000]/40'}`}>
                            ({count})
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Fabric & Material */}
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="font-semibold text-[#000000] uppercase tracking-wider block">
                      Fabric &amp; Material
                    </span>
                    {filters.materials.length > 0 && (
                      <button
                        type="button"
                        onClick={() => updateFilters(prev => ({ ...prev, materials: [] }))}
                        className="text-[10px] text-terracotta underline"
                      >
                        Reset
                      </button>
                    )}
                  </div>
                  <div className="space-y-1 max-h-48 overflow-y-auto pr-1">
                    {AVAILABLE_MATERIALS.map((m) => {
                      const isSelected = filters.materials.some(mat => normalizeText(mat) === normalizeText(m.value));
                      const count = facetCounts.materials[m.value] || 0;
                      return (
                        <button
                          key={m.value}
                          type="button"
                          onClick={() => toggleMaterial(m.value)}
                          className={`w-full text-left py-2 px-2.5 rounded flex items-center justify-between transition-colors ${
                            isSelected ? 'bg-[#000000] text-white font-medium' : 'text-[#000000]/80 hover:bg-white'
                          }`}
                        >
                          <span className="truncate">{m.label}</span>
                          <span className={`text-[10px] font-mono ${isSelected ? 'text-white/70' : 'text-[#000000]/40'}`}>
                            ({count})
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Colour */}
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="font-semibold text-[#000000] uppercase tracking-wider block">
                      Colour Palette
                    </span>
                    {filters.colors.length > 0 && (
                      <button
                        type="button"
                        onClick={() => updateFilters(prev => ({ ...prev, colors: [] }))}
                        className="text-[10px] text-terracotta underline"
                      >
                        Reset
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-1.5 max-h-44 overflow-y-auto pr-1">
                    {AVAILABLE_COLORS.map((c) => {
                      const isSelected = filters.colors.some(col => normalizeText(col) === normalizeText(c.label));
                      const count = facetCounts.colors[c.label] || 0;
                      return (
                        <button
                          key={c.label}
                          type="button"
                          onClick={() => toggleColor(c.label)}
                          className={`text-left py-1.5 px-2 rounded border flex items-center justify-between transition-colors ${
                            isSelected
                              ? 'bg-[#000000] border-[#000000] text-white'
                              : 'bg-white border-[#e5e5e5] text-[#000000]/80'
                          }`}
                        >
                          <div className="flex items-center space-x-1.5 truncate">
                            <span
                              className="w-3 h-3 rounded-full border border-black/15 flex-shrink-0 shadow-2xs"
                              style={{ backgroundColor: c.hex }}
                            />
                            <span className="truncate text-[11px]">{c.label}</span>
                          </div>
                          <span className={`text-[9px] font-mono ${isSelected ? 'text-white/70' : 'text-[#000000]/40'}`}>
                            ({count})
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Bed Size */}
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="font-semibold text-[#000000] uppercase tracking-wider block">
                      Size
                    </span>
                    {filters.sizes.length > 0 && (
                      <button
                        type="button"
                        onClick={() => updateFilters(prev => ({ ...prev, sizes: [] }))}
                        className="text-[10px] text-terracotta underline"
                      >
                        Reset
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {AVAILABLE_SIZES.map((s) => {
                      const isSelected = filters.sizes.some(sz => normalizeText(sz) === normalizeText(s.value));
                      const count = facetCounts.sizes[s.value] || 0;
                      return (
                        <button
                          key={s.value}
                          type="button"
                          onClick={() => toggleSize(s.value)}
                          className={`py-2 px-2.5 border text-center rounded text-xs flex items-center justify-between transition-colors ${
                            isSelected
                              ? 'bg-[#000000] text-white font-medium border-[#000000]'
                              : 'bg-white border-[#e5e5e5] text-[#000000] hover:border-[#000000]'
                          }`}
                        >
                          <span>{s.label}</span>
                          <span className={`text-[10px] font-mono ${isSelected ? 'text-white/70' : 'text-[#000000]/40'}`}>
                            ({count})
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>
            </div>

            <div className="pt-6 border-t border-[#e5e5e5] flex space-x-2 mt-6">
              <button
                type="button"
                data-testid="mobile-filter-reset"
                onClick={clearAllFilters}
                className="flex-1 py-3 border border-[#e5e5e5] text-xs text-[#000000] font-grotesque uppercase tracking-wider rounded hover:bg-white transition-colors cursor-pointer"
              >
                Reset
              </button>
              <button
                type="button"
                data-testid="mobile-filter-apply"
                onClick={() => setMobileFiltersOpen(false)}
                className="flex-1 py-3 bg-[#000000] text-white text-xs font-grotesque uppercase tracking-wider font-semibold rounded hover:bg-[#333333] transition-colors cursor-pointer"
              >
                View ({filteredProducts.length})
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
