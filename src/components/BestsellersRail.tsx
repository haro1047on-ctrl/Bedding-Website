import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Product, ColorVariant } from '../types';
import { ProductCard } from './ProductCard';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface BestsellersRailProps {
  products: Product[];
  onSelectProduct: (product: Product, initialColor?: ColorVariant) => void;
  onQuickView: (product: Product, initialColor?: ColorVariant) => void;
  onViewAll: () => void;
}

export const BestsellersRail: React.FC<BestsellersRailProps> = ({
  products,
  onSelectProduct,
  onQuickView,
  onViewAll,
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [scrollIndex, setScrollIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartXRef = useRef<number | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Essentials' },
    { id: 'Quilt Covers', label: 'Quilt Covers' },
    { id: 'Fitted Sheets', label: 'Fitted Sheets' },
    { id: 'Flat Sheets', label: 'Flat Sheets' },
    { id: 'Pillowcases', label: 'Pillowcases' },
    { id: 'Bed Sheets & Sets', label: 'Bed Sheets & Sets' },
    { id: 'Blankets & Bed Covers', label: 'Blankets & Covers' },
  ];

  const filteredProducts = activeTab === 'all'
    ? products
    : products.filter(p => p.category === activeTab);

  // Compute card dimensions and maximum scroll index based on container width
  const updateMetrics = useCallback(() => {
    if (!containerRef.current) return;
    const containerWidth = containerRef.current.clientWidth;
    // Desktop card is ~340px, tablet ~300px, mobile ~270px; gap is 24px (1.5rem)
    const isMobile = window.innerWidth < 640;
    const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024;
    const cardWidth = isMobile ? 270 : isTablet ? 300 : 340;
    const gap = isMobile ? 16 : 24;

    const visibleCards = containerWidth / (cardWidth + gap);
    const calculatedMax = Math.max(0, Math.ceil(filteredProducts.length - visibleCards));
    setMaxIndex(calculatedMax);
    setScrollIndex(prev => Math.min(prev, calculatedMax));
  }, [filteredProducts.length]);

  useEffect(() => {
    updateMetrics();
    window.addEventListener('resize', updateMetrics);
    return () => window.removeEventListener('resize', updateMetrics);
  }, [updateMetrics]);

  // Reset scroll when tab changes
  useEffect(() => {
    setScrollIndex(0);
    updateMetrics();
  }, [activeTab, updateMetrics]);

  const handleNext = () => {
    if (scrollIndex < maxIndex) {
      setScrollIndex(prev => Math.min(prev + 1, maxIndex));
    }
  };

  const handlePrev = () => {
    if (scrollIndex > 0) {
      setScrollIndex(prev => Math.max(prev - 1, 0));
    }
  };

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    if (deltaX < -40) {
      handleNext(); // Swipe left -> advance track left
    } else if (deltaX > 40) {
      handlePrev(); // Swipe right -> advance track right
    }
    touchStartXRef.current = null;
  };

  // Calculate pixel translation offset
  const getCardStep = () => {
    if (typeof window === 'undefined') return 364;
    const isMobile = window.innerWidth < 640;
    const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024;
    const cardWidth = isMobile ? 270 : isTablet ? 300 : 340;
    const gap = isMobile ? 16 : 24;
    return cardWidth + gap;
  };

  const translateX = scrollIndex * getCardStep();
  const progressPercent = maxIndex > 0 ? (scrollIndex / maxIndex) * 100 : 0;

  return (
    <section 
      id="bestsellers-section"
      className="w-full bg-porcelain py-16 sm:py-24 border-b border-sand-border overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 pb-6 border-b border-sand-border">
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-umber/50 font-grotesque block mb-1">
              Most Loved
            </span>
            <h2 className="font-awesome text-3xl sm:text-4xl lg:text-[2.6rem] text-umber font-normal mt-1 leading-tight">
              Best Selling Bedding
            </h2>
            <p className="text-xs sm:text-sm text-soft-graphite/70 font-grotesque mt-1.5 max-w-lg leading-relaxed">
              Our most celebrated fabrics and styles, selected for lived-in comfort, all-season breathability, and enduring longevity.
            </p>
          </div>

          {/* Category Tabs & Carousel Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-6 lg:mt-0">
            {/* Filter Tabs */}
            <div className="flex items-center space-x-1 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              {filterTabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-3.5 py-1.5 text-xs font-grotesque whitespace-nowrap transition-colors rounded-full ${
                      isActive
                        ? 'bg-[#000000] text-white font-medium'
                        : 'text-[#000000]/70 hover:text-[#000000] hover:bg-black/5'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Directional Slide Controls */}
            <div className="flex items-center space-x-3 self-end sm:self-auto">
              {/* Progress Indicator */}
              <div className="hidden sm:flex items-center space-x-2">
                <span className="text-[11px] font-sans text-umber/50 tabular-nums">
                  0{scrollIndex + 1} / 0{maxIndex + 1}
                </span>
                <div className="w-16 h-0.5 bg-sand-border rounded-full overflow-hidden">
                  <div
                    className="h-full bg-umber transition-all duration-300"
                    style={{ width: `${Math.max(15, progressPercent)}%` }}
                  />
                </div>
              </div>

              {/* Prev & Next Arrow Buttons */}
              <div className="flex items-center space-x-1.5">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={scrollIndex === 0}
                  className="w-9 h-9 flex items-center justify-center border border-sand-border bg-chalk hover:border-umber hover:text-umber text-soft-graphite disabled:opacity-30 disabled:pointer-events-none transition-all rounded-sm shadow-sm"
                  aria-label="Previous products"
                >
                  <ArrowLeft className="w-4 h-4 stroke-[1.5]" />
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  disabled={scrollIndex >= maxIndex}
                  className="w-9 h-9 flex items-center justify-center border border-sand-border bg-chalk hover:border-umber hover:text-umber text-soft-graphite disabled:opacity-30 disabled:pointer-events-none transition-all rounded-sm shadow-sm"
                  aria-label="Next products"
                >
                  <ArrowRight className="w-4 h-4 stroke-[1.5]" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 
          Single-Row Horizontal Product Track
          Visibly moves left on Next and right on Prev with 600ms easing.
        */}
        <div 
          ref={containerRef}
          className="relative w-full overflow-hidden py-2"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            ref={trackRef}
            className="flex will-change-transform"
            style={{
              transform: `translateX(-${translateX}px)`,
              transition: 'transform 600ms cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="w-[270px] sm:w-[300px] lg:w-[340px] flex-shrink-0 mr-4 sm:mr-6"
              >
                <ProductCard
                  product={product}
                  onSelectProduct={onSelectProduct}
                  onQuickView={onQuickView}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Footer Link / View All */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-sand-border text-xs font-sans text-umber/70">
          <p className="mb-4 sm:mb-0">
            Complimentary swatches & tactile fabric samples available upon request.
          </p>
          <button
            type="button"
            onClick={onViewAll}
            className="inline-flex items-center space-x-2 px-7 py-3 border border-umber text-umber hover:bg-umber hover:text-porcelain uppercase tracking-widest font-medium transition-all duration-200 group"
          >
            <span>View All ({products.length} Atelier Designs)</span>
            <ArrowRight className="w-3.5 h-3.5 text-olive-ink group-hover:text-porcelain group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
