# Goldapples Media Associates — Website Design Guide

**v2 — Creative Premium Direction.** This revises v1 after client feedback that the first pass felt too crowded (nav), too tacky/basic (Home), and too color-sparse overall. The corrections below intensify color, add real imagery, introduce a matching icon system, diversify section layouts, and add progressive-disclosure UI (modals/tabs/accordions) for a TL;DR-attitude audience — while staying anchored to **Corporate, Premium, Minimalist, Creative**. Where "minimalist" and "creative" pull against each other, favor creative — a sparse, safe layout is exactly what read as "basic" in v1. Sections marked **(v2)** are new or materially changed from v1; unmarked sections still apply as written.

---

## 1. Brand Foundation

**What Goldapples is:** a communication intelligence, advisory, and executive education firm. Not an agency, not a media vendor — a firm that diagnoses why meaning breaks down inside organisations and fixes it.

**Positioning line:** *"Communication is the operating system of human relations."*

**Personality:** authoritative, precise, intelligent, confident — and now, deliberately more visually bold. Think of a senior advisor who also happens to have exceptional taste, not a marketing brochure and not a beige boardroom either.

**Design implication (v2):** the site should still argue the brand's competence through structure and clarity, but "clarity" no longer means "quiet." A high-TL;DR audience decides in seconds whether a firm looks credible — color, imagery and typographic confidence do that work faster than restrained grayscale minimalism. Every section should feel considered *and* visually memorable.

**Design north star (v2):** *editorial authority with a creative-agency's visual confidence* — closer to a premium consultancy site that clearly hired a real design studio (think the boldness of a Pentagram or Koto case study) than either a generic SaaS template or a flat, safe policy-journal page. Corporate and premium, not corporate-cold; minimalist in *discipline* (no clutter, no filler), not in visual restraint.

**Audience note (v2):** the audience skims. Lead every section with a short, sharp statement. Put depth behind a click — accordions, tabs, and modals — rather than long static paragraphs. If a section takes more than ~5 seconds to "get," it needs a stronger visual anchor or a shorter lead line.

---

## 2. Color Palette (v2 — intensified usage)

**Official palette: "Champagne & Graphite"** — same five colors as v1, used far more assertively.

