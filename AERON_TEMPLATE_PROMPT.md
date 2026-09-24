## Environment

This template is structured for a Next.js 15 project with the App Router:

- File paths use /components/..., /hooks/..., /lib/..., and /app/... (project root, no /src)
- Components use the "use client" directive where client-side interactivity is required
- Imports use the @/... path alias (e.g. @/components/..., @/lib/...), mapped to the project root in tsconfig.json
- Tailwind CSS (v4, CSS-first config via @theme — there is NO tailwind.config.js)
- lenis for smooth momentum scrolling (no GSAP, no Framer Motion — all animation is CSS transitions + requestAnimationFrame)
- Fonts: Archivo + IBM Plex Mono via next/font/google
- All media assets (images and videos) are remote — Cloudinary (videos) and GitHub Raw CDN (images). No local media files are required.

If you support this exact structure, apply the files below as written.

If your builder uses a different structure (e.g. /src directory, Pages Router, or Vite + React), adapt the file paths and entry point — but keep every component file's CODE 100% IDENTICAL to what's provided below. Do not rewrite, refactor, or reinterpret any component.

The only adaptations allowed are:
- File paths (e.g. /src/components/... instead of /components/...)
- Entry point file (e.g. src/App.tsx instead of app/page.tsx)
- Removing "use client" directives if your builder doesn't use Next.js
- Replacing the @/... alias with the correct relative path
- Replacing next/font/google with an equivalent Google Fonts <link> for Archivo (400–800) and IBM Plex Mono (400, 500) only if your builder doesn't support Next.js — keep the CSS variable names --font-archivo and --font-ibm-plex-mono
- Installing any missing dependencies via your builder's package manager before applying the files

Everything else — JSX, hooks, component names, exports, props, className values, inline styles, animations, styling, and logic — stays exactly as written. The output must run without any errors.

---

## Add Template: AERON ARC — Sound, Reimagined Landing Page

A 12-section dark/light editorial landing page for wireless earbuds: Hero (video) → Product → Experience → Technology (spatial canvas) → Engineering → Exploded View (scroll-driven disassembly, 8 parts) → Power → Intelligence → Gallery (horizontal scroll) → Finishes → Final CTA → Footer, plus a pill nav with active-section highlight, mobile drawer menu, cart drawer, custom cursor and scroll progress bar.

### Responsive behaviour (built in — do not change)

The layout is fully responsive using Tailwind's DEFAULT breakpoints. Do not customise or override them:

| Breakpoint | Min width | What changes |
|---|---|---|
| (base) | 0px | Mobile: single column, hamburger → full-screen drawer menu, "BUY ARC" short label, stacked CTAs, Exploded View uses the narrow vertical layout |
| sm | 640px | Larger type/spacing, "BUY AERON ARC" full label, CTAs side by side |
| md | 768px | Tablet: still hamburger + drawer menu, 12-col grids start, larger section heights |
| lg | 1024px | Desktop: pill nav appears (hamburger hidden), side-by-side section layouts, full section heights |
| xl | 1280px | Wide desktop spacing, wider nav link padding |

- Exploded View switches between its narrow (vertical) and wide (diagonal) layouts in JavaScript at window.innerWidth < 900.
- Horizontal gutter everywhere is the `px-gutter` token = clamp(16px, 4vw, 56px).
- Content max width is 1424px (Finishes: 1560px), centred.
- There must be no horizontal page scroll at any width (body has overflow-x: hidden).

---

### File 1 of 18: /lib/content.ts

```tsx
export const ASSET_BASE = "https://raw.githubusercontent.com/munjurulahsan/asset/main/cloud_assets-1";

export const media = {
  heroVideo: "https://res.cloudinary.com/xtd9beug/video/upload/v1789757700/hero1.mp4",
  section2Video: "https://res.cloudinary.com/xtd9beug/video/upload/v1789757680/Section2_Buds.mp4",
  section3Video: "https://res.cloudinary.com/xtd9beug/video/upload/v1789757658/section3.mp4",
  heroProduct: `${ASSET_BASE}/dcc96ccf-fa35-4c71-a5a4-0c1e2ae2607c.jpg`,
  heroBg: `${ASSET_BASE}/096c8515-c4be-4524-a90d-678c13bfde2d.jpg`,
  techCase: `${ASSET_BASE}/ed05537a-9453-422b-9f08-258b3a2a19d6.jpg`,
  finishObsidian: `${ASSET_BASE}/dcc96ccf-fa35-4c71-a5a4-0c1e2ae2607c.jpg`,
  lifestyle1: `${ASSET_BASE}/35dd1095-6232-46ed-97ff-c4e80a85810f.jpg`,
  lifestyle2: `${ASSET_BASE}/158ab694-41c6-4334-bb1d-801f1d85fc82.jpg`,
  lifestyle3: `${ASSET_BASE}/ed05537a-9453-422b-9f08-258b3a2a19d6.jpg`,
  lifestyle4: `${ASSET_BASE}/096c8515-c4be-4524-a90d-678c13bfde2d.jpg`,
  chargingPod: `${ASSET_BASE}/charging-pod-open.png`,
  precisionBg: `${ASSET_BASE}/precision-bg.jpg`,
  precisionMacro: `${ASSET_BASE}/precision-macro.png`,
  spatialEngineBg: `${ASSET_BASE}/spatial-engine-bg.png`,
  finalCtaBg: `${ASSET_BASE}/final-cta-bg.png`,
};

export const PART_BOUNDS: Record<string, { w: number; h: number; x0: number; x1: number; y0: number; y1: number }> = {
  "part-01-master": { w: 1374, h: 1145, x0: 0.1182, x1: 0.8955, y0: 0.0773, y1: 0.9227 },
  "part-02-shell": { w: 1374, h: 1145, x0: 0.0909, x1: 0.9136, y0: 0.0591, y1: 0.9636 },
  "part-03-chamber": { w: 1374, h: 1145, x0: 0.1045, x1: 0.8955, y0: 0.0773, y1: 0.9091 },
  "part-04-driver": { w: 1374, h: 1145, x0: 0.1, x1: 0.9, y0: 0.1227, y1: 0.8773 },
  "part-05-mesh": { w: 1374, h: 1145, x0: 0.2, x1: 0.8136, y0: 0.05, y1: 0.8818 },
  "part-06-logic": { w: 1374, h: 1145, x0: 0.1091, x1: 0.9364, y0: 0.0864, y1: 0.8636 },
  "part-07-sensor": { w: 1374, h: 1145, x0: 0.1591, x1: 0.8773, y0: 0.0909, y1: 0.9182 },
  "part-08-base": { w: 1374, h: 1145, x0: 0.1136, x1: 0.9091, y0: 0.0727, y1: 0.9 },
  "part-09-tip": { w: 1374, h: 1145, x0: 0.1273, x1: 0.9091, y0: 0.1364, y1: 0.85 },
};

export const explodedParts = [
  { id: 0, bounds: "part-02-shell", src: `${ASSET_BASE}/30784b6f-e07a-4b23-b16c-e8a0a78af3b9.png`, title: "Outer ceramic shell", desc: "STRUCTURAL PROTECTION" },
  { id: 1, bounds: "part-03-chamber", src: `${ASSET_BASE}/2ba25db9-2300-4935-938a-c394ff8c26b6.png`, title: "Acoustic chamber", desc: "SEALED TITANIUM VOLUME" },
  { id: 2, bounds: "part-04-driver", src: `${ASSET_BASE}/b2d8c861-59ed-4edd-9cfe-bb78be958792.png`, title: "Adaptive driver", desc: "11 MM DUAL DIAPHRAGM" },
  { id: 3, bounds: "part-05-mesh", src: `${ASSET_BASE}/2fa07885-37ee-466f-9559-d79f7e757374.png`, title: "Acoustic mesh", desc: "PARTICULATE BARRIER" },
  { id: 4, bounds: "part-06-logic", src: `${ASSET_BASE}/f0ba48ac-c459-4bb1-97da-7a098e8dcc38.png`, title: "Logic core", desc: "SPATIAL DSP AND CELL" },
  { id: 5, bounds: "part-07-sensor", src: `${ASSET_BASE}/05c2c7e8-beac-4659-970c-56641d0fbd55.png`, title: "Sensor array", desc: "SIX-AXIS AND OPTICAL" },
  { id: 6, bounds: "part-08-base", src: `${ASSET_BASE}/06ad4e13-5264-41f0-ae03-62ec81d67a3f.png`, title: "Inner structural base", desc: "CHASSIS AND CONTACTS" },
  { id: 7, bounds: "part-09-tip", src: `${ASSET_BASE}/f0d13287-de80-40ff-94de-1939ea787f08.png`, title: "Inner acoustic assembly", desc: "NOZZLE AND EAR-TIP SEAL" },
];

export const masterPart = {
  bounds: "part-01-master",
  src: `${ASSET_BASE}/e101e626-b052-4232-b3be-8c809b43b9cc.png`,
  alt: "AERON ARC, fully assembled",
};

export const FINISHES = [
  { name: "Obsidian", filter: "none", note: "Matte ceramic with a brushed titanium seam. The original ARC." },
  { name: "Mist", filter: "brightness(1.45) contrast(.82) saturate(.25)", note: "Cool pale composite that reads almost white in daylight." },
  { name: "Titanium", filter: "sepia(.28) brightness(1.18) contrast(1.04) hue-rotate(-12deg)", note: "Bare alloy shell, hand-polished, warmer under low light." },
];

export const navLinks = [
  { href: "#product", label: "PRODUCT" },
  { href: "#experience", label: "EXPERIENCE" },
  { href: "#technology", label: "TECHNOLOGY" },
  { href: "#engineering", label: "ENGINEERING" },
  { href: "#battery", label: "POWER" },
  { href: "#finishes", label: "FINISHES" },
];

export const gallerySlides = [
  { id: "01", tag: "MORNING", title: "Commute in absolute silence.", img: `${ASSET_BASE}/35dd1095-6232-46ed-97ff-c4e80a85810f.jpg` },
  { id: "02", tag: "MOVEMENT", title: "Locked in place. Defying gravity.", img: `${ASSET_BASE}/158ab694-41c6-4334-bb1d-801f1d85fc82.jpg` },
  { id: "03", tag: "FOCUS", title: "Zero distractions in deep studio flow.", img: `${ASSET_BASE}/ed05537a-9453-422b-9f08-258b3a2a19d6.jpg` },
  { id: "04", tag: "NIGHT", title: "Warm timbre under ambient glow.", img: `${ASSET_BASE}/096c8515-c4be-4524-a90d-678c13bfde2d.jpg` },
  { id: "05", tag: "IMMERSION", title: "Spatial cinema right in your ears.", img: `${ASSET_BASE}/35dd1095-6232-46ed-97ff-c4e80a85810f.jpg` },
];
```

### File 2 of 18: /hooks/useSectionTransition.ts

```tsx
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
```

### File 3 of 18: /components/Nav.tsx

