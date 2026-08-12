import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { IconSwatch } from "@/components/ui/IconSwatch";
import { DuotonePhoto } from "@/components/ui/DuotonePhoto";
import {
  IconAcademy,
  IconLab,
  IconReview,
  IconGovernment,
  IconDevelopment,
  IconMedia,
  IconAdvisory,
  IconGovernment as IconPublicSector,
  IconDiagnose,
  IconAcademy as IconEducation,
} from "@/components/icons";
import { featuredProgrammes } from "@/content/home";

const programmeIcons = [
  IconAcademy,
  IconLab,
  IconReview,
  IconGovernment,
  IconDevelopment,
];

const moduleIcons = [
  IconReview,
  IconMedia,
  IconAdvisory,
  IconPublicSector,
  IconEducation,
  IconDiagnose,
];

export function FeaturedProgrammes() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <Reveal className="max-w-[70ch]">
          <Eyebrow>07 — Featured Programmes</Eyebrow>
          <h2 className="text-ink mt-4 font-serif text-3xl leading-tight lg:text-4xl">
            Featured Programmes
          </h2>
          <p className="text-steel mt-5 text-lg leading-relaxed">
            {featuredProgrammes.intro}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          <Reveal className="border-graphite/12 relative row-span-2 flex min-h-[420px] flex-col justify-end overflow-hidden rounded-[3px] border p-8 lg:min-h-[600px]">
            <DuotonePhoto
              src="/assets/photography/academy-session.jpg"
              alt="A Goldapples executive session in progress in Abuja"
              tone="ink-gold"
              className="absolute inset-0"
              sizes="(min-width: 1024px) 33vw, 100vw"
            />
            <div className="relative">
              <h3 className="font-serif text-2xl text-white">
                {featuredProgrammes.programmes[0].title}
              </h3>
              <p className="text-champagne/80 mt-3 text-[15px] leading-relaxed">
                {featuredProgrammes.programmes[0].description}
              </p>
            </div>
          </Reveal>

          {featuredProgrammes.programmes.slice(1).map((programme, i) => (
            <Reveal key={programme.title} delay={(i + 1) * 0.05}>
              <div className="border-graphite/12 flex h-full flex-col gap-4 rounded-[3px] border bg-white p-7">
                <IconSwatch icon={programmeIcons[i + 1]} tone="outline-dark" />
                <h3 className="text-ink font-sans text-lg font-semibold">
                  {programme.title}
                </h3>
                <p className="text-steel flex-1 text-[15px] leading-relaxed">
                  {programme.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="from-gold-deep to-gold mt-16 rounded-[3px] bg-linear-to-br p-8 lg:p-10">
          <h3 className="text-ink font-serif text-2xl">
            Industry-Specific Communication Modules
          </h3>
          <p className="text-ink/80 mt-3 max-w-[70ch] text-[15px] leading-relaxed">
            {featuredProgrammes.industryModulesIntro}
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProgrammes.industryModules.map((module, i) => (
              <div key={module.sector} className="flex items-start gap-3">
                <IconSwatch icon={moduleIcons[i]} tone="ink" className="mt-0.5" />
                <div>
                  <span className="text-ink block text-[15px] font-semibold">
                    {module.sector}
                  </span>
                  <span className="text-ink/70 text-sm leading-relaxed">
                    {module.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-10 flex flex-col items-start gap-6">
          <p className="text-steel text-sm">
            {featuredProgrammes.industryModulesClosing}
          </p>
          <Button href={featuredProgrammes.cta.href} variant="primary">
            {featuredProgrammes.cta.label}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
