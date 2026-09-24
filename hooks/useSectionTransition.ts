"use client";

import { useEffect, useRef, useState } from "react";

export function useSectionTransition(
  sectionId: string,
  customRef?: React.RefObject<any>
) {
  const [isVisible, setIsVisible] = useState(false);
  const internalRef = useRef<any>(null);
  const elementRef = customRef || internalRef;

  useEffect(() => {
    let navTimer: ReturnType<typeof setTimeout> | null = null;
    let isNavigating = false;

    const getTarget = (): HTMLElement | null => {
      if (elementRef.current) return elementRef.current;
      if (typeof document !== "undefined") {
        return (
          document.getElementById(sectionId) ||
          document.querySelector(`[data-${sectionId}]`) ||
          document.querySelector(`[data-hgallery]`) ||
          null
        );
      }
      return null;
    };

    // Real-time position check on scroll to guarantee transition plays when content enters view
    const checkVisibility = () => {
      if (isNavigating) return;
      const el = getTarget();
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 800;

      // Trigger when element's top enters screen and hasn't completely scrolled away above
      const inView = rect.top < vh * 0.88 && rect.bottom > 60;
      setIsVisible(inView);
    };

    let observer: IntersectionObserver | null = null;
    const el = getTarget();
    if (el) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (isNavigating) return;
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            // Keep visible if currently inside or around viewport
            const rect = el.getBoundingClientRect();
            const vh = window.innerHeight || 800;
            if (rect.top < vh && rect.bottom > 0) {
              setIsVisible(true);
            } else {
              setIsVisible(false);
            }
          }
        },
        {
          threshold: 0.05,
          rootMargin: "50px 0px -5% 0px",
        }
      );
      observer.observe(el);
    }

    // Continuous scroll & resize listeners to catch all scrolling motions
    window.addEventListener("scroll", checkVisibility, { passive: true });
    window.addEventListener("resize", checkVisibility, { passive: true });

    // Custom navigation events from Nav clicks
    const handleNav = (e: Event) => {
      const customEvent = e as CustomEvent<{ targetId: string }>;
      if (customEvent.detail?.targetId === sectionId) {
        if (navTimer) clearTimeout(navTimer);
        isNavigating = true;
        setIsVisible(false);
        navTimer = setTimeout(() => {
          setIsVisible(true);
          isNavigating = false;
        }, 280);
      }
    };

    window.addEventListener("aeron:navigate", handleNav);

    // Initial checks (immediate and next tick for layout settling)
    checkVisibility();
    const rafId = requestAnimationFrame(checkVisibility);

    return () => {
      cancelAnimationFrame(rafId);
      if (observer) observer.disconnect();
      window.removeEventListener("scroll", checkVisibility);
      window.removeEventListener("resize", checkVisibility);
      window.removeEventListener("aeron:navigate", handleNav);
      if (navTimer) clearTimeout(navTimer);
    };
  }, [sectionId, elementRef]);

  return { isVisible, elementRef, sectionRef: elementRef };
}

