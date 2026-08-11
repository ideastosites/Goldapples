import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/ui/Container";
import { footerContent } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy | Goldapples Media Associates" },
  description:
    "How Goldapples Media Associates handles the information you share with us.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageIntro eyebrow="Legal" heading="Privacy Policy" />
      <section className="py-24 lg:py-32">
        <Container className="max-w-[70ch]">
          <p className="text-steel text-lg leading-relaxed">
            Our full privacy policy is being finalised. In the meantime, if you have
            questions about how Goldapples Media Associates handles the information you
            share with us — through this site, a consultation request or a programme brief
            — please contact us directly at{" "}
            <a
              href={`mailto:${footerContent.email}`}
              className="text-ink hover:text-gold-deep underline"
            >
              {footerContent.email}
            </a>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
