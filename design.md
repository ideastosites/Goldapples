# Goldapples Media Associates — Website Design Guide

---

## 1. Brand Foundation

**What Goldapples is:** a communication intelligence, advisory, and executive education firm. Not an agency, not a media vendor — a firm that diagnoses why meaning breaks down inside organisations and fixes it.

**Positioning line:** *"Communication is the operating system of human relations."*

**Personality:** authoritative, precise, calm, intelligent, quietly confident. Never salesy, never decorative, never shouting. Think of the tone of a senior advisor in the room — not a marketing brochure.

**Design implication:** the site should feel like it was designed by people who understand structure and clarity, because that is literally the product. Every layout decision is an argument for the brand's competence. Clutter, filler copy, or generic stock-photo energy directly undermines the pitch.

**Design north star:** *editorial authority meets institutional trust* — closer to a well-designed think tank, policy journal, or premium consultancy site (McKinsey, Brunswick, a well-funded research institute) than a typical "creative media agency" site. Warm, not corporate-cold. Minimal, not empty.

---

## 2. Color Palette

**Official palette: "Champagne & Graphite"**

| Swatch | Hex | Role |
|---|---|---|
| Ink | `#12100D` | Deepest ink — reserved for high-contrast moments: dark section backgrounds, footer, hero overlays |
| Graphite (Logo Mark) | `#33322F` | **Body text** — primary text color across the site, matches the "gold" wordmark ink |
| Steel (Logo Wordmark) | `#6E7175` | **Muted/meta text** — captions, timestamps, secondary labels, matches the "apples" wordmark grey |
| Deep Gold | `#B98F3E` | **Primary action** — buttons, links, active states, key CTAs |
| Gold (Apple Highlight) | `#DFBE7E` | Secondary gold — small accents only: icons, rules, tags, framework diagram highlights |
| Champagne (Surface) | `#F7EEDC` | Occasional section tint — used sparingly, never as the default page background |

### Usage rules
- **Clean white (`#FFFFFF`) is the default page background across the entire site.** This is a deliberate correction from a warmer-background approach: a tinted background reads as templated/"vibe-coded" rather than premium and editorial. White keeps the site feeling deliberate, high-end and print-like — closer to a serious publication or consultancy than a generic AI-generated site.
- **Champagne `#F7EEDC` is not a background color** — use it only as an occasional, small-surface tint (a tag/pill, a pull-quote block, a hover state) where a touch of warmth helps, never as a full section or page background.
- **Graphite `#33322F` is body text**, not pure black — matches the logo mark exactly. Reserve **Ink `#12100D`** for dark section backgrounds (footer, Final CTA band) rather than as a text color; it's more of a "surface" than a "type" color at this depth.
- **Deep Gold `#B98F3E` is the primary action color** — CTA buttons, links, active nav state, key numerals in frameworks. Confirmed AA-safe as a button fill with white or ink text on top; as *body text* on white it sits close to the AA threshold, so keep gold text large (headlines, labels, pull-quote marks) rather than small paragraph copy.
- **Gold `#DFBE7E`** is a small-accent color only — icon fills, thin rules, tag backgrounds, hover tints, apple-highlight moments in framework diagrams. Never a background field at section or page scale.
- **Steel `#6E7175`** is muted/meta text — captions, timestamps, breadcrumb, form helper text, dividers. Never use it for primary body copy; it's intentionally quieter than Graphite.
- **Gradients are permitted, but only within the accepted palette, and used sparingly.** A subtle gradient built from palette colors — e.g. Ink to Graphite on a dark section, or Deep Gold to Gold on a small accent shape or diagram element — can add depth without breaking the premium/editorial feel. What to avoid is exactly what makes a site feel templated: multi-hue or off-palette gradients (especially anything drifting toward blue/purple), large blurred-color backdrops, or gradients used as the default page background. Keep gradients confined to small surfaces (a button, an icon fill, a diagram accent, a thin divider) or a single dark section — never as the base treatment for the page or a full hero background.
- **Dark (Ink `#12100D`) sections are a deliberate rhythm device — use them across the site, not just once.** Alternating light and dark sections down a page (and varying which pages carry dark moments) gives the site pacing and a premium, editorial feel, rather than a flat scroll of white blocks. A good working rule: 1–2 dark sections per longer page (Home, About, Work & Impact), used at moments that deserve emphasis — a thesis statement, a philosophy/positioning statement, a case-study highlight, or a closing CTA — and none-to-one on shorter, more functional pages (Contact). Avoid stacking two dark sections back-to-back; let at least one light section separate them so the contrast keeps its impact.
- On a dark section, flip the type/surface relationship: Champagne or white text on Ink, Gold/Deep Gold for CTAs and accents (Deep Gold reads strongly on Ink — confirm contrast at implementation). Keep dark sections visually simple — a statement, a quote, a single CTA, or a compact stat/insight — not dense multi-column content, so they read as a pause rather than another wall of information.
- Contrast check: Graphite `#33322F` on white is comfortably AA (well over 12:1) for body text. Deep Gold `#B98F3E` on white is workable for large text/UI elements but should not carry small paragraph copy — pair it with Graphite for anything below ~18px.

