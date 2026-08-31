"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export type TabItem = {
  id: string;
  label: string;
  content: React.ReactNode;
};

export function Tabs({
  tabs,
  defaultTab,
  tabListClassName = "",
  activeTabClassName = "border-gold-deep text-ink",
  inactiveTabClassName = "border-transparent text-steel hover:text-ink",
}: {
  tabs: TabItem[];
  defaultTab?: string;
  tabListClassName?: string;
  activeTabClassName?: string;
  inactiveTabClassName?: string;
}) {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);
  const [active, setActive] = useState(defaultTab ?? tabs[0]?.id);
  const reducedMotion = useReducedMotion();
  const safeReducedMotion = isMounted ? reducedMotion : false;
  const activeTab = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <div>
      <div role="tablist" className={`flex flex-wrap gap-1 ${tabListClassName}`}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            type="button"
            aria-selected={active === tab.id}
            onClick={() => setActive(tab.id)}
            className={`min-h-11 border-b-2 px-4 text-sm font-semibold transition-colors duration-150 ${
              active === tab.id ? activeTabClassName : inactiveTabClassName
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab?.id}
          initial={safeReducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          {activeTab?.content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
