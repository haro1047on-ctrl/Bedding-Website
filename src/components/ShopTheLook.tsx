import React, { useState } from 'react';
import { BEDROOM_LOOKS } from '../data/mockData';
import { Product, ColorVariant } from '../types';
import { Sparkles } from 'lucide-react';
import { formatPKR } from '../utils/format';

interface ShopTheLookProps {
  products: Product[];
  onSelectProduct: (product: Product, initialColor?: ColorVariant) => void;
  onQuickView: (product: Product) => void;
}

export const ShopTheLook: React.FC<ShopTheLookProps> = ({
  products,
  onSelectProduct,
  onQuickView,
}) => {
  const [selectedLookIndex, setSelectedLookIndex] = useState(0);
  const [activeHotspotId, setActiveHotspotId] = useState<string | null>(null);

  const currentLook = BEDROOM_LOOKS[selectedLookIndex];

  return (
    <section className="w-full bg-porcelain py-16 sm:py-24 border-b border-sand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-sand-border">
          <div>
            <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-widest text-terracotta font-sans font-medium mb-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interior Styling Inspiration</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-umber font-normal">
              Shop the Bedroom Suites
            </h2>
            <p className="text-xs sm:text-sm text-soft-graphite/70 font-sans mt-1 max-w-lg leading-relaxed">
              Explore art-directed bedroom palettes. Tap any hotspot pin to discover the coordinated elements that complete the look.
            </p>
          </div>

          {/* Look Switcher Pills */}
          <div className="mt-4 md:mt-0 flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0">
            {BEDROOM_LOOKS.map((look, idx) => (
              <button
                key={look.id}
                type="button"
                onClick={() => setSelectedLookIndex(idx)}
                className={`px-3 py-1.5 text-xs font-sans whitespace-nowrap transition-all ${
                  selectedLookIndex === idx
                    ? 'bg-umber text-porcelain font-medium'
                    : 'bg-chalk border border-sand-border text-umber/80 hover:bg-oat/30'
                }`}
              >
                {look.title}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Look Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Visual with Interactive Hotspots (7 cols) */}
          <div className="lg:col-span-7 relative aspect-[4/3] w-full overflow-hidden bg-oat-stone/30 border border-sand-border shadow-elevated">
            <img
              src={currentLook.image}
              alt={currentLook.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />

            {/* Hotspots */}
            {currentLook.hotspots.map((hotspot) => {
              const isHotspotActive = activeHotspotId === hotspot.productId;
              return (
                <div
                  key={hotspot.productId}
                  className="absolute z-20 transform -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                >
                  <button
                    type="button"
                    onClick={() => setActiveHotspotId(isHotspotActive ? null : hotspot.productId)}
                    className={`relative w-8 h-8 rounded-full flex items-center justify-center transition-transform focus:outline-none ${
                      isHotspotActive 
                        ? 'bg-umber text-porcelain scale-110 shadow-lg' 
                        : 'bg-chalk/90 backdrop-blur-md text-umber shadow-md hover:scale-110'
                    }`}
                    aria-label={`Inspect ${hotspot.label}`}
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-terracotta animate-ping absolute opacity-50" />
                    <span className="w-2.5 h-2.5 rounded-full bg-umber" />
                  </button>

                  {/* Tooltip on active */}
                  {isHotspotActive && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-52 bg-chalk p-3.5 border border-sand-border shadow-elevated z-30 animate-fadeIn">
                      <p className="font-serif text-sm text-umber font-normal">{hotspot.label}</p>
                      <p className="text-xs font-semibold text-umber mt-1">{formatPKR(hotspot.price)}</p>
                      <button
                        onClick={() => {
                          const targetProduct = products.find(p => p.id === hotspot.productId);
                          if (targetProduct) onSelectProduct(targetProduct);
                        }}
                        className="mt-2.5 w-full py-1.5 bg-umber text-porcelain text-[10px] uppercase tracking-wider font-sans hover:bg-soft-graphite transition-colors"
                      >
                        View Product
                      </button>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Room Identifier */}
            <div className="absolute bottom-4 left-4 bg-chalk/90 backdrop-blur-md px-3.5 py-1.5 border border-sand-border text-xs font-sans text-umber">
              {currentLook.roomName}
            </div>

          </div>

          {/* Coordinated Products Sidebar (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-terracotta font-sans font-medium">
                Stylist Notes
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-umber font-normal mt-1">
                {currentLook.title}
              </h3>
              <p className="text-xs sm:text-sm text-soft-graphite/75 font-sans mt-2 leading-relaxed">
                {currentLook.description}
              </p>

              {/* Palette dots */}
              <div className="flex items-center space-x-2 mt-3.5">
                <span className="text-[11px] text-umber/50 font-sans">Palette:</span>
                {currentLook.palette.map((colorHex, idx) => (
                  <span
                    key={idx}
                    className="w-4 h-4 rounded-full border border-sand-border shadow-sm"
                    style={{ backgroundColor: colorHex }}
                  />
                ))}
              </div>
            </div>

            {/* Coordinated Item Cards */}
            <div className="space-y-3 pt-2">
              <span className="text-[10px] uppercase tracking-widest text-umber/50 font-sans block">
                Products in this room:
              </span>

              {currentLook.hotspots.map((hotspot) => {
                const product = products.find(p => p.id === hotspot.productId);
                if (!product) return null;
                const isItemActive = activeHotspotId === product.id;

                return (
                  <div
                    key={product.id}
                    onMouseEnter={() => setActiveHotspotId(product.id)}
                    className={`p-3.5 border transition-all flex items-center justify-between ${
                      isItemActive
                        ? 'bg-porcelain border-umber shadow-sm'
                        : 'bg-chalk border-sand-border hover:border-umber/30'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-12 h-12 object-cover border border-sand-border"
                      />
                      <div>
                        <h4 
                          onClick={() => onSelectProduct(product)}
                          className="font-serif text-sm sm:text-base text-umber hover:text-olive-ink cursor-pointer line-clamp-1"
                        >
                          {product.name}
                        </h4>
                        <span className="text-xs font-sans text-soft-graphite/60">
                          {formatPKR(product.price)} · {product.material}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        type="button"
                        onClick={() => onQuickView(product)}
                        className="px-2.5 py-1 text-[11px] font-sans text-umber hover:text-olive-ink border border-sand-border bg-porcelain"
                      >
                        Quick Add
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
