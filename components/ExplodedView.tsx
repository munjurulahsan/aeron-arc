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
      data-theme="dark"
      data-exploded
      className="relative h-[540vh] bg-[#0B0B0B] text-[#F4F3EF]"
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
            className="absolute left-1/2 top-1/2 z-[9] -translate-x-1/2 -translate-y-1/2 max-w-none filter drop-shadow-[0_30px_48px_rgba(0,0,0,0.72)]"
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
          className="absolute left-[clamp(16px,4vw,56px)] top-1/2 z-[40] max-w-[clamp(240px,30vw,430px)] -translate-y-1/2"
        >
          {/* Eyebrow: 06 —— ANATOMY */}
          <div className="mb-[22px] flex items-center gap-[14px] font-mono text-[10.5px] tracking-[0.22em] text-[#B9BCC0]">
            <span className="text-[#D8FF3E]">06</span>
            <span className="h-[1px] w-[54px] bg-[#B9BCC0]/40" />
            <span>ANATOMY</span>
          </div>

          {/* Headline */}
          <h2 className="m-0 font-sans text-[clamp(1.9rem,4.4vw,4.2rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.04em] text-[#F4F3EF]">
            Every layer
            <br />
            has a purpose.
          </h2>

          {/* Subtitle */}
          <p className="mt-[24px] font-mono text-[10.5px] leading-[1.9] tracking-[0.18em] text-[#B9BCC0]/85 uppercase">
            ENGINEERED FROM
            <br />
            THE INSIDE OUT.
          </p>

          {/* 8 Component Step Indicator Bars */}
          <div className="mt-[34px] flex h-[6px] items-end gap-[7px]">
            {CALLOUTS.map((_, i) => (
              <span
                key={i}
                data-part-step={i}
                className="h-[1px] w-[15px] bg-[rgba(244,243,239,0.22)] transition-all duration-450 ease-out"
              />
            ))}
          </div>

          {/* Disassembly Readout */}
          <div className="mt-[14px] font-mono text-[10px] tracking-[0.2em] text-[#B9BCC0]/60">
            <span ref={idxRef}>01</span> / 08 &nbsp;·&nbsp;{" "}
            <span ref={pctRef}>000</span>% SEPARATED
          </div>
        </div>
      </div>
    </section>
  );
}
