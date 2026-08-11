import type { Metadata } from "next";
import { seo } from "@/content/seo";
import { Hero } from "@/components/sections/home/Hero";
import { OpeningBelief } from "@/components/sections/home/OpeningBelief";
import { WhatWeDo } from "@/components/sections/home/WhatWeDo";
import { CorePracticeAreas } from "@/components/sections/home/CorePracticeAreas";
import { OurThinking } from "@/components/sections/home/OurThinking";
import { WhoWeWorkWith } from "@/components/sections/home/WhoWeWorkWith";
import { FeaturedProgrammes } from "@/components/sections/home/FeaturedProgrammes";
import { WorkImpactTeaser } from "@/components/sections/home/WorkImpactTeaser";
import { WhyGoldapples } from "@/components/sections/home/WhyGoldapples";
import { FinalCta } from "@/components/sections/home/FinalCta";

export const metadata: Metadata = {
  title: seo.home.title,
  description: seo.home.description,
};

export default function Home() {
  return (
    <>
      <Hero />
      <OpeningBelief />
      <WhatWeDo />
      <CorePracticeAreas />
      <OurThinking />
      <WhoWeWorkWith />
      <FeaturedProgrammes />
      <WorkImpactTeaser />
      <WhyGoldapples />
      <FinalCta />
    </>
  );
}
