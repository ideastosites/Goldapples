export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type ServiceCategory = {
  id: string;
  label: string;
  href: string;
  items: NavLink[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "advisory",
    label: "Advisory",
    href: "/advisory",
    items: [
      {
        label: "Communication Advisory",
        href: "/advisory",
        description:
          "Helping leaders and institutions communicate with clarity, credibility and consequence.",
      },
      {
        label: "Leadership Communication",
        href: "/advisory#leadership-communication",
        description:
          "We support leaders communicating vision, decisions, change, values and expectations across teams and stakeholders.",
      },
      {
        label: "Government and Public Institution Communication",
        href: "/advisory#government-and-public-institution-communication",
        description:
          "We support public institutions communicating policies, reforms and decisions in ways citizens, staff and stakeholders can understand.",
      },
      {
        label: "Crisis and High-Stakes Communication",
        href: "/advisory#crisis-and-high-stakes-communication",
        description:
          "We help leaders prepare for moments where words, timing and interpretation carry serious consequences.",
      },
      {
        label: "Communication Diagnostics",
        href: "/advisory#communication-diagnostics",
        description:
          "We identify where communication is breaking down and why — message clarity, audience interpretation, leadership alignment, channel effectiveness.",
      },
    ],
  },
  {
    id: "academy",
    label: "Academy",
    href: "/academy",
    items: [
      {
        label: "Executive Programmes",
        href: "/academy#executive-communication-masterclass",
        description:
          "For leaders and senior professionals who need to communicate with clarity, credibility and confidence in high-stakes environments.",
      },
      {
        label: "Industry-Specific Modules",
        href: "/academy#industry-specific-modules",
        description:
          "Goldapples' core frameworks, applied to sector-specific communication risks and audiences.",
      },
      {
        label: "Communication Clinics",
        href: "/academy#communicating-credibility",
        description:
          "For professionals and leaders whose work requires trust — how credibility is built or damaged through language, tone, timing and consistency.",
      },
      {
        label: "Simulation Labs",
        href: "/academy#leadership-communication-lab",
        description:
          "A practical lab for leaders who need to align teams and improve execution, using scenarios, simulations, role-play and peer feedback.",
      },
      {
        label: "Learning Pathways",
        href: "/academy#delivery-formats",
        description:
          "Half-day sessions, masterclasses, workshops, executive retreats, virtual sessions, in-house training and coaching cohorts.",
      },
    ],
  },
  {
    id: "development-communication",
    label: "Development Communication",
    href: "/development-communication",
    items: [
      {
        label: "Programme Communication Strategy",
        href: "/development-communication#programme-communication-strategy",
        description:
          "Communication approaches that support implementation, visibility, stakeholder engagement and behavioural outcomes.",
      },
      {
        label: "Media Engagement and Capacity Building",
        href: "/development-communication#media-engagement-and-capacity-building",
        description:
          "Media training, journalist workshops, editorial engagement and public-interest reporting interventions.",
      },
      {
        label: "Behaviour and Stakeholder Communication",
        href: "/development-communication#behaviour-and-stakeholder-communication",
        description:
          "Understanding audiences and designing messages that respond to real concerns, motivations and trust conditions.",
      },
      {
        label: "Public Narrative and Storytelling",
        href: "/development-communication#public-narrative-and-storytelling",
        description:
          "Moving beyond technical reporting into human-centred stories that show why issues matter.",
      },
      {
        label: "Governance and Reform Communication",
        href: "/development-communication#governance-and-reform-communication",
        description:
          "Communication around policy, governance, accountability, service delivery, climate, social protection, public health and institutional reform.",
      },
    ],
  },
  {
    id: "frameworks",
    label: "Frameworks",
    href: "/frameworks",
    items: [
      {
        label: "Physics of Communication",
        href: "/frameworks#physics-of-communication",
        description:
          "Communication behaves like movement — a message has a source, force, direction, medium, resistance, distortion and effect.",
      },
      {
        label: "Meaning Drift",
        href: "/insights#meaning-and-misunderstanding",
        description:
          "Meaning drift, failed meaning, interpretation and breakdown — explored in Goldapples Insights.",
      },
      {
        label: "Failed Meaning",
        href: "/insights#meaning-and-misunderstanding",
        description:
          "A message can be well-written and still fail; a policy can be announced and still resisted.",
      },
      {
        label: "M.E.A.N.I.N.G Framework",
        href: "/frameworks#meaning-framework",
        description:
          "A Goldapples tool for designing messages that do more than pass information — how meaning is created, passed, received, interpreted and acted upon.",
      },
      {
        label: "Communication Intelligence",
        href: "/frameworks",
        description:
          "Communication as a discipline of meaning, alignment and performance — the body of thinking behind Goldapples' diagnostic and advisory work.",
      },
      {
        label: "Leadership Alignment Framework",
        href: "/frameworks#leadership-alignment-framework",
        description:
          "Keeps strategy, message, behaviour and execution moving in the same direction across a leadership team.",
      },
    ],
  },
];

export const primaryNav = [
  { label: "About", href: "/about" },
  { label: "Work and Impact", href: "/work-and-impact" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const bookConsultationCta = { label: "Book a Consultation", href: "/contact" };
