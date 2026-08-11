import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { whyGoldapples } from "@/content/home";

export function WhyGoldapples() {
  return (
    <section className="border-graphite/10 border-t py-28 lg:py-36">
      <Container className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal>
            <Eyebrow>09 — Why Goldapples</Eyebrow>
            <h2 className="text-ink mt-4 max-w-[14ch] font-serif text-3xl leading-tight lg:text-4xl">
              {whyGoldapples.heading}
            </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <Reveal as="p" className="text-steel max-w-[68ch] text-lg leading-relaxed">
            {whyGoldapples.body}
          </Reveal>
          <Reveal
            as="p"
            delay={0.05}
            className="text-ink border-gold-deep mt-6 max-w-[60ch] border-l-2 pl-5 font-serif text-2xl leading-snug italic"
          >
            {whyGoldapples.closing}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
