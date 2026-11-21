import React from 'react';
import { BeddingCategory } from '../types';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface EditorialVignettesProps {
  onSelectCategory: (category: BeddingCategory | 'all') => void;
  onOpenMaterialGuide?: () => void;
}

export const EditorialVignettes: React.FC<EditorialVignettesProps> = ({
  onSelectCategory,
  onOpenMaterialGuide,
}) => {
  return (
    <section 
      id="editorial-vignettes-section"
      className="w-full bg-porcelain py-16 sm:py-24 border-b border-sand-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
        
        {/* 
          VIGNETTE 1: THE TEXTURE & LIVING EDIT
          Asymmetrical Split Feature (7 cols photography + 5 cols editorial narrative)
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Atmospheric Living Photography */}
          <div className="lg:col-span-7 relative">
            <div className="relative overflow-hidden rounded-sm border border-sand-border bg-oat-stone/30 aspect-[4/3] sm:aspect-[16/10] shadow-sm">
              <img
                src="/assets/sheetsociety-catalog/quilt-covers/corduroy-quilt-cover-hunter-green-01.jpg"
                alt="Darcy Corduroy Quilt Cover in Hunter Green styled in sunlit bedroom"
                className="w-full h-full object-cover text-transparent"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              
              {/* Corner Editorial Tag */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-porcelain/95 backdrop-blur-md px-3.5 py-1.5 rounded-sm border border-sand-border text-umber text-[11px] font-grotesque tracking-wider uppercase font-medium shadow-xs">
                <span>The Living Bed · Hunter Green</span>
              </div>
            </div>
          </div>

          {/* Right: Editorial Narrative & Actionable CTAs */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <div>
              <span className="text-[11px] uppercase tracking-[0.22em] text-terracotta font-grotesque font-bold flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5 text-terracotta" />
                <span>The Texture Edit</span>
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-umber font-normal mt-2 leading-tight">
                The Art of the Unmade Bed
              </h2>
            </div>

            <p className="text-sm sm:text-base text-soft-graphite/85 font-sans leading-relaxed">
              Designed to look just as inviting tumbled in morning light as it does freshly made. 
              We pair plush, velvety Darcy corduroy with breathable French flax linen for tactile 
              depth, natural thermoregulation, and effortless lived-in softness that improves with every wash.
            </p>

            {/* Micro Pillars */}
            <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-umber font-sans">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-olive-ink flex-shrink-0" />
                <span>Invisible Zipper Fasteners</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-olive-ink flex-shrink-0" />
                <span>Pre-Washed Lived-in Texture</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-olive-ink flex-shrink-0" />
                <span>OEKO-TEX Standard 100</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-olive-ink flex-shrink-0" />
                <span>55cm Deep Elastic Walls</span>
              </div>
            </div>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4 border-t border-sand-border">
              <button
                type="button"
                onClick={() => onSelectCategory('Quilt Covers')}
                className="px-6 py-3 bg-umber text-porcelain text-xs font-grotesque uppercase tracking-wider font-semibold hover:bg-soft-graphite transition-colors flex items-center justify-center space-x-2 rounded-sm shadow-xs"
              >
                <span>Shop Quilt Covers</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={() => onSelectCategory('all')}
                className="px-6 py-3 bg-chalk text-umber border border-sand-border text-xs font-grotesque uppercase tracking-wider font-semibold hover:bg-porcelain hover:border-umber/40 transition-colors flex items-center justify-center space-x-2 rounded-sm"
              >
                <span>Explore Full Collection</span>
              </button>
            </div>

          </div>

        </div>

        {/* 
          VIGNETTE 2: THE THREE FOUNDATION LAYERS
          Three-Column Coordinated Bedding Suite (Fitted Sheet + Quilt Cover + Bed Cover)
        */}
        <div className="pt-8 border-t border-sand-border">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-olive-ink font-grotesque font-bold">
                The Sleep Foundation
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-umber font-normal mt-1">
                Three Elements of a Restful Night
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-soft-graphite/70 font-sans mt-2 sm:mt-0 max-w-md leading-relaxed">
              Build your bed in purposeful layers for year-round comfort, breathability, and instant style.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Layer 1: Fitted Sheet */}
            <div className="flex flex-col bg-chalk border border-sand-border rounded-sm overflow-hidden group">
              <div className="relative aspect-[4/3] overflow-hidden bg-oat-stone/20">
                <img
                  src="/assets/sheetsociety-catalog/fitted-sheets/fitted-sheet-alex-stripe-01.jpg"
                  alt="Eden Cotton Fitted Sheet with 55cm deep elastic wall"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 text-transparent"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-umber text-porcelain text-[10px] font-grotesque font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm">
                  01 · The Base
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-serif text-xl text-umber font-normal">
                    55cm Deep Fitted Sheet
                  </h4>
                  <p className="text-xs text-soft-graphite/80 font-sans mt-2 leading-relaxed">
                    Extra-deep 55cm walls with 3cm thick ribbed elastic that stays firmly tucked, even on plush pillowtop mattresses.
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-sand-border">
                  <button
                    type="button"
                    onClick={() => onSelectCategory('Fitted Sheets')}
                    className="text-xs font-grotesque uppercase tracking-wider font-semibold text-umber hover:text-olive-ink flex items-center justify-between w-full"
                  >
                    <span>Shop Fitted Sheets</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Layer 2: Quilt Cover */}
            <div className="flex flex-col bg-chalk border border-sand-border rounded-sm overflow-hidden group">
              <div className="relative aspect-[4/3] overflow-hidden bg-oat-stone/20">
                <img
                  src="/assets/sheetsociety-catalog/quilt-covers/chambray-linen-quilt-cover-oatmeal-01.jpg"
                  alt="Chambray Linen Quilt Cover in Oatmeal"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 text-transparent"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-umber text-porcelain text-[10px] font-grotesque font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm">
                  02 · The Centerpiece
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-serif text-xl text-umber font-normal">
                    Tailored Quilt Covers
                  </h4>
                  <p className="text-xs text-soft-graphite/80 font-sans mt-2 leading-relaxed">
                    French flax linen and ribbed corduroy with invisible hidden zippers for rapid, frustration-free bed changes.
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-sand-border">
                  <button
                    type="button"
                    onClick={() => onSelectCategory('Quilt Covers')}
                    className="text-xs font-grotesque uppercase tracking-wider font-semibold text-umber hover:text-olive-ink flex items-center justify-between w-full"
                  >
                    <span>Shop Quilt Covers</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Layer 3: Blankets & Bed Covers */}
            <div className="flex flex-col bg-chalk border border-sand-border rounded-sm overflow-hidden group">
              <div className="relative aspect-[4/3] overflow-hidden bg-oat-stone/20">
                <img
                  src="/assets/sheetsociety-catalog/other-bedding/flannelette-bed-cover-jimmy-stripe-01.jpg"
                  alt="Jimmy Stripe Flannelette Bed Cover"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 text-transparent"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-umber text-porcelain text-[10px] font-grotesque font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm">
                  03 · The Layer
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-serif text-xl text-umber font-normal">
                    Stonewashed Bed Covers
                  </h4>
                  <p className="text-xs text-soft-graphite/80 font-sans mt-2 leading-relaxed">
                    Waffle textures and stonewashed flannelette layers providing weight, visual warmth, and tailored styling at the foot of your bed.
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-sand-border">
                  <button
                    type="button"
                    onClick={() => onSelectCategory('Blankets & Bed Covers')}
                    className="text-xs font-grotesque uppercase tracking-wider font-semibold text-umber hover:text-olive-ink flex items-center justify-between w-full"
                  >
                    <span>Shop Bed Covers</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
