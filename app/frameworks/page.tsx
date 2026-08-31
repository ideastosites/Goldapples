import type { Metadata } from "next";
import { seo } from "@/content/seo";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Stepper } from "@/components/ui/Stepper";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { FrameworksShowcase } from "@/components/sections/FrameworksShowcase";
import { frameworksIntro, frameworks, frameworksHowWeWork, frameworksCta } from "@/content/frameworks";

export const metadata: Metadata = {
  title: { absolute: seo.frameworks.title },
  description: seo.frameworks.description,
};

export default function FrameworksPage() {
  return (
    <>
      {/* ── HERO: Uniform PageHero ── */}
      <PageHero
        eyebrow={frameworksIntro.eyebrow}
        heading={frameworksIntro.heading}
        body={frameworksIntro.body}
        lead={frameworksIntro.lead}
      />

      {/* Showcase Section (Tabs switcher) */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <Reveal>
            <FrameworksShowcase frameworks={frameworks} />
          </Reveal>
        </Container>
      </section>

      {/* Stepper on Tinted Band */}
      <section className="bg-champagne py-20 lg:py-28">
        <Container>
          <Reveal>
            <h2 className="text-ink font-serif text-3xl mb-12">How We Work</h2>
          </Reveal>
          <Stepper steps={frameworksHowWeWork} />
        </Container>
      </section>

      {/* Closing CTA */}
      <ClosingCta heading={frameworksCta.heading} cta={frameworksCta.cta} />
    </>
  );
}
