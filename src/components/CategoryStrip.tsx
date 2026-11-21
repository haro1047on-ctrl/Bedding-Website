import React, { useRef, useState, useEffect } from 'react';
import { BeddingCategory } from '../types';
import { ArrowUpRight, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface CategoryStripProps {
  onSelectCategory: (category: BeddingCategory | 'all') => void;
  activeCategory?: BeddingCategory | 'all';
}

interface CategoryPill {
  label: string;
  value: BeddingCategory | 'all';
  count: number;
}

export const CategoryStrip: React.FC<CategoryStripProps> = ({ 
  onSelectCategory,
  activeCategory = 'all' 
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // The comprehensive categories matching Sheet Society reference
  const categoryPills: CategoryPill[] = [
    { label: 'All Bedding', value: 'all', count: 167 },
    { label: 'Quilt Covers', value: 'Quilt Covers', count: 15 },
    { label: 'Fitted Sheets', value: 'Fitted Sheets', count: 8 },
    { label: 'Flat Sheets', value: 'Flat Sheets', count: 8 },
    { label: 'Pillowcases', value: 'Pillowcases', count: 10 },
    { label: 'Bed Sheets & Sets', value: 'Bed Sheets & Sets', count: 18 },
    { label: 'Blankets & Bed Covers', value: 'Blankets & Bed Covers', count: 19 },
    { label: 'Quilts & Pillows', value: 'Quilts & Pillows', count: 12 },
    { label: 'Protectors & Toppers', value: 'Protectors & Toppers', count: 7 },
    { label: 'Cushions', value: 'Cushions', count: 31 },
    { label: 'Bath & Towels', value: 'Bath & Towels', count: 6 },
    { label: 'Sleepwear', value: 'Sleepwear', count: 9 },
    { label: 'Wellness', value: 'Wellness', count: 8 },
    { label: 'Kids & Baby', value: 'Kids & Baby', count: 16 },
  ];

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    checkScrollability();
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener('scroll', checkScrollability, { passive: true });
      window.addEventListener('resize', checkScrollability);
      return () => {
        el.removeEventListener('scroll', checkScrollability);
        window.removeEventListener('resize', checkScrollability);
      };
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const offset = direction === 'left' ? -280 : 280;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="category-discovery-section"
      className="w-full bg-porcelain pt-8 pb-16 sm:pb-24 border-b border-sand-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 
          DELIVERABLE B: HORIZONTAL CATEGORY PILL STRIP
          Horizontally arranged pills with active, hover, and focus states,
          smooth horizontal scrolling, and zero page-level horizontal overflow.
        */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-3 px-1">
            <span className="text-[11px] uppercase tracking-[0.2em] text-umber/60 font-grotesque font-semibold">
              Browse by Department
            </span>
            <div className="hidden sm:flex items-center space-x-1.5">
              <button
                type="button"
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                aria-label="Scroll categories left"
                className={`p-1.5 rounded-full border border-sand-border transition-colors ${
                  canScrollLeft 
                    ? 'text-umber bg-chalk hover:bg-oat/40 cursor-pointer' 
                    : 'text-umber/20 bg-porcelain cursor-not-allowed opacity-40'
                }`}
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                aria-label="Scroll categories right"
                className={`p-1.5 rounded-full border border-sand-border transition-colors ${
                  canScrollRight 
                    ? 'text-umber bg-chalk hover:bg-oat/40 cursor-pointer' 
                    : 'text-umber/20 bg-porcelain cursor-not-allowed opacity-40'
                }`}
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Pill scroll container with hidden scrollbar and edge fades */}
          <div className="relative">
            {canScrollLeft && (
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-porcelain to-transparent pointer-events-none z-10" />
            )}
            
            <div 
              ref={scrollContainerRef}
              className="flex items-center space-x-2 sm:space-x-2.5 overflow-x-auto scrollbar-none py-2 px-1 focus:outline-none"
              tabIndex={0}
              aria-label="Category pill navigation"
            >
              {categoryPills.map((pill) => {
                const isActive = activeCategory === pill.value;
                return (
                  <button
                    key={pill.label}
                    type="button"
                    onClick={() => onSelectCategory(pill.value)}
                    className={`flex items-center space-x-1.5 px-4 py-2 rounded-full text-xs font-grotesque tracking-wider uppercase whitespace-nowrap transition-all duration-200 focus-visible:ring-2 focus-visible:ring-umber focus-visible:outline-none flex-shrink-0 ${
                      isActive
                        ? 'bg-umber text-porcelain border border-umber font-semibold shadow-sm'
                        : 'bg-chalk text-umber/80 border border-sand-border hover:border-umber/50 hover:bg-porcelain hover:text-umber shadow-xs'
                    }`}
                  >
                    <span>{pill.label}</span>
                    <span className={`text-[10px] font-mono ${isActive ? 'text-porcelain/70' : 'text-umber/40'}`}>
                      {pill.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {canScrollRight && (
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-porcelain to-transparent pointer-events-none z-10" />
            )}
          </div>
        </div>

        {/* Editorial Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-6 border-b border-sand-border">
          <div>
            <span className="text-[11px] uppercase tracking-widest text-olive-ink font-sans font-medium">
              Curated Discovery
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] text-umber font-normal mt-1 leading-tight">
              Shop by Bedroom Element
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-soft-graphite/70 font-sans mt-2 sm:mt-0 max-w-md leading-relaxed">
            Every piece is dyed with cohesive earthy palettes, designed to layer, mix and coordinate naturally across seasons.
          </p>
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Featured Large Hero Category Tile (5 cols): Quilt Covers */}
          <div className="lg:col-span-5 flex flex-col">
            <button
              type="button"
              onClick={() => onSelectCategory('Quilt Covers')}
              className="group text-left relative flex-1 flex flex-col overflow-hidden bg-oat-stone/30 border border-sand-border min-h-[380px] sm:min-h-[460px] focus:outline-none focus-visible:ring-2 focus-visible:ring-umber rounded-sm"
            >
              <img
                src="/assets/sheetsociety-catalog/quilt-covers/corduroy-quilt-cover-russet-01.jpg"
                alt="Darcy Corduroy and Eve Linen Quilt Covers"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out text-transparent"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

              {/* Pill corner indicator */}
              <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-chalk/90 backdrop-blur-md flex items-center justify-center text-umber opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                <ArrowUpRight className="w-4 h-4" />
              </div>

              {/* Bottom text block */}
              <div className="relative mt-auto p-6 sm:p-8 z-10 text-chalk">
                <span className="text-[10px] uppercase tracking-[0.2em] font-sans text-chalk/80 font-medium">
                  Signature Weave · 15 Styles
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal mt-1 text-chalk">
                  Quilt Covers
                </h3>
                <p className="text-xs sm:text-sm font-sans text-chalk/80 mt-1.5 max-w-xs leading-relaxed">
                  Pure French flax linen, plush ribbed corduroy and organic cotton with invisible zipper closures.
                </p>
                <div className="inline-flex items-center space-x-1.5 text-xs font-sans uppercase tracking-wider text-chalk font-medium mt-4 pt-2 border-t border-chalk/30 group-hover:text-oat transition-colors">
                  <span>Explore Quilt Covers</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </button>
          </div>

          {/* 4 Complementary Category Tiles (7 cols in 2x2 grid) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Tile 1: Fitted Sheets */}
            <button
              type="button"
              onClick={() => onSelectCategory('Fitted Sheets')}
              className="group text-left relative overflow-hidden bg-oat-stone/30 border border-sand-border aspect-[4/3] sm:aspect-[1/1] focus:outline-none focus-visible:ring-2 focus-visible:ring-umber rounded-sm"
            >
              <img
                src="/assets/sheetsociety-catalog/fitted-sheets/fitted-sheet-alex-stripe-01.jpg"
                alt="Eden Cotton and Eve Linen Fitted Sheets"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out text-transparent"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent pointer-events-none" />
              <div className="relative mt-auto h-full flex flex-col justify-end p-5 sm:p-6 text-chalk">
                <span className="text-[10px] uppercase tracking-[0.18em] font-sans text-chalk/80 font-medium">
                  55cm Deep Pocket · 8 Styles
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-chalk mt-0.5">
                  Fitted Sheets
                </h3>
                <span className="text-xs font-sans text-chalk/75 mt-1 line-clamp-1">
                  Extra deep 55cm wall with 3cm thick ribbed elastic.
                </span>
              </div>
            </button>

            {/* Tile 2: Pillowcases */}
            <button
              type="button"
              onClick={() => onSelectCategory('Pillowcases')}
              className="group text-left relative overflow-hidden bg-oat-stone/30 border border-sand-border aspect-[4/3] sm:aspect-[1/1] focus:outline-none focus-visible:ring-2 focus-visible:ring-umber rounded-sm"
            >
              <img
                src="/assets/sheetsociety-catalog/pillowcases/corduroy-pillowcases-hunter-green-01.jpg"
                alt="Darcy Corduroy and Eve Linen Pillowcases"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out text-transparent"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent pointer-events-none" />
              <div className="relative mt-auto h-full flex flex-col justify-end p-5 sm:p-6 text-chalk">
                <span className="text-[10px] uppercase tracking-[0.18em] font-sans text-chalk/80 font-medium">
                  Standard &amp; European Pairs · 10 Styles
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-chalk mt-0.5">
                  Pillowcase Pairs
                </h3>
                <span className="text-xs font-sans text-chalk/75 mt-1 line-clamp-1">
                  Envelope backs with tailored borders in corduroy and flax.
                </span>
              </div>
            </button>

            {/* Tile 3: Bed Sheets & Sets */}
            <button
              type="button"
              onClick={() => onSelectCategory('Bed Sheets & Sets')}
              className="group text-left relative overflow-hidden bg-oat-stone/30 border border-sand-border aspect-[4/3] sm:aspect-[1/1] focus:outline-none focus-visible:ring-2 focus-visible:ring-umber rounded-sm"
            >
              <img
                src="/assets/sheetsociety-catalog/bed-sheets/washed-cotton-bed-sheets-midnight-rodeo-stripe-01.jpg"
                alt="Washed Cotton Bed Sheets and Sets"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out text-transparent"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent pointer-events-none" />
              <div className="relative mt-auto h-full flex flex-col justify-end p-5 sm:p-6 text-chalk">
                <span className="text-[10px] uppercase tracking-[0.18em] font-sans text-chalk/80 font-medium">
                  Complete Suites · 18 Styles
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-chalk mt-0.5">
                  Bed Sheets &amp; Sets
                </h3>
                <span className="text-xs font-sans text-chalk/75 mt-1 line-clamp-1">
                  Coordinated duvet, fitted, flat sheet and pillowcase suites.
                </span>
              </div>
            </button>

            {/* Tile 4: Blankets & Bed Covers */}
            <button
              type="button"
              onClick={() => onSelectCategory('Blankets & Bed Covers')}
              className="group text-left relative overflow-hidden bg-oat-stone/30 border border-sand-border aspect-[4/3] sm:aspect-[1/1] focus:outline-none focus-visible:ring-2 focus-visible:ring-umber rounded-sm"
            >
              <img
                src="/assets/sheetsociety-catalog/other-bedding/flannelette-bed-cover-jimmy-stripe-01.jpg"
                alt="Rory Washed Cotton Blankets and Bed Covers"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out text-transparent"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent pointer-events-none" />
              <div className="relative mt-auto h-full flex flex-col justify-end p-5 sm:p-6 text-chalk">
                <span className="text-[10px] uppercase tracking-[0.18em] font-sans text-chalk/80 font-medium">
                  Rory Washed Cotton · 19 Styles
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-chalk mt-0.5">
                  Blankets &amp; Bed Covers
                </h3>
                <span className="text-xs font-sans text-chalk/75 mt-1 line-clamp-1">
                  Textured, stonewashed layered warmth for the foot of the bed.
                </span>
              </div>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
