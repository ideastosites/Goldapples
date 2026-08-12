"use client";

import { useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Slow, continuous horizontal ticker (design.md §4/§8) — pauses on
 * hover/focus, renders as a static wrapped list under prefers-reduced-motion.
 */
export function Marquee({
  children,
  className = "",
  durationSeconds = 32,
}: {
  children: ReactNode;
  className?: string;
  durationSeconds?: number;
}) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={`flex flex-wrap gap-3 ${className}`}>{children}</div>;
  }

  return (
    <div className={`group overflow-hidden ${className}`}>
      <div
        className="flex w-max shrink-0 [animation:marquee_var(--marquee-duration)_linear_infinite] gap-3 group-hover:[animation-play-state:paused]"
        style={{ "--marquee-duration": `${durationSeconds}s` } as React.CSSProperties}
      >
        <div className="flex shrink-0 gap-3">{children}</div>
        <div aria-hidden="true" className="flex shrink-0 gap-3">
          {children}
        </div>
      </div>
    </div>
  );
}
