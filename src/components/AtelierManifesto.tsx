import React from 'react';
import { ArrowRight } from 'lucide-react';

interface AtelierManifestoProps {
  onOpenMaterialGuide: () => void;
}

export const AtelierManifesto: React.FC<AtelierManifestoProps> = ({ onOpenMaterialGuide }) => {
  const details = [
    {
      title: 'A Fitted Sheet That Fits',
      subtitle: '3cm Thick Elastic & 55cm Deep Wall',
      description: 'An extra deep 55cm wall and a thick 3cm elastic band all the way around ensures your fitted sheet hugs even the deepest mattresses with a topper. No popping off.',
      image: '/assets/sheetsociety-features/fitted-sheet-depth.jpg',
      badge: '55cm Extra Deep',
    },
    {
      title: 'Invisible Zipper',
      subtitle: 'No More Buttons, No More Gaps',
      description: 'We swapped fiddly buttons for an invisible, durable zipper closure that runs along the bottom edge. Makes changing your quilt cover 3x faster and keeps inserts secure.',
      image: '/assets/sheetsociety-features/invisible-zipper.jpg',
      badge: 'Hidden Closure',
    },
    {
      title: 'Folded Top Edge',
      subtitle: '20cm Double-Layer Hem',
      description: 'Our flat sheets feature an elegant 20cm double-layer folded hem. When folded back over your quilt cover, there are zero raw seams or exposed reverse edges.',
      image: '/assets/sheetsociety-features/folded-top-edge.jpg',
      badge: '20cm Hem',
    },
    {
      title: 'Deep Pillow Fold',
      subtitle: '22cm Envelope Closure',
      description: 'No more pillow peek-a-boo. Our generous 22cm envelope flap ensures your pillow inserts stay firmly tucked away inside, looking plump and tailored all morning.',
      image: '/assets/sheetsociety-features/deep-pillow-fold.jpg',
      badge: '22cm Envelope',
    },
  ];

  return (
    <section className="w-full bg-[#fbf9f6] py-16 sm:py-24 border-b border-[#e5e5e5] font-grotesque">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#000000]/60 block mb-2">
            It's All In The Details
          </span>
          <h2 className="font-awesome text-3xl sm:text-4xl lg:text-5xl text-[#000000] font-normal tracking-tight">
            We've made your bed, better.
          </h2>
          <p className="text-xs sm:text-sm text-[#000000]/70 font-grotesque mt-3 leading-relaxed">
            Every feature on our bedding has been engineered to solve the most frustrating parts of making your bed.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {details.map((detail, idx) => (
            <div 
              key={idx}
              className="bg-white border border-[#e5e5e5] overflow-hidden rounded-lg flex flex-col group hover:shadow-md transition-shadow duration-300"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#e5e5e5]/40">
                <img
                  src={detail.image}
                  alt={detail.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 text-[10px] font-grotesque font-medium tracking-wide uppercase text-[#000000] rounded">
                  {detail.badge}
                </span>
              </div>

              {/* Text Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-awesome text-xl text-[#000000] font-normal leading-snug">
                    {detail.title}
                  </h3>
                  <p className="text-[11px] font-medium text-[#000000]/50 uppercase tracking-wider mt-1 mb-2">
                    {detail.subtitle}
                  </p>
                  <p className="text-xs text-[#000000]/70 leading-relaxed">
                    {detail.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-14 p-8 bg-[#E6EFB4] rounded-lg flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#c9d689]">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-awesome text-2xl text-[#4B262B] font-normal">
              100% Natural Fibres. OEKO-TEX Standard 100.
            </h3>
            <p className="text-xs text-[#4B262B]/85 font-grotesque">
              All our bedding is woven from pure French flax linen, organic cotton, and soft corduroy. Pre-washed for immediate comfort.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenMaterialGuide}
            className="px-6 py-3 bg-[#4B262B] text-white text-xs font-grotesque uppercase tracking-widest font-semibold hover:bg-[#34181c] transition-colors rounded-full flex items-center space-x-2 whitespace-nowrap shadow-sm"
          >
            <span>Explore Fabrics</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
