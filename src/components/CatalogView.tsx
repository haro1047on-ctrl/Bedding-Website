import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Product, BeddingCategory, BeddingMaterial, BedSize, ColorVariant } from '../types';
import { ProductCard } from './ProductCard';
import { ChevronDown, X, SlidersHorizontal, Check, RotateCcw } from 'lucide-react';

interface CatalogViewProps {
  products: Product[];
  initialCategory?: BeddingCategory | 'all';
  onSelectProduct: (product: Product, initialColor?: ColorVariant) => void;
  onQuickView: (product: Product) => void;
  onNavigateHome: () => void;
}

export const CatalogView: React.FC<CatalogViewProps> = ({
  products,
  initialCategory = 'all',
  onSelectProduct,
  onQuickView,
  onNavigateHome,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<BeddingCategory | 'all'>(initialCategory);
  const [selectedMaterial, setSelectedMaterial] = useState<string>('all');
  const [selectedColor, setSelectedColor] = useState<string>('all');
  const [selectedSize, setSelectedSize] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');
  const [activeDropdown, setActiveDropdown] = useState<'material' | 'color' | 'size' | 'sort' | null>(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Synchronize category when parent changes initialCategory while catalogue is mounted
  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

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

  const categories: { label: string; value: BeddingCategory | 'all' }[] = [
    { label: 'All Bedding', value: 'all' },
    { label: 'Quilt Covers', value: 'Quilt Covers' },
    { label: 'Fitted Sheets', value: 'Fitted Sheets' },
    { label: 'Flat Sheets', value: 'Flat Sheets' },
    { label: 'Pillowcases', value: 'Pillowcases' },
    { label: 'Bed Sheets & Sets', value: 'Bed Sheets & Sets' },
    { label: 'Blankets & Bed Covers', value: 'Blankets & Bed Covers' },
  ];

  const materials: BeddingMaterial[] = [
    'Eve Linen',
    'Darcy Corduroy',
    'Eden Cotton',
    'Jude Organic Cotton',
    'Frankie Flannelette',
    'Leo Washed Cotton',
    'Sofia Ruched Cotton',
  ];

  const colors = [
    { label: 'White', hex: '#ffffff' },
    { label: 'Warm White', hex: '#f2ebdf' },
    { label: 'Cloud', hex: '#D5D5D8' },
    { label: 'Russet', hex: '#7E212A' },
    { label: 'Olive', hex: '#A39264' },
    { label: 'Hunter Green', hex: '#415141' },
    { label: 'Terracotta', hex: '#c87b4b' },
    { label: 'Sage', hex: '#a8b09f' },
    { label: 'Marshmallow', hex: '#EEE0DC' },
    { label: 'Chocolate', hex: '#574138' },
    { label: 'Oatmeal', hex: '#e9dfcf' },
    { label: 'Bay Blue', hex: '#A3BBE0' },
  ];

  const sizes: BedSize[] = ['Single', 'Double', 'Queen', 'King', 'Super King', 'Standard'];

  // Filter & Sort logic
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        if (selectedCategory !== 'all' && p.category !== selectedCategory) return false;
        if (selectedMaterial !== 'all' && p.material !== selectedMaterial) return false;
        if (selectedColor !== 'all' && !p.colors.some(c => c.name.toLowerCase().includes(selectedColor.toLowerCase()))) return false;
        if (selectedSize !== 'all' && !p.sizes.includes(selectedSize as BedSize)) return false;
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return (a.minPrice || a.price) - (b.minPrice || b.price);
        if (sortBy === 'price-high') return (b.minPrice || b.price) - (a.minPrice || a.price);
        if (sortBy === 'rating') return b.rating - a.rating;
        return (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0);
      });
  }, [products, selectedCategory, selectedMaterial, selectedColor, selectedSize, sortBy]);

  const activeFiltersCount = 
    (selectedMaterial !== 'all' ? 1 : 0) +
    (selectedColor !== 'all' ? 1 : 0) +
    (selectedSize !== 'all' ? 1 : 0);

  const clearAllFilters = () => {
    setSelectedMaterial('all');
    setSelectedColor('all');
    setSelectedSize('all');
    setActiveDropdown(null);
  };

  const getCategoryTitle = () => {
    if (selectedCategory === 'all') return 'Bedding';
    return selectedCategory;
  };

  const getCategoryDescription = () => {
    switch (selectedCategory) {
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
      default:
        return 'Explore our complete range of bed linen, quilt covers, sheets, and pillowcases. Thoughtfully designed in 100% natural fibres with cohesive palettes and lived-in softness.';
    }
  };

  return (
    <div className="w-full bg-[#fbf9f6] min-h-screen pb-24 pt-24 sm:pt-28 font-grotesque text-[#000000]">
      
      {/* Editorial Title Banner */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 pt-6 pb-6">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-xs font-grotesque text-[#000000]/50 mb-3" aria-label="Breadcrumb">
          <button onClick={onNavigateHome} className="hover:text-[#000000] transition-colors">
            Home
          </button>
          <span>/</span>
          <span className="text-[#000000]/70">Bedding</span>
          {selectedCategory !== 'all' && (
            <>
              <span>/</span>
              <span className="text-[#000000] font-medium">{selectedCategory}</span>
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

          <div className="text-xs font-grotesque text-[#000000]/60 whitespace-nowrap self-start md:self-end">
            Showing <strong className="text-[#000000] font-medium">{filteredProducts.length}</strong> products
          </div>
        </div>

        {/* Sheet Society Horizontal Category Pill Strip */}
        <div className="py-4 flex items-center space-x-2 overflow-x-auto no-scrollbar border-b border-[#e5e5e5]">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.value;
            return (
              <button
                key={cat.label}
                type="button"
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide whitespace-nowrap transition-all duration-150 ${
                  isActive
                    ? 'bg-[#000000] text-[#fbf9f6] shadow-sm'
                    : 'bg-white border border-[#e5e5e5] text-[#000000] hover:border-[#000000]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Sheet Society Horizontal Filter Dropdown Toolbar */}
        <div ref={dropdownRef} className="relative py-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#e5e5e5]">
          
          {/* Desktop Filter Dropdown Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            
            {/* Fabric Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'material' ? null : 'material')}
                className={`px-3.5 py-2 border rounded-full text-xs font-medium flex items-center space-x-2 transition-colors ${
                  selectedMaterial !== 'all'
                    ? 'border-[#000000] bg-[#000000] text-white'
                    : activeDropdown === 'material'
                    ? 'border-[#000000] bg-white text-[#000000]'
                    : 'border-[#e5e5e5] bg-white text-[#000000] hover:border-[#000000]'
                }`}
              >
                <span>Fabric {selectedMaterial !== 'all' ? `: ${selectedMaterial}` : ''}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'material' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'material' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-[#e5e5e5] shadow-xl p-3 z-30 rounded-md">
                  <div className="text-[11px] font-semibold text-[#000000]/60 uppercase tracking-wider mb-2 px-1">
                    Select Fabric
                  </div>
                  <div className="space-y-1">
                    <button
                      type="button"
                      onClick={() => { setSelectedMaterial('all'); setActiveDropdown(null); }}
                      className={`w-full text-left px-2.5 py-1.5 text-xs rounded hover:bg-[#fbf9f6] flex items-center justify-between ${
                        selectedMaterial === 'all' ? 'font-semibold text-[#000000]' : 'text-[#000000]/80'
                      }`}
                    >
                      <span>All Fabrics</span>
                      {selectedMaterial === 'all' && <Check className="w-3.5 h-3.5" />}
                    </button>
                    {materials.map((mat) => (
                      <button
                        key={mat}
                        type="button"
                        onClick={() => { setSelectedMaterial(mat); setActiveDropdown(null); }}
                        className={`w-full text-left px-2.5 py-1.5 text-xs rounded hover:bg-[#fbf9f6] flex items-center justify-between ${
                          selectedMaterial === mat ? 'font-semibold text-[#000000]' : 'text-[#000000]/80'
                        }`}
                      >
                        <span>{mat}</span>
                        {selectedMaterial === mat && <Check className="w-3.5 h-3.5" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Colour Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'color' ? null : 'color')}
                className={`px-3.5 py-2 border rounded-full text-xs font-medium flex items-center space-x-2 transition-colors ${
                  selectedColor !== 'all'
                    ? 'border-[#000000] bg-[#000000] text-white'
                    : activeDropdown === 'color'
                    ? 'border-[#000000] bg-white text-[#000000]'
                    : 'border-[#e5e5e5] bg-white text-[#000000] hover:border-[#000000]'
                }`}
              >
                <span>Colour {selectedColor !== 'all' ? `: ${selectedColor}` : ''}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'color' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'color' && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white border border-[#e5e5e5] shadow-xl p-3.5 z-30 rounded-md">
                  <div className="text-[11px] font-semibold text-[#000000]/60 uppercase tracking-wider mb-2.5">
                    Palette Swatches
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    <button
                      type="button"
                      onClick={() => { setSelectedColor('all'); setActiveDropdown(null); }}
                      className={`col-span-2 text-left px-2.5 py-1.5 text-xs rounded hover:bg-[#fbf9f6] flex items-center justify-between ${
                        selectedColor === 'all' ? 'font-semibold text-[#000000]' : 'text-[#000000]/80'
                      }`}
                    >
                      <span>All Colours</span>
                      {selectedColor === 'all' && <Check className="w-3.5 h-3.5" />}
                    </button>
                    {colors.map((c) => (
                      <button
                        key={c.label}
                        type="button"
                        onClick={() => { setSelectedColor(c.label); setActiveDropdown(null); }}
                        className={`text-left px-2 py-1.5 text-xs rounded hover:bg-[#fbf9f6] flex items-center space-x-2 ${
                          selectedColor === c.label ? 'font-semibold bg-[#fbf9f6]' : 'text-[#000000]/80'
                        }`}
                      >
                        <span className="w-3.5 h-3.5 rounded-full border border-black/15 flex-shrink-0" style={{ backgroundColor: c.hex }} />
                        <span className="truncate">{c.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Size Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'size' ? null : 'size')}
                className={`px-3.5 py-2 border rounded-full text-xs font-medium flex items-center space-x-2 transition-colors ${
                  selectedSize !== 'all'
                    ? 'border-[#000000] bg-[#000000] text-white'
                    : activeDropdown === 'size'
                    ? 'border-[#000000] bg-white text-[#000000]'
                    : 'border-[#e5e5e5] bg-white text-[#000000] hover:border-[#000000]'
                }`}
              >
                <span>Size {selectedSize !== 'all' ? `: ${selectedSize}` : ''}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'size' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'size' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-[#e5e5e5] shadow-xl p-3 z-30 rounded-md">
                  <div className="text-[11px] font-semibold text-[#000000]/60 uppercase tracking-wider mb-2 px-1">
                    Bed Size
                  </div>
                  <div className="space-y-1">
                    <button
                      type="button"
                      onClick={() => { setSelectedSize('all'); setActiveDropdown(null); }}
                      className={`w-full text-left px-2.5 py-1.5 text-xs rounded hover:bg-[#fbf9f6] flex items-center justify-between ${
                        selectedSize === 'all' ? 'font-semibold text-[#000000]' : 'text-[#000000]/80'
                      }`}
                    >
                      <span>All Sizes</span>
                      {selectedSize === 'all' && <Check className="w-3.5 h-3.5" />}
                    </button>
                    {sizes.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => { setSelectedSize(s); setActiveDropdown(null); }}
                        className={`w-full text-left px-2.5 py-1.5 text-xs rounded hover:bg-[#fbf9f6] flex items-center justify-between ${
                          selectedSize === s ? 'font-semibold text-[#000000]' : 'text-[#000000]/80'
                        }`}
                      >
                        <span>{s}</span>
                        {selectedSize === s && <Check className="w-3.5 h-3.5" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Clear Filters Button if any active */}
            {activeFiltersCount > 0 && (
              <button
                type="button"
                onClick={clearAllFilters}
                className="text-xs text-[#000000]/60 underline hover:text-[#000000] flex items-center space-x-1 pl-2"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Clear ({activeFiltersCount})</span>
              </button>
            )}

          </div>

          {/* Mobile Filter Button */}
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(true)}
            className="lg:hidden px-4 py-2 bg-white border border-[#e5e5e5] text-xs font-medium text-[#000000] flex items-center space-x-2 rounded-full"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Filters {activeFiltersCount > 0 ? `(${activeFiltersCount})` : ''}</span>
          </button>

          {/* Sort By Dropdown (Right Side) */}
          <div className="flex items-center space-x-2 text-xs font-grotesque">
            <span className="text-[#000000]/60">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-white border border-[#e5e5e5] text-xs text-[#000000] py-2 px-3 rounded-full focus:outline-none focus:border-[#000000] cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High (PKR)</option>
              <option value="price-high">Price: High to Low (PKR)</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

        </div>

      </div>

      {/* Main Full-Width 4-Column Responsive Grid */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 pt-6">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-24 bg-white border border-[#e5e5e5] p-8 space-y-3 rounded-md">
            <h3 className="font-awesome text-3xl text-[#000000] font-normal">
              No products found
            </h3>
            <p className="text-xs text-[#000000]/70 font-grotesque max-w-sm mx-auto leading-relaxed">
              We couldn't find any bedding items matching your current filters. Try resetting the filters to view all products.
            </p>
            <button
              type="button"
              onClick={clearAllFilters}
              className="mt-3 px-6 py-2.5 bg-[#000000] text-white text-xs font-grotesque uppercase tracking-widest hover:bg-[#333333] rounded-full"
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
            className="fixed inset-0 bg-[#000000]/50 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#fbf9f6] p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#e5e5e5]">
                <span className="font-awesome text-2xl text-[#000000] font-normal">Filter</span>
                <button onClick={() => setMobileFiltersOpen(false)} className="p-1 text-[#000000]">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Filter Options */}
              <div className="mt-5 space-y-6 text-xs font-grotesque">
                {/* Category */}
                <div>
                  <span className="font-semibold text-[#000000] uppercase tracking-wider block mb-2.5">Category</span>
                  <div className="space-y-1">
                    {categories.map((c) => (
                      <button
                        key={c.label}
                        onClick={() => setSelectedCategory(c.value)}
                        className={`block w-full text-left py-1.5 px-2 rounded ${selectedCategory === c.value ? 'bg-[#000000] text-white font-medium' : 'text-[#000000]/80'}`}
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Fabric */}
                <div>
                  <span className="font-semibold text-[#000000] uppercase tracking-wider block mb-2.5">Fabric & Material</span>
                  <div className="space-y-1">
                    <button
                      onClick={() => setSelectedMaterial('all')}
                      className={`block w-full text-left py-1.5 px-2 rounded ${selectedMaterial === 'all' ? 'bg-[#000000] text-white font-medium' : 'text-[#000000]/80'}`}
                    >
                      All Fabrics
                    </button>
                    {materials.map((m) => (
                      <button
                        key={m}
                        onClick={() => setSelectedMaterial(m)}
                        className={`block w-full text-left py-1.5 px-2 rounded ${selectedMaterial === m ? 'bg-[#000000] text-white font-medium' : 'text-[#000000]/80'}`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Bed Size */}
                <div>
                  <span className="font-semibold text-[#000000] uppercase tracking-wider block mb-2.5">Bed Size</span>
                  <div className="grid grid-cols-2 gap-2">
                    {sizes.map((s) => (
                      <button
                        key={s}
                        onClick={() => setSelectedSize(s)}
                        className={`py-2 border text-center rounded text-xs ${selectedSize === s ? 'bg-[#000000] text-white font-medium border-[#000000]' : 'bg-white border-[#e5e5e5] text-[#000000]'}`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#e5e5e5] flex space-x-2">
              <button
                type="button"
                onClick={clearAllFilters}
                className="flex-1 py-3 border border-[#e5e5e5] text-xs text-[#000000] font-grotesque uppercase tracking-wider rounded"
              >
                Reset
              </button>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="flex-1 py-3 bg-[#000000] text-white text-xs font-grotesque uppercase tracking-wider font-semibold rounded"
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
