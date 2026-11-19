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
    { label: 'Quilt Covers', count: '15 Styles', desc: 'Eve Linen, Darcy Corduroy & Jude Organic Cotton' },
    { label: 'Fitted Sheets', count: '8 Styles', desc: '55cm deep elastic wall in linen & organic cotton' },
    { label: 'Flat Sheets', count: '8 Styles', desc: 'Generously tailored flat sheets in French flax' },
    { label: 'Pillowcases', count: '10 Styles', desc: 'Standard & European tailored pairs' },
    { label: 'Bed Sheets & Sets', count: '8 Styles', desc: 'Complete coordinated bed suites' },
    { label: 'Blankets & Bed Covers', count: '6 Styles', desc: 'Rory washed cotton & flannelette' },
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
        3.1 Announcement Strip: Sheet Society Exact Ticker Styling (#E6EFB4 / #4B262B)
      */}
      <div 
        className="w-full py-2 px-3 sm:px-4 text-center transition-colors duration-300 pointer-events-auto bg-[#E6EFB4] text-[#4B262B] border-b border-[#d8e49e] font-sans text-xs font-medium"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] sm:text-xs">
          <span className="hidden md:inline font-semibold">
            Sheet Society | Australia
          </span>
          <div className="mx-auto flex items-center space-x-2 truncate font-medium">
            <span>Black Friday is here. Up to 50% off everything.</span>
            <span>·</span>
            <span className="underline cursor-pointer" onClick={() => onSelectCategory('all')}>Shop now</span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">Free shipping & fast dispatch (All orders in PKR)</span>
          </div>
          <span className="hidden md:inline font-semibold">
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

            {/* Centered Brand Wordmark: Sheet Society Official Vector Logo */}
            <div className="flex-1 text-center flex justify-center">
              <button
                type="button"
                onClick={onNavigateHome}
                className="group inline-flex flex-col items-center focus:outline-none py-1"
                aria-label="Sheet Society Homepage"
              >
                <svg width="110" height="43" viewBox="0 0 110 43" fill="none" xmlns="http://www.w3.org/2000/svg" className={`h-8 sm:h-9 w-auto transition-colors ${
                  isTransparent ? 'text-chalk drop-shadow-sm group-hover:text-white' : 'text-umber group-hover:text-soft-graphite'
                }`}>
                  <path d="M48.533 2.129H60.36v2.557h-9.166v4.413h8.232v2.557h-8.232v4.8h9.166v2.557H48.533V2.129zM63.238 2.129h11.827v2.557H65.9v4.413h8.233v2.557h-8.233v4.8h9.166v2.557H63.238V2.129zM18.084 12.5c.508 2.726 2.224 4.318 4.716 4.318 2.394 0 3.845-1.11 3.87-2.774 0-1.423-1.331-2.291-4.257-2.605-3.894-.41-5.829-2.098-5.829-5.065 0-2.653 2.54-4.583 5.95-4.583a6.443 6.443 0 014.087 1.327 5.93 5.93 0 012.225 3.497l-2.564.99c-.46-2.003-1.91-3.281-3.748-3.281-1.935 0-3.29.868-3.29 2.098 0 1.375 1.017 2.098 3.556 2.364 4.353.458 6.53 2.075 6.53 5.162 0 3.232-2.613 5.427-6.53 5.427-1.911 0-3.531-.531-4.813-1.616-1.282-1.086-2.104-2.533-2.419-4.39l2.516-.869zM31.436 2.129h2.66v6.97h8.779V2.13h2.66v16.884h-2.66v-7.357h-8.78v7.357h-2.66V2.129zM77.537 2.129h14.068v2.557H85.9v14.327h-2.66V4.686h-5.704V2.129zM63.238 23.344h11.827V25.9H65.9v4.413h8.233v2.557h-8.233v4.8h9.166v2.556H63.238V23.344zM4.086 33.718c.507 2.725 2.225 4.317 4.715 4.317 2.394 0 3.846-1.11 3.87-2.774 0-1.423-1.33-2.29-4.257-2.604-3.893-.41-5.828-2.099-5.828-5.066 0-2.652 2.54-4.582 5.95-4.582a6.442 6.442 0 014.087 1.326 5.929 5.929 0 012.225 3.498l-2.564.989c-.46-2.002-1.91-3.28-3.748-3.28-1.935 0-3.29.868-3.29 2.098 0 1.375 1.016 2.098 3.555 2.363 4.354.459 6.53 2.075 6.53 5.162 0 3.232-2.612 5.427-6.53 5.427-1.91 0-3.53-.53-4.812-1.616-1.282-1.085-2.104-2.532-2.419-4.39l2.516-.868zM34.548 31.837c.072 4.848-3.628 8.852-8.586 8.756-5.006.072-8.73-3.883-8.658-8.756-.073-4.896 3.652-8.948 8.658-8.852 4.958-.096 8.658 3.956 8.586 8.852zm-2.66 0c0-3.593-2.492-6.295-5.95-6.295-3.483 0-5.974 2.701-5.974 6.295 0 3.57 2.49 6.199 5.974 6.199 3.458 0 5.95-2.605 5.95-6.199zM56.426 23.347h2.66V40.23h-2.66V23.347zM77.537 23.347h14.068v2.557H85.9V40.23h-2.66V25.904h-5.704v-2.557zM95.998 23.347l4.692 7.549 4.692-7.55h3.047l-6.409 10.251v6.633h-2.66v-6.633l-6.385-10.25h3.023zM45.026 38.159c-3.218 0-5.724-2.224-5.724-6.374 0-3.965 2.322-6.372 5.7-6.372 2.525 0 4.471 1.312 5.1 3.693l2.87-.25c-.788-3.664-3.976-5.874-7.877-5.874-4.942 0-8.573 3.233-8.573 8.803 0 5.548 3.677 8.803 8.596 8.803 4.092 0 7.31-2.361 7.976-6.258l-2.873-.252c-.483 2.636-2.506 4.08-5.195 4.08z" fill="currentColor" />
                </svg>
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
                        Darcy Corduroy & Eve Linen
                      </h4>
                      <p className="text-xs text-umber/70 mt-1 leading-relaxed">
                        Pre-washed for instant lived-in softness with invisible zippers and 55cm deep elastic walls.
                      </p>
                    </div>
                    <img
                      src="/assets/sheetsociety-catalog/quilt-covers/corduroy-quilt-cover-russet-01.jpg"
                      alt="Darcy Corduroy and Eve Linen"
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
                  <span className="font-bold text-xl tracking-tight text-umber block">SHEET SOCIETY</span>
                  <p className="text-[10px] tracking-wider uppercase text-umber/60 mt-0.5">Better Bedding</p>
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
