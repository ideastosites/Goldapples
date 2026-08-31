import type { Metadata } from "next";
import { seo } from "@/content/seo";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { CaseStudySummaryCard } from "@/components/ui/CaseStudySummaryCard";
import { workImpactIntro, caseStudies, workImpactCta } from "@/content/workImpact";

export const metadata: Metadata = {
  title: { absolute: seo.workAndImpact.title },
  description: seo.workAndImpact.description,
};

export default function WorkAndImpactPage() {
  return (
    <>
      {/* ── HERO: Uniform PageHero ── */}
      <PageHero
        eyebrow={workImpactIntro.eyebrow}
        heading={workImpactIntro.heading}
        body={workImpactIntro.body}
        lead={workImpactIntro.lead}
      />

      {/* ── CASE STUDY CARDS: White section, card grid ── */}
      <section className="bg-white py-14 lg:py-20">
        <Container>
          <Reveal>
            <h2 className="font-serif text-3xl text-ink lg:text-4xl">
              Selected Work
            </h2>
            <p className="mt-2 mb-12 font-mono text-[11px] uppercase tracking-[0.12em] text-steel">
              {workImpactIntro.note}
            </p>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-3">
            {caseStudies.map((study, i) => (
              <CaseStudySummaryCard
                key={study.title}
                study={study}
                index={i}
                delay={i * 0.07}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* ── PULL-STAT BAND: Premium Editorial Quote ── */}
      <section className="border-y border-graphite/8 bg-champagne/35 py-20 lg:py-28">
        <Container className="max-w-[900px]">
          <Reveal>
            <div className="relative pl-6 py-2 sm:pl-16">
              {/* Oversized background quote mark */}
              <span 
                className="absolute -top-12 -left-2 sm:left-2 font-serif text-[180px] leading-none text-gold-deep/20 select-none pointer-events-none"
                aria-hidden="true"
              >
                “
              </span>
              <blockquote className="space-y-6">
                <p className="font-serif text-3xl italic leading-snug text-ink sm:text-4xl lg:text-[42px] lg:leading-normal">
                  &ldquo;Execution improves when meaning is managed deliberately.&rdquo;
                </p>
                <footer className="flex items-center gap-4">
                  <span className="h-[1px] w-12 bg-gold-deep" />
                  <span className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">
                    Goldapples Media Associates
                  </span>
                </footer>
              </blockquote>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── CLOSING CTA: Ink ── */}
      <ClosingCta 
        heading={workImpactCta.heading} 
        cta={workImpactCta.cta}
      />
    </>
  );
}
