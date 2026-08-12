"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { DuotonePhoto } from "@/components/ui/DuotonePhoto";
import { hero } from "@/content/home";

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
    rawY.set(px * 8);
    rawX.set(py * -8);
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
      className="absolute inset-0"
      style={{ perspective: 800 }}
    >
      <motion.svg
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden="true"
        style={reducedMotion ? undefined : { rotateX, rotateY }}
        className="h-full w-full"
      >
        <circle cx="80" cy="200" r="18" stroke="#F7EEDC" strokeWidth="1.5" />
        <circle cx="200" cy="90" r="13" stroke="#F7EEDC" strokeWidth="1.5" />
        <circle cx="200" cy="310" r="13" stroke="#F7EEDC" strokeWidth="1.5" />
        <circle
          cx="330"
          cy="200"
          r="24"
          fill="#F7EEDC"
          fillOpacity="0.15"
          stroke="#F7EEDC"
          strokeWidth="1.5"
        />
        <circle cx="330" cy="200" r="5" fill="#F7EEDC" />
        <path d="M96 193 L189 122" stroke="#F7EEDC" strokeWidth="1.5" opacity="0.7" />
        <path d="M96 207 L189 298" stroke="#F7EEDC" strokeWidth="1.5" opacity="0.7" />
        <path d="M212 100 L312 185" stroke="#F7EEDC" strokeWidth="1.5" opacity="0.7" />
        <path d="M212 305 L312 215" stroke="#F7EEDC" strokeWidth="1.5" opacity="0.7" />
        <path
          d="M80 200 Q 200 40 330 200"
          stroke="#F7EEDC"
          strokeWidth="1.5"
          strokeDasharray="2 8"
          opacity="0.5"
        />
      </motion.svg>
    </div>
  );
}

export function Hero() {
  return (
    <section className="grid overflow-hidden lg:grid-cols-12">
      <div className="bg-ink relative flex flex-col justify-center gap-8 px-6 py-20 sm:px-10 lg:col-span-7 lg:px-16 lg:py-28">
        <p className="border-gold-deep text-champagne max-w-[26ch] border-l-2 pl-5 font-serif text-2xl leading-snug italic md:text-3xl">
          &ldquo;{hero.quote}&rdquo;
        </p>
        <p className="text-champagne/60 pl-5 text-sm">— {hero.quoteAuthor}</p>

        <h1 className="max-w-[20ch] font-serif text-4xl leading-[1.1] text-white md:text-5xl lg:text-6xl">
          {hero.heading}
        </h1>
        <p className="text-champagne/70 max-w-[56ch] text-lg leading-relaxed">
          {hero.body}
        </p>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <Button href={hero.primaryCta.href} variant="gold">
            {hero.primaryCta.label}
          </Button>
          <Link
            href={hero.secondaryCta.href}
            className="hover:text-gold min-h-11 border-b border-white/40 py-2 text-sm font-semibold text-white transition-colors hover:border-white"
          >
            {hero.secondaryCta.label}
          </Link>
        </div>
      </div>

      <div className="from-gold-deep to-gold relative hidden min-h-[560px] overflow-hidden bg-linear-to-br lg:col-span-5 lg:block">
        <DuotonePhoto
          src="/assets/photography/founder-session.jpg"
          alt="J. Ayo Makinde presenting the Physics of Communication framework at a Goldapples executive session"
          tone="gold"
          className="absolute inset-0"
          sizes="42vw"
          priority
        />
        <HeroMotif />
      </div>
    </section>
  );
}
