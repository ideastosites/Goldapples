import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { corePracticeAreas } from "@/content/home";

export function CorePracticeAreas() {
  return (
    <section className="py-28 lg:py-36">
      <Container>
        <Reveal>
          <Eyebrow>04 — Core Practice Areas</Eyebrow>
          <h2 className="text-ink mt-4 max-w-[24ch] font-serif text-3xl leading-tight lg:text-4xl">
            Our Core Practice Areas
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {corePracticeAreas.map((area, i) => (
            <Reveal key={area.title} delay={i * 0.05}>
              <Card className="h-full">
                <span className="text-gold-deep font-mono text-xs font-semibold">
                  {area.number}
                </span>
                <h3 className="text-ink mt-4 font-sans text-xl font-semibold">
                  {area.title}
                </h3>
                <p className="text-steel mt-3 flex-1 text-[15px] leading-relaxed">
                  {area.description}
                </p>
                <Button
                  href={area.cta.href}
                  variant="secondary"
                  className="mt-6 self-start"
                >
                  {area.cta.label}
                </Button>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
