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
