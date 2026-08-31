import type { Metadata } from "next";
import { seo } from "@/content/seo";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { DarkSection } from "@/components/ui/DarkSection";
import { Button } from "@/components/ui/Button";

// Icons
import {
  IconDiagnose,
  IconMeaning,
  IconAlignment,
  IconMedia,
  IconFramework,
} from "@/components/icons";

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

// Map each area to an icon from the custom set
const differentiatorIcons = [
  IconDiagnose,
  IconMeaning,
  IconAlignment,
  IconMedia,
  IconFramework,
];

export default function DevelopmentCommunicationPage() {
  return (
    <>
      {/* 1. Intro (Dark solid hero header - using About/Advisory page Intro layout) */}
      <DarkSection className="pt-32 pb-16 lg:pt-48 lg:pb-24 relative">
        <Container>
          <div className="max-w-[700px]">
            <Reveal>
              <p className="font-mono text-[11px] font-bold tracking-[0.2em] uppercase text-gold-deep mb-6">
                {devCommIntro.eyebrow}
              </p>
              <h1 className="mt-2 font-serif text-5xl leading-[1.1] text-white lg:text-6xl tracking-tight">
                {devCommIntro.heading}
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-10 font-serif text-gold text-xl lg:text-2xl tracking-wide">
                {devCommIntro.lead}
              </p>
            </Reveal>
            <div className="mt-8 flex flex-col gap-6">
              <Reveal
                as="p"
                delay={0.2}
                className="text-white/60 text-[15px] leading-[1.7] max-w-[65ch] font-sans"
              >
                {devCommIntro.body}
              </Reveal>
            </div>
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

      {/* 2. What We Support (Grid of colored boxes) */}
      <section className="bg-white py-24 lg:py-32">
        <Container>
          <Reveal>
            <Eyebrow>What We Support</Eyebrow>
          </Reveal>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whatWeSupport.map((area, i) => {
              const Icon = differentiatorIcons[i % differentiatorIcons.length];
              const styles = [
                {
                  wrapper: "bg-ink text-white",
                  iconBox: "bg-gold-deep text-ink border-none",
                  heading: "text-white",
                  paragraph: "text-white/70",
                },
                {
                  wrapper: "bg-white text-ink border border-ink/10",
                  iconBox: "bg-white border border-ink/10 text-ink",
                  heading: "text-ink",
                  paragraph: "text-ink/60",
                },
                {
                  wrapper: "bg-[#F7EEDC] text-ink",
                  iconBox: "bg-ink text-white border-none",
                  heading: "text-ink",
                  paragraph: "text-ink/70",
                },
                {
                  wrapper: "bg-white text-ink border border-ink/10",
                  iconBox: "bg-white border border-ink/10 text-ink",
                  heading: "text-ink",
                  paragraph: "text-ink/60",
                }
              ];
              const style = styles[i % styles.length];

              const beforeGradient = style.wrapper.includes('border')
                ? 'before:bg-[radial-gradient(circle_at_top_left,transparent_23px,#12100d1a_23px,#12100d1a_24px,white_24px)]'
                : 'before:bg-[radial-gradient(circle_at_top_left,transparent_24px,white_24px)]';

              const afterGradient = style.wrapper.includes('border')
                ? 'after:bg-[radial-gradient(circle_at_top_left,transparent_23px,#12100d1a_23px,#12100d1a_24px,white_24px)]'
                : 'after:bg-[radial-gradient(circle_at_top_left,transparent_24px,white_24px)]';

              return (
                <Reveal 
                  key={area.id} 
                  delay={i * 0.1} 
                  className={`group relative flex flex-col p-8 lg:p-10 rounded-3xl h-full ${style.wrapper}`}
                >
                  <div className="flex-grow pb-12 lg:pb-16">
                    <h3 className={`font-sans text-xl lg:text-[22px] font-semibold mb-4 leading-snug ${style.heading}`}>
                      {area.title}
                    </h3>
                    <p className={`text-[15px] leading-relaxed ${style.paragraph}`}>
                      {area.body}
                    </p>
                  </div>
                  
                  {/* Notch Cutout for Icon with Inverted Corners */}
                  <div 
                    className={`absolute bottom-[-1px] right-[-1px] p-3 lg:p-4 bg-white rounded-tl-3xl 
                      before:content-[''] before:absolute before:bottom-full before:right-0 before:w-6 before:h-6 ${beforeGradient} before:pointer-events-none 
                      after:content-[''] after:absolute after:bottom-0 after:right-full after:w-6 after:h-6 ${afterGradient} after:pointer-events-none 
                      ${style.wrapper.includes('border') ? 'border-t border-l border-ink/10' : ''}
                    `}
                  >
                    <div className={`w-12 h-12 flex items-center justify-center rounded-xl transition-transform duration-300 ease-out group-hover:scale-[1.15] ${style.iconBox}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 3. Our Approach (Champagne Grid) */}
      <section className="bg-champagne py-24 lg:py-32">
        <Container>
          <Reveal>
            <Eyebrow>Methodology</Eyebrow>
            <h2 className="text-ink mt-4 max-w-[24ch] font-serif text-3xl leading-tight lg:text-4xl">
              {ourApproach.eyebrow}
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {ourApproach.points.map((point, i) => (
              <Reveal
                key={point.title}
                delay={i * 0.1}
                className="bg-white p-8 border border-ink/10 flex flex-col justify-center"
              >
                <div className="flex flex-col gap-4">
                  <h3 className="text-ink font-serif text-2xl font-semibold">
                    {point.title}
                  </h3>
                  <p className="text-ink/80 text-[18px] leading-relaxed max-w-[40ch]">
                    {point.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. CTA (Gold-tinted close) */}
      <section className="bg-linear-to-br from-gold-deep to-gold py-24 lg:py-40">
        <Container className="max-w-4xl text-center flex flex-col items-center">
          <Reveal delay={0.1}>
            <p className="text-ink mt-8 font-serif text-3xl md:text-4xl leading-tight italic max-w-[28ch]">
              {devCommCta.heading}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10">
              <Button href={devCommCta.cta.href} variant="primary">
                {devCommCta.cta.label}
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
