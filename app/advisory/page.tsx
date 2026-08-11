import type { Metadata } from "next";
import { seo } from "@/content/seo";
import { PageIntro } from "@/components/sections/PageIntro";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Accordion } from "@/components/ui/Accordion";
import { Stepper } from "@/components/ui/Stepper";
import {
  advisoryIntro,
  advisoryAreas,
  advisoryHowWeWork,
  advisoryCta,
} from "@/content/advisory";

export const metadata: Metadata = {
  title: seo.advisory.title,
  description: seo.advisory.description,
};

export default function AdvisoryPage() {
  return (
    <>
      <PageIntro eyebrow={advisoryIntro.eyebrow} heading={advisoryIntro.heading}>
        <p className="text-ink mt-6 max-w-[52ch] font-serif text-2xl leading-snug italic">
          {advisoryIntro.lead}
        </p>
        <p className="text-steel mt-6 max-w-[62ch] text-lg leading-relaxed">
          {advisoryIntro.body}
        </p>
      </PageIntro>

      <section className="py-24 lg:py-32">
        <Container>
          <Reveal>
            <Eyebrow>Advisory Areas</Eyebrow>
          </Reveal>
          <div className="mt-8">
            <Accordion items={advisoryAreas} />
          </div>
        </Container>
      </section>

      <section className="border-graphite/10 border-t py-24 lg:py-32">
        <Container>
          <Reveal>
            <Eyebrow>How We Work</Eyebrow>
            <h2 className="text-ink mt-4 max-w-[24ch] font-serif text-3xl leading-tight lg:text-4xl">
              A five-step process, from diagnosis to review.
            </h2>
          </Reveal>
          <div className="mt-14">
            <Stepper steps={advisoryHowWeWork} />
          </div>
        </Container>
      </section>

      <ClosingCta heading={advisoryCta.heading} cta={advisoryCta.cta} />
    </>
  );
}
