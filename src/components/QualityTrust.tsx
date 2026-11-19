import React from 'react';

export const QualityTrust: React.FC = () => {
  const trustPoints = [
    {
      iconImage: '/assets/sheetsociety-usps/free-shipping.png',
      title: 'Free Shipping',
      description: 'Enjoy complimentary express shipping on all orders over Rs. 15,000, delivered securely to your door.'
    },
    {
      iconImage: '/assets/sheetsociety-usps/fast-dispatch.png',
      title: 'Fast Dispatch',
      description: 'Same-day or next-business-day dispatch on in-stock orders packed in eco-friendly reusable pouches.'
    },
    {
      iconImage: '/assets/sheetsociety-usps/guarantee.png',
      title: '100% Satisfaction Guarantee',
      description: 'Sleep soundly with our 30-day hassle-free returns policy and 3-year construction warranty.'
    },
    {
      iconImage: '/assets/sheetsociety-usps/bcorp.png',
      title: 'Certified B Corp',
      description: 'We meet the highest standards of verified social and environmental impact, transparency, and accountability.'
    }
  ];

  return (
    <section className="w-full bg-white py-16 border-b border-[#e5e5e5] font-grotesque">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#000000]/50 block mb-1">
            Why Sheet Society
          </span>
          <h3 className="font-awesome text-2xl sm:text-3xl text-[#000000] font-normal">
            There's more to love
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPoints.map((point, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <img
                  src={point.iconImage}
                  alt={point.title}
                  className="max-h-14 max-w-14 object-contain"
                  loading="lazy"
                />
              </div>
              <h4 className="font-awesome text-lg text-[#000000] font-normal mb-1.5">
                {point.title}
              </h4>
              <p className="text-xs text-[#000000]/70 font-grotesque leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
