import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { BeddingCategory } from '../types';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onSelectCategory: (category: BeddingCategory | 'all') => void;
  onOpenBuildBed?: () => void;
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
  onOpenMaterialGuide,
  onOpenSizeGuide,
  onNavigateHome,
  activeView,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopMenuOpen, setShopMenuOpen] = useState(false);
  const [infoMenuOpen, setInfoMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isTransparent = activeView === 'home' && !isScrolled;

  const categories: { label: BeddingCategory; count: string; desc: string }[] = [
    { label: 'Duvet Covers', count: '6 Styles', desc: 'Normandy washed linen & organic percale' },
    { label: 'Sheets & Sets', count: '8 Styles', desc: 'Crisp 300-TC fitted & flat sheet sets' },
    { label: 'Pillowcases', count: '5 Colors', desc: 'Envelope closure pairs with French seams' },
    { label: 'Quilts & Comforters', count: '4 Styles', desc: '4-ply cloud gauze & box-quilted cotton' },
    { label: 'Blankets & Throws', count: '3 Weaves', desc: 'Textured waffle & brushed wool-linen' },
  ];

  const handleScrollToSection = (sectionId: string) => {
    if (activeView !== 'home') {
      onNavigateHome();
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const el = document.getElementById(sectionId);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-40 transition-all duration-300 pointer-events-none">
      
      {/* 
        3.1 Announcement Strip
        Slim, warm off-white surface, DM Sans text, letter-spaced.
      */}
      <div 
        className={`w-full py-1.5 px-3 sm:px-4 text-center transition-colors duration-300 pointer-events-auto border-b ${
          isTransparent 
            ? 'bg-chalk/90 backdrop-blur-md text-umber border-sand-border/30 shadow-sm' 
            : 'bg-porcelain text-umber border-sand-border'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[10px] sm:text-[11px] font-sans tracking-[0.14em] uppercase">
          <span className="hidden md:inline text-umber/70">
            Handcrafted in Guimarães, Portugal
          </span>
          <div className="mx-auto flex items-center space-x-1.5 truncate">
            <span className="font-medium text-umber truncate">
              Complimentary Express Delivery Over Rs. 15,000
            </span>
            <span className="hidden sm:inline text-umber/50">·</span>
            <span className="hidden sm:inline text-umber/70">All orders in PKR</span>
          </div>
          <span className="hidden md:inline font-medium text-umber/80">
            PKR (Rs.)
          </span>
        </div>
      </div>

      {/* 
        3.2 Main Header Navigation
        Transparent over hero image, centered brand wordmark, centered nav links below it,
        and upper-right utility links. Transitions to solid porcelain on scroll.
      */}
      <nav
        className={`w-full transition-all duration-300 pointer-events-auto ${
          isTransparent
            ? 'bg-transparent text-chalk border-b border-white/10'
            : 'bg-porcelain/95 backdrop-blur-md text-umber border-b border-sand-border shadow-subtle'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-3 sm:pb-3.5">
          
          {/* Top Row: Mobile Menu | Centered Brand Wordmark | Right Utility Actions */}
          <div className="relative flex items-center justify-between">
            
            {/* Mobile Hamburger Button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className={`p-1.5 -ml-1 transition-colors ${
                  isTransparent ? 'text-chalk hover:text-white' : 'text-umber hover:text-soft-graphite'
                }`}
                aria-label="Open navigation menu"
              >
                <Menu className="w-5 h-5 stroke-[1.5]" />
              </button>
            </div>

            {/* Desktop Left Placemark */}
            <div className="hidden lg:flex items-center w-48">
              <span className={`text-[11px] font-sans tracking-[0.2em] uppercase transition-colors ${
                isTransparent ? 'text-chalk/75' : 'text-umber/60'
              }`}>
                Est. 2026
              </span>
            </div>

            {/* Centered Brand Wordmark: SEREIN */}
            <div className="flex-1 text-center">
              <button
                type="button"
                onClick={onNavigateHome}
                className="group inline-flex flex-col items-center focus:outline-none"
                aria-label="SEREIN Atelier Homepage"
              >
                <span className={`font-serif text-2xl sm:text-3xl tracking-[0.28em] font-normal transition-colors leading-none ${
                  isTransparent ? 'text-chalk drop-shadow-sm group-hover:text-white' : 'text-umber group-hover:text-soft-graphite'
                }`}>
                  SEREIN
                </span>
                <span className={`text-[8px] sm:text-[9px] tracking-[0.34em] uppercase font-sans font-medium mt-1 transition-colors ${
                  isTransparent ? 'text-chalk/80' : 'text-umber/60'
                }`}>
                  The Quiet Atelier
                </span>
              </button>
            </div>

            {/* Right: Search & Shopping Bag */}
            <div className="flex items-center justify-end space-x-3 sm:space-x-5 w-auto lg:w-48">
              <button
                type="button"
                onClick={onOpenSearch}
                className={`p-1.5 transition-colors flex items-center space-x-1.5 text-xs font-sans tracking-wider uppercase font-medium ${
                  isTransparent ? 'text-chalk/90 hover:text-white' : 'text-umber/80 hover:text-soft-graphite'
                }`}
                aria-label="Search bedding catalogue"
              >
                <Search className="w-4 h-4 stroke-[1.5]" />
                <span className="hidden sm:inline">Search</span>
              </button>

              <button
                type="button"
                onClick={onOpenCart}
                className={`relative p-1.5 transition-colors flex items-center space-x-2 text-xs font-sans tracking-wider uppercase font-medium ${
                  isTransparent ? 'text-chalk/90 hover:text-white' : 'text-umber/90 hover:text-soft-graphite'
                }`}
                aria-label={`Open shopping bag with ${cartCount} items`}
              >
                <ShoppingBag className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[1.5]" />
                <span className="hidden sm:inline">Bag</span>
                {cartCount > 0 && (
                  <span className={`inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 text-[10px] font-sans font-bold ${
                    isTransparent ? 'bg-chalk text-umber shadow-sm' : 'bg-umber text-porcelain'
                  }`}>
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

          </div>

          {/* 
            Desktop Secondary Tier:
            Centered main navigation links beneath the wordmark (Bedfolk editorial reference):
            SHOP · STORY · INFO · JOURNAL
          */}
          <div className="hidden lg:flex items-center justify-center space-x-9 pt-2 text-[11px] font-sans tracking-[0.24em] uppercase font-medium">
            
            {/* SHOP BEDDING with Mega Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setShopMenuOpen(true)}
              onMouseLeave={() => setShopMenuOpen(false)}
            >
              <button
                type="button"
                onClick={() => {
                  onSelectCategory('all');
                  setShopMenuOpen(false);
                }}
                className={`py-1 inline-flex items-center space-x-1 transition-colors ${
                  isTransparent ? 'text-chalk/90 hover:text-white' : 'text-umber/90 hover:text-olive-ink'
                }`}
              >
                <span>Shop</span>
                <ChevronDown className="w-3 h-3 stroke-[1.5] transition-transform duration-200" />
              </button>

              {/* Shop Dropdown Panel */}
              {shopMenuOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[580px] bg-chalk border border-sand-border shadow-elevated p-6 grid grid-cols-2 gap-6 animate-fadeIn z-50 text-left">
                  <div>
                    <p className="text-[10px] font-sans text-umber/50 uppercase tracking-widest pb-2 mb-3 border-b border-sand-border">
                      Bedding Collection
                    </p>
                    <ul className="space-y-2.5">
                      <li>
                        <button
                          type="button"
                          onClick={() => {
                            onSelectCategory('all');
                            setShopMenuOpen(false);
                          }}
                          className="text-xs font-sans text-umber hover:text-olive-ink flex items-center justify-between w-full group/item text-left uppercase tracking-wider font-semibold"
                        >
                          <span>View Complete Catalogue</span>
                          <ArrowRight className="w-3.5 h-3.5 text-olive-ink opacity-0 group-hover/item:opacity-100 transition-all" />
                        </button>
                      </li>
                      {categories.map((cat) => (
                        <li key={cat.label}>
                          <button
                            type="button"
                            onClick={() => {
                              onSelectCategory(cat.label);
                              setShopMenuOpen(false);
                            }}
                            className="text-xs font-sans text-soft-graphite hover:text-olive-ink flex items-center justify-between w-full group/item text-left"
                          >
                            <span>{cat.label}</span>
                            <span className="text-[11px] text-umber/40">{cat.count}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Curated Editorial Vignette */}
                  <div className="bg-porcelain p-4 border border-sand-border flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] tracking-widest uppercase font-semibold text-terracotta">
                        Signature Suite
                      </span>
                      <h4 className="font-serif text-lg text-umber mt-1 font-normal">
                        Normandy French Flax
                      </h4>
                      <p className="text-xs text-umber/70 mt-1 leading-relaxed">
                        Pre-washed with volcanic pumice stones in northern Portugal for immediate lived-in softness.
                      </p>
                    </div>
                    <img
                      src="https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=400&q=80"
                      alt="French Flax Bedding"
                      className="w-full h-24 object-cover mt-3 border border-sand-border"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* STORY */}
            <button
              type="button"
              onClick={() => handleScrollToSection('atelier-manifesto')}
              className={`py-1 transition-colors ${
                isTransparent ? 'text-chalk/90 hover:text-white' : 'text-umber/90 hover:text-olive-ink'
              }`}
            >
              Story
            </button>

            {/* INFO */}
            <div
              className="relative"
              onMouseEnter={() => setInfoMenuOpen(true)}
              onMouseLeave={() => setInfoMenuOpen(false)}
            >
              <button
                type="button"
                className={`py-1 inline-flex items-center space-x-1 transition-colors ${
                  isTransparent ? 'text-chalk/90 hover:text-white' : 'text-umber/90 hover:text-olive-ink'
                }`}
              >
                <span>Info</span>
                <ChevronDown className="w-3 h-3 stroke-[1.5] transition-transform duration-200" />
              </button>

              {infoMenuOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 bg-chalk border border-sand-border shadow-elevated p-3 space-y-2 animate-fadeIn z-50 text-left">
                  <button
                    type="button"
                    onClick={() => {
                      onOpenMaterialGuide();
                      setInfoMenuOpen(false);
                    }}
                    className="w-full text-left text-xs font-sans text-umber hover:text-olive-ink py-1 block"
                  >
                    Our Materials & Weave
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      onOpenSizeGuide();
                      setInfoMenuOpen(false);
                    }}
                    className="w-full text-left text-xs font-sans text-umber hover:text-olive-ink py-1 block"
                  >
                    Mattress & Bed Sizing
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      handleScrollToSection('bedroom-inspiration-section');
                      setInfoMenuOpen(false);
                    }}
                    className="w-full text-left text-xs font-sans text-umber hover:text-olive-ink py-1 block"
                  >
                    Bedroom Inspiration
                  </button>
                </div>
              )}
            </div>

            {/* JOURNAL */}
            <button
              type="button"
              onClick={() => handleScrollToSection('atelier-journal')}
              className={`py-1 transition-colors ${
                isTransparent ? 'text-chalk/90 hover:text-white' : 'text-umber/90 hover:text-olive-ink'
              }`}
            >
              Journal
            </button>

          </div>

        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden pointer-events-auto">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-umber/50 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed inset-y-0 left-0 w-full max-w-sm bg-porcelain p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-6 border-b border-sand-border">
                <div>
                  <span className="font-serif text-2xl tracking-[0.24em] text-umber">SEREIN</span>
                  <p className="text-[9px] tracking-[0.28em] uppercase text-umber/60 mt-0.5">The Quiet Atelier</p>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-umber hover:text-soft-graphite"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 stroke-[1.5]" />
                </button>
              </div>

              {/* Mobile Search Input */}
              <div className="mt-6">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenSearch();
                  }}
                  className="w-full flex items-center justify-between px-3.5 py-2.5 bg-chalk border border-sand-border text-xs text-umber/70"
                >
                  <span>Search linen, duvet covers, sizes...</span>
                  <Search className="w-4 h-4 text-umber/50" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="mt-6 space-y-4">
                <p className="text-[10px] uppercase tracking-widest text-olive-ink font-sans font-semibold">
                  Shop Bedding
                </p>

                <button
                  type="button"
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
                    type="button"
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

                <div className="pt-5 border-t border-sand-border space-y-3 font-sans">
                  <p className="text-[10px] uppercase tracking-widest text-umber/50 font-semibold">
                    The Atelier
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      handleScrollToSection('atelier-manifesto');
                    }}
                    className="w-full text-left text-sm text-soft-graphite hover:text-olive-ink py-1 block"
                  >
                    Our Story & Manifesto
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenMaterialGuide();
                    }}
                    className="w-full text-left text-sm text-soft-graphite hover:text-olive-ink py-1 block"
                  >
                    Fabric Science & Materials
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenSizeGuide();
                    }}
                    className="w-full text-left text-sm text-soft-graphite hover:text-olive-ink py-1 block"
                  >
                    Mattress Sizing Guide
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      handleScrollToSection('atelier-journal');
                    }}
                    className="w-full text-left text-sm text-soft-graphite hover:text-olive-ink py-1 block"
                  >
                    The Journal
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Drawer Footer */}
            <div className="pt-6 border-t border-sand-border text-xs text-umber/60 space-y-1.5 font-sans">
              <p className="font-semibold text-umber">PKR (Rs.) · Complimentary express delivery over Rs. 15,000</p>
              <p>100-Night Sleep Trial on all bedding sets</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