| Swatch | Hex | Role |
|---|---|---|
| Ink | `#12100D` | Full-strength surface color — section backgrounds, panels, cards, nav — not just a rare "dark moment" |
| Graphite | `#33322F` | Body text on light surfaces; also a legitimate mid-tone section/panel background |
| Steel | `#6E7175` | Muted/meta text on light surfaces only |
| Deep Gold | `#B98F3E` | Primary action color **and** a legitimate section/panel/card background at full strength when paired with Ink or white text |
| Gold | `#DFBE7E` | Accent color, gradient partner, and a legitimate light-panel background (Champagne's louder sibling) |
| Champagne | `#F7EEDC` | Now a fully legitimate **section background**, not just a small-surface tint — see below |

### Usage rules (v2 — supersedes v1 §2)

- **White is still the base canvas, not the whole page.** Most pages open on white so the palette has somewhere to breathe, but color-blocked sections are now a primary layout tool, not an exception. A working target: **at least 40–50% of any given page's vertical scroll should sit on a colored surface** (Ink, Graphite, Deep Gold, Gold, or Champagne) rather than plain white.
- **Champagne and Gold are now valid full-section backgrounds.** Use them for panels that want warmth without the weight of Ink — a Champagne band behind a stat row, a Gold-tinted card grid, a Gold→Deep Gold gradient panel behind a pull quote. This reverses v1's "Champagne is never a background" rule.
- **Ink sections are frequent, not rare.** Every page should alternate Ink ↔ light color-blocks ↔ white in a considered rhythm — think 3–5 color changes per page minimum on longer pages (Home, About, Work & Impact), not the "1–2 dark moments" ceiling from v1.
- **Deep Gold as a background is now allowed** on cards, tags, small panels, and accent blocks (not full-bleed page backgrounds) — e.g. a Deep Gold card in a mixed-color grid, a Deep Gold pill/tag, a Deep Gold quarter-panel behind a stat. Pair with Ink or white text for contrast.
- **Gradients are a primary tool now, still in-palette only.** Ink→Graphite, Deep Gold→Gold, Ink→Deep Gold (moody, high-contrast) and Champagne→white (soft) are all fair game across hero backgrounds, section dividers, card fills, and button fills — not confined to "small surfaces" anymore. Keep hue strictly within the five palette colors; still no blue/purple drift, no off-palette hues.
- **Small-text contrast rules from v1 still apply exactly as written** — Deep Gold, Gold, and Champagne text still needs a light/dark surface behind it that clears 4.5:1 at body-copy sizes (this is a hard accessibility floor, not a style choice). Use white or Ink text on colored panels, not colored text on colored panels.
- **Dark-section rhythm rule from v1 (never stack two dark sections back-to-back) still applies** — but "dark" now includes Ink, Graphite, and Deep Gold-at-full-strength surfaces collectively; alternate *any* strong-color section with a lighter one (white, Champagne, or a pale Gold tint) next to it.

---

## 3. Typography

Two-typeface system: a serif for editorial authority at large sizes, a workhorse sans for everything functional. Unchanged from v1, but lean into bigger, bolder display type in hero and section-opener moments (v2) — a large, confident serif headline is one of the fastest ways to read "premium," and should be sized closer to the top of each range below rather than the middle.

- **Display / Headline serif:** Fraunces — used for H1/H2, pull quotes, the Makinde epigraph, section openers.
- **Body / UI sans:** Inter — body copy, nav, buttons, forms, captions, dropdown content.
- **Monospace accent:** JetBrains Mono for framework names, numbered systems, eyebrows/labels — never body copy.

### Scale (desktop, indicative)
| Role | Size / Weight | Typeface |
|---|---|---|
| H1 (hero) | 64–88px / 500 (v2: push toward the top of range) | Serif |
| H2 (section) | 40–52px / 500 | Serif |
| H3 (subsection/card title) | 22–26px / 600 | Sans |
| Eyebrow/label | 12–13px / 600, uppercase, letter-spaced | Sans or Mono |
| Body | 17–18px / 400, 1.6 line-height | Sans |
| Small/meta | 13–14px / 400 | Sans |
| Pull quote | 30–40px / 400 italic (v2: bigger) | Serif |

---

## 4. Layout & Grid (v2 — more section variety)

- **12-column grid**, max content width ~1280–1360px. Generous margins still apply, but full-bleed color panels (edge-to-edge, no side margin) are now an explicit pattern for section backgrounds — content still respects the grid *inside* those panels.
- **Vary the section shape, not just the color.** Don't let every section default to "centered eyebrow + heading + paragraph." Rotate through: split-screen (50/50 color block + content), bento/mosaic grids (mixed card sizes), full-bleed color band with centered statement, overlapping-card layouts (a card breaking out of its section's edge into the next), diagonal or angled section dividers (a clipped-path transition between two color blocks instead of a straight horizontal line), and marquee/ticker strips for tag lists (slow horizontal auto-scroll, pauses on hover, respects reduced-motion).
- **Asymmetry stays the default**, but asymmetric no longer means "text-only" — pair an asymmetric text column against a photo, diagram, stat block, or color panel rather than empty space.
- **The hero has more than one acceptable shape now (v2 — see §7A).** A plain centered/white hero is the *least* preferred option, not the default.

---

## 5. Navigation (v2 — decluttered)

v1's flat nine-item bar reads crowded at this content depth. Consolidate:

- **Top-level nav (declutter target):** Logo (links home, no separate "Home" text link) · About · **Services** ▾ · Work & Impact · Insights · Contact — six slots instead of nine, plus the persistent gold "Book a Consultation" button.
- **"Services" is a single tabbed mega-menu** covering what used to be four separate top-level items — Advisory, Academy, Development Communication, Frameworks — as four tabs inside one panel. Clicking/hovering a tab swaps the column content without closing the panel; each tab still shows its items in the clean 2-column, one-line-description layout from v1. This is also the site's first real use of the **tabs** pattern called for in §6A.
- Sticky nav, ink-on-white with a gold underline/dot for active/hover states, crossfading to solid background (now: a subtle Ink or Champagne-tinted glass, not just plain white) on scroll past the hero.
- Mobile: single accordion drawer; the four Services categories become a nested accordion-within-accordion (tap "Services" → four sub-accordions for Advisory/Academy/Development Communication/Frameworks).
- "Book a Consultation" stays a persistent filled-gold button at all screen sizes.

---

## 6. Components

### 6A. Progressive disclosure (v2 — new)

The audience skims; depth belongs behind an interaction, not in a wall of default-visible text.

- **Modals:** used for anything "extra" that isn't needed to understand the page's core argument — a full case study opened from a summary card, a programme's full curriculum, an expanded framework explanation. Modal trigger is always a clearly-labelled button ("View Full Case Study," "See Curriculum"), never a whole card being clickable (keeps hover/focus states unambiguous). Ink-tinted backdrop, white or Champagne modal surface, sharp-cornered (matches button radius rules), closes on backdrop click / Escape / a visible close control.
- **Tabs:** used where content is genuinely categorical and only one category is relevant at a time — the Services mega-menu (§5), and consider tabs as an alternative to accordion on Advisory/Academy/Development Communication pages where a client prefers "pick a lane" browsing over "expand everything." Tab bar in Graphite/Ink text, Deep Gold underline or filled-pill on the active tab, instant content swap (or a fast 150ms cross-fade) — no page reload.
- **Accordions:** still the default for sequential, all-relevant content (Advisory areas, Academy programmes, Development Communication support areas) where a visitor might reasonably want to scan every item's title before opening one. Same height-transition rules as v1 §8.
- **Rule of thumb:** if there are 4+ things and a visitor needs to compare all of them → accordion. If there are 2–5 mutually exclusive categories → tabs. If it's a single deep-dive off a summary → modal.

