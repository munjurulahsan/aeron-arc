## Environment

This template is structured for a Next.js project with the App Router:

- File paths use /components/..., /lib/..., and /app/...
- Components use the "use client" directive where client-side interactivity is required
- Imports use the @/... path alias (e.g. @/components/..., @/lib/...)
- Tailwind CSS (v4) for styling
- lenis for smooth momentum scrolling
- All media assets (images and videos) are cloud-hosted via Cloudinary and GitHub Raw CDN, requiring no local media files

If you support this exact structure, apply the files below as written.

If your builder uses a different structure (e.g. /src directory, Pages Router, or Vite + React), adapt the file paths and entry point — but keep every component file's CODE 100% IDENTICAL to what's provided below. Do not rewrite, refactor, or reinterpret any component.

The only adaptations allowed are:
- File paths (e.g. /src/components/... instead of /components/...)
- Entry point file (e.g. src/App.tsx instead of app/page.tsx)
- Removing "use client" directives if your builder doesn't use Next.js
- Replacing the @/... alias with the correct relative path
- Replacing Next.js-specific imports with standard <img> tags only if your builder doesn't support Next.js
- Installing any missing dependencies via your builder's package manager before applying the files

Everything else — JSX, hooks, component names, exports, props, className values, animations, styling, and logic — stays exactly as written. The output must run without any errors.

---

## Add Template: AERON ARC — Sound, Reimagined Landing Page

### File 1 of 17: /lib/content.ts

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
  { href: "#technology", label: "TECHNOLOGY" },
  { href: "#experience", label: "EXPERIENCE" },
  { href: "#support", label: "SUPPORT" },
];

export const gallerySlides = [
  { id: "01", tag: "MORNING", title: "Commute in absolute silence.", img: `${ASSET_BASE}/35dd1095-6232-46ed-97ff-c4e80a85810f.jpg` },
  { id: "02", tag: "MOVEMENT", title: "Locked in place. Defying gravity.", img: `${ASSET_BASE}/158ab694-41c6-4334-bb1d-801f1d85fc82.jpg` },
  { id: "03", tag: "FOCUS", title: "Zero distractions in deep studio flow.", img: `${ASSET_BASE}/ed05537a-9453-422b-9f08-258b3a2a19d6.jpg` },
  { id: "04", tag: "NIGHT", title: "Warm timbre under ambient glow.", img: `${ASSET_BASE}/096c8515-c4be-4524-a90d-678c13bfde2d.jpg` },
  { id: "05", tag: "IMMERSION", title: "Spatial cinema right in your ears.", img: `${ASSET_BASE}/35dd1095-6232-46ed-97ff-c4e80a85810f.jpg` },
];

### File 2 of 17: /components/Nav.tsx

"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/lib/content";

type Props = {
  cartCount: number;
  onOpenCart: () => void;
};

export function Nav({ cartCount, onOpenCart }: Props) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const handleScroll = () => {
      const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-theme]"));
      let currentTheme: "dark" | "light" = "dark";
      for (const sec of sections) {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= 64 && rect.bottom > 64) {
          currentTheme = (sec.getAttribute("data-theme") as "dark" | "light") || "dark";
        }
      }
      setTheme(currentTheme);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = theme === "light" ? "text-[#080808]" : "text-[#F4F3EF]";

  return (
    <header
      data-nav
      className={`fixed left-0 right-0 top-0 z-[80] flex h-[90px] items-center justify-between pointer-events-none px-gutter py-[26px] transition-colors duration-500 ${textColor}`}
    >
      <a
        href="#top"
        data-cursor="TOP"
        className="pointer-events-auto font-sans font-extrabold text-[18px] tracking-[0.26em] leading-none uppercase"
      >
        AERON
      </a>

      <nav className="hidden pointer-events-auto md:flex items-center gap-[clamp(18px,2.4vw,37px)]">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            data-cursor="VIEW"
            className="font-mono text-[11px] tracking-[0.2em] opacity-80 hover:opacity-100 transition-opacity"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <button
        type="button"
        onClick={onOpenCart}
        data-cursor="OPEN"
        data-magnetic
        className="pointer-events-auto flex flex-shrink-0 items-center gap-2.5 rounded-full border border-current bg-transparent px-5 py-[9px] font-mono text-[11px] tracking-[0.18em] transition-all duration-300 hover:bg-white/10"
      >
        <span>BUY AERON ARC</span>
        <span data-cart-count className="tabular-nums opacity-75">
          {cartCount > 0 ? cartCount : 1}
        </span>
      </button>
    </header>
  );
}

