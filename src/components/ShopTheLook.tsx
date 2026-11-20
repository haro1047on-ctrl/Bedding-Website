import React, { useState, useRef } from 'react';
import { BEDROOM_LOOKS } from '../data/mockData';
import { Product, ColorVariant } from '../types';
import { Sparkles, ArrowLeft, ArrowRight, Eye, X } from 'lucide-react';
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
  const [previousLookIndex, setPreviousLookIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeHotspotId, setActiveHotspotId] = useState<string | null>(null);

  const touchStartXRef = useRef<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const changeLook = (targetIndex: number) => {
    if (isTransitioning || targetIndex === selectedLookIndex) return;
    const dir = targetIndex > selectedLookIndex ? 'next' : 'prev';
    setDirection(dir);
    setPreviousLookIndex(selectedLookIndex);
    setSelectedLookIndex(targetIndex);
    setIsTransitioning(true);
    setActiveHotspotId(null);

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setPreviousLookIndex(null);
      setIsTransitioning(false);
    }, 600);
  };

  const handleNextLook = () => {
    const nextIdx = (selectedLookIndex + 1) % BEDROOM_LOOKS.length;
    changeLook(nextIdx);
  };

  const handlePrevLook = () => {
    const prevIdx = (selectedLookIndex - 1 + BEDROOM_LOOKS.length) % BEDROOM_LOOKS.length;
    changeLook(prevIdx);
  };

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    if (deltaX < -45) {
      handleNextLook();
    } else if (deltaX > 45) {
      handlePrevLook();
    }
    touchStartXRef.current = null;
  };

  const currentLook = BEDROOM_LOOKS[selectedLookIndex];
  const activeHotspot = currentLook.hotspots.find(h => h.productId === activeHotspotId);

  return (
    <section 
      id="bedroom-inspiration-section"
      className="w-full bg-porcelain py-16 sm:py-24 border-b border-sand-border overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-sand-border">
          <div>
            <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-widest text-terracotta font-sans font-medium mb-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interior Styling Inspiration</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] text-umber font-normal leading-tight">
              Curated Bedroom Suites
            </h2>
            <p className="text-xs sm:text-sm text-soft-graphite/70 font-sans mt-1 max-w-lg leading-relaxed">
              Explore art-directed bedroom palettes. Tap any hotspot pin to inspect the coordinated elements that compose the room.
            </p>
          </div>

          {/* Look Switcher Pills & Carousel Controls */}
          <div className="mt-6 md:mt-0 flex items-center space-x-4">
            <div className="flex items-center space-x-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              {BEDROOM_LOOKS.map((look, idx) => (
                <button
                  key={look.id}
                  type="button"
                  onClick={() => changeLook(idx)}
                  className={`px-3 py-1.5 text-xs font-sans whitespace-nowrap transition-all rounded-sm ${
                    selectedLookIndex === idx
                      ? 'bg-umber text-porcelain font-medium'
                      : 'bg-chalk border border-sand-border text-umber/80 hover:bg-oat/30'
                  }`}
                >
                  {look.title}
                </button>
              ))}
            </div>

            {/* Slider Arrows */}
            <div className="flex items-center space-x-1.5">
              <button
                type="button"
                onClick={handlePrevLook}
                disabled={isTransitioning}
                className="w-9 h-9 flex items-center justify-center border border-sand-border bg-chalk hover:border-umber hover:text-umber text-soft-graphite transition-all rounded-sm shadow-sm"
                aria-label="Previous bedroom look"
              >
                <ArrowLeft className="w-4 h-4 stroke-[1.5]" />
              </button>
              <button
                type="button"
                onClick={handleNextLook}
                disabled={isTransitioning}
                className="w-9 h-9 flex items-center justify-center border border-sand-border bg-chalk hover:border-umber hover:text-umber text-soft-graphite transition-all rounded-sm shadow-sm"
                aria-label="Next bedroom look"
              >
                <ArrowRight className="w-4 h-4 stroke-[1.5]" />
              </button>
            </div>
          </div>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Visual with Directional Slide & Interactive Hotspots (7 cols) */}
          <div 
            className="lg:col-span-7 relative aspect-[4/3] w-full overflow-hidden bg-oat-stone/30 border border-sand-border shadow-elevated"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {BEDROOM_LOOKS.map((look, idx) => {
              const isCurrent = idx === selectedLookIndex;
              const isPrevious = idx === previousLookIndex;
              if (!isCurrent && !isPrevious) return null;

              return (
                <div
                  key={look.id}
                  className={`absolute inset-0 w-full h-full will-change-transform ${
                    isCurrent ? 'z-10' : 'z-0'
                  }`}
                  style={{
                    transition: isTransitioning
                      ? 'transform 600ms cubic-bezier(0.22, 1, 0.36, 1), opacity 600ms ease'
                      : 'none',
                    transform: isCurrent
                      ? 'translateX(0%)'
                      : isPrevious && direction === 'next'
                      ? 'translateX(-100%)'
                      : isPrevious && direction === 'prev'
                      ? 'translateX(100%)'
                      : 'translateX(0%)',
                    opacity: isCurrent ? 1 : 0.9,
                  }}
                >
                  <img
                    src={look.image}
                    alt={look.title}
                    className="w-full h-full object-cover text-transparent"
                    loading="lazy"
                  />

                  {/* Hotspots (visible only on active look) */}
                  {isCurrent && look.hotspots.map((hotspot) => {
                    const isHotspotActive = activeHotspotId === hotspot.productId;
                    // Clamp desktop tooltip positioning
                    const isRightAligned = hotspot.x > 60;
                    const isLeftAligned = hotspot.x < 35;
                    const isTopAligned = hotspot.y > 60;

                    return (
                      <div
                        key={hotspot.productId}
                        className="absolute z-20 transform -translate-x-1/2 -translate-y-1/2"
                        style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                      >
                        <button
                          type="button"
                          onClick={() => setActiveHotspotId(isHotspotActive ? null : hotspot.productId)}
                          className={`relative w-8 h-8 rounded-full flex items-center justify-center transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-umber ${
                            isHotspotActive 
                              ? 'bg-umber text-porcelain scale-110 shadow-lg' 
                              : 'bg-chalk/90 backdrop-blur-md text-umber shadow-md hover:scale-110'
                          }`}
                          aria-expanded={isHotspotActive}
                          aria-label={`Inspect ${hotspot.label}`}
                        >
                          <span className="w-2.5 h-2.5 rounded-full bg-terracotta animate-ping absolute opacity-50" />
                          <span className="w-2.5 h-2.5 rounded-full bg-umber" />
                        </button>

                        {/* Desktop Tooltip on active (hidden on mobile) */}
                        {isHotspotActive && (
                          <div 
                            className={`hidden sm:block absolute w-56 bg-chalk p-3.5 border border-sand-border shadow-elevated z-30 animate-fadeIn ${
                              isTopAligned ? 'bottom-full mb-2' : 'top-full mt-2'
                            } ${
                              isRightAligned
                                ? 'right-0'
                                : isLeftAligned
                                ? 'left-0'
                                : 'left-1/2 -translate-x-1/2'
                            }`}
                          >
                            <div className="flex items-start justify-between">
                              <p className="font-serif text-sm text-umber font-normal break-words leading-snug">
                                {hotspot.label}
                              </p>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveHotspotId(null);
                                }}
                                className="text-soft-graphite/50 hover:text-umber ml-1.5 p-0.5"
                                aria-label="Close hotspot detail"
                              >
                                <X className="w-3.5 h-3.5" />
                              </button>
                            </div>
                            <p className="text-xs font-semibold text-umber font-sans mt-1">
                              {formatPKR(hotspot.price)}
                            </p>
                            <button
                              onClick={() => {
                                const targetProduct = products.find(p => p.id === hotspot.productId);
                                if (targetProduct) onSelectProduct(targetProduct);
                              }}
                              className="mt-2.5 w-full py-1.5 bg-umber text-porcelain text-[10px] uppercase tracking-wider font-sans hover:bg-soft-graphite transition-colors flex items-center justify-center font-medium"
                            >
                              View Product
                            </button>
                          </div>
                        )}
                      </div>
                    );
                  })}

                  {/* Mobile Docked Hotspot Detail Card (Guarantees zero overflow, 100% viewport fit & accessible tap) */}
                  {isCurrent && activeHotspot && (
                    <div className="sm:hidden absolute inset-x-3 bottom-3 z-30 bg-chalk/95 backdrop-blur-md p-3.5 border border-sand-border shadow-elevated rounded-sm animate-fadeIn">
                      <div className="flex items-start justify-between">
                        <div className="pr-3 flex-1 min-w-0">
                          <span className="text-[10px] uppercase tracking-wider text-terracotta font-sans font-medium block">
                            Selected Piece
                          </span>
                          <p className="font-serif text-sm text-umber font-normal break-words leading-snug">
                            {activeHotspot.label}
                          </p>
                          <p className="text-xs font-semibold text-umber font-sans mt-0.5">
                            {formatPKR(activeHotspot.price)}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => setActiveHotspotId(null)}
                          className="p-1 text-soft-graphite/60 hover:text-umber transition-colors"
                          aria-label="Close hotspot detail"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      <button
                        onClick={() => {
                          const targetProduct = products.find(p => p.id === activeHotspot.productId);
                          if (targetProduct) onSelectProduct(targetProduct);
                        }}
                        className="mt-2.5 w-full py-2.5 bg-umber text-porcelain text-xs uppercase tracking-wider font-sans hover:bg-soft-graphite transition-colors rounded-sm flex items-center justify-center font-medium min-h-[44px]"
                      >
                        View Product
                      </button>
                    </div>
                  )}

                  {/* Room Identifier (hidden when mobile docked card is open) */}
                  {(!activeHotspot || !isCurrent) && (
                    <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-chalk/90 backdrop-blur-md px-3 py-1 sm:px-3.5 sm:py-1.5 border border-sand-border text-[11px] sm:text-xs font-sans text-umber rounded-sm pointer-events-none">
                      {look.roomName}
                    </div>
                  )}
                </div>
              );
            })}
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
                    title={colorHex}
                  />
                ))}
              </div>
            </div>

            {/* Coordinated Item Cards */}
            <div className="space-y-3 pt-2">
              <span className="text-[10px] uppercase tracking-widest text-umber/50 font-sans block">
                Featured suite components:
              </span>

              {currentLook.hotspots.map((hotspot) => {
                const product = products.find(p => p.id === hotspot.productId);
                if (!product) return null;
                const isItemActive = activeHotspotId === product.id;

                return (
                  <div
                    key={product.id}
                    onMouseEnter={() => setActiveHotspotId(product.id)}
                    className={`p-3.5 border transition-all flex items-center justify-between rounded-sm ${
                      isItemActive
                        ? 'bg-porcelain border-umber shadow-sm'
                        : 'bg-chalk border-sand-border hover:border-umber/30'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-12 h-12 object-cover border border-sand-border rounded-sm"
                      />
                      <div>
                        <h4 
                          onClick={() => onSelectProduct(product)}
                          className="font-serif text-sm sm:text-base text-umber hover:text-olive-ink cursor-pointer line-clamp-1"
                        >
                          {product.name}
                        </h4>
                        <span className="text-xs font-sans font-semibold text-umber">
                          {formatPKR(product.price)}
                        </span>
                        <span className="text-xs font-sans text-soft-graphite/60 pl-1.5">
                          · {product.material}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        type="button"
                        onClick={() => onQuickView(product)}
                        className="px-2.5 py-1 text-[11px] font-sans text-umber hover:text-olive-ink border border-sand-border bg-porcelain rounded-sm flex items-center space-x-1"
                      >
                        <Eye className="w-3 h-3" />
                        <span>Quick View</span>
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
