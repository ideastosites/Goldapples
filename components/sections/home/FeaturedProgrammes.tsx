import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { featuredProgrammes } from "@/content/home";

export function FeaturedProgrammes() {
  return (
    <section className="border-graphite/10 border-t py-28 lg:py-36">
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

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProgrammes.programmes.map((programme, i) => (
            <Reveal key={programme.title} delay={i * 0.04}>
              <Card className="h-full">
                <h3 className="text-ink font-sans text-lg font-semibold">
                  {programme.title}
                </h3>
                <p className="text-steel mt-3 text-[15px] leading-relaxed">
                  {programme.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 max-w-[70ch]">
          <h3 className="text-ink font-serif text-2xl">
            Industry-Specific Communication Modules
          </h3>
          <p className="text-steel mt-3 text-[15px] leading-relaxed">
            {featuredProgrammes.industryModulesIntro}
          </p>
        </Reveal>

        <div className="mt-8 grid gap-px sm:grid-cols-2 lg:grid-cols-3">
          {featuredProgrammes.industryModules.map((module, i) => (
            <Reveal key={module.sector} delay={i * 0.04}>
              <div className="border-graphite/10 flex h-full flex-col gap-2 border p-6">
                <span className="text-ink font-sans text-[15px] font-semibold">
                  {module.sector}
                </span>
                <span className="text-steel text-sm leading-relaxed">
                  {module.description}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

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