### File 3 of 17: /components/Hero.tsx

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
    const timer = setTimeout(() => setIsVisible(true), 50);

    const el = sectionRef.current;
    if (!el) return () => clearTimeout(timer);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -120px 0px",
      }
    );

    observer.observe(el);
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="top"
      data-theme="dark"
      className="relative flex min-h-svh w-full flex-col justify-between overflow-hidden bg-[#080808] px-gutter pb-[clamp(24px,4vh,48px)] pt-[clamp(96px,14vh,160px)] text-[#F4F3EF]"
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
        className={`relative z-10 my-auto flex w-full flex-col select-none py-2 md:py-4 transition-all duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] ${
          isVisible
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-36 opacity-0 scale-[0.92]"
        }`}
      >
        {/* Line 1: SOUND, (Left-aligned) */}
        <div data-hero-type="left" className="w-full">
          <h1 className="m-0 font-sans text-[clamp(2.6rem,9.4vw,10.5rem)] font-extrabold uppercase leading-[0.84] tracking-[-0.045em] text-[#F4F3EF]">
            SOUND,
          </h1>
        </div>

        {/* Line 2: REIMAGINED. (Close spacing to Line 1 + offset horizontally to x=527px) */}
        <div
          data-hero-type="right"
          className="mt-[clamp(12px,3vw,40px)] md:ml-[clamp(40px,28vw,470px)]"
        >
          <h2 className="m-0 font-sans text-[clamp(2.6rem,9.4vw,10.5rem)] font-extrabold uppercase leading-[0.84] tracking-[-0.045em] text-[#F4F3EF]">
            REIMAGINED.
          </h2>
        </div>
      </div>

      {/* Bottom Row: Meta, CTAs & Scroll Indicator */}
      <div
        className={`relative z-10 mt-auto flex w-full flex-wrap items-end justify-between gap-7 pt-4 transition-all duration-[1600ms] delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] ${
          isVisible
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-36 opacity-0 scale-[0.92]"
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

### File 4 of 17: /components/Product.tsx

"use client";

import { useState, useEffect, useRef } from "react";
import { media } from "@/lib/content";

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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -120px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="product"
      data-theme="dark"
      className="relative overflow-hidden bg-[#0C0C0C] px-gutter py-[clamp(80px,12vh,160px)] text-[#F4F3EF]"
    >
      <div
        className={`mx-auto max-w-[1424px] transition-all duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] ${
          isVisible
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-36 opacity-0 scale-[0.92]"
        }`}
      >
        {/* Eyebrow Meta: 02 —— PRODUCT */}
        <div className="mb-[clamp(24px,4vh,44px)] flex items-center gap-[14px]">
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
          <h2 className="m-0 font-sans text-[clamp(2.7rem,8vw,8rem)] font-extrabold uppercase leading-[0.86] tracking-[-0.045em] text-[#F4F3EF]">
            NOT JUST
            <br />
            SOUND.
          </h2>
          <p className="mt-[22px] max-w-[430px] font-sans text-[14px] font-normal leading-[1.7] text-[#B9BCC0]">
            AERON ARC is engineered around the way you actually experience sound — not around a spec sheet.
          </p>
        </div>

        {/* Middle Video Container (Using existing Section 2 video) */}
        <div className="relative my-[clamp(32px,6vh,72px)] h-[clamp(320px,46vw,672px)] w-full overflow-hidden rounded-[16px] md:rounded-[24px] bg-[#151515]">
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
          <div className="absolute bottom-6 left-6 font-mono text-[10.5px] tracking-[0.2em] text-[#D8FF3E]">
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

### File 5 of 17: /components/Experience.tsx

"use client";

import { useState, useEffect, useRef } from "react";
import { media } from "@/lib/content";

export function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -120px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      data-theme="dark"
      className="relative overflow-hidden bg-[#080808] px-gutter py-[clamp(90px,14vh,180px)] text-[#F4F3EF]"
    >
      <div
        className={`relative mx-auto h-[clamp(520px,92svh,940px)] w-full overflow-hidden rounded-3xl transition-all duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] ${
          isVisible
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-36 opacity-0 scale-[0.92]"
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

        <div className="absolute inset-0 flex flex-col justify-between p-8 sm:p-14">
          <span className="font-mono text-[11px] tracking-[0.24em] text-[#D8FF3E] uppercase">
            03 EXPERIENCE
          </span>

          <div className="max-w-[700px]">
            <h2 className="font-sans text-[clamp(32px,5vw,78px)] font-black tracking-[-0.03em] leading-[0.92] uppercase">
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

### File 6 of 17: /components/Technology.tsx

"use client";

import { useState, useEffect, useRef } from "react";
import { media } from "@/lib/content";

export function Technology() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -120px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

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
      className="relative h-[712px] min-h-[640px] xl:h-[712px] overflow-hidden bg-[#080808] px-gutter py-[clamp(48px,8vh,84px)] text-[#F4F3EF]"
    >
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <img
          ref={bgRef}
          src={media.spatialEngineBg}
          alt="AERON ARC Spatial Engine"
          className="h-full w-full object-cover object-center scale-105 transition-transform duration-300 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/70 via-transparent to-[#080808]/70" />
      </div>

      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-[1] h-full w-full opacity-60 mix-blend-screen"
      />

      {/* Content Container (Figma Node 1:266) */}
      <div
        className={`relative z-[2] mx-auto flex h-full max-w-[1424px] flex-col justify-between transition-all duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] ${
          isVisible
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-36 opacity-0 scale-[0.92]"
        }`}
      >
        <div>
          <div className="flex items-center gap-[14px]">
            <span className="font-mono text-[10.5px] font-normal tracking-[0.22em] text-[#D8FF3E]">
              04
            </span>
            <span className="h-[1px] w-[54px] bg-[#B9BCC0]/40" />
            <span className="font-mono text-[10.5px] font-normal tracking-[0.22em] text-[#B9BCC0] uppercase">
              SPATIAL ENGINE
            </span>
          </div>

          <div className="mt-[34px] max-w-[532px]">
            <h2 className="m-0 font-sans text-[clamp(42px,6.25vw,96px)] font-extrabold uppercase leading-[1.12] tracking-[-0.06em] text-[#F4F3EF]">
              SOUND
              <br />
              WITHOUT
              <br />
              DIRECTION.
            </h2>
          </div>
        </div>

        <div className="flex flex-wrap items-end justify-between gap-6 pt-6">
          <p className="m-0 max-w-[400px] font-sans text-[14px] font-normal leading-[1.7] text-[#B9BCC0]">
            AERON ARC creates a dimensional soundstage that responds naturally to your movement. Turn your head and the room stays where it is.
          </p>

          <div className="font-mono text-[10px] font-normal uppercase leading-[2.1] tracking-[0.18em] text-[#B9BCC0]/60 text-right">
            MOVE YOUR CURSOR
            <br />
            TO SHIFT THE FIELD
          </div>
        </div>
      </div>
    </section>
  );
}

