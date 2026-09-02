import type { Metadata } from "next";
import { seo } from "@/content/seo";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SignalDivider } from "@/components/ui/SignalDivider";
import { DarkSection } from "@/components/ui/DarkSection";
import { ClosingCta } from "@/components/sections/ClosingCta";
import Image from "next/image";
import {
  IconDiagnose,
  IconMeaning,
  IconAlignment,
  IconMedia,
  IconFramework,
} from "@/components/icons";

import {
  aboutIntro,
  ourEvolution,
  ourPhilosophy,
  whatMakesUsDifferent,
  aspiration,
} from "@/content/about";

export const metadata: Metadata = {
  title: { absolute: seo.about.title },
  description: seo.about.description,
};

// Map each differentiator to an icon from the custom set
const differentiatorIcons = [
  IconDiagnose,
  IconMeaning,
  IconAlignment,
  IconMedia,
  IconFramework,
];

export default function AboutPage() {
  return (
    <>
      {/* 1. Intro (Dark solid hero header) */}
      <DarkSection className="pt-28 pb-12 lg:pt-36 lg:pb-16 relative">
        <Container className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="max-w-[700px]">
            <Reveal>
              <p className="font-mono text-[11px] font-bold tracking-[0.2em] uppercase text-gold-deep mb-6">
                {aboutIntro.eyebrow}
              </p>
              <h1 className="mt-2 font-serif text-5xl leading-[1.1] text-white lg:text-6xl tracking-tight">
                About Goldapples<br className="hidden lg:block" /> Media Associates
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-8 mb-8 font-serif text-gold text-xl lg:text-2xl tracking-wide">
                {aboutIntro.lead}
              </p>
            </Reveal>
            
            <div className="flex flex-col gap-6">
              {aboutIntro.paragraphs.map((p, i) => (
                <Reveal
                  key={i}
                  as="p"
                  delay={(i + 1) * 0.1 + 0.1}
                  className="text-white/60 text-[15px] leading-[1.7] max-w-[65ch] font-sans"
                >
                  {p}
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.3} className="relative w-full h-[400px] lg:h-[500px] rounded-sm overflow-hidden">
            <Image 
              src="/assets/photography/journalists-session.jpg" 
              alt="Journalists session" 
              fill 
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover" 
            />
          </Reveal>
        </Container>
      </DarkSection>

      {/* 2. Evolution (Champagne band, centered layout) */}
      <section className="bg-champagne py-32 lg:py-40 text-center">
        <Container>
          <div className="max-w-[800px] mx-auto">
            <Reveal>
              <p className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-gold-deep mb-6">
                {ourEvolution.eyebrow}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <SignalDivider tone="gold" className="mb-12" />
            </Reveal>

            <div className="space-y-6 text-left max-w-[65ch] mx-auto">
              <Reveal as="div" delay={0.2} className="relative">
                <p className="text-graphite text-[19px] leading-relaxed">
                  <span className="float-left text-6xl font-serif text-gold-deep leading-[0.8] pr-3 pt-2 pb-1">
                    {ourEvolution.paragraphs[0].charAt(0)}
                  </span>
                  <span className="sr-only">{ourEvolution.paragraphs[0].charAt(0)}</span>
                  {ourEvolution.paragraphs[0].slice(1)}
                </p>
              </Reveal>
              
              {ourEvolution.paragraphs.slice(1).map((p, i) => (
                <Reveal key={i} as="p" delay={0.3 + (i * 0.1)} className="text-graphite text-[19px] leading-relaxed">
                  {p}
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Philosophy (Dark layout) */}
      <section className="bg-ink py-24 lg:py-32">
        <Container className="grid gap-12 lg:grid-cols-12 items-start">
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow tone="champagne">{ourPhilosophy.eyebrow}</Eyebrow>
              <h2 className="text-white mt-4 max-w-[20ch] font-serif text-3xl leading-tight lg:text-[2.5rem]">
                {ourPhilosophy.heading}
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 pt-2 lg:pt-16">
            <Reveal delay={0.2}>
              <p className="text-white/70 text-[17px] leading-relaxed max-w-[50ch]">
                {ourPhilosophy.body}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 5. What Makes Us Different (Grid of colored boxes) */}
      <section className="bg-white py-24 lg:py-32">
        <Container>
          <Reveal>
            <Eyebrow>{whatMakesUsDifferent.eyebrow}</Eyebrow>

          </Reveal>
          
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whatMakesUsDifferent.points.map((point, i) => {
              const styles = [
                {
                  wrapper: "bg-ink text-white",
                  icon: "text-gold-deep",
                  heading: "text-white",
                  paragraph: "text-white/70",
                },
                {
                  wrapper: "bg-white text-ink border border-ink/10",
                  icon: "text-gold-deep",
                  heading: "text-ink",
                  paragraph: "text-ink/60",
                },
                {
                  wrapper: "bg-[#F7EEDC] text-ink",
                  icon: "text-gold-deep",
                  heading: "text-ink",
                  paragraph: "text-ink/70",
                },
                {
                  wrapper: "bg-white text-ink border border-ink/10",
                  icon: "text-gold-deep",
                  heading: "text-ink",
                  paragraph: "text-ink/60",
                }
              ];
              const style = styles[i % styles.length];
              const Icon = differentiatorIcons[i % differentiatorIcons.length];

              return (
                <Reveal 
                  key={i} 
                  delay={i * 0.1} 
                  className={`flex flex-col p-8 lg:p-10 ${style.wrapper}`}
                >
                  <Icon className={`h-10 w-10 shrink-0 ${style.icon}`} />
                  <h3 className={`mt-8 font-sans text-xl font-semibold leading-snug ${style.heading}`}>
                    {point.title}
                  </h3>
                  <p className={`mt-4 text-[15px] leading-relaxed ${style.paragraph}`}>
                    {point.description}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 7. Aspiration (Dark layout with SignalDivider via ClosingCta) */}
      <ClosingCta heading={aspiration.body} />
    </>
  );
}
