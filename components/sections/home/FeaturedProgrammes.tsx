import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { DuotonePhoto } from "@/components/ui/DuotonePhoto";
import { featuredProgrammes } from "@/content/home";

export function FeaturedProgrammes() {
  return (
    <section className="bg-champagne py-24 lg:py-32">
      <Container>
        {/* Header */}
        <Reveal className="mb-16 max-w-[600px]">
          <p className="font-mono text-[11px] font-semibold tracking-[0.25em] uppercase text-gold-deep mb-4">
            Featured Programmes
          </p>
          <h2 className="text-ink font-serif text-[2rem] leading-tight lg:text-[2.5rem] mb-5">
            Our Programmes
          </h2>
          <p className="text-graphite text-[17px] leading-relaxed mb-8">
            {featuredProgrammes.intro}
          </p>
          <Button href="/academy" variant="gold">
            Explore the Academy
          </Button>
        </Reveal>

        {/* Bento mosaic — mixed images + text cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Programme 1 — Large image card */}
          <Reveal className="lg:col-span-2 lg:row-span-2 h-full">
            <div className="relative h-full min-h-[400px] lg:min-h-[520px] rounded-[3px] overflow-hidden group transition-all duration-300 hover:shadow-xl hover:shadow-gold-deep/10 hover:-translate-y-1">
              <DuotonePhoto
                src="/Executive Communication Masterclass.jpg"
                alt={featuredProgrammes.programmes[0].title}
                tone="ink-gold"
                className="absolute inset-0 w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10 z-10">
                <span className="mb-3 block font-mono text-[10px] font-semibold tracking-[0.25em] uppercase text-gold">
                  Flagship Programme
                </span>
                <h3 className="font-serif text-[22px] text-white leading-snug mb-3">
                  {featuredProgrammes.programmes[0].title}
                </h3>
                <p className="text-champagne/80 text-[15px] leading-relaxed max-w-[50ch]">
                  {featuredProgrammes.programmes[0].description}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Programme 2 — text card on ink */}
          <Reveal delay={0.1} className="h-full">
            <div className="bg-ink rounded-[3px] p-8 flex flex-col justify-between h-full min-h-[240px] group transition-all duration-300 hover:shadow-xl hover:shadow-ink/10 hover:-translate-y-1">
              <div>
                <h3 className="font-serif text-[19px] text-white leading-snug mb-3 group-hover:text-gold-deep transition-colors">
                  {featuredProgrammes.programmes[1].title}
                </h3>
                <p className="text-champagne/70 text-[15px] leading-relaxed">
                  {featuredProgrammes.programmes[1].description}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Programme 3 — image thumbnail card */}
          <Reveal delay={0.15} className="h-full">
            <div className="relative rounded-[3px] overflow-hidden min-h-[240px] h-full group transition-all duration-300 hover:shadow-xl hover:shadow-gold-deep/10 hover:-translate-y-1">
              <DuotonePhoto
                src="/Communicating Credibility.jpg"
                alt={featuredProgrammes.programmes[2].title}
                tone="gold"
                className="absolute inset-0 w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <h3 className="font-serif text-lg text-white leading-snug">
                  {featuredProgrammes.programmes[2].title}
                </h3>
              </div>
            </div>
          </Reveal>

          {/* Programme 4 — text card on white */}
          <Reveal delay={0.2} className="h-full">
            <div className="bg-white rounded-[3px] p-8 flex flex-col justify-between h-full border border-graphite/10 min-h-[220px] group transition-all duration-300 hover:shadow-xl hover:shadow-ink/5 hover:-translate-y-1">
              <div>
                <h3 className="font-serif text-[19px] text-ink leading-snug mb-3 group-hover:text-gold-deep transition-colors">
                  {featuredProgrammes.programmes[3].title}
                </h3>
                <p className="text-steel text-[15px] leading-relaxed">
                  {featuredProgrammes.programmes[3].description}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Programme 5 — text card on graphite */}
          <Reveal delay={0.25} className="h-full">
            <div className="bg-graphite rounded-[3px] p-8 flex flex-col justify-between h-full min-h-[220px] group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div>
                <h3 className="font-serif text-[19px] text-white leading-snug mb-3 group-hover:text-gold-deep transition-colors">
                  {featuredProgrammes.programmes[4].title}
                </h3>
                <p className="text-champagne/70 text-[15px] leading-relaxed">
                  {featuredProgrammes.programmes[4].description}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Industry modules card */}
          <Reveal delay={0.3} className="h-full">
            <div className="bg-gold-deep rounded-[3px] p-8 h-full min-h-[220px] transition-transform duration-300 hover:-translate-y-1">
              <h3 className="font-serif text-[19px] text-ink mb-5">
                {featuredProgrammes.industryModulesIntro}
              </h3>
              <ul className="space-y-2.5">
                {featuredProgrammes.industryModules.map((mod) => (
                  <li key={mod.sector} className="flex items-center gap-2.5 text-[14px] text-ink/90">
                    <span className="w-1.5 h-1.5 rounded-full bg-ink/40 shrink-0" />
                    {mod.sector}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* CTA */}
        <Reveal className="mt-14 flex justify-center">
          <Button href={featuredProgrammes.cta.href} variant="primary">
            {featuredProgrammes.cta.label}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}