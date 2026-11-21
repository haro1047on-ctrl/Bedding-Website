import React, { useState, useEffect, useRef } from 'react';
import { Product, ColorVariant } from '../types';
import { Search, X, ArrowRight, ImageOff } from 'lucide-react';
import { formatPKR } from '../utils/format';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product, initialColor?: ColorVariant) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const quickSearches = [
    'Eve Linen',
    'Darcy Corduroy',
    'Jude Organic Cotton',
    'Frankie Flannelette',
    'Russet',
    'Alex Stripe',
  ];

  const searchResults = query.trim() === ''
    ? []
    : products.filter(p => {
        const q = query.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.material.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.colors.some(c => c.name.toLowerCase().includes(q))
        );
      });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-umber/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative min-h-screen flex items-start justify-center p-4 sm:p-6 sm:pt-20">
        <div className="relative w-full max-w-2xl bg-chalk border border-sand-border shadow-elevated p-6 sm:p-8">
          
          {/* Top Search Input Row */}
          <div className="flex items-center space-x-3 pb-4 border-b border-sand-border">
            <Search className="w-5 h-5 text-umber/60 stroke-[1.5]" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by fabric, color, room element or size..."
              className="flex-1 bg-transparent text-base sm:text-lg text-umber placeholder:text-umber/40 font-serif focus:outline-none"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="text-xs text-umber/50 hover:text-umber font-sans"
              >
                Clear
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="p-1 text-umber/70 hover:text-umber transition-colors"
              aria-label="Close search"
            >
              <X className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>

          {/* Quick Search Chips */}
          {query.trim() === '' && (
            <div className="py-6 space-y-3">
              <span className="text-[11px] uppercase tracking-widest text-umber/50 font-sans block">
                Popular Atelier Searches
              </span>
              <div className="flex flex-wrap gap-2">
                {quickSearches.map((chip) => (
                  <button
                    key={chip}
                    type="button"
                    onClick={() => setQuery(chip)}
                    className="px-3 py-1.5 bg-porcelain border border-sand-border text-xs text-soft-graphite hover:border-umber hover:text-umber font-sans transition-colors"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Results Area */}
          {query.trim() !== '' && (
            <div className="pt-6 space-y-4">
              <div className="flex items-center justify-between text-xs text-umber/60 font-sans">
                <span>{searchResults.length} {searchResults.length === 1 ? 'Design Found' : 'Designs Found'}</span>
                <span>Searching: "{query}"</span>
              </div>

              {searchResults.length === 0 ? (
                <div className="text-center py-10 space-y-2">
                  <p className="font-serif text-lg text-umber">No designs matched your query</p>
                  <p className="text-xs text-soft-graphite/60 font-sans">
                    Try searching for "linen", "percale", "oatmeal", or "duvet".
                  </p>
                </div>
              ) : (
                <div className="divide-y divide-sand-border max-h-96 overflow-y-auto">
                  {searchResults.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => {
                        onSelectProduct(product, product.colors[0]);
                        onClose();
                      }}
                      className="py-3 flex items-center justify-between cursor-pointer group hover:bg-porcelain/60 px-2 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        {/* Strict 3-Tier Colourway Image Resolution (Priority 1: Gallery, Priority 2: Single Image, Priority 3: Placeholder. Zero product.images fallback) */}
                        {(() => {
                          const primaryColor = product.colors?.[0];
                          const primaryGallery = (primaryColor?.gallery && Array.isArray(primaryColor.gallery) && primaryColor.gallery.length > 0)
                            ? primaryColor.gallery.filter(img => typeof img === 'string' && img.trim().length > 0)
                            : [];
                          const primaryImg = primaryGallery[0] || (typeof primaryColor?.image === 'string' && primaryColor.image.trim()) || '';

                          return primaryImg ? (
                            <img
                              src={primaryImg}
                              alt={product.name}
                              className="w-12 h-12 object-cover border border-sand-border flex-shrink-0"
                            />
                          ) : (
                            <div className="w-12 h-12 bg-porcelain border border-sand-border flex flex-col items-center justify-center flex-shrink-0 text-umber/40 p-0.5 text-center">
                              <ImageOff className="w-3.5 h-3.5 mb-0.5" />
                              <span className="text-[7px] uppercase tracking-wider font-sans line-clamp-1">
                                {primaryColor?.name || 'Unavailable'}
                              </span>
                            </div>
                          );
                        })()}
                        <div>
                          <h4 className="font-serif text-base text-umber group-hover:text-olive-ink transition-colors font-normal">
                            {product.name}
                          </h4>
                          <span className="text-xs text-soft-graphite/60 font-sans">
                            {product.category} · {product.material}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <span className="font-sans text-sm font-semibold text-umber">
                          {formatPKR(product.price)}
                        </span>
                        <ArrowRight className="w-4 h-4 text-oat group-hover:text-olive-ink group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
