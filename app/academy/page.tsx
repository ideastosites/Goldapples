import type { Metadata } from "next";
import Image from "next/image";
import { seo } from "@/content/seo";
import { PageIntro } from "@/components/sections/PageIntro";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Accordion } from "@/components/ui/Accordion";
import { Tag } from "@/components/ui/Tag";
import {
  academyIntro,
  programmeCategories,
  deliveryFormats,
  weService,
  academyCta,
} from "@/content/academy";

export const metadata: Metadata = {
  title: seo.academy.title,
  description: seo.academy.description,
};

const accordionItems = programmeCategories.map((p) => ({
  id: p.id,
  title: p.title,
  body: (
    <div className="flex flex-col gap-2">
      <p>{p.audience}</p>
      {p.body && <p>{p.body}</p>}
      <p className="text-steel/80 text-sm">{p.themes}</p>
    </div>
  ),
}));

export default function AcademyPage() {
  return (
    <>
      <PageIntro eyebrow={academyIntro.eyebrow} heading={academyIntro.heading}>
        <p className="text-ink mt-6 max-w-[52ch] font-serif text-2xl leading-snug italic">
          {academyIntro.lead}
        </p>
        <p className="text-steel mt-6 max-w-[62ch] text-lg leading-relaxed">
          {academyIntro.body}
        </p>
      </PageIntro>

      <section className="py-24 lg:py-32">
        <Container>
          <Reveal>
            <Eyebrow>Programme Categories</Eyebrow>
          </Reveal>
          <div className="mt-8">
            <Accordion items={accordionItems} />
          </div>
        </Container>
      </section>

      <section className="border-graphite/10 border-t py-24 lg:py-32">
        <Container className="grid gap-16 lg:grid-cols-12 lg:items-start">
          <div className="flex flex-col gap-16 lg:col-span-7">
            <Reveal>
              <div id="delivery-formats" className="scroll-mt-28">
                <Eyebrow>{deliveryFormats.eyebrow}</Eyebrow>
              </div>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {deliveryFormats.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <Eyebrow>{weService.eyebrow}</Eyebrow>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {weService.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="border-graphite/12 relative aspect-[4/5] overflow-hidden border">
              <Image
                src="/assets/photography/academy-session.jpg"
                alt="A Goldapples Academy executive session in progress in Abuja"
                fill
                sizes="(min-width: 1024px) 35vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <ClosingCta heading={academyCta.heading} cta={academyCta.cta} />
    </>
  );
}
