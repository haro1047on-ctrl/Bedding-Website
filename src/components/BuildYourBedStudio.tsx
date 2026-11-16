import React, { useState } from 'react';
import { Product, BedSize, ColorVariant } from '../types';
import { Sparkles, Check, ShoppingBag } from 'lucide-react';
import { formatPKR } from '../utils/format';

interface BuildYourBedStudioProps {
  products: Product[];
  onAddBundleToCart: (items: { product: Product; color: ColorVariant; size: BedSize }[]) => void;
  onClose?: () => void;
}

export const BuildYourBedStudio: React.FC<BuildYourBedStudioProps> = ({
  products,
  onAddBundleToCart,
}) => {
  const [selectedSize, setSelectedSize] = useState<BedSize>('Queen');
  const [isSuccessFeedback, setIsSuccessFeedback] = useState(false);

  // Retrieve products for each step
  const fittedSheetProduct = products.find(p => p.id === 'normandy-linen-fitted-sheet') || products[3];
  const duvetProduct = products.find(p => p.id === 'normandy-linen-duvet') || products[0];
  const pillowcasesProduct = products.find(p => p.id === 'heritage-linen-pillowcases') || products[4];
  const throwProduct = products.find(p => p.id === 'waffle-wool-linen-throw') || products[5];

  // State for selections
  const [selectedSheetColor, setSelectedSheetColor] = useState<ColorVariant>(fittedSheetProduct.colors[0]); // Oatmeal
  const [selectedDuvetColor, setSelectedDuvetColor] = useState<ColorVariant>(duvetProduct.colors[3] || duvetProduct.colors[0]); // Terracotta Rust
  const [selectedPillowsColor, setSelectedPillowsColor] = useState<ColorVariant>(pillowcasesProduct.colors[3] || pillowcasesProduct.colors[0]); // Chalk White
  const [selectedThrowColor, setSelectedThrowColor] = useState<ColorVariant>(throwProduct.colors[0]); // Earthy Umber
  const [includeThrow, setIncludeThrow] = useState<boolean>(true);

  // Calculations
  const sheetPrice = fittedSheetProduct.price;
  const duvetPrice = duvetProduct.price;
  const pillowsPrice = pillowcasesProduct.price;
  const throwPrice = includeThrow ? throwProduct.price : 0;

  const rawTotal = sheetPrice + duvetPrice + pillowsPrice + throwPrice;
  // 15% discount for a complete bed set bundle
  const discountRate = includeThrow ? 0.15 : 0.10;
  const discountAmount = Math.round(rawTotal * discountRate);
  const finalBundlePrice = rawTotal - discountAmount;

  const handleAddToCart = () => {
    const itemsToAdd = [
      { product: fittedSheetProduct, color: selectedSheetColor, size: selectedSize },
      { product: duvetProduct, color: selectedDuvetColor, size: selectedSize },
      { product: pillowcasesProduct, color: selectedPillowsColor, size: selectedSize },
    ];

    if (includeThrow) {
      itemsToAdd.push({
        product: throwProduct,
        color: selectedThrowColor,
        size: selectedSize,
      });
    }

    onAddBundleToCart(itemsToAdd);
    setIsSuccessFeedback(true);
    setTimeout(() => setIsSuccessFeedback(false), 3000);
  };

  const resetToDefaultPreset = (preset: 'warm' | 'cool' | 'botanical') => {
    if (preset === 'warm') {
      setSelectedSheetColor(fittedSheetProduct.colors.find(c => c.name.includes('Chalk')) || fittedSheetProduct.colors[1]);
      setSelectedDuvetColor(duvetProduct.colors.find(c => c.name.includes('Terracotta')) || duvetProduct.colors[3]);
      setSelectedPillowsColor(pillowcasesProduct.colors.find(c => c.name.includes('Oatmeal')) || pillowcasesProduct.colors[0]);
      setSelectedThrowColor(throwProduct.colors.find(c => c.name.includes('Umber')) || throwProduct.colors[0]);
    } else if (preset === 'cool') {
      setSelectedSheetColor(fittedSheetProduct.colors.find(c => c.name.includes('Oatmeal')) || fittedSheetProduct.colors[0]);
      setSelectedDuvetColor(duvetProduct.colors.find(c => c.name.includes('Slate')) || duvetProduct.colors[4]);
      setSelectedPillowsColor(pillowcasesProduct.colors.find(c => c.name.includes('Chalk')) || pillowcasesProduct.colors[1]);
      setSelectedThrowColor(throwProduct.colors.find(c => c.name.includes('Oatmeal')) || throwProduct.colors[1]);
    } else {
      setSelectedSheetColor(fittedSheetProduct.colors.find(c => c.name.includes('Oatmeal')) || fittedSheetProduct.colors[0]);
      setSelectedDuvetColor(duvetProduct.colors.find(c => c.name.includes('Olive')) || duvetProduct.colors[2]);
      setSelectedPillowsColor(pillowcasesProduct.colors.find(c => c.name.includes('Terracotta')) || pillowcasesProduct.colors[2]);
      setSelectedThrowColor(throwProduct.colors.find(c => c.name.includes('Umber')) || throwProduct.colors[0]);
    }
  };

  return (
    <section id="build-bed-studio" className="w-full bg-porcelain py-16 sm:py-24 border-b border-sand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-sand-border">
          <div>
            <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-widest text-terracotta font-sans font-medium mb-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Bed Styling Studio</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-umber font-normal">
              Build Your Bed
            </h2>
            <p className="text-xs sm:text-sm text-soft-graphite/70 font-sans mt-2 max-w-xl leading-relaxed">
              Mix and match pure French flax and organic cotton weaves. Preview your personalized layered bedroom in real-time and enjoy a 15% Atelier Privilege on complete suites.
            </p>
          </div>

          {/* Quick Presets */}
          <div className="mt-4 md:mt-0 flex items-center space-x-2">
            <span className="text-xs text-umber/60 font-sans">Curated Palettes:</span>
            <button
              onClick={() => resetToDefaultPreset('warm')}
              className="px-2.5 py-1 text-xs border border-sand-border bg-chalk hover:bg-oat/20 text-umber font-sans"
            >
              Terracotta Sun
            </button>
            <button
              onClick={() => resetToDefaultPreset('cool')}
              className="px-2.5 py-1 text-xs border border-sand-border bg-chalk hover:bg-oat/20 text-umber font-sans"
            >
              Slate Fog
            </button>
            <button
              onClick={() => resetToDefaultPreset('botanical')}
              className="px-2.5 py-1 text-xs border border-sand-border bg-chalk hover:bg-oat/20 text-umber font-sans"
            >
              Olive Garden
            </button>
          </div>
        </div>

        {/* 2-Column Studio: Left = Interactive Visual Bed Preview; Right = Layer Customizer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left: Interactive Visual Bed Preview (6 cols) */}
          <div className="lg:col-span-6 sticky top-24 space-y-4">
            
            <div className="relative aspect-[4/3] w-full bg-chalk border border-sand-border p-6 shadow-subtle flex flex-col justify-end overflow-hidden">
              
              {/* Headboard / Room Backdrop */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#EAE3D6] to-[#F4F0E8] opacity-70" />

              {/* Architectural Bed Representation */}
              <div className="relative w-full h-full flex flex-col justify-end pb-2">
                
                {/* Oak Headboard bar */}
                <div className="w-[88%] mx-auto h-20 sm:h-28 bg-[#8B7355] border-t-2 border-r-2 border-l-2 border-[#5C4835] rounded-t-sm shadow-md relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="text-[10px] text-white/50 text-center pt-2 uppercase tracking-widest font-sans">
                    Natural Solid Oak Bedstead
                  </div>
                </div>

                {/* Pillows Stack (Top Layer) */}
                <div className="w-[82%] mx-auto flex justify-center space-x-3 -mt-10 sm:-mt-14 z-20">
                  <div 
                    className="w-24 sm:w-32 h-14 sm:h-18 rounded-sm shadow-md border border-black/10 transition-colors duration-500 flex items-center justify-center"
                    style={{ backgroundColor: selectedPillowsColor.hex }}
                  >
                    <span className="text-[9px] uppercase tracking-wider text-black/50 font-sans font-medium px-1 truncate">
                      {selectedPillowsColor.name.split(' ')[0]}
                    </span>
                  </div>
                  <div 
                    className="w-24 sm:w-32 h-14 sm:h-18 rounded-sm shadow-md border border-black/10 transition-colors duration-500 flex items-center justify-center"
                    style={{ backgroundColor: selectedPillowsColor.hex }}
                  >
                    <span className="text-[9px] uppercase tracking-wider text-black/50 font-sans font-medium px-1 truncate">
                      {selectedPillowsColor.name.split(' ')[0]}
                    </span>
                  </div>
                </div>

                {/* Base Mattress & Fitted Sheet (Middle Layer) */}
                <div 
                  className="w-[92%] mx-auto h-16 sm:h-20 rounded-t-sm border-t border-r border-l border-black/10 shadow-sm transition-colors duration-500 relative z-10 -mt-2 flex items-center justify-center"
                  style={{ backgroundColor: selectedSheetColor.hex }}
                >
                  <span className="text-[10px] uppercase tracking-widest text-black/40 font-sans">
                    Fitted Sheet: {selectedSheetColor.name}
                  </span>
                </div>

                {/* Duvet Cover Drape (Folded Down Layer) */}
                <div 
                  className="w-full h-32 sm:h-44 rounded-sm shadow-elevated border border-black/15 transition-colors duration-500 relative z-30 -mt-8 sm:-mt-10 p-4 flex flex-col justify-between"
                  style={{ backgroundColor: selectedDuvetColor.hex }}
                >
                  <div className="flex justify-between items-center text-[10px] text-black/50 uppercase tracking-wider font-sans">
                    <span>Linen Duvet: {selectedDuvetColor.name}</span>
                    <span>{selectedSize} Size</span>
                  </div>

                  {/* Foot of the Bed Accent Throw Layer (if enabled) */}
                  {includeThrow && (
                    <div 
                      className="w-full h-12 sm:h-16 rounded-b-sm border-t border-black/20 shadow-md transition-colors duration-500 flex items-center justify-center mt-auto"
                      style={{ backgroundColor: selectedThrowColor.hex }}
                    >
                      <span className="text-[10px] text-white/90 uppercase tracking-widest font-sans font-medium">
                        Waffle Accent: {selectedThrowColor.name}
                      </span>
                    </div>
                  )}
                </div>

              </div>

              {/* Informative Rendering Note */}
              <div className="absolute top-3 left-3 bg-chalk/90 backdrop-blur-sm px-2.5 py-1 border border-sand-border text-[10px] text-umber/70 font-sans">
                Interactive Visual Bed Composition
              </div>

            </div>

            {/* Live Component Tags */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-sans">
              <div className="bg-chalk p-2.5 border border-sand-border">
                <span className="text-[10px] uppercase text-umber/50 block">01. Fitted Sheet</span>
                <span className="font-medium text-umber truncate block">{selectedSheetColor.name}</span>
              </div>
              <div className="bg-chalk p-2.5 border border-sand-border">
                <span className="text-[10px] uppercase text-umber/50 block">02. Duvet Cover</span>
                <span className="font-medium text-umber truncate block">{selectedDuvetColor.name}</span>
              </div>
              <div className="bg-chalk p-2.5 border border-sand-border">
                <span className="text-[10px] uppercase text-umber/50 block">03. Pillowcases</span>
                <span className="font-medium text-umber truncate block">{selectedPillowsColor.name}</span>
              </div>
              <div className="bg-chalk p-2.5 border border-sand-border">
                <span className="text-[10px] uppercase text-umber/50 block">04. Accent Throw</span>
                <span className="font-medium text-umber truncate block">
                  {includeThrow ? selectedThrowColor.name : 'None'}
                </span>
              </div>
            </div>

          </div>

          {/* Right: Step-by-Step Layer Customizer (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Bed Size Picker */}
            <div className="bg-chalk p-5 border border-sand-border">
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs uppercase tracking-widest font-semibold text-umber font-sans">
                  Select Bed Size
                </label>
                <span className="text-[11px] text-olive-ink font-sans">Standard & Deep Mattresses</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {(['Full', 'Queen', 'King', 'Cal King'] as BedSize[]).map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 text-xs font-sans tracking-wide transition-all ${
                      selectedSize === size
                        ? 'bg-umber text-porcelain font-medium'
                        : 'bg-porcelain border border-sand-border text-soft-graphite hover:border-umber/40'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 1: Base Sheet */}
            <div className="bg-chalk p-5 border border-sand-border space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-olive-ink font-sans font-medium">
                    Layer 01
                  </span>
                  <h3 className="font-serif text-lg text-umber font-normal">
                    Fitted Base Sheet
                  </h3>
                </div>
                <span className="font-sans text-sm font-semibold text-umber">{formatPKR(sheetPrice)}</span>
              </div>
              <p className="text-xs text-soft-graphite/70 font-sans">
                170 GSM Normandy linen with 17" deep mattress pocket and 360° continuous elastic.
              </p>
              <div className="flex items-center space-x-2 pt-1">
                {fittedSheetProduct.colors.map((color) => (
                  <button
                    key={color.name}
                    type="button"
                    onClick={() => setSelectedSheetColor(color)}
                    className={`group relative p-1 transition-all ${
                      selectedSheetColor.name === color.name ? 'ring-1 ring-umber' : ''
                    }`}
                    title={color.name}
                  >
                    <span 
                      className="block w-6 h-6 rounded-full border border-black/10"
                      style={{ backgroundColor: color.hex }}
                    />
                  </button>
                ))}
                <span className="text-xs text-umber/70 font-sans pl-2">
                  Selected: <strong className="text-umber">{selectedSheetColor.name}</strong>
                </span>
              </div>
            </div>

            {/* Step 2: Duvet Cover */}
            <div className="bg-chalk p-5 border border-sand-border space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-olive-ink font-sans font-medium">
                    Layer 02
                  </span>
                  <h3 className="font-serif text-lg text-umber font-normal">
                    Normandy Flax Duvet Cover
                  </h3>
                </div>
                <span className="font-sans text-sm font-semibold text-umber">{formatPKR(duvetPrice)}</span>
              </div>
              <p className="text-xs text-soft-graphite/70 font-sans">
                Pre-washed stone finish, natural corozo-nut buttons, and internal corner ties.
              </p>
              <div className="flex items-center space-x-2 pt-1">
                {duvetProduct.colors.map((color) => (
                  <button
                    key={color.name}
                    type="button"
                    onClick={() => setSelectedDuvetColor(color)}
                    className={`group relative p-1 transition-all ${
                      selectedDuvetColor.name === color.name ? 'ring-1 ring-umber' : ''
                    }`}
                    title={color.name}
                  >
                    <span 
                      className="block w-6 h-6 rounded-full border border-black/10"
                      style={{ backgroundColor: color.hex }}
                    />
                  </button>
                ))}
                <span className="text-xs text-umber/70 font-sans pl-2">
                  Selected: <strong className="text-umber">{selectedDuvetColor.name}</strong>
                </span>
              </div>
            </div>

            {/* Step 3: Pillowcase Pair */}
            <div className="bg-chalk p-5 border border-sand-border space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-olive-ink font-sans font-medium">
                    Layer 03
                  </span>
                  <h3 className="font-serif text-lg text-umber font-normal">
                    French Flax Pillowcase Pair
                  </h3>
                </div>
                <span className="font-sans text-sm font-semibold text-umber">{formatPKR(pillowsPrice)}</span>
              </div>
              <p className="text-xs text-soft-graphite/70 font-sans">
                Set of 2 pillowcases with 8" interior envelope closures and tailored French seams.
              </p>
              <div className="flex items-center space-x-2 pt-1">
                {pillowcasesProduct.colors.map((color) => (
                  <button
                    key={color.name}
                    type="button"
                    onClick={() => setSelectedPillowsColor(color)}
                    className={`group relative p-1 transition-all ${
                      selectedPillowsColor.name === color.name ? 'ring-1 ring-umber' : ''
                    }`}
                    title={color.name}
                  >
                    <span 
                      className="block w-6 h-6 rounded-full border border-black/10"
                      style={{ backgroundColor: color.hex }}
                    />
                  </button>
                ))}
                <span className="text-xs text-umber/70 font-sans pl-2">
                  Selected: <strong className="text-umber">{selectedPillowsColor.name}</strong>
                </span>
              </div>
            </div>

            {/* Step 4: Layering Blanket / Throw */}
            <div className="bg-chalk p-5 border border-sand-border space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="include-throw-check"
                    checked={includeThrow}
                    onChange={(e) => setIncludeThrow(e.target.checked)}
                    className="w-4 h-4 text-umber accent-umber rounded-none cursor-pointer"
                  />
                  <div>
                    <label htmlFor="include-throw-check" className="cursor-pointer">
                      <span className="text-[10px] uppercase tracking-wider text-olive-ink font-sans font-medium block">
                        Layer 04 (Optional Accent)
                      </span>
                      <h3 className="font-serif text-lg text-umber font-normal">
                        Brushed Waffle Wool-Linen Throw
                      </h3>
                    </label>
                  </div>
                </div>
                <span className="font-sans text-sm font-semibold text-umber">{formatPKR(throwProduct.price)}</span>
              </div>

              {includeThrow && (
                <div className="flex items-center space-x-2 pt-1 pl-6">
                  {throwProduct.colors.map((color) => (
                    <button
                      key={color.name}
                      type="button"
                      onClick={() => setSelectedThrowColor(color)}
                      className={`group relative p-1 transition-all ${
                        selectedThrowColor.name === color.name ? 'ring-1 ring-umber' : ''
                      }`}
                      title={color.name}
                    >
                      <span 
                        className="block w-6 h-6 rounded-full border border-black/10"
                        style={{ backgroundColor: color.hex }}
                      />
                    </button>
                  ))}
                  <span className="text-xs text-umber/70 font-sans pl-2">
                    Selected: <strong className="text-umber">{selectedThrowColor.name}</strong>
                  </span>
                </div>
              )}
            </div>

            {/* Pricing Summary & Add To Bag */}
            <div className="bg-umber text-porcelain p-6 shadow-elevated space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-oat/20 text-xs font-sans">
                <span className="text-oat">Individual Items Total:</span>
                <span className="line-through text-oat/70">{formatPKR(rawTotal)}</span>
              </div>

              <div className="flex items-center justify-between text-xs font-sans text-terracotta-muted">
                <span className="flex items-center space-x-1 font-medium">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Atelier Complete Suite Discount (15% Off):</span>
                </span>
                <span>-{formatPKR(discountAmount)}</span>
              </div>

              <div className="flex items-baseline justify-between pt-1">
                <div>
                  <span className="text-xs uppercase tracking-widest text-oat block font-sans">
                    Complete Custom Suite Price
                  </span>
                  <span className="text-[11px] text-oat/60 font-sans">
                    {selectedSize} size · {includeThrow ? '4 Curated Elements' : '3 Core Elements'}
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-sans text-2xl sm:text-3xl text-porcelain font-semibold tracking-tight">
                    {formatPKR(finalBundlePrice)}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                disabled={isSuccessFeedback}
                className={`w-full py-4 text-xs font-sans uppercase tracking-widest font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
                  isSuccessFeedback 
                    ? 'bg-olive-ink text-porcelain' 
                    : 'bg-porcelain text-umber hover:bg-chalk'
                }`}
              >
                {isSuccessFeedback ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Bed Suite Added to Your Bag!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add Complete Custom Suite to Bag</span>
                  </>
                )}
              </button>

              <p className="text-[11px] text-center text-oat/70 font-sans">
                Includes complimentary nationwide express delivery & 100-Night Sleep Trial.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
