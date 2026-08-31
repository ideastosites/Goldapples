import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SignalDivider } from "@/components/ui/SignalDivider";
import { finalCta } from "@/content/home";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ink">
      {/* Richer gold gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink/95 to-gold-deep/40" />

      <Container className="relative z-10 py-32 lg:py-40 text-center flex flex-col items-center">
        <Reveal className="w-full">
          <SignalDivider tone="gold" className="mb-16" />
          
          <h2 className="font-serif text-[2rem] leading-[1.12] text-white lg:text-[2.5rem] mb-8 max-w-[28ch] mx-auto">
            {finalCta.heading}
          </h2>
          <p className="text-champagne/75 text-[17px] leading-relaxed mb-12 max-w-[45ch] mx-auto">
            {finalCta.body}
          </p>
          <Button href={finalCta.cta.href} variant="gold" className="px-10 h-14 text-base">
            {finalCta.cta.label}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}