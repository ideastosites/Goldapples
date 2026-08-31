import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { academyIntro, programmeCategories, deliveryFormats, weService, academyCta } from "@/content/academy";
import { Button } from "@/components/ui/Button";
import { SignalDivider } from "@/components/ui/SignalDivider";
import { DuotonePhoto } from "@/components/ui/DuotonePhoto";
import { 
  Clock, CalendarDays, CalendarRange, Map, Laptop, 
  Building2, Users, TestTube, Sparkles, User, 
  Users2, Landmark, Briefcase, Radio, 
  Globe2, Leaf, GraduationCap, Mic 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Executive Communication Training and Masterclasses | Goldapples Academy",
  description:
    "Practical executive communication training, leadership communication labs, workshops and masterclasses for professionals, teams and institutions.",
};

// Helper for mapping strings to line icons
const getFormatIcon = (format: string) => {
  const f = format.toLowerCase();
  if (f.includes('half-day')) return Clock;
  if (f.includes('one-day')) return CalendarDays;
  if (f.includes('two-day')) return CalendarRange;
  if (f.includes('retreat')) return Map;
  if (f.includes('virtual')) return Laptop;
  if (f.includes('in-house')) return Building2;
  if (f.includes('cohort')) return Users;
  if (f.includes('simulation')) return TestTube;
  return Sparkles; 
};

const getAudienceIcon = (audience: string) => {
  const a = audience.toLowerCase();
  if (a.includes('executives')) return User;
  if (a.includes('managers')) return Briefcase;
  if (a.includes('officials')) return Landmark;
  if (a.includes('project leads')) return Briefcase;
  if (a.includes('communication teams')) return Users2;
  if (a.includes('media professionals')) return Radio;
  if (a.includes('civil society')) return Globe2;
  if (a.includes('development')) return Leaf;
  if (a.includes('educators')) return GraduationCap;
  if (a.includes('public-facing')) return Mic;
  return Users; 
};

