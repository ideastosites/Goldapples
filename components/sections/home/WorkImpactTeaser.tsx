import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { DuotonePhoto } from "@/components/ui/DuotonePhoto";
import { workImpactTeaser } from "@/content/home";

export function WorkImpactTeaser() {
  return (
    <section className="bg-ink py-24 lg:py-32">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left — Simple side image (Flipped) */}
          <div className="lg:col-span-6 lg:pr-8 order-2 lg:order-1">
            <Reveal delay={0.15} className="relative w-full aspect-square md:aspect-[4/5] max-w-[480px] rounded-[3px] overflow-hidden shadow-2xl border border-white/5 mx-auto lg:mr-auto lg:ml-0">
              <DuotonePhoto
                src="/home_impact.jpg"
                alt="Goldapples impact — communication programme delivery"
                tone="ink-gold"
                className="absolute inset-0 w-full h-full"
              />
            </Reveal>
          </div>

          {/* Right — Content (Flipped) */}
          <div className="lg:col-span-6 flex flex-col justify-center order-1 lg:order-2">
            <Reveal>
              <p className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-gold-deep mb-6">
                Work & Impact
              </p>
              <h2 className="font-serif text-3xl leading-[1.15] text-white lg:text-4xl mb-6">
                {workImpactTeaser.heading}
              </h2>
              <p className="text-champagne/80 text-lg leading-relaxed mb-10">
                {workImpactTeaser.body}
              </p>
            </Reveal>

            {/* Case study list */}
            <div className="mb-10">
              <h3 className="font-mono text-[11px] font-semibold tracking-widest text-champagne/50 uppercase mb-5">
                Our Work Covers
              </h3>
              <ul className="space-y-4">
                {workImpactTeaser.caseStudies.map((cs, i) => (
                  <Reveal key={cs} delay={0.1 + i * 0.05} as="li" className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold-deep shrink-0" />
                    <span className="text-white/90 font-medium text-[17px]">{cs}</span>
                  </Reveal>
                ))}
              </ul>
            </div>

            <Reveal delay={0.3}>
              <Button href={workImpactTeaser.cta.href} variant="gold">
                {workImpactTeaser.cta.label}
              </Button>
            </Reveal>
          </div>

        </div>
      </Container>
    </section>
  );
}