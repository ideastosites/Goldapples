export const contactHero = {
  heading: "Let’s Discuss Your Communication Challenge",
  body: "Whether you need advisory support, executive training, development communication strategy, media engagement or a tailored workshop, Goldapples can help you clarify the problem and design the right communication response. Tell us what you need."
};

export const formFields = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "organisation", label: "Organisation", type: "text", required: true },
  { name: "email", label: "Email Address", type: "email", required: true },
  { name: "phone", label: "Phone Number", type: "tel", required: false },
  { 
    name: "supportType", 
    label: "What do you need support with?", 
    type: "select", 
    required: true,
    options: [
      "Communication advisory",
      "Executive training",
      "Development communication",
      "Media engagement",
      "Leadership communication",
      "Organisational communication diagnostics",
      "Speaking engagement",
      "Other"
    ]
  },
  { 
    name: "description", 
    label: "Briefly describe your communication challenge/need.", 
    type: "textarea", 
    required: true 
  },
  {
    name: "preferredResponse",
    label: "Preferred response method",
    type: "radio",
    required: true,
    options: ["Email", "Phone", "WhatsApp"]
  }
];

export const contactCta = {
  label: "Send Your Brief"
};