### File 7 of 17: /components/Precision.tsx

"use client";

import { useState, useEffect, useRef } from "react";
import { media } from "@/lib/content";

export function Precision() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -120px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="engineering"
      data-theme="dark"
      className="relative min-h-[875px] overflow-hidden bg-[#151515] px-gutter py-[clamp(64px,9vh,97px)] text-[#F4F3EF]"
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
        className={`relative z-10 mx-auto flex h-full max-w-[1424px] flex-col justify-between transition-all duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] ${
          isVisible
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-36 opacity-0 scale-[0.92]"
        }`}
      >
        <div className="w-full">
          <div className="flex items-center gap-[14px]">
            <span className="font-mono text-[10.5px] font-normal tracking-[0.22em] text-[#D8FF3E]">
              05
            </span>
            <span className="h-[1px] w-[54px] bg-[#D8FF3E]/50" />
            <span className="font-mono text-[10.5px] font-normal tracking-[0.22em] text-[#B9BCC0] uppercase">
              ENGINEERING
            </span>
          </div>

          <div className="mt-[34px] max-w-[1076px]">
            <h2 className="m-0 font-sans text-[clamp(42px,6.4vw,98px)] font-extrabold uppercase leading-[1.08] tracking-[-0.045em] text-[#F4F3EF]">
              BUILT WITH
              <br />
              PRECISION.
            </h2>
          </div>
        </div>

        <div className="mt-[clamp(40px,7vh,90px)] grid items-center gap-8 lg:grid-cols-12">
          <div className="flex flex-col gap-10 lg:col-span-4">
            <div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10.5px] font-normal tracking-[0.2em] text-[#D8FF3E]">
                  01
                </span>
                <span className="font-sans text-[14px] font-bold uppercase tracking-[0.06em] text-[#F4F3EF]">
                  TITANIUM ACOUSTIC CHAMBER
                </span>
                <span className="hidden h-[1px] flex-1 bg-[#F4F3EF]/20 sm:block" />
              </div>
              <p className="mt-2 max-w-[280px] pl-[26px] font-sans text-[12.5px] font-normal leading-[1.65] text-[#B9BCC0]/85">
                0.4 mm walls, vacuum-sealed. Resonance measured in single decibels.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10.5px] font-normal tracking-[0.2em] text-[#D8FF3E]">
                  02
                </span>
                <span className="font-sans text-[14px] font-bold uppercase tracking-[0.06em] text-[#F4F3EF]">
                  ADAPTIVE DRIVER
                </span>
                <span className="hidden h-[1px] flex-1 bg-[#F4F3EF]/20 sm:block" />
              </div>
              <p className="mt-2 max-w-[280px] pl-[26px] font-sans text-[12.5px] font-normal leading-[1.65] text-[#B9BCC0]/85">
                11 mm dual-layer diaphragm that stiffens under load.
              </p>
            </div>
          </div>

          <div className="flex justify-center lg:col-span-4">
            <div className="relative w-full max-w-[444px]">
              <img
                src={media.precisionMacro}
                alt="AERON ARC Precision Engineering"
                className="animate-aeron-float h-auto w-full object-contain filter drop-shadow-[0_24px_48px_rgba(0,0,0,0.6)]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-10 lg:col-span-4 lg:items-end">
            <div className="w-full lg:text-right">
              <div className="flex items-center justify-end gap-3">
                <span className="hidden h-[1px] flex-1 bg-[#F4F3EF]/20 sm:block" />
                <span className="font-sans text-[14px] font-bold uppercase tracking-[0.06em] text-[#F4F3EF]">
                  MICRO SENSOR ARRAY
                </span>
                <span className="font-mono text-[10.5px] font-normal tracking-[0.2em] text-[#D8FF3E]">
                  03
                </span>
              </div>
              <p className="mt-2 max-w-[280px] font-sans text-[12.5px] font-normal leading-[1.65] text-[#B9BCC0]/85 lg:ml-auto lg:pr-[26px]">
                Six-axis motion, optical wear detection, bone conduction pickup.
              </p>
            </div>

            <div className="w-full lg:text-right">
              <div className="flex items-center justify-end gap-3">
                <span className="hidden h-[1px] flex-1 bg-[#F4F3EF]/20 sm:block" />
                <span className="font-sans text-[14px] font-bold uppercase tracking-[0.06em] text-[#F4F3EF]">
                  CERAMIC COMPOSITE SHELL
                </span>
                <span className="font-mono text-[10.5px] font-normal tracking-[0.2em] text-[#D8FF3E]">
                  04
                </span>
              </div>
              <p className="mt-2 max-w-[280px] font-sans text-[12.5px] font-normal leading-[1.65] text-[#B9BCC0]/85 lg:ml-auto lg:pr-[26px]">
                Scratch-hardened to 8H. Warm to the touch within seconds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

### File 8 of 17: /components/ExplodedView.tsx

"use client";

import { useEffect, useRef } from "react";
import { explodedParts, masterPart, PART_BOUNDS } from "@/lib/content";

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
          zone.style.top = "32%";
          zone.style.bottom = "16%";
          head.style.top = "clamp(84px,13vh,150px)";
          head.style.transform = "none";
          head.style.maxWidth = "92vw";
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

      const sepRaw = clamp((p - 0.06) / 0.76, 0, 1);
      const appear = clamp((p - 0.02) / 0.07, 0, 1);

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
        master.style.opacity = String(clamp(1 - p / 0.07, 0, 1));
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
      data-theme="dark"
      data-exploded
      className="relative h-[540vh] bg-[#0B0B0B] text-[#F4F3EF]"
    >
      <div
        ref={stageRef}
        data-stage
        className="sticky top-0 h-svh overflow-hidden bg-[#0B0B0B]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(52%_54%_at_62%_48%,rgba(66,65,62,0.44),rgba(11,11,11,0)_70%)]" />
        <div className="pointer-events-none absolute left-[-26%] top-[-48%] h-[150%] w-[126%] rounded-full border border-[rgba(244,243,239,0.032)]" />
        <div className="pointer-events-none absolute bottom-[-74%] left-[4%] h-[140%] w-[118%] rounded-full border border-[rgba(244,243,239,0.026)]" />

        <canvas
          ref={particlesCanvasRef}
          className="pointer-events-none absolute inset-0 z-0 opacity-50"
        />

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(11,11,11,0.7)_0%,rgba(11,11,11,0)_24%,rgba(11,11,11,0)_74%,rgba(11,11,11,0.82)_100%)]" />

        <div
          ref={zoneRef}
          data-parts-zone
          className="absolute bottom-[22%] left-[clamp(0px,37vw,600px)] right-0 top-[12%]"
        >
          <img
            ref={masterRef}
            data-part-master
            src={masterPart.src}
            alt={masterPart.alt}
            className="absolute left-1/2 top-1/2 z-[9] -translate-x-1/2 -translate-y-1/2 max-w-none filter drop-shadow-[0_30px_48px_rgba(0,0,0,0.72)]"
            style={{ height: "26vmin", width: "auto" }}
          />

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

        <div
          ref={headRef}
          data-anatomy-head
          className="absolute left-[clamp(16px,4vw,56px)] top-1/2 z-[40] max-w-[clamp(240px,30vw,430px)] -translate-y-1/2"
        >
          <div className="mb-[22px] flex items-center gap-[14px] font-mono text-[10.5px] tracking-[0.22em] text-[#B9BCC0]">
            <span className="text-[#D8FF3E]">06</span>
            <span className="h-[1px] w-[54px] bg-[#B9BCC0]/40" />
            <span>ANATOMY</span>
          </div>

          <h2 className="m-0 font-sans text-[clamp(1.9rem,4.4vw,4.2rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.04em] text-[#F4F3EF]">
            Every layer
            <br />
            has a purpose.
          </h2>

          <p className="mt-[24px] font-mono text-[10.5px] leading-[1.9] tracking-[0.18em] text-[#B9BCC0]/85 uppercase">
            ENGINEERED FROM
            <br />
            THE INSIDE OUT.
          </p>

          <div className="mt-[34px] flex h-[6px] items-end gap-[7px]">
            {CALLOUTS.map((_, i) => (
              <span
                key={i}
                data-part-step={i}
                className="h-[1px] w-[15px] bg-[rgba(244,243,239,0.22)] transition-all duration-450 ease-out"
              />
            ))}
          </div>

          <div className="mt-[14px] font-mono text-[10px] tracking-[0.2em] text-[#B9BCC0]/60">
            <span ref={idxRef}>01</span> / 08 &nbsp;·&nbsp;{" "}
            <span ref={pctRef}>000</span>% SEPARATED
          </div>
        </div>
      </div>
    </section>
  );
}

