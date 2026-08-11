"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export type AccordionItem = {
  id: string;
  title: string;
  body: string | React.ReactNode;
};

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);
  const reducedMotion = useReducedMotion();

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
              <span className="text-ink font-serif text-xl md:text-2xl">
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
                  initial={reducedMotion ? false : { height: 0, opacity: 0 }}
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
