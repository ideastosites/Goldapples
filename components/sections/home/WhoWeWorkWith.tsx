import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Tag } from "@/components/ui/Tag";
import { whoWeWorkWith } from "@/content/home";

export function WhoWeWorkWith() {
  return (
    <section className="border-graphite/10 border-t py-28 lg:py-36">
      <Container className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal>
            <Eyebrow>06 — Who We Work With</Eyebrow>
          </Reveal>
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <Reveal as="p" className="text-steel max-w-[68ch] text-lg leading-relaxed">
            {whoWeWorkWith.body}
          </Reveal>
          <Reveal
            as="p"
            delay={0.05}
            className="text-ink mt-4 max-w-[68ch] text-lg leading-relaxed"
          >
            {whoWeWorkWith.closing}
          </Reveal>
          <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-2.5">
            {whoWeWorkWith.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
