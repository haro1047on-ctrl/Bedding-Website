import React, { useState, useMemo } from 'react';
import {
  Product,
  BedSize,
  ColorVariant,
  BedStudioLayerKey,
  BedLayerSelection,
  BedStudioPreset,
  BedStudioState,
} from '../../types';
import { isSizeAvailable } from '../../utils/filterUtils';
import { BedCanvasPreview } from './BedCanvasPreview';
import { BedLayerAccordion } from './BedLayerAccordion';
import { BedPresetStrip } from './BedPresetStrip';
import { BedStudioSummaryBar } from './BedStudioSummaryBar';
import { Sparkles, ArrowLeft, Sliders, Layers, RotateCcw } from 'lucide-react';

interface BedStudioViewProps {
  products: Product[];
  onNavigateHome: () => void;
  onNavigateCatalog: () => void;
}

const PRESETS: BedStudioPreset[] = [
  {
    id: 'warm-terracotta-russet',
    name: 'Warm Terracotta & Russet',
    tagline: 'Rich, tactile warmth combining ribbed corduroy and softened French flax.',
    fittedSheetColor: 'Warm-white',
    flatSheetColor: 'Warm-white',
    quiltCoverColor: 'Russet',
    pillowcasesColor: 'Russet',
    blanketColor: 'Mahogany',
  },
  {
    id: 'botanical-olive-cloud',
    name: 'Botanical Olive & Cloud Linen',
    tagline: 'Earthy botanical serenity with airy French flax linen and soothing sage tones.',
    fittedSheetColor: 'Cloud',
    flatSheetColor: 'Cloud',
    quiltCoverColor: 'Olive',
    pillowcasesColor: 'Cloud',
    blanketColor: 'Sage',
  },
  {
    id: 'minimalist-fog-white',
    name: 'Minimalist Fog & Warm White',
    tagline: 'Clean architectural clarity in organic percale and crisp neutral tones.',
    fittedSheetColor: 'White',
    flatSheetColor: 'White',
    quiltCoverColor: 'Cloud',
    pillowcasesColor: 'Warm-white',
    blanketColor: 'Rory Oatmeal Marle',
  },
];

