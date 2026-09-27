# Ammaveedu — The Theresian Charitable Trust

Website for **Ammaveedu** (അമ്മവീട്, "mother's house"), a family home in
Thellakom P.O., Ettumanoor, Kottayam, Kerala, where 27 boys grow up together as
brothers. Run by The Theresian Charitable Trust.

Built with **Angular 18** (standalone components, signals) and **Tailwind CSS**.
Deployed to GitHub Pages on every push to `main`.

## Running it

```bash
npm install
npm start          # dev server on http://localhost:4200
npm run build      # production build into dist/
npm test           # unit tests (Karma + Jasmine)
```

## Where the content lives

```
src/app/core/data/site-content.ts   home page copy, contact details, nav
src/app/core/data/stories.ts        the seven story chapters
```

Nothing else needs editing to change wording, photographs or contact details.
The shapes are in `src/app/core/models/`.

**Read [CONTENT-TODO.md](CONTENT-TODO.md) before launch** — it lists the facts
that could not be verified from a public source, the photograph provenance, and
the safeguarding decision the trust needs to make.

## Structure

```
src/app/
  core/
    data/          site-content.ts, stories.ts
    models/        content.models.ts, story.model.ts
    services/      ui.service.ts  (the mobile drawer)
    contact-links.ts  builds every mailto:, wa.me, tel: and Maps link
  shared/
    components/  logo, icon, plant, site-header, site-footer, contact-fab,
                 illustrations/ (guiding-path, watering)
    directives/  reveal.directive.ts
  features/
    home/        hero, nurture, growth, story-teaser, family
    story/       /stories (timeline), chapter/ (/stories/:slug),
                 chapter-visual, story-body
```

The home page is short and bright: the growing tree, what we give a child, how
a boy grows up here, a taste of the story and ways to join in. The footer
doubles as the "Visit" section. The full history lives on `/stories`, and each
chapter also has its own page at `/stories/<slug>` with previous/next links.

## Design system

"Growing Tree": warm cream pages, deep sage for headings and dark sections,
peach for the main call to action.

| Token | Value | Use |
| --- | --- | --- |
| `cream` | `#FBF7EE` | Page background (white `#FFFFFF` for cards) |
| `sage` | `#2F5D46`, dark `#1D3E2E`, soft `#DDEBDF` | Headings, dark sections, sage buttons (white text); hover; soft cards and chips |
| `leaf-600/500/400/300` | `#4F8A62` `#6AA37A` `#7FB38C` `#9FD0AD` | Illustrations only |
| `peach` | `#F4A77C`, soft `#FBE6D6` | Primary CTA (ink text on it); soft cards |
| `sun` | `#FBD46B`, soft `#FFF1C9` | Sun, fruit, labels and focus ring on sage; soft cards |
| `bark` / `ground` | `#8A5A3B` / `#E6DCC4` | Trunks, the story branch; the ground |
| `sky` | `#A9D4EA` | One decorative photo ring |
| `ink` | `#23302A`, muted `#52605A` | Body text; secondary text |
| `mist` | `#CFE2D5` | Light text on sage |
| `clay` | `#B4572A` | Eyebrow labels (uppercase, 2px tracking, 15px bold) and focus ring. Cream or white backgrounds only |

**Type.** Headings use **Young Serif** (400), large and airy: hero 40px on
phones up to 76px on wide screens, section titles up to 54px (`.section-title`).
Body text uses **Nunito Sans** (400/600/700/800). Both come from Google Fonts.

**Illustrations.** Three flat inline-SVG drawings in the leaf, bark, peach and
sun tokens: the hero tree; a grown-up guiding three boys from home along a
path towards a tree, one of them flying a kite (growth section, beside the
intro); and a grown-up watering sprouts with two boys helping (family section,
beside the title on desktop). Each is one `role="img"` with its label in `site-content.ts`.
The figures are simple and not portraits of anyone real.

**Shapes.** Pill buttons (`.btn` with `.btn-sage`, `.btn-peach`, `.btn-cream`,
`.btn-outline`); cards at 32px (`rounded-card`) and 40px (`rounded-card-lg`);
photos in soft frames: circles, arch tops (`rounded-arch`) and one leaf corner
(`rounded-leaf-corner`), with a white border (`.photo-frame`). No heavy borders,
no gradients, no emoji. Icons are inline SVG (`shared/components/icon`).

**Contrast.** Checked against WCAG: ink on cream is about 13:1, muted on cream
6.2:1, clay on cream 4.5:1, mist on sage 5.6:1, sun on sage 5.3:1, ink on peach
7:1. Clay does not pass on sage-soft or peach-soft, so it isn't used there. On
the peach card, text is ink rather than muted or sage.

## Motion

All CSS, no animation library.

| Effect | Where |
| --- | --- |
| Hero copy rising in, staggered 0.15s | `.hero-rise` |
| Tree crown sways ±1.8° about the foot of the trunk, 6s | `.tree-sway` |
| Sun pulses gently, 5s | `.sun-pulse` |
| Three leaves drift down and fade, 9s / 10s / 11s, staggered | `.leaf-fall`, `.leaf-fall-1`..`-3` |
| Bird flies across the hero (16s) with flapping wings (0.6s) | `.bird-fly`, `.bird-wing` |
| Hero badges, nurture photos, teaser and chapter photos float, offset | `.float`, `.float-1`..`-4` |
| Growth-stage plants spring up from the soil on reveal | `.plant-grow` |
| Timeline leaves sprout from the branch on reveal, then sway | `.leaf-sprout` |
| Story hero Ken Burns, 1.02→1.14, 18s alternate | `.ken-burns` |
| Leaves drifting beside the story hero photo | `.leaf-drift` |
| Guiding path: figures bob as they walk (0.9s, offset), path dashes move forward (2.4s), pointing arm lifts (3s) | `.walk-bob`, `.path-dash`, `.point-arm` |
| Watering: can tips (4s), four drops fall (1.6s, staggered), three sprouts sway (4s, offset) | `.can-tip`, `.drip`, `.sprout-sway` |
| Scene life in both drawings: clouds drift (14s), the kite dances (4s), butterflies flutter (0.35s) and wander (7s), the second boy's can tips (3.2s) | `.cloud-drift`, `.kite-fly`, `.butterfly-wing`, `.bf-drift`, `.can-tip-small` |
| Scroll reveals | `shared/directives/reveal.directive.ts` |

**Every keyframe animation sits inside `@media (prefers-reduced-motion:
no-preference)`**, including the "hidden before reveal" states of the plants
and leaves. A visitor who has asked for less motion gets a completely still
page, and nothing on it is hidden. Checked under emulation at 1280px and 390px:
`document.getAnimations()` is empty and every reveal renders at opacity 1.

## Accessibility

- 3px clay focus ring on `:focus-visible`, turning sun yellow inside sage
  sections (`.on-dark`)
- Meaningful `alt` on every photograph; the hero tree is one labelled
  `role="img"`; icons, plants, leaves and the branch are `aria-hidden`
- Real links and buttons throughout; the family cards are whole-card links
- Single column on phones: the tree sits above the headline, buttons go full
  width, pillars become rows, growth stages a 2×2 grid, and the timeline branch
  moves to the left edge
- Checked at 390, 560, 980 and 1280px on home, story and chapter pages: no
  horizontal overflow, all images load

## Safety rules

No payment form, no bank or UPI details anywhere on the site. Giving goes
through Fr. Sebastian directly — email, WhatsApp or phone — so a donor always
knows where the details came from. The Be-part-of-the-family section says so
explicitly, and the note stays visible under its title.
