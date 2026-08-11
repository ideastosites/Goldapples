import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function PageIntro({
  eyebrow,
  heading,
  children,
}: {
  eyebrow: string;
  heading: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-graphite/10 border-b bg-white py-24 lg:py-32">
      <Container className="max-w-[1280px]">
        <Reveal className="max-w-[46ch]">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="text-ink mt-4 font-serif text-4xl leading-tight lg:text-5xl">
            {heading}
          </h1>
          {children}
        </Reveal>
      </Container>
    </section>
  );
}
