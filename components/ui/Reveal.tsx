"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { revealVariants, revealViewport } from "@/lib/motion";

const tagComponents = {
  div: motion.div,
  span: motion.span,
  p: motion.p,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  li: motion.li,
  ul: motion.ul,
  section: motion.section,
} as const;

type RevealProps = {
  children: ReactNode;
  as?: keyof typeof tagComponents;
  className?: string;
  delay?: number;
};

export function Reveal({ children, as = "div", className, delay = 0 }: RevealProps) {
  const reducedMotion = useReducedMotion();
  const MotionTag = tagComponents[as];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      variants={revealVariants(Boolean(reducedMotion))}
      transition={{ delay: reducedMotion ? 0 : delay }}
    >
      {children}
    </MotionTag>
  );
}