### File 9 of 17: /components/Battery.tsx

"use client";

import { useState, useEffect, useRef } from "react";
import { media } from "@/lib/content";

export function Battery() {
  const barRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -120px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

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
      ref={sectionRef}
      data-theme="light"
      className="relative bg-[#F4F3EF] px-[clamp(20px,3.65vw,56px)] py-[clamp(64px,6.34vw,97px)] text-[#080808]"
    >
      <div
        ref={containerRef}
        className={`mx-auto max-w-[1424px] transition-all duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] ${
          isVisible
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-36 opacity-0 scale-[0.92]"
        }`}
      >
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3.5">
              <span className="rounded bg-[#080808] px-1.5 py-0.5 font-mono text-[10.5px] font-normal tracking-[0.22em] text-[#D8FF3E]">
                07
              </span>
              <div className="h-px w-[54px] bg-[#080808]/20" />
              <span className="font-mono text-[10.5px] font-normal tracking-[0.22em] text-[#5B5B58]">
                POWER
              </span>
            </div>

            <h2 className="mt-6 font-sans text-[clamp(44px,5.6vw,86px)] font-[800] leading-[1.05] tracking-[-0.06em] text-[#080808]">
              Power that stays with you.
            </h2>

            <p className="mt-6 max-w-[380px] font-sans text-[14px] leading-[1.7] text-[#4A4A47]">
              Designed for long days, late nights and everything between.
            </p>

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

### File 10 of 17: /components/Acoustics.tsx

"use client";

import { useState, useEffect, useRef } from "react";

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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -120px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      data-theme="dark"
      className="relative bg-[#080808] px-[clamp(20px,3.65vw,56px)] py-[clamp(64px,6.34vw,97px)] text-[#F4F3EF]"
    >
      <div
        className={`mx-auto max-w-[1424px] transition-all duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] ${
          isVisible
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-36 opacity-0 scale-[0.92]"
        }`}
      >
        <div className="flex items-center gap-3.5">
          <span className="font-mono text-[10.5px] font-normal tracking-[0.22em] text-[#D8FF3E]">
            08
          </span>
          <div className="h-px w-[54px] bg-[#B9BCC0]/40" />
          <span className="font-mono text-[10.5px] font-normal tracking-[0.22em] text-[#B9BCC0]">
            INTELLIGENCE
          </span>
        </div>

        <div className="mt-8 grid grid-cols-1 items-end gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-sans text-[clamp(44px,6.25vw,96px)] font-[800] leading-[1.05] tracking-[-0.055em] text-[#F4F3EF]">
              It listens with you.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pb-3 lg:pl-8">
            <p className="max-w-[340px] font-sans text-[14px] leading-[1.7] text-[#B9BCC0]">
              Four systems running quietly in the background, adjusting the sound before you notice it needed adjusting.
            </p>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10">
          {systems.map((s) => (
            <div
              key={s.id}
              className="grid grid-cols-1 items-center gap-3 border-b border-white/10 py-7 transition-colors hover:bg-white/[0.02] md:grid-cols-12"
            >
              <div className="font-mono text-[10.5px] tracking-[0.2em] text-[#D8FF3E] md:col-span-1">
                {s.id}
              </div>
              <div className="font-sans text-[clamp(22px,2.2vw,32px)] font-[700] tracking-[-0.02em] text-[#F4F3EF] md:col-span-5">
                {s.title}
              </div>
              <div className="font-sans text-[12.5px] leading-[1.7] text-[#B9BCC0]/85 md:col-span-6">
                {s.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

### File 11 of 17: /components/Gallery.tsx

"use client";

import { useEffect, useRef } from "react";
import { gallerySlides } from "@/lib/content";

export function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sec = sectionRef.current;
    const track = trackRef.current;
    if (!sec || !track) return;

    const onScroll = () => {
      const vh = window.innerHeight;
      const r = sec.getBoundingClientRect();
      const p = Math.min(Math.max(-r.top / Math.max(1, r.height - vh), 0), 1);
      const dist = Math.max(0, track.scrollWidth - window.innerWidth + 40);
      track.style.transform = `translate3d(${(-p * dist).toFixed(1)}px, 0, 0)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      data-theme="dark"
      data-hgallery
      className="relative h-[360vh] bg-[#0C0C0C] text-[#F4F3EF]"
    >
      <div className="sticky top-0 flex h-svh flex-col justify-between overflow-hidden px-gutter py-12">
        <div className="flex items-center justify-between font-mono text-[11px] tracking-[0.24em] text-[#D8FF3E] uppercase">
          <span>09 A DAY IN ARC</span>
          <span className="text-mute">HORIZONTAL SCROLL MATRIX</span>
        </div>

        <div
          ref={trackRef}
          data-hgallery-track
          className="flex items-center gap-8 will-change-transform"
        >
          {gallerySlides.map((slide) => (
            <div
              key={slide.id}
              className="relative aspect-[16/10] w-[clamp(320px,68vw,780px)] flex-shrink-0 overflow-hidden rounded-2xl bg-[#151515]"
            >
              <img
                src={slide.img}
                alt={slide.title}
                className="h-full w-full object-cover filter brightness-[0.82] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-mono text-xs text-[#D8FF3E]">{slide.tag}</span>
                <h3 className="mt-1 font-sans text-xl font-bold sm:text-2xl">{slide.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="font-mono text-[10px] tracking-widest text-mute">
          DRAG OR SCROLL VERTICALLY TO SCRUB
        </div>
      </div>
    </section>
  );
}

### File 12 of 17: /components/Finishes.tsx

"use client";

import { useState, useEffect, useRef } from "react";
import { FINISHES, media } from "@/lib/content";

type Props = {
  onAddToCart: () => void;
};

export function Finishes({ onAddToCart }: Props) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const active = FINISHES[activeIdx];

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -120px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="support"
      data-theme="light"
      className="relative bg-[#F4F3EF] px-gutter py-[clamp(90px,14vh,180px)] text-[#080808]"
    >
      <div
        className={`mx-auto max-w-[1560px] transition-all duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] ${
          isVisible
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-36 opacity-0 scale-[0.92]"
        }`}
      >
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <span className="font-mono text-[11px] tracking-[0.24em] text-[#080808]/60 uppercase">
              10 FINISHES
            </span>
            <h2 className="mt-4 font-sans text-[clamp(36px,5.6vw,84px)] font-black tracking-[-0.03em] leading-[0.92] uppercase">
              Three finishes. <br />
              <span className="font-serif font-light italic text-[#080808]/70">One form.</span>
            </h2>
            <p className="mt-6 font-mono text-sm leading-relaxed text-[#080808]/70">
              {active.note}
            </p>

            <div className="mt-8 flex gap-3">
              {FINISHES.map((f, i) => (
                <button
                  key={f.name}
                  type="button"
                  data-cursor="SELECT"
                  data-magnetic
                  onClick={() => setActiveIdx(i)}
                  className={`rounded-full border px-5 py-2 font-mono text-xs tracking-widest transition-colors ${
                    i === activeIdx
                      ? "border-[#080808] bg-[#080808] text-[#F4F3EF]"
                      : "border-black/20 text-[#080808] hover:border-black"
                  }`}
                >
                  {f.name.toUpperCase()}
                </button>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-6 border-t border-black/10 pt-8">
              <button
                type="button"
                onClick={onAddToCart}
                data-cursor="BUY"
                data-magnetic
                className="rounded-full bg-[#080808] px-8 py-3.5 font-mono text-xs font-bold tracking-widest text-[#F4F3EF] hover:bg-black/80"
              >
                ADD TO CART — $249
              </button>
            </div>
          </div>

          <div className="relative aspect-square overflow-hidden rounded-3xl bg-[#EAE9E4] p-10 lg:col-span-7">
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

### File 13 of 17: /components/FinalCTA.tsx

"use client";

import { useState, useEffect, useRef } from "react";
import { media } from "@/lib/content";

type Props = {
  onAddToCart?: () => void;
};

export function FinalCTA({ onAddToCart }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -120px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      data-theme="dark"
      className="relative flex min-h-[695px] items-center justify-center overflow-hidden bg-[#050505] text-[#F4F3EF]"
    >
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <img
          src={media.finalCtaBg}
          alt=""
          className="h-full w-full object-cover object-center filter brightness-[0.72] contrast-[1.08]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(5,5,5,0.35)_0%,rgba(5,5,5,0.85)_75%,#050505_100%)]" />
      </div>

      <div
        className={`relative z-10 mx-auto flex w-full max-w-[841px] flex-col items-center px-[clamp(20px,3.65vw,56px)] py-[clamp(80px,7.24vw,111px)] text-center transition-all duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] ${
          isVisible
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-36 opacity-0 scale-[0.92]"
        }`}
      >
        <h2 className="font-sans text-[clamp(48px,7vw,108px)] font-[900] leading-[0.92] tracking-[0.037em] text-[#F4F3EF]">
          Hear what&apos;s next.
        </h2>

        <p className="mt-7 max-w-[400px] font-sans text-[14px] leading-[1.7] text-[#B9BCC0]">
          A new generation of wireless audio, built around how the world sounds to you.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={onAddToCart}
            data-cursor="ORDER"
            data-magnetic
            className="rounded-full bg-[#F4F3EF] px-[30px] py-4 font-mono text-[11px] font-[600] leading-none tracking-[0.16em] text-[#080808] transition-transform duration-300 ease-out hover:scale-105 active:scale-95"
          >
            BUY AERON ARC — $249
          </button>

          <a
            href="#technology"
            data-cursor="LEARN"
            data-magnetic
            className="rounded-full border border-[#F4F3EF]/35 bg-transparent px-[30px] py-4 font-mono text-[11px] font-[400] leading-none tracking-[0.16em] text-[#F4F3EF] transition-colors duration-300 hover:border-[#F4F3EF] hover:bg-white/[0.04]"
          >
            EXPLORE TECHNOLOGY
          </a>
        </div>
      </div>
    </section>
  );
}

### File 14 of 17: /components/Footer.tsx

"use client";

export function Footer() {
  return (
    <footer
      data-theme="dark"
      className="relative border-t border-white/10 bg-[#080808] px-[clamp(20px,3.65vw,56px)] pb-[34px] pt-[62.5px] text-[#F4F3EF]"
    >
      <div className="mx-auto max-w-[1424px]">
        <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-10 md:flex-row md:items-end">
          <div className="select-none font-sans text-[clamp(64px,14.6vw,224px)] font-[900] leading-[0.8] tracking-[-0.05em] text-[#F4F3EF]/[0.05]">
            AERON
          </div>
          <div className="pb-2 font-mono text-[11px] tracking-[0.2em] text-[#B9BCC0]">
            SOUND, REIMAGINED.
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-8">
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

          <div className="flex flex-col gap-2 font-mono text-[10px] leading-[19px] tracking-[0.16em] text-[#B9BCC0]/55">
            <div>MODEL / ARC-01</div>
            <div>CODEC / LDAC · AAC · SBC</div>
            <div>BLUETOOTH / 5.4 LE</div>
            <div>IP RATING / IPX5</div>
            <div>FIRMWARE / 1.04.220</div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 font-mono text-[10px] tracking-[0.16em] text-[#B9BCC0]/45 sm:flex-row sm:items-center">
          <div>© 2026 AERON AUDIO LABORATORIES</div>
          <div>DESIGNED FOR THE WAY YOU HEAR</div>
        </div>
      </div>
    </footer>
  );
}

### File 15 of 17: /components/CartDrawer.tsx

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

### File 16 of 17: /components/CustomCursor.tsx

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

### File 17 of 17: /components/ScrollProgressBar.tsx

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

### Install Dependencies:

npm install lenis

### Styling: /app/globals.css

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

### Next.js Config: /next.config.ts

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

### Update /app/layout.tsx:

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

### Update /app/page.tsx:

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
    const lenis = new Lenis();
    let raf: number;
    const tick = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
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

### Rules:
- Copy each file EXACTLY as provided
- Do NOT modify, refactor, or rename anything
- Do NOT change any Tailwind classes or design tokens
- Do NOT add external features or unnecessary abstractions
- All 19 media assets (images + videos) are cloud-hosted via Cloudinary & GitHub Raw CDN and require no local files
- Just create the files, install the dependencies, and the project will run with 100% fidelity
