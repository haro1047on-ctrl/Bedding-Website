import React, { useState, useRef, useEffect } from 'react';
import { Product, BedSize, ColorVariant } from '../types';
import { X, Star, ShieldCheck, Plus, Minus, ChevronDown, Check, ArrowLeft, ArrowRight } from 'lucide-react';
import { formatPKR } from '../utils/format';

interface ProductDetailModalProps {
  product: Product;
  initialColor?: ColorVariant;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (
    product: Product,
    color: ColorVariant,
    size: BedSize,
    quantity: number,
    unitPrice?: number
  ) => void;
  onOpenSizeGuide: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  initialColor,
  isOpen,
  onClose,
  onAddToCart,
  onOpenSizeGuide,
}) => {
  const [selectedColor, setSelectedColor] = useState<ColorVariant>(() => initialColor || product?.colors?.[0] || { name: '', hex: '', image: '' });
  const [selectedSize, setSelectedSize] = useState<BedSize>(() => product?.sizes?.[0] || 'Queen');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [previousImageIndex, setPreviousImageIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);
  const [openAccordion, setOpenAccordion] = useState<string>('features');
  const [isAddedFeedback, setIsAddedFeedback] = useState<boolean>(false);

  const touchStartXRef = useRef<number | null>(null);
  const transitionTimerRef = useRef<NodeJS.Timeout | null>(null);
  const feedbackTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Synchronize and reset modal state when product or initialColor changes
  useEffect(() => {
    if (product) {
      setSelectedColor(initialColor || product.colors[0]);
      setSelectedSize(product.sizes[0]);
      setSelectedImageIndex(0);
      setPreviousImageIndex(null);
      setDirection('next');
      setIsTransitioning(false);
      setQuantity(1);
      setOpenAccordion('features');
      setIsAddedFeedback(false);
    }
    if (transitionTimerRef.current) {
      clearTimeout(transitionTimerRef.current);
      transitionTimerRef.current = null;
    }
    if (feedbackTimerRef.current) {
      clearTimeout(feedbackTimerRef.current);
      feedbackTimerRef.current = null;
    }
  }, [product?.id, initialColor?.name]);

  // Clean up pending timers on unmount
  useEffect(() => {
    return () => {
      if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current);
      if (feedbackTimerRef.current) clearTimeout(feedbackTimerRef.current);
    };
  }, []);

  if (!isOpen || !product) return null;

  // Dynamic price calculation based on variant selection
  const currentUnitPrice = (product.variantPrices && product.variantPrices[selectedSize]) || product.price;

  // Images list: current color image first if available, followed by product gallery
  const displayImages = [
    selectedColor.image || product.images[0],
    ...product.images.filter(img => img !== selectedColor.image),
  ];

  const changeImage = (targetIndex: number) => {
    if (isTransitioning || targetIndex === selectedImageIndex) return;
    if (targetIndex < 0 || targetIndex >= displayImages.length) return;

    const dir = targetIndex > selectedImageIndex ? 'next' : 'prev';
    setDirection(dir);
    setPreviousImageIndex(selectedImageIndex);
    setSelectedImageIndex(targetIndex);
    setIsTransitioning(true);

    if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current);
    transitionTimerRef.current = setTimeout(() => {
      setPreviousImageIndex(null);
      setIsTransitioning(false);
    }, 450);
  };

  const handleNextImage = () => {
    const nextIdx = (selectedImageIndex + 1) % displayImages.length;
    changeImage(nextIdx);
  };

  const handlePrevImage = () => {
    const prevIdx = (selectedImageIndex - 1 + displayImages.length) % displayImages.length;
    changeImage(prevIdx);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    if (deltaX < -40) {
      handleNextImage();
    } else if (deltaX > 40) {
      handlePrevImage();
    }
    touchStartXRef.current = null;
  };

  const handleAddToCart = () => {
    // Preserve base product and pass explicit variant unit price
    onAddToCart(product, selectedColor, selectedSize, quantity, currentUnitPrice);
    setIsAddedFeedback(true);
    if (feedbackTimerRef.current) clearTimeout(feedbackTimerRef.current);
    feedbackTimerRef.current = setTimeout(() => setIsAddedFeedback(false), 2200);
  };

  const toggleAccordion = (section: string) => {
    setOpenAccordion(openAccordion === section ? '' : section);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto font-grotesque">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#000000]/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-5xl bg-[#fbf9f6] border border-[#e5e5e5] shadow-2xl my-auto z-10 max-h-[92vh] overflow-y-auto rounded-lg">
        
        {/* Sticky Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-white/90 backdrop-blur-sm border border-[#e5e5e5] text-[#000000] hover:bg-[#000000] hover:text-white transition-colors rounded-full shadow-sm"
          aria-label="Close product modal"
        >
          <X className="w-5 h-5 stroke-[1.5]" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10">
          
          {/* Left Column: Photo Gallery with Directional Slide Motion (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Main Stage Image */}
            <div 
              className="relative aspect-[4/3] sm:aspect-[1/1] w-full overflow-hidden bg-[#e5e5e5]/30 border border-[#e5e5e5] rounded-md select-none"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {displayImages.map((img, idx) => {
                const isCurrent = idx === selectedImageIndex;
                const isPrevious = idx === previousImageIndex;
                if (!isCurrent && !isPrevious) return null;

                return (
                  <div
                    key={`${img}-${idx}`}
                    className={`absolute inset-0 w-full h-full will-change-transform ${
                      isCurrent ? 'z-10' : 'z-0'
                    }`}
                    style={{
                      transition: isTransitioning
                        ? 'transform 450ms cubic-bezier(0.22, 1, 0.36, 1), opacity 450ms ease'
                        : 'none',
                      transform: isCurrent
                        ? 'translateX(0%)'
                        : isPrevious && direction === 'next'
                        ? 'translateX(-100%)'
                        : isPrevious && direction === 'prev'
                        ? 'translateX(100%)'
                        : 'translateX(0%)',
                      opacity: isCurrent ? 1 : 0.85,
                    }}
                  >
                    <img
                      src={img}
                      alt={`${product.name} - ${selectedColor.name}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                );
              })}

              {/* Prev / Next Gallery Navigation Arrows */}
              <button
                type="button"
                onClick={handlePrevImage}
                disabled={isTransitioning}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md border border-[#e5e5e5] text-[#000000] hover:bg-white hover:scale-105 active:scale-95 transition-all flex items-center justify-center shadow-md"
                aria-label="Previous product image"
              >
                <ArrowLeft className="w-4 h-4 stroke-[1.5]" />
              </button>

              <button
                type="button"
                onClick={handleNextImage}
                disabled={isTransitioning}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md border border-[#e5e5e5] text-[#000000] hover:bg-white hover:scale-105 active:scale-95 transition-all flex items-center justify-center shadow-md"
                aria-label="Next product image"
              >
                <ArrowRight className="w-4 h-4 stroke-[1.5]" />
              </button>

              {/* Vignette badge */}
              <div className="absolute bottom-3 left-3 z-20 bg-white/90 backdrop-blur-sm px-2.5 py-1 text-[11px] font-grotesque text-[#000000] border border-[#e5e5e5] rounded">
                {product.material} · {selectedColor.name} ({selectedImageIndex + 1}/{displayImages.length})
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="flex space-x-3 overflow-x-auto pb-2">
              {displayImages.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => changeImage(idx)}
                  className={`relative w-20 h-20 flex-shrink-0 border overflow-hidden transition-all rounded ${
                    selectedImageIndex === idx ? 'border-[#000000] ring-2 ring-[#000000]' : 'border-[#e5e5e5] opacity-75 hover:opacity-100'
                  }`}
                  aria-label={`Show image ${idx + 1}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Sheet Society Feature Highlight Box */}
            <div className="p-4 bg-white border border-[#e5e5e5] rounded text-xs text-[#000000]/80 leading-relaxed space-y-1.5">
              <p className="font-semibold text-[#000000]">
                Why You'll Love It:
              </p>
              <p>
                {product.category === 'Quilt Covers' && 'Features our invisible zipper closure along the bottom seam. No more struggling with loose buttons or duvet inserts bunching up.'}
                {product.category === 'Fitted Sheets' && 'Engineered with our signature 55cm extra-deep wall and 3cm thick ribbed elastic that anchors firmly to any mattress height.'}
                {product.category === 'Pillowcases' && 'Constructed with our deep 22cm envelope closure so pillows stay neatly covered and never poke out.'}
                {product.category === 'Flat Sheets' && 'Tailored with a generous 20cm folded double-layer top hem for elegant turn-down styling.'}
                {product.category !== 'Quilt Covers' && product.category !== 'Fitted Sheets' && product.category !== 'Pillowcases' && product.category !== 'Flat Sheets' && 'Woven from 100% natural, breathable fibres. Pre-washed with natural pumice stones for that buttery, lived-in feel from night one.'}
              </p>
            </div>

          </div>

          {/* Right Column: Buying Choices & Specs (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div>
              {/* Category & Rating */}
              <div className="flex items-center justify-between text-xs font-grotesque text-[#000000]/60 mb-1">
                <span className="uppercase tracking-widest font-semibold text-[#000000]">
                  {product.category}
                </span>
                <div className="flex items-center space-x-1 text-[#000000]">
                  <Star className="w-3.5 h-3.5 fill-[#000000] text-[#000000]" />
                  <span className="font-medium">{product.rating}</span>
                  <span className="text-[#000000]/50">({product.reviewsCount} reviews)</span>
                </div>
              </div>

              {/* Title & Dynamic Price */}
              <h2 className="font-awesome text-2xl sm:text-3xl text-[#000000] font-normal leading-snug">
                {product.name}
              </h2>

              <div className="flex items-baseline space-x-3 mt-2.5">
                <span className="text-2xl text-[#000000] font-semibold tracking-tight font-grotesque">
                  {formatPKR(currentUnitPrice)}
                </span>
                <span className="text-xs text-[#000000]/60 font-medium">
                  {selectedSize} size
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#000000]/80 mt-3 leading-relaxed">
                {product.description}
              </p>

              {/* Color Swatch Picker */}
              <div className="mt-6 pt-5 border-t border-[#e5e5e5]">
                <div className="flex items-center justify-between text-xs mb-2.5">
                  <span className="text-[#000000]/70 uppercase tracking-wider font-semibold">
                    Colour: <strong className="text-[#000000]">{selectedColor.name}</strong>
                  </span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {product.colors.map((color) => {
                    const isSelected = selectedColor.name === color.name;
                    return (
                      <button
                        key={color.name}
                        type="button"
                        onClick={() => {
                          setSelectedColor(color);
                          setSelectedImageIndex(0);
                        }}
                        className={`group relative p-1 transition-all rounded-full ${
                          isSelected ? 'ring-2 ring-[#000000] ring-offset-2 ring-offset-[#fbf9f6]' : 'hover:scale-105'
                        }`}
                        title={color.name}
                      >
                        <span 
                          className="block w-6 h-6 rounded-full border border-black/15"
                          style={{ backgroundColor: color.hex }}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Size Selector with Dynamic Price Sync */}
              <div className="mt-6">
                <div className="flex items-center justify-between text-xs mb-2.5">
                  <span className="text-[#000000]/70 uppercase tracking-wider font-semibold">
                    Size: <strong className="text-[#000000]">{selectedSize}</strong>
                  </span>
                  <button
                    type="button"
                    onClick={onOpenSizeGuide}
                    className="text-[#000000] underline hover:text-[#000000]/70 text-xs"
                  >
                    Size Guide
                  </button>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {product.sizes.map((size) => {
                    const isSelected = selectedSize === size;
                    const sizePrice = product.variantPrices ? product.variantPrices[size] : product.price;
                    return (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`py-2.5 px-2 text-center rounded border text-xs transition-all ${
                          isSelected
                            ? 'bg-[#000000] text-white border-[#000000] font-medium shadow-sm'
                            : 'bg-white border-[#e5e5e5] text-[#000000] hover:border-[#000000]'
                        }`}
                      >
                        <span className="block font-medium">{size}</span>
                        {sizePrice && (
                          <span className={`block text-[10px] mt-0.5 ${isSelected ? 'text-white/80' : 'text-[#000000]/50'}`}>
                            {formatPKR(sizePrice)}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
                {product.dimensions[selectedSize] && (
                  <p className="text-[11px] text-[#000000]/50 mt-2">
                    Dimensions: {product.dimensions[selectedSize]}
                  </p>
                )}
              </div>

              {/* Quantity and Add to Cart Row */}
              <div className="mt-6 pt-5 border-t border-[#e5e5e5] flex items-center space-x-3">
                {/* Quantity */}
                <div className="flex items-center border border-[#e5e5e5] bg-white rounded-full">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2.5 text-[#000000] hover:text-[#000000]/60"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-3 text-xs font-semibold text-[#000000]">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2.5 text-[#000000] hover:text-[#000000]/60"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Add To Cart Button */}
                <button
                  type="button"
                  onClick={handleAddToCart}
                  disabled={isAddedFeedback}
                  className={`flex-1 py-3.5 px-4 text-xs font-grotesque uppercase tracking-widest font-semibold transition-all duration-200 flex items-center justify-center space-x-2 rounded-full shadow-sm ${
                    isAddedFeedback 
                      ? 'bg-[#2E5E3A] text-white' 
                      : 'bg-[#000000] text-white hover:bg-[#333333]'
                  }`}
                >
                  {isAddedFeedback ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Bag</span>
                    </>
                  ) : (
                    <span>Add to Bag — {formatPKR(currentUnitPrice * quantity)}</span>
                  )}
                </button>
              </div>

              {/* Trust Badges */}
              <div className="mt-5 grid grid-cols-2 gap-3 text-[11px] text-[#000000]/70">
                <div className="flex items-center space-x-1.5">
                  <span className="font-bold text-[#000000]">✓</span>
                  <span>100% Satisfaction Guarantee</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#000000]" />
                  <span>OEKO-TEX® Certified</span>
                </div>
              </div>

            </div>

            {/* Informative Accordions */}
            <div className="border-t border-[#e5e5e5] divide-y divide-[#e5e5e5] mt-6 text-xs">
              
              {/* Accordion: Fabric & Construction */}
              <div>
                <button
                  onClick={() => toggleAccordion('fabric')}
                  className="w-full py-3 flex items-center justify-between text-left text-[#000000] font-semibold"
                >
                  <span>Fabric & Weave Construction</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openAccordion === 'fabric' ? 'rotate-180' : ''}`} />
                </button>
                {openAccordion === 'fabric' && (
                  <div className="pb-3 text-[#000000]/80 space-y-2 leading-relaxed">
                    <p>{product.weaveDetails}</p>
                    <p><strong>Fabric Weight:</strong> {product.threadCountOrWeight}</p>
                    <p><strong>Certification:</strong> {product.certification}</p>
                  </div>
                )}
              </div>

              {/* Accordion: What's Included */}
              <div>
                <button
                  onClick={() => toggleAccordion('includes')}
                  className="w-full py-3 flex items-center justify-between text-left text-[#000000] font-semibold"
                >
                  <span>What's Included</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openAccordion === 'includes' ? 'rotate-180' : ''}`} />
                </button>
                {openAccordion === 'includes' && (
                  <div className="pb-3 text-[#000000]/80 space-y-1.5">
                    {product.includes.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <span className="text-[#000000]">•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Accordion: Laundering & Care */}
              <div>
                <button
                  onClick={() => toggleAccordion('care')}
                  className="w-full py-3 flex items-center justify-between text-left text-[#000000] font-semibold"
                >
                  <span>Care Instructions</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openAccordion === 'care' ? 'rotate-180' : ''}`} />
                </button>
                {openAccordion === 'care' && (
                  <div className="pb-3 text-[#000000]/80 space-y-1.5">
                    {product.care.map((tip, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <span className="text-[#000000]">•</span>
                        <span>{tip}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
