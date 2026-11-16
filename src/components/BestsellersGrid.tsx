import React, { useState } from 'react';
import { Product, ColorVariant } from '../types';
import { ProductCard } from './ProductCard';
import { ArrowRight } from 'lucide-react';

interface BestsellersGridProps {
  products: Product[];
  onSelectProduct: (product: Product, initialColor?: ColorVariant) => void;
  onQuickView: (product: Product) => void;
  onViewAll: () => void;
}

export const BestsellersGrid: React.FC<BestsellersGridProps> = ({
  products,
  onSelectProduct,
  onQuickView,
  onViewAll,
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Atelier Pieces' },
    { id: 'Duvet Covers', label: 'Duvet Covers' },
    { id: 'Sheets & Sets', label: 'Bed Sheets' },
    { id: 'Pillowcases', label: 'Pillowcases' },
    { id: 'Quilts & Comforters', label: 'Quilts & Gauze' },
    { id: 'Blankets & Throws', label: 'Blankets & Throws' },
  ];

  const filteredProducts = activeTab === 'all'
    ? products
    : products.filter(p => p.category === activeTab);

  return (
    <section className="w-full bg-porcelain py-16 sm:py-20 border-b border-sand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Title and Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-sand-border">
          <div>
            <span className="text-[11px] uppercase tracking-widest text-olive-ink font-sans font-medium">
              Curated Selection
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-umber font-normal mt-1">
              Atelier Bestsellers & Essentials
            </h2>
            <p className="text-xs sm:text-sm text-soft-graphite/70 font-sans mt-1 max-w-lg">
              Our most celebrated weaves, selected for their tactile softness, all-season breathability, and enduring longevity.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto pb-2 md:pb-0 mt-4 md:mt-0 scrollbar-none">
            {filterTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-1.5 text-xs font-sans whitespace-nowrap transition-colors ${
                    isActive
                      ? 'bg-umber text-porcelain font-medium'
                      : 'text-soft-graphite/70 hover:text-umber hover:bg-oat/30'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 4-Column Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={onSelectProduct}
              onQuickView={onQuickView}
            />
          ))}
        </div>

        {/* Footer Link */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={onViewAll}
            className="inline-flex items-center space-x-2 px-8 py-3.5 border border-umber text-umber hover:bg-umber hover:text-porcelain text-xs font-sans uppercase tracking-widest font-medium transition-all duration-200 group"
          >
            <span>View Complete Catalogue ({products.length} Designs)</span>
            <ArrowRight className="w-3.5 h-3.5 text-olive-ink group-hover:text-porcelain group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
