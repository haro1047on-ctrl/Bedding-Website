import React, { useState } from 'react';
import { BeddingCategory } from '../types';
import { ArrowRight, Check } from 'lucide-react';

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
    <footer className="w-full bg-[#1b1b1b] text-[#fbf9f6] pt-16 pb-12 font-grotesque">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          
          {/* Brand Col & Newsletter (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <button 
              onClick={onNavigateHome}
              className="text-left focus:outline-none"
              aria-label="Sheet Society Home"
            >
              {/* Sheet Society Official Vector Logo */}
              <svg 
                width="120" 
                height="46" 
                viewBox="0 0 100 38" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-white hover:opacity-85 transition-opacity"
              >
                <text 
                  x="0" 
                  y="18" 
                  fontFamily="'AwesomeSerifVAR', 'BradfordLLRegular', Georgia, serif" 
                  fontSize="21" 
                  fontWeight="bold" 
                  fill="currentColor"
                  letterSpacing="-0.03em"
                >
                  Sheet
                </text>
                <text 
                  x="0" 
                  y="34" 
                  fontFamily="'AwesomeSerifVAR', 'BradfordLLRegular', Georgia, serif" 
                  fontSize="21" 
                  fontWeight="bold" 
                  fill="currentColor"
                  letterSpacing="-0.03em"
                >
                  Society
                </text>
              </svg>
            </button>

            <p className="text-xs text-white/70 leading-relaxed max-w-sm">
              We make bedding that actually fits your bed and your style. 100% natural fibres, deep pockets, invisible zippers, and cohesive earth-toned palettes.
            </p>

            {/* Newsletter Subscription */}
            <div className="pt-2 max-w-md">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-white/80 block mb-2">
                Join our society for 10% off your first order
              </span>
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="bg-white/10 border border-white/20 text-white text-xs px-3.5 py-2.5 rounded-l-md flex-1 placeholder:text-white/40 focus:outline-none focus:border-white"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-[#000000] px-4 py-2.5 text-xs font-semibold rounded-r-md hover:bg-white/90 transition-colors flex items-center space-x-1"
                >
                  {subscribed ? <Check className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </button>
              </form>
              {subscribed && (
                <p className="text-[11px] text-[#E6EFB4] mt-1.5 font-medium">
                  Welcome to the Society! Check your inbox for your 10% code.
                </p>
              )}
            </div>

            <div className="pt-2 text-xs text-white/50 space-x-4">
              <span>All prices listed in PKR (Rs.)</span>
              <span>•</span>
              <span>Certified B Corp</span>
            </div>
          </div>

          {/* Shop Column (2 cols) */}
          <div className="lg:col-span-2 space-y-3 text-xs">
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
            </ul>
          </div>

          {/* Fabrics & Guides (2 cols) */}
          <div className="lg:col-span-2 space-y-3 text-xs">
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

          {/* Help & Customer Care (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs">
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
                <span className="text-white/50 block pt-1">
                  Customer Concierge: help@sheetsociety.com
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 space-y-3 sm:space-y-0">
          <p>© {new Date().getFullYear()} Sheet Society. All rights reserved.</p>
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
