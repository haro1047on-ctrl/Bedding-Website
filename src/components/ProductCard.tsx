import React, { useState, useEffect } from 'react';
import { Product, ColorVariant } from '../types';
import { Star, Eye, ImageOff } from 'lucide-react';
import { formatPKR } from '../utils/format';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product, initialColor?: ColorVariant) => void;
  onQuickView: (product: Product, initialColor?: ColorVariant) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelectProduct,
  onQuickView,
}) => {
  const [selectedColor, setSelectedColor] = useState<ColorVariant>(product.colors[0]);
  const [hoverColor, setHoverColor] = useState<ColorVariant | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Synchronize selectedColor and clear preview state when product changes
  useEffect(() => {
    setSelectedColor(product.colors[0]);
    setHoverColor(null);
  }, [product.id]);

  // Active color is previewed color on swatch hover, or selected color
  const activeColor = hoverColor || selectedColor;

  // Strict Colourway Image Resolution: Dedicated gallery first, single image second, missing placeholder third
  const activeGallery = (activeColor.gallery && Array.isArray(activeColor.gallery) && activeColor.gallery.length > 0)
    ? activeColor.gallery.filter(img => typeof img === 'string' && img.trim().length > 0)
    : [];
  const currentImage = activeGallery[0] || (typeof activeColor.image === 'string' && activeColor.image.trim()) || '';
  const secondaryImage = activeGallery[1] || currentImage;

  const hasPriceRange = product.minPrice && product.maxPrice && product.minPrice !== product.maxPrice;

  return (
    <div 
      data-testid="product-card"
      className="group flex flex-col bg-white border border-[#e5e5e5] transition-all duration-300 hover:shadow-md h-full"
      onMouseLeave={() => setHoverColor(null)}
      onPointerLeave={() => setHoverColor(null)}
      onMouseOut={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setHoverColor(null);
        }
      }}
    >
      
      {/* Product Image Stage (4:5 vertical ratio) */}
      <div 
        className="relative aspect-[4/5] w-full overflow-hidden bg-[#f4f2ec] cursor-pointer"
        onClick={() => onSelectProduct(product, activeColor)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {currentImage ? (
          <img
            src={isHovered && !hoverColor && secondaryImage ? secondaryImage : currentImage}
            alt={`${product.name} in ${activeColor.name}`}
            className="w-full h-full object-cover object-center transition-all duration-500 ease-out text-transparent group-hover:scale-[1.02]"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-[#f4f2ec]">
            <ImageOff className="w-6 h-6 text-black/30 mb-2" />
            <span className="text-[10px] uppercase tracking-wider font-semibold text-black/50">
              Photography Unavailable
            </span>
            <span className="text-[11px] text-black/70 font-medium mt-0.5">
              {activeColor.name}
            </span>
          </div>
        )}

        {/* Badges */}
        <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 flex flex-col space-y-1 pointer-events-none z-10">
          {product.isBestseller && (
            <span className="px-1.5 sm:px-2 py-0.5 text-[8px] sm:text-[9px] uppercase tracking-wider font-grotesque font-bold bg-black text-white shadow-sm">
              Bestseller
            </span>
          )}
          {product.isNew && (
            <span className="px-1.5 sm:px-2 py-0.5 text-[8px] sm:text-[9px] uppercase tracking-wider font-grotesque font-bold bg-[#596451] text-white shadow-sm">
              New
            </span>
          )}
        </div>

        {/* Mobile Quick View Floating Tap Action (accessible on touch without hover) */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onQuickView(product, activeColor);
          }}
          className="sm:hidden absolute bottom-2 right-2 p-2 bg-white/95 backdrop-blur-sm text-black hover:bg-black hover:text-white rounded-full shadow-md border border-black/10 active:scale-95 transition-all z-10 flex items-center justify-center"
          aria-label={`Quick view ${product.name}`}
        >
          <Eye className="w-3.5 h-3.5" />
        </button>

        {/* Desktop Quick View Floating Action (reveals on hover) */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onQuickView(product, activeColor);
          }}
          className="hidden sm:flex absolute bottom-3 left-3 right-3 py-2.5 px-3 bg-white/95 backdrop-blur-md text-black hover:bg-black hover:text-white text-xs font-grotesque uppercase tracking-widest font-semibold transition-all duration-200 border border-black/10 items-center justify-center space-x-1.5 opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 shadow-sm rounded-full z-10"
          aria-label={`Quick view ${product.name}`}
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Quick View</span>
        </button>
      </div>

      {/* Product Details with Dedicated Swatches Row & Clear Hierarchy */}
      <div className="p-3 sm:p-4 flex flex-col flex-1 justify-between font-grotesque space-y-2">
        
        <div className="space-y-1">
          {/* Material Tag & Rating */}
          <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-black/60">
            <span className="uppercase tracking-wider font-medium text-black/70 truncate max-w-[65%]">
              {product.material}
            </span>
            <div className="flex items-center space-x-0.5 sm:space-x-1 text-black/80 flex-shrink-0">
              <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-black text-black" />
              <span className="font-semibold text-[11px] sm:text-xs">{product.rating}</span>
              <span className="text-black/40 text-[9px] sm:text-[10px]">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Title (Clean 2-line wrap on mobile, 1-line on desktop) */}
          <h3 
            onClick={() => onSelectProduct(product, activeColor)}
            className="text-xs sm:text-base text-black hover:text-black/70 transition-colors font-semibold cursor-pointer leading-snug line-clamp-2 min-h-[2rem] sm:min-h-0"
          >
            {product.name}
          </h3>

          {/* Colorway / Fabric detail */}
          <p className="text-[11px] sm:text-xs text-black/50 line-clamp-1 truncate">
            {activeColor.name} · {product.threadCountOrWeight}
          </p>
        </div>

        <div>
          {/* Dedicated Swatches Row: Placed on its own line to prevent collision with pricing */}
          <div className="flex items-center space-x-1.5 py-1.5 overflow-x-auto scrollbar-none" aria-label="Color options">
            {product.colors.slice(0, 5).map((color) => {
              const isSelected = activeColor.name === color.name;
              return (
                <button
                  key={color.name}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedColor(color);
                    setHoverColor(null);
                  }}
                  onMouseEnter={() => setHoverColor(color)}
                  onMouseOver={() => setHoverColor(color)}
                  onPointerEnter={() => setHoverColor(color)}
                  className={`relative w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full transition-all focus:outline-none border border-black/15 flex-shrink-0 ${
                    isSelected ? 'ring-2 ring-offset-1 ring-black scale-110' : 'hover:scale-110'
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                  aria-label={`Select ${color.name}`}
                />
              );
            })}
            {product.colors.length > 5 && (
              <span className="text-[9px] sm:text-[10px] text-black/50 pl-0.5 font-medium flex-shrink-0">
                +{product.colors.length - 5}
              </span>
            )}
          </div>

          {/* Pricing Row: Clear, Unobstructed and Bold */}
          <div className="pt-2 border-t border-[#e5e5e5] flex items-baseline justify-between">
            <div className="flex items-baseline space-x-1.5">
              <span className="text-xs sm:text-base text-black font-bold tracking-tight whitespace-nowrap">
                {hasPriceRange ? `From ${formatPKR(product.minPrice!)}` : formatPKR(product.price)}
              </span>
              {product.salePrice && (
                <span className="text-[10px] sm:text-xs text-black/40 line-through">
                  {formatPKR(product.salePrice)}
                </span>
              )}
            </div>

            <span className="text-[10px] uppercase tracking-wider text-black/40 font-medium hidden xs:inline">
              PKR
            </span>
          </div>
        </div>

      </div>

    </div>
  );
};
