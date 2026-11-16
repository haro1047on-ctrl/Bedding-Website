import React, { useState } from 'react';
import { MATERIAL_SPECS } from '../data/mockData';
import { Check, ArrowRight, ShieldCheck, Wind, Thermometer, Sparkles } from 'lucide-react';

interface MaterialStoryProps {
  onOpenCareGuide: () => void;
}

export const MaterialStory: React.FC<MaterialStoryProps> = ({ onOpenCareGuide }) => {
  const [activeMaterialId, setActiveMaterialId] = useState<string>('flax-linen');

  const activeMaterial = MATERIAL_SPECS.find(m => m.id === activeMaterialId) || MATERIAL_SPECS[0];

  return (
    <section className="w-full bg-chalk py-16 sm:py-24 border-b border-sand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-widest text-olive-ink font-sans font-medium mb-1.5">
            <span>Textile Science & Tactility</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-umber font-normal">
            Feel the difference in every layer.
          </h2>
          <p className="text-xs sm:text-sm text-soft-graphite/70 font-sans mt-3 leading-relaxed">
            We reject synthetic fibers and cheap chemical softening treatments. Every thread in our collection is selected for natural thermoregulation, skin comfort, and endurance.
          </p>
        </div>

        {/* Material Selection Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-8">
          {MATERIAL_SPECS.map((spec) => {
            const isSelected = activeMaterialId === spec.id;
            return (
              <button
                key={spec.id}
                type="button"
                onClick={() => setActiveMaterialId(spec.id)}
                className={`p-4 text-left border transition-all duration-200 ${
                  isSelected
                    ? 'bg-porcelain border-umber shadow-subtle'
                    : 'bg-chalk border-sand-border hover:border-umber/30'
                }`}
              >
                <span className={`text-[10px] uppercase tracking-widest font-sans block ${
                  isSelected ? 'text-olive-ink font-medium' : 'text-umber/40'
                }`}>
                  {spec.weight}
                </span>
                <span className="font-serif text-base sm:text-lg text-umber font-normal mt-0.5 block">
                  {spec.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Material Deep Dive Card */}
        <div className="bg-porcelain border border-sand-border p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-subtle">
          
          {/* Left: Macro Fabric Image (5 cols) */}
          <div className="lg:col-span-5 relative aspect-[4/3] sm:aspect-square overflow-hidden bg-oat/20 border border-sand-border">
            <img
              src={activeMaterial.image}
              alt={`${activeMaterial.name} texture closeup`}
              className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
            />
            <div className="absolute bottom-3 left-3 bg-chalk/90 backdrop-blur-sm px-3 py-1 text-[11px] font-sans text-umber border border-sand-border">
              Origin: {activeMaterial.provenance}
            </div>
          </div>

          {/* Right: Detailed Fabric Specs & Feel Analysis (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div>
              <div className="flex items-center space-x-2 text-xs text-olive-ink font-sans uppercase tracking-wider font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{activeMaterial.provenance} · {activeMaterial.weave}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-umber font-normal mt-1">
                {activeMaterial.name}
              </h3>
            </div>

            {/* Spec Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans border-t border-b border-sand-border py-4">
              <div className="space-y-1">
                <span className="text-umber/50 uppercase tracking-wider text-[10px] block">
                  Handfeel & Texture
                </span>
                <span className="font-medium text-umber text-sm">
                  {activeMaterial.feel}
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-umber/50 uppercase tracking-wider text-[10px] block">
                  Thermal Regulation
                </span>
                <span className="font-medium text-umber text-sm">
                  {activeMaterial.tempControl}
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-umber/50 uppercase tracking-wider text-[10px] block">
                  Endurance & Longevity
                </span>
                <span className="font-medium text-umber text-sm">
                  {activeMaterial.durability}
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-umber/50 uppercase tracking-wider text-[10px] block">
                  Ideal Sleeper Profile
                </span>
                <span className="font-medium text-umber text-sm">
                  {activeMaterial.bestFor}
                </span>
              </div>
            </div>

            {/* Care Protocol Link */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
              <div className="flex items-center space-x-2 text-xs font-sans text-umber/80">
                <ShieldCheck className="w-4 h-4 text-olive-ink flex-shrink-0" />
                <span>OEKO-TEX® Standard 100 Certified · Chemical Free</span>
              </div>

              <button
                type="button"
                onClick={onOpenCareGuide}
                className="inline-flex items-center space-x-1.5 text-xs font-sans uppercase tracking-widest text-olive-ink hover:text-umber font-semibold transition-colors group"
              >
                <span>View Laundering & Softening Rituals</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
