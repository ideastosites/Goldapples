import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { workImpactTeaser } from "@/content/home";

export function WorkImpactTeaser() {
  return (
    <section className="bg-champagne py-24 lg:py-32">
      <Container className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow>08 — Work and Impact</Eyebrow>
            <h2 className="text-ink mt-4 max-w-[16ch] font-serif text-3xl leading-tight lg:text-4xl">
              {workImpactTeaser.heading}
            </h2>
            <p className="text-graphite mt-5 max-w-[52ch] text-lg leading-relaxed">
              {workImpactTeaser.body}
            </p>
            <Button href={workImpactTeaser.cta.href} variant="primary" className="mt-8">
              {workImpactTeaser.cta.label}
            </Button>
          </Reveal>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal delay={0.08} className="flex flex-wrap gap-2.5">
            {workImpactTeaser.caseStudies.map((cs) => (
              <Tag key={cs}>{cs}</Tag>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
