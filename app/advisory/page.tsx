import type { Metadata } from "next";
import { seo } from "@/content/seo";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { DarkSection } from "@/components/ui/DarkSection";
import { Button } from "@/components/ui/Button";

import Image from "next/image";

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



export default function AdvisoryPage() {
  return (
    <>
      {/* 1. Intro (Dark solid hero header - using About page Intro layout) */}
      <DarkSection className="pt-32 pb-16 lg:pt-48 lg:pb-24 relative">
        <Container>
          <div className="max-w-[700px]">
            <Reveal>
              <p className="font-mono text-[11px] font-bold tracking-[0.2em] uppercase text-gold-deep mb-6">
                {advisoryIntro.eyebrow}
              </p>
              <h1 className="mt-2 font-serif text-5xl leading-[1.1] text-white lg:text-6xl tracking-tight">
                {advisoryIntro.heading}
              </h1>
            </Reveal>
            <div className="mt-8 flex flex-col gap-6">
              <Reveal
                as="p"
                delay={0.1}
                className="text-white/60 text-[15px] leading-[1.7] max-w-[65ch] font-sans"
              >
                {advisoryIntro.body}
              </Reveal>
            </div>
            <Reveal delay={0.4}>
              <p className="mt-10 font-serif text-gold text-xl lg:text-2xl tracking-wide">
                {advisoryIntro.lead}
              </p>
            </Reveal>
          </div>
        </Container>

        {/* Divider line with dot */}
        <Container className="mt-32">
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/[0.06]"></div>
            </div>
            <div className="relative flex justify-center bg-ink px-4">
              <div className="w-1.5 h-1.5 bg-gold-deep rounded-full rounded-tr-none rotate-45"></div>
            </div>
          </div>
        </Container>
      </DarkSection>

      {/* 2. Advisory Areas (Grid of colored boxes - using About page "What Makes Us Different" layout) */}
      <section className="bg-white py-24 lg:py-32">
        <Container>
          <Reveal>
            <Eyebrow>Advisory Areas</Eyebrow>
          </Reveal>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {advisoryAreas.map((area, i) => {
              const styles = [
                {
                  wrapper: "bg-ink text-white",
                  heading: "text-white",
                  paragraph: "text-white/70",
                },
                {
                  wrapper: "bg-white text-ink border border-ink/10",
                  heading: "text-ink",
                  paragraph: "text-ink/60",
                },
                {
                  wrapper: "bg-[#F7EEDC] text-ink",
                  heading: "text-ink",
                  paragraph: "text-ink/70",
                },
                {
                  wrapper: "bg-white text-ink border border-ink/10",
                  heading: "text-ink",
                  paragraph: "text-ink/60",
                }
              ];
              const style = styles[i % styles.length];

              return (
                <Reveal 
                  key={area.id} 
                  delay={i * 0.1} 
                  className={`group flex flex-col overflow-hidden h-full ${style.wrapper}`}
                >
                  {/* Top part: Image */}
                  <div className="relative h-56 w-full shrink-0 overflow-hidden bg-ink/5">
                    <Image 
                      src={`/assets/photography/${area.title}.jpg`} 
                      fill 
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                      alt={area.title} 
                    />
                  </div>
                  {/* Bottom part: Title and Description */}
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className={`font-sans text-[22px] font-semibold leading-snug ${style.heading}`}>
                      {area.title}
                    </h3>
                    <div className={`mt-4 text-[15px] leading-relaxed ${style.paragraph}`}>
                      {area.body}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 3. How We Work (Timeline on a Champagne band - using About page "Evolution" layout) */}
      <section className="bg-champagne py-24 lg:py-32">
        <Container className="grid gap-12 lg:grid-cols-12 items-start">
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow>How We Work</Eyebrow>
              <h2 className="text-ink mt-4 max-w-[24ch] font-serif text-3xl leading-tight lg:text-4xl">
                A five-step process, from diagnosis to review.
              </h2>
            </Reveal>
          </div>
          <div className="flex flex-col gap-6 lg:col-span-8 lg:col-start-5">
            {advisoryHowWeWork.map((step, i) => (
              <Reveal
                key={step.number}
                delay={i * 0.1}
                className="flex flex-col sm:flex-row gap-6 items-start bg-white p-8 border border-ink/10"
              >
                <div className="text-gold-deep font-mono font-bold text-xl mt-1 shrink-0">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-ink font-serif text-2xl font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-ink/80 text-[18px] leading-relaxed max-w-[60ch]">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. CTA (Gold-tinted close - using About page "Aspiration" layout) */}
      <section className="bg-linear-to-br from-gold-deep to-gold py-24 lg:py-40">
        <Container className="max-w-4xl text-center flex flex-col items-center">
          <Reveal delay={0.1}>
            <p className="text-ink mt-8 font-serif text-3xl md:text-4xl leading-tight italic max-w-[28ch]">
              {advisoryCta.heading}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10">
              <Button href={advisoryCta.cta.href} variant="primary">
                {advisoryCta.cta.label}
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
