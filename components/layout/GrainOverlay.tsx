"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
};

const PARTICLE_COUNT_DESKTOP = 32;
const PARTICLE_COUNT_MOBILE = 16;

/**
 * Single fixed <canvas> overlay per design.md §8: film-grain texture +
 * slow-drifting dust particles, always on but never a focal point. Grain is
 * redrawn as static noise on a slow interval (not every frame) to stay cheap;
 * particles animate continuously unless the user prefers reduced motion, in
 * which case they render once and freeze.
 */
export function GrainOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let particles: Particle[] = [];
    let animationFrame = 0;
    let isDarkSection = false;
    let grainPattern: CanvasPattern | null = null;

    function resize() {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      const context = canvas!.getContext("2d");
      context?.setTransform(dpr, 0, 0, dpr, 0, 0);
      seedParticles();
    }

    function seedParticles() {
      const count = width < 768 ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT_DESKTOP;
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1 + 1,
        speedX: (Math.random() - 0.5) * 0.08,
        speedY: (Math.random() - 0.5) * 0.08,
        opacity: Math.random() * 0.25 + 0.1,
      }));
    }

    function detectDarkSection() {
      const el = document.elementFromPoint(width / 2, height / 2);
      isDarkSection = Boolean(el?.closest("[data-dark-section]"));
    }

    function regenerateGrainPattern() {
      if (!ctx) return;
      const grainCanvas = document.createElement("canvas");
      grainCanvas.width = 64;
      grainCanvas.height = 64;
      const gctx = grainCanvas.getContext("2d");
      if (!gctx) return;
      const imageData = gctx.createImageData(64, 64);
      for (let i = 0; i < imageData.data.length; i += 4) {
        const value = Math.random() * 255;
        imageData.data[i] = value;
        imageData.data[i + 1] = value;
        imageData.data[i + 2] = value;
        imageData.data[i + 3] = 14;
      }
      gctx.putImageData(imageData, 0, 0);
      grainPattern = ctx.createPattern(grainCanvas, "repeat");
    }

    function drawGrain() {
      if (!ctx || !grainPattern) return;
      ctx.save();
      ctx.globalCompositeOperation = "overlay";
      ctx.fillStyle = grainPattern;
      ctx.fillRect(0, 0, width, height);
      ctx.restore();
    }

    function drawParticles() {
      if (!ctx) return;
      detectDarkSection();
      const color = isDarkSection ? "247, 238, 220" : "51, 50, 47";
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${p.opacity})`;
        ctx.fill();

        if (!reducedMotion) {
          p.x += p.speedX;
          p.y += p.speedY;
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        }
      }
    }

    function frame() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      drawGrain();
      drawParticles();
      if (!reducedMotion) {
        animationFrame = requestAnimationFrame(frame);
      }
    }

    resize();
    window.addEventListener("resize", resize);
    regenerateGrainPattern();
    const grainInterval = reducedMotion
      ? undefined
      : setInterval(regenerateGrainPattern, 3200);
    frame();

    return () => {
      window.removeEventListener("resize", resize);
      if (grainInterval) clearInterval(grainInterval);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-40"
      style={{ mixBlendMode: "overlay" }}
    />
  );
}
