import React from 'react';
import { BedStudioState, BedSize, BedStudioLayerKey } from '../../types';
import { ShoppingBag, ChevronDown, Sparkles } from 'lucide-react';

interface BedStudioSummaryBarProps {
  state: BedStudioState;
  onUpdateMasterSize: (size: BedSize) => void;
}

const SUPPORTED_MASTER_SIZES: BedSize[] = ['Single', 'Double', 'Queen', 'King', 'Super King'];

export const BedStudioSummaryBar: React.FC<BedStudioSummaryBarProps> = ({
  state,
  onUpdateMasterSize,
}) => {
  const { masterSize, layers } = state;

  const layerKeys: BedStudioLayerKey[] = ['fittedSheet', 'flatSheet', 'quiltCover', 'pillowcases', 'blanket'];
  const activeLayers = layerKeys.map(k => layers[k]).filter(l => l.enabled);
  const totalLayersCount = layerKeys.length;

  return (
    <div className="sticky bottom-0 left-0 w-full z-30 bg-porcelain/98 backdrop-blur-md border-t border-sand-border shadow-elevated py-3.5 px-4 sm:px-8">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-3.5">
        
        {/* Left: Master Bed Size Selector & Active Layer Palette */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-6">
          
          {/* Master Size Selector */}
          <div className="flex items-center space-x-2">
            <span className="text-[11px] font-grotesque uppercase tracking-wider text-umber/70 font-semibold">
              Master Size:
            </span>
            <div className="relative">
              <select
                value={masterSize}
                onChange={(e) => onUpdateMasterSize(e.target.value as BedSize)}
                className="appearance-none bg-chalk border border-sand-border py-1.5 pl-3 pr-7 text-xs font-grotesque font-bold uppercase tracking-wider text-umber rounded-sm cursor-pointer hover:border-umber/50 focus:outline-none focus:ring-1 focus:ring-umber"
                aria-label="Select Master Bed Size foundation"
              >
                {SUPPORTED_MASTER_SIZES.map((sz) => (
                  <option key={sz} value={sz}>
                    {sz} Bed
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-umber/60 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Active Layers Count */}
          <div data-testid="active-layers-count" className="text-xs font-sans text-soft-graphite/80 flex items-center space-x-2">
            <span className="font-mono font-medium text-umber">
              {activeLayers.length} of {totalLayersCount}
            </span>
            <span>layers configured</span>
          </div>

          {/* Active Palette Dot Stack */}
          <div className="hidden sm:flex items-center -space-x-1 pl-1">
            {activeLayers.map((l) => (
              <span
                key={l.layerKey}
                className="w-4 h-4 rounded-full border border-sand-border shadow-2xs"
                style={{ backgroundColor: l.color.hex }}
                title={`${l.layerLabel}: ${l.color.name}`}
              />
            ))}
          </div>

        </div>

        {/* Right: Configuration State Summary & Disabled Phase 6.1 Action */}
        <div className="flex items-center justify-between md:justify-end space-x-4 sm:space-x-6">
          
          <div className="text-left md:text-right">
            <div data-testid="suite-configuration-status" className="flex items-baseline space-x-1.5 md:justify-end">
              <span className="text-[10px] font-grotesque uppercase tracking-wider text-soft-graphite/70">
                Configuration:
              </span>
              <span className="font-serif text-base sm:text-lg font-medium text-umber leading-none">
                {activeLayers.length === totalLayersCount ? 'Complete Suite' : `${activeLayers.length} Layers Selected`}
              </span>
            </div>
            <p className="text-[10px] font-sans text-soft-graphite/70 mt-0.5">
              Interactive styling active · Suite bundle pricing available in Phase 6.2
            </p>
          </div>

          {/* Action Button: Disabled in Phase 6.1 */}
          <div className="relative group">
            <button
              type="button"
              data-testid="add-suite-to-bag-button"
              disabled={true}
              className="py-2.5 px-4 sm:px-6 bg-sand-subtle/80 text-umber/50 border border-sand-border rounded-sm text-xs font-grotesque uppercase tracking-wider font-semibold cursor-not-allowed flex items-center space-x-2"
              aria-disabled="true"
              aria-label="Add Suite to Bag (Coming in Phase 6.2)"
            >
              <ShoppingBag className="w-4 h-4 stroke-[1.5] text-umber/40" />
              <span>Add Suite to Bag (Coming in Phase 6.2)</span>
            </button>

            {/* Hover Tooltip explaining Phase 6.1 boundary */}
            <div className="absolute bottom-full right-0 mb-2 w-64 bg-umber text-chalk text-[11px] font-sans p-2.5 rounded-sm shadow-elevated opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50 text-left">
              <div className="flex items-center space-x-1 text-terracotta font-semibold text-[10px] uppercase tracking-wider mb-1">
                <Sparkles className="w-3 h-3" />
                <span>Phase 6.1 Foundation</span>
              </div>
              Interactive configuration and styling are active. Cart bundle addition and suite discounts will be enabled in Phase 6.2.
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
