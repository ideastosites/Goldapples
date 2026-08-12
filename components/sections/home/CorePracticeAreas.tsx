import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { IconSwatch } from "@/components/ui/IconSwatch";
import {
  IconAdvisory,
  IconAcademy,
  IconDevelopment,
  IconMedia,
} from "@/components/icons";
import { corePracticeAreas } from "@/content/home";

const icons = [IconAdvisory, IconAcademy, IconDevelopment, IconMedia];

const cardTones = [
  {
    card: "bg-ink text-white",
    swatch: "gold" as const,
    link: "border-white/40 hover:border-white hover:text-gold",
  },
  {
    card: "border border-graphite/12 bg-white text-ink",
    swatch: "outline-dark" as const,
    link: "border-ink/40 hover:border-ink hover:text-gold-deep",
  },
  {
    card: "bg-champagne text-ink",
    swatch: "ink" as const,
    link: "border-ink/40 hover:border-ink hover:text-gold-deep",
  },
  {
    card: "border border-graphite/12 bg-white text-ink",
    swatch: "outline-dark" as const,
    link: "border-ink/40 hover:border-ink hover:text-gold-deep",
  },
];

export function CorePracticeAreas() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <Reveal>
          <Eyebrow>04 — Core Practice Areas</Eyebrow>
          <h2 className="text-ink mt-4 max-w-[24ch] font-serif text-3xl leading-tight lg:text-4xl">
            Our Core Practice Areas
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {corePracticeAreas.map((area, i) => {
            const tone = cardTones[i];
            const muted = tone.card.includes("text-white")
              ? "text-champagne/75"
              : "text-steel";
            return (
              <Reveal key={area.title} delay={i * 0.05}>
                <div
                  className={`flex h-full flex-col gap-4 rounded-[3px] p-8 transition-transform duration-150 ease-out hover:-translate-y-0.5 ${tone.card}`}
                >
                  <IconSwatch icon={icons[i]} tone={tone.swatch} />
                  <h3 className="font-sans text-xl font-semibold">{area.title}</h3>
                  <p className={`flex-1 text-[15px] leading-relaxed ${muted}`}>
                    {area.description}
                  </p>
                  <Link
                    href={area.cta.href}
                    className={`min-h-11 self-start border-b py-2 text-sm font-semibold transition-colors duration-150 ${tone.link}`}
                  >
                    {area.cta.label}
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
