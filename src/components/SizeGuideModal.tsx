import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [activeUnit, setActiveUnit] = useState<'inches' | 'cm'>('inches');

  const sizingData = [
    {
      size: 'Twin',
      fitted: activeUnit === 'inches' ? '39" x 75" x 17"' : '99 x 190 x 43 cm',
      flat: activeUnit === 'inches' ? '66" x 96"' : '168 x 244 cm',
      duvet: activeUnit === 'inches' ? '68" x 86"' : '173 x 218 cm',
      pillowcase: activeUnit === 'inches' ? '20" x 30" (Standard)' : '51 x 76 cm'
    },
    {
      size: 'Full',
      fitted: activeUnit === 'inches' ? '54" x 75" x 17"' : '137 x 190 x 43 cm',
      flat: activeUnit === 'inches' ? '81" x 96"' : '206 x 244 cm',
      duvet: activeUnit === 'inches' ? '86" x 86"' : '218 x 218 cm',
      pillowcase: activeUnit === 'inches' ? '20" x 30" (Standard)' : '51 x 76 cm'
    },
    {
      size: 'Queen',
      fitted: activeUnit === 'inches' ? '60" x 80" x 17"' : '152 x 203 x 43 cm',
      flat: activeUnit === 'inches' ? '92" x 104"' : '234 x 264 cm',
      duvet: activeUnit === 'inches' ? '90" x 92"' : '229 x 234 cm',
      pillowcase: activeUnit === 'inches' ? '20" x 30" (Standard)' : '51 x 76 cm'
    },
    {
      size: 'King',
      fitted: activeUnit === 'inches' ? '76" x 80" x 17"' : '193 x 203 x 43 cm',
      flat: activeUnit === 'inches' ? '108" x 104"' : '274 x 264 cm',
      duvet: activeUnit === 'inches' ? '106" x 92"' : '269 x 234 cm',
      pillowcase: activeUnit === 'inches' ? '20" x 38" (King)' : '51 x 96 cm'
    },
    {
      size: 'Cal King',
      fitted: activeUnit === 'inches' ? '72" x 84" x 17"' : '183 x 213 x 43 cm',
      flat: activeUnit === 'inches' ? '108" x 108"' : '274 x 274 cm',
      duvet: activeUnit === 'inches' ? '104" x 96"' : '264 x 244 cm',
      pillowcase: activeUnit === 'inches' ? '20" x 38" (King)' : '51 x 96 cm'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-umber/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative min-h-screen flex items-center justify-center p-4 sm:p-6">
        <div className="relative w-full max-w-4xl bg-chalk border border-sand-border shadow-elevated p-6 sm:p-10 z-10 max-h-[90vh] overflow-y-auto">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-sand-border">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-olive-ink font-sans font-medium">
                Atelier Dimensions Matrix
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-umber font-normal mt-0.5">
                Bedding & Mattress Sizing Guide
              </h3>
            </div>

            <div className="flex items-center space-x-3">
              {/* Unit Toggle */}
              <div className="flex border border-sand-border bg-porcelain p-0.5 text-xs font-sans">
                <button
                  type="button"
                  onClick={() => setActiveUnit('inches')}
                  className={`px-2.5 py-1 transition-colors ${activeUnit === 'inches' ? 'bg-umber text-porcelain font-medium' : 'text-umber/70'}`}
                >
                  Inches (")
                </button>
                <button
                  type="button"
                  onClick={() => setActiveUnit('cm')}
                  className={`px-2.5 py-1 transition-colors ${activeUnit === 'cm' ? 'bg-umber text-porcelain font-medium' : 'text-umber/70'}`}
                >
                  Metric (cm)
                </button>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="p-1.5 text-umber/70 hover:text-umber transition-colors"
                aria-label="Close size guide"
              >
                <X className="w-5 h-5 stroke-[1.5]" />
              </button>
            </div>
          </div>

          {/* Matrix Table */}
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left text-xs font-sans border-collapse">
              <thead>
                <tr className="border-b border-umber/20 text-umber uppercase tracking-wider text-[11px] bg-porcelain">
                  <th className="py-3 px-4 font-semibold">Bed Size</th>
                  <th className="py-3 px-4 font-semibold">Fitted Sheet (17" Deep)</th>
                  <th className="py-3 px-4 font-semibold">Flat Sheet</th>
                  <th className="py-3 px-4 font-semibold">Duvet / Quilt Cover</th>
                  <th className="py-3 px-4 font-semibold">Pillowcase Pair</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sand-border text-soft-graphite">
                {sizingData.map((row) => (
                  <tr key={row.size} className="hover:bg-porcelain/50 transition-colors">
                    <td className="py-3.5 px-4 font-medium text-umber font-serif text-base">{row.size}</td>
                    <td className="py-3.5 px-4">{row.fitted}</td>
                    <td className="py-3.5 px-4">{row.flat}</td>
                    <td className="py-3.5 px-4 font-medium text-umber">{row.duvet}</td>
                    <td className="py-3.5 px-4">{row.pillowcase}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Deep Pocket Mattress Advice */}
          <div className="mt-8 p-5 bg-porcelain border border-sand-border grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-sans text-soft-graphite/80 leading-relaxed">
            <div>
              <h4 className="font-serif text-base text-umber font-normal mb-1">
                Will our fitted sheet fit your mattress?
              </h4>
              <p>
                Yes. All SEREIN fitted sheets are tailored with an generous 17-inch deep pocket and continuous, encased 360-degree elastic. They comfortably accommodate standard 10-inch mattresses as well as luxury pillow-tops up to 16.5 inches deep without slipping off the corners.
              </p>
            </div>

            <div>
              <h4 className="font-serif text-base text-umber font-normal mb-1">
                The "Upsizing" Styling Ritual
              </h4>
              <p>
                For that luxurious, floor-grazing drape favored in European interior editorials, many customers choose a King size duvet cover for a Queen bed. This provides an extra 8 inches of generous fabric pooling on both sides.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
