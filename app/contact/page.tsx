import type { Metadata } from "next";
import { seo } from "@/content/seo";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ContactForm } from "@/components/sections/ContactForm";
import { contactContent } from "@/content/contact";
import { footerContent } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: seo.contact.title },
  description: seo.contact.description,
};

export default function ContactPage() {
  return (
    <section className="py-24 lg:py-32">
      <Container className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow>{contactContent.eyebrow}</Eyebrow>
            <h1 className="text-ink mt-4 max-w-[18ch] font-serif text-4xl leading-tight lg:text-5xl">
              {contactContent.heading}
            </h1>
            <p className="text-steel mt-6 max-w-[52ch] text-lg leading-relaxed">
              {contactContent.body}
            </p>
            <div className="mt-10 flex flex-col gap-1 text-sm">
              <span className="text-steel">Email</span>
              <a
                href={`mailto:${footerContent.email}`}
                className="text-ink hover:text-gold-deep"
              >
                {footerContent.email}
              </a>
            </div>
            <div className="mt-4 flex flex-col gap-1 text-sm">
              <span className="text-steel">Location</span>
              <span className="text-ink">{footerContent.location}</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.05} className="lg:col-span-6 lg:col-start-7">
          <ContactForm />
        </Reveal>
      </Container>
    </section>
  );
}
