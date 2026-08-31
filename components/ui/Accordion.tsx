"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export type AccordionItem = {
  id: string;
  title: string;
  body: string | React.ReactNode;
  icon?: React.ReactNode;
};

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);
  const reducedMotion = useReducedMotion();
  const safeReducedMotion = isMounted ? reducedMotion : false;

  return (
    <div className="border-graphite/12 divide-graphite/12 divide-y border-t border-b">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} id={item.id} className="scroll-mt-28">
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              className="flex min-h-14 w-full items-center justify-between gap-6 py-6 text-left"
            >
              <span className="text-ink flex items-center gap-4 font-serif text-xl md:text-2xl">
                {item.icon && <span className="shrink-0">{item.icon}</span>}
                {item.title}
              </span>
              <span
                aria-hidden="true"
                className={`text-gold-deep shrink-0 text-2xl leading-none transition-transform duration-200 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={safeReducedMotion ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="text-steel max-w-[68ch] pb-8 text-[15px] leading-relaxed">
                    {item.body}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
