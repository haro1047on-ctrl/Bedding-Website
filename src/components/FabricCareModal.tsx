import React from 'react';
import { X, Droplets, Sun, Wind, Sparkles } from 'lucide-react';

interface FabricCareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FabricCareModal: React.FC<FabricCareModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-umber/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative min-h-screen flex items-center justify-center p-4 sm:p-6">
        <div className="relative w-full max-w-3xl bg-chalk border border-sand-border shadow-elevated p-6 sm:p-10 z-10 max-h-[90vh] overflow-y-auto">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-sand-border">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-olive-ink font-sans font-medium">
                Atelier Maintenance Protocols
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-umber font-normal mt-0.5">
                Caring for Natural Linen & Percale
              </h3>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-umber/70 hover:text-umber transition-colors"
              aria-label="Close care guide"
            >
              <X className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>

          {/* 4 Pillars of Gentle Laundering */}
          <div className="mt-6 space-y-6 text-xs sm:text-sm font-sans text-soft-graphite/80 leading-relaxed">
            
            <div className="flex items-start space-x-4 p-4 bg-porcelain border border-sand-border">
              <div className="p-2 bg-chalk border border-sand-border text-olive-ink flex-shrink-0 mt-0.5">
                <Droplets className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif text-lg text-umber font-normal">
                  01. The Wash Cycle: Cool Water & Room to Breathe
                </h4>
                <p>
                  Wash on a gentle cycle with cold or warm water (maximum 40°C / 104°F). Natural flax fibers are hollow; giving them ample water and space in the drum allows dirt to wash away without abrasive friction between garments.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-porcelain border border-sand-border">
              <div className="p-2 bg-chalk border border-sand-border text-olive-ink flex-shrink-0 mt-0.5">
                <Sparkles className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif text-lg text-umber font-normal">
                  02. Detergents: Skip the Fabric Softeners
                </h4>
                <p>
                  Use a mild, pH-neutral liquid detergent without optical brighteners, bleach, or synthetic enzymes. Never use commercial fabric softeners: they coat the hollow flax fibers with a silicon wax, inhibiting linen's legendary moisture-wicking breathability.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-porcelain border border-sand-border">
              <div className="p-2 bg-chalk border border-sand-border text-olive-ink flex-shrink-0 mt-0.5">
                <Wind className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif text-lg text-umber font-normal">
                  03. The Drying Ritual: Line Dry in Breeze or Low Tumble
                </h4>
                <p>
                  The optimal method is line drying in fresh air and shade. If tumble drying, use the lowest delicate heat setting and remove while still slightly damp (approx. 90% dry). Shake vigorously and make the bed immediately to allow natural gravity to smooth deep creases.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-porcelain border border-sand-border">
              <div className="p-2 bg-chalk border border-sand-border text-olive-ink flex-shrink-0 mt-0.5">
                <Sun className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif text-lg text-umber font-normal">
                  04. The Ironing Philosophy: Leave It in the Cupboard
                </h4>
                <p>
                  SEREIN linens are stone-washed specifically to create an organic, lived-in texture. The soft ripples and gentle folds are the defining hallmark of relaxed European luxury. If you prefer a crisp hotel look, iron while still slightly damp using steam.
                </p>
              </div>
            </div>

          </div>

          <div className="mt-8 pt-6 border-t border-sand-border flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 bg-umber text-porcelain text-xs font-sans uppercase tracking-widest font-medium hover:bg-soft-graphite"
            >
              Understood
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
