import type { Metadata } from "next";

export const SITE_NAME = "Goldapples Media Associates";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://goldapples.ng");

export const SITE_ICON_PATH = "/assets/logo/goldapples-icon-512.png";

export const SITE_OG_IMAGE = {
  url: SITE_ICON_PATH,
  width: 512,
  height: 512,
  alt: SITE_NAME,
  type: "image/png",
};

export const seo = {
  home: {
    path: "/",
    title: "Communication Intelligence and Executive Advisory",
    description:
      "Goldapples Media Associates is a communication advisory, executive education, and development communication firm helping leaders and institutions strengthen understanding, trust, alignment, and action.",
  },
  about: {
    path: "/about",
    title:
      "About Goldapples Media Associates | Communication Intelligence and Advisory",
    description:
      "Learn about Goldapples Media Associates, a Nigerian communication intelligence, advisory, training and development communication firm helping institutions make meaning work.",
  },
  advisory: {
    path: "/advisory",
    title: "Communication Advisory for Leaders and Institutions | Goldapples",
    description:
      "Strategic communication advisory for leaders, organisations and public institutions seeking clarity, alignment, stakeholder trust and stronger communication outcomes.",
  },
  academy: {
    path: "/academy",
    title:
      "Executive Communication Training and Masterclasses | Goldapples Academy",
    description:
      "Practical executive communication training, leadership communication labs, workshops and masterclasses for professionals, teams and institutions.",
  },
  developmentCommunication: {
    path: "/development-communication",
    title:
      "Development Communication Strategy and Media Engagement | Goldapples",
    description:
      "Goldapples supports development partners, civil society, public institutions and media actors with communication strategy, stakeholder engagement and public-interest storytelling.",
  },
  frameworks: {
    path: "/frameworks",
    title: "Communication Intelligence Frameworks | Goldapples Media Associates",
    description:
      "Explore Goldapples' original thinking on communication intelligence, meaning drift, failed meaning, leadership alignment and the Physics of Communication.",
  },
  communicationIntelligenceMentorship: {
    path: "/communication-intelligence-mentorship",
    title: "Communication Intelligence Mentorship | Goldapples Media Associates",
    description:
      "A selective professional development experience for individuals seeking to grow beyond technical competence into stronger professional judgement, self-awareness, confidence and leadership effectiveness.",
  },
  executiveCommunicationIntelligence: {
    path: "/executive-communication-intelligence",
    title:
      "Executive Communication Intelligence (ECI) | Goldapples Media Associates",
    description:
      "A private advisory and coaching experience designed to strengthen the intelligence, judgement and responsibility with which senior leaders communicate.",
  },
  workAndImpact: {
    path: "/work-and-impact",
    title: "Communication Case Studies and Impact | Goldapples Media Associates",
    description:
      "See how Goldapples supports communication advisory, executive training, development communication, media engagement and institutional alignment.",
  },
  insights: {
    path: "/insights",
    title: "Insights on Communication, Leadership and Meaning | Goldapples",
    description:
      "Read Goldapples insights on communication intelligence, leadership communication, development communication, meaning drift and public impact.",
  },
  contact: {
    path: "/contact",
    title: "Contact Goldapples Media Associates",
    description:
      "Tell Goldapples Media Associates about your communication challenge — advisory support, executive training, development communication, media engagement or a tailored workshop.",
  },
  privacyPolicy: {
    path: "/privacy-policy",
    title: "Privacy Policy | Goldapples Media Associates",
    description:
      "How Goldapples Media Associates handles and protects the information you share with us through this site, consultation requests, or programme briefs.",
  },
} as const;

type BuildPageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  authors?: string[];
};

/**
 * Generates consistent, SEO-complete Metadata (title, description, canonical URL,
 * OpenGraph for WhatsApp/LinkedIn, and Twitter card) using the Goldapples site icon.
 */
export function buildPageMetadata({
  title,
  description,
  path,
  type = "website",
  publishedTime,
  authors,
}: BuildPageMetadataOptions): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "en_GB",
      type,
      ...(type === "article" && publishedTime ? { publishedTime } : {}),
      ...(type === "article" && authors ? { authors } : {}),
      images: [SITE_OG_IMAGE],
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: [SITE_ICON_PATH],
    },
  };
}
