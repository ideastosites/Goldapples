import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { DarkSection } from "@/components/ui/DarkSection";
import { FrameworkGlyph } from "@/components/ui/FrameworkGlyph";
import { ourThinking } from "@/content/home";

export function OurThinking() {
  return (
    <DarkSection className="py-28 lg:py-36">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow tone="champagne">05 — Our Thinking</Eyebrow>
              <h2 className="mt-4 max-w-[16ch] font-serif text-3xl leading-tight text-white lg:text-4xl">
                {ourThinking.heading}
              </h2>
              <p className="text-champagne/70 mt-6 max-w-[52ch] text-[15px] leading-relaxed">
                {ourThinking.body}
              </p>
              <Button href={ourThinking.cta.href} variant="gold" className="mt-8">
                {ourThinking.cta.label}
              </Button>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:col-span-7">
            {ourThinking.frameworks.map((name, i) => (
              <Reveal key={name} delay={i * 0.05}>
                <div className="border-champagne/10 flex h-full flex-col gap-4 border p-6">
                  <FrameworkGlyph variant={i} dark className="h-10 w-10" />
                  <span className="font-serif text-lg text-white">{name}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </DarkSection>
  );
}
