# Goldapples Media Associates — Website Design System

**Single source of truth for the Goldapples website.** Every teammate building a page in Antigravity works from this file. It defines the palette, type, layout, components, motion, page structure, and the technical + collaboration rules that keep independently-built pages looking like one site. Follow it exactly where it says *must*; use your judgement where it says *may*.

**Design north star:** *editorial authority with a creative studio's visual confidence.* Goldapples should look like a premium consultancy that clearly hired a real design studio — closer to a Pentagram or Koto case study than to a generic SaaS template or a flat policy-journal page. Corporate and premium, never corporate-cold. Minimalist in *discipline* (no clutter, no filler), never minimalist in *visual restraint*.

---

## 0. How to read this document

This system is deliberately **strict on the things that must stay consistent across the team** (palette, tokens, type, spacing, accessibility, routing, forms) and deliberately **open on the things that benefit from per-page creativity** (hero composition, section shapes, the signal motif's execution, illustration). Two words tell you which is which:

- **Must / Never** — a hard rule. Do not deviate without a design-lead decision recorded back into this file. These exist so ten pages built by different people still read as one site.
- **Should / Prefer** — a strong default. Deviate only with a specific reason the page calls for.
- **May / Creative latitude** — an open axis. This is where you're expected to explore and make the page memorable. Sections flagged **Creative latitude** are invitations, not gaps to fill with the safest option.

> **The failure mode to design against:** an earlier version of this site was flagged by the client as *crowded, tacky/basic, and too color-sparse.* Every rule below that intensifies color, varies section shape, adds a real motif, or pushes type bolder exists to correct that. When "minimalist" and "creative" pull against each other on your page, **favor creative** — a sparse, safe layout is exactly what read as "basic."

---

## 1. Brand Foundation

**What Goldapples is:** a communication intelligence, advisory, and executive-education firm based in Lagos, Nigeria. Not an agency, not a media vendor — a firm that diagnoses *why meaning breaks down inside organisations* and fixes it. Its work spans strategic communication advisory, executive education (the Academy), development communication, and media & narrative strategy, and it is building a body of original frameworks around communication as a discipline.

**Positioning line (the guiding epigraph):**

> *"Communication is the operating system of human relations."* — J. Ayo Makinde

**Personality:** authoritative, precise, intelligent, confident — and deliberately visually bold. Think of a senior advisor who also happens to have exceptional taste: not a marketing brochure, and not a beige boardroom either.

**The single takeaway every page must earn:** *this is a firm that understands how communication actually works — and has the method to prove it.* The visual language exists to argue that competence through structure, clarity, and confident color — not to decorate.

### The audience skims — design for that

The audience is executives, public-institution leaders, development partners, and media actors. They decide in seconds whether a firm looks credible, and they skim. This has concrete design consequences:

- **Lead every section with its shortest possible version** — a single sharp statement or a number — before any supporting paragraph. The headline is for the skimmer; the paragraph is for the reader who wants more; a modal/accordion is for the reader who wants everything (see §7.3, §12).
- **Put depth behind a click.** Accordions, tabs, and modals over walls of default-visible text. If a section takes more than ~5 seconds to "get," it needs a stronger visual anchor or a shorter lead line.
- **Every shared link is a brand touchpoint.** An executive assistant forwarding a URL, or a partner circulating a proposal, may meet Goldapples through the link preview first. Every primary page ships a considered Open Graph card (§18) — treated as seriously as the page itself.

### Structural direction: firm-with-a-point-of-view, not template

Goldapples is known for *how it thinks*. Structure the site closer to a considered consultancy with a research practice than to a SaaS landing page:

- **Frameworks are a first-class asset, not filler.** The six proprietary frameworks (Physics of Communication, Communication Intelligence, Leadership Alignment, Leadership Communication Lab, M.E.A.N.I.N.G., Communication-to-Execution) are the intellectual proof. Give them real visual treatment (§7.4), not a bullet list.
- **Numbered markers only where order is real.** "How We Work" (Diagnose → Clarify → Design → Deliver → Review) *is* a sequence — number it. Practice-area cards are *not* a sequence — give them concept icons, not numerals (§10). Never use `01 / 02 / 03` as decoration where the content isn't actually ordered.
- **Real photography over stock.** Goldapples has real session/event photography — use it (duotone-treated, §8.1). Never generic stock "team high-fiving in a boardroom," which instantly undoes the premium read.

### Signature element (the one thing this site is remembered by)

**Creative latitude — but the *concept* is fixed.** The site's signature is a **signal / meaning-transmission motif** drawn directly from the firm's own Physics of Communication idea: a message travelling from *source → force → medium → resistance → distortion → effect*. Expressed as an abstract line-and-node diagram, a waveform that degrades and re-clarifies, a signal-path graphic, or an animated transmission line — the specific execution is yours to explore per page, but it recurs as the connective visual thread (hero motif, section dividers, framework tiles, loading/transition states).

Spend the site's boldness here and in the color-blocking. Everything else stays quiet and disciplined. If a decorative element doesn't serve the message-transmission idea or the color rhythm, cut it (Chanel's mirror rule: before shipping a section, remove one accessory).

**What this must *not* look like:** a warm-cream page with a serif headline and a terracotta/clay accent is one of the most common "designed-by-AI" tells, and this palette sits close to it. Differentiate deliberately: the base canvas is **white, not a cream wash**; the accent is **metallic gold (`#B98F3E`), never terracotta/clay/orange**; warmth comes from **full color-blocked Champagne / Gold / Ink sections**, not an all-over beige tint; and the serif is paired with **assertive structural color-blocking + the signal motif** so the page reads as a designed consultancy, not a default essay template.

---

## 2. Hard Constraints (non-negotiable)

These hold regardless of page, section, or component. Breaking one breaks the system.

- **Palette is closed.** Only the five brand hues (Ink, Graphite/Steel neutrals, Deep Gold, Gold, Champagne) plus white and the derived ramps in §3. **Never** introduce a hue outside this family — no blue, teal, purple, red, or green, not even for "success/error" states (style those with weight, iconography, and the golds/inks instead; see §7.7 forms).
- **No off-palette or multi-hue gradients, ever.** Gradients are encouraged (§3), but only as a two-stop blend between steps *within one family* — Ink→Graphite, Deep Gold→Gold, Ink→Deep Gold, Champagne→white. Never a third hue, never a mesh/multi-blob gradient, never a blue/purple drift.
- **Contrast is a floor, not a preference.** Body text must clear **WCAG AA (4.5:1)** against its actual background; large text (24px+/19px bold) clears 3:1. Deep Gold, Gold, and Champagne are **not** legible as small text on each other — never set colored text on a colored panel without checking the specific pair. Use white or Ink text on colored panels.
- **Never stack two strong-color sections back-to-back.** "Strong" = Ink, Graphite, or full-strength Deep Gold. Always separate them with a lighter surface (white, Champagne, or a pale Gold tint). This rhythm is what keeps the intensified color from turning oppressive.
- **No pill / heavily-rounded "SaaS" buttons.** Corners stay sharp: 2–4px radius on buttons and cards (§7). The one intentional exception is nav's Book-a-Consultation button only if a subtle radius is chosen consistently — but default to sharp.
- **No generic stock photography and no generic icon packs.** Real Goldapples photography only (§11); a custom, concept-specific line-icon set only (§11) — never clip-art, never a bare gold dot or numeral as the *only* visual anchor.
- **No emojis anywhere in the UI** — headings, buttons, captions, lists. Use the icon system or typographic marks (·, —, /).
- **Motion always respects `prefers-reduced-motion`** — skip the transform entirely, don't just shorten it (§11).
- **A plain centered-white hero is never the default.** Pick one of the stronger hero patterns in §9.
- **Copy is verbatim from the client content document** (`GOLDAPPLES MEDIA ASSOCIATES Final Website.docx`), and **no new content is invented outside it.** Design controls how much is visible and how it's arranged — never the wording, and never new headings, paragraphs, taglines, stats, testimonials, or case-study text. If a layout seems to want copy the document doesn't provide, leave a flagged placeholder — not generated prose. Necessary functional microcopy (button/field labels, alt text, error states) is the only exception; writing new marketing copy requires an explicit request. Full rule: §16.3.

---

## 3. Color

**Official palette: "Champagne & Graphite."** Five brand hues plus white, used *assertively*. White is the base canvas so the palette can breathe, but **color-blocked sections are a primary layout tool, not an exception.** Target: **at least 40–50% of any page's vertical scroll sits on a colored surface** (Ink, Graphite, Deep Gold, Gold, or Champagne), not plain white. Longer pages (Home, About, Work & Impact) should show **3–5 distinct color changes**, in a considered rhythm.

### 3.1 Core palette

| Swatch | Hex | Role |
|---|---|---|
| **Ink** | `#12100D` | Full-strength dark surface — section backgrounds, panels, cards, footer, nav-on-scroll. A frequent primary surface, not a rare "dark moment." |
| **Graphite** | `#33322F` | Body text on light surfaces; also a legitimate mid-tone section/panel background. |
| **Steel** | `#6E7175` | Muted / meta / caption text on light surfaces only. Never a large fill. |
| **Deep Gold** | `#B98F3E` | Primary action color **and** a legitimate card/tag/panel background at full strength (with Ink or white text). |
| **Gold** | `#DFBE7E` | Accent, gradient partner, and a legitimate light-panel background (Champagne's louder sibling). |
| **Champagne** | `#F7EEDC` | A full, legitimate **section background**, not just a small tint — warmth without Ink's weight. |
| **White** | `#FFFFFF` | Base canvas and negative space. The page opens here so color has somewhere to land. |

### 3.2 Tonal ramps (for depth, gradients, illustration, data-viz)

The core swatches are mapped into two ramps so you have tonal depth without ever leaving the palette. **Pick one or two adjacent steps per view** — the ramp is for depth, not for multiplying accents on one screen. The three-hex core swatches are marked.

**Gold ramp** (`--color-gold-*`) — warm champagne→bronze:

| Token | Hex | Note |
|---|---|---|
| `gold-50` | `#FBF7EF` | Faintest wash — a whisper of warmth over white |
| `gold-100` | `#F7EEDC` | = **Champagne** — light section background |
| `gold-200` | `#EEDFC1` | Soft panel tint, card highlight |
| `gold-300` | `#E6CE9F` | Light illustration fill, hover on Champagne |
| `gold-400` | `#DFBE7E` | = **Gold** — accent, light panel, gradient partner |
| `gold-500` | `#CBA55C` | Transitional gold — larger decorative shapes |
| `gold-600` | `#B98F3E` | = **Deep Gold** — primary CTA, tag/card fill |
| `gold-700` | `#987234` | Hover/active for Deep Gold, dense gold blocks |
| `gold-800` | `#74572A` | Deep bronze — illustration shadow, chart series |
| `gold-900` | `#4E3B1D` | Near-ink bronze |
| `gold-950` | `#2C210F` | Deepest bronze, pairs into Ink |

**Graphite/neutral ramp** (`--color-graphite-*`) — warm-neutral, dark structural → light surface:

| Token | Hex | Note |
|---|---|---|
| `graphite-50` | `#FAF9F6` | Warm near-white — alt to pure white where a hair of warmth helps |
| `graphite-100` | `#F1EFEA` | Subtle section background, hover wash |
| `graphite-200` | `#E4E1DA` | Dividers, hairlines, card borders on light |
| `graphite-300` | `#CDC9C0` | Disabled borders, faint rules |
| `graphite-400` | `#A5A29B` | Placeholder text, tertiary meta |
| `graphite-500` | `#6E7175` | = **Steel** — muted/meta/caption text |
| `graphite-600` | `#565553` | Secondary text on light |
| `graphite-700` | `#33322F` | = **Graphite** — body text; mid-dark panel |
| `graphite-800` | `#201E1B` | Dense dark block, hover on Ink |
| `graphite-900` | `#12100D` | = **Ink** — deepest structural fills, footer |
| `graphite-950` | `#0B0A08` | Absolute-darkest accent (use sparingly) |

> Never use pure black `#000000` — Ink (`#12100D`) is a warm near-black that pairs with the golds. Neutrals lean warm by design; the one cool note is Steel (`#6E7175`), reserved for meta text.

### 3.3 Usage rules

- **Champagne and Gold are valid full-section backgrounds** — a Champagne band behind a stat row, a Gold-tinted card grid, a Gold→Deep Gold gradient panel behind a pull quote.
- **Ink sections are frequent.** Alternate Ink ↔ light color-block ↔ white down every page.
- **Deep Gold as a background** is allowed on cards, tags, small panels, and accent blocks (not full-bleed page backgrounds). Pair with Ink or white text.
- **Gradients are a primary tool, in-palette only** (§2). Fair game across hero backgrounds, section dividers, card fills, and button fills — not confined to small surfaces. Most fills still stay flat; a gradient should read as a considered choice, not the default on every section.
- **Colored text needs a checked surface.** Gold/Champagne text never below ~18px, and never gold-on-gold or champagne-on-gold. Default to white or Ink text on colored panels.
- **White space is a color decision.** Don't fill it just because it's there — the negative space is what makes the intensified color read as premium rather than loud.

### 3.4 Design tokens (Tailwind CSS v4)

Tailwind v4 is CSS-first: declare tokens in the `@theme` block of `globals.css` and Tailwind generates the utilities (`bg-ink`, `text-deep-gold`, `bg-gold-600`, etc.). **Do not add a `tailwind.config.js` color palette** — these tokens are the single source of truth; anyone adding a color adds it here and nowhere else.

```css
/* app/globals.css */
@import "tailwindcss";

@theme {
  /* Semantic aliases (reach for these first) */
  --color-canvas:     #FFFFFF;
  --color-ink:        #12100D;
  --color-graphite:   #33322F;
  --color-steel:      #6E7175;
  --color-deep-gold:  #B98F3E;
  --color-gold:       #DFBE7E;
  --color-champagne:  #F7EEDC;

  /* Gold ramp */
  --color-gold-50:  #FBF7EF;  --color-gold-100: #F7EEDC;
  --color-gold-200: #EEDFC1;  --color-gold-300: #E6CE9F;
  --color-gold-400: #DFBE7E;  --color-gold-500: #CBA55C;
  --color-gold-600: #B98F3E;  --color-gold-700: #987234;
  --color-gold-800: #74572A;  --color-gold-900: #4E3B1D;
  --color-gold-950: #2C210F;

  /* Graphite / warm-neutral ramp */
  --color-graphite-50:  #FAF9F6;  --color-graphite-100: #F1EFEA;
  --color-graphite-200: #E4E1DA;  --color-graphite-300: #CDC9C0;
  --color-graphite-400: #A5A29B;  --color-graphite-500: #6E7175;
  --color-graphite-600: #565553;  --color-graphite-700: #33322F;
  --color-graphite-800: #201E1B;  --color-graphite-900: #12100D;
  --color-graphite-950: #0B0A08;

  /* Type families (wired from next/font in §4) */
  --font-serif: var(--font-fraunces);
  --font-sans:  var(--font-inter);
  --font-mono:  var(--font-jetbrains-mono);

  /* Radii — sharp by system rule (§7.1) */
  --radius-btn:  3px;
  --radius-card: 4px;
}
```

---

## 4. Typography

A two-typeface system, plus a mono accent: a serif for editorial authority at large sizes, a workhorse sans for everything functional, and a mono for labels and framework names. **Lean into big, bold display type** in hero and section-opener moments — a large, confident serif headline is one of the fastest ways to read "premium," and should be sized toward the *top* of each range below, not the middle.

- **Display / headline serif — Fraunces.** H1/H2, pull quotes, the Makinde epigraph, section openers. Fraunces is a variable serif; use its optical-size axis so large headlines get high-contrast, characterful letterforms, and keep a *soft/low-wonk* setting so it reads refined, not novelty.
- **Body / UI sans — Inter.** Body copy, nav, buttons, forms, captions, dropdown content, everything functional.
- **Monospace accent — JetBrains Mono.** Framework names, numbered systems, eyebrows/labels, data/meta. **Never body copy.** This is the "instrument panel" voice that signals Goldapples treats communication as a discipline with method — use it for framework names (e.g. `THE M.E.A.N.I.N.G. FRAMEWORK`), section eyebrows, and stat labels.

### 4.1 Scale (desktop → mobile, indicative)

| Role | Desktop | Mobile | Weight | Typeface |
|---|---|---|---|---|
| H1 (hero) | 64–88px | 36–44px | 500 (push toward top of range) | Fraunces |
| H2 (section) | 40–52px | 30–36px | 500 | Fraunces |
| H3 (subsection / card title) | 22–26px | 20–22px | 600 | Inter |
| Eyebrow / label | 12–13px | 12px | 600, uppercase, +0.08em tracking | Inter or JetBrains Mono |
| Body | 17–18px | 16px | 400, 1.6 line-height | Inter |
| Small / meta | 13–14px | 13px | 400 | Inter |
| Pull quote | 30–40px | 24–28px | 400 italic | Fraunces |

### 4.2 Typographic principles

- **One face narrates (Inter), one commands (Fraunces), one labels (JetBrains Mono).** Never let the serif carry body paragraphs or the mono carry more than a line.
- **Large display gets negative tracking** (~-0.01em to -0.02em at 48px+) so big Fraunces headlines feel considered, not default-browser-large.
- **Reading measure:** long-form body copy (manifesto/essay sections like the Opening Belief and Philosophy) is constrained to **60–72 characters per line**, not the full column width — a narrower measure reads as edited, not filled.
- **Sentence case in headlines** by default — it reads like a firm speaking, not brochure copy. Reserve uppercase for eyebrows/labels only.
- **Generous line-height** (1.6+ for body). Clarity is the brand's entire thesis; cramped type contradicts it.

### 4.3 Fonts in Next.js (App Router)

Load via `next/font/google` so weights are self-hosted and the token variables in §3.4 resolve. Fraunces and JetBrains Mono are on Google Fonts; Inter too.

```tsx
// app/layout.tsx
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"], axes: ["opsz", "SOFT", "WONK"],
  weight: ["400", "500", "600"], style: ["normal", "italic"],
  variable: "--font-fraunces", display: "swap",
});
const inter = Inter({
  subsets: ["latin"], weight: ["400", "500", "600"],
  variable: "--font-inter", display: "swap",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"], weight: ["500", "600"],
  variable: "--font-jetbrains-mono", display: "swap",
});
// apply `${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}` on <html>
```

---

## 5. Layout, Grid & Spacing

- **12-column grid**, max content width **1280–1360px**, centered, with generous side gutters (min 24px mobile, 80px+ desktop). Content respects the grid *inside* full-bleed panels too.
- **Full-bleed color panels** (edge-to-edge, no side margin) are an explicit, encouraged pattern for section backgrounds — the color goes to the viewport edge; the content inside still sits on the grid.
- **Spacing scale — 8px base.** Use only these steps: `4, 8, 16, 24, 32, 48, 64, 96, 128` (px). Expose as spacing tokens if helpful; never eyeball off-scale values.
- **Section rhythm:** minimum **96–128px** vertical padding between major sections on desktop, **64px** on mobile. Pacing communicates confidence; cramped sections read as anxious. Color-blocked panels carry their padding *inside* the color.
- **Asymmetry is the default**, but asymmetric never means "text-only in empty space." Pair an asymmetric text column against a photo, diagram, stat block, or color panel.

### 5.1 Vary the section *shape*, not just the color

**Creative latitude — rotate through these; don't let every section default to "centered eyebrow + heading + paragraph":**

- **Split-screen** — 50/50 color block + content (e.g. Ink panel beside a duotone photo).
- **Bento / mosaic grid** — mixed card sizes (Featured Programmes, practice areas).
- **Full-bleed color band** with a single centered statement (Opening Belief, pull-stat).
- **Overlapping cards** — a card breaking out of its section's edge into the next.
- **Angled / clipped-path dividers** — a diagonal transition between two color blocks instead of a straight horizontal line (use sparingly, keep content upright).
- **Marquee / ticker strip** — slow horizontal auto-scroll for tag lists ("Who We Work With"); pauses on hover/focus, static under reduced-motion (§11).

---

## 6. Navigation

The content is deep, so the nav is **decluttered to six slots** plus a persistent CTA. A flat nine-item bar reads crowded and was corrected here.

- **Top-level:** Logo (links home — no separate "Home" text link) · About · **Services ▾** · Work & Impact · Insights · Contact — plus the persistent gold **Book a Consultation** button.
- **"Services" is a single tabbed mega-menu** covering the four service pages as four tabs inside one panel: **Advisory · Academy · Development Communication · Frameworks.** Hovering/clicking a tab swaps the column content without closing the panel; each tab shows its items in a clean 2-column, one-line-description layout. This is the site's first real use of the **tabs** pattern (§7.3).
- **Sticky nav.** Ink-on-white at rest with a gold underline/dot for active/hover states. On scroll past the hero it crossfades to a solid background — a subtle Ink or Champagne-tinted glass (backdrop blur), not plain white.
- **Mobile:** a single accordion drawer. The four Services categories become a nested accordion-within-accordion (tap "Services" → four sub-accordions).
- **Book a Consultation** stays a persistent filled-gold button at every screen size — the single highest-contrast element in the bar, reserved for the primary action.
- **Logo:** keep clear space around the mark; never place it on busy imagery. On Ink/scroll states use the light logo lockup; on white use the dark lockup.

---

## 7. Components

Build these once as shared, reusable components (§16.6) so every page uses the same button, card, and form primitives. Full specs below — nothing here depends on a document you don't have.

### 7.1 Buttons

Two shapes only. Sharp corners (`--radius-btn`, 2–4px) — **never pills.** No drop shadows; buttons are flat, confident, architectural.

- **Primary** — filled. Either **Graphite** (`#33322F`) or **Deep Gold** (`#B98F3E`), or a **Deep Gold→Gold gradient** fill. Deep-gold fills are **no longer limited to one per page** — color is a primary tool now, so any primary action may use it. White or Ink label (whichever clears contrast), Inter 600. Hover: shift one ramp step darker (`gold-700`) or lighten Graphite toward `graphite-600`; 150ms.
- **Secondary** — underline or ghost. Transparent background, 1.5px Ink/Graphite border *or* a text link with a gold underline that thickens on hover. Ink text; hover fills to Ink with white text (ghost) or the underline animates.
- **Label voice (§13):** buttons say exactly what happens — "Book a Consultation," "View Case Studies," "Request a Programme Brief," "Send Your Brief." Active voice, sentence case, and the same verb through the whole flow (a "Send Your Brief" button produces a "Brief sent" confirmation).
- **States:** always provide hover, focus-visible (a visible gold or Ink focus ring, never removed), and disabled (drop to `graphite-300` border / `graphite-400` text). Minimum 44px tap target (§15).

### 7.2 Cards

- **Flat surfaces**, 1px `graphite-200` hairline border on white — hairlines read "considered," heavy shadows read "template." A 2–3px Deep Gold top/left accent border marks featured content.
- **Cards adapt to their panel.** On an Ink section, a card is a light or bordered-Ink card, not white-on-white; on Champagne, a white or Ink-bordered card. The card must stay legible against its actual background.
- **Full-color card fills** (e.g. a Deep Gold card in a mixed grid) are welcome as an *occasional emphasis* card — not the default for every card in a grid.
- **Trigger discipline:** if a card opens a modal, the trigger is an explicit labelled button inside the card ("View Full Case Study"), **never the whole card as one big click target** — that keeps hover/focus states unambiguous.

### 7.3 Progressive disclosure — modals, tabs, accordions

Depth belongs behind an interaction, not in a wall of default-visible text. **Never hide behind disclosure anything a visitor needs to decide** (what a service is, who a programme is for, how to make contact) — only the granular depth goes behind the toggle. Client wording is never changed by disclosure, only its default visibility.

- **Modals** — for "extra" detail that isn't needed to grasp the page's core argument: a full case study opened from a summary card, a programme's full curriculum, an expanded framework explanation. Trigger is always a clearly-labelled button. Ink-tinted backdrop; white or Champagne modal surface; sharp corners (matches card radius); closes on backdrop click, Escape, and a visible close control. Fade+scale in ~150ms, trap focus, restore focus to the trigger on close (§11).
- **Tabs** — for genuinely categorical content where only one category is relevant at a time: the Services mega-menu (§6), and as an alternative to accordions on Advisory/Academy/Development Communication where "pick a lane" browsing beats "expand everything." Tab bar in Graphite/Ink text; **Deep Gold underline or filled pill on the active tab**; instant swap or a fast 150ms cross-fade — no reload.
- **Accordions** — the default for sequential, all-relevant content where a visitor scans every title before opening one (Advisory areas, Academy programmes, Development Communication support areas). Animate height with a 200–300ms ease; rotate a chevron/□→▽ marker; only one open at a time unless comparison needs several. Trigger is a full-width row with the concept icon (§8.2) + title + marker.
- **Rule of thumb:** 4+ items to compare → accordion. 2–5 mutually exclusive categories → tabs. A single deep-dive off a summary → modal.

### 7.4 Framework blocks

Goldapples' six frameworks are the intellectual proof — give them a distinctive, recurring block, not a bullet list. Each framework block pairs a **JetBrains Mono framework name** (e.g. `PHYSICS OF COMMUNICATION`, `THE M.E.A.N.I.N.G. FRAMEWORK`, `COMMUNICATION-TO-EXECUTION (C2E)`) with a one-line Fraunces summary and the signal motif (§1) rendered as a small bespoke diagram tile. On the Frameworks page, expand each via accordion or modal (§7.3) into its full explanation. On Ink panels, render diagram tiles with gold-filled strokes for contrast. The six: Physics of Communication (Shannon–Weaver), Communication Intelligence, Leadership Alignment Framework, Leadership Communication Lab, The M.E.A.N.I.N.G. Framework, Communication-to-Execution (C2E).

### 7.5 Quotes & epigraphs

The Makinde epigraph — *"Communication is the operating system of human relations."* — is a recurring brand device. Set pull quotes and epigraphs in **Fraunces italic, 30–40px**, on a Champagne or Ink band (never plain white), attributed in JetBrains Mono or Inter small-caps. Give the punch-lines from the copy ("It is infrastructure.", "Leadership is done through communication.") room as isolated lines — essay-style emphasis, not landing-page fragments.

### 7.6 Stat / number blocks

Where a page surfaces numbers — "over three decades of experience," the count of practice areas or sectors — every number must trace to something the client copy actually states; **never invent a metric** ("120+ clients"). Present restrained: a color-blocked stat row on a Champagne or Deep Gold band, numbers in Fraunces, labels in JetBrains Mono. Avoid a bordered "stat-card wall" competing with the hero.

### 7.7 Forms

- **Field styling:** 1px `graphite-200` border, `graphite-50` or white fill, sharp corners, Inter input text, a clear Steel label above each field (not placeholder-as-label). Focus: border shifts to Deep Gold + a 2px gold focus ring. Generous 44px+ field height.
- **Validation without off-palette color:** error state = a `gold-700`/Deep Gold border + an Ink error message + an inline warning icon from the icon set; success = an Ink confirmation with a gold check icon. **No red or green** — signal state through weight, icon, and the golds/inks (§2).
- **Buttons** follow §7.1; the submit label states the action ("Send Your Brief").
- Field specs for the contact form are in §16.5.

### 7.8 Case-study structure

Work & Impact case studies use a consistent four-part spine, pulled verbatim: **Challenge → Goldapples Approach → What Changed → Key Insight.** On the page, show each as a **summary card** (title, sector, one-line hook, and the Key Insight as the pull-line) with a **"View Full Case Study" modal** (§7.3) carrying the full four-part detail. The Key Insight lines ("Execution improves when meaning is managed deliberately.") are strong pull-quote material.

### 7.9 Footer

- Solid **Ink** (`#12100D`) background — the darkest, most anchoring moment on the page, not a trail-off into white.
- All text white or a light muted tint (white at reduced opacity for secondary lines) — never Steel-gray on Ink, which reads muddy.
- Link groups use the concept icons (§8.2) as group markers, not bare bullets. Links brighten to Gold on hover.
- Contents from the client copy: the footer description, the full link list (Home, About, Advisory, Academy, Development Communication, Frameworks, Work and Impact, Insights, Contact, Privacy Policy), **Email:** `gold@goldapples.ng`, **Location:** Lagos, Nigeria, and `© 2026 Goldapples Media Associates Limited. All rights reserved.`

### 7.10 Icons & dividers

- **Line icons only** from the custom set (§8.2) — 1.5–2px stroke, single-color, no gradients on the icons themselves.
- **Dividers:** a 1px `graphite-200` hairline for quiet separation, *or* an angled/clipped color transition (§5.1) for a stronger moment — not heavy shadow blocks. The signal-motif line (§1) may double as a signature divider.

---

## 8. Imagery & Iconography

### 8.1 Photography

Use real Goldapples session/event photography **generously**, including as placeholders now — hero backgrounds, section dividers, card backgrounds, About/Founder/Academy/Work & Impact imagery, and anywhere a section currently reads as flat text.

- **Always duotone / color-wash it** so photos stay on-palette rather than competing with it. Recipe: real photo → **Ink or Graphite shadow tone + Champagne or Gold highlight tone**, blended via CSS (`mix-blend-mode` + a solid color layer, or a gradient overlay). A raw full-color photo next to the palette looks accidental; a duotone photo looks designed.
- **Mark placeholders in code, not on-page:** `{/* placeholder photo — replace after client review */}`. These are real (if uncurated) brand photos, so no visible "placeholder" label.
- **Production bar:** a single excellent image beats several adequate ones. No visible compression/upscaling artifacts. Don't pad a page with imagery to fill space.
- **Never AI-generate a likeness of a real person** (e.g. the founder, J. Ayo Makinde). A synthetic portrait presented as documentation is a fabrication, not a placeholder. Generated imagery is only for non-representational supporting texture (abstract signal graphics, patterns).
- Where no real photo fits an abstract idea ("meaning drift"), use the line-art/diagram treatment below instead of forcing a photo.

### 8.2 Custom line-icon system

Build a **small, custom, concept-specific line-icon set** — 1.5–2px stroke, Ink or white depending on surface, single-color, no gradients. **Each icon is specific to the concept it represents**, never a generic bullet or numeral. Reference set:

- **Approach steps:** compass/crosshair = *Diagnose*; speech-bubble-with-arrow = *Clarify*; blueprint/grid glyph = *Design*; forward-arrow / handshake line = *Deliver*; check-in-circle = *Review*.
- **Practice & programmes:** megaphone line = Media & Narrative Strategy; graduation-cap line = Academy; shield/scale = Government & Public-Institution Communication; pulse/heartbeat line = Crisis & High-Stakes Communication; magnifier-over-document = Communication Diagnostics; globe/network = Development Communication.
- Use icons anywhere a bare numeral or gold dot would otherwise be the only anchor — practice-area cards, accordion triggers, footer link groups, the "How We Work" grid, stat blocks.
- **Set each icon in a small bordered or filled swatch** (Ink, Deep Gold, or Champagne depending on surroundings) so the set reads as a deliberate system, not clip-art. Keep the swatch shape consistent site-wide.
- The signal/transmission motif (§1) is the family these icons belong to — draw them as if from the same pen.

---

## 9. Hero & Header Exploration

**Creative latitude — but never the plain centered-white hero.** That pattern read as "tacky/basic" and is off the table as a default. Pick and adapt one of these, each stronger than flat white:

1. **Split-screen hero** — left half Ink (or Ink→Graphite gradient) carrying the epigraph + H1 in white/Champagne; right half a full-bleed duotone photo or a bold Deep Gold→Gold gradient panel carrying the signal motif at large scale and high contrast.
2. **Full-bleed color/photo hero** — a duotone Goldapples session photo filling the hero under a dark overlay, headline + CTA in white/Champagne on top, a gold accent rule or shape breaking the frame.
3. **Layered color-block hero** — an asymmetric stack of 2–3 overlapping panels (Ink, Deep Gold, Champagne) behind/around the headline; depth without a photo — the "creative" option where photography doesn't fit.
4. **Editorial masthead hero** — the epigraph-led white approach is allowed *only* if paired with a much larger, bolder Fraunces headline, a stronger multi-color/animated signal motif, and a supporting color band immediately below the fold. Never the whole hero as flat white with a thin-line graphic.

**Interior-page headers** (Advisory, Academy, Development Communication, Frameworks, etc.) also pick up a color-block or duotone-photo treatment — vary it page to page, the same way dark-section placement varies (§14). Never default every interior page to a plain white intro band.

The hero's job is **identity and thesis**, not the full pitch: who Goldapples is, the epigraph, and one primary CTA (Book a Consultation) + one secondary (Explore Our Work). Supporting detail lives in sections below.

---

## 10. Structure encodes meaning

A quick discipline check, because it's the difference between "designed" and "decorated":

- **Numbered markers only where order is real.** "How We Work" (Diagnose → Clarify → Design → Deliver → Review) is a genuine sequence — number it, and use the approach icons (§8.2). Practice areas, programmes, and insight categories are **not** sequences — give them icons, not `01 / 02 / 03`.
- **Eyebrows and labels state something true** (a category, a framework name, a sector), never decorative filler.
- **One strong idea per section.** Lead with it (§12), support it, then offer depth behind disclosure. Don't scatter three competing ideas across one band.

---

## 11. Motion & Interaction

Motion **confirms, it doesn't perform.** Implemented with **Framer Motion**; every motion rule below has a `prefers-reduced-motion` fallback that *removes* the transform, not just shortens it.

- **Scroll reveals:** fade + short rise (12–24px), 300–500ms, ease-out, triggered **once** per element (`whileInView` with `viewport={{ once: true }}`). No parallax, no scroll-jacking, no looping decorative animation.
- **Hover states:** the only always-on motion — subtle 150–200ms color/transform. Never a shadow-pop or scale bounce.
- **Marquee / ticker strips** (§5.1): continuous slow constant scroll; pause on hover/focus; under reduced-motion render as a static wrapped list.
- **Modals** (§7.3): fade + scale-in ~150ms ease-out; trap focus; restore focus to trigger on close; under reduced-motion, cross-fade only (skip the scale).
- **Tabs/accordions:** 150–300ms; instant is acceptable for tabs. Animate height for accordions, opacity for tab-panel swaps.
- **The signal motif** may animate (a signal travelling the line, a waveform resolving) as an *orchestrated* hero or divider moment — one considered animation lands harder than many scattered effects, and too much motion is itself an "AI-generated" tell. Under reduced-motion it renders as a static graphic.

**Global reduced-motion pattern:** gate transitions on a `useReducedMotion()` check (Framer Motion) so a single hook governs the whole page.

---

## 12. Voice & Tone

- **Lead with the shortest version of the point.** A bold statement or a number first; the paragraph is for the reader who wants more; the modal/accordion for the reader who wants everything. This mirrors the layout discipline in §1.
- **Brand voice:** authoritative, precise, human. Goldapples argues that communication is infrastructure — the copy itself should model clarity.
- **All body copy is verbatim from the client document** (§2). Design controls arrangement and disclosure, never wording.
- **Microcopy (the words the design owns — CTAs, labels, empty/error states):** active voice, sentence case, plain verbs. A control says what happens ("Send Your Brief," not "Submit"); the same verb carries through the flow; errors explain what went wrong and how to fix it, in the interface's voice, never vague and never apologetic. Let each element do one job.

---

## 13. Voice-to-Visual Mapping

| Desired feeling | Design lever |
|---|---|
| **Authority** | Ink + Deep Gold structural moments, big Fraunces headlines, generous white space, disciplined grid |
| **Clarity** | Strict type hierarchy, 8px spacing, one idea per section, lead-with-the-point copy, sentence-case headlines |
| **Intelligence / method** | JetBrains Mono framework names + labels, the signal/transmission motif, framework blocks, the "How We Work" stepper |
| **Premium / creative confidence** | Assertive color-blocking (40–50% colored scroll), duotone photography, in-palette gradients, varied section shapes |
| **Credibility / trust** | Real Goldapples photography, honest numbers (never invented), case studies with named Key Insights, AA contrast |
| **"Not a template"** | The signal motif as signature, concept-specific icons, no stock imagery, no pill buttons, no `01/02/03` decoration |

---

## 14. Page-by-Page Structure Notes

Apply §3 ("3–5 color changes per page") and §5.1 ("vary the section shape") throughout. These are structure guides — composition within them is creative latitude.

- **Home** — Hero (a §9 pattern, never flat white) → Opening Belief (Champagne or Gold band; the "It is infrastructure." punch-line) → What We Do (white or Graphite panel) → Core Practice Areas (mixed-color card grid, concept icons — Advisory, Academy, Development Communication, Media & Narrative) → Our Thinking (Ink; frameworks teaser with gold-filled signal tiles) → Who We Work With (marquee/ticker tag strip on Ink or Deep Gold, not a static list) → Featured Programmes (bento/mosaic mixing photo and text cards) → Work & Impact teaser (Gold/Champagne band with a pull-stat) → Why Goldapples (color-blocked stat row — "over three decades") → Final CTA (Ink or Deep Gold→Gold gradient — "Send Us a Brief"). Aim for 5+ distinct color surfaces down the page.
- **About** — photo-backed hero header → Our Evolution (timeline on a Champagne band) → Philosophy (Ink; the epigraph, full emphasis) → What Makes Us Different (icon-led 5-point list, not bare numerals) → Founder: J. Ayo Makinde (large duotone photo + color-blocked bio panel) → Our Work Covers (marquee tag strip) → Aspiration (Gold-tinted close).
- **Advisory** — color-blocked header → advisory areas as **accordion or tabs** (Leadership Communication, Organisational Alignment, Government & Public-Institution, Crisis & High-Stakes, Communication Diagnostics), each icon-led → **How We Work** 5-step stepper (numbered, approach icons) on a tinted band → CTA ("Book an Advisory Consultation").
- **Academy** — color-blocked header → programme categories (accordion/tabs) → Delivery Formats + Who We Service (icon grids or tag strips) → CTA ("Request a Programme Brief").
- **Development Communication** — color-blocked header → What We Support (bento grid) → Our Approach (Human-centred / Context-aware / Evidence-informed / Action-oriented — icon-led band) → CTA ("Discuss a Development Communication Brief").
- **Frameworks** — color-blocked header → the six framework blocks (§7.4) with signal-motif tiles, each expanding via accordion/modal → CTA ("Book a Framework Session").
- **Work & Impact** — color-blocked header → case-study summary cards with **"View Full Case Study" modals** (§7.8) → CTA ("Discuss a Project With Us").
- **Insights** — color-blocked header → category filter as **tabs** (Communication Intelligence, Leadership Communication, Development Communication, Meaning & Misunderstanding, Media & Public Narrative) → card grid with duotone placeholder imagery per category.
- **Contact** — the most restrained page (functional, form-first), but the intro column still carries a duotone photo or color panel, not flat white. Form spec in §16.5.

---

## 15. Accessibility & Responsive

The more color the system uses, the *more* load-bearing this section becomes — not less.

- **WCAG AA contrast** on every color-blocked panel, checked against that specific background before shipping — never assumed from the palette table.
- **Mobile-first**, single-column on mobile, the §6 accordion nav.
- **16px minimum** body text; **44px minimum** tap targets.
- **Responsive serif scaling** per the §4 mobile column — big Fraunces headlines scale down, they don't wrap awkwardly.
- **Visible keyboard focus** on every interactive element (a gold or Ink focus ring) — never removed.
- **Reduced motion** respected everywhere (§11).
- Semantic HTML, labelled form fields, alt text on meaningful imagery (duotone decorative photos may be `alt=""`).

---

## 16. Technical Implementation & Workflow

So that pages built independently in Antigravity compile into one coherent site, everyone uses the same stack, tokens, routing, and conventions.

### 16.1 Tech stack (fixed)

| Concern | Choice |
|---|---|
| Framework | **Next.js 16.3.0** — App Router, Turbopack compiler |
| UI library | **React 19.2.8** |
| Language | **TypeScript 5** (strict) |
| Styling | **Tailwind CSS v4** via PostCSS — CSS-first config (`@theme`, §3.4) |
| Animation | **Framer Motion 13.1.0** — all declarative motion (§11) |
| Email | **Resend** — contact form submissions |
| Code quality | **ESLint + Prettier**, with the Prettier Tailwind class-sorter |

> **Tailwind v4 note:** there is **no color/font palette in `tailwind.config.js`** — all design tokens live in the `@theme` block of `app/globals.css` (§3.4). This is deliberate: one file owns the palette. If you need a new token, add it there and reference it as a utility (`bg-gold-600`, `text-ink`) or a CSS var (`var(--color-ink)`).

### 16.2 Information architecture & routing (App Router)

Follow this route structure exactly so nav links, breadcrumbs, and the Services mega-menu resolve consistently:

```
app/
  layout.tsx                         → fonts (§4.3), <Nav>, <Footer>, metadata defaults
  page.tsx                           → /                        Home
  about/page.tsx                     → /about
  advisory/page.tsx                  → /advisory                ┐
  academy/page.tsx                   → /academy                 │ grouped under the
  development-communication/page.tsx → /development-communication  "Services ▾" mega-menu (§6)
  frameworks/page.tsx                → /frameworks              ┘
  work-and-impact/page.tsx           → /work-and-impact
  insights/page.tsx                  → /insights
  contact/page.tsx                   → /contact
  privacy-policy/page.tsx            → /privacy-policy
  api/contact/route.ts               → POST handler → Resend (§16.5)
components/                          → shared primitives (§16.6)
lib/                                 → utils, Resend client, form schema
```

- **Slugs are lowercase, hyphenated, and final** — don't invent alternates (`/dev-comms`, `/impact`). Nav and footer link to these exact paths.
- **Media & Narrative Strategy** is presented as a Home practice area and within Advisory; it has no standalone route unless the client adds page content later. Don't scaffold empty routes.
- Every `page.tsx` exports Next.js `metadata` using the client-provided SEO titles and meta descriptions (in the content doc, §11 of that file) plus an Open Graph image (§18).

### 16.3 Content source rule

**The client content document (`GOLDAPPLES MEDIA ASSOCIATES Final Website.docx`) is the only source of copy.** Every visible word — headings, body, taglines, stats, testimonials, case-study text, and the SEO titles/descriptions — comes verbatim from it. **Do not generate, paraphrase, or invent content that isn't in that document,** and don't pad a section with plausible-sounding filler to fill space. This rule overrides the usual instinct to write copy for an empty layout.

- **A content gap is not a license to write.** If the document doesn't cover something a layout seems to need, insert a visible `TODO(copy): …` placeholder and raise it with the team — never fabricate to fill the hole.
- **Functional microcopy is the one carve-out** — button labels, form-field labels, nav items, alt text, and error/empty-state messages the UI genuinely needs. Use the document's wording where it exists (e.g. the contact-form fields and options are specified in §16.5); otherwise keep it minimal, plain, and on-voice (§12).
- **New marketing copy requires an explicit request** from the client or team. When you are asked to draft, mark it clearly as *proposed copy for review* — never silently merge invented lines into the verbatim content.
- Keep copy in a typed content layer (e.g. `lib/content/*.ts` or MDX) rather than hard-coded in JSX, so wording stays consistent, reviewable, and easy to diff against the source document. Design decides arrangement and disclosure only.

### 16.4 Asset & logo placement

- **Global logo** in the nav across all pages (light lockup on Ink/scrolled states, dark lockup on white) — §6.
- Store brand assets (logo lockups, real session photography, the signal-motif source SVG) under `public/`. Reference the motif SVG as a shared component so its execution stays consistent.
- Real photography is duotone-treated at render (§8.1); keep an untreated master in `public/` and apply the wash via CSS, so the treatment is centralised and swappable.

### 16.5 Form data structures — Contact

The Contact form (`/contact`) posts to `app/api/contact/route.ts`, which sends via **Resend**. Fields, exactly (validate with a shared schema in `lib/`):

| Field | Type | Notes |
|---|---|---|
| Name | text | required |
| Organisation | text | required |
| Email Address | email | required, validated |
| Phone Number | tel | required |
| What do you need support with? | select | one of: Communication advisory · Executive training · Development communication · Media engagement · Leadership communication · Organisational communication diagnostics · Speaking engagement · Other |
| Briefly describe your communication challenge/need | textarea | required |
| Preferred response method | radio | Email / Phone / WhatsApp |

- Submit button label: **"Send Your Brief"**; success → an Ink confirmation with a gold check ("Brief sent — we'll be in touch."); errors follow §7.7 (no red/green).
- Keep the Resend API key server-side only (env var); never expose it to the client. Handle the send in the Route Handler (or a Server Action), return typed success/error to the form (React state; **no** browser storage).
- Same pattern for any future newsletter signup.

### 16.6 Shared components — build once, reuse

Before building a custom element, check whether a teammate already built it. Maintain these shared primitives in `components/`, all consuming the §3.4 tokens:

`Button`, `Card`, `Section` (handles the color-block background + §5 padding rhythm), `Eyebrow`/`Label`, `Accordion`, `Tabs`, `Modal`, `Marquee`, `FrameworkBlock`, `StatBlock`, `PullQuote`, `Icon` (the §8.2 set), `SignalMotif`, `Nav`, `Footer`, `FormField`. If you need a variant, extend the shared component — don't fork a one-off.

### 16.7 Git & collaboration workflow

- **Branch off `main` per page/feature:** `feature/frameworks-page`, `feature/contact-form`. One page owner per branch to avoid collisions.
- **Tokens and shared components are shared surface** — coordinate before changing `globals.css` `@theme` or a `components/` primitive; a token change touches everyone's page.
- **Before a PR:** run ESLint + Prettier (Tailwind class-sorter), and verify the page against §15 (responsive at mobile/tablet/desktop, keyboard focus, reduced-motion, AA contrast on every colored panel).
- **PR checklist:** copy is verbatim (§16.3) · routes match §16.2 · only §3 palette/tokens used · no pill buttons / stock photos / off-palette color · hero isn't plain-white (§9) · at least 40–50% colored scroll with no two strong-color sections stacked (§3) · OG image present (§18).

---

## 17. Do / Don't Summary

**Do**

- Treat color-blocked sections as a primary layout tool — Ink, Graphite, Deep Gold, Gold, and Champagne are all valid full backgrounds; aim for 40–50% colored scroll.
- Lead every section with its shortest version (a statement or number); push depth behind modals/tabs/accordions.
- Use big, bold Fraunces headlines; JetBrains Mono for framework names and labels.
- Use real Goldapples photography, duotone-treated, generously.
- Build and reuse the custom concept-specific icon set and the signal/transmission motif as the site's signature.
- Vary section shape (split-screen, bento, marquee, angled dividers) and hero pattern page to page.
- Use in-palette gradients freely; keep the decluttered 6-item nav with the tabbed Services mega-menu.
- Keep tokens in `@theme`, copy verbatim, and coordinate on shared surfaces.

**Don't**

- Don't use any off-palette hue or multi-hue gradient — no blue/purple/teal/red/green, not even for form states.
- Don't set colored text on a colored background without a contrast check; no gold/champagne body text below ~18px.
- Don't stack two strong-color (Ink/Graphite/Deep Gold) sections with no lighter section between them.
- Don't ship the generic warm-cream-serif-terracotta look: white base (not cream wash), gold accent (not clay), warmth from color-blocks (not an all-over tint).
- Don't use rounded/pill "SaaS" buttons, generic stock photography, generic icon packs, or `01/02/03` where the content isn't a real sequence.
- Don't invent copy or metrics, AI-generate the founder's likeness, use emojis, or ignore `prefers-reduced-motion`.
- Don't default to a plain centered-white hero, and don't leave any page under ~2 color surfaces.
- Don't hard-code copy, invent routes, or change client wording; don't edit shared tokens/components without coordinating.

---

## 18. Open Graph / share cards

Every primary page ships a considered OG image — often the first impression when a link is forwarded. Treat it as seriously as the page: Ink or Deep Gold→Gold background, the logo, a short Fraunces line (the page's lead statement or the epigraph), and the signal motif — never an auto-generated screenshot or a blank card. Generate via Next.js `opengraph-image` (the `ImageResponse` API) per route so cards stay on-system.

