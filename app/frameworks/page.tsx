import type { Metadata } from "next";
import { seo } from "@/content/seo";
import { PageIntro } from "@/components/sections/PageIntro";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { frameworksIntro, frameworks, frameworksCta } from "@/content/frameworks";
import { PhysicsOfCommunicationDiagram } from "@/components/diagrams/PhysicsOfCommunicationDiagram";
import { MeaningFrameworkDiagram } from "@/components/diagrams/MeaningFrameworkDiagram";
import { LeadershipAlignmentDiagram } from "@/components/diagrams/LeadershipAlignmentDiagram";
import { LeadershipCommunicationLabDiagram } from "@/components/diagrams/LeadershipCommunicationLabDiagram";

export const metadata: Metadata = {
  title: { absolute: seo.frameworks.title },
  description: seo.frameworks.description,
};

const diagrams = {
  "physics-of-communication": PhysicsOfCommunicationDiagram,
  "meaning-framework": MeaningFrameworkDiagram,
  "leadership-alignment-framework": LeadershipAlignmentDiagram,
  "leadership-communication-lab": LeadershipCommunicationLabDiagram,
};

export default function FrameworksPage() {
  return (
    <>
      <PageIntro eyebrow={frameworksIntro.eyebrow} heading={frameworksIntro.heading}>
        <p className="text-ink mt-6 max-w-[52ch] font-serif text-2xl leading-snug italic">
          {frameworksIntro.lead}
        </p>
        <p className="text-steel mt-6 max-w-[62ch] text-lg leading-relaxed">
          {frameworksIntro.body}
        </p>
      </PageIntro>

      <section className="divide-graphite/10 divide-y">
        {frameworks.map((framework, i) => {
          const Diagram = diagrams[framework.id as keyof typeof diagrams];
          return (
            <div
              key={framework.id}
              id={framework.id}
              className="scroll-mt-28 py-20 lg:py-28"
            >
              <Container className="grid gap-10 lg:grid-cols-12 lg:items-center">
                <Reveal className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <span className="text-graphite border-gold-deep border-l-2 pl-2 font-mono text-xs font-semibold">
                    0{i + 1}
                  </span>
                  <h2 className="text-ink mt-3 font-serif text-3xl leading-tight lg:text-4xl">
                    {framework.title}
                  </h2>
                  <p className="text-steel mt-5 max-w-[58ch] text-[15px] leading-relaxed">
                    {framework.body}
                  </p>
                </Reveal>
                <Reveal
                  delay={0.08}
                  className={`border-graphite/12 flex items-center border bg-white p-8 lg:col-span-6 ${
                    i % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <Diagram />
                </Reveal>
              </Container>
            </div>
          );
        })}
      </section>

      <ClosingCta heading={frameworksCta.heading} cta={frameworksCta.cta} />
    </>
  );
}
