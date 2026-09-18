"use client";

import { useEffect, useRef } from "react";
import { explodedParts, masterPart, PART_BOUNDS } from "@/lib/content";

export function ExplodedView() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const zoneRef = useRef<HTMLDivElement>(null);
  const pctRef = useRef<HTMLSpanElement>(null);
  const masterRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const sec = sectionRef.current;
    const stage = stageRef.current;
    const zone = zoneRef.current;
    const pct = pctRef.current;
    const master = masterRef.current;
    if (!sec || !stage || !zone) return;

    const parts = Array.from(sec.querySelectorAll<HTMLElement>("[data-part]"));
    let raf: number;

    const onScroll = () => {
      const vh = window.innerHeight;
      const r = sec.getBoundingClientRect();
      const p = Math.min(Math.max(-r.top / Math.max(1, r.height - vh), 0), 1);

      if (pct) {
        pct.textContent = String(Math.round(p * 100)).padStart(3, "0");
      }

      const narrow = window.innerWidth < 900;
      const zn = zone.getBoundingClientRect();
      const n = parts.length;
      const tw = narrow ? Math.min(Math.max(zn.width * 0.44, 92), 270) : Math.min(Math.max(zn.width * 0.235, 96), 250);

      let stepX = narrow ? tw * 0.1 : tw * 0.46;
      let stepY = narrow ? tw * 0.42 : stepX * 0.56;
      const maxY = zn.height * (narrow ? 0.72 : 0.58);
      if (stepY * (n - 1) > maxY) stepY = maxY / (n - 1);
      const maxX = zn.width * 0.95 - tw;
      if (stepX * (n - 1) > maxX) stepX = maxX / (n - 1);

      const setH = (el: HTMLElement | null, key: string) => {
        if (!el) return;
        const b = PART_BOUNDS[key];
        if (!b) return;
        const aspect = b.w / b.h;
        el.style.height = `${(tw / ((b.x1 - b.x0) * aspect)).toFixed(1)}px`;
      };

      parts.forEach((el) => setH(el.firstElementChild as HTMLElement, el.getAttribute("data-bounds") || ""));
      if (master) setH(master, "part-01-master");

      const sepRaw = Math.min(Math.max((p - 0.06) / 0.76, 0), 1);
      const appear = Math.min(Math.max((p - 0.02) / 0.07, 0), 1);

      if (master) {
        master.style.opacity = String(1 - appear);
      }

      parts.forEach((el, i) => {
        const k = i / (n - 1);
        const dx = (k - 0.5) * stepX * 2.2 * sepRaw;
        const dy = (k - 0.5) * stepY * 2.2 * sepRaw;
        el.style.opacity = String(appear);
        el.style.transform = `translate3d(calc(-50% + ${dx.toFixed(1)}px), calc(-50% + ${dy.toFixed(1)}px), 0)`;
      });
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
      data-exploded
      className="relative h-[540vh] bg-[#0B0B0B] text-[#F4F3EF]"
    >
      <div
        ref={stageRef}
        data-stage
        className="sticky top-0 h-svh overflow-hidden bg-[#0B0B0B]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(52%_54%_at_62%_48%,rgba(66,65,62,0.44),rgba(11,11,11,0)_70%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(11,11,11,0.7)_0%,transparent_24%,transparent_74%,rgba(11,11,11,0.82)_100%)]" />

        {/* Info Column */}
        <div className="absolute left-gutter top-1/2 z-20 -translate-y-1/2 max-w-[clamp(260px,30vw,440px)]">
          <span className="font-mono text-[11px] tracking-[0.24em] text-[#D8FF3E] uppercase">
            06 ANATOMY
          </span>
          <h2 className="mt-4 font-sans text-[clamp(32px,4.5vw,68px)] font-black tracking-[-0.03em] leading-[0.92] uppercase">
            Every layer <br />
            <span className="font-serif font-light italic">has a purpose.</span>
          </h2>
          <p className="mt-6 font-mono text-xs leading-relaxed text-mute">
            ENGINEERED FROM THE INSIDE OUT. Every component is isolated from thermal and vibrational interference.
          </p>
          <div className="mt-8 font-mono text-xs text-[#D8FF3E]">
            DISASSEMBLY: <span ref={pctRef}>000</span> %
          </div>
        </div>

        {/* Exploded Parts Stage */}
        <div
          ref={zoneRef}
          data-parts-zone
          className="absolute bottom-[20%] left-[clamp(0px,37vw,600px)] right-0 top-[14%]"
        >
          <img
            ref={masterRef}
            data-part-master
            src={masterPart.src}
            alt={masterPart.alt}
            className="absolute left-1/2 top-1/2 z-[9] -translate-x-1/2 -translate-y-1/2 max-w-none filter drop-shadow-[0_30px_48px_rgba(0,0,0,0.85)]"
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
                className="block max-w-none filter drop-shadow-[0_26px_40px_rgba(0,0,0,0.8)]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
