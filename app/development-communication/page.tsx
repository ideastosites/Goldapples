import type { Metadata } from "next";
import { seo } from "@/content/seo";
import { PageIntro } from "@/components/sections/PageIntro";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Accordion } from "@/components/ui/Accordion";
import {
  devCommIntro,
  whatWeSupport,
  ourApproach,
  devCommCta,
} from "@/content/developmentCommunication";

export const metadata: Metadata = {
  title: { absolute: seo.developmentCommunication.title },
  description: seo.developmentCommunication.description,
};

export default function DevelopmentCommunicationPage() {
  return (
    <>
      <PageIntro eyebrow={devCommIntro.eyebrow} heading={devCommIntro.heading}>
        <p className="text-ink mt-6 max-w-[52ch] font-serif text-2xl leading-snug italic">
          {devCommIntro.lead}
        </p>
        <p className="text-steel mt-6 max-w-[62ch] text-lg leading-relaxed">
          {devCommIntro.body}
        </p>
      </PageIntro>

      <section className="py-24 lg:py-32">
        <Container>
          <Reveal>
            <Eyebrow>What We Support</Eyebrow>
          </Reveal>
          <div className="mt-8">
            <Accordion items={whatWeSupport} />
          </div>
        </Container>
      </section>

      <section className="border-graphite/10 border-t py-24 lg:py-32">
        <Container>
          <Reveal>
            <Eyebrow>{ourApproach.eyebrow}</Eyebrow>
            <h2 className="text-ink mt-4 max-w-[24ch] font-serif text-3xl leading-tight lg:text-4xl">
              {ourApproach.eyebrow}
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {ourApproach.points.map((point, i) => (
              <Reveal
                key={point.title}
                delay={i * 0.05}
                className="border-graphite/12 flex flex-col gap-3 border-t pt-6"
              >
                <h3 className="text-ink font-serif text-xl">{point.title}</h3>
                <p className="text-steel text-[15px] leading-relaxed">
                  {point.description}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ClosingCta heading={devCommCta.heading} cta={devCommCta.cta} />
    </>
  );
}
