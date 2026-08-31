import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function ClosingCta({
  heading,
  cta,
  className = "",
}: {
  heading: string;
  cta: { label: string; href: string };
  className?: string;
}) {
  return (
    <section className={`bg-linear-to-br from-gold-deep to-gold py-16 lg:py-22 text-ink ${className}`}>
      <Container className="flex flex-col items-start gap-8">
        <Reveal
          as="h2"
          className="max-w-[24ch] font-serif text-3xl leading-tight text-ink lg:text-4xl"
        >
          {heading}
        </Reveal>
        <Reveal delay={0.05}>
          <Button href={cta.href} variant="primary">
            {cta.label}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}

