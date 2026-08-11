import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { whatWeDo } from "@/content/home";

export function WhatWeDo() {
  return (
    <section className="border-graphite/10 border-t bg-white py-28 lg:py-36">
      <Container className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow>03 — What We Do</Eyebrow>
            <h2 className="text-ink mt-4 max-w-[18ch] font-serif text-3xl leading-tight lg:text-4xl">
              {whatWeDo.heading}
            </h2>
          </Reveal>
        </div>
        <div className="flex flex-col gap-5 lg:col-span-6 lg:col-start-7">
          {whatWeDo.paragraphs.map((p, i) => (
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
