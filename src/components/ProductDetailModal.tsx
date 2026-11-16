import React, { useState } from 'react';
import { Product, BedSize, ColorVariant } from '../types';
import { X, Star, ShieldCheck, Plus, Minus, ChevronDown, Check } from 'lucide-react';
import { formatPKR } from '../utils/format';

interface ProductDetailModalProps {
  product: Product;
  initialColor?: ColorVariant;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, color: ColorVariant, size: BedSize, quantity: number) => void;
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
  if (!isOpen) return null;

  const [selectedColor, setSelectedColor] = useState<ColorVariant>(initialColor || product.colors[0]);
  const [selectedSize, setSelectedSize] = useState<BedSize>(product.sizes[0]);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [openAccordion, setOpenAccordion] = useState<string>('fabric');
  const [isAddedFeedback, setIsAddedFeedback] = useState<boolean>(false);

  // Images list: put current color image first if available, followed by product gallery
  const displayImages = [
    selectedColor.image || product.images[0],
    ...product.images.filter(img => img !== selectedColor.image),
  ];

  const handleAddToCart = () => {
    onAddToCart(product, selectedColor, selectedSize, quantity);
    setIsAddedFeedback(true);
    setTimeout(() => setIsAddedFeedback(false), 2200);
  };

  const toggleAccordion = (section: string) => {
    setOpenAccordion(openAccordion === section ? '' : section);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-umber/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-5xl bg-chalk border border-sand-border shadow-2xl my-auto z-10 max-h-[92vh] overflow-y-auto">
        
        {/* Sticky Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-chalk/90 backdrop-blur-sm border border-sand-border text-umber hover:text-soft-graphite transition-colors"
          aria-label="Close product modal"
        >
          <X className="w-5 h-5 stroke-[1.5]" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10">
          
          {/* Left Column: Photo Gallery (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Main Stage Image */}
            <div className="relative aspect-[4/3] sm:aspect-[1/1] w-full overflow-hidden bg-oat-stone/30 border border-sand-border shadow-subtle">
              <img
                src={displayImages[selectedImageIndex] || displayImages[0]}
                alt={`${product.name} - ${selectedColor.name}`}
                className="w-full h-full object-cover transition-all duration-300"
              />
              <div className="absolute bottom-3 left-3 bg-chalk/90 backdrop-blur-sm px-2.5 py-1 text-[11px] font-sans text-umber border border-sand-border">
                {product.material} · {selectedColor.name}
              </div>
            </div>

            {/* Thumbnail Navigation Strip */}
            <div className="flex space-x-3 overflow-x-auto pb-2">
              {displayImages.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`relative w-20 h-20 flex-shrink-0 border overflow-hidden transition-all ${
                    selectedImageIndex === idx ? 'border-umber ring-1 ring-umber' : 'border-sand-border opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Environmental Note */}
            <div className="p-4 bg-porcelain border border-sand-border text-xs text-soft-graphite/80 font-sans leading-relaxed">
              <p>
                <strong>The Natural Linen Note:</strong> Pure French flax possesses organic texture and subtle slubs inherent to genuine natural cellulose fibers. Finished with volcanic pumice stones in Portugal for immediate softness.
              </p>
            </div>

          </div>

          {/* Right Column: Buying Choices & Specs (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div>
              {/* Category & Rating */}
              <div className="flex items-center justify-between text-xs font-sans text-umber/60 mb-1">
                <span className="uppercase tracking-widest font-semibold text-olive-ink">
                  {product.category}
                </span>
                <div className="flex items-center space-x-1 text-umber">
                  <Star className="w-3.5 h-3.5 fill-umber text-umber" />
                  <span className="font-medium">{product.rating}</span>
                  <span className="text-umber/50">({product.reviewsCount} reviews)</span>
                </div>
              </div>

              {/* Title & Price */}
              <h2 className="font-serif text-2xl sm:text-3xl text-umber font-normal leading-snug">
                {product.name}
              </h2>

              <div className="flex items-baseline space-x-3 mt-2 font-sans">
                <span className="text-2xl text-umber font-semibold tracking-tight">
                  {formatPKR(product.price)}
                </span>
                {product.salePrice && (
                  <span className="text-sm line-through text-umber/40">
                    {formatPKR(product.salePrice)}
                  </span>
                )}
                <span className="text-xs text-olive-ink font-medium pl-1">
                  Complimentary Delivery Over Rs. 15,000
                </span>
              </div>

              <p className="text-xs sm:text-sm text-soft-graphite/80 font-sans mt-3 leading-relaxed">
                {product.description}
              </p>

              {/* Color Swatch Picker */}
              <div className="mt-6 pt-5 border-t border-sand-border">
                <div className="flex items-center justify-between text-xs font-sans mb-2.5">
                  <span className="text-umber/70 uppercase tracking-wider font-semibold">
                    Atelier Hue: <strong className="text-umber">{selectedColor.name}</strong>
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
                        className={`group relative p-1 transition-all ${
                          isSelected ? 'ring-2 ring-umber ring-offset-2 ring-offset-chalk' : 'hover:scale-105'
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

              {/* Size Selector */}
              <div className="mt-6">
                <div className="flex items-center justify-between text-xs font-sans mb-2.5">
                  <span className="text-umber/70 uppercase tracking-wider font-semibold">
                    Select Size: <strong className="text-umber">{selectedSize}</strong>
                  </span>
                  <button
                    type="button"
                    onClick={onOpenSizeGuide}
                    className="text-olive-ink hover:text-umber underline text-xs"
                  >
                    Size & Dimensions Guide
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {product.sizes.map((size) => (
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
                <p className="text-[11px] text-umber/50 font-sans mt-2">
                  Dimensions: {product.dimensions[selectedSize]}
                </p>
              </div>

              {/* Quantity and Add to Cart Row */}
              <div className="mt-6 pt-5 border-t border-sand-border flex items-center space-x-3">
                {/* Quantity */}
                <div className="flex items-center border border-sand-border bg-porcelain">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 text-umber hover:text-olive-ink"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-3 text-xs font-sans font-medium text-umber">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 text-umber hover:text-olive-ink"
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
                  className={`flex-1 py-3.5 text-xs font-sans uppercase tracking-widest font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
                    isAddedFeedback 
                      ? 'bg-olive-ink text-porcelain' 
                      : 'bg-umber text-porcelain hover:bg-soft-graphite'
                  }`}
                >
                  {isAddedFeedback ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Your Bag</span>
                    </>
                  ) : (
                    <span>Add to Bag — {formatPKR(product.price * quantity)}</span>
                  )}
                </button>
              </div>

              {/* Trust Badges */}
              <div className="mt-5 grid grid-cols-2 gap-3 text-[11px] font-sans text-umber/70">
                <div className="flex items-center space-x-1.5">
                  <span className="text-terracotta">✓</span>
                  <span>100-Night Sleep Guarantee</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-olive-ink" />
                  <span>OEKO-TEX® Standard 100</span>
                </div>
              </div>

            </div>

            {/* Informative Accordions */}
            <div className="border-t border-sand-border divide-y divide-sand-border mt-6 text-xs font-sans">
              
              {/* Accordion: Fabric & Construction */}
              <div>
                <button
                  onClick={() => toggleAccordion('fabric')}
                  className="w-full py-3 flex items-center justify-between text-left text-umber font-semibold"
                >
                  <span>Fabric & Weave Construction</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openAccordion === 'fabric' ? 'rotate-180' : ''}`} />
                </button>
                {openAccordion === 'fabric' && (
                  <div className="pb-3 text-soft-graphite/80 space-y-2 leading-relaxed">
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
                  className="w-full py-3 flex items-center justify-between text-left text-umber font-semibold"
                >
                  <span>What's Included in the Box</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openAccordion === 'includes' ? 'rotate-180' : ''}`} />
                </button>
                {openAccordion === 'includes' && (
                  <div className="pb-3 text-soft-graphite/80 space-y-1.5">
                    {product.includes.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <span className="text-olive-ink">•</span>
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
                  className="w-full py-3 flex items-center justify-between text-left text-umber font-semibold"
                >
                  <span>Care Instructions</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openAccordion === 'care' ? 'rotate-180' : ''}`} />
                </button>
                {openAccordion === 'care' && (
                  <div className="pb-3 text-soft-graphite/80 space-y-1.5">
                    {product.care.map((tip, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <span className="text-olive-ink">•</span>
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
