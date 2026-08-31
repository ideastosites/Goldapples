import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { DuotonePhoto } from "@/components/ui/DuotonePhoto";
import { whyGoldapples } from "@/content/home";

function ConceptIcon({ index }: { index: number }) {
  const icons = [
    <path key="0" d="M12 4 L12 20 M4 12 L20 12 M7 7 L17 17 M7 17 L17 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />,
    <path key="1" d="M4 12 C8 12, 12 8, 12 4 C12 8, 16 12, 20 12 C16 12, 12 16, 12 20 C12 16, 8 12, 4 12 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />,
    <path key="2" d="M3 12h5l2.5-4 5 8 2.5-4h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />,
    <path key="3" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />,
  ];

  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-gold-deep mb-5">
      {icons[index % icons.length]}
    </svg>
  );
}

export function WhyGoldapples() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <Container>
        {/* Top — Headline & Intro */}
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-10">
            <Reveal>
              <p className="font-mono text-[11px] font-semibold tracking-[0.25em] uppercase text-gold-deep mb-6">
                Why Goldapples
              </p>
              <h2 className="font-serif text-[2rem] leading-[1.12] text-ink lg:text-[2.5rem] mb-6 max-w-[20ch]">
                {whyGoldapples.heading}
              </h2>
              <p className="text-graphite text-[17px] leading-relaxed max-w-[45ch]">
                {whyGoldapples.body}
              </p>
            </Reveal>
          </div>
        </div>

        {/* Bottom — Mixed Grid of points and image */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          
          {/* Points 1 & 2 */}
          {whyGoldapples.points.slice(0, 2).map((point, i) => (
            <Reveal key={point} delay={i * 0.1} className="h-full">
              <div className="bg-champagne/40 border border-graphite/5 rounded-[3px] p-8 h-full flex flex-col justify-center min-h-[240px] transition-transform duration-300 hover:-translate-y-1 hover:shadow-sm">
                <ConceptIcon index={i} />
                <p className="font-serif text-[19px] leading-snug text-ink">
                  {point}
                </p>
              </div>
            </Reveal>
          ))}

          {/* Portrait Image spanning 2 rows vertically on desktop */}
          <Reveal delay={0.2} className="md:col-span-2 lg:col-span-1 lg:row-span-2 h-full">
            <div className="relative w-full h-[400px] lg:h-full min-h-[500px] rounded-[3px] overflow-hidden group">
              <DuotonePhoto
                src="/why gold.jpg"
                alt="Goldapples leadership — J. Ayo Makinde"
                tone="ink"
                className="absolute inset-0 w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 to-transparent flex items-end p-8">
                <p className="font-serif text-[17px] leading-snug italic text-champagne/90 border-l-[3px] border-gold-deep pl-5">
                  &ldquo;{whyGoldapples.closing}&rdquo;
                </p>
              </div>
            </div>
          </Reveal>

          {/* Points 3 & 4 */}
          {whyGoldapples.points.slice(2, 4).map((point, i) => (
            <Reveal key={point} delay={0.3 + i * 0.1} className="h-full">
              <div className="bg-graphite text-white rounded-[3px] p-8 h-full flex flex-col justify-center min-h-[240px] transition-transform duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-ink/20">
                <ConceptIcon index={i + 2} />
                <p className="font-serif text-[19px] leading-snug text-champagne/90">
                  {point}
                </p>
              </div>
            </Reveal>
          ))}
          
        </div>
      </Container>
    </section>
  );
}