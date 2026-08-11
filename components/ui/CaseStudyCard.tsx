import { Reveal } from "@/components/ui/Reveal";

type CaseStudy = {
  title: string;
  sector: string;
  challenge: string;
  approach: string;
  whatChanged: string;
  keyInsight: string;
};

const parts: { key: keyof CaseStudy; label: string }[] = [
  { key: "challenge", label: "Challenge" },
  { key: "approach", label: "Goldapples Approach" },
  { key: "whatChanged", label: "What Changed" },
  { key: "keyInsight", label: "Key Insight" },
];

export function CaseStudyCard({
  study,
  delay = 0,
}: {
  study: CaseStudy;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="border-graphite/12 border bg-white">
      <div className="border-graphite/12 border-b p-8">
        <span className="text-steel text-xs font-semibold tracking-[0.1em] uppercase">
          {study.sector}
        </span>
        <h3 className="text-ink mt-2 font-serif text-2xl leading-snug">{study.title}</h3>
      </div>
      <div className="grid sm:grid-cols-2">
        {parts.map((part, i) => (
          <div
            key={part.key}
            className={`border-graphite/12 p-8 ${i % 2 === 0 ? "sm:border-r" : ""} ${
              i < 2 ? "border-b" : ""
            } ${part.key === "keyInsight" ? "bg-champagne/40" : ""}`}
          >
            <span className="text-gold-deep text-xs font-semibold tracking-[0.08em] uppercase">
              {part.label}
            </span>
            <p
              className={`mt-3 text-[15px] leading-relaxed ${
                part.key === "keyInsight"
                  ? "text-ink font-serif text-lg italic"
                  : "text-steel"
              }`}
            >
              {study[part.key]}
            </p>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
