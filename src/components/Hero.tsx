import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface SlideData {
  id: string;
  eyebrow: string;
  headline: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  primaryAction: 'shop-bedding' | 'discover-linen' | 'shop-bedroom';
  secondaryAction: 'explore-collection' | 'explore-details' | 'view-all';
  image: string;
  alt: string;
  objectPosition?: string;
}

const HERO_SLIDES: SlideData[] = [
  {
    id: 'slide-01',
    eyebrow: 'THOUGHTFULLY MADE FOR EVERYDAY COMFORT',
    headline: 'Ridiculously comfortable bedding.',
    primaryCtaText: 'SHOP BEDDING',
    secondaryCtaText: 'EXPLORE THE COLLECTION',
    primaryAction: 'shop-bedding',
    secondaryAction: 'explore-collection',
    image: '/assets/sheetsociety-catalog/bed-sheets/corduroy-bedding-russet-01.jpg',
    alt: 'Sheet Society Darcy Corduroy and Eve Linen bedding styled in natural light',
    objectPosition: 'center 36%',
  },
  {
    id: 'slide-02',
    eyebrow: 'ORGANIC COTTON & FRENCH FLAX LINEN',
    headline: 'A softer kind of everyday.',
    primaryCtaText: 'DISCOVER OUR BED LINEN',
    secondaryCtaText: 'EXPLORE THE DETAILS',
    primaryAction: 'discover-linen',
    secondaryAction: 'explore-details',
    image: '/assets/sheetsociety-catalog/quilt-covers/corduroy-quilt-cover-hunter-green-01.jpg',
    alt: 'Sheet Society Darcy Corduroy quilt cover in Hunter Green styled in natural light',
    objectPosition: 'center 38%',
  },
  {
    id: 'slide-03',
    eyebrow: 'DEEP POCKETS & INVISIBLE ZIPPERS',
    headline: "We've made your bed, better.",
    primaryCtaText: 'SHOP ALL BEDDING',
    secondaryCtaText: 'VIEW THE DETAILS',
    primaryAction: 'shop-bedroom',
    secondaryAction: 'view-all',
    image: '/assets/sheetsociety-catalog/bed-sheets/linen-bedding-warm-white-01.jpg',
    alt: 'Sheet Society French flax linen bedding in Warm White and Cloud',
    objectPosition: 'center 40%',
  },
];