---

## 3. Typography

Two-typeface system: a serif for editorial authority at large sizes, a workhorse sans for everything functional.

- **Display / Headline serif:** something in the register of **Fraunces, Tiempos, or GT Sectra** — has personality and gravity without being ornate. Used for H1/H2, pull quotes, the Makinde epigraph, section openers. This is what separates the site from a generic corporate-sans site and gives it the "intelligence firm" weight.
- **Body / UI sans:** **Inter, General Sans, or Söhne** — clean, highly legible at small sizes, neutral enough not to compete with the serif. Used for body copy, nav, buttons, forms, captions, dropdown content.
- **Optional monospace accent (sparingly):** for framework names or numbered systems (e.g. "01 — Diagnose", "M.E.A.N.I.N.G.") a mono or semi-mono adds a "systems/intelligence" feel without extra color. Use only in labels/eyebrows, never body copy.

### Scale (desktop, indicative — adjust to grid)
| Role | Size / Weight | Typeface |
|---|---|---|
| H1 (hero) | 56–72px / 500 | Serif |
| H2 (section) | 36–44px / 500 | Serif |
| H3 (subsection/card title) | 22–26px / 600 | Sans |
| Eyebrow/label | 12–13px / 600, uppercase, letter-spaced | Sans or Mono |
| Body | 17–18px / 400, 1.6 line-height | Sans |
| Small/meta | 13–14px / 400 | Sans |
| Pull quote | 28–34px / 400 italic | Serif |

**Rule of thumb:** if a sentence sounds like a thesis statement ("Communication is not just messaging. It is infrastructure."), set it in serif, large, with generous white space around it — let it breathe as a standalone idea, not just another paragraph.

---

## 4. Layout & Grid

