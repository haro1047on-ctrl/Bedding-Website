import React, { useState, useEffect, useRef } from 'react';
import { ShoppingBag, Search, Menu, X, ArrowRight, ChevronDown, ChevronRight } from 'lucide-react';
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

interface DepartmentItem {
  label: string;
  category: BeddingCategory | 'all';
  count: string;
  desc: string;
  badge?: string;
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
  const [mobileSectionOpen, setMobileSectionOpen] = useState<string | null>('bedding-essentials');
  const [shopMenuOpen, setShopMenuOpen] = useState(false);
  const [infoMenuOpen, setInfoMenuOpen] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Outside click & Escape-key dismissal
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setShopMenuOpen(false);
        setInfoMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShopMenuOpen(false);
        setInfoMenuOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const handleShopMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setShopMenuOpen(true);
    setInfoMenuOpen(false);
  };

  const handleShopMouseLeave = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setShopMenuOpen(false);
    }, 220);
  };

  const isTransparent = activeView === 'home' && !isScrolled && !shopMenuOpen;

  // The 11 Approved Sub-Departments mapped across organized columns
  const beddingEssentials: DepartmentItem[] = [
    { label: 'Quilt Covers', category: 'Quilt Covers', count: '15 Styles', desc: 'Linen, corduroy & organic cotton with invisible zippers' },
    { label: 'Fitted Sheets', category: 'Fitted Sheets', count: '8 Styles', desc: '55cm extra-deep wall with thick ribbed elastic' },
    { label: 'Flat Sheets', category: 'Flat Sheets', count: '8 Styles', desc: 'Generously tailored drape in French flax & percale' },
    { label: 'Pillowcase Pairs', category: 'Pillowcases', count: '10 Styles', desc: 'Standard & European tailored envelope pairs' },
    { label: 'Bed Sheets & Sets', category: 'Bed Sheets & Sets', count: '18 Styles', desc: 'Complete coordinated duvet and sheet suites' },
  ];

  const layersAndAccents: DepartmentItem[] = [
    { label: 'Blankets & Bed Covers', category: 'Blankets & Bed Covers', count: '19 Styles', desc: 'Rory washed cotton & flannelette layers' },
    { label: 'Cushions', category: 'Cushions', count: '31 Styles', desc: 'Plush bouclé, velvet & ribbed corduroy cushions' },
    { label: 'Quilts & Pillows', category: 'Quilts & Pillows', count: '12 Styles', desc: 'Australian wool, cloud corn & recycled down' },
    { label: 'Protectors & Toppers', category: 'Protectors & Toppers', count: '7 Styles', desc: 'Breathable mattress & pillow protection' },
  ];

  const livingAndFamily: DepartmentItem[] = [
    { label: 'Bath & Towels', category: 'Bath & Towels', count: '6 Styles', desc: '600 GSM organic cotton bath sheets & robes' },
    { label: 'Sleepwear', category: 'Sleepwear', count: '9 Styles', desc: 'Cloudknit jersey loungewear & flannelette robes' },
    { label: 'Wellness', category: 'Wellness', count: '8 Styles', desc: 'Mulberry silk eye masks & calming sleep mists' },
    { label: 'Kids & Baby', category: 'Kids & Baby', count: '16 Styles', desc: 'Cot sheets, toddler quilts & baby swaddles' },
  ];

  const signatureFabrics = [
    { name: 'Eve Linen', desc: '100% French Flax Linen', category: 'Quilt Covers' as BeddingCategory },
    { name: 'Darcy Corduroy', desc: 'Plush Ribbed Cotton', category: 'Quilt Covers' as BeddingCategory },
    { name: 'Eden Cotton', desc: 'Smooth Cotton Percale', category: 'Fitted Sheets' as BeddingCategory },
    { name: 'Jude Organic Cotton', desc: 'Crisp Certified Organic', category: 'Bed Sheets & Sets' as BeddingCategory },
    { name: 'Frankie Flannelette', desc: 'Brushed Cozy Warmth', category: 'Blankets & Bed Covers' as BeddingCategory },
    { name: 'Leo Washed Cotton', desc: 'Soft Lived-In Finish', category: 'Quilt Covers' as BeddingCategory },
  ];

  const handleCategoryClick = (category: BeddingCategory | 'all') => {
    onSelectCategory(category);
    setShopMenuOpen(false);
    setMobileMenuOpen(false);
  };

  const handleScrollToSection = (sectionId: string) => {
    setShopMenuOpen(false);
    setInfoMenuOpen(false);
    setMobileMenuOpen(false);
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
    <header 
      ref={headerRef} 
      className="fixed top-0 left-0 w-full z-40 transition-all duration-300 pointer-events-none"
    >
      
      {/* 
        Announcement Strip: MORFE Ticker (#E6EFB4 / #4B262B)
      */}
      <div 
        className="w-full py-2 px-3 sm:px-6 text-center transition-colors duration-300 pointer-events-auto bg-[#E6EFB4] text-[#4B262B] border-b border-[#d8e49e] font-grotesque text-xs font-medium"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 flex items-center justify-between text-[10px] sm:text-xs">
          <span className="hidden md:inline font-semibold tracking-wider uppercase">
            MORFE Atelier
          </span>
          <div className="mx-auto flex items-center space-x-2 truncate font-medium">
            <span className="truncate">Thoughtfully made for everyday comfort</span>
            <span>·</span>
            <button 
              type="button" 
              className="underline cursor-pointer flex-shrink-0 font-semibold hover:opacity-80" 
              onClick={() => handleCategoryClick('all')}
            >
              Shop Bedding
            </button>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">Complimentary express delivery over Rs. 15,000</span>
          </div>
          <span className="hidden md:inline font-semibold tracking-wider">
            PKR (Rs.)
          </span>
        </div>
      </div>

      {/* 
        Main Header Navigation
        Transparent over hero image, transitions to solid porcelain on scroll or mega-menu open.
      */}
      <nav
        className={`w-full transition-all duration-300 pointer-events-auto ${
          isTransparent
            ? 'bg-transparent text-chalk border-b border-white/10'
            : 'bg-porcelain/98 backdrop-blur-md text-umber border-b border-sand-border shadow-subtle'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 pt-3 pb-3 sm:pb-3.5">
          
          {/* Top Row: Mobile Menu | Centered Brand Wordmark | Right Utility Actions */}
          <div className="relative flex items-center justify-between">
            
            {/* Left: Mobile Hamburger Button & Desktop Placemark */}
            <div className="flex items-center w-14 lg:w-48">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className={`p-1.5 -ml-1 transition-colors lg:hidden ${
                  isTransparent ? 'text-chalk hover:text-white' : 'text-umber hover:text-soft-graphite'
                }`}
                aria-label="Open navigation menu"
              >
                <Menu className="w-5 h-5 stroke-[1.5]" />
              </button>
              <span className={`hidden lg:inline text-[11px] font-grotesque tracking-[0.2em] uppercase transition-colors ${
                isTransparent ? 'text-chalk/75' : 'text-umber/60'
              }`}>
                Est. 2026 · Melbourne &amp; Lahore
              </span>
            </div>

            {/* Centered Brand Wordmark: MORFE */}
            <div className="flex-1 text-center flex justify-center items-center">
              <button
                type="button"
                onClick={onNavigateHome}
                className="group inline-flex flex-col items-center focus:outline-none py-1 focus-visible:ring-1 focus-visible:ring-umber"
                aria-label="MORFE Homepage"
              >
                <span className={`font-sans font-bold text-lg sm:text-2xl tracking-[0.26em] uppercase transition-colors ${
                  isTransparent ? 'text-chalk drop-shadow-sm group-hover:text-white' : 'text-umber group-hover:text-soft-graphite'
                }`}>
                  MORFE
                </span>
              </button>
            </div>

            {/* Right: Search & Shopping Bag */}
            <div className="flex items-center justify-end space-x-2 sm:space-x-5 w-14 lg:w-48">
              <button
                type="button"
                onClick={onOpenSearch}
                className={`p-1.5 transition-colors flex items-center space-x-1.5 text-xs font-grotesque tracking-wider uppercase font-medium focus-visible:ring-1 focus-visible:ring-umber ${
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
                className={`relative p-1.5 transition-colors flex items-center space-x-1.5 text-xs font-grotesque tracking-wider uppercase font-medium focus-visible:ring-1 focus-visible:ring-umber ${
                  isTransparent ? 'text-chalk/90 hover:text-white' : 'text-umber/90 hover:text-soft-graphite'
                }`}
                aria-label={`Open shopping bag with ${cartCount} items`}
              >
                <ShoppingBag className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[1.5]" />
                <span className="hidden sm:inline">Bag</span>
                {cartCount > 0 && (
                  <span className={`inline-flex items-center justify-center min-w-[16px] h-[16px] sm:min-w-[18px] sm:h-[18px] px-1 text-[9px] sm:text-[10px] font-grotesque font-bold rounded-full ${
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
            Centered main navigation links beneath the wordmark:
            BEDDING · FABRICS · STORY · CARE & SIZING · JOURNAL
          */}
          <div className="hidden lg:flex items-center justify-center space-x-9 pt-2.5 text-[11px] font-grotesque tracking-[0.22em] uppercase font-medium">
            
            {/* BEDDING / SHOP with Full Multi-Column Mega-Menu */}
            <div 
              className="relative"
              onMouseEnter={handleShopMouseEnter}
              onMouseLeave={handleShopMouseLeave}
            >
              <button
                type="button"
                onClick={() => setShopMenuOpen(prev => !prev)}
                onFocus={handleShopMouseEnter}
                aria-expanded={shopMenuOpen}
                aria-haspopup="true"
                className={`py-1 inline-flex items-center space-x-1.5 transition-colors focus-visible:ring-1 focus-visible:ring-umber ${
                  isTransparent ? 'text-chalk/90 hover:text-white' : 'text-umber/90 hover:text-olive-ink'
                } ${shopMenuOpen ? 'text-olive-ink font-semibold' : ''}`}
              >
                <span>Bedding</span>
                <ChevronDown className={`w-3 h-3 stroke-[1.5] transition-transform duration-200 ${shopMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Hover bridge helper element (avoids dead pointer zone between button and panel) */}
              <div className="absolute top-full left-0 w-full h-3 pointer-events-auto" />
            </div>

            {/* FABRICS */}
            <button
              type="button"
              onClick={onOpenMaterialGuide}
              className={`py-1 transition-colors focus-visible:ring-1 focus-visible:ring-umber ${
                isTransparent ? 'text-chalk/90 hover:text-white' : 'text-umber/90 hover:text-olive-ink'
              }`}
            >
              Fabrics
            </button>

            {/* STORY */}
            <button
              type="button"
              onClick={() => handleScrollToSection('atelier-manifesto')}
              className={`py-1 transition-colors focus-visible:ring-1 focus-visible:ring-umber ${
                isTransparent ? 'text-chalk/90 hover:text-white' : 'text-umber/90 hover:text-olive-ink'
              }`}
            >
              Story
            </button>

            {/* CARE & SIZING (INFO DROPDOWN) */}
            <div
              className="relative"
              onMouseEnter={() => setInfoMenuOpen(true)}
              onMouseLeave={() => setInfoMenuOpen(false)}
            >
              <button
                type="button"
                onClick={() => setInfoMenuOpen(prev => !prev)}
                aria-expanded={infoMenuOpen}
                aria-haspopup="true"
                className={`py-1 inline-flex items-center space-x-1.5 transition-colors focus-visible:ring-1 focus-visible:ring-umber ${
                  isTransparent ? 'text-chalk/90 hover:text-white' : 'text-umber/90 hover:text-olive-ink'
                }`}
              >
                <span>Care &amp; Sizing</span>
                <ChevronDown className={`w-3 h-3 stroke-[1.5] transition-transform duration-200 ${infoMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {infoMenuOpen && (
                <div 
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-52 bg-chalk border border-sand-border shadow-elevated p-3 space-y-2 animate-fadeIn z-50 text-left"
                  onMouseEnter={() => setInfoMenuOpen(true)}
                  onMouseLeave={() => setInfoMenuOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => {
                      onOpenMaterialGuide();
                      setInfoMenuOpen(false);
                    }}
                    className="w-full text-left text-xs font-sans text-umber hover:text-olive-ink py-1.5 px-2 hover:bg-porcelain rounded-sm block transition-colors"
                  >
                    Our Materials &amp; Weaves
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      onOpenSizeGuide();
                      setInfoMenuOpen(false);
                    }}
                    className="w-full text-left text-xs font-sans text-umber hover:text-olive-ink py-1.5 px-2 hover:bg-porcelain rounded-sm block transition-colors"
                  >
                    Mattress &amp; Bed Sizing Guide
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      handleScrollToSection('bedroom-inspiration-section');
                      setInfoMenuOpen(false);
                    }}
                    className="w-full text-left text-xs font-sans text-umber hover:text-olive-ink py-1.5 px-2 hover:bg-porcelain rounded-sm block transition-colors"
                  >
                    Curated Bedroom Looks
                  </button>
                </div>
              )}
            </div>

            {/* JOURNAL */}
            <button
              type="button"
              onClick={() => handleScrollToSection('atelier-journal')}
              className={`py-1 transition-colors focus-visible:ring-1 focus-visible:ring-umber ${
                isTransparent ? 'text-chalk/90 hover:text-white' : 'text-umber/90 hover:text-olive-ink'
              }`}
            >
              Journal
            </button>

          </div>

        </div>

        {/* 
          FULL MULTI-COLUMN MEGA-MENU FLYOUT (DELIVERABLE A)
          Encompasses all 11 approved sub-departments + Signature Fabrics + Editorial Vignette
        */}
        {shopMenuOpen && (
          <div 
            id="desktop-mega-menu-panel"
            className="w-full bg-porcelain/98 backdrop-blur-md border-b border-sand-border shadow-elevated transition-all animate-fadeIn z-50 text-left pointer-events-auto"
            onMouseEnter={handleShopMouseEnter}
            onMouseLeave={handleShopMouseLeave}
          >
            <div className="max-w-[1440px] mx-auto px-6 sm:px-10 py-8">
              
              {/* 5-Column Clean Layout */}
              <div className="grid grid-cols-5 gap-8 xl:gap-10">
                
                {/* Column 1: Bedding Essentials (Departments 1-5) */}
                <div>
                  <div className="flex items-center justify-between pb-2.5 mb-3.5 border-b border-sand-border">
                    <h3 className="text-[11px] font-grotesque font-bold text-umber uppercase tracking-[0.2em]">
                      Bedding Essentials
                    </h3>
                  </div>
                  
                  <ul className="space-y-3 font-sans">
                    <li>
                      <button
                        type="button"
                        onClick={() => handleCategoryClick('all')}
                        className="text-xs font-sans font-semibold text-umber hover:text-olive-ink flex items-center justify-between w-full group py-0.5 text-left tracking-wide"
                      >
                        <span className="underline decoration-sand-border underline-offset-4 group-hover:decoration-olive-ink">
                          View Complete Catalogue
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-olive-ink opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    </li>

                    {beddingEssentials.map((item) => (
                      <li key={item.label}>
                        <button
                          type="button"
                          onClick={() => handleCategoryClick(item.category)}
                          className="text-xs font-sans text-soft-graphite hover:text-umber flex items-baseline justify-between w-full group py-0.5 text-left transition-colors"
                        >
                          <span className="group-hover:translate-x-0.5 transition-transform">{item.label}</span>
                          <span className="text-[10px] text-umber/40 font-mono group-hover:text-olive-ink transition-colors">{item.count}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 2: Layers, Accents & Comfort (Departments 6-9) */}
                <div>
                  <div className="flex items-center justify-between pb-2.5 mb-3.5 border-b border-sand-border">
                    <h3 className="text-[11px] font-grotesque font-bold text-umber uppercase tracking-[0.2em]">
                      Layers &amp; Comfort
                    </h3>
                  </div>

                  <ul className="space-y-3 font-sans">
                    {layersAndAccents.map((item) => (
                      <li key={item.label}>
                        <button
                          type="button"
                          onClick={() => handleCategoryClick(item.category)}
                          className="text-xs font-sans text-soft-graphite hover:text-umber flex items-baseline justify-between w-full group py-0.5 text-left transition-colors"
                        >
                          <span className="group-hover:translate-x-0.5 transition-transform">{item.label}</span>
                          <span className="text-[10px] text-umber/40 font-mono group-hover:text-olive-ink transition-colors">{item.count}</span>
                        </button>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-4 border-t border-sand-border/60">
                    <button
                      type="button"
                      onClick={() => handleScrollToSection('bedroom-inspiration-section')}
                      className="text-[11px] font-grotesque tracking-wider uppercase text-olive-ink hover:text-umber font-semibold inline-flex items-center space-x-1.5"
                    >
                      <span>Explore Lookbook</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Column 3: Living, Bath & Family (Departments 10-11 & Lifestyle) */}
                <div>
                  <div className="flex items-center justify-between pb-2.5 mb-3.5 border-b border-sand-border">
                    <h3 className="text-[11px] font-grotesque font-bold text-umber uppercase tracking-[0.2em]">
                      Living &amp; Family
                    </h3>
                  </div>

                  <ul className="space-y-3 font-sans">
                    {livingAndFamily.map((item) => (
                      <li key={item.label}>
                        <button
                          type="button"
                          onClick={() => handleCategoryClick(item.category)}
                          className="text-xs font-sans text-soft-graphite hover:text-umber flex items-baseline justify-between w-full group py-0.5 text-left transition-colors"
                        >
                          <span className="group-hover:translate-x-0.5 transition-transform">{item.label}</span>
                          <span className="text-[10px] text-umber/40 font-mono group-hover:text-olive-ink transition-colors">{item.count}</span>
                        </button>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-4 border-t border-sand-border/60">
                    <div className="bg-oat/30 p-2.5 rounded-sm border border-sand-border">
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-terracotta block">Sleep Trial</span>
                      <p className="text-[11px] text-umber/70 mt-0.5 leading-snug">
                        100 nights to wash, sleep and live in your bedding.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Column 4: Signature Fabrics */}
                <div>
                  <div className="flex items-center justify-between pb-2.5 mb-3.5 border-b border-sand-border">
                    <h3 className="text-[11px] font-grotesque font-bold text-umber uppercase tracking-[0.2em]">
                      Shop by Fabric
                    </h3>
                  </div>

                  <ul className="space-y-2.5 font-sans">
                    {signatureFabrics.map((fabric) => (
                      <li key={fabric.name}>
                        <button
                          type="button"
                          onClick={() => handleCategoryClick(fabric.category)}
                          className="w-full text-left group py-1"
                        >
                          <span className="text-xs font-medium text-umber group-hover:text-olive-ink block">
                            {fabric.name}
                          </span>
                          <span className="text-[10px] text-soft-graphite/70 block">
                            {fabric.desc}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 5: Curated Editorial Showcase Card */}
                <div className="bg-porcelain border border-sand-border p-4.5 rounded-sm flex flex-col justify-between shadow-xs">
                  <div>
                    <span className="text-[9px] tracking-[0.2em] uppercase font-bold text-terracotta block">
                      Atelier Edit
                    </span>
                    <h4 className="font-serif text-lg text-umber mt-1 font-normal leading-tight">
                      Darcy Corduroy in Russet
                    </h4>
                    <p className="text-xs text-soft-graphite/80 mt-1.5 leading-relaxed">
                      Pre-washed heavyweight cotton corduroy with velvety ribs and hidden zipper closures.
                    </p>
                  </div>

                  <div className="mt-3 overflow-hidden rounded-sm border border-sand-border/80">
                    <img
                      src="/assets/sheetsociety-catalog/quilt-covers/corduroy-quilt-cover-russet-01.jpg"
                      alt="Darcy Corduroy Quilt Cover in Russet"
                      className="w-full h-32 object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  <div className="mt-3 pt-3 border-t border-sand-border">
                    <button
                      type="button"
                      onClick={() => handleCategoryClick('Quilt Covers')}
                      className="w-full py-2 bg-umber text-porcelain text-xs font-grotesque uppercase tracking-wider font-semibold hover:bg-soft-graphite transition-colors flex items-center justify-center space-x-1.5"
                    >
                      <span>Explore Darcy Corduroy</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

      </nav>

      {/* 
        Responsive Mobile Navigation Drawer
        Fully hierarchical, touch-friendly, zero horizontal overflow
      */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden pointer-events-auto">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-umber/50 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer content */}
          <div className="fixed inset-y-0 left-0 w-full max-w-sm bg-porcelain p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-5 border-b border-sand-border">
                <div>
                  <span className="font-sans font-bold text-xl tracking-[0.22em] text-umber uppercase block">MORFE</span>
                  <p className="text-[10px] tracking-wider uppercase text-umber/60 mt-0.5">The Quiet Atelier · Est. 2026</p>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-umber hover:text-soft-graphite focus:outline-none"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 stroke-[1.5]" />
                </button>
              </div>

              {/* Mobile Search Bar */}
              <div className="mt-5">
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

              {/* Mobile Navigation Sections */}
              <div className="mt-6 space-y-4">
                
                {/* View All Button */}
                <button
                  type="button"
                  onClick={() => handleCategoryClick('all')}
                  className="w-full text-left py-2 font-serif text-lg text-umber hover:text-olive-ink flex items-center justify-between border-b border-sand-border"
                >
                  <span>View All Bedding (167)</span>
                  <ArrowRight className="w-4 h-4 text-olive-ink" />
                </button>

                {/* Section 1: Bedding Essentials */}
                <div className="border-b border-sand-border pb-3">
                  <button
                    type="button"
                    onClick={() => setMobileSectionOpen(mobileSectionOpen === 'bedding-essentials' ? null : 'bedding-essentials')}
                    className="w-full flex items-center justify-between py-1 text-xs font-grotesque font-bold uppercase tracking-wider text-umber"
                  >
                    <span>Bedding Essentials</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileSectionOpen === 'bedding-essentials' ? 'rotate-180' : ''}`} />
                  </button>

                  {mobileSectionOpen === 'bedding-essentials' && (
                    <div className="mt-2 pl-2 space-y-2.5 pt-1">
                      {beddingEssentials.map((item) => (
                        <button
                          key={item.label}
                          type="button"
                          onClick={() => handleCategoryClick(item.category)}
                          className="w-full text-left text-sm font-sans text-soft-graphite hover:text-olive-ink flex items-center justify-between py-1"
                        >
                          <span>{item.label}</span>
                          <span className="text-xs text-umber/40">{item.count}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Section 2: Layers & Accents */}
                <div className="border-b border-sand-border pb-3">
                  <button
                    type="button"
                    onClick={() => setMobileSectionOpen(mobileSectionOpen === 'layers-accents' ? null : 'layers-accents')}
                    className="w-full flex items-center justify-between py-1 text-xs font-grotesque font-bold uppercase tracking-wider text-umber"
                  >
                    <span>Layers &amp; Comfort</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileSectionOpen === 'layers-accents' ? 'rotate-180' : ''}`} />
                  </button>

                  {mobileSectionOpen === 'layers-accents' && (
                    <div className="mt-2 pl-2 space-y-2.5 pt-1">
                      {layersAndAccents.map((item) => (
                        <button
                          key={item.label}
                          type="button"
                          onClick={() => handleCategoryClick(item.category)}
                          className="w-full text-left text-sm font-sans text-soft-graphite hover:text-olive-ink flex items-center justify-between py-1"
                        >
                          <span>{item.label}</span>
                          <span className="text-xs text-umber/40">{item.count}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Section 3: Living & Family */}
                <div className="border-b border-sand-border pb-3">
                  <button
                    type="button"
                    onClick={() => setMobileSectionOpen(mobileSectionOpen === 'living-family' ? null : 'living-family')}
                    className="w-full flex items-center justify-between py-1 text-xs font-grotesque font-bold uppercase tracking-wider text-umber"
                  >
                    <span>Living &amp; Family</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileSectionOpen === 'living-family' ? 'rotate-180' : ''}`} />
                  </button>

                  {mobileSectionOpen === 'living-family' && (
                    <div className="mt-2 pl-2 space-y-2.5 pt-1">
                      {livingAndFamily.map((item) => (
                        <button
                          key={item.label}
                          type="button"
                          onClick={() => handleCategoryClick(item.category)}
                          className="w-full text-left text-sm font-sans text-soft-graphite hover:text-olive-ink flex items-center justify-between py-1"
                        >
                          <span>{item.label}</span>
                          <span className="text-xs text-umber/40">{item.count}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Section 4: The Atelier & Information */}
                <div className="pt-2 space-y-2 text-sm font-sans">
                  <p className="text-[10px] uppercase tracking-widest text-umber/50 font-semibold mb-2">
                    The Atelier
                  </p>

                  <button
                    type="button"
                    onClick={() => handleScrollToSection('atelier-manifesto')}
                    className="w-full text-left py-1 text-soft-graphite hover:text-olive-ink block"
                  >
                    Our Story &amp; Manifesto
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenMaterialGuide();
                    }}
                    className="w-full text-left py-1 text-soft-graphite hover:text-olive-ink block"
                  >
                    Fabric Science &amp; Materials
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenSizeGuide();
                    }}
                    className="w-full text-left py-1 text-soft-graphite hover:text-olive-ink block"
                  >
                    Mattress Sizing Guide
                  </button>

                  <button
                    type="button"
                    onClick={() => handleScrollToSection('atelier-journal')}
                    className="w-full text-left py-1 text-soft-graphite hover:text-olive-ink block"
                  >
                    The Atelier Journal
                  </button>
                </div>

              </div>
            </div>

            {/* Mobile Drawer Footer */}
            <div className="pt-6 border-t border-sand-border text-xs text-umber/60 space-y-1 font-sans">
              <p className="font-semibold text-umber">PKR (Rs.) · Complimentary express delivery over Rs. 15,000</p>
              <p>100-Night Sleep Trial on all bedding sets</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