```tsx
"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/lib/content";

type Props = {
  cartCount: number;
  onOpenCart: () => void;
};

export function Nav({ cartCount, onOpenCart }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      setScrolled(y > 30);

      // Determine active section for menu bar highlighting
      const sections = ["product", "experience", "technology", "engineering", "battery", "finishes"];
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 220 && rect.bottom >= 60) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href === "#top") {
      if (typeof window !== "undefined" && (window as any).__lenis) {
        (window as any).__lenis.scrollTo(0, { duration: 1 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      const targetId = href.replace("#", "");
      // Notify section to prepare and trigger bottom-to-top transition
      window.dispatchEvent(new CustomEvent("aeron:navigate", { detail: { targetId } }));

      if (typeof window !== "undefined" && (window as any).__lenis) {
        (window as any).__lenis.scrollTo(target, {
          offset: -80,
          duration: 1.1,
        });
      } else {
        const offset = 80;
        const elementPos = target.getBoundingClientRect().top;
        const offsetPos = elementPos + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPos,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <>
      <header
        data-nav
        className={`fixed left-0 right-0 top-0 z-[80] flex items-center justify-between pointer-events-none px-gutter transition-all duration-300 ${
          scrolled
            ? "h-[68px] md:h-[76px] bg-[#080808]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] text-[#F4F3EF]"
            : "h-[76px] md:h-[90px] bg-transparent border-b border-transparent text-[#F4F3EF]"
        }`}
      >
        {/* Left: AERON Branding */}
        <div className="flex items-center gap-3 pointer-events-auto">
          <a
            href="#top"
            onClick={(e) => handleNavClick(e, "#top")}
            data-cursor="TOP"
            className="flex items-center gap-2 font-sans font-extrabold text-[17px] sm:text-[19px] tracking-[0.26em] leading-none uppercase text-[#F4F3EF] hover:opacity-85 transition-opacity"
          >
            <span>AERON</span>
            <span className="hidden sm:inline-block h-1.5 w-1.5 rounded-full bg-[#D8FF3E] animate-aeron-pulse" />
          </a>
        </div>

        {/* Center: Desktop Menu Bar (Pill Capsule) */}
        <nav className="hidden pointer-events-auto lg:flex items-center gap-1 rounded-full bg-white/[0.05] p-1.5 border border-white/[0.08] backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                data-cursor="VIEW"
                className={`relative flex items-center gap-1.5 rounded-full px-3 xl:px-4 py-1.5 font-mono text-[10.5px] tracking-[0.18em] uppercase transition-all duration-200 ${
                  isActive
                    ? "bg-[#D8FF3E]/15 text-[#D8FF3E] font-semibold border border-[#D8FF3E]/30 shadow-[0_0_10px_rgba(216,255,62,0.15)]"
                    : "text-[#B9BCC0] hover:text-[#F4F3EF] hover:bg-white/[0.06] border border-transparent"
                }`}
              >
                {isActive && (
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D8FF3E] animate-aeron-pulse" />
                )}
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right: Actions (Cart Button + Mobile Toggle) */}
        <div className="pointer-events-auto flex items-center gap-2.5 sm:gap-3">
          <button
            type="button"
            onClick={onOpenCart}
            data-cursor="OPEN"
            data-magnetic
            className="group flex flex-shrink-0 items-center gap-2.5 rounded-full border border-white/20 bg-white/[0.04] px-4 sm:px-5 py-[8px] sm:py-[9px] font-mono text-[10.5px] sm:text-[11px] tracking-[0.16em] text-[#F4F3EF] backdrop-blur-sm transition-all duration-300 hover:border-[#D8FF3E] hover:bg-[#D8FF3E]/10 hover:text-[#D8FF3E] active:scale-[0.98]"
          >
            <span className="hidden sm:inline">BUY AERON ARC</span>
            <span className="sm:hidden">BUY ARC</span>
            <span
              data-cart-count
              className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[10px] font-bold tabular-nums text-[#F4F3EF] group-hover:bg-[#D8FF3E] group-hover:text-[#080808] transition-colors"
            >
              {cartCount > 0 ? cartCount : 1}
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex lg:hidden items-center justify-center h-9 w-9 rounded-full border border-white/20 bg-white/[0.04] text-[#F4F3EF] transition-colors hover:border-[#D8FF3E]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <span className="font-mono text-[12px] font-bold">✕</span>
            ) : (
              <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[75] flex flex-col justify-between bg-[#080808]/95 backdrop-blur-2xl px-gutter pt-24 pb-10 text-[#F4F3EF] lg:hidden animate-in fade-in duration-200">
          <div className="flex flex-col gap-5">
            <span className="font-mono text-[10px] tracking-[0.24em] text-[#D8FF3E] uppercase">
              NAVIGATION
            </span>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between font-sans text-2xl font-bold tracking-tight py-2 transition-colors ${
                    isActive ? "text-[#D8FF3E]" : "text-[#F4F3EF] hover:text-[#D8FF3E]"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="h-2 w-2 rounded-full bg-[#D8FF3E] animate-aeron-pulse" />
                  )}
                </a>
              );
            })}
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col gap-4 font-mono text-xs text-[#B9BCC0]">
            <div className="flex justify-between items-center">
              <span>AERON ARC / GEN 01</span>
              <span className="text-[#D8FF3E]">$249</span>
            </div>
            <div className="text-[10px] opacity-60">PRECISION-ENGINEERED WIRELESS AUDIO</div>
          </div>
        </div>
      )}
    </>
  );
}
```

### File 4 of 18: /components/Hero.tsx

```tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { media } from "@/lib/content";

type HeroProps = {
  onAddToCart?: () => void;
};

export function Hero({ onAddToCart }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 60);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="top"
      data-theme="dark"
      className="relative flex min-h-svh w-full flex-col justify-between overflow-hidden bg-[#080808] px-gutter pb-6 sm:pb-8 md:pb-12 pt-[clamp(80px,12vh,140px)] text-[#F4F3EF]"
    >
      {/* Background Cloudinary Video */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover filter brightness-[0.78] contrast-[1.08]"
        >
          <source src={media.heroVideo} type="video/mp4" />
        </video>

        {/* Figma Radial Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(70% 55% at 50% 52%, rgba(8,8,8,0) 0%, rgba(8,8,8,0.72) 70%, #080808 100%)",
          }}
        />

        {/* Subtle Top & Bottom Linear Shading */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/60 via-transparent to-[#080808]" />
      </div>

      {/* Main Headline Group (Unified with controlled, tighter spacing) */}
      <div
        className={`relative z-10 my-auto flex w-full flex-col select-none py-2 md:py-4 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] ${
          isVisible
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-16 opacity-0 scale-[0.97]"
        }`}
      >
        {/* Line 1: SOUND, (Left-aligned) */}
        <div data-hero-type="left" className="w-full">
          <h1 className="m-0 font-sans text-[clamp(2.4rem,8.8vw,10.5rem)] font-extrabold uppercase leading-[0.85] tracking-[-0.045em] text-[#F4F3EF]">
            SOUND,
          </h1>
        </div>

        {/* Line 2: REIMAGINED. (Close spacing to Line 1 + offset horizontally to x=527px) */}
        <div
          data-hero-type="right"
          className="mt-2 sm:mt-[clamp(8px,2.5vw,36px)] md:ml-[clamp(40px,28vw,470px)]"
        >
          <h2 className="m-0 font-sans text-[clamp(2.4rem,8.8vw,10.5rem)] font-extrabold uppercase leading-[0.85] tracking-[-0.045em] text-[#F4F3EF]">
            REIMAGINED.
          </h2>
        </div>
      </div>

      {/* Bottom Row: Meta, CTAs & Scroll Indicator */}
      <div
        className={`relative z-10 mt-auto flex w-full flex-wrap items-end justify-between gap-5 sm:gap-7 pt-4 transition-all duration-1000 delay-150 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] ${
          isVisible
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-16 opacity-0 scale-[0.97]"
        }`}
      >
        {/* Left Column */}
        <div className="flex max-w-[420px] flex-col gap-[22px]">
          {/* Status Row */}
          <div className="flex items-center gap-[10px] font-mono text-[10.5px] font-normal tracking-[0.2em] text-[#B9BCC0] uppercase">
            <span className="h-[6px] w-[6px] rounded-full bg-[#D8FF3E] animate-aeron-pulse shadow-[0_0_8px_rgba(216,255,62,0.8)]" />
            <span>SPATIAL AUDIO</span>
            <span className="h-[1px] w-[26px] bg-[#B9BCC0]/40" />
            <span className="text-[#F4F3EF]">ACTIVE</span>
          </div>

          {/* Description Paragraph */}
          <p className="m-0 max-w-[330px] font-sans text-[14px] leading-[1.65] text-[#B9BCC0]">
            Precision-engineered spatial audio. Designed to disappear into your world.
          </p>

          {/* Action Buttons Row */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#product"
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent("aeron:navigate", { detail: { targetId: "product" } }));
                const target = document.querySelector("#product");
                if (target) {
                  if (typeof window !== "undefined" && (window as any).__lenis) {
                    (window as any).__lenis.scrollTo(target, { offset: -80, duration: 1.1 });
                  } else {
                    target.scrollIntoView({ behavior: "smooth" });
                  }
                }
              }}
              data-cursor="EXPLORE"
              data-magnetic
              className="inline-flex items-center justify-center rounded-full bg-[#F4F3EF] px-[26px] py-[15px] font-mono text-[11px] font-medium tracking-[0.16em] text-[#080808] transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              EXPLORE AERON ARC
            </a>
            <button
              type="button"
              onClick={onAddToCart}
              data-cursor="OPEN"
              data-magnetic
              className="inline-flex cursor-pointer items-center justify-center rounded-full border border-[#F4F3EF]/35 bg-transparent px-[26px] py-[15px] font-mono text-[11px] font-normal tracking-[0.16em] text-[#F4F3EF] transition-all duration-200 hover:border-[#F4F3EF] hover:bg-[#F4F3EF]/10 active:scale-[0.98]"
            >
              BUY NOW — $249
            </button>
          </div>
        </div>

        {/* Right Column: Scroll Indicator */}
        <div className="flex flex-col items-end gap-[10px] text-right font-mono text-[10px] tracking-[0.2em] text-[#B9BCC0]/60 uppercase">
          <span>ARC / GEN 01</span>
          <span>SCROLL TO BEGIN</span>
          <span className="h-[46px] w-[1px] bg-gradient-to-b from-[#F4F3EF]/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}
```

### File 5 of 18: /components/Product.tsx

