import React from 'react';
import { BeddingCategory } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface CategoryStripProps {
  onSelectCategory: (category: BeddingCategory) => void;
}

export const CategoryStrip: React.FC<CategoryStripProps> = ({ onSelectCategory }) => {
  const categories: {
    category: BeddingCategory;
    title: string;
    subtitle: string;
    image: string;
  }[] = [
    {
      category: 'Duvet Covers',
      title: 'Duvet Covers',
      subtitle: 'Pure French flax & crisp percale',
      image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=600&q=80',
    },
    {
      category: 'Sheets & Sets',
      title: 'Bed Sheets',
      subtitle: 'Deep-pocket fitted & flat sheets',
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80',
    },
    {
      category: 'Pillowcases',
      title: 'Pillowcases',
      subtitle: 'French seam envelope closure pairs',
      image: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=600&q=80',
    },
    {
      category: 'Quilts & Comforters',
      title: 'Coverlets & Quilts',
      subtitle: '4-ply cloud gauze & stitch-quilted cotton',
      image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=600&q=80',
    },
    {
      category: 'Blankets & Throws',
      title: 'Throws & Blankets',
      subtitle: 'Brushed waffle & wool-linen textures',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <section className="w-full bg-porcelain py-12 sm:py-16 border-b border-sand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-sand-border">
          <div>
            <span className="text-[11px] uppercase tracking-widest text-olive-ink font-sans font-medium">
              Curated Catalogue
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-umber font-normal mt-1">
              Shop by Room Element
            </h2>
          </div>
          <p className="text-xs text-soft-graphite/70 font-sans mt-2 sm:mt-0 max-w-sm">
            Each piece is crafted with identical color formulas, designed to mix, match, and layer effortlessly.
          </p>
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {categories.map((item) => (
            <button
              key={item.category}
              type="button"
              onClick={() => onSelectCategory(item.category)}
              className="group text-left flex flex-col focus:outline-none"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-oat/20 border border-sand-border">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-umber/0 group-hover:bg-umber/10 transition-colors duration-300" />
                
                <div className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-chalk/90 backdrop-blur-sm flex items-center justify-center text-umber opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-200">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="mt-3">
                <h3 className="font-serif text-base sm:text-lg text-umber group-hover:text-olive-ink transition-colors font-normal">
                  {item.title}
                </h3>
                <p className="text-[11px] text-soft-graphite/60 font-sans mt-0.5 line-clamp-1">
                  {item.subtitle}
                </p>
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
