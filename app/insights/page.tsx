import type { Metadata } from "next";
import { seo } from "@/content/seo";
import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/ui/Container";
import { InsightsGrid } from "@/components/sections/InsightsGrid";
import { insightsIntro } from "@/content/insights";

export const metadata: Metadata = {
  title: { absolute: seo.insights.title },
  description: seo.insights.description,
};

export default function InsightsPage() {
  return (
    <>
      <PageIntro eyebrow={insightsIntro.eyebrow} heading={insightsIntro.heading}>
        <p className="text-ink mt-6 max-w-[52ch] font-serif text-2xl leading-snug italic">
          {insightsIntro.lead}
        </p>
        <p className="text-steel mt-6 max-w-[62ch] text-lg leading-relaxed">
          {insightsIntro.body}
        </p>
      </PageIntro>

      <section className="py-24 lg:py-32">
        <Container>
          <InsightsGrid />
        </Container>
      </section>
    </>
  );
}
