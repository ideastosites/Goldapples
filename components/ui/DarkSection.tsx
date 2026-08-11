import type { ReactNode } from "react";

type DarkSectionProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Ink-background section per design.md §2/§10 — a deliberate rhythm device,
 * used at specific named slots per page, never back-to-back with another
 * dark section. `data-dark-section` lets the grain overlay recolor its
 * particles when drifting over this surface.
 */
export function DarkSection({ children, className = "" }: DarkSectionProps) {
  return (
    <section data-dark-section className={`bg-ink text-champagne ${className}`}>
      {children}
    </section>
  );
}
