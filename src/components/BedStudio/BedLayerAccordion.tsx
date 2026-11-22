import React from 'react';
import { BedLayerSelection, Product, ColorVariant, BedSize } from '../../types';
import { isSizeAvailable } from '../../utils/filterUtils';
import { formatPKR } from '../../utils/format';
import { ChevronDown, Check, AlertCircle, Info } from 'lucide-react';

interface BedLayerAccordionProps {
  layerIndex: number;
  layer: BedLayerSelection;
  isExpanded: boolean;
  onToggleExpand: () => void;
  onToggleEnable?: (enabled: boolean) => void;
  availableProducts: Product[];
  onUpdateProduct: (product: Product) => void;
  onUpdateColor: (color: ColorVariant) => void;
  onUpdateSize: (size: BedSize) => void;
  masterSize: BedSize;
}

export const BedLayerAccordion: React.FC<BedLayerAccordionProps> = ({
  layerIndex,
  layer,
  isExpanded,
  onToggleExpand,
  onToggleEnable,
  availableProducts,
  onUpdateProduct,
  onUpdateColor,
  onUpdateSize,
  masterSize,
}) => {
  const { layerLabel, isRequired, enabled, product, color, size } = layer;

  // Compute live unit price
  const unitPrice = (product.variantPrices && product.variantPrices[size]) ?? product.price;

  // Check if current size is available for the current colour
  const currentSizeIsAvailable = isSizeAvailable(product, size, [color.name]);

  // Handle color change and auto-reconcile size if needed
  const handleColorChange = (newColor: ColorVariant) => {
    onUpdateColor(newColor);
    // If current size is not available in new color, find first available size
    if (!isSizeAvailable(product, size, [newColor.name])) {
      const firstAvailableSize = product.sizes.find(s => isSizeAvailable(product, s, [newColor.name]));
      if (firstAvailableSize) {
        onUpdateSize(firstAvailableSize);
      }
    }
  };

  // Handle product change
  const handleProductChange = (newProduct: Product) => {
    onUpdateProduct(newProduct);
    // Try to preserve current color name if available in new product
    const matchingColor = newProduct.colors.find(c => c.name.toLowerCase() === color.name.toLowerCase()) || newProduct.colors[0];
    onUpdateColor(matchingColor);

    // Try to preserve current size or masterSize if available
    const targetSize = newProduct.sizes.includes(size) ? size : (newProduct.sizes.includes(masterSize) ? masterSize : newProduct.sizes[0]);
    if (isSizeAvailable(newProduct, targetSize, [matchingColor.name])) {
      onUpdateSize(targetSize);
    } else {
      const availableSize = newProduct.sizes.find(s => isSizeAvailable(newProduct, s, [matchingColor.name])) || targetSize;
      onUpdateSize(availableSize);
    }
  };

  return (
    <div
      data-layer-accordion={layer.layerKey}
      className={`border rounded-sm transition-all overflow-hidden ${
        isExpanded
          ? 'bg-chalk border-umber ring-1 ring-umber/20 shadow-xs'
          : 'bg-porcelain/60 border-sand-border hover:border-umber/40'
      } ${!enabled ? 'opacity-70 bg-porcelain/30' : ''}`}
    >
      {/* Accordion Header */}
      <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center space-x-3.5 flex-1 cursor-pointer" onClick={onToggleExpand}>
          {/* Layer Step Badge */}
          <span className="w-6 h-6 rounded-full bg-porcelain border border-sand-border flex items-center justify-center text-[10px] font-mono font-bold text-umber flex-shrink-0">
            0{layerIndex}
          </span>

          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <h3 className="font-grotesque text-xs uppercase tracking-[0.2em] font-bold text-umber">
                {layerLabel}
              </h3>
              {!isRequired && (
                <span className="text-[10px] font-grotesque uppercase tracking-wider text-soft-graphite/60 bg-sand-subtle/50 px-1.5 py-0.5 rounded-xs">
                  Optional
                </span>
              )}
            </div>

            {/* Sub-summary */}
            <p className="text-xs font-sans text-soft-graphite/80 mt-0.5 flex flex-wrap items-center gap-1.5">
              <span className="font-medium text-umber">{product.material}</span>
              <span>·</span>
              <span className="flex items-center space-x-1">
                <span
                  className="w-2.5 h-2.5 rounded-full border border-sand-border inline-block"
                  style={{ backgroundColor: color.hex }}
                />
                <span>{color.name}</span>
              </span>
              <span>·</span>
              <span data-testid="layer-size-badge" className="font-mono text-umber/90">{size}</span>
              {enabled && (
                <>
                  <span>·</span>
                  <span className="font-mono font-medium text-umber">{formatPKR(unitPrice)}</span>
                </>
              )}
            </p>
          </div>
        </div>

        {/* Right side: Optional toggle switch & expand chevron */}
        <div className="flex items-center justify-between sm:justify-end space-x-4 border-t sm:border-t-0 pt-2 sm:pt-0 border-sand-border/50">
          {!isRequired && onToggleEnable && (
            <label className="flex items-center space-x-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={enabled}
                onChange={(e) => onToggleEnable(e.target.checked)}
                className="sr-only"
                aria-label={`Include ${layerLabel} in bedding suite`}
              />
              <div
                className={`w-9 h-5 rounded-full transition-colors relative p-0.5 ${
                  enabled ? 'bg-olive-ink' : 'bg-sand-border'
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full bg-porcelain transition-transform duration-200 ${
                    enabled ? 'translate-x-4' : 'translate-x-0'
                  }`}
                />
              </div>
              <span className="text-xs font-sans text-soft-graphite font-medium">
                {enabled ? 'Included' : 'Skipped'}
              </span>
            </label>
          )}

          <button
            type="button"
            onClick={onToggleExpand}
            className="min-w-[44px] min-h-[44px] inline-flex items-center justify-center p-2 text-umber hover:text-soft-graphite focus:outline-none"
            aria-expanded={isExpanded}
            aria-label={`Toggle ${layerLabel} configuration panel`}
          >
            <ChevronDown
              className={`w-4 h-4 stroke-[2] transition-transform duration-200 ${
                isExpanded ? 'rotate-180' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Accordion Expanded Body */}
      {isExpanded && enabled && (
        <div className="px-4 sm:px-6 pb-6 pt-2 border-t border-sand-border/70 space-y-5 animate-fadeIn">
          
          {/* 1. Fabric Selection */}
          <div>
            <label className="block text-[11px] font-grotesque uppercase tracking-[0.16em] font-bold text-umber mb-2">
              1. Select Fabric &amp; Weave
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {availableProducts.map((p) => {
                const isSelected = p.id === product.id;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => handleProductChange(p)}
                    className={`p-2.5 rounded-sm text-left border transition-all ${
                      isSelected
                        ? 'bg-porcelain border-umber ring-1 ring-umber/30'
                        : 'bg-chalk border-sand-border hover:border-umber/40'
                    }`}
                  >
                    <span className="font-serif text-xs font-medium text-umber block">
                      {p.material}
                    </span>
                    <span className="text-[10px] font-sans text-soft-graphite/70 block mt-0.5 line-clamp-1">
                      {p.colors.length} Colourway{p.colors.length !== 1 ? 's' : ''}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Colourway Swatches */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-[11px] font-grotesque uppercase tracking-[0.16em] font-bold text-umber">
                2. Select Colourway
              </label>
              <span className="text-xs font-sans text-soft-graphite">
                Selected: <strong className="font-medium text-umber">{color.name}</strong>
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2" role="radiogroup" aria-label={`Colourways for ${product.name}`}>
              {product.colors.map((c) => {
                const isSelected = c.name === color.name;
                return (
                  <button
                    key={c.name}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    aria-label={`Select ${c.name} colourway`}
                    onClick={() => handleColorChange(c)}
                    className="min-w-[44px] min-h-[44px] inline-flex items-center justify-center p-1 group focus:outline-none"
                    title={c.name}
                  >
                    <span
                      className={`w-7 h-7 rounded-full border transition-all flex items-center justify-center ${
                        isSelected
                          ? 'border-umber ring-2 ring-umber ring-offset-2 scale-105'
                          : 'border-sand-border group-hover:scale-105'
                      }`}
                      style={{ backgroundColor: c.hex }}
                    >
                      {isSelected && (
                        <Check
                          className={`w-3.5 h-3.5 stroke-[2.5] ${
                            c.hex.toLowerCase() === '#ffffff' || c.hex.toLowerCase() === '#fbf9f5' || c.hex.toLowerCase() === '#f2ebdf'
                              ? 'text-umber'
                              : 'text-white'
                          }`}
                        />
                      )}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Independent Size Selection with Stock Availability */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-[11px] font-grotesque uppercase tracking-[0.16em] font-bold text-umber">
                3. Choose Size
              </label>
              <span className="text-[11px] font-sans text-soft-graphite/70">
                Independent layer sizing (Defaults to Master: {masterSize})
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {product.sizes.map((s) => {
                const available = isSizeAvailable(product, s, [color.name]);
                const isSelected = s === size;
                const sizePrice = (product.variantPrices && product.variantPrices[s]) ?? product.price;

                return (
                  <button
                    key={s}
                    type="button"
                    disabled={!available}
                    onClick={() => available && onUpdateSize(s)}
                    className={`min-h-[44px] p-2.5 rounded-sm text-left border transition-all flex flex-col justify-between ${
                      isSelected && available
                        ? 'bg-umber text-porcelain border-umber shadow-xs'
                        : available
                        ? 'bg-porcelain border-sand-border hover:border-umber/50 text-umber'
                        : 'bg-porcelain/30 border-sand-border/50 text-soft-graphite/40 cursor-not-allowed opacity-60'
                    }`}
                    aria-disabled={!available}
                    aria-label={`${s} size: ${available ? formatPKR(sizePrice) : 'Sold Out'}`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="text-xs font-grotesque font-medium">
                        {s}
                      </span>
                      {!available && (
                        <span className="text-[9px] uppercase font-bold tracking-wider text-terracotta">
                          Sold Out
                        </span>
                      )}
                    </div>
                    <span className={`text-[10px] font-mono mt-1 ${isSelected && available ? 'text-porcelain/80' : 'text-soft-graphite/70'}`}>
                      {available ? formatPKR(sizePrice) : 'Unavailable'}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Out-of-stock warning notice if applicable */}
            {!currentSizeIsAvailable && (
              <div className="mt-2.5 p-2 bg-terracotta/10 border border-terracotta/30 rounded-xs flex items-center space-x-2 text-xs text-umber">
                <AlertCircle className="w-4 h-4 text-terracotta flex-shrink-0" />
                <span>
                  The <strong>{size}</strong> size is currently sold out in <strong>{color.name}</strong>. Please select an available size above.
                </span>
              </div>
            )}

            {/* Incompatible master size notice if applicable */}
            {enabled && !product.sizes.includes(masterSize) && (
              <div data-testid="incompatible-size-notice" className="mt-2 p-2 bg-sand-subtle/60 border border-sand-border rounded-xs flex items-center space-x-2 text-[11px] font-sans text-soft-graphite">
                <Info className="w-3.5 h-3.5 text-umber/50 flex-shrink-0" />
                <span>
                  Master foundation is <strong>{masterSize}</strong>. This {layerLabel.toLowerCase()} is tailored in <strong>{size}</strong>.
                </span>
              </div>
            )}
          </div>

          {/* Layer Detail Note */}
          <div className="pt-3 border-t border-sand-border/50 flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-soft-graphite/80 gap-2">
            <span className="line-clamp-1">
              {product.subtitle || product.weaveDetails || `${product.material} crafted for everyday luxury.`}
            </span>
            <span className="font-mono text-umber font-medium flex-shrink-0">
              Layer Price: {formatPKR(unitPrice)}
            </span>
          </div>

        </div>
      )}
    </div>
  );
};
