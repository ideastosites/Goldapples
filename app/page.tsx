import { Reveal } from "@/components/ui/Reveal";
import { siteMeta } from "@/content/site";

export default function Home() {
  return (
    <section className="mx-auto flex max-w-[1280px] flex-col gap-6 px-6 py-32 lg:px-10">
      <Reveal
        as="p"
        className="text-gold-deep text-xs font-semibold tracking-[0.14em] uppercase"
      >
        Phase 1 — Scaffold
      </Reveal>
      <Reveal
        as="h1"
        delay={0.05}
        className="text-ink max-w-[18ch] font-serif text-5xl leading-[1.1] lg:text-7xl"
      >
        {siteMeta.positioningLine}
      </Reveal>
      <Reveal as="p" delay={0.1} className="text-steel max-w-[60ch] text-lg">
        Layout scaffold, design tokens, navigation and grain overlay are wired up. Page
        content for Home builds in Phase 2.
      </Reveal>
    </section>
  );
}
