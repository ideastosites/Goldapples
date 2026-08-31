import { Reveal } from "@/components/ui/Reveal";
import { Marquee } from "@/components/ui/Marquee";
import { SignalDivider } from "@/components/ui/SignalDivider";
import { whoWeWorkWith } from "@/content/home";

export function WhoWeWorkWith() {
  return (
    <section className="bg-white pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden relative">
      <div className="max-w-[1000px] mx-auto text-center px-6 mb-16 relative z-10">
        <Reveal>
          <p className="font-mono text-[11px] font-semibold tracking-[0.25em] uppercase text-gold-deep mb-6">
            {whoWeWorkWith.heading}
          </p>
          <h3 className="font-serif text-[2rem] leading-[1.15] text-ink lg:text-[2.5rem] mb-8 mx-auto">
            {whoWeWorkWith.body}
          </h3>
          <p className="text-graphite text-[17px] leading-relaxed max-w-[80ch] mx-auto mb-10">
            {whoWeWorkWith.closing}
          </p>
        </Reveal>
        
        <Reveal delay={0.2}>
          <SignalDivider tone="ink" className="opacity-60" />
        </Reveal>
      </div>

      {/* Marquee Tickers - Dual intersecting direction */}
      <div className="relative z-10 flex flex-col gap-3 mt-4">
        <div className="w-[105%] -ml-[2.5%] rotate-[-0.5deg] bg-ink py-3 shadow-md">
          <Marquee durationSeconds={45}>
            {whoWeWorkWith.tags.slice(0, 6).map((tag) => (
              <span
                key={tag}
                className="inline-flex shrink-0 items-center px-8 py-1.5 text-[15px] font-mono tracking-widest uppercase text-champagne/90 mx-2"
              >
                {tag}
                <span className="ml-12 w-1.5 h-1.5 rounded-full bg-gold-deep/50" />
              </span>
            ))}
          </Marquee>
        </div>
        
        <div className="w-[105%] -ml-[2.5%] rotate-[0.5deg] bg-gold-deep py-3 shadow-md">
          <Marquee durationSeconds={50} reverse>
            {whoWeWorkWith.tags.slice(6).map((tag) => (
              <span
                key={tag}
                className="inline-flex shrink-0 items-center px-8 py-1.5 text-[15px] font-mono tracking-widest uppercase text-ink mx-2"
              >
                {tag}
                <span className="ml-12 w-1.5 h-1.5 rounded-full bg-ink/30" />
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}