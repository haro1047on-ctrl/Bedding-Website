import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { formatPKR } from '../utils/format';

interface HeroProps {
  onExploreCollection: () => void;
  onOpenBuildBed: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreCollection,
  onOpenBuildBed,
}) => {
  return (
    <section className="relative w-full overflow-hidden border-b border-sand-border bg-porcelain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 lg:py-18">
        
        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Typographic & Editorial Storytelling (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6 lg:pr-4">
            
            <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-widest text-olive-ink font-sans font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta"></span>
              <span>Autumn / Winter 2026 Collection</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-umber font-normal tracking-tight leading-[1.08] text-balance">
              Make room for <span className="italic font-normal">slower</span> mornings.
            </h1>

            <p className="font-sans text-sm sm:text-base text-soft-graphite/85 leading-relaxed font-normal text-pretty max-w-lg">
              Thoughtfully made bedding for the everyday rituals that make a room feel like yours. Woven on heritage looms from 100% Normandy flax and long-staple organic cotton.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <button
                type="button"
                onClick={onExploreCollection}
                className="px-7 py-3.5 bg-umber text-porcelain hover:bg-soft-graphite text-xs font-sans uppercase tracking-widest font-medium transition-all duration-200 flex items-center justify-center space-x-2 shadow-subtle group"
              >
                <span>Shop The Collection</span>
                <ArrowRight className="w-3.5 h-3.5 text-oat group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                type="button"
                onClick={onOpenBuildBed}
                className="px-7 py-3.5 bg-transparent border border-umber/40 text-umber hover:border-umber hover:bg-oat/20 text-xs font-sans uppercase tracking-widest font-medium transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-terracotta" />
                <span>Build Your Bed</span>
              </button>
            </div>

            {/* Atelier Quality Proofs */}
            <div className="pt-6 border-t border-sand-border grid grid-cols-2 gap-4 text-xs font-sans text-umber/70">
              <div className="flex items-start space-x-2.5">
                <ShieldCheck className="w-4 h-4 text-olive-ink flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-umber block">100-Night Guarantee</span>
                  <span className="text-[11px] text-umber/60">Sleep with it, wash it, love it</span>
                </div>
              </div>
              <div className="flex items-start space-x-2.5">
                <span className="text-terracotta font-serif text-base leading-none mt-0.5">※</span>
                <div>
                  <span className="font-medium text-umber block">100% Normandy Flax</span>
                  <span className="text-[11px] text-umber/60">Pre-washed stone finish</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual & Tactile Bedroom Scene (7 cols) */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full overflow-hidden bg-oat-stone border border-sand-border shadow-elevated">
              <img
                src="https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1600&q=85"
                alt="Washed Normandy French Flax Bedding in Oat Natural in softly lit modern bedroom"
                className="w-full h-full object-cover object-center image-reveal"
                loading="eager"
              />

              {/* Floating Curated Swatch Vignette */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-chalk/95 backdrop-blur-md p-4 border border-sand-border shadow-elevated">
                <div className="flex items-center justify-between text-xs font-sans mb-1.5">
                  <span className="text-[10px] uppercase tracking-widest text-olive-ink font-medium">Featured Suite</span>
                  <span className="font-medium text-umber font-serif text-sm">{formatPKR(28500)}</span>
                </div>
                <p className="font-serif text-base text-umber">
                  Normandy Washed Linen Duvet Cover
                </p>
                <div className="flex items-center space-x-1.5 mt-2.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#D8CBB8] border border-umber/20" title="Oat Natural" />
                  <span className="w-3.5 h-3.5 rounded-full bg-[#FBF9F5] border border-umber/20" title="Chalk White" />
                  <span className="w-3.5 h-3.5 rounded-full bg-[#596451] border border-umber/20" title="Olive Leaf" />
                  <span className="w-3.5 h-3.5 rounded-full bg-[#B74121] border border-umber/20" title="Terracotta Rust" />
                  <span className="text-[10px] text-umber/60 pl-1 font-sans">+ 2 more hues</span>
                </div>
              </div>

            </div>

            {/* Architectural Sub-caption */}
            <div className="flex justify-between items-center text-[11px] font-sans text-umber/50 pt-2.5 px-1">
              <span>Architecture & Styling: Morning sunlight through arched stone openings</span>
              <span className="font-serif italic">Atelier Ref. Suite No. 01</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
