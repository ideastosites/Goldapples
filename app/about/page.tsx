import type { Metadata } from "next";
import Image from "next/image";
import { seo } from "@/content/seo";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Tag } from "@/components/ui/Tag";
import { DarkSection } from "@/components/ui/DarkSection";
import {
  aboutIntro,
  ourEvolution,
  ourPhilosophy,
  whatMakesUsDifferent,
  founder,
  ourWorkCovers,
  aspiration,
} from "@/content/about";

export const metadata: Metadata = {
  title: seo.about.title,
  description: seo.about.description,
};

export default function AboutPage() {
  return (
    <>
      <section className="border-graphite/10 border-b bg-white py-24 lg:py-32">
        <Container>
          <Reveal className="max-w-[52ch]">
            <Eyebrow>{aboutIntro.eyebrow}</Eyebrow>
            <h1 className="text-ink mt-4 font-serif text-4xl leading-tight lg:text-5xl">
              {aboutIntro.heading}
            </h1>
            <p className="text-ink mt-6 font-serif text-2xl leading-snug italic">
              {aboutIntro.lead}
            </p>
          </Reveal>
          <div className="mt-8 flex flex-col gap-4 lg:ml-[50%] lg:w-1/2">
            {aboutIntro.paragraphs.map((p, i) => (
              <Reveal
                key={p}
                as="p"
                delay={i * 0.05}
                className="text-steel max-w-[62ch] text-lg leading-relaxed"
              >
                {p}
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 lg:py-32">
        <Container className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow>{ourEvolution.eyebrow}</Eyebrow>
            </Reveal>
          </div>
          <div className="flex flex-col gap-5 lg:col-span-7 lg:col-start-6">
            {ourEvolution.paragraphs.map((p, i) => (
              <Reveal
                key={p}
                as="p"
                delay={i * 0.05}
                className="text-steel max-w-[68ch] text-lg leading-relaxed"
              >
                {p}
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <DarkSection className="py-28 lg:py-40">
        <Container className="flex flex-col items-center text-center">
          <Reveal>
            <Eyebrow tone="champagne">{ourPhilosophy.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal
            as="h2"
            delay={0.05}
            className="mt-6 max-w-[20ch] font-serif text-4xl leading-tight text-white italic lg:text-5xl"
          >
            {ourPhilosophy.heading}
          </Reveal>
          <Reveal
            as="p"
            delay={0.1}
            className="text-champagne/70 mt-8 max-w-[62ch] text-lg leading-relaxed"
          >
            {ourPhilosophy.body}
          </Reveal>
        </Container>
      </DarkSection>

      <section className="border-graphite/10 border-b py-24 lg:py-32">
        <Container>
          <Reveal>
            <Eyebrow>{whatMakesUsDifferent.eyebrow}</Eyebrow>
          </Reveal>
          <div className="border-graphite/12 divide-graphite/12 mt-10 divide-y border-t">
            {whatMakesUsDifferent.points.map((point, i) => (
              <Reveal
                key={point.title}
                delay={i * 0.04}
                className="grid gap-3 py-8 md:grid-cols-12 md:items-baseline md:gap-8"
              >
                <span className="text-gold-deep font-mono text-sm md:col-span-1">
                  0{i + 1}
                </span>
                <h3 className="text-ink font-sans text-lg font-semibold md:col-span-4">
                  {point.title}
                </h3>
                <p className="text-steel text-[15px] leading-relaxed md:col-span-7">
                  {point.description}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 lg:py-32">
        <Container>
          <Reveal>
            <Eyebrow>{founder.eyebrow}</Eyebrow>
          </Reveal>
          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal delay={0.05} className="lg:col-span-5">
              <div className="border-graphite/12 relative aspect-[4/5] overflow-hidden border">
                <Image
                  src={founder.photo.src}
                  alt={founder.photo.alt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-7">
              <h2 className="text-ink font-serif text-3xl">{founder.name}</h2>
              <p className="text-gold-deep mt-2 text-sm font-semibold tracking-wide">
                {founder.title}
              </p>
              <p className="text-steel mt-6 max-w-[62ch] text-lg leading-relaxed">
                {founder.bio}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-graphite/10 border-t py-24 lg:py-32">
        <Container>
          <Reveal>
            <Eyebrow>{ourWorkCovers.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05} className="mt-8 flex flex-wrap gap-2.5">
            {ourWorkCovers.items.map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="border-graphite/10 border-t py-24 lg:py-32">
        <Container className="max-w-[1280px]">
          <Reveal className="max-w-[62ch]">
            <Eyebrow>{aspiration.eyebrow}</Eyebrow>
            <p className="text-ink border-gold-deep mt-6 border-l-2 pl-5 font-serif text-2xl leading-snug italic">
              {aspiration.body}
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