export const BedStudioView: React.FC<BedStudioViewProps> = ({
  products,
  onNavigateHome,
  onNavigateCatalog,
}) => {
  // Category-specific product pools
  const fittedSheetProducts = useMemo(() => products.filter(p => p.category === 'Fitted Sheets'), [products]);
  const flatSheetProducts = useMemo(() => products.filter(p => p.category === 'Flat Sheets'), [products]);
  const quiltCoverProducts = useMemo(() => products.filter(p => p.category === 'Quilt Covers'), [products]);
  const pillowcaseProducts = useMemo(() => products.filter(p => p.category === 'Pillowcases'), [products]);
  const blanketProducts = useMemo(() => products.filter(p => p.category === 'Blankets & Bed Covers'), [products]);

  // Initial State Factory
  const initializeStudioState = (): BedStudioState => {
    // Layer 1: Fitted Sheet
    const fittedProd = fittedSheetProducts.find(p => p.id === 'linen-fitted-sheet-warm-white') || fittedSheetProducts[0];
    const fittedCol = fittedProd.colors.find(c => c.name.toLowerCase().includes('warm-white')) || fittedProd.colors[0];

    // Layer 2: Flat Sheet
    const flatProd = flatSheetProducts.find(p => p.id === 'linen-flat-sheet-warm-white') || flatSheetProducts[0];
    const flatCol = flatProd.colors.find(c => c.name.toLowerCase().includes('warm-white')) || flatProd.colors[0];

    // Layer 3: Quilt Cover
    const quiltProd = quiltCoverProducts.find(p => p.id === 'corduroy-quilt-cover-russet') || quiltCoverProducts[0];
    const quiltCol = quiltProd.colors.find(c => c.name.toLowerCase().includes('russet')) || quiltProd.colors[0];

    // Layer 4: Pillowcases
    const pillowProd = pillowcaseProducts.find(p => p.id === 'corduroy-pillowcases-russet') || pillowcaseProducts[0];
    const pillowCol = pillowProd.colors.find(c => c.name.toLowerCase().includes('russet')) || pillowProd.colors[0];

    // Layer 5: Blanket
    const blanketProd = blanketProducts.find(p => p.id === 'rory-washed-cotton-bed-cover-mahogany') || blanketProducts[0];
    const blanketCol = blanketProd.colors.find(c => c.name.toLowerCase().includes('mahogany')) || blanketProd.colors[0];

    return {
      masterSize: 'Queen',
      activePresetId: 'warm-terracotta-russet',
      layers: {
        fittedSheet: {
          layerKey: 'fittedSheet',
          layerLabel: 'Fitted Sheet',
          category: 'Fitted Sheets',
          isRequired: true,
          enabled: true,
          product: fittedProd,
          color: fittedCol,
          size: 'Queen',
          quantity: 1,
        },
        flatSheet: {
          layerKey: 'flatSheet',
          layerLabel: 'Flat Sheet',
          category: 'Flat Sheets',
          isRequired: false,
          enabled: false,
          product: flatProd,
          color: flatCol,
          size: 'Queen',
          quantity: 1,
        },
        quiltCover: {
          layerKey: 'quiltCover',
          layerLabel: 'Quilt Cover',
          category: 'Quilt Covers',
          isRequired: true,
          enabled: true,
          product: quiltProd,
          color: quiltCol,
          size: 'Queen',
          quantity: 1,
        },
        pillowcases: {
          layerKey: 'pillowcases',
          layerLabel: 'Pillowcase Pair',
          category: 'Pillowcases',
          isRequired: true,
          enabled: true,
          product: pillowProd,
          color: pillowCol,
          size: 'Standard Size',
          quantity: 1,
        },
        blanket: {
          layerKey: 'blanket',
          layerLabel: 'Blanket / Bed Cover',
          category: 'Blankets & Bed Covers',
          isRequired: false,
          enabled: false,
          product: blanketProd,
          color: blanketCol,
          size: 'Queen',
          quantity: 1,
        },
      },
    };
  };

  const [studioState, setStudioState] = useState<BedStudioState>(initializeStudioState);
  const [expandedLayerKey, setExpandedLayerKey] = useState<BedStudioLayerKey | null>('quiltCover');

  // Master size update handler with sensible cascading
  const handleUpdateMasterSize = (newSize: BedSize) => {
    setStudioState(prev => {
      const updatedLayers = { ...prev.layers };

      // Helper to update layer size if available
      const updateSizeIfSupported = (layerKey: BedStudioLayerKey, preferredSize: BedSize) => {
        const layer = updatedLayers[layerKey];
        if (layer.product.sizes.includes(preferredSize) && isSizeAvailable(layer.product, preferredSize, [layer.color.name])) {
          updatedLayers[layerKey] = { ...layer, size: preferredSize };
        } else {
          // If preferred not available, find closest available or preserve
          const available = layer.product.sizes.find(s => isSizeAvailable(layer.product, s, [layer.color.name]));
          if (available) {
            updatedLayers[layerKey] = { ...layer, size: available };
          }
        }
      };

      // 1. Fitted Sheet
      updateSizeIfSupported('fittedSheet', newSize);

      // 2. Flat Sheet
      updateSizeIfSupported('flatSheet', newSize);

      // 3. Quilt Cover
      updateSizeIfSupported('quiltCover', newSize);

      // 4. Pillowcases (Standard vs King)
      const pillowPreferred = (newSize === 'King' || newSize === 'Super King') ? 'King Size' : 'Standard Size';
      updateSizeIfSupported('pillowcases', pillowPreferred);

      // 5. Blanket
      if (updatedLayers.blanket.product.sizes.includes(newSize)) {
        updateSizeIfSupported('blanket', newSize);
      }

      return {
        ...prev,
        masterSize: newSize,
        layers: updatedLayers,
      };
    });
  };

  // Preset application handler
  const handleApplyPreset = (preset: BedStudioPreset) => {
    setStudioState(prev => {
      const updatedLayers = { ...prev.layers };

      const findMatchingProductAndColor = (
        productsPool: Product[],
        targetColorName: string,
        currentLayer: BedLayerSelection
      ) => {
        const normTarget = targetColorName.toLowerCase();
        
        // Check current product first
        const currentMatch = currentLayer.product.colors.find(c => c.name.toLowerCase().includes(normTarget));
        if (currentMatch) {
          return { product: currentLayer.product, color: currentMatch };
        }

        // Search category pool
        for (const p of productsPool) {
          const match = p.colors.find(c => c.name.toLowerCase().includes(normTarget));
          if (match) {
            return { product: p, color: match };
          }
        }

        return { product: currentLayer.product, color: currentLayer.color };
      };

      // 1. Fitted Sheet
      const fit = findMatchingProductAndColor(fittedSheetProducts, preset.fittedSheetColor, updatedLayers.fittedSheet);
      const fitSize = fit.product.sizes.includes(prev.masterSize) && isSizeAvailable(fit.product, prev.masterSize, [fit.color.name])
        ? prev.masterSize
        : (fit.product.sizes.find(s => isSizeAvailable(fit.product, s, [fit.color.name])) || fit.product.sizes[0]);
      updatedLayers.fittedSheet = { ...updatedLayers.fittedSheet, product: fit.product, color: fit.color, size: fitSize };

      // 2. Flat Sheet
      const flat = findMatchingProductAndColor(flatSheetProducts, preset.flatSheetColor, updatedLayers.flatSheet);
      const flatSize = flat.product.sizes.includes(prev.masterSize) && isSizeAvailable(flat.product, prev.masterSize, [flat.color.name])
        ? prev.masterSize
        : (flat.product.sizes.find(s => isSizeAvailable(flat.product, s, [flat.color.name])) || flat.product.sizes[0]);
      updatedLayers.flatSheet = { ...updatedLayers.flatSheet, product: flat.product, color: flat.color, size: flatSize, enabled: updatedLayers.flatSheet.enabled };

      // 3. Quilt Cover
      const quilt = findMatchingProductAndColor(quiltCoverProducts, preset.quiltCoverColor, updatedLayers.quiltCover);
      const quiltSize = quilt.product.sizes.includes(prev.masterSize) && isSizeAvailable(quilt.product, prev.masterSize, [quilt.color.name])
        ? prev.masterSize
        : (quilt.product.sizes.find(s => isSizeAvailable(quilt.product, s, [quilt.color.name])) || quilt.product.sizes[0]);
      updatedLayers.quiltCover = { ...updatedLayers.quiltCover, product: quilt.product, color: quilt.color, size: quiltSize };

      // 4. Pillowcases
      const pillow = findMatchingProductAndColor(pillowcaseProducts, preset.pillowcasesColor, updatedLayers.pillowcases);
      const pillowTarget = (prev.masterSize === 'King' || prev.masterSize === 'Super King') ? 'King Size' : 'Standard Size';
      const pillowSize = pillow.product.sizes.includes(pillowTarget) && isSizeAvailable(pillow.product, pillowTarget, [pillow.color.name])
        ? pillowTarget
        : (pillow.product.sizes.find(s => isSizeAvailable(pillow.product, s, [pillow.color.name])) || pillow.product.sizes[0]);
      updatedLayers.pillowcases = { ...updatedLayers.pillowcases, product: pillow.product, color: pillow.color, size: pillowSize };

      // 5. Blanket
      const blk = findMatchingProductAndColor(blanketProducts, preset.blanketColor, updatedLayers.blanket);
      const blkSize = blk.product.sizes.includes(prev.masterSize) && isSizeAvailable(blk.product, prev.masterSize, [blk.color.name])
        ? prev.masterSize
        : (blk.product.sizes.find(s => isSizeAvailable(blk.product, s, [blk.color.name])) || blk.product.sizes[0]);
      updatedLayers.blanket = { ...updatedLayers.blanket, product: blk.product, color: blk.color, size: blkSize, enabled: updatedLayers.blanket.enabled };

      return {
        ...prev,
        activePresetId: preset.id,
        layers: updatedLayers,
      };
    });
  };

  // Generic layer updater
  const updateLayer = (layerKey: BedStudioLayerKey, updates: Partial<BedLayerSelection>) => {
    setStudioState(prev => ({
      ...prev,
      activePresetId: undefined, // Custom modification clears active preset highlight
      layers: {
        ...prev.layers,
        [layerKey]: {
          ...prev.layers[layerKey],
          ...updates,
        },
      },
    }));
  };

  return (
    <div className="min-h-screen bg-porcelain pt-24 sm:pt-28 pb-12 flex flex-col">
      
      {/* Studio Header & Breadcrumbs */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 w-full mb-6">
        
        {/* Navigation Breadcrumbs */}
        <div className="flex items-center space-x-2 text-xs font-grotesque uppercase tracking-wider text-soft-graphite/70 mb-3">
          <button
            type="button"
            onClick={onNavigateHome}
            className="hover:text-umber transition-colors flex items-center space-x-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <span>/</span>
          <button
            type="button"
            onClick={onNavigateCatalog}
            className="hover:text-umber transition-colors"
          >
            Bedding
          </button>
          <span>/</span>
          <span className="text-umber font-semibold">Bed Studio</span>
        </div>

        {/* Title & Atelier Tagline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-sand-border pb-5 gap-4">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-[10px] font-grotesque uppercase tracking-[0.22em] text-terracotta font-bold mb-1">
              <Sparkles className="w-3 h-3" />
              <span>MORFE Atelier · Interactive Bed Builder</span>
            </div>
            <h1 className="font-serif text-2xl sm:text-4xl text-umber font-normal tracking-tight">
              Build Your Bed Suite
            </h1>
            <p className="text-xs sm:text-sm font-sans text-soft-graphite/80 mt-1.5 max-w-2xl leading-relaxed">
              Tailor each layer to your bedroom. Mix textured corduroy, breathable French flax linen, and crisp organic percale on your master foundation.
            </p>
          </div>

          {/* Reset button */}
          <button
            type="button"
            onClick={() => setStudioState(initializeStudioState())}
            className="inline-flex items-center space-x-1.5 text-xs font-grotesque uppercase tracking-wider text-umber/70 hover:text-umber border border-sand-border hover:border-umber/40 bg-chalk px-3 py-1.5 rounded-sm transition-colors self-start md:self-end"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Suite</span>
          </button>
        </div>

        {/* Presets Strip */}
        <div className="mt-6">
          <BedPresetStrip
            presets={PRESETS}
            activePresetId={studioState.activePresetId}
            onSelectPreset={handleApplyPreset}
          />
        </div>

      </div>

      {/* Main Studio Interactive Workspace (2 Columns on Desktop) */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 w-full flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (Sticky Preview on Desktop): Architectural Canvas + Photo Deck */}
          <div className="lg:col-span-7 lg:sticky lg:top-28 space-y-4">
            <BedCanvasPreview
              state={studioState}
              onSelectLayerToEdit={(key) => setExpandedLayerKey(key as BedStudioLayerKey)}
              activeLayerKey={expandedLayerKey || undefined}
            />
          </div>

          {/* Right Column: Layer Configuration Accordions */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="flex items-center justify-between pb-2 border-b border-sand-border">
              <div className="flex items-center space-x-2">
                <Sliders className="w-4 h-4 text-umber" />
                <h2 className="font-grotesque text-xs uppercase tracking-[0.2em] font-bold text-umber">
                  Configure Bedding Layers
                </h2>
              </div>
              <span className="text-[11px] font-sans text-soft-graphite/70">
                Independent sizing active
              </span>
            </div>

            {/* 1. Fitted Sheet */}
            <BedLayerAccordion
              layerIndex={1}
              layer={studioState.layers.fittedSheet}
              isExpanded={expandedLayerKey === 'fittedSheet'}
              onToggleExpand={() => setExpandedLayerKey(prev => prev === 'fittedSheet' ? null : 'fittedSheet')}
              availableProducts={fittedSheetProducts}
              onUpdateProduct={(p) => updateLayer('fittedSheet', { product: p })}
              onUpdateColor={(c) => updateLayer('fittedSheet', { color: c })}
              onUpdateSize={(s) => updateLayer('fittedSheet', { size: s })}
              masterSize={studioState.masterSize}
            />

            {/* 2. Flat Sheet (Optional) */}
            <BedLayerAccordion
              layerIndex={2}
              layer={studioState.layers.flatSheet}
              isExpanded={expandedLayerKey === 'flatSheet'}
              onToggleExpand={() => setExpandedLayerKey(prev => prev === 'flatSheet' ? null : 'flatSheet')}
              onToggleEnable={(enabled) => updateLayer('flatSheet', { enabled })}
              availableProducts={flatSheetProducts}
              onUpdateProduct={(p) => updateLayer('flatSheet', { product: p })}
              onUpdateColor={(c) => updateLayer('flatSheet', { color: c })}
              onUpdateSize={(s) => updateLayer('flatSheet', { size: s })}
              masterSize={studioState.masterSize}
            />

            {/* 3. Quilt Cover */}
            <BedLayerAccordion
              layerIndex={3}
              layer={studioState.layers.quiltCover}
              isExpanded={expandedLayerKey === 'quiltCover'}
              onToggleExpand={() => setExpandedLayerKey(prev => prev === 'quiltCover' ? null : 'quiltCover')}
              availableProducts={quiltCoverProducts}
              onUpdateProduct={(p) => updateLayer('quiltCover', { product: p })}
              onUpdateColor={(c) => updateLayer('quiltCover', { color: c })}
              onUpdateSize={(s) => updateLayer('quiltCover', { size: s })}
              masterSize={studioState.masterSize}
            />

            {/* 4. Pillowcases */}
            <BedLayerAccordion
              layerIndex={4}
              layer={studioState.layers.pillowcases}
              isExpanded={expandedLayerKey === 'pillowcases'}
              onToggleExpand={() => setExpandedLayerKey(prev => prev === 'pillowcases' ? null : 'pillowcases')}
              availableProducts={pillowcaseProducts}
              onUpdateProduct={(p) => updateLayer('pillowcases', { product: p })}
              onUpdateColor={(c) => updateLayer('pillowcases', { color: c })}
              onUpdateSize={(s) => updateLayer('pillowcases', { size: s })}
              masterSize={studioState.masterSize}
            />

            {/* 5. Blanket / Bed Cover (Optional) */}
            <BedLayerAccordion
              layerIndex={5}
              layer={studioState.layers.blanket}
              isExpanded={expandedLayerKey === 'blanket'}
              onToggleExpand={() => setExpandedLayerKey(prev => prev === 'blanket' ? null : 'blanket')}
              onToggleEnable={(enabled) => updateLayer('blanket', { enabled })}
              availableProducts={blanketProducts}
              onUpdateProduct={(p) => updateLayer('blanket', { product: p })}
              onUpdateColor={(c) => updateLayer('blanket', { color: c })}
              onUpdateSize={(s) => updateLayer('blanket', { size: s })}
              masterSize={studioState.masterSize}
            />

          </div>

        </div>
      </div>

      {/* Sticky Bottom Summary Bar */}
      <BedStudioSummaryBar
        state={studioState}
        onUpdateMasterSize={handleUpdateMasterSize}
      />

    </div>
  );
};
