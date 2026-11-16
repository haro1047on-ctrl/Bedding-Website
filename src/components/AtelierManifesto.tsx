import React from 'react';
import { ArrowRight } from 'lucide-react';

interface AtelierManifestoProps {
  onOpenMaterialGuide: () => void;
}

export const AtelierManifesto: React.FC<AtelierManifestoProps> = ({ onOpenMaterialGuide }) => {
  return (
    <section className="w-full bg-chalk py-16 sm:py-24 border-b border-sand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left: Asymmetric Duo of Editorial Images (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-4">
              <div className="aspect-[3/4] bg-oat/20 border border-sand-border overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80"
                  alt="Close-up macro of pure flax linen textile weave"
                  className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <p className="text-[11px] font-sans text-umber/50 italic">
                Macro weave: 170 GSM Normandy long-strand flax.
              </p>
            </div>

            <div className="space-y-4 pt-8 sm:pt-12">
              <div className="aspect-[3/4] bg-oat/20 border border-sand-border overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80"
                  alt="Bed styled with natural lived-in linen drape in soft morning shadow"
                  className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <p className="text-[11px] font-sans text-umber/50 italic">
                Finished with natural pumice stones in Portugal.
              </p>
            </div>
          </div>

          {/* Right: Atelier Manifesto Statement (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-widest text-olive-ink font-sans font-medium">
              <span>Atelier Manifesto</span>
              <span className="text-oat-dark">/</span>
              <span>Our Philosophy</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-umber font-normal leading-[1.12]">
              Bedding designed for the quiet rituals of life.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-soft-graphite/80 font-sans leading-relaxed">
              <p>
                We do not believe in synthetic short-cuts, slippery polyester blends, or the sterile perfection of hotel sheets that require stiff starch and chemical softening agents.
              </p>
              <p>
                Instead, we work exclusively with certified coastal Normandy flax and Aegean organic cotton, woven on heritage shuttle looms in northern Portugal. We wash each piece with natural volcanic stones so it arrives at your door already endowed with that buttery, relaxed handfeel that usually takes years of laundering to achieve.
              </p>
            </div>

            {/* 3 Concrete Pillars */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-sand-border">
              <div>
                <span className="font-serif text-xl text-umber block">01</span>
                <h4 className="font-sans text-xs font-semibold text-umber uppercase tracking-wider mt-1">
                  Zero Irrigation
                </h4>
                <p className="text-[11px] text-soft-graphite/60 mt-1 leading-normal">
                  Flax grows solely on natural Atlantic rain and dew in Normandy.
                </p>
              </div>

              <div>
                <span className="font-serif text-xl text-umber block">02</span>
                <h4 className="font-sans text-xs font-semibold text-umber uppercase tracking-wider mt-1">
                  OEKO-TEX 100
                </h4>
                <p className="text-[11px] text-soft-graphite/60 mt-1 leading-normal">
                  Tested and certified free from over 1,000 irritants and harsh binders.
                </p>
              </div>

              <div>
                <span className="font-serif text-xl text-umber block">03</span>
                <h4 className="font-sans text-xs font-semibold text-umber uppercase tracking-wider mt-1">
                  100-Night Trial
                </h4>
                <p className="text-[11px] text-soft-graphite/60 mt-1 leading-normal">
                  Sleep with it, wash it, and ensure it truly belongs in your home.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenMaterialGuide}
                className="inline-flex items-center space-x-2 text-xs font-sans uppercase tracking-widest text-olive-ink hover:text-umber font-medium group transition-colors"
              >
                <span>Read our complete Fabric & Weave Guide</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
