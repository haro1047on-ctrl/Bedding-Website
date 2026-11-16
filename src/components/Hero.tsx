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
    // Signature bedroom: Natural daylight, arched openings, warm oat linen
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=2400&q=85',
    alt: 'Serene sunlit bedroom with pure washed linen bedding in oat natural',
    objectPosition: 'center 45%',
  },
  {
    id: 'slide-02',
    eyebrow: 'MADE FOR THE WAY YOU WIND DOWN',
    headline: 'A softer kind of everyday.',
    primaryCtaText: 'DISCOVER OUR BED LINEN',
    secondaryCtaText: 'EXPLORE THE DETAILS',
    primaryAction: 'discover-linen',
    secondaryAction: 'explore-details',
    // Tactile texture: Visible fabric drape, stitching, warm sunlight
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=2400&q=85',
    alt: 'Close-up of tactile washed linen bedding showing natural texture, stitching and drape',
    objectPosition: 'center 50%',
  },
  {
    id: 'slide-03',
    eyebrow: 'MAKE SPACE FOR SLOWER MORNINGS',
    headline: 'Come home to comfort.',
    primaryCtaText: 'SHOP THE BEDROOM',
    secondaryCtaText: 'VIEW ALL BEDDING',
    primaryAction: 'shop-bedroom',
    secondaryAction: 'view-all',
    // Slow morning: Soft morning light across layered bedding
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=2400&q=85',
    alt: 'Calm morning bedroom with terracotta and chalk layered bedding in soft daylight',
    objectPosition: 'center 50%',
  },
];

interface HeroProps {
  onExploreCollection: () => void;
  onOpenMaterialStory?: () => void;
  onOpenBedroomLooks?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreCollection,
  onOpenMaterialStory,
  onOpenBedroomLooks,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [textVisible, setTextVisible] = useState(true);

  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Preload images
  useEffect(() => {
    HERO_SLIDES.forEach(slide => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  const goToSlide = useCallback((targetIndex: number, dir: 'next' | 'prev') => {
    if (isTransitioning || targetIndex === currentIndex) return;

    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
    }

    setDirection(dir);
    setPreviousIndex(currentIndex);
    setCurrentIndex(targetIndex);
    setIsTransitioning(true);
    setTextVisible(false);

    // Stagger text entrance
    setTimeout(() => {
      setTextVisible(true);
    }, 120);

    // 800ms transition duration
    transitionTimeoutRef.current = setTimeout(() => {
      setPreviousIndex(null);
      setIsTransitioning(false);
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

    // Horizontal swipe threshold: at least 40px and predominantly horizontal
    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) {
        handleNext(); // Swiped left -> advance next
      } else {
        handlePrev(); // Swiped right -> go prev
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
      className="relative w-full h-[100svh] min-h-[660px] sm:min-h-[680px] overflow-hidden bg-umber select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="Editorial Bedding Campaign Showcase"
    >
      {/* 
        Full-bleed Slide Images with Directional Horizontal Transitions
      */}
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
              {/* Campaign Bedroom Photography */}
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover text-transparent"
                style={{ objectPosition: slide.objectPosition || 'center center' }}
                loading={idx === 0 ? 'eager' : 'lazy'}
              />

              {/* Layer 2: Subtle full-image tonal tint for warm editorial unity */}
              <div className="absolute inset-0 bg-umber/15 mix-blend-multiply pointer-events-none" />

              {/* Layer 3: Restrained bottom-left gradient specifically supporting campaign typography */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />

              {/* Subtle top gradient to ensure transparent navigation remains crisp */}
              <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/45 via-black/15 to-transparent pointer-events-none" />
            </div>
          );
        })}
      </div>

      {/* 
        Bottom-Left Campaign Copy & CTAs
        Desktop left inset: 4.8vw, with comfortable breathing room from the bottom controls.
      */}
      <div className="absolute bottom-20 sm:bottom-24 lg:bottom-20 left-4 sm:left-8 lg:left-[4.8vw] z-30 max-w-[94vw] sm:max-w-xl lg:max-w-2xl pointer-events-auto">
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
          <div className="inline-flex items-center space-x-2.5 mb-2.5 sm:mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-oat flex-shrink-0" />
            <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-chalk/90 font-medium">
              {currentSlide.eyebrow}
            </span>
          </div>

          {/* Main Campaign Headline in Cormorant Garamond */}
          <h1 className="font-serif text-[2.2rem] sm:text-5xl lg:text-[3.5rem] text-chalk font-normal leading-[1.06] tracking-tight text-balance mb-5 sm:mb-8 drop-shadow-sm">
            {currentSlide.headline}
          </h1>

          {/* Two Refined Shopping CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2.5 sm:space-y-0 sm:space-x-4 pt-1">
            {/* Primary CTA */}
            <button
              type="button"
              onClick={() => handlePrimaryClick(currentSlide.primaryAction)}
              className="px-6 sm:px-8 py-3.5 sm:py-4 bg-chalk text-umber hover:bg-porcelain text-xs font-sans uppercase tracking-[0.2em] font-medium transition-all duration-200 flex items-center justify-center space-x-2 shadow-subtle group text-center rounded-sm"
            >
              <span>{currentSlide.primaryCtaText}</span>
              <ArrowRight className="w-3.5 h-3.5 text-umber/70 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Secondary CTA */}
            <button
              type="button"
              onClick={() => handleSecondaryClick(currentSlide.secondaryAction)}
              className="px-6 sm:px-8 py-3.5 sm:py-4 bg-transparent border border-chalk/65 text-chalk hover:bg-chalk/15 hover:border-chalk text-xs font-sans uppercase tracking-[0.2em] font-medium transition-all duration-200 flex items-center justify-center space-x-2 text-center rounded-sm"
            >
              <span>{currentSlide.secondaryCtaText}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 
        Slide Controls & Minimal Progress Indicator
        Responsive placement:
        - Mobile: sits neatly along the bottom edge (bottom-4) with full width
        - Desktop: sits aligned near the lower-right (bottom-20 right-[4.8vw])
      */}
      <div className="absolute bottom-5 sm:bottom-24 lg:bottom-20 left-4 right-4 sm:left-auto sm:right-8 lg:right-[4.8vw] z-30 flex items-center justify-between sm:justify-end sm:space-x-6 text-chalk pointer-events-auto">
        
        {/* Slide Counter: 01 / 03 */}
        <div className="font-sans text-xs tracking-widest text-chalk/80 tabular-nums font-medium" aria-live="polite">
          <span>0{currentIndex + 1}</span>
          <span className="mx-1 text-chalk/40">/</span>
          <span className="text-chalk/50">0{HERO_SLIDES.length}</span>
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
                idx === currentIndex ? 'w-8 sm:w-10 bg-chalk' : 'w-4 sm:w-6 bg-chalk/30 hover:bg-chalk/50'
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
            className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border border-chalk/30 hover:border-chalk hover:bg-chalk/15 active:scale-95 transition-all rounded-sm text-chalk disabled:opacity-40"
            aria-label="Previous slide"
          >
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[1.5]" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            disabled={isTransitioning}
            className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border border-chalk/30 hover:border-chalk hover:bg-chalk/15 active:scale-95 transition-all rounded-sm text-chalk disabled:opacity-40"
            aria-label="Next slide"
          >
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[1.5]" />
          </button>
        </div>

      </div>
    </section>
  );
};
