"use client";

import { useReducedMotion, motion } from "framer-motion";

export function SignalMotif({ className = "", stroke = "#F7EEDC" }: { className?: string, stroke?: string }) {
  const reducedMotion = useReducedMotion();

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 0.7,
      transition: { duration: 1.5, ease: "easeOut" as any }
    }
  };

  const circleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" as any }
    }
  };

  return (
    <div className={className}>
      <motion.svg
        viewBox="0 0 400 100"
        fill="none"
        aria-hidden="true"
        className="h-full w-full"
        initial={reducedMotion ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Source Node */}
        <motion.circle variants={circleVariants} cx="20" cy="50" r="8" stroke={stroke} strokeWidth="1.5" />
        
        {/* Path with distortion */}
        <motion.path 
          variants={pathVariants}
          d="M36 50 L120 50 L140 20 L160 80 L180 50 L340 50" 
          stroke={stroke} 
          strokeWidth="1.5" 
          opacity="0.7" 
        />
        
        {/* Interference Nodes */}
        <motion.circle variants={circleVariants} cx="140" cy="20" r="3" fill={stroke} />
        <motion.circle variants={circleVariants} cx="160" cy="80" r="3" fill={stroke} />
        
        {/* Receiver Node */}
        <motion.circle variants={circleVariants} cx="360" cy="50" r="14" stroke={stroke} strokeWidth="1.5" />
        <motion.circle variants={circleVariants} cx="360" cy="50" r="4" fill={stroke} />
      </motion.svg>
    </div>
  );
}
