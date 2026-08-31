import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { DarkSection } from "@/components/ui/DarkSection";
import { IconSwatch } from "@/components/ui/IconSwatch";
import {
  IconFramework,
  IconMeaning,
  IconAlignment,
  IconLab,
  IconDiagnostics,
  IconDesign,
} from "@/components/icons";
import { ourThinking } from "@/content/home";

const frameworkIcons = [
  IconDesign,
  IconFramework,
  IconAlignment,
  IconLab,
  IconMeaning,
  IconDiagnostics,
];

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

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-7">
            {ourThinking.frameworks.map((name, i) => (
              <Reveal key={name} delay={i * 0.05}>
                <div
                  className={`flex h-full flex-col gap-4 rounded-[3px] p-6 ${
                    i % 2 === 0
                      ? "from-gold-deep/25 to-gold/10 border border-white/10 bg-linear-to-br"
                      : "border border-white/10 bg-white/5"
                  }`}
                >
                  <IconSwatch icon={frameworkIcons[i]} tone="gold" />
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
