import React, { useState } from 'react';
import { BedStudioState, BedLayerSelection } from '../../types';
import { formatPKR } from '../../utils/format';
import { Info, ImageOff, Check, Eye } from 'lucide-react';

interface BedCanvasPreviewProps {
  state: BedStudioState;
  onSelectLayerToEdit?: (layerKey: string) => void;
  activeLayerKey?: string;
}

export const BedCanvasPreview: React.FC<BedCanvasPreviewProps> = ({
  state,
  onSelectLayerToEdit,
  activeLayerKey,
}) => {
  const [previewMode, setPreviewMode] = useState<'both' | 'illustration' | 'photography'>('both');
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const { masterSize, layers } = state;
  const { fittedSheet, flatSheet, quiltCover, pillowcases, blanket } = layers;

  // Active layers filter
  const activeLayers: BedLayerSelection[] = [
    fittedSheet,
    flatSheet.enabled ? flatSheet : null,
    quiltCover,
    pillowcases,
    blanket.enabled ? blanket : null,
  ].filter((l): l is BedLayerSelection => l !== null);

  const handleImageError = (key: string) => {
    setImageErrors(prev => ({ ...prev, [key]: true }));
  };

  /**
   * Phase 2 Strict 3-Tier Image Resolution
   * Priority 1: color.gallery[0]
   * Priority 2: color.image
   * Priority 3: null (triggers verified fallback placeholder)
   * NEVER fallback to product.images
   */
  const resolveLayerImage = (layer: BedLayerSelection): string | null => {
    const errorKey = `${layer.layerKey}-${layer.product.id}-${layer.color.name}`;
    if (imageErrors[errorKey]) return null;

    if (layer.color.gallery && layer.color.gallery.length > 0 && layer.color.gallery[0]) {
      return layer.color.gallery[0];
    }
    if (layer.color.image) {
      return layer.color.image;
    }
    return null;
  };

  return (
    <div className="w-full bg-chalk border border-sand-border rounded-sm overflow-hidden shadow-xs">
      {/* Top Header of the Canvas Preview */}
      <div className="px-4 sm:px-6 py-3.5 bg-porcelain border-b border-sand-border flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Eye className="w-4 h-4 text-umber/70" />
          <span className="font-grotesque text-xs uppercase tracking-[0.2em] font-bold text-umber">
            Architectural Suite Canvas
          </span>
          <span className="text-[11px] font-mono text-soft-graphite/60 hidden sm:inline">
            · {masterSize} Bed
          </span>
        </div>

        {/* View mode toggle */}
        <div className="flex items-center space-x-1 text-[10px] font-grotesque uppercase tracking-wider bg-chalk p-0.5 rounded-sm border border-sand-border">
          <button
            type="button"
            onClick={() => setPreviewMode('both')}
            className={`px-2 py-1 rounded-xs transition-colors ${
              previewMode === 'both' ? 'bg-umber text-porcelain font-semibold' : 'text-umber/70 hover:text-umber'
            }`}
          >
            All
          </button>
          <button
            type="button"
            onClick={() => setPreviewMode('illustration')}
            className={`px-2 py-1 rounded-xs transition-colors ${
              previewMode === 'illustration' ? 'bg-umber text-porcelain font-semibold' : 'text-umber/70 hover:text-umber'
            }`}
          >
            Vector
          </button>
          <button
            type="button"
            onClick={() => setPreviewMode('photography')}
            className={`px-2 py-1 rounded-xs transition-colors ${
              previewMode === 'photography' ? 'bg-umber text-porcelain font-semibold' : 'text-umber/70 hover:text-umber'
            }`}
          >
            Photo Deck
          </button>
        </div>
      </div>

      {/* 1. Architectural Vector Bed Canvas */}
      {(previewMode === 'both' || previewMode === 'illustration') && (
        <div className="relative p-6 sm:p-10 bg-gradient-to-b from-porcelain/40 to-porcelain flex flex-col items-center justify-center min-h-[380px] sm:min-h-[460px]">
          
          {/* Subtle room architectural background grid / floorline */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#3D342F_1px,transparent_1px)] [background-size:16px_16px]" />

          {/* Bed Canvas Illustration Container */}
          <div className="relative w-full max-w-[520px] aspect-[5/4] select-none">
            <svg
              viewBox="0 0 500 400"
              className="w-full h-full drop-shadow-md"
              xmlns="http://www.w3.org/2000/svg"
              aria-label={`Bed preview: ${masterSize} bed configured with ${activeLayers.length} layers`}
            >
              <defs>
                {/* Subtle soft shadow filter for layers */}
                <filter id="softShadow" x="-5%" y="-5%" width="110%" height="115%" filterUnits="userSpaceOnUse">
                  <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.12" floodColor="#3D342F" />
                </filter>
                <filter id="creaseShadow" x="-5%" y="-5%" width="110%" height="110%" filterUnits="userSpaceOnUse">
                  <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodOpacity="0.18" floodColor="#1e1814" />
                </filter>
              </defs>

              {/* 1. Headboard Outline (Architectural timber / upholstered frame) */}
              <rect
                x="50"
                y="35"
                width="400"
                height="150"
                rx="6"
                fill="#ece7df"
                stroke="#d3cbbe"
                strokeWidth="1.5"
              />
              <line x1="50" y1="70" x2="450" y2="70" stroke="#ded6c8" strokeWidth="1" strokeDasharray="4 2" />

              {/* 2. Mattress Core & Fitted Sheet Side Wall */}
              <g
                id="canvas-fitted-sheet"
                data-layer="fittedSheet"
                className="cursor-pointer transition-opacity duration-300 hover:opacity-95"
                onClick={() => onSelectLayerToEdit?.('fittedSheet')}
              >
                {/* Mattress base / frame */}
                <rect
                  x="70"
                  y="130"
                  width="360"
                  height="220"
                  rx="10"
                  fill="#ffffff"
                  stroke="#cfc7b9"
                  strokeWidth="1.5"
                />
                {/* Visible Fitted Sheet Wall (55cm deep elastic wall) */}
                <path
                  d="M 70 160 L 70 340 Q 70 350 80 350 L 420 350 Q 430 350 430 340 L 430 160 Z"
                  fill={fittedSheet.color.hex}
                  stroke="#3D342F"
                  strokeWidth="0.8"
                  strokeOpacity="0.25"
                  style={{ transition: 'fill 300ms ease, opacity 300ms ease' }}
                />
                {/* Elastic seam stitching line */}
                <path
                  d="M 75 344 L 425 344"
                  stroke="#ffffff"
                  strokeWidth="1"
                  strokeOpacity="0.4"
                  strokeDasharray="3 3"
                />
              </g>

              {/* 3. Pillowcases Stack */}
              <g
                id="canvas-pillowcases"
                data-layer="pillowcases"
                className="cursor-pointer transition-transform duration-300 hover:scale-[1.01]"
                onClick={() => onSelectLayerToEdit?.('pillowcases')}
                filter="url(#softShadow)"
              >
                {/* Euro Pillows (Rear accent pair) */}
                <rect
                  x="100"
                  y="55"
                  width="135"
                  height="75"
                  rx="6"
                  fill={pillowcases.color.hex}
                  fillOpacity="0.9"
                  stroke="#3D342F"
                  strokeWidth="0.8"
                  strokeOpacity="0.2"
                  style={{ transition: 'fill 300ms ease' }}
                />
                <rect
                  x="265"
                  y="55"
                  width="135"
                  height="75"
                  rx="6"
                  fill={pillowcases.color.hex}
                  fillOpacity="0.9"
                  stroke="#3D342F"
                  strokeWidth="0.8"
                  strokeOpacity="0.2"
                  style={{ transition: 'fill 300ms ease' }}
                />

                {/* Main Sleeping Pillows Pair (Front layer, tailored envelope) */}
                {/* Left pillow */}
                <rect
                  x="90"
                  y="85"
                  width="145"
                  height="78"
                  rx="8"
                  fill={pillowcases.color.hex}
                  stroke="#3D342F"
                  strokeWidth="0.9"
                  strokeOpacity="0.25"
                  style={{ transition: 'fill 300ms ease' }}
                />
                {/* Pillow French flange edge / inner stitch */}
                <rect
                  x="96"
                  y="91"
                  width="133"
                  height="66"
                  rx="5"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="0.6"
                  strokeOpacity="0.3"
                />

                {/* Right pillow */}
                <rect
                  x="265"
                  y="85"
                  width="145"
                  height="78"
                  rx="8"
                  fill={pillowcases.color.hex}
                  stroke="#3D342F"
                  strokeWidth="0.9"
                  strokeOpacity="0.25"
                  style={{ transition: 'fill 300ms ease' }}
                />
                <rect
                  x="271"
                  y="91"
                  width="133"
                  height="66"
                  rx="5"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="0.6"
                  strokeOpacity="0.3"
                />
              </g>

              {/* 4. Quilt Cover (Main Duvet Drape) */}
              <g
                id="canvas-quilt-cover"
                data-layer="quiltCover"
                className="cursor-pointer transition-opacity duration-300 hover:opacity-95"
                onClick={() => onSelectLayerToEdit?.('quiltCover')}
                filter="url(#softShadow)"
              >
                {/* Main Duvet draped body */}
                <path
                  d="M 75 160 Q 250 150 425 160 L 435 345 Q 250 355 65 345 Z"
                  fill={quiltCover.color.hex}
                  stroke="#3D342F"
                  strokeWidth="0.8"
                  strokeOpacity="0.25"
                  style={{ transition: 'fill 300ms ease' }}
                />
                {/* Gentle drape creases */}
                <path
                  d="M 120 180 Q 140 250 145 340"
                  stroke="#000000"
                  strokeWidth="0.8"
                  strokeOpacity="0.08"
                  fill="none"
                />
                <path
                  d="M 380 180 Q 360 250 355 340"
                  stroke="#000000"
                  strokeWidth="0.8"
                  strokeOpacity="0.08"
                  fill="none"
                />
                <path
                  d="M 250 170 Q 250 250 250 345"
                  stroke="#000000"
                  strokeWidth="0.6"
                  strokeOpacity="0.06"
                  fill="none"
                />
              </g>

              {/* 5. Flat Sheet Turn-Down Cuff (Optional) */}
              {flatSheet.enabled && (
                <g
                  id="canvas-flat-sheet"
                  data-layer="flatSheet"
                  className="cursor-pointer transition-all duration-300 hover:opacity-95"
                  onClick={() => onSelectLayerToEdit?.('flatSheet')}
                  filter="url(#creaseShadow)"
                >
                  {/* Folded cuff over top of duvet */}
                  <path
                    d="M 78 152 Q 250 142 422 152 L 425 192 Q 250 182 75 192 Z"
                    fill={flatSheet.color.hex}
                    stroke="#3D342F"
                    strokeWidth="0.8"
                    strokeOpacity="0.25"
                    style={{ transition: 'fill 300ms ease, opacity 300ms ease' }}
                  />
                  {/* Flat sheet tailored hemstitch detail */}
                  <path
                    d="M 83 186 Q 250 176 417 186"
                    stroke="#ffffff"
                    strokeWidth="0.8"
                    strokeOpacity="0.35"
                    strokeDasharray="2 2"
                    fill="none"
                  />
                </g>
              )}

              {/* 6. Bed Blanket / Throw Accent Runner (Optional) */}
              {blanket.enabled && (
                <g
                  id="canvas-blanket"
                  data-layer="blanket"
                  className="cursor-pointer transition-all duration-300 hover:opacity-95"
                  onClick={() => onSelectLayerToEdit?.('blanket')}
                  filter="url(#creaseShadow)"
                >
                  {/* Folded blanket across bottom third of the bed */}
                  <path
                    d="M 68 280 Q 250 274 432 280 L 436 348 Q 250 356 64 348 Z"
                    fill={blanket.color.hex}
                    stroke="#3D342F"
                    strokeWidth="0.8"
                    strokeOpacity="0.25"
                    style={{ transition: 'fill 300ms ease, opacity 300ms ease' }}
                  />
                  {/* Textured blanket ribbing or fringe */}
                  <path
                    d="M 72 342 L 428 342"
                    stroke="#ffffff"
                    strokeWidth="1.2"
                    strokeOpacity="0.35"
                    strokeDasharray="3 3"
                    fill="none"
                  />
                </g>
              )}
            </svg>

            {/* Quick layer touch points labels (desktop hover indicators) */}
            <div className="absolute top-2 left-2 flex items-center space-x-1 bg-porcelain/90 backdrop-blur-xs px-2.5 py-1 rounded-sm border border-sand-border text-[10px] font-grotesque uppercase tracking-wider text-umber/80 font-medium">
              <span>{masterSize} Foundation</span>
              <span>·</span>
              <span>{activeLayers.length} Layers</span>
            </div>
          </div>

          {/* Accuracy Disclosure Requirement */}
          <div data-testid="accuracy-disclosure" className="mt-4 max-w-[480px] text-center flex items-center justify-center space-x-1.5 text-[11px] font-sans text-soft-graphite/70">
            <Info className="w-3.5 h-3.5 text-umber/40 flex-shrink-0" />
            <span>
              Architectural colorway preview. Vector illustration reflects authentic atelier hex codes; fabric drape and texture may vary in photography.
            </span>
          </div>
        </div>
      )}

      {/* 2. Verified Photography Deck */}
      {(previewMode === 'both' || previewMode === 'photography') && (
        <div className="p-4 sm:p-6 bg-porcelain/50 border-t border-sand-border">
          <div className="flex items-center justify-between mb-3.5">
            <h4 className="font-grotesque text-xs uppercase tracking-[0.2em] font-bold text-umber">
              Verified Photography Deck
            </h4>
            <span className="text-[11px] font-sans text-soft-graphite/70">
              {activeLayers.length} Active Layer{activeLayers.length !== 1 ? 's' : ''}
            </span>
          </div>

          <div data-testid="photo-deck-grid" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {activeLayers.map((layer) => {
              const imageUrl = resolveLayerImage(layer);
              const errorKey = `${layer.layerKey}-${layer.product.id}-${layer.color.name}`;
              const isLayerSelected = activeLayerKey === layer.layerKey;
              const unitPrice = (layer.product.variantPrices && layer.product.variantPrices[layer.size]) ?? layer.product.price;

              return (
                <button
                  key={layer.layerKey}
                  type="button"
                  data-testid="photo-deck-card"
                  onClick={() => onSelectLayerToEdit?.(layer.layerKey)}
                  className={`group relative text-left bg-chalk border rounded-sm p-2.5 transition-all flex flex-col justify-between ${
                    isLayerSelected
                      ? 'border-umber ring-1 ring-umber/30 shadow-subtle'
                      : 'border-sand-border hover:border-umber/40'
                  }`}
                >
                  <div>
                    {/* Layer Header Pill */}
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[9px] font-grotesque uppercase tracking-widest font-bold text-terracotta">
                        {layer.layerLabel}
                      </span>
                      {isLayerSelected && (
                        <Check className="w-3 h-3 text-olive-ink" />
                      )}
                    </div>

                    {/* Image Container */}
                    <div className="relative aspect-square w-full rounded-xs overflow-hidden bg-porcelain border border-sand-border/70 mb-2">
                      {imageUrl ? (
                        <img
                          src={imageUrl}
                          alt={`${layer.product.name} in ${layer.color.name}`}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          onError={() => handleImageError(errorKey)}
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center p-2 text-center bg-sand-subtle/40">
                          <ImageOff className="w-5 h-5 text-umber/40 mb-1" />
                          <span className="text-[9px] font-grotesque uppercase tracking-wider text-umber/70 font-medium">
                            Photography
                          </span>
                          <span className="text-[8px] font-sans text-soft-graphite/60">
                            Unavailable
                          </span>
                        </div>
                      )}

                      {/* Swatch Dot in image corner */}
                      <span
                        className="absolute bottom-1.5 right-1.5 w-3.5 h-3.5 rounded-full border border-white/80 shadow-xs"
                        style={{ backgroundColor: layer.color.hex }}
                        title={layer.color.name}
                      />
                    </div>

                    {/* Product & Colour info */}
                    <p className="font-serif text-xs text-umber font-medium line-clamp-1 leading-snug">
                      {layer.product.name}
                    </p>
                    <p className="text-[10px] font-sans text-soft-graphite/80 mt-0.5 flex items-center space-x-1">
                      <span>{layer.color.name}</span>
                      <span>·</span>
                      <span className="font-medium text-umber/90">{layer.size}</span>
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mt-2 pt-1.5 border-t border-sand-border/50 flex items-center justify-between">
                    <span className="text-[10px] font-mono font-medium text-umber">
                      {formatPKR(unitPrice)}
                    </span>
                    <span className="text-[9px] font-grotesque uppercase tracking-wider text-umber/50 group-hover:text-umber">
                      Configure
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
