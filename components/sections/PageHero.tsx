import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { DarkSection } from "@/components/ui/DarkSection";
import { SignalDivider } from "@/components/ui/SignalDivider";

interface PageHeroProps {
  eyebrow: string;
  heading: string;
  body: string;
  lead: string;
}

export function PageHero({ eyebrow, heading, body, lead }: PageHeroProps) {
  return (
    <DarkSection className="relative overflow-hidden pt-28 pb-12 lg:pt-36 lg:pb-16">
      <Container className="relative z-10 lg:flex lg:flex-col lg:items-center lg:text-center">
        <div className="max-w-[76ch] lg:mx-auto">
          <Reveal>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-gold-deep mb-6">
              {eyebrow}
            </p>
            <h1 className="font-serif text-4xl leading-[1.1] text-white md:text-5xl lg:text-6xl">
              {heading}
            </h1>
          </Reveal>
          
          <Reveal delay={0.08}>
            <p className="mt-6 text-xl lg:text-2xl font-serif text-gold-deep leading-snug">
              {lead}
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 text-[17px] sm:text-lg leading-relaxed text-champagne/80 lg:text-justify">
              {body}
            </p>
          </Reveal>
        </div>

        {/* Deliberate Signal Motif Divider */}
        <Reveal delay={0.2} className="w-full mt-16 mb-6 lg:mt-20 lg:mb-10">
          <SignalDivider tone="gold" className="w-full !max-w-none [&_svg]:!max-w-none [&_svg]:w-full" />
        </Reveal>
      </Container>
    </DarkSection>
  );
}
