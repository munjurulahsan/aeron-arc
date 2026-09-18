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
