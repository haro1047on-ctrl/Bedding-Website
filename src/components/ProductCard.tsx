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
  const [hoverColor, setHoverColor] = useState<ColorVariant | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Active color is previewed color on swatch hover, or selected color
  const activeColor = hoverColor || selectedColor;
  const currentImage = activeColor.image || product.images[0];
  const secondaryImage = product.images[1] || currentImage;

  const hasPriceRange = product.minPrice && product.maxPrice && product.minPrice !== product.maxPrice;

  return (
    <div className="group flex flex-col bg-white border border-[#e5e5e5] transition-all duration-300 hover:shadow-md">
      
      {/* Product Image Stage (4:5 vertical ratio matching Sheet Society) */}
      <div 
        className="relative aspect-[4/5] w-full overflow-hidden bg-[#f4f2ec] cursor-pointer"
        onClick={() => onSelectProduct(product, activeColor)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={isHovered && !hoverColor ? secondaryImage : currentImage}
          alt={`${product.name} in ${activeColor.name}`}
          className="w-full h-full object-cover object-center transition-all duration-500 ease-out text-transparent group-hover:scale-[1.02]"
          loading="lazy"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-1.5 pointer-events-none">
          {product.isBestseller && (
            <span className="px-2 py-0.5 text-[9px] uppercase tracking-wider font-grotesque font-bold bg-black text-white">
              Bestseller
            </span>
          )}
          {product.isNew && (
            <span className="px-2 py-0.5 text-[9px] uppercase tracking-wider font-grotesque font-bold bg-[#596451] text-white">
              New
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
          className="absolute bottom-3 left-3 right-3 py-2.5 px-3 bg-white/95 backdrop-blur-md text-black hover:bg-black hover:text-white text-xs font-grotesque uppercase tracking-widest font-semibold transition-all duration-200 border border-black/10 flex items-center justify-center space-x-1.5 opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 shadow-sm rounded-full"
          aria-label={`Quick view ${product.name}`}
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Quick View</span>
        </button>

      </div>

      {/* Product Details */}
      <div className="p-4 flex flex-col flex-1 justify-between space-y-2.5 font-grotesque">
        
        <div>
          {/* Material Tag & Rating */}
          <div className="flex items-center justify-between text-[11px] text-black/60 mb-1">
            <span className="uppercase tracking-wider font-medium text-black/70">
              {product.material}
            </span>
            <div className="flex items-center space-x-1 text-black/80">
              <Star className="w-3 h-3 fill-black text-black" />
              <span className="font-semibold text-xs">{product.rating}</span>
              <span className="text-black/40 text-[10px]">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Title */}
          <h3 
            onClick={() => onSelectProduct(product, activeColor)}
            className="text-sm sm:text-base text-black hover:text-black/70 transition-colors font-semibold cursor-pointer leading-snug line-clamp-1"
          >
            {product.name}
          </h3>

          {/* Colorway / Fabric detail */}
          <p className="text-xs text-black/50 mt-0.5 line-clamp-1">
            {activeColor.name} · {product.threadCountOrWeight}
          </p>
        </div>

        {/* Pricing & Swatches Row */}
        <div className="pt-2 border-t border-[#e5e5e5] flex items-center justify-between">
          
          {/* Price in PKR */}
          <div className="flex items-baseline space-x-2">
            <span className="text-sm sm:text-base text-black font-bold tracking-tight">
              {hasPriceRange ? `From ${formatPKR(product.minPrice!)}` : formatPKR(product.price)}
            </span>
            {product.salePrice && (
              <span className="text-xs text-black/40 line-through">
                {formatPKR(product.salePrice)}
              </span>
            )}
          </div>

          {/* Interactive Color Swatches with Instant Hover Preview */}
          <div className="flex items-center space-x-1.5" aria-label="Color options">
            {product.colors.slice(0, 5).map((color) => {
              const isSelected = activeColor.name === color.name;
              return (
                <button
                  key={color.name}
                  type="button"
                  onClick={() => setSelectedColor(color)}
                  onMouseEnter={() => setHoverColor(color)}
                  onMouseLeave={() => setHoverColor(null)}
                  className={`relative w-4 h-4 rounded-full transition-all focus:outline-none border border-black/15 ${
                    isSelected ? 'ring-2 ring-offset-1 ring-black scale-110' : 'hover:scale-110'
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                  aria-label={`Select ${color.name}`}
                />
              );
            })}
            {product.colors.length > 5 && (
              <span className="text-[10px] text-black/50 pl-0.5 font-medium">
                +{product.colors.length - 5}
              </span>
            )}
          </div>

        </div>

      </div>

    </div>
  );
};