```tsx
"use client";

import { media } from "@/lib/content";
import { useSectionTransition } from "@/hooks/useSectionTransition";

const FEATURES = [
  {
    num: "01",
    title: "ARCHITECTURAL\nFORM",
    desc: "A single continuous surface, shaped to vanish against the ear.",
  },
  {
    num: "02",
    title: "PRECISION\nACOUSTICS",
    desc: "A sealed titanium chamber tuned across the full audible band.",
  },
  {
    num: "03",
    title: "ADAPTIVE\nFIT",
    desc: "Four silicone densities. Pressure that never announces itself.",
  },
  {
    num: "04",
    title: "SPATIAL\nENGINE",
    desc: "Head-tracked rendering at 96 kHz, recalculated 1,000× a second.",
  },
];

export function Product() {
  const { isVisible, sectionRef } = useSectionTransition("product");

  return (
    <section
      id="product"
      data-theme="dark"
      className="relative scroll-mt-20 md:scroll-mt-24 overflow-hidden bg-[#0C0C0C] px-gutter py-12 sm:py-16 md:py-20 lg:py-28 text-[#F4F3EF]"
    >
      <div
        ref={sectionRef}
        className={`mx-auto max-w-[1424px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] ${
          isVisible
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-16 opacity-0 scale-[0.98]"
        }`}
      >
        {/* Eyebrow Meta: 02 —— PRODUCT */}
        <div className="mb-4 sm:mb-6 md:mb-8 flex items-center gap-[14px]">
          <span className="font-mono text-[10.5px] font-normal tracking-[0.22em] text-[#D8FF3E]">
            02
          </span>
          <span className="h-[1px] w-[54px] bg-[#D8FF3E]/50" />
          <span className="font-mono text-[10.5px] font-normal tracking-[0.22em] text-[#B9BCC0] uppercase">
            PRODUCT
          </span>
        </div>

        {/* Section Headline & Description */}
        <div className="w-full">
          <h2 className="m-0 font-sans text-[clamp(2.4rem,7vw,8rem)] font-extrabold uppercase leading-[0.88] tracking-[-0.045em] text-[#F4F3EF]">
            NOT JUST
            <br />
            SOUND.
          </h2>
          <p className="mt-4 sm:mt-5 max-w-[430px] font-sans text-[13px] sm:text-[14px] font-normal leading-[1.65] text-[#B9BCC0]">
            AERON ARC is engineered around the way you actually experience sound — not around a spec sheet.
          </p>
        </div>

        {/* Middle Video Container (Using existing Section 2 video) */}
        <div className="relative my-6 sm:my-8 md:my-12 aspect-[16/10] sm:aspect-[16/9] w-full max-h-[672px] overflow-hidden rounded-[16px] md:rounded-[24px] bg-[#151515]">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="h-full w-full object-cover"
          >
            <source src={media.section2Video} type="video/mp4" />
          </video>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/70 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 font-mono text-[9px] sm:text-[10.5px] tracking-[0.2em] text-[#D8FF3E]">
            FIG 02.1 — ACTIVE TRANSDUCER
          </div>
        </div>

        {/* 4-Feature Cards Grid with 1px hairline dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#F4F3EF]/10 border border-[#F4F3EF]/10">
          {FEATURES.map((item) => (
            <div
              key={item.num}
              className="flex flex-col justify-between bg-[#0C0C0C] p-[22px] pt-[26px] pb-[30px]"
            >
              <div>
                <div className="mb-4 font-mono text-[10.5px] font-normal tracking-[0.2em] text-[#D8FF3E]">
                  {item.num}
                </div>
                <div className="font-sans text-[15px] font-bold uppercase leading-[1.25] tracking-[0.02em] text-[#F4F3EF] whitespace-pre-line">
                  {item.title}
                </div>
              </div>
              <p className="mt-[14px] font-sans text-[12.5px] font-normal leading-[1.65] text-[#B9BCC0]/85">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### File 6 of 18: /components/Experience.tsx

```tsx
"use client";

import { media } from "@/lib/content";
import { useSectionTransition } from "@/hooks/useSectionTransition";

