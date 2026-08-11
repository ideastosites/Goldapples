import type { Variants } from "framer-motion";

/**
 * Section-reveal variants per design.md §8: fade + 12–16px slide-up, 150–250ms
 * ease-out, once per section. Consumers pass `reducedMotion` (from
 * useReducedMotion()) so the travel/opacity delay collapses to an instant
 * reveal instead of being skipped — content must never be gated by motion.
 */
export function revealVariants(reducedMotion: boolean): Variants {
  if (reducedMotion) {
    return {
      hidden: { opacity: 1, y: 0 },
      visible: { opacity: 1, y: 0 },
    };
  }
  return {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.25, ease: "easeOut" },
    },
  };
}

export const revealViewport = { once: true, margin: "-80px" };

export function staggerContainer(reducedMotion: boolean, stagger = 0.08): Variants {
  return {
    hidden: {},
    visible: {
      transition: reducedMotion ? {} : { staggerChildren: stagger },
    },
  };
}
