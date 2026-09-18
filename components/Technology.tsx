"use client";

import { useEffect, useRef } from "react";

export function Technology() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = containerRef.current;
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
      cw = canvas.width = host.offsetWidth;
      ch = canvas.height = host.offsetHeight;
    };
    window.addEventListener("resize", onResize);

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX / window.innerWidth;
      mouse.y = e.clientY / window.innerHeight;
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

        const cx2 = cw / 2 + (mouse.x - 0.5) * cw * 0.1;
        const cy2 = ch / 2 + (mouse.y - 0.5) * ch * 0.08;
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
          const fade = (1 - k) * 0.35;
          if (i === 6) {
            ctx.globalAlpha = Math.min(1, fade * 1.6);
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
      className="relative min-h-[clamp(620px,105svh,1080px)] overflow-hidden bg-[#080808] px-gutter py-[clamp(90px,14vh,180px)] text-[#F4F3EF]"
    >
      <div
        ref={containerRef}
        className="relative mx-auto flex min-h-[clamp(500px,80vh,800px)] max-w-[1560px] flex-col justify-between"
      >
        <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 z-0 h-full w-full" />

        <div className="relative z-10 max-w-[580px]">
          <span className="font-mono text-[11px] tracking-[0.24em] text-[#D8FF3E] uppercase">
            04 SPATIAL ENGINE
          </span>
          <h2 className="mt-4 font-sans text-[clamp(36px,5.6vw,84px)] font-extrabold tracking-[-0.03em] leading-[0.94] uppercase">
            Sound without <br />
            <span className="font-serif font-light italic">direction.</span>
          </h2>
          <p className="mt-6 font-mono text-sm leading-relaxed text-mute">
            AERON ARC creates a dimensional soundstage that responds naturally to your head movement. Turn your head and the room stays where it is.
          </p>
        </div>

        <div className="relative z-10 flex items-center justify-between border-t border-line pt-6 font-mono text-[11px] tracking-[0.2em] text-mute">
          <span>MOVE YOUR CURSOR TO SHIFT SOUND FIELD</span>
          <span className="text-[#D8FF3E]">64-POINT RESIDUAL MATRIX</span>
        </div>
      </div>
    </section>
  );
}
