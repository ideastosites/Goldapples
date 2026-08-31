"use client";

import { motion, useReducedMotion } from "framer-motion";

export function SignalDivider({ className = "", tone = "gold" }: { className?: string; tone?: "gold" | "ink" }) {
  const reducedMotion = useReducedMotion();
  
  const colorClass = tone === "gold" ? "text-gold-deep/40" : "text-ink/20";
  const nodeColor = tone === "gold" ? "text-gold-deep" : "text-ink";

  return (
    <div className={`w-full flex justify-center overflow-hidden ${className}`} aria-hidden="true">
      <motion.svg 
        viewBox="0 0 800 24" 
        fill="none" 
        className="w-full max-w-[800px] h-6"
        initial={reducedMotion ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* The line drawing in */}
        <motion.path 
          d="M0 12 L380 12 L390 4 L410 20 L420 12 L800 12" 
          stroke="currentColor" 
          strokeWidth="1" 
          className={colorClass}
          strokeLinejoin="round"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: { 
              pathLength: 1, 
              opacity: 1,
              transition: { duration: 1.5, ease: "easeInOut" as any } 
            }
          }}
        />
        {/* The node fading in */}
        <motion.circle 
          cx="400" cy="12" r="3" 
          fill="currentColor" 
          className={nodeColor}
          variants={{
            hidden: { scale: 0, opacity: 0 },
            visible: { 
              scale: 1, 
              opacity: 1,
              transition: { delay: 1, duration: 0.5, ease: "easeOut" as any } 
            }
          }}
        />
      </motion.svg>
    </div>
  );
}