### 6B. Buttons, cards, quotes, forms, case studies (mostly unchanged from v1, updated where noted)

- **Buttons:** still two shapes (filled Graphite primary, underline secondary), but **filled Deep Gold or a Deep Gold→Gold gradient fill is no longer limited to one CTA per page** — use it for any primary action, since color is now a primary tool rather than a scarce accent. Sharp/barely-rounded corners (2–4px) still apply — no pill buttons.
- **Cards:** flat surfaces are still the base, but cards may now sit on Ink, Champagne, Gold, or white panels depending on the section's color-block — the card itself stays legible (light card on dark panel, or a bordered Ink card on a light panel) rather than always being white-on-white. Full-color card fills (e.g. a Deep Gold card in a mixed grid) are acceptable as an occasional emphasis card in a grid, not the default for every card.
- **Framework blocks, quotes/epigraphs, forms, case-study structure:** unchanged from v1 §6.

---

## 7. Imagery & Iconography (v2 — much more of both)

### Photography (v2)

v1 under-used the real photography available. Correct this:

- **Use real Goldapples session/event photography generously and as placeholders now** — hero backgrounds (with a color-wash/duotone overlay in Ink or Deep Gold to keep it on-palette, not raw full-color photos competing with the palette), section dividers, card backgrounds, About/Founder/Academy/Work & Impact imagery, and anywhere a section currently reads as text-only and flat. Mark any photo used as a placeholder pending final client sign-off with a short inline comment (`{/* placeholder photo — replace after client review */}`) rather than a visible on-page label, since these are real (if uncurated) brand photos, not stock.
- Where no real photo fits a concept (e.g. an abstract idea like "meaning drift"), use the line-art/diagram treatment from v1, now rendered bolder — thicker strokes, more color fill (not just outline), on colored panels rather than only on white.
- Duotone/color-wash treatment recipe: real photo → Ink or Graphite shadow tone + Champagne or Gold highlight tone, blended via CSS (`mix-blend-mode` + a solid color layer, or a subtle gradient overlay) — keeps every photo on-palette regardless of its original colors.

### Iconography (v2 — new custom line-icon system)

- Build a **small custom line-icon set** (1.5–2px stroke, Ink or white depending on surface, single-color, no gradients on icons themselves) where each icon is **specific to the concept it represents** — not generic bullet dots or numerals. Examples: a compass or crosshair for "Diagnose," a speech-bubble-with-arrow for "Clarify," a blueprint/grid glyph for "Design," a handshake-as-line-art or forward-arrow for "Deliver," a checkmark-in-circle for "Review"; a megaphone-line icon for Media & Narrative Strategy; a graduation-cap line icon for Academy; a shield or scale icon for Government/Public Institution Communication; a pulse/heartbeat line for Crisis Communication; a magnifying-glass-over-document for Communication Diagnostics; a globe/network icon for Development Communication.
- Use these icons anywhere v1 relied on a bare numeral or gold dot as the only visual anchor — practice-area cards, advisory/academy accordion triggers, footer link groups, the "Our Approach" 4-point grid, stat blocks.
- Icons sit inside a small bordered or filled swatch (Ink, Deep Gold, or Champagne background depending on surrounding color) rather than floating bare, so they read as a deliberate system rather than clip-art.

---

## 7A. Hero & Header Exploration (v2 — new)

v1's hero (centered text, thin white background, one small line-art motif) was flagged as tacky/basic. Do not default back to it. Acceptable hero patterns, any of which is stronger than a plain centered white hero:

1. **Split-screen hero:** left half Ink (or Ink→Graphite gradient) panel with the epigraph + H1 in white/Champagne, right half a full-bleed duotone photo or a bold gradient panel (Deep Gold→Gold) carrying the abstract signal-diagram motif at much larger scale and higher color-contrast than v1.
2. **Full-bleed color/photo hero:** a duotone-treated real photograph (a Goldapples session) filling the entire hero at reduced opacity/dark overlay, headline and CTA in white/Champagne on top, gold accent rule or shape breaking the frame.
3. **Layered color-block hero:** an asymmetric stack of 2–3 overlapping color panels (Ink, Deep Gold, Champagne) behind/around the headline, creating depth without needing a photo — the "creative" option when photography doesn't fit a given page.
4. **Editorial masthead hero:** keep the current white-background epigraph-led approach *only* if paired with a much larger, bolder headline treatment, a stronger diagram motif (multi-color, animated), and a supporting color band directly beneath the fold — never the whole hero as flat white with a small thin-line graphic.

