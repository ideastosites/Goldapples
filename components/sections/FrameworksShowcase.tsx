"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconSwatch } from "@/components/ui/IconSwatch";
import { PhysicsOfCommunicationDiagram } from "@/components/diagrams/PhysicsOfCommunicationDiagram";
import { MeaningFrameworkDiagram } from "@/components/diagrams/MeaningFrameworkDiagram";
import { LeadershipAlignmentDiagram } from "@/components/diagrams/LeadershipAlignmentDiagram";
import { LeadershipCommunicationLabDiagram } from "@/components/diagrams/LeadershipCommunicationLabDiagram";
import { IconMeaning, IconClarify, IconAlignment, IconLab } from "@/components/icons";

type Framework = {
  id: string;
  title: string;
  body: string;
};

const diagrams: Record<string, React.ReactNode> = {
  "physics-of-communication": <PhysicsOfCommunicationDiagram />,
  "meaning-framework": <MeaningFrameworkDiagram />,
  "leadership-alignment-framework": <LeadershipAlignmentDiagram />,
  "leadership-communication-lab": <LeadershipCommunicationLabDiagram />,
};

const icons = [IconMeaning, IconClarify, IconAlignment, IconLab];

export function FrameworksShowcase({ frameworks }: { frameworks: Framework[] }) {
  const [activeId, setActiveId] = useState(frameworks[0]?.id);

  const activeIndex = frameworks.findIndex((fw) => fw.id === activeId);
  const activeFw = frameworks[activeIndex] || frameworks[0];
  const ActiveDiagram = diagrams[activeFw.id];

  return (
    <div className="grid gap-8 lg:grid-cols-12">
      {/* Left Column: Vertical tab list */}
      <div className="flex flex-col gap-3 lg:col-span-4">
        {frameworks.map((fw, i) => {
          const Icon = icons[i];
          const isActive = activeId === fw.id;

          return (
            <button
              key={fw.id}
              onClick={() => setActiveId(fw.id)}
              className={`w-full flex items-start gap-4 p-5 rounded-[4px] text-left transition-all duration-300 border ${
                isActive
                  ? "bg-champagne/45 border-gold-deep shadow-[0_4px_16px_rgba(185,143,62,0.06)] text-ink"
                  : "bg-white border-graphite/10 text-steel hover:text-ink hover:border-graphite/20"
              }`}
            >
              <div className="flex-shrink-0 mt-0.5">
                <IconSwatch icon={Icon} tone={isActive ? "gold" : "outline-dark"} />
              </div>
              <div>
                <span className={`block font-serif text-lg leading-snug transition-colors duration-200 ${
                  isActive ? "text-ink font-semibold" : "text-graphite/90"
                }`}>
                  {fw.title}
                </span>
                <span className="block mt-1 font-mono text-[10px] uppercase tracking-wider text-steel opacity-80">
                  Framework {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Right Column: Detailed visual card */}
      <div className="lg:col-span-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFw.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex flex-col justify-between h-full border border-graphite/12 bg-white p-6 sm:p-8 rounded-[4px] shadow-xs"
          >
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-gold-deep" />
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-gold-deep">
                  Active Model
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-ink font-semibold leading-snug mb-4">
                {activeFw.title}
              </h2>
              <p className="text-steel text-[15px] sm:text-base leading-relaxed mb-8 max-w-[62ch]">
                {activeFw.body}
              </p>
            </div>
            
            <div className="border border-graphite/10 bg-white p-6 sm:p-8 rounded-[2px] flex items-center justify-center min-h-[220px] sm:min-h-[280px]">
              {ActiveDiagram}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
