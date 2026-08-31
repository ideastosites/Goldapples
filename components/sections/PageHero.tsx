import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { DarkSection } from "@/components/ui/DarkSection";

interface PageHeroProps {
  eyebrow: string;
  heading: string;
  body: string;
  lead: string;
}

export function PageHero({ eyebrow, heading, body, lead }: PageHeroProps) {
  return (
    <DarkSection className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
      {/* Bottom border line decoration */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[2px] w-1/2 bg-gradient-to-r from-gold-deep to-transparent"
      />

      <Container className="relative z-10">
        <div className="max-w-[76ch]">
          <Reveal>
            <span className="font-mono text-sm font-semibold uppercase tracking-wider text-gold">
              {eyebrow}
            </span>
            <h1 className="mt-4 font-serif text-5xl leading-tight text-white md:text-6xl lg:text-[72px]">
              {heading}
            </h1>
          </Reveal>
          
          <Reveal delay={0.08}>
            <p className="mt-6 text-[15px] sm:text-base leading-relaxed text-champagne/80">
              {body}
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-4 text-lg sm:text-xl font-semibold leading-relaxed text-gold">
              {lead}
            </p>
          </Reveal>
        </div>
      </Container>
    </DarkSection>
  );
}
