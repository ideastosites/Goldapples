import type { Metadata } from "next";
import { seo } from "@/content/seo";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { IconSwatch } from "@/components/ui/IconSwatch";
import {
  IconAdvisory,
  IconAlignment,
  IconGovernment,
  IconCrisis,
  IconDiagnostics,
} from "@/components/icons";
import {
  advisoryIntro,
  advisoryAreas,
  advisoryHowWeWork,
  advisoryCta,
} from "@/content/advisory";

export const metadata: Metadata = {
  title: { absolute: seo.advisory.title },
  description: seo.advisory.description,
};

const advisoryIcons = [
  IconAdvisory,
  IconAlignment,
  IconGovernment,
  IconCrisis,
  IconDiagnostics,
];

// Replicating the alternating dark/beige card styles seen in the screenshot
const cardStyles = [
  {
    bg: "bg-ink text-champagne",
    iconBg: "bg-gold-deep/20 text-gold",
    border: "border-graphite/20",
    titleColor: "text-white",
    bodyColor: "text-champagne/70",
  },
  {
    bg: "bg-champagne/40 text-graphite",
    iconBg: "bg-white text-gold-deep",
    border: "border-graphite/10",
    titleColor: "text-ink",
    bodyColor: "text-steel",
  },
  {
    bg: "bg-champagne/40 text-graphite",
    iconBg: "bg-white text-gold-deep",
    border: "border-graphite/10",
    titleColor: "text-ink",
    bodyColor: "text-steel",
  },
  {
    bg: "bg-champagne/40 text-graphite",
    iconBg: "bg-white text-gold-deep",
    border: "border-graphite/10",
    titleColor: "text-ink",
    bodyColor: "text-steel",
  },
  {
    bg: "bg-ink text-champagne",
    iconBg: "bg-gold-deep/20 text-gold",
    border: "border-graphite/20",
    titleColor: "text-white",
    bodyColor: "text-champagne/70",
  },
];

export default function AdvisoryPage() {
  return (
    <>
      {/* ── HERO: Uniform PageHero ── */}
      <PageHero
        eyebrow={advisoryIntro.eyebrow}
        heading={advisoryIntro.heading}
        body={advisoryIntro.body}
        lead={advisoryIntro.lead}
      />

      {/* ── ADVISORY AREAS: Alternating Card Grid ── */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <Reveal>
            <span className="font-mono text-sm font-semibold uppercase tracking-wider text-steel">
              Advisory Areas
            </span>
          </Reveal>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {advisoryAreas.map((area, i) => {
              const Icon = advisoryIcons[i] || IconAdvisory;
              const style = cardStyles[i % cardStyles.length];

              return (
                <Reveal
                  key={area.id}
                  delay={i * 0.05}
                  className={`flex flex-col gap-6 border p-8 rounded-[4px] shadow-xs transition-shadow duration-200 hover:shadow-md ${style.bg} ${style.border}`}
                >
                  <div className="self-start">
                    <IconSwatch icon={Icon} tone={i === 0 || i === 4 ? "gold" : "outline-dark"} />
                  </div>
                  <div>
                    <h3 className={`font-serif text-xl font-semibold leading-snug ${style.titleColor}`}>
                      {area.title}
                    </h3>
                    <p className={`mt-4 text-[15px] leading-relaxed ${style.bodyColor}`}>
                      {area.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── HOW WE WORK: Vertical Stepper ── */}
      <section className="bg-champagne py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
            {/* Left Column: Heading */}
            <div className="lg:col-span-5">
              <Reveal>
                <span className="font-mono text-sm font-semibold uppercase tracking-wider text-gold-deep">
                  How We Work
                </span>
                <h2 className="mt-4 font-serif text-3xl leading-tight text-ink lg:text-4xl lg:leading-tight">
                  A five-step process, from diagnosis to review.
                </h2>
              </Reveal>
            </div>

            {/* Right Column: Steps */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              {advisoryHowWeWork.map((step, i) => (
                <Reveal key={step.number} delay={i * 0.05}>
                  <div className="flex gap-6 border-b border-graphite/10 pb-8 last:border-b-0 last:pb-0">
                    <span className="font-mono text-lg font-bold text-gold-deep flex-shrink-0 mt-0.5 border border-gold-deep/30 rounded-[2px] px-2 py-0.5 h-fit bg-white shadow-xs">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-ink">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-steel">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── CLOSING CTA: Gold/Yellow Gradient with Dark Button ── */}
      <section className="bg-gradient-to-br from-gold-deep to-gold py-20 lg:py-28 text-ink">
        <Container className="flex flex-col items-center text-center gap-8">
          <Reveal
            as="h2"
            className="max-w-[28ch] font-serif text-3xl leading-tight text-ink lg:text-4xl"
          >
            {advisoryCta.heading}
          </Reveal>
          <Reveal delay={0.05}>
            <Button
              href={advisoryCta.cta.href}
              className="bg-ink text-white hover:bg-graphite hover:text-white border-transparent px-8 py-3 rounded-[2px] transition-colors shadow-lg"
            >
              {advisoryCta.cta.label}
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
