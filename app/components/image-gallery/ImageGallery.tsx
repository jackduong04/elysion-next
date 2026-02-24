'use client';

// Node modules
import Image from 'next/image';
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
} from 'react';
import { motion } from 'framer-motion';

type GalleryItem = {
  id: string;
  imageSrc: string;
  alt: string;
  caption?: string;
};

type ImageGalleryProps = {
  items: GalleryItem[];
  autoplayIntervalMs?: number;
  initialIndex?: number;
};

const repo = process.env.NEXT_PUBLIC_BASE_PATH;

const DEFAULT_INTERVAL = 3000;

const clampIndex = (value: number, max: number) =>
  Math.min(Math.max(value, 0), Math.max(max, 0));

const focusVariants = {
  active: { scale: 1.05, opacity: 1 },
  inactive: { scale: 0.92, opacity: 0.7 },
};

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(mediaQuery.matches);

    update();
    mediaQuery.addEventListener('change', update);
    return () => mediaQuery.removeEventListener('change', update);
  }, []);

  return reduced;
}

export default function ImageGallery({
  items,
  autoplayIntervalMs = DEFAULT_INTERVAL,
  initialIndex = 0,
}: ImageGalleryProps) {
  const clampedInitial = clampIndex(initialIndex, items.length - 1);
  const [currentIndex, setCurrentIndex] = useState(clampedInitial);
  const [userStopped, setUserStopped] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [sidePadding, setSidePadding] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();

  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const programmaticScrollUntil = useRef(0);

  const intervalMs = useMemo(
    () => Math.max(2600, autoplayIntervalMs || DEFAULT_INTERVAL),
    [autoplayIntervalMs],
  );

  const stopAutoplay = useCallback(() => {
    setUserStopped(true);
  }, []);

  const scrollToIndex = useCallback(
    (targetIndex: number, behavior: ScrollBehavior = 'smooth') => {
      const container = containerRef.current;
      const item = itemRefs.current[targetIndex];
      if (!container || !item) return;

      const containerRect = container.getBoundingClientRect();
      const itemRect = item.getBoundingClientRect();
      const offset =
        itemRect.left -
        containerRect.left -
        (containerRect.width / 2 - itemRect.width / 2);

      programmaticScrollUntil.current = performance.now() + 650;
      container.scrollTo({
        left: container.scrollLeft + offset,
        behavior,
      });
    },
    [],
  );

  const setFocusIndex = useCallback(
    (
      targetIndex: number,
      behavior: ScrollBehavior = 'smooth',
      fromUser = false,
    ) => {
      const clamped = clampIndex(targetIndex, items.length - 1);
      if (fromUser) {
        stopAutoplay();
      }
      setCurrentIndex(clamped);
      scrollToIndex(clamped, behavior);
    },
    [items.length, scrollToIndex, stopAutoplay],
  );

  const updateFocusFromScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container || items.length === 0) return;

    const containerRect = container.getBoundingClientRect();
    const centerX = containerRect.left + containerRect.width / 2;
    let nearestIndex = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    itemRefs.current.forEach((node, idx) => {
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const distance = Math.abs(rect.left + rect.width / 2 - centerX);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = idx;
      }
    });

    setCurrentIndex((prev) => (prev !== nearestIndex ? nearestIndex : prev));
  }, [items.length]);

  useEffect(() => {
    if (!items.length) return;
    setCurrentIndex(clampedInitial);
    scrollToIndex(clampedInitial, 'auto');
  }, [clampedInitial, items.length, scrollToIndex]);

  useEffect(() => {
    const updatePadding = () => {
      const container = containerRef.current;
      const firstItem = itemRefs.current[0];
      if (!container || !firstItem) return;
      const containerWidth = container.getBoundingClientRect().width;
      const itemWidth = firstItem.getBoundingClientRect().width;
      const padding = Math.max((containerWidth - itemWidth) / 2, 0);
      setSidePadding(padding);
    };

    updatePadding();
    const handleResize = () => updatePadding();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [items.length]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let frame = 0;
    const onScroll = () => {
      const now = performance.now();
      const isProgrammatic = now < programmaticScrollUntil.current;
      if (!isProgrammatic) {
        stopAutoplay();
      }
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateFocusFromScroll);
    };

    container.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      container.removeEventListener('scroll', onScroll);
    };
  }, [stopAutoplay, updateFocusFromScroll]);

  useEffect(() => {
    if (
      userStopped ||
      prefersReducedMotion ||
      isHovering ||
      items.length <= 1
    ) {
      return;
    }

    const id = window.setInterval(() => {
      const nextIndex = (currentIndex + 1) % items.length;
      setFocusIndex(nextIndex, 'smooth', false);
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [
    currentIndex,
    intervalMs,
    isHovering,
    items.length,
    prefersReducedMotion,
    setFocusIndex,
    userStopped,
  ]);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      setFocusIndex(currentIndex + 1, 'smooth', true);
    }
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      setFocusIndex(currentIndex - 1, 'smooth', true);
    }
  };

  const handleItemClick = (index: number) => {
    setFocusIndex(index, 'smooth', true);
  };

  const handleDotClick = (index: number) => {
    setFocusIndex(index, 'smooth', true);
  };

  const handleNavClick = (direction: 'next' | 'prev') => {
    const delta = direction === 'next' ? 1 : -1;
    const comingIndex = currentIndex + delta;
    if (comingIndex > items.length - 1) {
      setFocusIndex(0, 'smooth', true);
    } else if (comingIndex < 0) {
      setFocusIndex(items.length, 'smooth', true);
    } else {
      setFocusIndex(comingIndex, 'smooth', true);
    }
  };

  const onPointerInteract = () => stopAutoplay();

  if (!items.length) return null;

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Project image gallery"
      className={`
        space-y-6 rounded-3xl border border-elysion-olive/30 
        bg-[rgba(246,241,231,0.65)] p-4 shadow-lg sm:p-6
      `}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onFocusCapture={() => setIsHovering(true)}
      onBlurCapture={() => setIsHovering(false)}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="text-sm uppercase tracking-[0.28em] text-elysion-olive">
          Featured work
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => handleNavClick('prev')}
            onPointerDown={onPointerInteract}
            className={`
              rounded-full border border-elysion-olive bg-elysion-cream 
              px-3 py-2 text-sm font-semibold text-elysion-ink transition 
              hover:-translate-y-0.5 hover:shadow focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-offset-2 
              focus-visible:ring-elysion-gold uppercase
            `}
            aria-label="Previous image"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('next')}
            onPointerDown={onPointerInteract}
            className={`
              rounded-full border border-elysion-olive bg-elysion-cream 
              px-3 py-2 text-sm font-semibold text-elysion-ink transition 
              hover:-translate-y-0.5 hover:shadow focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-offset-2 
              focus-visible:ring-elysion-gold uppercase
            `}
            aria-label="Next image"
          >
            Next
          </button>
        </div>
      </div>

      <div
        ref={containerRef}
        className={`
          carousel-scroll relative flex snap-x snap-mandatory gap-6 
          overflow-x-auto pb-4 pt-2
        `}
        style={{
          paddingLeft: sidePadding,
          paddingRight: sidePadding,
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
        data-testid="image-gallery-track"
        role="group"
        aria-live="polite"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onPointerDown={onPointerInteract}
      >
        {items.map((item, index) => {
          const isActive = index === currentIndex;
          return (
            <motion.button
              type="button"
              key={item.id}
              ref={(node) => {
                itemRefs.current[index] = node;
              }}
              onClick={() => handleItemClick(index)}
              className={`
                group relative w-65 shrink-0 snap-center focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-elysion-gold sm:w-80 md:w-90
              `}
              initial={false}
              animate={isActive ? 'active' : 'inactive'}
              variants={focusVariants}
              transition={{ type: 'spring', stiffness: 260, damping: 30 }}
              aria-label={`View image ${index + 1} of ${items.length}`}
            >
              <div
                className={`
                  overflow-hidden rounded-2xl border border-elysion-olive/40 
                  bg-elysion-cream shadow-md
                `}
              >
                <div className="relative h-56 w-full sm:h-64 md:h-72">
                  <Image
                    src={`${repo}${item.imageSrc}`}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 260px, (max-width: 768px) 320px, 360px"
                    className={`
                      h-full w-full object-cover transition duration-500 
                      group-hover:scale-105
                    `}
                    priority={index === 0}
                  />
                </div>
                {item.caption && (
                  <div className="flex items-center px-4 py-3 text-left">
                    <p className="text-sm font-semibold text-elysion-ink">
                      {item.caption}
                    </p>
                  </div>
                )}
              </div>
            </motion.button>
          );
        })}
      </div>

      <div className="flex items-center justify-center gap-2">
        {items.map((item, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={`dot-${item.id}`}
              type="button"
              onClick={() => handleDotClick(index)}
              onPointerDown={onPointerInteract}
              className={`
                h-3 w-3 rounded-full transition focus-visible:outline-none 
                focus-visible:ring-2 focus-visible:ring-elysion-gold ${
                  isActive
                    ? 'bg-elysion-ink'
                    : 'bg-elysion-olive/40 hover:bg-elysion-olive'
                }
              `}
              aria-label={`Go to image ${index + 1} of ${items.length}`}
            />
          );
        })}
      </div>
      <style jsx>{`
        .carousel-scroll::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
