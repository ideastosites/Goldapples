import type { Metadata } from "next";
import { seo } from "@/content/seo";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Tag } from "@/components/ui/Tag";
import { DarkSection } from "@/components/ui/DarkSection";
import { IconSwatch } from "@/components/ui/IconSwatch";
import { Marquee } from "@/components/ui/Marquee";
import Image from "next/image";

// Icons
import {
  IconDiagnose,
  IconMeaning,
  IconAlignment,
  IconMedia,
  IconFramework,
} from "@/components/icons";

import {
  aboutIntro,
  ourEvolution,
  ourPhilosophy,
  whatMakesUsDifferent,
  founder,
  ourWorkCovers,
  aspiration,
} from "@/content/about";

export const metadata: Metadata = {
  title: { absolute: seo.about.title },
  description: seo.about.description,
};

// Map each differentiator to an icon from the custom set
const differentiatorIcons = [
  IconDiagnose,
  IconMeaning,
  IconAlignment,
  IconMedia,
  IconFramework,
];

export default function AboutPage() {
  return (
    <>
      {/* 1. Intro (Dark solid hero header) */}
      <DarkSection className="pt-32 pb-16 lg:pt-48 lg:pb-24 relative">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="max-w-[700px]">
            <Reveal>
              <p className="font-mono text-[11px] font-bold tracking-[0.2em] uppercase text-gold-deep mb-6">
                {aboutIntro.eyebrow}
              </p>
              <h1 className="mt-2 font-serif text-5xl leading-[1.1] text-white lg:text-6xl tracking-tight">
                About Goldapples<br className="hidden lg:block" /> Media Associates
              </h1>
            </Reveal>
            <div className="mt-8 flex flex-col gap-6">
              {aboutIntro.paragraphs.map((p, i) => (
                <Reveal
                  key={i}
                  as="p"
                  delay={(i + 1) * 0.1}
                  className="text-white/60 text-[15px] leading-[1.7] max-w-[65ch] font-sans"
                >
                  {p}
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.4}>
              <p className="mt-10 font-serif text-gold text-xl lg:text-2xl tracking-wide">
                {aboutIntro.lead}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.3} className="relative w-full h-[400px] lg:h-[500px] rounded-sm overflow-hidden">
            <Image 
              src="/assets/photography/journalists-session.jpg" 
              alt="Journalists session" 
              fill 
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover" 
            />
          </Reveal>
        </Container>

        {/* Divider line with dot */}
        <Container className="mt-32">
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/[0.06]"></div>
            </div>
            <div className="relative flex justify-center bg-ink px-4">
              <div className="w-1.5 h-1.5 bg-gold-deep rounded-full rounded-tr-none rotate-45"></div>
            </div>
          </div>
        </Container>
      </DarkSection>

      {/* 2. Evolution (timeline on a Champagne band) */}
      <section className="bg-champagne py-24 lg:py-32">
        <Container className="grid gap-12 lg:grid-cols-12 items-start">
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow>{ourEvolution.eyebrow}</Eyebrow>
            </Reveal>
          </div>
          <div className="flex flex-col gap-6 lg:col-span-8 lg:col-start-5">
            {ourEvolution.paragraphs.map((p, i) => (
              <Reveal
                key={i}
                as="p"
                delay={i * 0.1}
                className="text-ink max-w-[68ch] text-[19px] leading-relaxed"
              >
                {p}
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Philosophy (Ink, unchanged emphasis from v1) */}
      <DarkSection className="py-32 lg:py-48">
        <Container className="grid gap-12 lg:grid-cols-12 items-start">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="font-mono text-[11px] font-bold tracking-[0.2em] uppercase text-gold-deep mb-6">
                {ourPhilosophy.eyebrow}
              </p>
              <h2 className="mt-2 font-serif text-5xl leading-[1.1] text-white lg:text-6xl tracking-tight">
                {ourPhilosophy.heading}
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 lg:mt-12">
            <Reveal
              as="p"
              delay={0.2}
              className="text-white/60 text-[15px] leading-[1.7] max-w-[65ch] font-sans"
            >
              {ourPhilosophy.body}
            </Reveal>
          </div>
        </Container>
      </DarkSection>

      {/* 4. What Makes Us Different (icon-led list) */}
      <section className="bg-white py-24 lg:py-32">
        <Container>
          <Reveal>
            <Eyebrow>{whatMakesUsDifferent.eyebrow}</Eyebrow>
          </Reveal>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whatMakesUsDifferent.points.map((point, i) => {
              const Icon = differentiatorIcons[i % differentiatorIcons.length];
              const styles = [
                {
                  wrapper: "bg-ink text-white",
                  iconBox: "bg-gold-deep text-ink border-none",
                  heading: "text-white",
                  paragraph: "text-white/70",
                },
                {
                  wrapper: "bg-white text-ink border border-ink/10",
                  iconBox: "bg-white border border-ink/10 text-ink",
                  heading: "text-ink",
                  paragraph: "text-ink/60",
                },
                {
                  wrapper: "bg-[#F7EEDC] text-ink",
                  iconBox: "bg-ink text-white border-none",
                  heading: "text-ink",
                  paragraph: "text-ink/70",
                },
                {
                  wrapper: "bg-white text-ink border border-ink/10",
                  iconBox: "bg-white border border-ink/10 text-ink",
                  heading: "text-ink",
                  paragraph: "text-ink/60",
                }
              ];
              const style = styles[i % styles.length];

              return (
                <Reveal 
                  key={point.title} 
                  delay={i * 0.1} 
                  className={`flex flex-col p-8 lg:p-10 rounded-[4px] h-full ${style.wrapper}`}
                >
                  <div className={`w-12 h-12 flex items-center justify-center rounded-[3px] mb-8 ${style.iconBox}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className={`font-sans text-xl lg:text-[22px] font-semibold mb-4 leading-snug ${style.heading}`}>
                    {point.title}
                  </h3>
                  <p className={`text-[15px] leading-relaxed ${style.paragraph}`}>
                    {point.description}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 5. Founder (large photo, color-blocked bio panel) */}
      <section className="py-12 lg:py-24">
        <Container>
          <div className="grid lg:grid-cols-2 lg:items-stretch overflow-hidden rounded-sm">
            <Reveal className="relative min-h-[400px] lg:min-h-full">
              <Image 
                src={founder.photo.src}
                alt={founder.photo.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </Reveal>
            <Reveal delay={0.1} className="bg-ink p-10 lg:p-20 flex flex-col justify-center">
              <Eyebrow tone="champagne" className="mb-6">{founder.eyebrow}</Eyebrow>
              <h2 className="text-white font-serif text-4xl mb-2">{founder.name}</h2>
              <p className="text-gold uppercase tracking-widest text-xs font-bold mb-8">
                {founder.title}
              </p>
              <p className="text-white/80 text-lg leading-relaxed max-w-[50ch]">
                {founder.bio}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 6. Our Work Covers (two-row marquee tag strip) */}
      <section className="bg-white py-24 overflow-hidden border-b border-graphite/10">
        <Container className="mb-12 text-center">
          <Reveal>
            <Eyebrow>{ourWorkCovers.eyebrow}</Eyebrow>
          </Reveal>
        </Container>
        <div className="flex flex-col gap-4">
          <Reveal delay={0.1}>
            <Marquee durationSeconds={45} className="w-full">
              {ourWorkCovers.items.slice(0, Math.ceil(ourWorkCovers.items.length / 2)).map((item) => (
                <Tag key={item} className="text-lg px-6 py-3 border-ink/20">
                  {item}
                </Tag>
              ))}
            </Marquee>
          </Reveal>
          <Reveal delay={0.2}>
            <Marquee durationSeconds={35} className="w-full">
              {ourWorkCovers.items.slice(Math.ceil(ourWorkCovers.items.length / 2)).map((item) => (
                <Tag key={item} className="text-lg px-6 py-3 border-ink/20">
                  {item}
                </Tag>
              ))}
            </Marquee>
          </Reveal>
        </div>
      </section>

      {/* 7. Aspiration (Gold-tinted close) */}
      <section className="bg-linear-to-br from-gold-deep to-gold py-24 lg:py-40">
        <Container className="max-w-4xl text-center flex flex-col items-center">
          <Reveal>
            <Eyebrow className="text-ink/80 mix-blend-multiply">{aspiration.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-ink mt-8 font-serif text-3xl md:text-4xl leading-tight italic max-w-[28ch]">
              "{aspiration.body}"
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