interface HeroProps {
  onExploreCollection: () => void;
  onOpenMaterialStory?: () => void;
  onOpenBedroomLooks?: () => void;
  initialSlideIndex?: number;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreCollection,
  onOpenMaterialStory,
  onOpenBedroomLooks,
  initialSlideIndex = 0,
}) => {
  const getInitialSlide = () => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const slideParam = params.get('slide');
      if (slideParam !== null) {
        const parsed = parseInt(slideParam, 10);
        if (!isNaN(parsed) && parsed >= 0 && parsed < HERO_SLIDES.length) {
          return parsed;
        }
      }
    }
    return initialSlideIndex;
  };

  const [currentIndex, setCurrentIndex] = useState(getInitialSlide);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [textVisible, setTextVisible] = useState(true);

  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const textTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isMountedRef = useRef(true);

  // Preload images and handle unmount timer cleanup
  useEffect(() => {
    isMountedRef.current = true;
    HERO_SLIDES.forEach(slide => {
      const img = new Image();
      img.src = slide.image;
    });

    return () => {
      isMountedRef.current = false;
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
        transitionTimeoutRef.current = null;
      }
      if (textTimeoutRef.current) {
        clearTimeout(textTimeoutRef.current);
        textTimeoutRef.current = null;
      }
    };
  }, []);

  const goToSlide = useCallback((targetIndex: number, dir: 'next' | 'prev') => {
    if (isTransitioning || targetIndex === currentIndex) return;

    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
      transitionTimeoutRef.current = null;
    }
    if (textTimeoutRef.current) {
      clearTimeout(textTimeoutRef.current);
      textTimeoutRef.current = null;
    }

    setDirection(dir);
    setPreviousIndex(currentIndex);
    setCurrentIndex(targetIndex);
    setIsTransitioning(true);
    setTextVisible(false);

    // Stagger text entrance (120ms delay)
    textTimeoutRef.current = setTimeout(() => {
      if (isMountedRef.current) {
        setTextVisible(true);
      }
    }, 120);

    // 800ms transition duration
    transitionTimeoutRef.current = setTimeout(() => {
      if (isMountedRef.current) {
        setPreviousIndex(null);
        setIsTransitioning(false);
      }
    }, 800);
  }, [currentIndex, isTransitioning]);

  const handleNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % HERO_SLIDES.length;
    goToSlide(nextIndex, 'next');
  }, [currentIndex, goToSlide]);

  const handlePrev = useCallback(() => {
    const prevIndex = (currentIndex - 1 + HERO_SLIDES.length) % HERO_SLIDES.length;
    goToSlide(prevIndex, 'prev');
  }, [currentIndex, goToSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName)) return;
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // Touch swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null || touchStartYRef.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    const deltaY = e.changedTouches[0].clientY - touchStartYRef.current;

    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartXRef.current = null;
    touchStartYRef.current = null;
  };

  const handlePrimaryClick = (action: SlideData['primaryAction']) => {
    if (action === 'shop-bedding' || action === 'discover-linen') {
      onExploreCollection();
    } else if (action === 'shop-bedroom') {
      if (onOpenBedroomLooks) {
        onOpenBedroomLooks();
      } else {
        onExploreCollection();
      }
    }
  };

  const handleSecondaryClick = (action: SlideData['secondaryAction']) => {
    if (action === 'explore-collection' || action === 'view-all') {
      onExploreCollection();
    } else if (action === 'explore-details') {
      if (onOpenMaterialStory) {
        onOpenMaterialStory();
      } else {
        onExploreCollection();
      }
    }
  };

  const currentSlide = HERO_SLIDES[currentIndex];

  return (
    <section
      className="relative w-full h-[100svh] min-h-[660px] sm:min-h-[680px] overflow-hidden bg-[#000000] select-none font-grotesque"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="Sheet Society Bedding Campaign Showcase"
    >
      {/* Full-bleed Slide Images with Directional Horizontal Transitions */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {HERO_SLIDES.map((slide, idx) => {
          const isCurrent = idx === currentIndex;
          const isPrevious = idx === previousIndex;

          if (!isCurrent && !isPrevious) return null;

          const transitionStyle: React.CSSProperties = {
            transition: isTransitioning
              ? 'transform 800ms cubic-bezier(0.22, 1, 0.36, 1), opacity 800ms ease'
              : 'none',
          };

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full will-change-transform ${
                isCurrent ? 'z-10' : 'z-0'
              }`}
              style={{
                ...transitionStyle,
                transform: isCurrent
                  ? 'translateX(0%)'
                  : isPrevious && direction === 'next'
                  ? 'translateX(-100%)'
                  : isPrevious && direction === 'prev'
                  ? 'translateX(100%)'
                  : 'translateX(0%)',
              }}
              aria-hidden={!isCurrent}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
                style={{ objectPosition: slide.objectPosition || 'center center' }}
                loading={idx === 0 ? 'eager' : 'lazy'}
              />

              {/* Contrast Overlays for Text Legibility */}
              <div className="absolute inset-0 bg-black/15 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/45 via-black/15 to-transparent pointer-events-none" />
            </div>
          );
        })}
      </div>

      {/* Bottom-Left Campaign Copy & CTAs */}
      <div className="absolute bottom-16 sm:bottom-20 lg:bottom-20 left-4 sm:left-8 lg:left-[4.8vw] right-4 sm:right-auto z-30 max-w-xl lg:max-w-2xl pointer-events-auto">
        <div
          className="transition-all duration-500 ease-out"
          style={{
            opacity: textVisible ? 1 : 0,
            transform: textVisible
              ? 'translateY(0) translateX(0)'
              : `translateY(16px) translateX(${direction === 'next' ? '20px' : '-20px'})`,
          }}
        >
          {/* Eyebrow Line */}
          <div className="inline-flex items-center space-x-2.5 mb-2 sm:mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E6EFB4] flex-shrink-0" />
            <span className="font-grotesque text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-white/90 font-medium">
              {currentSlide.eyebrow}
            </span>
          </div>

          {/* Main Campaign Headline in Sheet Society Awesome Serif */}
          <h1 className="font-awesome text-[1.95rem] sm:text-5xl lg:text-[3.8rem] text-white font-normal leading-[1.08] tracking-tight text-balance mb-4 sm:mb-8 drop-shadow-md">
            {currentSlide.headline}
          </h1>

          {/* Two Refined Shopping CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2.5 sm:space-y-0 sm:space-x-4 pt-1">
            {/* Primary CTA */}
            <button
              type="button"
              onClick={() => handlePrimaryClick(currentSlide.primaryAction)}
              className="px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-[#000000] hover:bg-[#fbf9f6] text-xs font-grotesque uppercase tracking-[0.2em] font-semibold transition-all duration-200 flex items-center justify-center space-x-2 shadow-md group text-center rounded-full"
            >
              <span>{currentSlide.primaryCtaText}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#000000] group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Secondary CTA */}
            <button
              type="button"
              onClick={() => handleSecondaryClick(currentSlide.secondaryAction)}
              className="px-6 sm:px-8 py-3.5 sm:py-4 bg-black/30 backdrop-blur-sm border border-white/70 text-white hover:bg-white/20 hover:border-white text-xs font-grotesque uppercase tracking-[0.2em] font-medium transition-all duration-200 flex items-center justify-center space-x-2 text-center rounded-full"
            >
              <span>{currentSlide.secondaryCtaText}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Slide Controls & Minimal Progress Indicator */}
      <div className="absolute bottom-4 sm:bottom-20 lg:bottom-20 left-4 right-4 sm:left-auto sm:right-8 lg:right-[4.8vw] z-30 flex items-center justify-between sm:justify-end sm:space-x-6 text-white pointer-events-auto">
        
        {/* Slide Counter: 01 / 03 */}
        <div className="font-grotesque text-xs tracking-widest text-white/80 tabular-nums font-medium" aria-live="polite">
          <span>0{currentIndex + 1}</span>
          <span className="mx-1 text-white/40">/</span>
          <span className="text-white/50">0{HERO_SLIDES.length}</span>
        </div>

        {/* Minimal Segmented Progress Bar */}
        <div className="flex items-center space-x-1.5" aria-hidden="true">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => goToSlide(idx, idx > currentIndex ? 'next' : 'prev')}
              aria-label={`Go to slide 0${idx + 1}`}
              className={`h-0.5 transition-all duration-500 rounded-full ${
                idx === currentIndex ? 'w-8 sm:w-10 bg-white' : 'w-4 sm:w-6 bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Directional Slide Navigation Arrows */}
        <div className="flex items-center space-x-1.5">
          <button
            type="button"
            onClick={handlePrev}
            disabled={isTransitioning}
            className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border border-white/40 hover:border-white hover:bg-white/20 active:scale-95 transition-all rounded-full text-white disabled:opacity-40"
            aria-label="Previous slide"
          >
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[1.5]" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            disabled={isTransitioning}
            className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border border-white/40 hover:border-white hover:bg-white/20 active:scale-95 transition-all rounded-full text-white disabled:opacity-40"
            aria-label="Next slide"
          >
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[1.5]" />
          </button>
        </div>

      </div>
    </section>
  );
};