Headers on interior pages (the intro band at the top of Advisory/Academy/etc.) should also pick up a color-block or duotone-photo treatment rather than defaulting to the plain white `PageIntro` pattern from v1 on every page — vary it page to page the same way dark-section placement varies in §10.

---

## 8. Motion & Interaction

Unchanged from v1 — all micro-animation, scroll-effect, mouse-movement, and grain/particle rules still apply exactly as written. Two additions:

- **Marquee/ticker strips** (§4) scroll continuously at a slow, constant speed, pause on hover/focus, and stop entirely under `prefers-reduced-motion` (render as a static wrapped list instead).
- **Modals** (§6A) fade+scale in (~150ms, ease-out), trap focus, restore focus to the trigger on close, and respect `prefers-reduced-motion` by skipping the scale and just cross-fading.

---

## 9. Voice & Tone

Unchanged from v1, with one sharpened point for the TL;DR audience (v2): **lead every section with its shortest possible version of the point** (a single bold statement or stat) before any supporting paragraph — the paragraph is for the reader who wants more, the headline is for the reader who's skimming, and the modal/accordion is for the reader who wants everything.

---

## 10. Page-by-Page Structure Notes (v2 — more color, more variety)

Apply §2's "3–5 color changes per page" and §4's "vary the section shape" rules throughout. Updated per-page notes:

- **Home:** Hero (pick one of §7A's bolder patterns, not plain white) → Opening Belief (Champagne or Gold-tinted band, not white) → What We Do (white or Graphite panel) → Core Practice Areas (mixed-color card grid with custom icons, §7) → **Our Thinking** (Ink, frameworks teaser with bolder gold-filled diagram tiles) → Who We Work With (marquee/ticker tag strip on an Ink or Deep Gold band, not a static white tag list) → Featured Programmes (bento/mosaic grid mixing photo cards and text cards) → Work & Impact teaser (Gold or Champagne band with a pull-stat) → Why Goldapples (color-blocked stat row) → Final CTA (Ink or Deep Gold→Gold gradient). Aim for 5+ distinct color surfaces down the page, not two.
- **About:** Intro (photo-backed hero header) → Evolution (timeline on a Champagne band) → Philosophy (Ink, unchanged emphasis from v1) → What Makes Us Different (icon-led list, not bare numerals) → Founder (large duotone photo, color-blocked bio panel) → Our Work Covers (marquee tag strip) → Aspiration (Gold-tinted close).
- **Advisory / Academy / Development Communication / Frameworks:** color-blocked header (§7A) → tabs or accordion (§6A) for the area/programme list, each item icon-led → How We Work stepper on a tinted band → closing CTA (Ink or gradient).
- **Work & Impact:** color-blocked header → case-study cards as summaries with a "View Full Case Study" **modal** for the full Challenge/Approach/What Changed/Key Insight detail (§6A) → closing CTA.
- **Insights:** category filter as **tabs** rather than plain buttons (§6A) → card grid with placeholder imagery per category.
- **Contact:** stays the most restrained page (functional, form-first) but the intro column can still carry a duotone photo or color panel instead of plain white.

---

## 11. Accessibility & Responsive

Unchanged from v1 — AA contrast, mobile-first nav, 16px minimum body text, 44px tap targets, responsive serif scaling. **Intensifying color makes this section more load-bearing, not less** — every new color-blocked panel needs its text contrast checked against that specific background before shipping, not assumed from the palette table.

---

## 12. Do / Don't Summary (v2)

**Do:** color-blocked sections as a primary layout tool (Ink, Graphite, Deep Gold, Gold, Champagne all valid backgrounds), bold large serif headlines, real photography (duotone-treated) used generously as placeholders, a custom concept-specific line-icon system, varied section shapes (split-screen, bento, marquee, angled dividers), modals/tabs/accordions for progressive disclosure, in-palette gradients as a primary tool, a decluttered 6-item nav with a tabbed Services mega-menu, short skimmable lead lines before any paragraph.

**Don't:** off-palette or multi-hue gradients (still no blue/purple drift), colored text on colored backgrounds without a contrast check, gold/champagne body text below ~18px, rounded "SaaS" buttons, generic stock photography (real Goldapples photos only), decorative icon sets that aren't concept-specific, two strong-color sections stacked with no lighter section between them, motion that ignores `prefers-reduced-motion`, a plain centered-white hero as the default choice.
