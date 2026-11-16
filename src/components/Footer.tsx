import React from 'react';
import { BeddingCategory } from '../types';

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
  return (
    <footer className="w-full bg-umber text-porcelain border-t border-umber-dark pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid: Brand Statement & 4 Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-oat/20">
          
          {/* Brand Col (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <button 
              onClick={onNavigateHome}
              className="text-left focus:outline-none"
            >
              <span className="font-serif text-3xl tracking-[0.2em] text-porcelain block">
                SEREIN
              </span>
              <span className="text-[10px] tracking-[0.28em] uppercase text-oat/70 -mt-0.5 block font-sans">
                The Quiet Atelier · Guimarães & Normandy
              </span>
            </button>

            <p className="text-xs text-oat/80 leading-relaxed max-w-sm">
              Textiles woven from certified coastal Normandy flax and long-staple organic cotton. Stone-washed in northern Portugal for lived-in comfort from the very first evening.
            </p>

            <div className="pt-2 text-xs text-oat/60 space-y-1">
              <p>Atelier Inquiries: atelier@serein-home.com</p>
              <p>Customer Concierge: +1 (800) 412-9820</p>
            </div>
          </div>

          {/* Shop Column (2 cols) */}
          <div className="lg:col-span-2 space-y-3 text-xs">
            <p className="text-[11px] uppercase tracking-widest text-oat font-semibold">
              The Collection
            </p>
            <ul className="space-y-2 text-oat/80">
              <li>
                <button onClick={() => onSelectCategory('all')} className="hover:text-white transition-colors">
                  All Bedding Pieces
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('Duvet Covers')} className="hover:text-white transition-colors">
                  Duvet Covers
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('Sheets & Sets')} className="hover:text-white transition-colors">
                  Bed Sheets & Sets
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('Pillowcases')} className="hover:text-white transition-colors">
                  Pillowcase Pairs
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('Quilts & Comforters')} className="hover:text-white transition-colors">
                  Coverlets & Quilts
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('Blankets & Throws')} className="hover:text-white transition-colors">
                  Waffle & Wool Throws
                </button>
              </li>
            </ul>
          </div>

          {/* Atelier Services (2 cols) */}
          <div className="lg:col-span-2 space-y-3 text-xs">
            <p className="text-[11px] uppercase tracking-widest text-oat font-semibold">
              Atelier Services
            </p>
            <ul className="space-y-2 text-oat/80">
              <li>
                <button onClick={onOpenBuildBed} className="hover:text-white transition-colors text-clay-rose font-medium">
                  Build Your Bed Studio
                </button>
              </li>
              <li>
                <button onClick={onOpenMaterialGuide} className="hover:text-white transition-colors">
                  Our Fabrics & Weaves
                </button>
              </li>
              <li>
                <button onClick={onOpenSizeGuide} className="hover:text-white transition-colors">
                  Bedding Size Guide
                </button>
              </li>
              <li>
                <button onClick={onOpenCareGuide} className="hover:text-white transition-colors">
                  Linen Laundering Ritual
                </button>
              </li>
              <li>
                <span className="text-oat/50 cursor-default">Custom Interior Swatch Card</span>
              </li>
            </ul>
          </div>

          {/* Customer Care (2 cols) */}
          <div className="lg:col-span-2 space-y-3 text-xs">
            <p className="text-[11px] uppercase tracking-widest text-oat font-semibold">
              Client Support
            </p>
            <ul className="space-y-2 text-oat/80">
              <li>
                <span className="hover:text-white cursor-pointer">100-Night Sleep Trial</span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">Complimentary Returns</span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">Sustainable Shipping</span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">Atelier FAQs</span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer">Track Your Package</span>
              </li>
            </ul>
          </div>

          {/* Sustainability & Origin (2 cols) */}
          <div className="lg:col-span-2 space-y-3 text-xs">
            <p className="text-[11px] uppercase tracking-widest text-oat font-semibold">
              Certifications
            </p>
            <ul className="space-y-2 text-oat/70">
              <li>European Flax® Certified</li>
              <li>OEKO-TEX® Standard 100</li>
              <li>GOTS Organic Cotton</li>
              <li>Plastic-Free Packaging</li>
              <li>100% Traceable Looming</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Payment Icons & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-oat/60 space-y-4 md:space-y-0">
          <div>
            <p>© 2026 SEREIN THE QUIET ATELIER. All rights reserved.</p>
          </div>

          {/* Subtle Payment Badges */}
          <div className="flex items-center space-x-3 text-[11px] text-oat/70">
            <span>Visa</span>
            <span>·</span>
            <span>Mastercard</span>
            <span>·</span>
            <span>American Express</span>
            <span>·</span>
            <span>Apple Pay</span>
            <span>·</span>
            <span>Shop Pay</span>
          </div>

          <div className="flex items-center space-x-4 text-[11px]">
            <span className="hover:text-porcelain cursor-pointer">Privacy Charter</span>
            <span>·</span>
            <span className="hover:text-porcelain cursor-pointer">Terms of Service</span>
            <span>·</span>
            <span className="hover:text-porcelain cursor-pointer">Accessibility</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
