import React from 'react';
import { BeddingCategory } from '../types';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

interface CategoryStripProps {
  onSelectCategory: (category: BeddingCategory) => void;
}

export const CategoryStrip: React.FC<CategoryStripProps> = ({ onSelectCategory }) => {
  return (
    <section 
      id="category-discovery-section"
      className="w-full bg-porcelain py-16 sm:py-24 border-b border-sand-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
          
          {/* Featured Large Hero Category Tile (5 cols): Duvet Covers */}
          <div className="lg:col-span-5 flex flex-col">
            <button
              type="button"
              onClick={() => onSelectCategory('Duvet Covers')}
              className="group text-left relative flex-1 flex flex-col overflow-hidden bg-oat-stone/30 border border-sand-border min-h-[380px] sm:min-h-[460px] focus:outline-none"
            >
              <img
                src="https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1200&q=85"
                alt="Normandy Washed Linen Duvet Covers in serene sunlit room"
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
                  Signature Weave · 6 Styles
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal mt-1 text-chalk">
                  Duvet Covers
                </h3>
                <p className="text-xs sm:text-sm font-sans text-chalk/80 mt-1.5 max-w-xs leading-relaxed">
                  100% Normandy flax and organic cotton with hidden corozo closures.
                </p>
                <div className="inline-flex items-center space-x-1.5 text-xs font-sans uppercase tracking-wider text-chalk font-medium mt-4 pt-2 border-t border-chalk/30 group-hover:text-oat transition-colors">
                  <span>Explore Duvet Covers</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </button>
          </div>

          {/* 4 Complementary Category Tiles (7 cols in 2x2 grid) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Tile 1: Sheets & Sets */}
            <button
              type="button"
              onClick={() => onSelectCategory('Sheets & Sets')}
              className="group text-left relative overflow-hidden bg-oat-stone/30 border border-sand-border aspect-[4/3] sm:aspect-[1/1] focus:outline-none"
            >
              <img
                src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=85"
                alt="Crisp Organic Percale Sheet Sets"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out text-transparent"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent pointer-events-none" />
              <div className="relative mt-auto h-full flex flex-col justify-end p-5 sm:p-6 text-chalk">
                <span className="text-[10px] uppercase tracking-[0.18em] font-sans text-chalk/80 font-medium">
                  300 TC Percale & Linen · 8 Styles
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-chalk mt-0.5">
                  Bed Sheets & Sets
                </h3>
                <span className="text-xs font-sans text-chalk/75 mt-1 line-clamp-1">
                  17" deep pocket fitted and tailored flat sheets.
                </span>
              </div>
            </button>

            {/* Tile 2: Pillowcases */}
            <button
              type="button"
              onClick={() => onSelectCategory('Pillowcases')}
              className="group text-left relative overflow-hidden bg-oat-stone/30 border border-sand-border aspect-[4/3] sm:aspect-[1/1] focus:outline-none"
            >
              <img
                src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=85"
                alt="French Seam Linen Pillowcases"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out text-transparent"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent pointer-events-none" />
              <div className="relative mt-auto h-full flex flex-col justify-end p-5 sm:p-6 text-chalk">
                <span className="text-[10px] uppercase tracking-[0.18em] font-sans text-chalk/80 font-medium">
                  Envelope Pair · 5 Colors
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-chalk mt-0.5">
                  Pillowcase Pairs
                </h3>
                <span className="text-xs font-sans text-chalk/75 mt-1 line-clamp-1">
                  Tailored French seams and deep envelope back folds.
                </span>
              </div>
            </button>

            {/* Tile 3: Quilts & Comforters */}
            <button
              type="button"
              onClick={() => onSelectCategory('Quilts & Comforters')}
              className="group text-left relative overflow-hidden bg-oat-stone/30 border border-sand-border aspect-[4/3] sm:aspect-[1/1] focus:outline-none"
            >
              <img
                src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=85"
                alt="4-Ply Cloud Cotton Gauze Coverlets"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out text-transparent"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent pointer-events-none" />
              <div className="relative mt-auto h-full flex flex-col justify-end p-5 sm:p-6 text-chalk">
                <span className="text-[10px] uppercase tracking-[0.18em] font-sans text-chalk/80 font-medium">
                  4-Ply Muslin & Box Quilt · 4 Styles
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-chalk mt-0.5">
                  Quilts & Coverlets
                </h3>
                <span className="text-xs font-sans text-chalk/75 mt-1 line-clamp-1">
                  Air-spun four-layer muslin with pillowy loft.
                </span>
              </div>
            </button>

            {/* Tile 4: Blankets & Throws */}
            <button
              type="button"
              onClick={() => onSelectCategory('Blankets & Throws')}
              className="group text-left relative overflow-hidden bg-oat-stone/30 border border-sand-border aspect-[4/3] sm:aspect-[1/1] focus:outline-none"
            >
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=85"
                alt="Textured Waffle Wool-Linen Throws"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out text-transparent"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent pointer-events-none" />
              <div className="relative mt-auto h-full flex flex-col justify-end p-5 sm:p-6 text-chalk">
                <span className="text-[10px] uppercase tracking-[0.18em] font-sans text-chalk/80 font-medium">
                  Textured Waffle & Wool · 3 Weaves
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-chalk mt-0.5">
                  Throws & Blankets
                </h3>
                <span className="text-xs font-sans text-chalk/75 mt-1 line-clamp-1">
                  Brushed natural weaves for layering at foot of bed.
                </span>
              </div>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
