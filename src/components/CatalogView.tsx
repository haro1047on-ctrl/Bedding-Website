import React, { useState, useMemo } from 'react';
import { Product, BeddingCategory, BeddingMaterial, BedSize, ColorVariant } from '../types';
import { ProductCard } from './ProductCard';
import { SlidersHorizontal, X } from 'lucide-react';

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
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const categories: (BeddingCategory | 'all')[] = [
    'all',
    'Quilt Covers',
    'Fitted Sheets',
    'Flat Sheets',
    'Pillowcases',
    'Bed Sheets & Sets',
    'Blankets & Bed Covers',
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
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0);
      });
  }, [products, selectedCategory, selectedMaterial, selectedColor, selectedSize, sortBy]);

  const activeFiltersCount = 
    (selectedCategory !== 'all' ? 1 : 0) +
    (selectedMaterial !== 'all' ? 1 : 0) +
    (selectedColor !== 'all' ? 1 : 0) +
    (selectedSize !== 'all' ? 1 : 0);

  const clearAllFilters = () => {
    setSelectedCategory('all');
    setSelectedMaterial('all');
    setSelectedColor('all');
    setSelectedSize('all');
  };

  return (
    <div className="w-full bg-porcelain min-h-screen pb-20 pt-24 sm:pt-28">
      
      {/* Catalog Header Banner */}
      <div className="border-b border-sand-border bg-chalk py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-xs font-sans text-umber/50 mb-3" aria-label="Breadcrumb">
            <button onClick={onNavigateHome} className="hover:text-umber transition-colors">
              Home
            </button>
            <span>/</span>
            <span className="text-umber font-medium">The Bedding Atelier</span>
            {selectedCategory !== 'all' && (
              <>
                <span>/</span>
                <span className="text-terracotta font-medium">{selectedCategory}</span>
              </>
            )}
          </nav>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-umber font-normal">
            {selectedCategory === 'all' ? 'All Bedding Designs' : selectedCategory}
          </h1>

          <p className="text-xs sm:text-sm text-soft-graphite/70 font-sans mt-2 max-w-xl leading-relaxed">
            Pure coastal Normandy flax, GOTS organic percale, and cloud cotton gauze. Tailored on heritage looms for everyday comfort and lasting tactile beauty. All prices in PKR (Rs.).
          </p>

        </div>
      </div>

      {/* Main Catalog Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Controls Toolbar: Active Filters, Mobile Trigger, Sort Dropdown */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-sand-border">
          
          <div className="flex items-center space-x-3">
            {/* Mobile Filter Button */}
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="lg:hidden px-3.5 py-2 bg-chalk border border-sand-border text-xs font-sans text-umber flex items-center space-x-2"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}</span>
            </button>

            <span className="text-xs font-sans text-umber/60">
              Showing <strong>{filteredProducts.length}</strong> of {products.length} designs
            </span>
          </div>

          {/* Sort By Dropdown */}
          <div className="flex items-center space-x-2 text-xs font-sans">
            <label htmlFor="sort-select" className="text-umber/60">Sort by:</label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-chalk border border-sand-border text-xs text-umber py-1.5 px-3 focus:outline-none focus:border-umber cursor-pointer"
            >
              <option value="featured">Featured Atelier Pieces</option>
              <option value="price-low">Price: Low to High (PKR)</option>
              <option value="price-high">Price: High to Low (PKR)</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

        </div>

        {/* Active Filter Pills Bar (if any selected) */}
        {activeFiltersCount > 0 && (
          <div className="py-3 flex items-center flex-wrap gap-2 border-b border-sand-border">
            <span className="text-[11px] text-umber/50 font-sans">Active:</span>

            {selectedCategory !== 'all' && (
              <span className="inline-flex items-center space-x-1 px-2.5 py-1 bg-chalk border border-sand-border text-xs text-umber">
                <span>{selectedCategory}</span>
                <button onClick={() => setSelectedCategory('all')} className="hover:text-terracotta">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {selectedMaterial !== 'all' && (
              <span className="inline-flex items-center space-x-1 px-2.5 py-1 bg-chalk border border-sand-border text-xs text-umber">
                <span>{selectedMaterial}</span>
                <button onClick={() => setSelectedMaterial('all')} className="hover:text-terracotta">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {selectedColor !== 'all' && (
              <span className="inline-flex items-center space-x-1 px-2.5 py-1 bg-chalk border border-sand-border text-xs text-umber">
                <span>{selectedColor}</span>
                <button onClick={() => setSelectedColor('all')} className="hover:text-terracotta">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {selectedSize !== 'all' && (
              <span className="inline-flex items-center space-x-1 px-2.5 py-1 bg-chalk border border-sand-border text-xs text-umber">
                <span>{selectedSize}</span>
                <button onClick={() => setSelectedSize('all')} className="hover:text-terracotta">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            <button
              onClick={clearAllFilters}
              className="text-xs text-terracotta underline ml-2 font-sans hover:text-umber"
            >
              Clear all
            </button>
          </div>
        )}

        {/* Layout Grid: Desktop Sidebar Filters (3 cols) + Product Grid (9 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
          
          {/* Desktop Filter Sidebar */}
          <div className="hidden lg:block lg:col-span-3 space-y-6">
            
            {/* Category Filter */}
            <div className="bg-chalk p-4 border border-sand-border space-y-2.5">
              <span className="text-[11px] uppercase tracking-widest font-semibold text-umber font-sans block">
                Category
              </span>
              <div className="space-y-1 text-xs font-sans">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`block w-full text-left py-1 transition-colors ${
                      selectedCategory === cat ? 'text-olive-ink font-semibold' : 'text-soft-graphite hover:text-umber'
                    }`}
                  >
                    {cat === 'all' ? 'All Bedding' : cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Material Filter */}
            <div className="bg-chalk p-4 border border-sand-border space-y-2.5">
              <span className="text-[11px] uppercase tracking-widest font-semibold text-umber font-sans block">
                Fabric & Material
              </span>
              <div className="space-y-1 text-xs font-sans">
                <button
                  onClick={() => setSelectedMaterial('all')}
                  className={`block w-full text-left py-1 transition-colors ${
                    selectedMaterial === 'all' ? 'text-olive-ink font-semibold' : 'text-soft-graphite hover:text-umber'
                  }`}
                >
                  All Fabrics
                </button>
                {materials.map((mat) => (
                  <button
                    key={mat}
                    onClick={() => setSelectedMaterial(mat)}
                    className={`block w-full text-left py-1 transition-colors ${
                      selectedMaterial === mat ? 'text-olive-ink font-semibold' : 'text-soft-graphite hover:text-umber'
                    }`}
                  >
                    {mat}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Filter */}
            <div className="bg-chalk p-4 border border-sand-border space-y-2.5">
              <span className="text-[11px] uppercase tracking-widest font-semibold text-umber font-sans block">
                Atelier Colorways
              </span>
              <div className="space-y-2 text-xs font-sans">
                <button
                  onClick={() => setSelectedColor('all')}
                  className={`block w-full text-left py-0.5 transition-colors ${
                    selectedColor === 'all' ? 'text-olive-ink font-semibold' : 'text-soft-graphite hover:text-umber'
                  }`}
                >
                  All Colors
                </button>
                {colors.map((c) => (
                  <button
                    key={c.label}
                    onClick={() => setSelectedColor(c.label)}
                    className={`flex items-center space-x-2 w-full text-left py-0.5 ${
                      selectedColor === c.label ? 'text-olive-ink font-semibold' : 'text-soft-graphite hover:text-umber'
                    }`}
                  >
                    <span className="w-3.5 h-3.5 rounded-full border border-sand-border flex-shrink-0" style={{ backgroundColor: c.hex }} />
                    <span>{c.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Size Filter */}
            <div className="bg-chalk p-4 border border-sand-border space-y-2.5">
              <span className="text-[11px] uppercase tracking-widest font-semibold text-umber font-sans block">
                Bed Size
              </span>
              <div className="grid grid-cols-2 gap-1.5 text-xs font-sans">
                <button
                  onClick={() => setSelectedSize('all')}
                  className={`py-1.5 text-center border text-xs ${
                    selectedSize === 'all' ? 'bg-umber text-porcelain font-medium' : 'bg-porcelain border-sand-border text-soft-graphite'
                  }`}
                >
                  All Sizes
                </button>
                {sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`py-1.5 text-center border text-xs ${
                      selectedSize === s ? 'bg-umber text-porcelain font-medium' : 'bg-porcelain border-sand-border text-soft-graphite'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Product Cards Grid (9 cols) */}
          <div className="lg:col-span-9">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20 bg-chalk border border-sand-border p-8 space-y-3">
                <h3 className="font-serif text-2xl text-umber font-normal">
                  No designs match your chosen filters
                </h3>
                <p className="text-xs text-soft-graphite/70 font-sans max-w-sm mx-auto">
                  Try clearing your material, color or size selections to view our full collection.
                </p>
                <button
                  type="button"
                  onClick={clearAllFilters}
                  className="px-6 py-2.5 bg-umber text-porcelain text-xs font-sans uppercase tracking-widest hover:bg-soft-graphite"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

        </div>

      </div>

      {/* Mobile Filters Drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="fixed inset-0 bg-umber/50 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-chalk p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-sand-border">
                <span className="font-serif text-xl text-umber font-normal">Filter Catalogue</span>
                <button onClick={() => setMobileFiltersOpen(false)} className="p-1 text-umber">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Filter Options */}
              <div className="mt-4 space-y-6 text-xs font-sans">
                <div>
                  <span className="font-semibold text-umber uppercase tracking-wider block mb-2">Category</span>
                  <div className="space-y-1">
                    {categories.map((c) => (
                      <button
                        key={c}
                        onClick={() => setSelectedCategory(c)}
                        className={`block w-full text-left py-1 ${selectedCategory === c ? 'text-olive-ink font-semibold' : 'text-soft-graphite'}`}
                      >
                        {c === 'all' ? 'All Bedding' : c}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="font-semibold text-umber uppercase tracking-wider block mb-2">Material</span>
                  <div className="space-y-1">
                    <button
                      onClick={() => setSelectedMaterial('all')}
                      className={`block w-full text-left py-1 ${selectedMaterial === 'all' ? 'text-olive-ink font-semibold' : 'text-soft-graphite'}`}
                    >
                      All Fabrics
                    </button>
                    {materials.map((m) => (
                      <button
                        key={m}
                        onClick={() => setSelectedMaterial(m)}
                        className={`block w-full text-left py-1 ${selectedMaterial === m ? 'text-olive-ink font-semibold' : 'text-soft-graphite'}`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="font-semibold text-umber uppercase tracking-wider block mb-2">Bed Size</span>
                  <div className="grid grid-cols-2 gap-1.5">
                    {sizes.map((s) => (
                      <button
                        key={s}
                        onClick={() => setSelectedSize(s)}
                        className={`py-1.5 border text-center ${selectedSize === s ? 'bg-umber text-porcelain' : 'bg-porcelain border-sand-border text-soft-graphite'}`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-sand-border flex space-x-2">
              <button
                type="button"
                onClick={clearAllFilters}
                className="flex-1 py-2.5 border border-sand-border text-xs text-umber font-sans uppercase tracking-wider"
              >
                Reset
              </button>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="flex-1 py-2.5 bg-umber text-porcelain text-xs font-sans uppercase tracking-wider font-semibold"
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
