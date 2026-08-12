import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Marquee } from "@/components/ui/Marquee";
import { whoWeWorkWith } from "@/content/home";

export function WhoWeWorkWith() {
  return (
    <section className="bg-champagne py-24 lg:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow>06 — Who We Work With</Eyebrow>
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal as="p" className="text-graphite max-w-[68ch] text-lg leading-relaxed">
              {whoWeWorkWith.body}
            </Reveal>
            <Reveal
              as="p"
              delay={0.05}
              className="text-ink mt-4 max-w-[68ch] text-lg leading-relaxed"
            >
              {whoWeWorkWith.closing}
            </Reveal>
          </div>
        </div>
      </Container>
      <Reveal delay={0.1} className="mt-12 px-6 lg:px-10">
        <Marquee>
          {whoWeWorkWith.tags.map((tag) => (
            <span
              key={tag}
              className="border-gold-deep/50 text-ink inline-flex items-center rounded-[3px] border bg-white px-4 py-2 text-sm whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </Marquee>
      </Reveal>
    </section>
  );
}
