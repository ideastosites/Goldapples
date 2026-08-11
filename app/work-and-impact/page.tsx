import type { Metadata } from "next";
import { seo } from "@/content/seo";
import { PageIntro } from "@/components/sections/PageIntro";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { workImpactIntro, caseStudies, workImpactCta } from "@/content/workImpact";

export const metadata: Metadata = {
  title: { absolute: seo.workAndImpact.title },
  description: seo.workAndImpact.description,
};

export default function WorkAndImpactPage() {
  return (
    <>
      <PageIntro eyebrow={workImpactIntro.eyebrow} heading={workImpactIntro.heading}>
        <p className="text-ink mt-6 max-w-[52ch] font-serif text-2xl leading-snug italic">
          {workImpactIntro.lead}
        </p>
        <p className="text-steel mt-6 max-w-[62ch] text-lg leading-relaxed">
          {workImpactIntro.body}
        </p>
        <Reveal as="p" delay={0.08} className="text-steel mt-4 text-sm italic">
          {workImpactIntro.note}
        </Reveal>
      </PageIntro>

      <section className="py-24 lg:py-32">
        <Container className="flex flex-col gap-10">
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.title} study={study} delay={i * 0.05} />
          ))}
        </Container>
      </section>

      <ClosingCta heading={workImpactCta.heading} cta={workImpactCta.cta} />
    </>
  );
}
