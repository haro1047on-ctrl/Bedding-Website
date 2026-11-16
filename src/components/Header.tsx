import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X, ArrowRight, Heart } from 'lucide-react';
import { BeddingCategory } from '../types';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onSelectCategory: (category: BeddingCategory | 'all') => void;
  onOpenBuildBed: () => void;
  onOpenMaterialGuide: () => void;
  onOpenSizeGuide: () => void;
  onNavigateHome: () => void;
  activeView: string;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenSearch,
  onSelectCategory,
  onOpenBuildBed,
  onOpenMaterialGuide,
  onOpenSizeGuide,
  onNavigateHome,
  activeView,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [currency, setCurrency] = useState<'USD' | 'EUR' | 'GBP'>('USD');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories: { label: BeddingCategory; count: string }[] = [
    { label: 'Duvet Covers', count: '6 Styles' },
    { label: 'Sheets & Sets', count: '8 Styles' },
    { label: 'Pillowcases', count: '5 Colors' },
    { label: 'Quilts & Comforters', count: '4 Styles' },
    { label: 'Blankets & Throws', count: '3 Weaves' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Announcement Bar */}
      <div className="bg-umber text-porcelain text-xs py-2 px-4 text-center tracking-wider font-sans border-b border-umber-dark/20 flex items-center justify-between">
        <div className="hidden md:flex items-center space-x-3 text-[11px] text-oat">
          <span>Guimarães Atelier Crafted</span>
          <span className="inline-block w-1 h-1 rounded-full bg-oat/50"></span>
          <span>100-Night Sleep Trial</span>
        </div>
        
        <div className="mx-auto flex items-center space-x-2 text-[11px] sm:text-xs">
          <span className="font-medium tracking-wide">Complimentary express shipping on orders over $150</span>
          <span className="hidden sm:inline text-oat/70">· Worldwide sustainable dispatch</span>
        </div>

        <div className="hidden md:flex items-center space-x-2 text-[11px]">
          <label htmlFor="currency-select" className="sr-only">Currency</label>
          <select 
            id="currency-select"
            value={currency} 
            onChange={(e) => setCurrency(e.target.value as any)}
            className="bg-transparent text-oat text-[11px] border-none focus:outline-none cursor-pointer hover:text-white"
          >
            <option value="USD" className="bg-umber text-porcelain">USD ($)</option>
            <option value="EUR" className="bg-umber text-porcelain">EUR (€)</option>
            <option value="GBP" className="bg-umber text-porcelain">GBP (£)</option>
          </select>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className={`w-full transition-all duration-300 border-b ${
          isScrolled 
            ? 'bg-porcelain/95 backdrop-blur-md border-sand-border py-3 shadow-subtle' 
            : 'bg-porcelain/90 backdrop-blur-sm border-sand-border/60 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Left: Mobile Menu Trigger & Desktop Nav Links */}
            <div className="flex items-center space-x-6">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-1.5 -ml-1 text-umber hover:text-soft-graphite transition-colors"
                aria-label="Open mobile navigation menu"
              >
                <Menu className="w-5 h-5 stroke-[1.5]" />
              </button>

              <div className="hidden lg:flex items-center space-x-8 text-[13px] tracking-wide uppercase text-umber/90 font-medium">
                {/* Shop Bedding Dropdown */}
                <div 
                  className="relative group py-2"
                  onMouseEnter={() => setMegaMenuOpen(true)}
                  onMouseLeave={() => setMegaMenuOpen(false)}
                >
                  <button 
                    onClick={() => {
                      onSelectCategory('all');
                      setMegaMenuOpen(false);
                    }}
                    className="hover:text-olive-ink transition-colors flex items-center space-x-1"
                  >
                    <span>Shop Bedding</span>
                    <span className="text-[9px] text-oat-dark group-hover:rotate-180 transition-transform duration-200">▼</span>
                  </button>

                  {/* Mega Menu Dropdown */}
                  {megaMenuOpen && (
                    <div className="absolute top-full left-0 w-[580px] bg-chalk border border-sand-border shadow-elevated p-6 grid grid-cols-2 gap-6 animate-fadeIn transition-all">
                      <div>
                        <p className="text-[11px] font-sans text-umber/50 uppercase tracking-widest pb-2 mb-3 border-b border-sand-border">
                          Shop by Category
                        </p>
                        <ul className="space-y-2.5">
                          <li>
                            <button
                              onClick={() => { onSelectCategory('all'); setMegaMenuOpen(false); }}
                              className="text-sm font-sans text-umber hover:text-olive-ink flex items-center justify-between w-full group/item text-left"
                            >
                              <span>View All Bedding</span>
                              <ArrowRight className="w-3.5 h-3.5 text-oat opacity-0 group-hover/item:opacity-100 group-hover/item:text-olive-ink transition-all" />
                            </button>
                          </li>
                          {categories.map((cat) => (
                            <li key={cat.label}>
                              <button
                                onClick={() => { onSelectCategory(cat.label); setMegaMenuOpen(false); }}
                                className="text-sm font-sans text-soft-graphite hover:text-olive-ink flex items-center justify-between w-full group/item text-left"
                              >
                                <span>{cat.label}</span>
                                <span className="text-xs text-umber/40">{cat.count}</span>
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Featured Atelier Editorial Card */}
                      <div className="bg-porcelain p-4 border border-sand-border flex flex-col justify-between">
                        <div>
                          <span className="text-[10px] tracking-widest uppercase font-medium text-olive-ink">
                            Signature Collection
                          </span>
                          <h4 className="font-serif text-lg text-umber mt-1 font-normal">
                            Washed Normandy Flax
                          </h4>
                          <p className="text-xs text-umber/70 mt-1 leading-relaxed">
                            Pure 170 GSM French flax loomed for weightless warmth and tactile drape.
                          </p>
                        </div>
                        <img 
                          src="https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=400&q=80" 
                          alt="Normandy Flax Bedding"
                          className="w-full h-24 object-cover mt-3 rounded-none"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Build Your Bed link */}
                <button
                  onClick={onOpenBuildBed}
                  className={`hover:text-olive-ink transition-colors relative py-2 ${
                    activeView === 'build-bed' ? 'text-olive-ink font-semibold' : ''
                  }`}
                >
                  <span>Build Your Bed</span>
                  <span className="ml-1.5 px-1.5 py-0.5 text-[9px] bg-clay-rose/15 text-clay-rose tracking-wider uppercase font-sans">
                    Studio
                  </span>
                </button>

                {/* Our Materials */}
                <button
                  onClick={onOpenMaterialGuide}
                  className="hover:text-olive-ink transition-colors py-2"
                >
                  Our Materials
                </button>

                {/* Size Guide */}
                <button
                  onClick={onOpenSizeGuide}
                  className="hover:text-olive-ink transition-colors py-2"
                >
                  Size Guide
                </button>
              </div>
            </div>

            {/* Center: Brand Identity Logo */}
            <div className="flex-1 text-center lg:flex-none">
              <button 
                onClick={onNavigateHome}
                className="group inline-flex flex-col items-center focus:outline-none"
                aria-label="SEREIN Homepage"
              >
                <span className="font-serif text-2xl sm:text-3xl tracking-[0.22em] text-umber font-normal group-hover:text-soft-graphite transition-colors">
                  SEREIN
                </span>
                <span className="text-[9px] tracking-[0.28em] uppercase text-umber/60 -mt-0.5 font-sans">
                  The Quiet Atelier
                </span>
              </button>
            </div>

            {/* Right: Search, Account, Cart */}
            <div className="flex items-center space-x-4 sm:space-x-5">
              <button
                type="button"
                onClick={onOpenSearch}
                className="p-1.5 text-umber/80 hover:text-soft-graphite transition-colors flex items-center space-x-1.5"
                aria-label="Search bedding catalogue"
              >
                <Search className="w-4 h-4 stroke-[1.5]" />
                <span className="hidden md:inline text-xs font-sans tracking-wide">Search</span>
              </button>

              <button
                type="button"
                onClick={onOpenCart}
                className="relative p-1.5 text-umber/90 hover:text-soft-graphite transition-colors flex items-center space-x-2"
                aria-label={`Open shopping cart with ${cartCount} items`}
              >
                <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
                <span className="hidden sm:inline text-xs font-sans font-medium tracking-wider uppercase">
                  Bag
                </span>
                {cartCount > 0 && (
                  <span className="inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 text-[10px] font-sans font-medium bg-umber text-porcelain">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-umber/40 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed inset-y-0 left-0 w-full max-w-sm bg-porcelain p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-sand-border">
                <div>
                  <span className="font-serif text-xl tracking-[0.2em] text-umber">SEREIN</span>
                  <p className="text-[9px] tracking-[0.2em] uppercase text-umber/60">The Quiet Atelier</p>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-umber hover:text-soft-graphite"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 stroke-[1.5]" />
                </button>
              </div>

              {/* Mobile Search Bar */}
              <div className="mt-6">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenSearch();
                  }}
                  className="w-full flex items-center justify-between px-3 py-2.5 bg-chalk border border-sand-border text-xs text-umber/70"
                >
                  <span>Search linen, duvet covers, sizes...</span>
                  <Search className="w-4 h-4 text-umber/50" />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <div className="mt-6 space-y-4">
                <p className="text-[10px] uppercase tracking-widest text-umber/50 font-sans">Categories</p>
                
                <button
                  onClick={() => {
                    onSelectCategory('all');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left font-serif text-lg text-umber hover:text-olive-ink py-1 flex items-center justify-between"
                >
                  <span>All Bedding Collection</span>
                  <ArrowRight className="w-4 h-4 text-oat" />
                </button>

                {categories.map((cat) => (
                  <button
                    key={cat.label}
                    onClick={() => {
                      onSelectCategory(cat.label);
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left font-sans text-sm text-soft-graphite hover:text-olive-ink py-1 flex items-center justify-between"
                  >
                    <span>{cat.label}</span>
                    <span className="text-xs text-umber/40">{cat.count}</span>
                  </button>
                ))}

                <div className="pt-4 border-t border-sand-border space-y-3">
                  <p className="text-[10px] uppercase tracking-widest text-umber/50 font-sans">Atelier Services</p>

                  <button
                    onClick={() => {
                      onOpenBuildBed();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left font-sans text-sm font-medium text-umber hover:text-olive-ink py-1 flex items-center justify-between"
                  >
                    <span className="flex items-center space-x-2">
                      <span>Build Your Bed Customizer</span>
                      <span className="px-1.5 py-0.5 text-[9px] bg-clay-rose/15 text-clay-rose uppercase">15% Off</span>
                    </span>
                    <ArrowRight className="w-4 h-4 text-oat" />
                  </button>

                  <button
                    onClick={() => {
                      onOpenMaterialGuide();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left font-sans text-sm text-soft-graphite hover:text-olive-ink py-1"
                  >
                    Our Materials & Weave Guide
                  </button>

                  <button
                    onClick={() => {
                      onOpenSizeGuide();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left font-sans text-sm text-soft-graphite hover:text-olive-ink py-1"
                  >
                    Bedding Sizing & Mattress Guide
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Footer Info */}
            <div className="pt-6 border-t border-sand-border text-xs text-umber/60 space-y-2">
              <p>Customer Atelier: care@serein-atelier.com</p>
              <p>100-Night Sleep Trial · Free Returns</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
