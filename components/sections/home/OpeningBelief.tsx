import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { SignalDivider } from "@/components/ui/SignalDivider";
import { openingBelief } from "@/content/home";

export function OpeningBelief() {
  return (
    <section className="bg-champagne py-32 lg:py-40 text-center">
      <Container>
        <div className="max-w-[800px] mx-auto">
          <Reveal>
            <p className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-gold-deep mb-6">
              Our Belief
            </p>
            <h2 className="font-serif text-[2rem] leading-[1.15] text-ink lg:text-[2.75rem] mb-12 max-w-[25ch] mx-auto">
              Communication is <span className="italic">not</span> just messaging. It is infrastructure.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <SignalDivider tone="gold" className="mb-12" />
          </Reveal>

          <div className="space-y-6 text-left max-w-[65ch] mx-auto">
            <Reveal as="div" delay={0.2} className="relative">
              <p className="text-graphite text-[19px] leading-relaxed">
                {/* Drop cap for editorial feel */}
                <span className="float-left text-6xl font-serif text-gold-deep leading-[0.8] pr-3 pt-2 pb-1">
                  O
                </span>
                <span className="sr-only">O</span>
                rganisations rarely fail for lack of ideas or resources — they fail when meaning breaks down. Instructions are heard but not understood. Reforms are designed but resisted. Teams work hard but move in different directions.
              </p>
            </Reveal>
            
            <Reveal as="p" delay={0.3} className="text-graphite text-[19px] leading-relaxed">
              We treat communication as the operating system of leadership and institutional performance, and help organisations create, transmit and sustain meaning people can trust and act on.
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}