- **12-column grid**, max content width ~1200–1280px, generous side margins (don't run edge-to-edge on text).
- **Whitespace is a design tool here, not empty space** — the brand's whole thesis is that clarity beats noise. Sections should have real breathing room (120–160px vertical rhythm between major sections on desktop).
- **Line length:** cap body text at ~65–75 characters per line even on wide screens — use narrower text columns within the grid for long-form pages (Insights, About, Philosophy).
- **Asymmetry over centering** for most sections once past the hero — e.g., a short serif statement on the left, supporting body copy on the right, rather than everything centered. Centered stacks feel like a generic template; asymmetric grids feel edited.
- **The hero is the one place to be bold:** large serif headline, the Makinde quote treated almost like a masthead epigraph, generous negative space, no clutter, clean white background. Avoid a busy hero image — a single abstract graphic motif in flat or subtly-gradiented Ink/Gold line-art (see §7) reads better than stock photography of "diverse professionals in a meeting." If a gradient is used here, keep it confined to that motif or a thin accent band, not spread across the full hero background.

---

## 5. Navigation

The content draft has real depth (5 practice areas under Advisory, 5 under Academy, 6 frameworks) — this needs a **mega-menu**, not a plain dropdown, or the nav will feel cluttered against a "clarity" brand.

- Primary nav: Home / About / Advisory / Academy / Development Communication / Frameworks / Work & Impact / Insights / Contact — sticky, minimal, ink-on-paper with a gold underline/dot for the active + hover state.
- **Advisory, Academy, and Frameworks** get mega-menus: instead of a plain list, show each dropdown item with its one-line description (already drafted in the content) in a clean 2-column panel. This *demonstrates* the brand's communication skill inside its own nav — a small but meaningful detail.
- Keep dropdown panels on clean white with hairline dividers between items, not boxed/carded — consistent with the "no clutter" principle.
- Mobile: single accordion drawer; keep the same grouping so the practice-area logic doesn't get lost.
- CTA "Book a Consultation" stays visible as a filled gold button, right-aligned in the nav bar at all times — this is the one place gold-as-fill is appropriate (small surface area, clear action).

---

## 6. Components

- **Buttons:** Two styles only.
  - *Primary:* filled Graphite `#33322F` background, white text, on most of the site (feels authoritative, not salesy). Reserve **filled Deep Gold `#B98F3E`** for the single most important CTA per page (usually "Book a Consultation" / "Send Us a Brief") so it stays meaningful, not everywhere.
  - *Secondary:* ink text, no fill, thin ink underline or bottom border, arrow icon on hover shift. No pill-shaped/rounded buttons — keep corners sharp or barely-rounded (2–4px) to stay editorial rather than "SaaS product." A subtle in-palette gradient (e.g. Deep Gold to Gold) is acceptable on the primary CTA fill if it reads as a refined finish, not a decorative effect.
- **Cards** (practice areas, programmes, case studies): flat white surface, hairline border or subtle 1px shadow only, no heavy drop-shadows. Gold appears only as a small accent (icon, number, or top 2–3px rule, optionally a tight in-palette gradient on that rule), never as a full card background.
- **Framework blocks:** since Goldapples' frameworks (M.E.A.N.I.N.G., Physics of Communication, C2E, etc.) are a genuine IP asset, give each one a simple custom diagram/icon (line-art style, ink + gold) rather than a stock icon — these become visually memorable "signature" elements across Frameworks, Home, and Insights.
- **Quotes/epigraphs:** large gold quotation mark or a thin gold rule beside the text; serif italic; generous surrounding space.
- **Forms** (Contact page): simple, single-column, generous field spacing, ink labels above fields (not placeholder-only), gold focus ring on active field. No unnecessary visual noise — the form should feel like writing someone a brief, not filling out a ticket.
- **Case studies:** use the Challenge / Approach / What Changed / Key Insight structure as a clean 4-part visual rhythm (e.g., 4 short labeled blocks or a horizontal stepper) rather than a wall of paragraphs — makes the case studies scannable, which matters since the content itself is fairly dense.

---

## 7. Imagery & Iconography

- **Avoid generic stock photography** (handshake, diverse-team-in-meeting, person-pointing-at-whiteboard). It undercuts a firm whose whole value prop is precision and original thinking.
- Preferred direction: a mix of
  - **Real photography** of the founder and, where available, real programme/training sessions (authentic > staged corporate stock);
  - **Abstract editorial graphics** — line diagrams, signal/wave motifs, subtle grid or network patterns in Ink + Gold — used to visualize the frameworks (Physics of Communication, message-distortion diagrams, alignment diagrams) and as section dividers/hero backgrounds where no real photo fits.
- **Iconography:** thin-line (1.5px stroke), ink or gold, no filled/glyph-heavy icon sets, no emoji-style icons. Consistent icon style across Advisory areas, Academy categories, and footer links.
- The apple motif from the logo can be echoed subtly (e.g., a small gold dot/mark used as a bullet or section marker) — don't overuse it decoratively elsewhere on the page.

---

## 8. Motion & Interaction

Minimal and purposeful — motion should clarify hierarchy and reward attention, not entertain for its own sake. Every effect below should be the kind of thing a visitor feels more than notices; if someone can describe the animation before they can describe the message, it's overtuned.

### Micro-animations

Small, functional motion tied to a specific state change — never decorative for its own sake.

- Buttons: simple color/underline transition on hover (150–200ms ease), no scale/shadow/bounce gimmicks. Primary gold buttons may deepen slightly toward Deep Gold on hover/press as the only "feedback" motion.
- Nav mega-menus: quick fade + 4–8px slide down, ~150ms.
- Form fields: gold focus ring/underline fades in on focus (~120ms), not an abrupt snap.
- Cards (practice areas, programmes, case studies): a very subtle lift (1–2px translateY, no shadow bloom) on hover — enough to confirm interactivity, not enough to feel like a "product card" gimmick.
- Accordion/expand elements (Advisory, Academy, Frameworks dropdown content): smooth height transition (200–250ms ease), content fades in slightly after the container opens rather than popping in.
- Icons (framework icons, footer/nav icons): a small, single-purpose animation on hover only where it clarifies meaning — e.g. a diagram icon completing its line — never a generic wiggle/spin.

### Scroll effects

- Section reveals: subtle fade/slide-up (150–250ms, ease-out, ~12–16px of travel) as content enters the viewport — no bouncy or elaborate animation, and never re-triggering every time a section re-enters view (once per session per section is enough).
- Numbers or framework diagrams may animate once on first scroll into view (e.g., a diagram "drawing itself," a stat counting up) as a signature moment — used sparingly, ideally only on the Frameworks page and one stat moment on Home/About, not repeated on every section.
- Subtle parallax is acceptable in exactly one place per page at most (e.g. a very slight differential scroll speed between a hero's headline and its background motif) — keep the offset small (a few percent), since heavy parallax is one of the more obvious "template site" tells.
- A slim scroll-progress indicator (a thin gold line at the very top of the viewport) is optional for long-form pages (Insights articles) — useful, not decorative.
- Sticky nav: background transitions from transparent-over-hero to solid white/Ink (matching the section beneath it) as the user scrolls past the hero — smooth crossfade, not an abrupt cut.

### Mouse-movement effects

Used sparingly, and only on desktop — treat these as a small number of signature moments, not a site-wide layer.

- **Hero/abstract motif:** the line-art framework/network motif in the hero (see §7) may respond subtly to cursor position — a few degrees of parallax tilt or a gentle offset (a handful of pixels, not inches) as the mouse moves. This is the single best place for a mouse-interactive moment, since it reinforces "communication as a system" rather than existing purely for effect.
- **Custom cursor:** optional, and only if it stays minimal — e.g. a small gold dot that scales slightly over links/buttons rather than a large illustrated cursor replacement.
- **Framework diagrams (Frameworks page):** elements of a diagram (e.g. the Physics of Communication's source/medium/effect chain) may highlight or connect as the cursor passes near them — this doubles as an explanatory device, not just decoration.
- **Everywhere else, resist the urge.** Card tilt-on-hover, cursor-follow blobs, or magnetic-button effects across the whole site read as templated rather than premium — reserve mouse-reactive motion for the one or two moments above where it actually reinforces the brand's "systems/meaning" idea, and leave the rest of the site calm.
- All mouse-movement effects must degrade gracefully to their static state on touch devices — no effect should depend on a cursor to make content legible or usable.

### Grain / particle overlay

A fine film-grain texture with slow-drifting particles, applied as a fixed overlay across the whole site. This is the one ambient, always-on motion element on the site, and it's a deliberate choice: a subtle grain reads as tactile, physical, and editorial (closer to print or film) rather than flat and digital — it's a texture cue premium print/consultancy brands use often, and done quietly it works *with* the "not vibe-coded" direction rather than against it. The risk is only in overdoing it, so keep it disciplined:

- **Grain:** a fine noise texture (film-grain style, not a visible pattern), rendered at low opacity (roughly 3–5%) using `mix-blend-mode: overlay` or `soft-light` so it reads as texture on the surface rather than a visible layer sitting on top of it. Static or very slowly animated (looping every few seconds) — it should feel like paper/film grain, not like "something is happening."
- **Particles:** a handful of very small, low-opacity dots (in Ink or Graphite on light sections, Champagne or Gold at very low opacity on dark sections) drifting slowly and randomly — think dust in a shaft of light, not a starfield or confetti. Keep the count low (roughly 15–40 particles depending on viewport size), speed slow, and size small (1–2px). No particle should ever be a focal point; if a user notices individual particles rather than a general ambient texture, it's overtuned — dial back count, size, and opacity.
- **Placement:** apply as a `position: fixed`, `pointer-events: none` overlay covering the full viewport, sitting above the background but below all content and interactive elements, so it never interferes with text legibility or clickability. It should read consistently across both light and dark sections — same grain/particle system, just recolored to stay visible-but-quiet against each background.
- **Performance:** implement the particle layer on a single `<canvas>` (not many DOM-animated divs) so it stays cheap on scroll and doesn't jank on lower-end devices; respect `prefers-reduced-motion` by freezing particle movement (grain texture can stay static) for users who've set that preference.
- **Where it does NOT apply:** turn it off (or reduce it further) inside dense reading content — long-form Insight articles, case-study text blocks — where texture behind small body text can hurt legibility and reading comfort. It's an ambient brand layer, not a decoration for every pixel of the page.

### Cross-cutting rule

All of the above must respect `prefers-reduced-motion`: reveals become instant (no slide/fade delay), parallax and cursor-reactive effects disable to a static state, and the grain overlay freezes. Nothing in this section should ever block or slow down access to content — motion is a finishing layer, not a gate.

---

## 9. Voice & Tone (carries into UI copy, not just body content)

- Confident, declarative sentences. Short paragraphs. No exclamation points, no "we're passionate about excellence" filler (the client explicitly flagged this to cut).
- Buttons/CTAs are direct and specific: "Book a Consultation," "Request a Programme Brief," "Send Us a Brief" — not "Learn More" or "Click Here."
- Section eyebrows/labels can carry small editorial framing (e.g., "01 — What We Do") to reinforce the "systems thinking" personality without adding word count.

---

## 10. Page-by-Page Structure Notes

- **Home:** Hero (light, white) → Opening Belief (light — short, serif-led) → What We Do (light) → Core Practice Areas (light, 4-card grid, mega-menu style detail on hover/click) → **Our Thinking** (dark/Ink section — frameworks teaser, 6-item grid with signature icons in Gold on Ink; this is Goldapples' original IP, so give it the weight of a dark, isolated moment) → Who We Work With (light — tag/pill list) → Featured Programmes (light — card carousel or 3-up grid) → Work & Impact teaser (light) → Why Goldapples (light) → Final CTA (**dark/Ink section**, Gold accent, closing statement). Two dark moments total, separated by five light sections — enough rhythm without overusing the effect.
- **About:** Intro (light) → Evolution (light — short timeline treatment) → **Philosophy** (dark/Ink section — the "operating system of human relations" statement, large serif on Ink, isolated and quote-like; this is the brand's core belief and earns the emphasis) → What Makes Us Different (light — numbered 5-point list) → Founder (light — photo + bio, real photography priority) → Our Work Covers (light — tag list) → Aspiration (light close, or a smaller dark band if the page needs a second beat — keep it optional and test against page length).
- **Advisory / Academy / Development Communication / Frameworks:** consistent template — intro statement (light) → grid of areas/programmes, each with a short description and "learn more" expand (light, accordion or modal, not full page-per-item) → How We Work (light — 5-step process, horizontal stepper) → **closing CTA band** (dark/Ink, Gold CTA button) to close each of these pages on the same firm, confident note as Home.
- **Work & Impact:** Intro (light) → case studies as the 4-part card structure noted in §6, filterable by sector (light) → optionally pull one standout "Key Insight" line into a **dark/Ink band** mid-page as a pacing break if the case-study list runs long → closing CTA (dark, consistent with other practice pages).
- **Insights:** editorial blog/article grid, filter by category (light throughout — this page is for scanning and reading, dark sections would slow that down; save dark treatment for a featured/pinned article block only, if used at all).
- **Contact:** simple two-column, light throughout — short direct copy + form; no clutter, no map embed unless truly needed. Keep Contact fully light; it's a functional page, and a dark section here would feel like friction right before someone fills out a form.

**Cross-page rhythm:** vary *which* section carries the dark treatment page to page (frameworks teaser on Home, philosophy on About, closing CTA on the practice-area pages) rather than always landing it in the same structural slot — that variation is what makes the dark sections feel like intentional emphasis rather than a template pattern repeated on autopilot.

---

## 11. Accessibility & Responsive

- Maintain AA contrast throughout (see palette notes, §2).
- Design mobile-first for nav and mega-menus — the practice-area depth is the biggest mobile UX risk; test the accordion early.
- Minimum 16px body text on mobile, comfortable tap targets (44px min) on all CTAs and accordion triggers.
- Serif display sizes should scale down meaningfully on mobile (avoid oversized headlines forcing awkward line breaks) — test the Makinde hero quote at mobile widths specifically, it's a long line.

---

## 12. Do / Don't Summary

**Do:** clean white backgrounds, ink-first typography, gold as a precise accent, serif for ideas, sans for function, generous whitespace, real photography where possible, custom framework diagrams, short declarative copy, subtle in-palette gradients used sparingly on small surfaces, a quiet grain/particle overlay for texture, small purposeful micro-animations and scroll reveals, one or two signature mouse-reactive moments tied to the brand idea.

**Don't:** off-palette or multi-hue gradients (especially anything drifting blue/purple), large blurred-color backdrops, gradients as a default page or hero background, warm-tinted or colored page backgrounds, gold backgrounds at full scale, pure black as a primary surface, generic stock photography, rounded "SaaS" buttons and shadows, dense bullet walls without visual breaks, dark sections stacked back-to-back with no light section between them, decorative icon sets, exclamation points, a grain/particle overlay strong enough to be noticed as "an effect" rather than felt as texture, cursor-follow blobs or tilt-on-hover effects site-wide, heavy parallax, motion that ignores `prefers-reduced-motion`.
