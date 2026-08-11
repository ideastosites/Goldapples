import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { DarkSection } from "@/components/ui/DarkSection";
import { finalCta } from "@/content/home";

export function FinalCta() {
  return (
    <DarkSection className="py-28 lg:py-36">
      <Container className="flex flex-col items-start gap-6">
        <Reveal
          as="h2"
          className="max-w-[20ch] font-serif text-3xl leading-tight text-white lg:text-4xl"
        >
          {finalCta.heading}
        </Reveal>
        <Reveal
          as="p"
          delay={0.05}
          className="text-champagne/70 max-w-[56ch] text-lg leading-relaxed"
        >
          {finalCta.body}
        </Reveal>
        <Reveal delay={0.1}>
          <Button href={finalCta.cta.href} variant="gold">
            {finalCta.cta.label}
          </Button>
        </Reveal>
      </Container>
    </DarkSection>
  );
}
