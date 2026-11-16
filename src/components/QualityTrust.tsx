import React from 'react';
import { ShieldCheck, Truck, RotateCcw, HeartHandshake } from 'lucide-react';

export const QualityTrust: React.FC = () => {
  const trustPoints = [
    {
      icon: RotateCcw,
      title: '100-Night Sleep Trial',
      description: 'Sleep on your new bedding, wash it, and experience the linen soften. If you are not thoroughly in love, return it for a complete refund.'
    },
    {
      icon: ShieldCheck,
      title: 'OEKO-TEX® Standard 100',
      description: 'Independently tested free of over 1,000 harmful chemicals, formaldehydes, heavy metals, and skin irritants.'
    },
    {
      icon: Truck,
      title: 'Plastic-Free Carbon Shipping',
      description: 'Dispatched in self-fabric reusable linen bags and FSC-certified unbleached kraft boxes. Complimentary delivery on orders over $150.'
    },
    {
      icon: HeartHandshake,
      title: 'Guimarães Atelier Craft',
      description: 'Woven on heritage looms in Portugal with reinforced French seams, deep 17" pockets, and durable corozo-nut closures.'
    }
  ];

  return (
    <section className="w-full bg-porcelain py-14 border-b border-sand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPoints.map((point, idx) => {
            const Icon = point.icon;
            return (
              <div key={idx} className="flex items-start space-x-3.5">
                <div className="p-2.5 bg-chalk border border-sand-border text-olive-ink flex-shrink-0">
                  <Icon className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-lg text-umber font-normal">
                    {point.title}
                  </h4>
                  <p className="text-xs text-soft-graphite/70 font-sans leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
