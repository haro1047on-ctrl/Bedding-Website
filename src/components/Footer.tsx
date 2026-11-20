import React, { useState } from 'react';
import { BeddingCategory } from '../types';
import { ArrowRight, Check, ChevronDown } from 'lucide-react';

interface FooterProps {
  onSelectCategory: (category: BeddingCategory | 'all') => void;
  onOpenBuildBed: () => void;
  onOpenMaterialGuide: () => void;
  onOpenSizeGuide: () => void;
  onOpenCareGuide: () => void;
  onNavigateHome: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategory,
  onOpenBuildBed,
  onOpenMaterialGuide,
  onOpenSizeGuide,
  onOpenCareGuide,
  onNavigateHome,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    shop: false,
    materials: false,
    help: false,
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer className="w-full bg-[#1b1b1b] text-[#fbf9f6] pt-12 sm:pt-16 pb-12 font-grotesque">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-10 sm:pb-14 border-b border-white/10">
          
          {/* Brand Col & Newsletter (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <button 
              onClick={onNavigateHome}
              className="text-left focus:outline-none group inline-block"
              aria-label="MORFE Home"
            >
              <span className="font-sans font-bold text-2xl sm:text-3xl tracking-[0.24em] text-white uppercase block group-hover:text-white/80 transition-colors">
                MORFE
              </span>
            </button>

            <p className="text-xs text-white/75 leading-relaxed max-w-sm">
              A refined bedding and home-living brand focused on comfort, considered design and everyday living. 100% natural fibres, deep pockets, invisible zippers, and cohesive earth-toned palettes.
            </p>

            {/* Newsletter Subscription */}
            <div className="pt-1 max-w-md w-full">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-white/90 block mb-2">
                Join the MORFE community for 10% off your first order
              </span>
              <form onSubmit={handleSubscribe} className="flex w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="bg-white/10 border border-white/20 text-white text-xs px-3.5 py-2.5 rounded-l-md flex-1 min-w-0 placeholder:text-white/40 focus:outline-none focus:border-white transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-[#000000] px-4 py-2.5 text-xs font-semibold rounded-r-md hover:bg-white/90 transition-colors flex items-center justify-center flex-shrink-0"
                  aria-label="Subscribe to MORFE newsletter"
                >
                  {subscribed ? <Check className="w-4 h-4 text-emerald-700" /> : <ArrowRight className="w-4 h-4" />}
                </button>
              </form>
              {subscribed && (
                <p className="text-[11px] text-[#E6EFB4] mt-1.5 font-medium animate-fadeIn">
                  Welcome to MORFE. Check your inbox for your 10% welcome code.
                </p>
              )}
            </div>

            <div className="pt-2 text-xs text-white/50 space-x-3 sm:space-x-4">
              <span>All prices in PKR (Rs.)</span>
              <span>•</span>
              <span>Complimentary shipping over Rs. 15,000</span>
              <span>•</span>
              <span>Certified B Corp</span>
            </div>
          </div>

          {/* Desktop Navigation Columns (hidden on mobile, visible md+) */}
          <div className="hidden md:grid md:grid-cols-7 lg:col-span-7 gap-8 text-xs">
            
            {/* Shop Column (2 cols) */}
            <div className="md:col-span-2 space-y-3">
              <p className="text-[11px] uppercase tracking-widest text-white font-semibold">
                Shop Bedding
              </p>
              <ul className="space-y-2 text-white/70">
                <li>
                  <button onClick={() => onSelectCategory('all')} className="hover:text-white transition-colors">
                    All Bedding
                  </button>
                </li>
                <li>
                  <button onClick={() => onSelectCategory('Quilt Covers')} className="hover:text-white transition-colors">
                    Quilt Covers
                  </button>
                </li>
                <li>
                  <button onClick={() => onSelectCategory('Fitted Sheets')} className="hover:text-white transition-colors">
                    Fitted Sheets
                  </button>
                </li>
                <li>
                  <button onClick={() => onSelectCategory('Flat Sheets')} className="hover:text-white transition-colors">
                    Flat Sheets
                  </button>
                </li>
                <li>
                  <button onClick={() => onSelectCategory('Pillowcases')} className="hover:text-white transition-colors">
                    Pillowcases
                  </button>
                </li>
                <li>
                  <button onClick={() => onSelectCategory('Bed Sheets & Sets')} className="hover:text-white transition-colors">
                    Bed Sheets & Sets
                  </button>
                </li>
                <li>
                  <button onClick={() => onSelectCategory('Blankets & Bed Covers')} className="hover:text-white transition-colors">
                    Blankets & Throws
                  </button>
                </li>
                <li>
                  <button onClick={onOpenBuildBed} className="hover:text-white transition-colors font-medium text-[#E6EFB4]">
                    Interactive Bedroom Looks
                  </button>
                </li>
              </ul>
            </div>

            {/* Fabrics & Guides (2 cols) */}
            <div className="md:col-span-2 space-y-3">
              <p className="text-[11px] uppercase tracking-widest text-white font-semibold">
                Our Materials
              </p>
              <ul className="space-y-2 text-white/70">
                <li>
                  <button onClick={onOpenMaterialGuide} className="hover:text-white transition-colors">
                    Eve French Flax Linen
                  </button>
                </li>
                <li>
                  <button onClick={onOpenMaterialGuide} className="hover:text-white transition-colors">
                    Darcy Ribbed Corduroy
                  </button>
                </li>
                <li>
                  <button onClick={onOpenMaterialGuide} className="hover:text-white transition-colors">
                    Eden Washed Cotton
                  </button>
                </li>
                <li>
                  <button onClick={onOpenMaterialGuide} className="hover:text-white transition-colors">
                    Frankie Flannelette
                  </button>
                </li>
                <li>
                  <button onClick={onOpenSizeGuide} className="hover:text-white transition-colors">
                    Bed Size Guide
                  </button>
                </li>
                <li>
                  <button onClick={onOpenCareGuide} className="hover:text-white transition-colors">
                    Fabric Care & Laundry
                  </button>
                </li>
              </ul>
            </div>

            {/* Help & Support (3 cols) */}
            <div className="md:col-span-3 space-y-3">
              <p className="text-[11px] uppercase tracking-widest text-white font-semibold">
                Help & Support
              </p>
              <ul className="space-y-2 text-white/70">
                <li>
                  <a href="#shipping" className="hover:text-white transition-colors">
                    Shipping & Delivery Info
                  </a>
                </li>
                <li>
                  <a href="#returns" className="hover:text-white transition-colors">
                    30-Day Hassle-Free Returns
                  </a>
                </li>
                <li>
                  <a href="#warranty" className="hover:text-white transition-colors">
                    3-Year Quality Guarantee
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white transition-colors">
                    Frequently Asked Questions
                  </a>
                </li>
                <li>
                  <span className="text-white/60 block pt-1 font-medium">
                    Concierge: concierge@morfe.com
                  </span>
                </li>
              </ul>
            </div>

          </div>

          {/* Mobile Collapsible Accordions (visible on mobile < md, hidden on md+) */}
          <div className="md:hidden divide-y divide-white/10 border-t border-b border-white/10">
            
            {/* Accordion: Shop Bedding */}
            <div>
              <button
                type="button"
                onClick={() => toggleSection('shop')}
                className="w-full py-3.5 flex items-center justify-between text-xs uppercase tracking-widest text-white font-semibold focus:outline-none min-h-[44px]"
                aria-expanded={openSections.shop}
              >
                <span>Shop Bedding</span>
                <ChevronDown
                  className={`w-4 h-4 stroke-[1.5] transition-transform duration-200 ${
                    openSections.shop ? 'rotate-180 text-white' : 'text-white/50'
                  }`}
                />
              </button>
              {openSections.shop && (
                <ul className="pb-4 space-y-2.5 text-xs text-white/70 animate-fadeIn pl-1">
                  <li>
                    <button onClick={() => onSelectCategory('all')} className="hover:text-white transition-colors py-1">
                      All Bedding
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onSelectCategory('Quilt Covers')} className="hover:text-white transition-colors py-1">
                      Quilt Covers
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onSelectCategory('Fitted Sheets')} className="hover:text-white transition-colors py-1">
                      Fitted Sheets
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onSelectCategory('Flat Sheets')} className="hover:text-white transition-colors py-1">
                      Flat Sheets
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onSelectCategory('Pillowcases')} className="hover:text-white transition-colors py-1">
                      Pillowcases
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onSelectCategory('Bed Sheets & Sets')} className="hover:text-white transition-colors py-1">
                      Bed Sheets & Sets
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onSelectCategory('Blankets & Bed Covers')} className="hover:text-white transition-colors py-1">
                      Blankets & Throws
                    </button>
                  </li>
                  <li>
                    <button onClick={onOpenBuildBed} className="hover:text-white transition-colors py-1 font-medium text-[#E6EFB4]">
                      Interactive Bedroom Looks
                    </button>
                  </li>
                </ul>
              )}
            </div>

            {/* Accordion: Our Materials */}
            <div>
              <button
                type="button"
                onClick={() => toggleSection('materials')}
                className="w-full py-3.5 flex items-center justify-between text-xs uppercase tracking-widest text-white font-semibold focus:outline-none min-h-[44px]"
                aria-expanded={openSections.materials}
              >
                <span>Our Materials</span>
                <ChevronDown
                  className={`w-4 h-4 stroke-[1.5] transition-transform duration-200 ${
                    openSections.materials ? 'rotate-180 text-white' : 'text-white/50'
                  }`}
                />
              </button>
              {openSections.materials && (
                <ul className="pb-4 space-y-2.5 text-xs text-white/70 animate-fadeIn pl-1">
                  <li>
                    <button onClick={onOpenMaterialGuide} className="hover:text-white transition-colors py-1">
                      Eve French Flax Linen
                    </button>
                  </li>
                  <li>
                    <button onClick={onOpenMaterialGuide} className="hover:text-white transition-colors py-1">
                      Darcy Ribbed Corduroy
                    </button>
                  </li>
                  <li>
                    <button onClick={onOpenMaterialGuide} className="hover:text-white transition-colors py-1">
                      Eden Washed Cotton
                    </button>
                  </li>
                  <li>
                    <button onClick={onOpenMaterialGuide} className="hover:text-white transition-colors py-1">
                      Frankie Flannelette
                    </button>
                  </li>
                  <li>
                    <button onClick={onOpenSizeGuide} className="hover:text-white transition-colors py-1">
                      Bed Size Guide
                    </button>
                  </li>
                  <li>
                    <button onClick={onOpenCareGuide} className="hover:text-white transition-colors py-1">
                      Fabric Care & Laundry
                    </button>
                  </li>
                </ul>
              )}
            </div>

            {/* Accordion: Help & Support */}
            <div>
              <button
                type="button"
                onClick={() => toggleSection('help')}
                className="w-full py-3.5 flex items-center justify-between text-xs uppercase tracking-widest text-white font-semibold focus:outline-none min-h-[44px]"
                aria-expanded={openSections.help}
              >
                <span>Help & Support</span>
                <ChevronDown
                  className={`w-4 h-4 stroke-[1.5] transition-transform duration-200 ${
                    openSections.help ? 'rotate-180 text-white' : 'text-white/50'
                  }`}
                />
              </button>
              {openSections.help && (
                <ul className="pb-4 space-y-2.5 text-xs text-white/70 animate-fadeIn pl-1">
                  <li>
                    <a href="#shipping" className="hover:text-white transition-colors py-1 block">
                      Shipping & Delivery Info
                    </a>
                  </li>
                  <li>
                    <a href="#returns" className="hover:text-white transition-colors py-1 block">
                      30-Day Hassle-Free Returns
                    </a>
                  </li>
                  <li>
                    <a href="#warranty" className="hover:text-white transition-colors py-1 block">
                      3-Year Quality Guarantee
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="hover:text-white transition-colors py-1 block">
                      Frequently Asked Questions
                    </a>
                  </li>
                  <li>
                    <span className="text-white/60 block pt-1 font-medium">
                      Concierge: concierge@morfe.com
                    </span>
                  </li>
                </ul>
              )}
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 space-y-3 sm:space-y-0">
          <p>© {new Date().getFullYear()} MORFE. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#accessibility" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
