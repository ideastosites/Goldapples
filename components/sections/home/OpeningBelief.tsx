import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { openingBelief } from "@/content/home";

export function OpeningBelief() {
  return (
    <section className="py-28 lg:py-36">
      <Container className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal>
            <Eyebrow>02 — Opening Belief</Eyebrow>
            <h2 className="text-ink mt-4 max-w-[14ch] font-serif text-3xl leading-tight lg:text-4xl">
              {openingBelief.heading}
            </h2>
          </Reveal>
        </div>
        <div className="flex flex-col gap-5 lg:col-span-7 lg:col-start-6">
          {openingBelief.paragraphs.map((p, i) => (
            <Reveal
              key={p}
              as="p"
              delay={i * 0.05}
              className="text-steel max-w-[68ch] text-lg leading-relaxed"
            >
              {p}
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
