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
    data/        site-content.ts, stories.ts
    models/      content.models.ts, story.model.ts
    services/    ui.service.ts  (the mobile drawer)
  shared/
    components/  logo, site-header, site-footer, contact-fab
    directives/  reveal.directive.ts
  features/
    home/        hero, welcome, nurture, moments, story-teaser, family, visit
    story/       the full story at /stories
```

The home page is short, warm and photo-led. The full history lives on `/stories`
for anyone who wants to read it.

## Design system

| | |
| --- | --- |
| Leaf | `#1F7A4D`, deep `#135437`, soft `#E3F3E9` |
| Mango | `#FFC53D`, soft `#FFF4D1` |
| Hibiscus | `#E8456A`, soft `#FDE4EA` |
| Sky | `#3E9FD6`, soft `#E3F3FB` |
| Ink | `#1E2A3F`, soft `#4D5A70` |

Headings use **Baloo Chettan 2**, which carries Malayalam as well as Latin;
body text uses **Nunito Sans**. Buttons are pills; cards use a 26px radius
(`rounded-card`) and no heavy borders. Mango with ink text is the primary
action, leaf with white the secondary, and a white outline for ghost buttons on
photographs.

## Motion

All CSS, no animation library.

| Effect | Where |
| --- | --- |
| Hero slideshow — 7s crossfade, 1.6s fade, Ken Burns 1.02→1.14 over 9s | `hero.component.ts`, `.slide`, `kenBurns` |
| Hero copy rising in, staggered 0.15s | `.hero-rise` |
| Welcome photos floating, "27 brothers" badge wobbling | `.float-slow`, `.float-slow-late`, `.wobble` |
| Nurture photos breathing, each offset | `.breathe`, `.breathe-1`..`-4` |
| Moments marquee — 60s, duplicated track, pauses on hover/focus | `.marquee`, `.marquee-track` |
| Scroll reveals | `shared/directives/reveal.directive.ts` |
| Story hero slow zoom | `.story-zoom` |

**Every keyframe animation sits inside `@media (prefers-reduced-motion:
no-preference)`**, so a visitor who has asked for less motion gets a completely
still page rather than a slowed-down one. The hero slideshow also stops
advancing. Verified under emulation: every animation reports `none`, hero copy
sits at opacity 1, and all reveals render visible.

## Accessibility

- 3px hibiscus focus ring (`#E8456A`) on `:focus-visible`, verified by tabbing
- Meaningful `alt` on every photograph; decorative hero layers are `aria-hidden`
- Slideshow dots are real buttons with `aria-label` and `aria-current`; the
  caption is `aria-live="polite"`
- Grids collapse at 980px and 560px; buttons go full width on small phones
- Checked at 1280px and 390px: no horizontal overflow, all images load

## Safety rules

No payment form, no bank or UPI details anywhere on the site. Giving goes
through Fr. Sebastian directly — email, WhatsApp or phone — so a donor always
knows where the details came from. The Be-part-of-the-family section says so
explicitly.
