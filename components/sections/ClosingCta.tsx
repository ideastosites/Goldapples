import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { DarkSection } from "@/components/ui/DarkSection";

export function ClosingCta({
  heading,
  cta,
}: {
  heading: string;
  cta: { label: string; href: string };
}) {
  return (
    <DarkSection className="py-24 lg:py-32">
      <Container className="flex flex-col items-start gap-8">
        <Reveal
          as="h2"
          className="max-w-[24ch] font-serif text-3xl leading-tight text-white lg:text-4xl"
        >
          {heading}
        </Reveal>
        <Reveal delay={0.05}>
          <Button href={cta.href} variant="gold">
            {cta.label}
          </Button>
        </Reveal>
      </Container>
    </DarkSection>
  );
}