export default function AcademyPage() {
  

  return (
    <>
      {/* Type-Led Editorial Hero */}
      <section className="bg-ink pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden relative">
        <Container>
          <Reveal>
            <p className="font-mono text-xs font-bold tracking-[0.15em] uppercase text-gold-deep mb-6">
              {academyIntro.eyebrow}
            </p>
            <h1 className="text-white font-serif text-4xl leading-[1.1] md:text-5xl lg:text-6xl max-w-[20ch]">
              {academyIntro.heading}
            </h1>
            <h2 className="text-champagne/90 font-serif mt-6 max-w-[32ch] text-xl md:text-2xl leading-snug">
              {academyIntro.lead}
            </h2>
          </Reveal>

          {/* Deliberate Signal Motif Divider */}
          <Reveal delay={0.1} className="w-full mt-16 mb-12 lg:mt-20 lg:mb-16">
            <SignalDivider tone="gold" className="w-full !max-w-none [&_svg]:!max-w-none [&_svg]:w-full" />
          </Reveal>

          {/* Programme Index */}
          <Reveal delay={0.2}>
            <div className="flex flex-wrap gap-x-12 gap-y-6 lg:gap-x-16">
              {programmeCategories.map((prog, i) => (
                <a 
                  key={prog.id} 
                  href={`#programme-${i + 1}`} 
                  className="group flex items-baseline gap-3 font-mono text-xs uppercase tracking-[0.15em] transition-colors"
                >
                  <span className="text-gold-deep font-bold text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-champagne/80 group-hover:text-champagne group-hover:underline decoration-gold-deep/50 underline-offset-4">
                    {prog.title}
                  </span>
                </a>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Intro Band */}
      <section className="bg-champagne py-16 lg:py-24 border-b border-graphite/10 relative z-40">
        <Container>
          <Reveal>
            <p className="text-graphite text-[17px] md:text-lg leading-relaxed max-w-[55ch]">
              {academyIntro.body}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Programmes Stacked Sections */}
      <div className="relative overflow-hidden">
        {programmeCategories.map((prog, i) => {
          const isInk = i % 2 !== 0;
          const isImageRight = i % 2 === 0;

          return (
            <section
              key={prog.id}
              id={`programme-${i + 1}`}
              className={`relative py-24 lg:py-32 ${isInk ? "bg-ink" : "bg-champagne"}`}
            >
              <Container className="relative z-10">
                <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 md:gap-14 lg:gap-16 group">
                  {/* Node & Line */}
                  <div className="relative shrink-0 flex items-start justify-center sm:justify-start">
                    <div
                      className={`hidden sm:block absolute left-[1.75rem] -top-[100vh] -bottom-[100vh] w-px ${
                        isInk ? "bg-white/10" : "bg-graphite/15"
                      } -z-10`}
                    />
                    
                    <div
                      className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold-deep text-gold-deep transition-all duration-500 group-hover:scale-110 group-hover:bg-gold-deep group-hover:text-ink ${
                        isInk ? "bg-ink" : "bg-champagne"
                      }`}
                    >
                      <span className="font-mono font-bold text-lg">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Content & Image Grid */}
                  <div className="flex-1 w-full pt-2">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                      
                      {/* Text Column */}
                      <div className={`flex flex-col ${isImageRight ? "lg:order-1" : "lg:order-2"}`}>
                        <Reveal>
                          <p
                            className={`font-sans text-sm md:text-[15px] font-semibold leading-snug mb-4 ${
                              isInk ? "text-gold" : "text-gold-700"
                            }`}
                          >
                            {prog.audience}
                          </p>
                          <h2
                            className={`font-serif text-[2rem] md:text-[2.5rem] leading-[1.15] mb-6 ${
                              isInk ? "text-white" : "text-ink"
                            }`}
                          >
                            {prog.title}
                          </h2>
                          {prog.body && (
                            <p
                              className={`text-[17px] leading-relaxed ${
                                isInk ? "text-champagne/80" : "text-graphite"
                              }`}
                            >
                              {prog.body}
                            </p>
                          )}

                          {prog.themes && Array.isArray(prog.themes) && prog.themes.length > 0 && (
                            <div className="mt-8">
                              <p className={`text-xs font-bold tracking-[0.1em] uppercase mb-4 ${isInk ? "text-white/40" : "text-graphite/50"}`}>
                                Key Themes
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {prog.themes.map((theme) => (
                                  <span
                                    key={theme}
                                    className={`inline-flex items-center px-3 py-1.5 rounded-[4px] border text-[13.5px] font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md cursor-default ${
                                      isInk 
                                        ? "border-white/10 bg-white/5 text-champagne/90" 
                                        : "border-graphite/20 bg-white text-ink/80"
                                    }`}
                                  >
                                    {theme}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </Reveal>
                      </div>

                      {/* Image Column */}
                      <div className={`w-full ${isImageRight ? "lg:order-2" : "lg:order-1"}`}>
                        <Reveal delay={0.1}>
                           <DuotonePhoto 
                             src={prog.image || ""} 
                             alt={prog.title} 
                             tone={isInk ? "gold" : "ink-gold"}
                             className="w-full aspect-[4/3] rounded-sm"
                           />
                        </Reveal>
                      </div>

                    </div>
                  </div>
                </div>
              </Container>
            </section>
          );
        })}
      </div>

      {/* Delivery Formats & Audience (Structured Panels) */}
      <section className="bg-champagne py-24 lg:py-32">
        <Container className="grid gap-8 lg:grid-cols-2">
          
          <Reveal>
            <div className="bg-white border border-graphite/10 rounded-xl p-8 md:p-12 h-full flex flex-col shadow-sm">
              <div className="mb-12">
                <p className="font-mono text-xs font-bold tracking-[0.15em] uppercase text-gold-700 mb-4">
                  Logistics
                </p>
                <div className="w-12 h-px bg-gold-deep mb-6" />
                <h2 className="text-ink font-serif text-[2rem]">
                  {deliveryFormats.eyebrow}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 mt-auto">
                {deliveryFormats.items.map((format) => {
                  const Icon = getFormatIcon(format);
                  return (
                    <div
                      key={format}
                      className="flex items-center gap-4 bg-white border border-graphite/15 rounded-md p-4 transition-colors hover:border-gold-deep group"
                    >
                      <div className="shrink-0 text-gold-700 group-hover:text-gold-deep transition-colors">
                        <Icon strokeWidth={1.5} size={20} />
                      </div>
                      <span className="text-[14.5px] text-ink font-medium text-left leading-snug">
                        {format}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="bg-white border border-graphite/10 rounded-xl p-8 md:p-12 h-full flex flex-col shadow-sm">
              <div className="mb-12">
                <p className="font-mono text-xs font-bold tracking-[0.15em] uppercase text-gold-700 mb-4">
                  Target Profiles
                </p>
                <div className="w-12 h-px bg-gold-deep mb-6" />
                <h2 className="text-ink font-serif text-[2rem]">
                  {weService.eyebrow}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 mt-auto">
                {weService.items.map((audience) => {
                  const Icon = getAudienceIcon(audience);
                  return (
                    <div
                      key={audience}
                      className="flex items-center gap-4 bg-white border border-graphite/15 rounded-md p-4 transition-colors hover:border-gold-deep group"
                    >
                      <div className="shrink-0 text-gold-700 group-hover:text-gold-deep transition-colors">
                        <Icon strokeWidth={1.5} size={20} />
                      </div>
                      <span className="text-[14.5px] text-ink font-medium text-left leading-snug">
                        {audience}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>

        </Container>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-ink">
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink/95 to-gold-deep/40 z-0" />

        <Container className="relative z-10 py-32 lg:py-40 text-center flex flex-col items-center">
          <Reveal className="w-full">
            <SignalDivider tone="gold" className="mb-16" />
            
            <h2 className="font-serif text-[2rem] leading-[1.12] text-white lg:text-[2.5rem] mb-12 max-w-[20ch] mx-auto">
              {academyCta.heading}
            </h2>
            
            <Button href={academyCta.cta.href} variant="gold" className="px-10 h-14 text-base">
              {academyCta.cta.label}
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
