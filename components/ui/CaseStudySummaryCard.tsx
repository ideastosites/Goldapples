"use client";

import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

import Image from "next/image";

type CaseStudy = {
  title: string;
  sector: string;
  image: string;
  challenge: string;
  approach: string;
  whatChanged: string;
  keyInsight: string;
};

const detailParts: { key: keyof CaseStudy; label: string }[] = [
  { key: "challenge", label: "Challenge" },
  { key: "approach", label: "Goldapples Approach" },
  { key: "whatChanged", label: "What Changed" },
  { key: "keyInsight", label: "Key Insight" },
];

export function CaseStudySummaryCard({
  study,
  index,
  delay = 0,
}: {
  study: CaseStudy;
  index: number;
  delay?: number;
}) {
  const [open, setOpen] = useState(false);
  const modalId = `case-study-modal-${index}`;
  const titleId = `case-study-title-${index}`;

  return (
    <>
      <Reveal
        delay={delay}
        className="group flex flex-col justify-between overflow-hidden border border-graphite/12 bg-white transition-all duration-300 hover:border-gold-deep/30 hover:shadow-[0_12px_32px_-12px_rgba(18,16,13,0.15)]"
      >
        {/* Card Image */}
        <div className="relative aspect-[3/2] w-full overflow-hidden bg-champagne/30">
          <Image
            src={study.image}
            alt={study.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>

        {/* Card Body */}
        <div className="flex flex-1 flex-col justify-between gap-6 p-6">
          {/* Key Insight */}
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-gold-deep">
              Key Insight
            </span>
            <p className="font-serif text-lg italic leading-relaxed text-ink">
              &ldquo;{study.keyInsight}&rdquo;
            </p>
          </div>

          {/* CTA */}
          <Button
            type="button"
            variant="secondary"
            onClick={() => setOpen(true)}
            aria-haspopup="dialog"
            aria-controls={modalId}
            className="self-start mt-auto"
          >
            Learn More →
          </Button>
        </div>
      </Reveal>

      {/* Full case study modal */}
      <Modal open={open} onClose={() => setOpen(false)} labelledBy={titleId}>
        <div>
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-steel">
            {study.sector}
          </span>
          <h2
            id={titleId}
            className="mt-2 font-serif text-2xl leading-snug text-ink"
          >
            {study.title}
          </h2>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {detailParts.map((part) => (
            <div
              key={part.key}
              className={`rounded-[2px] p-5 ${
                part.key === "keyInsight"
                  ? "bg-champagne sm:col-span-2"
                  : "bg-champagne/30"
              }`}
            >
              <span className="border-l-2 border-gold-deep pl-2 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-graphite">
                {part.label}
              </span>
              <p
                className={`mt-2 text-[15px] leading-relaxed ${
                  part.key === "keyInsight"
                    ? "font-serif text-lg italic text-ink"
                    : "text-graphite"
                }`}
              >
                {study[part.key]}
              </p>
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
}
