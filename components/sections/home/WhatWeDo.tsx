import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { DuotonePhoto } from "@/components/ui/DuotonePhoto";
import { whatWeDo } from "@/content/home";

export function WhatWeDo() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left side text */}
          <div className="lg:col-span-6 lg:pr-6">
            <Reveal>
              <p className="font-mono text-[11px] font-semibold tracking-[0.25em] uppercase text-gold-deep mb-6">
                What We Do
              </p>
              <h2 className="font-serif text-[2rem] leading-[1.12] text-ink lg:text-[2.5rem] mb-10 max-w-[20ch]">
                We help organisations close the gap between <span className="italic">intention</span> and <span className="italic">execution.</span>
              </h2>
            </Reveal>
            <div className="space-y-8 relative">
              {/* Refined thin gold hairline */}
              <div className="absolute left-0 top-2 bottom-2 w-[1px] bg-gradient-to-b from-gold-deep via-gold-deep/30 to-transparent" />
              
              {whatWeDo.paragraphs.map((p, i) => (
                <Reveal key={i} as="p" delay={0.15 + i * 0.1} className="text-steel text-[17px] leading-relaxed pl-6">
                  {p}
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right side flat image */}
          <div className="lg:col-span-6">
            <Reveal delay={0.3} className="relative aspect-square md:aspect-[4/5] w-full max-w-[480px] mx-auto lg:ml-auto rounded-[3px] overflow-hidden shadow-sm">
              <DuotonePhoto
                src="/What_we_do.jpg"
                alt="Goldapples advisory session"
                tone="ink-gold"
                className="absolute inset-0 w-full h-full"
              />
            </Reveal>
          </div>

        </div>
      </Container>
    </section>
  );
}