export function Experience() {
  const { isVisible, sectionRef } = useSectionTransition("experience");

  return (
    <section
      id="experience"
      data-theme="dark"
      className="relative scroll-mt-20 md:scroll-mt-24 overflow-hidden bg-[#080808] px-gutter py-12 sm:py-16 md:py-20 lg:py-28 text-[#F4F3EF]"
    >
      <div
        ref={sectionRef}
        className={`relative mx-auto min-h-[440px] h-[65svh] sm:h-[75svh] md:h-[clamp(520px,85svh,940px)] max-h-[940px] w-full overflow-hidden rounded-2xl sm:rounded-3xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] ${
          isVisible
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-16 opacity-0 scale-[0.98]"
        }`}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover filter brightness-[0.75] contrast-[1.1]"
        >
          <source src={media.section3Video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#080808_100%)]" />

        <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-10 md:p-14">
          <span className="font-mono text-[10.5px] sm:text-[11px] tracking-[0.24em] text-[#D8FF3E] uppercase">
            03 EXPERIENCE
          </span>

          <div className="max-w-[700px]">
            <h2 className="font-sans text-[clamp(28px,5vw,78px)] font-black tracking-[-0.03em] leading-[0.94] uppercase">
              Lose yourself <br />
              <span className="font-serif font-light italic">in the sound.</span>
            </h2>
            <p className="mt-6 font-mono text-sm leading-relaxed text-mute">
              EVERY DETAIL. EVERY LAYER. EVERY MOMENT. Sound should feel closer, deeper, and more immersive — as though it were never transmitted at all.
            </p>
          </div>

          <div className="font-mono text-[10px] tracking-[0.2em] text-mute uppercase">
            IMMERSIVE CINEMATIC FIELD // 360° SPHERICAL
          </div>
        </div>
      </div>
    </section>
  );
}
```

### File 7 of 18: /components/Technology.tsx

```tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { media } from "@/lib/content";
import { useSectionTransition } from "@/hooks/useSectionTransition";

export function Technology() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);
  const { isVisible, elementRef: contentRef } = useSectionTransition("technology");

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = containerRef.current;
    const bg = bgRef.current;
    if (!canvas || !host) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let cw = (canvas.width = host.offsetWidth);
    let ch = (canvas.height = host.offsetHeight);
    let fieldScale = 1;
    let t = 0;
    let mouse = { x: 0.5, y: 0.5 };
    let raf: number;

    const onResize = () => {
      if (!canvas || !host) return;
      cw = canvas.width = host.offsetWidth;
      ch = canvas.height = host.offsetHeight;
    };
    window.addEventListener("resize", onResize);

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX / window.innerWidth;
      mouse.y = e.clientY / window.innerHeight;

      // Smooth subtle parallax on the Figma hero background image
      if (bg) {
        const dx = (e.clientX / window.innerWidth - 0.5) * 14;
        const dy = (e.clientY / window.innerHeight - 0.5) * 10;
        bg.style.transform = `scale(1.05) translate3d(${dx}px, ${dy}px, 0)`;
      }
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    const frame = () => {
      const vh = window.innerHeight;
      const r = host.getBoundingClientRect();
      if (r.bottom > -200 && r.top < vh + 200) {
        t += 0.006;
        const sp = Math.min(Math.max((vh - r.top) / (vh + r.height), 0), 1);
        fieldScale += (0.62 + sp * 0.55 - fieldScale) * 0.06;
        ctx.clearRect(0, 0, cw, ch);

        const cx2 = cw / 2 + (mouse.x - 0.5) * cw * 0.12;
        const cy2 = ch / 2 + (mouse.y - 0.5) * ch * 0.09;
        const tilt = 0.3 + (mouse.y - 0.5) * 0.2;
        const rings = 26;

        for (let i = 0; i < rings; i++) {
          const k = i / rings;
          const rad = (36 + k * Math.min(cw, ch) * 1.25) * fieldScale;
          ctx.beginPath();
          for (let a = 0; a <= 64; a++) {
            const ang = (a / 64) * Math.PI * 2;
            const warp = Math.sin(ang * 3 + t * 2.2 + i * 0.35) * (5 + k * 20);
            const px = cx2 + Math.cos(ang) * (rad + warp);
            const py = cy2 + Math.sin(ang) * (rad + warp) * tilt;
            if (a === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.closePath();
          const fade = (1 - k) * 0.25;
          if (i === 6) {
            ctx.globalAlpha = Math.min(1, fade * 1.8);
            ctx.strokeStyle = "#D8FF3E";
            ctx.lineWidth = 1.4;
          } else {
            ctx.globalAlpha = 1;
            ctx.strokeStyle = `rgba(244,243,239,${fade.toFixed(3)})`;
            ctx.lineWidth = 0.7;
          }
          ctx.stroke();
        }
        ctx.globalAlpha = 1;
      }
      raf = requestAnimationFrame(frame);
    };

    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <section
      id="technology"
      data-theme="dark"
      ref={containerRef}
      className="relative scroll-mt-20 md:scroll-mt-24 min-h-[460px] sm:min-h-[540px] md:min-h-[620px] lg:h-[712px] overflow-hidden bg-[#080808] px-gutter py-12 sm:py-16 md:py-20 lg:py-[clamp(48px,8vh,84px)] text-[#F4F3EF] flex flex-col justify-between"
    >
      {/* Figma Exact Background Image (Node 1:265) */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <img
          ref={bgRef}
          src={media.spatialEngineBg}
          alt="AERON ARC Spatial Engine"
          className="h-full w-full object-cover object-center scale-105 transition-transform duration-300 ease-out"
        />
        {/* Subtle Vignette Overlays matching Figma */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/70 via-transparent to-[#080808]/70" />
      </div>

      {/* Interactive Sound-Wave Canvas Layer */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-[1] h-full w-full opacity-60 mix-blend-screen"
      />

      {/* Content Container (Figma Node 1:266) */}
      <div
        ref={contentRef}
        className={`relative z-[2] mx-auto flex h-full w-full max-w-[1424px] flex-col justify-between transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] ${
          isVisible
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-16 opacity-0 scale-[0.98]"
        }`}
      >
        {/* Top Block: Eyebrow + 3-line Stacked Headline */}
        <div>
          {/* Eyebrow Meta: 04 —— SPATIAL ENGINE */}
          <div className="flex items-center gap-[14px]">
            <span className="font-mono text-[10.5px] font-normal tracking-[0.22em] text-[#D8FF3E]">
              04
            </span>
            <span className="h-[1px] w-[54px] bg-[#B9BCC0]/40" />
            <span className="font-mono text-[10.5px] font-normal tracking-[0.22em] text-[#B9BCC0] uppercase">
              SPATIAL ENGINE
            </span>
          </div>

          {/* Headline (Figma Node 1:276 - exactly 532px max width) */}
          <div className="mt-5 sm:mt-7 md:mt-[34px] max-w-[532px]">
            <h2 className="m-0 font-sans text-[clamp(32px,5.8vw,96px)] font-extrabold uppercase leading-[1.08] tracking-[-0.05em] text-[#F4F3EF]">
              SOUND
              <br />
              WITHOUT
              <br />
              DIRECTION.
            </h2>
          </div>
        </div>

        {/* Bottom Block: Description + Move Cursor Hint */}
        <div className="flex flex-wrap items-end justify-between gap-4 sm:gap-6 pt-6 sm:pt-8">
          <p className="m-0 max-w-[400px] font-sans text-[13px] sm:text-[14px] font-normal leading-[1.65] text-[#B9BCC0]">
            AERON ARC creates a dimensional soundstage that responds naturally to your movement. Turn your head and the room stays where it is.
          </p>

          <div className="font-mono text-[9.5px] sm:text-[10px] font-normal uppercase leading-[1.8] sm:leading-[2.1] tracking-[0.18em] text-[#B9BCC0]/60 sm:text-right">
            MOVE YOUR CURSOR
            <br />
            TO SHIFT THE FIELD
          </div>
        </div>
      </div>
    </section>
  );
}
```

### File 8 of 18: /components/Precision.tsx

```tsx
"use client";

import { media } from "@/lib/content";
import { useSectionTransition } from "@/hooks/useSectionTransition";

export function Precision() {
  const { isVisible, sectionRef } = useSectionTransition("engineering");

  return (
    <section
      id="engineering"
      data-theme="dark"
      className="relative scroll-mt-20 md:scroll-mt-24 overflow-hidden bg-[#151515] px-gutter py-12 sm:py-16 md:py-20 lg:py-24 lg:min-h-[875px] text-[#F4F3EF]"
    >
      {/* Background Architectural Ray / Stage Image from Figma */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <img
          src={media.precisionBg}
          alt=""
          className="h-full w-full object-cover object-center opacity-40 filter contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-[#151515]/80" />
      </div>

      <div
        ref={sectionRef}
        className={`relative z-10 mx-auto flex h-full max-w-[1424px] flex-col justify-between transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] ${
          isVisible
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-16 opacity-0 scale-[0.98]"
        }`}
      >
        {/* Top Header: Eyebrow + Built with Precision */}
        <div className="w-full">
          {/* Eyebrow Meta: 05 —— ENGINEERING */}
          <div className="flex items-center gap-[14px]">
            <span className="font-mono text-[10.5px] font-normal tracking-[0.22em] text-[#D8FF3E]">
              05
            </span>
            <span className="h-[1px] w-[54px] bg-[#D8FF3E]/50" />
            <span className="font-mono text-[10.5px] font-normal tracking-[0.22em] text-[#B9BCC0] uppercase">
              ENGINEERING
            </span>
          </div>

          {/* Heading (Figma Node 1:292) */}
          <div className="mt-[34px] max-w-[1076px]">
            <h2 className="m-0 font-sans text-[clamp(42px,6.4vw,98px)] font-extrabold uppercase leading-[1.08] tracking-[-0.045em] text-[#F4F3EF]">
              BUILT WITH
              <br />
              PRECISION.
            </h2>
          </div>
        </div>

        {/* Center Showcase: Specs on Left, Macro Product in Center, Specs on Right */}
        <div className="mt-8 sm:mt-12 lg:mt-[clamp(40px,7vh,90px)] grid items-center gap-8 lg:grid-cols-12">
          {/* Left Column: Spec 01 & Spec 02 */}
          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 lg:col-span-4">
            {/* Spec 01: Titanium acoustic chamber */}
            <div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10.5px] font-normal tracking-[0.2em] text-[#D8FF3E]">
                  01
                </span>
                <span className="font-sans text-[13px] sm:text-[14px] font-bold uppercase tracking-[0.06em] text-[#F4F3EF]">
                  TITANIUM ACOUSTIC CHAMBER
                </span>
                <span className="hidden h-[1px] flex-1 bg-[#F4F3EF]/20 sm:block" />
              </div>
              <p className="mt-2 max-w-[280px] pl-[26px] font-sans text-[12px] sm:text-[12.5px] font-normal leading-[1.65] text-[#B9BCC0]/85">
                0.4 mm walls, vacuum-sealed. Resonance measured in single decibels.
              </p>
            </div>

            {/* Spec 02: Adaptive driver */}
            <div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10.5px] font-normal tracking-[0.2em] text-[#D8FF3E]">
                  02
                </span>
                <span className="font-sans text-[13px] sm:text-[14px] font-bold uppercase tracking-[0.06em] text-[#F4F3EF]">
                  ADAPTIVE DRIVER
                </span>
                <span className="hidden h-[1px] flex-1 bg-[#F4F3EF]/20 sm:block" />
              </div>
              <p className="mt-2 max-w-[280px] pl-[26px] font-sans text-[12px] sm:text-[12.5px] font-normal leading-[1.65] text-[#B9BCC0]/85">
                11 mm dual-layer diaphragm that stiffens under load.
              </p>
            </div>
          </div>

          {/* Center Column: Macro Floating Earbuds Image from Figma */}
          <div className="my-2 flex justify-center lg:my-0 lg:col-span-4">
            <div className="relative w-full max-w-[280px] sm:max-w-[360px] lg:max-w-[444px]">
              <img
                src={media.precisionMacro}
                alt="AERON ARC Precision Engineering"
                className="animate-aeron-float h-auto w-full object-contain filter drop-shadow-[0_24px_48px_rgba(0,0,0,0.6)]"
              />
            </div>
          </div>

          {/* Right Column: Spec 03 & Spec 04 */}
          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 lg:col-span-4 lg:items-end">
            {/* Spec 03: Micro sensor array */}
            <div className="w-full text-left lg:text-right">
              <div className="flex items-center justify-start gap-3 lg:justify-end">
                <span className="hidden h-[1px] flex-1 bg-[#F4F3EF]/20 sm:block lg:order-1" />
                <span className="lg:hidden font-mono text-[10.5px] font-normal tracking-[0.2em] text-[#D8FF3E]">
                  03
                </span>
                <span className="font-sans text-[13px] sm:text-[14px] font-bold uppercase tracking-[0.06em] text-[#F4F3EF] lg:order-2">
                  MICRO SENSOR ARRAY
                </span>
                <span className="hidden font-mono text-[10.5px] font-normal tracking-[0.2em] text-[#D8FF3E] lg:inline lg:order-3">
                  03
                </span>
              </div>
              <p className="mt-2 max-w-[280px] pl-[26px] font-sans text-[12px] sm:text-[12.5px] font-normal leading-[1.65] text-[#B9BCC0]/85 lg:ml-auto lg:pl-0 lg:pr-[26px]">
                Six-axis motion, optical wear detection, bone conduction pickup.
              </p>
            </div>

            {/* Spec 04: Ceramic composite shell */}
            <div className="w-full text-left lg:text-right">
              <div className="flex items-center justify-start gap-3 lg:justify-end">
                <span className="hidden h-[1px] flex-1 bg-[#F4F3EF]/20 sm:block lg:order-1" />
                <span className="lg:hidden font-mono text-[10.5px] font-normal tracking-[0.2em] text-[#D8FF3E]">
                  04
                </span>
                <span className="font-sans text-[13px] sm:text-[14px] font-bold uppercase tracking-[0.06em] text-[#F4F3EF] lg:order-2">
                  CERAMIC COMPOSITE SHELL
                </span>
                <span className="hidden font-mono text-[10.5px] font-normal tracking-[0.2em] text-[#D8FF3E] lg:inline lg:order-3">
                  04
                </span>
              </div>
              <p className="mt-2 max-w-[280px] pl-[26px] font-sans text-[12px] sm:text-[12.5px] font-normal leading-[1.65] text-[#B9BCC0]/85 lg:ml-auto lg:pl-0 lg:pr-[26px]">
                Scratch-hardened to 8H. Warm to the touch within seconds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

### File 9 of 18: /components/ExplodedView.tsx

```tsx
"use client";

import { useEffect, useRef } from "react";
import { explodedParts, masterPart, PART_BOUNDS } from "@/lib/content";
import { useSectionTransition } from "@/hooks/useSectionTransition";

const CALLOUTS = [
  { num: "02", title: "Outer ceramic shell", desc: "STRUCTURAL PROTECTION" },
  { num: "03", title: "Acoustic chamber", desc: "SEALED TITANIUM VOLUME" },
  { num: "04", title: "Adaptive driver", desc: "11 MM DUAL DIAPHRAGM" },
  { num: "05", title: "Acoustic mesh", desc: "PARTICULATE BARRIER" },
  { num: "06", title: "Logic core", desc: "SPATIAL DSP AND CELL" },
  { num: "07", title: "Sensor array", desc: "SIX-AXIS AND OPTICAL" },
  { num: "08", title: "Inner structural base", desc: "CHASSIS AND CONTACTS" },
  { num: "09", title: "Inner acoustic assembly", desc: "NOZZLE AND EAR-TIP SEAL" },
];

export function ExplodedView() {
  const sectionRef = useRef<HTMLElement>(null);
  const { isVisible } = useSectionTransition("exploded", sectionRef);
  const stageRef = useRef<HTMLDivElement>(null);
  const zoneRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const masterRef = useRef<HTMLImageElement>(null);
  const pctRef = useRef<HTMLSpanElement>(null);
  const idxRef = useRef<HTMLSpanElement>(null);
  const polylineRef = useRef<SVGPolylineElement>(null);
  const particlesCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const sec = sectionRef.current;
    const stage = stageRef.current;
    const zone = zoneRef.current;
    const head = headRef.current;
    const master = masterRef.current;
    const pct = pctRef.current;
    const idxNum = idxRef.current;
    const line = polylineRef.current;
    const pCanvas = particlesCanvasRef.current;

    if (!sec || !stage || !zone || !head) return;

    const parts = Array.from(sec.querySelectorAll<HTMLElement>("[data-part]"));
    const steps = Array.from(sec.querySelectorAll<HTMLElement>("[data-part-step]"));
    const callouts = Array.from(sec.querySelectorAll<HTMLElement>("[data-callout]"));

    const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
    const easeIO = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

    let expNarrow: boolean | null = null;
    let expTw = -1;

    // ---- Ambient Particles Canvas
    let pCtx: CanvasRenderingContext2D | null = null;
    let pw = 0,
      ph = 0;
    let dots: Array<{ x: number; y: number; r: number; s: number; a: number }> = [];

    if (pCanvas) {
      pCtx = pCanvas.getContext("2d");
      const resizeParticles = () => {
        if (!stage || !pCanvas || !pCtx) return;
        const d2 = Math.min(2, window.devicePixelRatio || 1);
        pw = stage.clientWidth;
        ph = stage.clientHeight;
        pCanvas.width = pw * d2;
        pCanvas.height = ph * d2;
        pCtx.setTransform(d2, 0, 0, d2, 0, 0);
      };
      resizeParticles();
      window.addEventListener("resize", resizeParticles);

      dots = Array.from({ length: 80 }, () => ({
        x: Math.random(),
        y: Math.random(),
        r: 0.3 + Math.random() * 1.1,
        s: 0.00006 + Math.random() * 0.00016,
        a: 0.06 + Math.random() * 0.22,
      }));
    }

    let raf: number;

    const onFrame = () => {
      const vh = window.innerHeight;
      const r = sec.getBoundingClientRect();
      const st = stage.getBoundingClientRect();
      const p = clamp(-r.top / Math.max(1, r.height - vh), 0, 1);
      const narrow = window.innerWidth < 900;

      if (narrow !== expNarrow) {
        expNarrow = narrow;
        if (narrow) {
          zone.style.left = "0px";
          zone.style.top = "28%";
          zone.style.bottom = "16%";
          head.style.top = "clamp(88px, 11vh, 104px)";
          head.style.transform = "none";
          head.style.maxWidth = "min(92vw, 480px)";
        } else {
          zone.style.left = "clamp(0px,37vw,600px)";
          zone.style.top = "12%";
          zone.style.bottom = "22%";
          head.style.top = "50%";
          head.style.transform = "translateY(-50%)";
          head.style.maxWidth = "clamp(240px,30vw,430px)";
        }
      }

      const zn = zone.getBoundingClientRect();
      const n = parts.length;

      // Equal opaque width for uniform cadence
      const tw = narrow ? clamp(zn.width * 0.44, 92, 270) : clamp(zn.width * 0.235, 96, 250);
      let stepX = narrow ? tw * 0.1 : tw * 0.46;
      let stepY = narrow ? tw * 0.42 : stepX * 0.56;
      const maxY = zn.height * (narrow ? 0.72 : 0.58);
      if (stepY * (n - 1) > maxY) stepY = maxY / (n - 1);
      const maxX = zn.width * 0.95 - tw;
      if (stepX * (n - 1) > maxX) stepX = maxX / (n - 1);

      if (expTw !== tw) {
        expTw = tw;
        const setH = (el: HTMLElement | null, key: string) => {
          if (!el) return;
          const b = PART_BOUNDS[key];
          if (!b) return;
          const aspect = b.w / b.h;
          el.style.height = (tw / ((b.x1 - b.x0) * aspect)).toFixed(1) + "px";
        };
        parts.forEach((el) => {
          const img = el.firstElementChild as HTMLElement;
          setH(img, el.getAttribute("data-bounds") || "");
        });
        if (master) setH(master, "part-01-master");
      }

      const sepRaw = clamp((p - 0.05) / 0.78, 0, 1);
      const appear = clamp(sepRaw / 0.1, 0, 1);

      const place = (el: HTMLElement, key: string, dx: number, dy: number) => {
        const b = PART_BOUNDS[key];
        const w = el.offsetWidth || 0,
          hh = el.offsetHeight || 0;
        const ox = b ? (0.5 - (b.x0 + b.x1) / 2) * w : 0;
        const oy = b ? (0.5 - (b.y0 + b.y1) / 2) * hh : 0;
        return `translate3d(calc(-50% + ${(dx + ox).toFixed(1)}px), calc(-50% + ${(dy + oy).toFixed(1)}px), 0)`;
      };

      let low = -1e9;
      parts.forEach((el, i) => {
        const key = el.getAttribute("data-bounds") || "";
        const childImg = el.firstElementChild as HTMLElement;
        const t = easeIO(clamp((sepRaw * 1.52 - i * 0.062) / 0.62, 0, 1));
        const k = (i - (n - 1) / 2) * t;
        if (childImg) {
          el.style.transform = place(childImg, key, k * stepX, k * stepY);
          el.style.opacity = String(appear);
          const b = PART_BOUNDS[key];
          const ir = childImg.getBoundingClientRect();
          const ob = b ? ir.top + b.y1 * ir.height : ir.bottom;
          if (ob > low) low = ob;
        }
      });

      if (master) {
        master.style.opacity = String(clamp(1 - sepRaw / 0.12, 0, 1));
        master.style.transform = place(master, "part-01-master", 0, 0);
      }

      if (pct) {
        pct.textContent = String(Math.round(sepRaw * 100)).padStart(3, "0");
      }

      const act = Math.min(n - 1, Math.max(0, Math.floor(clamp((p - 0.12) / 0.8, 0, 0.999) * n)));
      const shown = sepRaw > 0.18;

      if (idxNum) {
        idxNum.textContent = String(act + 1).padStart(2, "0");
      }

      steps.forEach((s, i) => {
        const on = i === act && shown;
        s.style.background = on ? "#D8FF3E" : "rgba(244,243,239,.22)";
        s.style.height = on ? "4px" : "1px";
      });

      callouts.forEach((c, i) => {
        c.style.opacity = shown && i === act ? "1" : "0";
      });

      const cb = callouts[act];
      if (cb && parts[act]) {
        const ael = parts[act].firstElementChild as HTMLElement;
        const ab = PART_BOUNDS[parts[act].getAttribute("data-bounds") || ""];
        if (ael) {
          const ar = ael.getBoundingClientRect();
          const ocx = ab ? ar.left + ((ab.x0 + ab.x1) / 2) * ar.width : ar.left + ar.width / 2;
          const ocb = ab ? ar.top + ab.y1 * ar.height : ar.bottom;
          const bw = 200;
          const cy = Math.max(
            low - st.top + 26,
            Math.min(st.height * (narrow ? 0.84 : 0.79), st.height - 128)
          );
          const cx = narrow
            ? Math.max(16, (st.width - bw) / 2)
            : clamp(ocx - st.left - bw / 2, zn.left - st.left + 8, st.width - bw - 26);

          cb.style.left = `${cx.toFixed(0)}px`;
          cb.style.top = `${cy.toFixed(0)}px`;

          if (line) {
            const px = (ocx - st.left).toFixed(0);
            const py = (ocb - st.top + 10).toFixed(0);
            const ly = (cy - 18).toFixed(0);
            const lx = (cx + 10).toFixed(0);
            line.setAttribute("points", `${px},${py} ${px},${ly} ${lx},${ly}`);
            line.style.opacity = shown && !narrow ? "1" : "0";
          }
        }
      }

      // Render Ambient Micro-Particles
      if (pCtx && pCanvas) {
        if (r.bottom > 0 && r.top < vh) {
          pCtx.clearRect(0, 0, pw, ph);
          for (const dt of dots) {
            dt.y -= dt.s;
            if (dt.y < -0.02) {
              dt.y = 1.02;
              dt.x = Math.random();
            }
            pCtx.beginPath();
            pCtx.arc(dt.x * pw, dt.y * ph, dt.r, 0, Math.PI * 2);
            pCtx.fillStyle = `rgba(244,243,239,${dt.a.toFixed(3)})`;
            pCtx.fill();
          }
        }
      }

      raf = requestAnimationFrame(onFrame);
    };

    raf = requestAnimationFrame(onFrame);

    return () => {
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="exploded"
      data-theme="dark"
      data-exploded
      className="relative scroll-mt-20 md:scroll-mt-24 h-[280vh] sm:h-[360vh] md:h-[450vh] lg:h-[540vh] bg-[#0B0B0B] text-[#F4F3EF]"
    >
      <div
        ref={stageRef}
        data-stage
        className="sticky top-0 h-svh overflow-hidden bg-[#0B0B0B]"
      >
        {/* Background Ambient Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(52%_54%_at_62%_48%,rgba(66,65,62,0.44),rgba(11,11,11,0)_70%)]" />

        {/* Concentric Architectural Rings */}
        <div className="pointer-events-none absolute left-[-26%] top-[-48%] h-[150%] w-[126%] rounded-full border border-[rgba(244,243,239,0.032)]" />
        <div className="pointer-events-none absolute bottom-[-74%] left-[4%] h-[140%] w-[118%] rounded-full border border-[rgba(244,243,239,0.026)]" />

        {/* Floating Particles Canvas */}
        <canvas
          ref={particlesCanvasRef}
          className="pointer-events-none absolute inset-0 z-0 opacity-50"
        />

        {/* Vignette Gradients */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(11,11,11,0.7)_0%,rgba(11,11,11,0)_24%,rgba(11,11,11,0)_74%,rgba(11,11,11,0.82)_100%)]" />

        {/* 3D Exploded Parts Stage */}
        <div
          ref={zoneRef}
          data-parts-zone
          className="absolute bottom-[22%] left-[clamp(0px,37vw,600px)] right-0 top-[12%]"
        >
          {/* Fully Assembled Master Pod */}
          <img
            ref={masterRef}
            data-part-master
            src={masterPart.src}
            alt={masterPart.alt}
            className="absolute left-1/2 top-1/2 z-[9] max-w-none filter drop-shadow-[0_30px_48px_rgba(0,0,0,0.72)]"
            style={{ height: "26vmin", width: "auto" }}
          />

          {/* 8 Disassembled Components */}
          {explodedParts.map((part) => (
            <div
              key={part.id}
              data-part={part.id}
              data-bounds={part.bounds}
              className="absolute left-1/2 top-1/2 opacity-0 will-change-transform"
              style={{ zIndex: 10 + part.id }}
            >
              <img
                src={part.src}
                alt={part.title}
                className="block max-w-none filter drop-shadow-[0_26px_40px_rgba(0,0,0,0.72)] drop-shadow-[0_2px_3px_rgba(0,0,0,0.5)]"
                style={{ height: "15vmin", width: "auto" }}
              />
            </div>
          ))}
        </div>

        {/* SVG Callout Pointer Line */}
        <svg
          data-callout-svg
          className="pointer-events-none absolute inset-0 z-[34] overflow-visible"
          aria-hidden="true"
        >
          <polyline
            ref={polylineRef}
            data-callout-line
            points=""
            fill="none"
            stroke="rgba(216,255,62,0.45)"
            strokeWidth="1"
            className="opacity-0 transition-opacity duration-400 ease-out"
          />
        </svg>

        {/* Interactive Callout Badges */}
        <div
          data-callout-layer
          className="pointer-events-none absolute inset-0 z-[36]"
        >
          {CALLOUTS.map((c, i) => (
            <div
              key={c.num}
              data-callout={i}
              className="pointer-events-none absolute left-0 top-0 w-[200px] opacity-0 transition-opacity duration-500 ease-out"
            >
              <div className="mb-[9px] font-mono text-[10px] tracking-[0.24em] text-[#D8FF3E]">
                {c.num}
              </div>
              <div className="font-sans text-[13px] font-bold uppercase leading-[1.3] tracking-[0.07em] text-[#F4F3EF]">
                {c.title}
              </div>
              <div className="mt-[8px] font-mono text-[10px] tracking-[0.14em] text-[#B9BCC0]/80">
                {c.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Left Information Column (white.html spec) */}
        <div
          ref={headRef}
          data-anatomy-head
          className="absolute left-[clamp(16px,4vw,56px)] top-1/2 z-[40] max-w-[clamp(240px,30vw,430px)] pointer-events-none"
        >
          <div
            className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-16 opacity-0"
            }`}
          >
            {/* Eyebrow: 06 —— ANATOMY */}
            <div className="mb-2 sm:mb-4 md:mb-[22px] flex items-center gap-[14px] font-mono text-[10px] sm:text-[10.5px] tracking-[0.22em] text-[#B9BCC0]">
              <span className="text-[#D8FF3E]">06</span>
              <span className="h-[1px] w-[54px] bg-[#B9BCC0]/40" />
              <span>ANATOMY</span>
            </div>

            {/* Headline */}
            <h2 className="m-0 font-sans text-[clamp(1.5rem,3.8vw,4.2rem)] font-extrabold uppercase leading-[0.92] tracking-[-0.04em] text-[#F4F3EF]">
              Every layer
              <br />
              has a purpose.
            </h2>

            {/* Subtitle */}
            <p className="mt-2 sm:mt-3 md:mt-[24px] font-mono text-[9.5px] sm:text-[10.5px] leading-[1.6] sm:leading-[1.9] tracking-[0.18em] text-[#B9BCC0]/85 uppercase">
              ENGINEERED FROM
              <br />
              THE INSIDE OUT.
            </p>

            {/* 8 Component Step Indicator Bars */}
            <div className="mt-2 sm:mt-4 md:mt-[34px] flex h-[6px] items-end gap-[5px] sm:gap-[7px]">
              {CALLOUTS.map((_, i) => (
                <span
                  key={i}
                  data-part-step={i}
                  className="h-[1px] w-[12px] sm:w-[15px] bg-[rgba(244,243,239,0.22)] transition-all duration-450 ease-out"
                />
              ))}
            </div>

            {/* Disassembly Readout */}
            <div className="mt-1.5 sm:mt-2 md:mt-[14px] font-mono text-[9px] sm:text-[10px] tracking-[0.2em] text-[#B9BCC0]/60">
              <span ref={idxRef}>01</span> / 08 &nbsp;·&nbsp;{" "}
              <span ref={pctRef}>000</span>% SEPARATED
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

### File 10 of 18: /components/Battery.tsx

```tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { media } from "@/lib/content";
import { useSectionTransition } from "@/hooks/useSectionTransition";

export function Battery() {
  const barRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { isVisible, elementRef: contentRef } = useSectionTransition("battery");

  useEffect(() => {
    const onScroll = () => {
      const el = containerRef.current;
      const bar = barRef.current;
      if (!el || !bar) return;
      const vh = window.innerHeight;
      const r = el.getBoundingClientRect();
      const p = Math.min(Math.max((vh * 0.85 - r.top) / (vh * 0.5), 0), 1);
      bar.style.width = `${(10 + p * 90).toFixed(1)}%`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="battery"
      data-theme="light"
      className="relative scroll-mt-20 md:scroll-mt-24 bg-[#F4F3EF] px-gutter py-12 sm:py-16 md:py-20 lg:py-24 text-[#080808]"
    >
      <div
        ref={(el) => {
          if (containerRef) (containerRef as any).current = el;
          if (contentRef) (contentRef as any).current = el;
        }}
        className={`mx-auto max-w-[1424px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] ${
          isVisible
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-16 opacity-0 scale-[0.98]"
        }`}
      >
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <div className="flex items-center gap-3.5">
              <span className="rounded bg-[#080808] px-1.5 py-0.5 font-mono text-[10.5px] font-normal tracking-[0.22em] text-[#D8FF3E]">
                07
              </span>
              <div className="h-px w-[54px] bg-[#080808]/20" />
              <span className="font-mono text-[10.5px] font-normal tracking-[0.22em] text-[#5B5B58]">
                POWER
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-6 font-sans text-[clamp(44px,5.6vw,86px)] font-[800] leading-[1.05] tracking-[-0.06em] text-[#080808]">
              Power that stays with you.
            </h2>

            {/* Paragraph */}
            <p className="mt-6 max-w-[380px] font-sans text-[14px] leading-[1.7] text-[#4A4A47]">
              Designed for long days, late nights and everything between.
            </p>

            {/* Stat Cards */}
            <div className="mt-10 grid grid-cols-1 border border-[#080808]/15 bg-[#F4F3EF] sm:grid-cols-3 sm:divide-x divide-y sm:divide-y-0 divide-[#080808]/15">
              <div className="p-6">
                <div className="font-sans text-[clamp(36px,3.5vw,54.4px)] font-[800] leading-none tracking-[-0.04em] text-[#080808]">
                  32H
                </div>
                <div className="mt-2.5 font-mono text-[10px] tracking-[0.18em] text-[#5B5B58]">
                  TOTAL LISTENING
                </div>
              </div>

              <div className="p-6">
                <div className="font-sans text-[clamp(36px,3.5vw,54.4px)] font-[800] leading-none tracking-[-0.04em] text-[#080808]">
                  8H
                </div>
                <div className="mt-2.5 font-mono text-[10px] tracking-[0.18em] text-[#5B5B58]">
                  SINGLE CHARGE
                </div>
              </div>

              <div className="p-6">
                <div className="font-sans text-[clamp(36px,3.5vw,54.4px)] font-[800] leading-none tracking-[-0.04em] text-[#080808]">
                  15 MIN
                </div>
                <div className="mt-2.5 font-mono text-[10px] tracking-[0.18em] text-[#5B5B58]">
                  = 3H PLAYBACK
                </div>
              </div>
            </div>

            {/* Battery Tracker Bar */}
            <div className="mt-8">
              <div className="h-[3px] w-full overflow-hidden bg-[#080808]/12">
                <div
                  ref={barRef}
                  data-battery-bar
                  className="h-full bg-[#080808] transition-[width] duration-300"
                  style={{ width: "15%" }}
                />
              </div>
              <div className="mt-3 flex justify-between font-mono text-[10px] tracking-[0.18em] text-[#5B5B58]">
                <span>00H</span>
                <span>16H</span>
                <span>32H</span>
              </div>
            </div>
          </div>

          {/* Right Column: Charging Pod Image from Figma */}
          <div className="flex items-center justify-center lg:col-span-5 lg:justify-end">
            <div className="relative aspect-[492/590] w-full max-w-[492px]">
              <img
                src={media.chargingPod}
                alt="AERON ARC charging pod, open"
                className="h-full w-full object-contain filter drop-shadow-[0_24px_48px_rgba(0,0,0,0.18)] transition-transform duration-700 ease-out hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

### File 11 of 18: /components/Acoustics.tsx

```tsx
"use client";

import { useSectionTransition } from "@/hooks/useSectionTransition";

const systems = [
  {
    id: "01",
    title: "Adaptive ANC",
    desc: "Reads the room 200 times a second and cancels only what you don't want.",
  },
  {
    id: "02",
    title: "Real-time EQ",
    desc: "Compensates for seal, ear geometry and volume, continuously.",
  },
  {
    id: "03",
    title: "Voice detection",
    desc: "Start speaking and the world fades back in. Stop, and it recedes.",
  },
  {
    id: "04",
    title: "Spatial tracking",
    desc: "Anchors the soundstage to the room, not to your head.",
  },
];

export function Acoustics() {
  const { isVisible, sectionRef } = useSectionTransition("intelligence");

  return (
    <section
      id="intelligence"
      data-theme="dark"
      className="relative scroll-mt-20 md:scroll-mt-24 bg-[#080808] px-gutter py-12 sm:py-16 md:py-20 lg:py-24 text-[#F4F3EF]"
    >
      <div
        ref={sectionRef}
        className={`mx-auto max-w-[1424px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] ${
          isVisible
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-16 opacity-0 scale-[0.98]"
        }`}
      >
        {/* Eyebrow */}
        <div className="flex items-center gap-3.5">
          <span className="font-mono text-[10.5px] font-normal tracking-[0.22em] text-[#D8FF3E]">
            08
          </span>
          <div className="h-px w-[54px] bg-[#B9BCC0]/40" />
          <span className="font-mono text-[10.5px] font-normal tracking-[0.22em] text-[#B9BCC0]">
            INTELLIGENCE
          </span>
        </div>

        {/* Header Row */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 items-end gap-4 sm:gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-sans text-[clamp(32px,5.8vw,96px)] font-[800] leading-[1.05] tracking-[-0.055em] text-[#F4F3EF]">
              It listens with you.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pb-3 lg:pl-8">
            <p className="max-w-[340px] font-sans text-[13px] sm:text-[14px] leading-[1.65] text-[#B9BCC0]">
              Four systems running quietly in the background, adjusting the sound before you notice it needed adjusting.
            </p>
          </div>
        </div>

        {/* 4 Systems Rows */}
        <div className="mt-8 sm:mt-12 md:mt-14 border-t border-white/10">
          {systems.map((s) => (
            <div
              key={s.id}
              className="grid grid-cols-1 items-baseline sm:items-center gap-2 sm:gap-3 border-b border-white/10 py-4 sm:py-5 md:py-7 transition-colors hover:bg-white/[0.02] md:grid-cols-12"
            >
              <div className="font-mono text-[10.5px] tracking-[0.2em] text-[#D8FF3E] md:col-span-1">
                {s.id}
              </div>
              <div className="font-sans text-[clamp(18px,2.2vw,32px)] font-[700] tracking-[-0.02em] text-[#F4F3EF] md:col-span-5">
                {s.title}
              </div>
              <div className="font-sans text-[12px] sm:text-[12.5px] leading-[1.65] text-[#B9BCC0]/85 md:col-span-6">
                {s.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### File 12 of 18: /components/Gallery.tsx

```tsx
"use client";

import { useEffect, useRef } from "react";
import { gallerySlides } from "@/lib/content";
import { useSectionTransition } from "@/hooks/useSectionTransition";

const SLIDE_CONFIG = [
  { widthClass: "w-[clamp(260px,40vw,600px)]", caption: "01 / MORNING" },
  { widthClass: "w-[clamp(200px,28vw,420px)]", caption: "02 / MOVEMENT" },
  { widthClass: "w-[clamp(240px,34vw,520px)]", caption: "03 / FOCUS" },
  { widthClass: "w-[clamp(260px,40vw,600px)]", caption: "04 / NIGHT" },
  { widthClass: "w-[clamp(240px,34vw,520px)]", caption: "05 / IMMERSION" },
];

export function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const { isVisible } = useSectionTransition("gallery", sectionRef);

  useEffect(() => {
    const sec = sectionRef.current;
    const track = trackRef.current;
    if (!sec || !track) return;

    let rafId: number;

    const onScroll = () => {
      const vh = window.innerHeight;
      const r = sec.getBoundingClientRect();
      const p = Math.min(Math.max(-r.top / Math.max(1, r.height - vh), 0), 1);
      // Measure total overflow distance including horizontal padding
      const dist = Math.max(0, track.scrollWidth - window.innerWidth + 56);
      track.style.transform = `translate3d(${(-p * dist).toFixed(1)}px, 0, 0)`;
    };

    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(onScroll);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    onScroll();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="gallery"
      data-theme="light"
      data-hgallery
      className="relative scroll-mt-20 md:scroll-mt-24 h-[360vh] bg-[#EAE9E4] text-[#121212]"
    >
      <div className="sticky top-0 flex h-svh flex-col justify-center overflow-hidden">
        <div
          className={`flex flex-col justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          {/* Eyebrow Header: 09 —— A DAY IN ARC (Figma / white.html match) */}
          <div className="mb-[clamp(20px,3vh,36px)] flex items-center gap-3.5 px-[clamp(16px,4vw,56px)] font-mono text-[10.5px] tracking-[0.22em] text-[#55554F]">
            <span className="text-[#121212]">09</span>
            <span className="h-[1px] w-[54px] bg-[#121212]/30" />
            <span>A DAY IN ARC</span>
          </div>

          {/* Horizontal Editorial Track */}
          <div
            ref={trackRef}
            data-hgallery-track
            className="flex items-center gap-[clamp(14px,2vw,32px)] px-[clamp(16px,4vw,56px)] will-change-transform"
          >
            {gallerySlides.map((slide, i) => {
              const cfg = SLIDE_CONFIG[i % SLIDE_CONFIG.length];
              return (
                <figure
                  key={slide.id}
                  className={`m-0 flex-none ${cfg.widthClass}`}
                >
                  <div className="h-[clamp(300px,54svh,620px)] overflow-hidden bg-[#141414]">
                    <img
                      src={slide.img}
                      alt={slide.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                    />
                  </div>
                  <figcaption className="mt-3.5 font-mono text-[10.5px] tracking-[0.2em] text-[#55554F]">
                    {cfg.caption}
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
```

### File 13 of 18: /components/Finishes.tsx

```tsx
"use client";

import { useState } from "react";
import { FINISHES, media } from "@/lib/content";
import { useSectionTransition } from "@/hooks/useSectionTransition";

type Props = {
  onAddToCart: () => void;
};

export function Finishes({ onAddToCart }: Props) {
  const [activeIdx, setActiveIdx] = useState(0);
  const { isVisible, sectionRef } = useSectionTransition("finishes");
  const active = FINISHES[activeIdx];

  return (
    <section
      id="finishes"
      data-theme="light"
      className="relative scroll-mt-20 md:scroll-mt-24 bg-[#F4F3EF] px-gutter py-12 sm:py-16 md:py-20 lg:py-24 text-[#080808]"
    >
      <div
        ref={sectionRef}
        className={`mx-auto max-w-[1560px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] ${
          isVisible
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-16 opacity-0 scale-[0.98]"
        }`}
      >
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <span className="font-mono text-[10.5px] sm:text-[11px] tracking-[0.24em] text-[#080808]/60 uppercase">
              10 FINISHES
            </span>
            <h2 className="mt-3 sm:mt-4 font-sans text-[clamp(32px,5.2vw,84px)] font-black tracking-[-0.03em] leading-[0.94] uppercase">
              Three finishes. <br />
              <span className="font-serif font-light italic text-[#080808]/70">One form.</span>
            </h2>
            <p className="mt-6 font-mono text-sm leading-relaxed text-[#080808]/70">
              {active.note}
            </p>

            {/* Finishes Selector Tabs */}
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-2 sm:gap-3">
              {FINISHES.map((f, i) => (
                <button
                  key={f.name}
                  type="button"
                  data-cursor="SELECT"
                  data-magnetic
                  onClick={() => setActiveIdx(i)}
                  className={`rounded-full border px-4 sm:px-5 py-2 font-mono text-[11px] sm:text-xs tracking-widest transition-colors ${
                    i === activeIdx
                      ? "border-[#080808] bg-[#080808] text-[#F4F3EF]"
                      : "border-black/20 text-[#080808] hover:border-black"
                  }`}
                >
                  {f.name.toUpperCase()}
                </button>
              ))}
            </div>

            <div className="mt-6 sm:mt-8 md:mt-10 flex items-center gap-6 border-t border-black/10 pt-6 sm:pt-8">
              <button
                type="button"
                onClick={onAddToCart}
                data-cursor="BUY"
                data-magnetic
                className="w-full sm:w-auto rounded-full bg-[#080808] px-8 py-3.5 font-mono text-xs font-bold tracking-widest text-[#F4F3EF] hover:bg-black/80"
              >
                ADD TO CART — $249
              </button>
            </div>
          </div>

          {/* Dynamic Filtered Product Preview */}
          <div className="relative aspect-square overflow-hidden rounded-2xl sm:rounded-3xl bg-[#EAE9E4] p-6 sm:p-8 md:p-10 lg:col-span-7">
            <img
              src={media.finishObsidian}
              alt={active.name}
              style={{ filter: active.filter }}
              className="h-full w-full object-contain transition-all duration-700 ease-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
```

### File 14 of 18: /components/FinalCTA.tsx

```tsx
"use client";

import { media } from "@/lib/content";
import { useSectionTransition } from "@/hooks/useSectionTransition";

type Props = {
  onAddToCart?: () => void;
};

export function FinalCTA({ onAddToCart }: Props) {
  const { isVisible, sectionRef } = useSectionTransition("cta");

  return (
    <section
      id="cta"
      data-theme="dark"
      className="relative scroll-mt-20 md:scroll-mt-24 flex min-h-[440px] sm:min-h-[520px] md:min-h-[600px] lg:min-h-[695px] items-center justify-center overflow-hidden bg-[#050505] text-[#F4F3EF]"
    >
      {/* Background Image from Figma (node 1:427) */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <img
          src={media.finalCtaBg}
          alt=""
          className="h-full w-full object-cover object-center filter brightness-[0.72] contrast-[1.08]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(5,5,5,0.35)_0%,rgba(5,5,5,0.85)_75%,#050505_100%)]" />
      </div>

      {/* Content Container (841px in Figma) */}
      <div
        ref={sectionRef}
        className={`relative z-10 mx-auto flex w-full max-w-[841px] flex-col items-center px-gutter py-14 sm:py-20 lg:py-28 text-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] ${
          isVisible
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-16 opacity-0 scale-[0.98]"
        }`}
      >
        <h2 className="font-sans text-[clamp(34px,6.5vw,108px)] font-[900] leading-[0.95] tracking-tight sm:tracking-[0.037em] text-[#F4F3EF]">
          Hear what&apos;s next.
        </h2>

        <p className="mt-4 sm:mt-6 max-w-[400px] font-sans text-[13px] sm:text-[14px] leading-[1.65] text-[#B9BCC0]">
          A new generation of wireless audio, built around how the world sounds to you.
        </p>

        <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
          <button
            type="button"
            onClick={onAddToCart}
            data-cursor="ORDER"
            data-magnetic
            className="w-full sm:w-auto rounded-full bg-[#F4F3EF] px-[30px] py-4 font-mono text-[11px] font-[600] leading-none tracking-[0.16em] text-[#080808] transition-transform duration-300 ease-out hover:scale-105 active:scale-95"
          >
            BUY AERON ARC — $249
          </button>

          <a
            href="#technology"
            data-cursor="LEARN"
            data-magnetic
            className="w-full sm:w-auto rounded-full border border-[#F4F3EF]/35 bg-transparent px-[30px] py-4 font-mono text-[11px] font-[400] leading-none tracking-[0.16em] text-[#F4F3EF] transition-colors duration-300 hover:border-[#F4F3EF] hover:bg-white/[0.04]"
          >
            EXPLORE TECHNOLOGY
          </a>
        </div>
      </div>
    </section>
  );
}
```

### File 15 of 18: /components/Footer.tsx

```tsx
"use client";

export function Footer() {
  return (
    <footer
      data-theme="dark"
      className="relative border-t border-white/10 bg-[#080808] px-gutter pb-8 sm:pb-[34px] pt-10 sm:pt-[62.5px] text-[#F4F3EF]"
    >
      <div className="mx-auto max-w-[1424px]">
        {/* Top Watermark & Tagline Row */}
        <div className="flex flex-col justify-between gap-4 sm:gap-6 border-b border-white/10 pb-6 sm:pb-10 md:flex-row md:items-end">
          <div className="select-none font-sans text-[clamp(44px,14vw,224px)] font-[900] leading-[0.8] tracking-[-0.05em] text-[#F4F3EF]/[0.05]">
            AERON
          </div>
          <div className="pb-1 sm:pb-2 font-mono text-[10px] sm:text-[11px] tracking-[0.2em] text-[#B9BCC0]">
            SOUND, REIMAGINED.
          </div>
        </div>

        {/* 4-Column Navigation & Spec Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-8">
          {/* Column 1: SHOP */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#B9BCC0]/55 uppercase">
              SHOP
            </span>
            <div className="flex flex-col gap-2.5 font-sans text-[13px] text-[#F4F3EF]">
              <a href="#product" className="transition-colors hover:text-[#D8FF3E]">
                Product
              </a>
              <a href="#technology" className="transition-colors hover:text-[#D8FF3E]">
                Technology
              </a>
              <a href="#experience" className="transition-colors hover:text-[#D8FF3E]">
                Experience
              </a>
            </div>
          </div>

          {/* Column 2: CARE */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#B9BCC0]/55 uppercase">
              CARE
            </span>
            <div className="flex flex-col gap-2.5 font-sans text-[13px] text-[#F4F3EF]">
              <a href="#support" className="transition-colors hover:text-[#D8FF3E]">
                Support
              </a>
              <a href="#support" className="transition-colors hover:text-[#D8FF3E]">
                Shipping
              </a>
              <a href="#support" className="transition-colors hover:text-[#D8FF3E]">
                Returns
              </a>
              <a href="#support" className="transition-colors hover:text-[#D8FF3E]">
                Privacy
              </a>
            </div>
          </div>

          {/* Column 3: FOLLOW */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#B9BCC0]/55 uppercase">
              FOLLOW
            </span>
            <div className="flex flex-col gap-2.5 font-sans text-[13px] text-[#F4F3EF]">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-[#D8FF3E]"
              >
                Instagram
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-[#D8FF3E]"
              >
                X
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-[#D8FF3E]"
              >
                YouTube
              </a>
            </div>
          </div>

          {/* Column 4: TECHNICAL SPECS */}
          <div className="flex flex-col gap-2 font-mono text-[10px] leading-[19px] tracking-[0.16em] text-[#B9BCC0]/55">
            <div>MODEL / ARC-01</div>
            <div>CODEC / LDAC · AAC · SBC</div>
            <div>BLUETOOTH / 5.4 LE</div>
            <div>IP RATING / IPX5</div>
            <div>FIRMWARE / 1.04.220</div>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 font-mono text-[10px] tracking-[0.16em] text-[#B9BCC0]/45 sm:flex-row sm:items-center">
          <div>© 2026 AERON AUDIO LABORATORIES</div>
          <div>DESIGNED FOR THE WAY YOU HEAR</div>
        </div>
      </div>
    </footer>
  );
}
```

### File 16 of 18: /components/CartDrawer.tsx

```tsx
"use client";

type Props = {
  open: boolean;
  onClose: () => void;
  count: number;
};

export function CartDrawer({ open, onClose, count }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[150] flex justify-end bg-black/70 backdrop-blur-sm transition-opacity">
      <div
        className="h-full w-full max-w-md bg-[#121212] p-8 text-[#F4F3EF] shadow-2xl flex flex-col justify-between"
      >
        <div>
          <div className="flex items-center justify-between border-b border-line pb-6">
            <h3 className="font-mono text-sm tracking-widest uppercase">YOUR CART ({count})</h3>
            <button
              type="button"
              onClick={onClose}
              data-cursor="CLOSE"
              className="font-mono text-xs text-mute hover:text-white"
            >
              [CLOSE]
            </button>
          </div>

          <div className="mt-8 space-y-6">
            {count > 0 ? (
              <div className="flex items-center justify-between border-b border-line/40 pb-6">
                <div>
                  <h4 className="font-sans font-bold">AERON ARC</h4>
                  <p className="font-mono text-xs text-mute">Obsidian Black · Qty: {count}</p>
                </div>
                <span className="font-mono font-bold text-[#D8FF3E]">${249 * count}</span>
              </div>
            ) : (
              <p className="font-mono text-xs text-mute">Your cart is currently empty.</p>
            )}
          </div>
        </div>

        <div className="border-t border-line pt-6">
          <div className="flex justify-between font-mono text-sm mb-4">
            <span>TOTAL</span>
            <span className="font-bold text-[#D8FF3E]">${249 * count}</span>
          </div>
          <button
            type="button"
            disabled={count === 0}
            data-cursor="CHECKOUT"
            className="w-full rounded-full bg-[#D8FF3E] py-4 font-mono text-xs font-bold tracking-widest text-[#080808] disabled:opacity-40"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}
```

### File 17 of 18: /components/CustomCursor.tsx

```tsx
"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const label = labelRef.current;
    if (!dot || !label) return;

    let mouse = { px: -100, py: -100, cx: -100, cy: -100 };
    let raf: number;

    const onMouseMove = (e: MouseEvent) => {
      mouse.px = e.clientX;
      mouse.py = e.clientY;
      dot.style.opacity = "1";

      const target = e.target as HTMLElement | null;
      const hit = target ? (target.closest("[data-cursor]") as HTMLElement | null) : null;

      if (hit) {
        dot.style.width = "66px";
        dot.style.height = "66px";
        dot.style.borderColor = "#D8FF3E";
        dot.style.background = "rgba(216,255,62,0.08)";
        label.textContent = hit.getAttribute("data-cursor") || "";
        label.style.opacity = "1";
      } else {
        dot.style.width = "14px";
        dot.style.height = "14px";
        dot.style.borderColor = "rgba(244,243,239,0.85)";
        dot.style.background = "rgba(244,243,239,0.95)";
        label.style.opacity = "0";
      }
    };

    const onMouseLeave = () => {
      dot.style.opacity = "0";
    };

    const frame = () => {
      mouse.cx += (mouse.px - mouse.cx) * 0.18;
      mouse.cy += (mouse.py - mouse.cy) * 0.18;
      dot.style.transform = `translate3d(${mouse.cx - dot.offsetWidth / 2}px, ${mouse.cy - dot.offsetHeight / 2}px, 0)`;
      raf = requestAnimationFrame(frame);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    raf = requestAnimationFrame(frame);

    // Magnetic elements listener
    const magneticEls = Array.from(document.querySelectorAll<HTMLElement>("[data-magnetic]"));
    const cleanups = magneticEls.map((el) => {
      const over = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
        const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
        el.style.transform = `translate3d(${(dx * 7).toFixed(2)}px, ${(dy * 5).toFixed(2)}px, 0) scale(1.03)`;
      };
      const out = () => {
        el.style.transform = "none";
      };
      el.style.transition = "transform .4s cubic-bezier(.16,1,.3,1)";
      el.addEventListener("mousemove", over);
      el.addEventListener("mouseleave", out);
      return () => {
        el.removeEventListener("mousemove", over);
        el.removeEventListener("mouseleave", out);
      };
    });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      cleanups.forEach((c) => c());
    };
  }, []);

  return (
    <div
      ref={dotRef}
      data-cursor-dot
      className="pointer-events-none fixed left-0 top-0 z-[100] flex items-center justify-center rounded-full border border-bone/85 bg-bone/95 opacity-0 backdrop-blur-[2px] transition-[width,height,background-color,border-color] duration-300 ease-out"
      style={{ width: "14px", height: "14px", willChange: "transform" }}
    >
      <span
        ref={labelRef}
        data-cursor-label
        className="select-none font-mono text-[9px] font-bold tracking-[0.2em] text-[#D8FF3E] opacity-0 transition-opacity duration-200"
      />
    </div>
  );
}
```

### File 18 of 18: /components/ScrollProgressBar.tsx

```tsx
"use client";

import { useEffect, useRef } from "react";

export function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const vh = window.innerHeight;
      const y = window.scrollY || window.pageYOffset;
      const docH = document.documentElement.scrollHeight - vh;
      const progress = Math.min(Math.max(y / Math.max(1, docH), 0), 1);
      if (barRef.current) {
        barRef.current.style.width = `${progress * 100}%`;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      data-progress-track
      className="fixed left-0 right-0 top-0 z-[90] h-[2px] bg-white/10"
      aria-hidden="true"
    >
      <div
        ref={barRef}
        data-progress-bar
        className="h-full w-0 bg-[#D8FF3E] transition-[width] duration-75 ease-out"
      />
    </div>
  );
}
```

### Install Dependencies (exact versions):

```bash
npm install next@15.5.25 react@19.3.0 react-dom@19.3.0 lenis@1.3.26
npm install -D tailwindcss@4.3.3 @tailwindcss/postcss@4.3.3 typescript@5.9.3 @types/node@22.20.3 @types/react@19.3.0 @types/react-dom@19.3.0
```

### Project file: /package.json

Replace the contents of /package.json with:

```json
{
  "name": "aeron-arc",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "lenis": "1.3.26",
    "next": "15.5.25",
    "react": "19.3.0",
    "react-dom": "19.3.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "4.3.3",
    "@types/node": "22.20.3",
    "@types/react": "19.3.0",
    "@types/react-dom": "19.3.0",
    "tailwindcss": "4.3.3",
    "typescript": "5.9.3"
  }
}
```

### Project file: /tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2017", "lib": ["dom", "dom.iterable", "esnext"], "allowJs": true, "skipLibCheck": true,
    "strict": true, "noEmit": true, "esModuleInterop": true, "module": "esnext", "moduleResolution": "bundler",
    "resolveJsonModule": true, "isolatedModules": true, "jsx": "preserve", "incremental": true,
    "plugins": [{ "name": "next" }], "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### Project file: /postcss.config.mjs

```js
const config = { plugins: { "@tailwindcss/postcss": {} } };
export default config;
```

### Styling: /app/globals.css

Replace or apply the contents of /app/globals.css with:

```css
@import "tailwindcss";
@import "lenis/dist/lenis.css";

@theme static {
  --font-sans: var(--font-archivo), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: var(--font-ibm-plex-mono), "SF Mono", Menlo, Consolas, monospace;
  --color-ink: #080808;
  --color-bone: #f4f3ef;
  --color-mute: #b9bcc0;
  --color-dim: #5c5b58;
  --color-accent: #d8ff3e;
  --color-line: rgba(244, 243, 239, 0.12);
  --spacing-gutter: clamp(16px, 4vw, 56px);
}

@layer base {
  html {
    -webkit-text-size-adjust: 100%;
    scroll-behavior: smooth;
  }
  body {
    background: #080808;
    color: #f4f3ef;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    cursor: default;
  }
  ::selection {
    background: #d8ff3e;
    color: #080808;
  }
}

@keyframes aeronPulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.25;
    transform: scale(0.7);
  }
}

.animate-aeron-pulse {
  animation: aeronPulse 2.6s ease-in-out infinite;
}

@keyframes aeronFloat {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-8px) rotate(0.6deg);
  }
}

.animate-aeron-float {
  animation: aeronFloat 5s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Next.js Config: /next.config.ts

```tsx
import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
      },
    ],
  },
};

export default nextConfig;
```

### Update /app/layout.tsx:

Replace the contents of /app/layout.tsx with:

```tsx
import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-archivo",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AERON ARC — Sound, Reimagined.",
  description: "AERON ARC wireless audio. Precision spatial sound, 32H battery, and architectural ceramic form.",
};

export const viewport: Viewport = {
  themeColor: "#080808",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${ibmPlexMono.variable}`}>
      <body className="font-sans antialiased">
        <ScrollProgressBar />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
```

### Update /app/page.tsx:

Replace the contents of /app/page.tsx with:

```tsx
"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Product } from "@/components/Product";
import { Experience } from "@/components/Experience";
import { Technology } from "@/components/Technology";
import { Precision } from "@/components/Precision";
import { ExplodedView } from "@/components/ExplodedView";
import { Battery } from "@/components/Battery";
import { Acoustics } from "@/components/Acoustics";
import { Gallery } from "@/components/Gallery";
import { Finishes } from "@/components/Finishes";
import { FinalCTA } from "@/components/FinalCTA";
import { CartDrawer } from "@/components/CartDrawer";
import { Footer } from "@/components/Footer";

export default function Page() {
  const [cartCount, setCartCount] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    });
    (window as any).__lenis = lenis;
    let raf: number;
    const tick = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      delete (window as any).__lenis;
    };
  }, []);

  const addToCart = () => {
    setCartCount((c) => c + 1);
    setCartOpen(true);
  };

  return (
    <main>
      <Nav cartCount={cartCount} onOpenCart={() => setCartOpen(true)} />
      <Hero onAddToCart={addToCart} />
      <Product />
      <Experience />
      <Technology />
      <Precision />
      <ExplodedView />
      <Battery />
      <Acoustics />
      <Gallery />
      <Finishes onAddToCart={addToCart} />
      <FinalCTA onAddToCart={addToCart} />
      <Footer />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} count={cartCount} />
    </main>
  );
}
```

### Run

```bash
npm run dev      # http://localhost:3000
npm run build    # must finish with "Compiled successfully" and no type errors
```

### Rules:
- Copy each file EXACTLY as provided — character for character, including every className, inline style and number
- Do NOT modify, refactor, rename, reformat or "improve" anything
- Do NOT change any Tailwind classes, design tokens, colours, fonts or breakpoints
- Do NOT add a tailwind.config.js — Tailwind v4 reads its theme from @theme in globals.css
- Do NOT add GSAP, Framer Motion or any other animation library
- Do NOT add external features or unnecessary abstractions
- ScrollProgressBar and CustomCursor are mounted ONCE, in /app/layout.tsx — do not also mount them in page.tsx
- All media assets are remote (Cloudinary + GitHub Raw CDN) — do not download or replace them
- Use the exact dependency versions above
- Just create the files, install the dependencies, and the project will run with 100% fidelity on mobile, tablet and desktop
