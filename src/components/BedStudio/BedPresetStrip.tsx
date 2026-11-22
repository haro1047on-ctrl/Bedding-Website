import React from 'react';
import { BedStudioPreset } from '../../types';
import { Sparkles, Check } from 'lucide-react';

interface BedPresetStripProps {
  presets: BedStudioPreset[];
  activePresetId?: string;
  onSelectPreset: (preset: BedStudioPreset) => void;
}

export const BedPresetStrip: React.FC<BedPresetStripProps> = ({
  presets,
  activePresetId,
  onSelectPreset,
}) => {
  return (
    <div className="w-full bg-porcelain/60 border border-sand-border rounded-sm p-4 sm:p-5">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3.5">
        <div className="flex items-center space-x-2">
          <Sparkles className="w-4 h-4 text-terracotta" />
          <h3 className="font-grotesque text-xs uppercase tracking-[0.2em] font-bold text-umber">
            Harmonic Colour Palettes
          </h3>
        </div>
        <p className="text-[11px] font-sans text-soft-graphite/80">
          Editorial combinations curated by MORFE Atelier stylists
        </p>
      </div>

      <div data-testid="preset-strip-grid" className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {presets.map((preset) => {
          const isActive = activePresetId === preset.id;
          return (
            <button
              key={preset.id}
              type="button"
              data-testid={`preset-card-${preset.id}`}
              onClick={() => onSelectPreset(preset)}
              className={`p-3.5 rounded-sm text-left transition-all flex flex-col justify-between border ${
                isActive
                  ? 'bg-chalk border-umber ring-1 ring-umber/30 shadow-subtle'
                  : 'bg-porcelain border-sand-border hover:border-umber/40 hover:bg-chalk/70'
              }`}
              aria-pressed={isActive}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-serif text-sm text-umber font-medium">
                    {preset.name}
                  </span>
                  {isActive && (
                    <span className="inline-flex items-center space-x-1 text-[10px] font-grotesque uppercase tracking-wider text-olive-ink bg-olive-ink/10 px-1.5 py-0.5 rounded-full font-semibold">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                      <span>Active</span>
                    </span>
                  )}
                </div>
                <p className="text-[11px] font-sans text-soft-graphite/80 mt-1 line-clamp-2 leading-relaxed">
                  {preset.tagline}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-sand-border/60 flex items-center justify-between">
                <div className="flex items-center -space-x-1">
                  <span
                    className="w-4 h-4 rounded-full border border-sand-border shadow-2xs"
                    style={{ backgroundColor: getPresetHex(preset.fittedSheetColor) }}
                    title={`Fitted Sheet: ${preset.fittedSheetColor}`}
                  />
                  <span
                    className="w-4 h-4 rounded-full border border-sand-border shadow-2xs"
                    style={{ backgroundColor: getPresetHex(preset.quiltCoverColor) }}
                    title={`Quilt Cover: ${preset.quiltCoverColor}`}
                  />
                  <span
                    className="w-4 h-4 rounded-full border border-sand-border shadow-2xs"
                    style={{ backgroundColor: getPresetHex(preset.pillowcasesColor) }}
                    title={`Pillowcases: ${preset.pillowcasesColor}`}
                  />
                  <span
                    className="w-4 h-4 rounded-full border border-sand-border shadow-2xs"
                    style={{ backgroundColor: getPresetHex(preset.blanketColor) }}
                    title={`Blanket: ${preset.blanketColor}`}
                  />
                </div>
                <span className="text-[10px] font-grotesque uppercase tracking-wider text-umber/70 font-semibold group-hover:text-umber">
                  {isActive ? 'Applied' : 'Apply Palette'}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

function getPresetHex(colorName: string): string {
  const norm = colorName.toLowerCase();
  if (norm.includes('russet')) return '#7E212A';
  if (norm.includes('terracotta')) return '#c87b4b';
  if (norm.includes('olive')) return '#A39264';
  if (norm.includes('hunter')) return '#415141';
  if (norm.includes('cloud')) return '#D5D5D8';
  if (norm.includes('warm-white') || norm.includes('warm white')) return '#f2ebdf';
  if (norm.includes('white')) return '#ffffff';
  if (norm.includes('oatmeal') || norm.includes('oat')) return '#e9dfcf';
  if (norm.includes('sage')) return '#a8b09f';
  if (norm.includes('mahogany')) return '#574138';
  if (norm.includes('umber')) return '#3D342F';
  if (norm.includes('marshmallow')) return '#EEE0DC';
  return '#c8b9a6';
}
