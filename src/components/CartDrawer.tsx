import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight, ShieldCheck, Tag, Sparkles } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, newQty: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
  onExplore: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
  onExplore,
}) => {
  if (!isOpen) return null;

  const [promoCode, setPromoCode] = useState('');
  const [promoDiscount, setPromoDiscount] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState('');
  const [giftNote, setGiftNote] = useState('');
  const [showGiftNote, setShowGiftNote] = useState(false);

  // Subtotal calculation
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  // Free shipping threshold is $150
  const freeShippingThreshold = 150;
  const isFreeShipping = subtotal >= freeShippingThreshold;
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const shippingProgress = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    if (promoCode.trim().toUpperCase() === 'ATELIER10') {
      setPromoDiscount(0.10);
      setPromoApplied(true);
    } else {
      setPromoError('Please enter a valid code (Try: ATELIER10)');
    }
  };

  const discountAmount = Math.round(subtotal * promoDiscount);
  const finalTotal = subtotal - discountAmount;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-umber/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Slide-over Panel */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-chalk border-l border-sand-border shadow-drawer flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-sand-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <ShoppingBag className="w-5 h-5 text-umber" />
                <h3 className="font-serif text-xl sm:text-2xl text-umber font-normal">
                  Your Bedding Bag
                </h3>
                <span className="text-xs font-sans text-umber/50">
                  ({items.reduce((acc, i) => acc + i.quantity, 0)})
                </span>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 text-umber/70 hover:text-umber transition-colors"
                aria-label="Close cart drawer"
              >
                <X className="w-5 h-5 stroke-[1.5]" />
              </button>
            </div>

            {/* Free Shipping Progress Meter */}
            <div className="mt-4 p-3 bg-porcelain border border-sand-border text-xs font-sans space-y-1.5">
              <div className="flex justify-between items-center text-umber">
                {isFreeShipping ? (
                  <span className="font-medium text-olive-ink flex items-center space-x-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Complimentary Express Shipping Unlocked!</span>
                  </span>
                ) : (
                  <span>
                    Add <strong className="text-umber font-semibold">${amountToFreeShipping}</strong> more for complimentary shipping
                  </span>
                )}
                <span className="text-[11px] text-umber/50">{shippingProgress}%</span>
              </div>
              <div className="w-full bg-sand-border h-1.5 rounded-full overflow-hidden">
                <div 
                  className="bg-olive-ink h-full transition-all duration-500 rounded-full"
                  style={{ width: `${shippingProgress}%` }}
                />
              </div>
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 divide-y divide-sand-border">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-porcelain flex items-center justify-center text-umber/40 border border-sand-border">
                  <ShoppingBag className="w-6 h-6 stroke-[1.2]" />
                </div>
                <h4 className="font-serif text-xl text-umber font-normal">
                  Your bag is currently empty
                </h4>
                <p className="text-xs text-soft-graphite/70 font-sans max-w-xs mx-auto">
                  Discover our pure French flax duvets, crisp percale sheets, and tactile layered throws.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onExplore();
                  }}
                  className="mt-2 px-6 py-2.5 bg-umber text-porcelain text-xs font-sans uppercase tracking-widest font-medium hover:bg-soft-graphite transition-colors"
                >
                  Explore Bestsellers
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="py-4 flex space-x-4">
                  {/* Thumbnail */}
                  <img
                    src={item.selectedColor.image || item.product.images[0]}
                    alt={item.product.name}
                    className="w-20 h-24 object-cover bg-oat/20 border border-sand-border flex-shrink-0"
                  />

                  {/* Item Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-serif text-base text-umber font-normal line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          type="button"
                          onClick={() => onRemoveItem(item.id)}
                          className="text-umber/40 hover:text-clay-rose p-1 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <p className="text-xs text-soft-graphite/60 font-sans mt-0.5">
                        Hue: {item.selectedColor.name} · Size: {item.selectedSize}
                      </p>
                      <span className="text-[11px] text-olive-ink font-sans">
                        {item.product.material}
                      </span>
                    </div>

                    {/* Quantity Controls & Price */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center border border-sand-border bg-porcelain">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          className="p-1 text-umber hover:text-olive-ink"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-sans font-medium text-umber">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-1 text-umber hover:text-olive-ink"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="font-serif text-base text-umber font-normal">
                        ${item.product.price * item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Summary */}
          {items.length > 0 && (
            <div className="p-5 sm:p-6 border-t border-sand-border bg-porcelain space-y-4">
              
              {/* Promo Code Input */}
              {!promoApplied ? (
                <form onSubmit={handleApplyPromo} className="flex gap-2">
                  <div className="relative flex-1">
                    <label htmlFor="promo-input" className="sr-only">Privilege code</label>
                    <input
                      id="promo-input"
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Privilege code (try ATELIER10)"
                      className="w-full px-3 py-2 bg-chalk border border-sand-border text-xs text-soft-graphite uppercase placeholder:normal-case focus:outline-none focus:border-umber"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-umber text-porcelain text-xs font-sans uppercase tracking-wider hover:bg-soft-graphite transition-colors"
                  >
                    Apply
                  </button>
                </form>
              ) : (
                <div className="flex items-center justify-between text-xs text-olive-ink font-sans bg-olive-ink/10 p-2 border border-olive-ink/20">
                  <span>Privilege Code ATELIER10 Applied (10% Off)</span>
                  <button onClick={() => { setPromoApplied(false); setPromoDiscount(0); }} className="text-umber/60 hover:text-umber text-[11px] underline">
                    Remove
                  </button>
                </div>
              )}
              {promoError && <p className="text-[11px] text-clay-rose">{promoError}</p>}

              {/* Subtotals & Calculations */}
              <div className="space-y-1.5 text-xs font-sans text-soft-graphite">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-umber font-medium">${subtotal}</span>
                </div>

                {promoApplied && (
                  <div className="flex justify-between text-clay-rose">
                    <span>Privilege Discount</span>
                    <span>-${discountAmount}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-umber font-medium">
                    {isFreeShipping ? 'Complimentary Express' : '$15 Standard'}
                  </span>
                </div>

                <div className="flex justify-between text-sm font-semibold text-umber pt-2 border-t border-sand-border">
                  <span>Estimated Total</span>
                  <span className="font-serif text-lg font-normal">
                    ${finalTotal + (isFreeShipping ? 0 : 15)}
                  </span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                type="button"
                onClick={onCheckout}
                className="w-full py-4 bg-umber text-porcelain hover:bg-soft-graphite text-xs font-sans uppercase tracking-widest font-semibold transition-colors flex items-center justify-center space-x-2 shadow-subtle"
              >
                <span>Proceed to Secure Checkout</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="text-center text-[11px] text-umber/60 font-sans flex items-center justify-center space-x-2">
                <ShieldCheck className="w-3.5 h-3.5 text-olive-ink" />
                <span>100-Night Guarantee · Carbon-Neutral Shipping</span>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
