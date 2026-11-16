import React from 'react';
import { REVIEWS } from '../data/mockData';
import { Star, CheckCircle, Quote } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="w-full bg-chalk py-16 sm:py-24 border-b border-sand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 border-b border-sand-border">
          <div>
            <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-widest text-olive-ink font-sans font-medium mb-1.5">
              <span>Customer Reflections</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-umber font-normal">
              Stories from real bedrooms.
            </h2>
          </div>

          <div className="flex items-center space-x-3 mt-4 sm:mt-0 text-xs font-sans text-umber/80">
            <div className="flex items-center space-x-1 text-olive-ink">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-olive-ink text-olive-ink" />
              ))}
            </div>
            <span className="font-medium text-umber">4.9 / 5.0 Rating</span>
            <span className="text-umber/40">· 500+ Verified Atelier Sleepers</span>
          </div>
        </div>

        {/* 3-Column Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {REVIEWS.map((rev) => (
            <div 
              key={rev.id}
              className="bg-porcelain p-6 sm:p-8 border border-sand-border flex flex-col justify-between space-y-6 shadow-subtle"
            >
              <div className="space-y-4">
                {/* Star rating & verified badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-olive-ink">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-olive-ink text-olive-ink" />
                    ))}
                  </div>
                  <div className="flex items-center space-x-1 text-[11px] text-olive-ink font-sans">
                    <CheckCircle className="w-3 h-3 text-olive-ink" />
                    <span>Verified Sleeper</span>
                  </div>
                </div>

                {/* Review Title */}
                <h3 className="font-serif text-xl text-umber font-normal leading-snug">
                  "{rev.title}"
                </h3>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-soft-graphite/80 font-sans leading-relaxed">
                  {rev.text}
                </p>
              </div>

              {/* Reviewer Meta & Product Purchased */}
              <div className="pt-4 border-t border-sand-border/80 flex items-center justify-between text-xs font-sans">
                <div>
                  <span className="font-medium text-umber block">{rev.author}</span>
                  <span className="text-[11px] text-umber/60">{rev.location}</span>
                </div>

                <div className="text-right">
                  <span className="text-[11px] text-umber/50 block truncate max-w-[130px]">
                    {rev.productName}
                  </span>
                  <span className="text-[10px] text-olive-ink">
                    Hues: {rev.colorPurchased}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
