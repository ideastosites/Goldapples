"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { hero } from "@/content/home";

/**
 * The one hero-level mouse-reactive moment per design.md §8: the abstract
 * signal motif tilts a few degrees toward the cursor. Disabled entirely
 * under prefers-reduced-motion and on touch devices (no pointer to react to,
 * so it simply renders static).
 */
function HeroMotif() {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rotateX = useSpring(rawX, { stiffness: 120, damping: 20 });
  const rotateY = useSpring(rawY, { stiffness: 120, damping: 20 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (reducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    rawY.set(px * 6);
    rawX.set(py * -6);
  }

  function handleMouseLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative mx-auto aspect-square w-full max-w-[420px]"
      style={{ perspective: 800 }}
    >
      <motion.svg
        viewBox="0 0 320 320"
        fill="none"
        aria-hidden="true"
        style={reducedMotion ? undefined : { rotateX, rotateY }}
        className="h-full w-full"
      >
        <circle cx="60" cy="160" r="14" stroke="#12100D" strokeWidth="1.5" />
        <circle cx="160" cy="70" r="10" stroke="#12100D" strokeWidth="1.5" />
        <circle cx="160" cy="250" r="10" stroke="#12100D" strokeWidth="1.5" />
        <circle cx="260" cy="160" r="18" stroke="#B98F3E" strokeWidth="1.5" />
        <circle cx="260" cy="160" r="4" fill="#B98F3E" />
        <path d="M73 155 L150 100" stroke="#12100D" strokeWidth="1.5" />
        <path d="M73 165 L150 235" stroke="#12100D" strokeWidth="1.5" />
        <path d="M170 78 L246 148" stroke="#12100D" strokeWidth="1.5" />
        <path d="M170 245 L246 172" stroke="#12100D" strokeWidth="1.5" />
        <path
          d="M60 160 Q 160 30 260 160"
          stroke="#DFBE7E"
          strokeWidth="1.5"
          strokeDasharray="2 6"
        />
      </motion.svg>
    </div>
  );
}

export function Hero() {
  return (
    <section className="border-graphite/10 relative overflow-hidden border-b bg-white">
      <Container className="grid items-center gap-16 py-28 lg:grid-cols-12 lg:py-36">
        <div className="lg:col-span-7">
          <p className="text-ink border-gold-deep max-w-[26ch] border-l-2 pl-5 font-serif text-2xl leading-snug italic md:text-3xl">
            &ldquo;{hero.quote}&rdquo;
          </p>
          <p className="text-steel mt-3 pl-5 text-sm">— {hero.quoteAuthor}</p>

          <h1 className="text-ink mt-10 max-w-[20ch] font-serif text-4xl leading-[1.12] md:text-5xl lg:text-6xl">
            {hero.heading}
          </h1>
          <p className="text-steel mt-6 max-w-[58ch] text-lg leading-relaxed">
            {hero.body}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Button href={hero.primaryCta.href} variant="gold">
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>

        <div className="hidden lg:col-span-5 lg:block">
          <HeroMotif />
        </div>
      </Container>
    </section>
  );
}
