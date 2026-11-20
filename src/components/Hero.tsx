import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight } from 'lucide-react';

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
    alt: 'MORFE Darcy Corduroy and Eve Linen bedding styled in natural light',
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
    alt: 'MORFE Darcy Corduroy quilt cover in Hunter Green styled in natural light',
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
    alt: 'MORFE French flax linen bedding in Warm White and Cloud',
    objectPosition: 'center 40%',
  },
];

const SLIDE_DURATION = 6000;

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
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const [textVisible, setTextVisible] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const isPaused = isHovered || isFocused;

  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);
  const autoAdvanceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const textTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isMountedRef = useRef(true);

  // Check prefers-reduced-motion media query
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);
      const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    }
  }, []);

  // Preload images and manage mount state
  useEffect(() => {
    isMountedRef.current = true;
    HERO_SLIDES.forEach(slide => {
      const img = new Image();
      img.src = slide.image;
    });

    return () => {
      isMountedRef.current = false;
      if (autoAdvanceTimerRef.current) {
        clearTimeout(autoAdvanceTimerRef.current);
        autoAdvanceTimerRef.current = null;
      }
      if (textTimeoutRef.current) {
        clearTimeout(textTimeoutRef.current);
        textTimeoutRef.current = null;
      }
    };
  }, []);

  const goToSlide = useCallback((targetIndex: number) => {
    if (targetIndex === currentIndex) return;

    if (autoAdvanceTimerRef.current) {
      clearTimeout(autoAdvanceTimerRef.current);
      autoAdvanceTimerRef.current = null;
    }
    if (textTimeoutRef.current) {
      clearTimeout(textTimeoutRef.current);
      textTimeoutRef.current = null;
    }

    setTextVisible(false);
    setCurrentIndex(targetIndex);
    setProgressKey(k => k + 1);

    textTimeoutRef.current = setTimeout(() => {
      if (isMountedRef.current) {
        setTextVisible(true);
      }
    }, 150);
  }, [currentIndex]);

  const handleNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % HERO_SLIDES.length;
    goToSlide(nextIndex);
  }, [currentIndex, goToSlide]);

  const handlePrev = useCallback(() => {
    const prevIndex = (currentIndex - 1 + HERO_SLIDES.length) % HERO_SLIDES.length;
    goToSlide(prevIndex);
  }, [currentIndex, goToSlide]);

  // Automated advancement every 6 seconds when not paused
  useEffect(() => {
    if (isPaused) {
      if (autoAdvanceTimerRef.current) {
        clearTimeout(autoAdvanceTimerRef.current);
        autoAdvanceTimerRef.current = null;
      }
      return;
    }

    autoAdvanceTimerRef.current = setTimeout(() => {
      if (isMountedRef.current) {
        const nextIndex = (currentIndex + 1) % HERO_SLIDES.length;
        setCurrentIndex(nextIndex);
        setProgressKey(k => k + 1);
        setTextVisible(false);

        if (textTimeoutRef.current) clearTimeout(textTimeoutRef.current);
        textTimeoutRef.current = setTimeout(() => {
          if (isMountedRef.current) {
            setTextVisible(true);
          }
        }, 150);
      }
    }, SLIDE_DURATION);

    return () => {
      if (autoAdvanceTimerRef.current) {
        clearTimeout(autoAdvanceTimerRef.current);
        autoAdvanceTimerRef.current = null;
      }
    };
  }, [currentIndex, isPaused]);

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
      className="relative w-full h-[100svh] min-h-[640px] sm:min-h-[680px] overflow-hidden bg-[#000000] select-none font-grotesque"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsFocused(true)}
      onBlurCapture={() => setIsFocused(false)}
      aria-roledescription="carousel"
      aria-label="MORFE Bedding Campaign Showcase"
    >
      {/* Smooth Crossfading Slide Images with Subtle Zoom Effect */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {HERO_SLIDES.map((slide, idx) => {
          const isCurrent = idx === currentIndex;

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out will-change-opacity ${
                isCurrent ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
              aria-hidden={!isCurrent}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className={`w-full h-full object-cover transition-transform duration-[6000ms] ease-out will-change-transform ${
                  isCurrent && !prefersReducedMotion ? 'scale-105' : 'scale-100'
                }`}
                style={{ objectPosition: slide.objectPosition || 'center center' }}
                loading={idx === 0 ? 'eager' : 'lazy'}
              />

              {/* Contrast Overlays for Consistent High-Legibility Typography */}
              <div className="absolute inset-0 bg-black/15 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/50 via-black/20 to-transparent pointer-events-none" />
            </div>
          );
        })}
      </div>

      {/* Campaign Copy & CTAs */}
      <div className="absolute bottom-16 sm:bottom-20 lg:bottom-20 left-4 sm:left-8 lg:left-[4.8vw] right-4 sm:right-auto z-30 max-w-xl lg:max-w-2xl pointer-events-auto">
        <div
          className="transition-all duration-500 ease-out"
          style={{
            opacity: textVisible ? 1 : 0,
            transform: textVisible ? 'translateY(0)' : 'translateY(12px)',
          }}
        >
          {/* Eyebrow Line */}
          <div className="inline-flex items-center space-x-2.5 mb-2 sm:mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E6EFB4] flex-shrink-0" />
            <span className="font-grotesque text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-white/90 font-medium">
              {currentSlide.eyebrow}
            </span>
          </div>

          {/* Main Campaign Headline in Awesome Serif */}
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

      {/* Progress Indicators (Automated 6-second fill, pause on hover/focus, no slide numbering or arrow buttons) */}
      <div 
        className="absolute bottom-5 sm:bottom-20 lg:bottom-20 right-4 sm:right-8 lg:right-[4.8vw] z-30 flex items-center space-x-2 pointer-events-auto"
        aria-label="Hero slide indicators"
      >
        {HERO_SLIDES.map((_, idx) => {
          const isCurrent = idx === currentIndex;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => goToSlide(idx)}
              className="group relative h-1 sm:h-1.5 w-10 sm:w-16 rounded-full bg-white/30 overflow-hidden transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label={`Go to slide ${idx + 1} of ${HERO_SLIDES.length}`}
              aria-current={isCurrent ? 'true' : undefined}
            >
              {isCurrent ? (
                <span
                  key={progressKey}
                  className={`absolute inset-0 w-full bg-white rounded-full ${
                    !prefersReducedMotion ? 'animate-hero-progress' : ''
                  }`}
                  style={{
                    animationPlayState: isPaused ? 'paused' : 'running',
                  }}
                />
              ) : (
                <span className="absolute inset-0 bg-transparent group-hover:bg-white/40 rounded-full transition-colors" />
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
};
