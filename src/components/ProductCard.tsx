import React, { useState } from 'react';
import { Product, ColorVariant } from '../types';
import { Star, Eye } from 'lucide-react';
import { formatPKR } from '../utils/format';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product, initialColor?: ColorVariant) => void;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelectProduct,
  onQuickView,
}) => {
  const [selectedColor, setSelectedColor] = useState<ColorVariant>(product.colors[0]);
  const [isHovered, setIsHovered] = useState(false);

  // If a color variant has an explicit image, use it; otherwise fallback to product images
  const currentImage = selectedColor.image || product.images[0];
  const secondaryImage = product.images[1] || currentImage;

  return (
    <div className="group flex flex-col bg-chalk border border-sand-border transition-all duration-300 hover:border-umber/40 hover:shadow-subtle">
      
      {/* Product Image Stage */}
      <div 
        className="relative aspect-[4/5] w-full overflow-hidden bg-oat-stone/30 cursor-pointer"
        onClick={() => onSelectProduct(product, selectedColor)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={isHovered ? secondaryImage : currentImage}
          alt={`${product.name} in ${selectedColor.name}`}
          className="w-full h-full object-cover object-center transition-all duration-700 ease-out"
          loading="lazy"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-1.5 pointer-events-none">
          {product.isBestseller && (
            <span className="px-2 py-0.5 text-[9px] uppercase tracking-wider font-sans font-medium bg-umber text-porcelain shadow-sm">
              Bestseller
            </span>
          )}
          {product.isNew && (
            <span className="px-2 py-0.5 text-[9px] uppercase tracking-wider font-sans font-medium bg-olive-ink text-porcelain shadow-sm">
              New Arrival
            </span>
          )}
        </div>

        {/* Quick View Floating Action */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onQuickView(product);
          }}
          className="absolute bottom-3 left-3 right-3 py-2.5 px-3 bg-chalk/95 backdrop-blur-md text-umber hover:bg-umber hover:text-porcelain text-xs font-sans uppercase tracking-widest font-medium transition-all duration-200 border border-sand-border flex items-center justify-center space-x-1.5 opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0"
          aria-label={`Quick view ${product.name}`}
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Quick View</span>
        </button>

      </div>

      {/* Product Details */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between space-y-3">
        
        <div>
          {/* Material Tag & Rating */}
          <div className="flex items-center justify-between text-[11px] font-sans text-umber/60 mb-1">
            <span className="uppercase tracking-wider font-medium text-olive-ink">
              {product.material}
            </span>
            <div className="flex items-center space-x-1 text-umber/80">
              <Star className="w-3 h-3 fill-umber/70 text-umber/70" />
              <span>{product.rating}</span>
              <span className="text-umber/40">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Title */}
          <h3 
            onClick={() => onSelectProduct(product, selectedColor)}
            className="font-serif text-base sm:text-lg text-umber hover:text-olive-ink transition-colors font-normal cursor-pointer leading-snug line-clamp-1"
          >
            {product.name}
          </h3>

          {/* Subtitle / Weave note */}
          <p className="text-xs text-soft-graphite/60 font-sans mt-0.5 line-clamp-1">
            {product.subtitle}
          </p>
        </div>

        {/* Pricing & Swatches Row */}
        <div className="pt-2.5 border-t border-sand-border/80 flex items-center justify-between">
          
          {/* Price in PKR */}
          <div className="flex items-baseline space-x-2">
            <span className="font-serif text-base sm:text-lg text-umber font-normal">
              {formatPKR(product.price)}
            </span>
            {product.salePrice && (
              <span className="font-sans text-xs text-umber/40 line-through">
                {formatPKR(product.salePrice)}
              </span>
            )}
          </div>

          {/* Interactive Color Swatches */}
          <div className="flex items-center space-x-1.5" aria-label="Color options">
            {product.colors.slice(0, 5).map((color) => {
              const isSelected = selectedColor.name === color.name;
              return (
                <button
                  key={color.name}
                  type="button"
                  onClick={() => setSelectedColor(color)}
                  className={`relative w-4 h-4 rounded-full transition-all focus:outline-none ${
                    isSelected ? 'ring-1 ring-offset-2 ring-umber scale-110' : 'hover:scale-105'
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                  aria-label={`Select ${color.name}`}
                />
              );
            })}
            {product.colors.length > 5 && (
              <span className="text-[10px] text-umber/50 font-sans pl-0.5">
                +{product.colors.length - 5}
              </span>
            )}
          </div>

        </div>

      </div>

    </div>
  );
};
