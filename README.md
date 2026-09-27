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
npm run build      # production build into dist/ (needs no network access)
npm test           # unit tests (Karma + Jasmine)
```

## Where the content lives

```
src/app/core/data/site-content.ts   home page copy, contact details, nav, optional blocks
src/app/core/data/stories.ts        the seven story chapters and the story page's copy
src/app/core/data/images.ts         the pixel size of every photo in public/images
```

Nothing else needs editing to change wording, photographs or contact details.
The shapes are in `src/app/core/models/`.

**Read [CONTENT-TODO.md](CONTENT-TODO.md) before launch.** It opens with a
checklist of what the trust still needs to supply or confirm, plus photo
guidance and the safeguarding decision. **[COPY-CHANGES.md](COPY-CHANGES.md)**
lists every reworded sentence, old and new, for Fr. Sebastian to approve.

### Optional content, hidden until filled in

These fields are built, styled and tested, but empty. Each renders **nothing
at all** while empty: no heading, no gap.

| Field (in `site-content.ts`) | Shows as |
| --- | --- |
| `HOME_HERO.heroPhoto` | A real photo with the hero tree (set to the building). `style: 'background'` (current) fades it softly into the page behind the tree; `style: 'window'` sets it in an arch inside the tree's canopy, which suits a photo of people better. Remove it and the tree stands alone. |
| `ALUMNI` | "Where they are now". Only entries with `consentConfirmed: true` are shown. |
| `TEAM` | "Who looks after the boys". Roles without names are fine. |
| `NEEDS` | "What we need right now", inside Be part of the family, each with a WhatsApp link that opens with "I'd like to help with: *item*". |
| `UPDATES` | "Latest from Ammaveedu": the newest three, by `date`. |
| `SOCIAL_LINKS` | Icons in the footer. |
| `REGISTRATIONS` | A "Registrations" block in the footer: trust registration, 12A, 80G, and child care institution registration under the Juvenile Justice Act. |

### Adding a photograph

1. Put it in `public/images/`.
2. Add its width and height to `core/data/images.ts`.
3. Point the content at it, with meaningful `alt` text. Give it a `focalPoint`
   (a CSS `object-position` such as `'50% 25%'`) if faces sit near an edge.

The `img[appPhoto]` directive (`shared/directives/photo.directive.ts`) does the
rest: real `width`/`height` attributes, lazy loading, the focal point, and a
width cap so a cropped frame never enlarges a photo past its natural size.
With today's 500px-wide photos from 2011, that cap is what sets the size of the
"How we nurture" frames, the story teaser and Then & now.

## Structure

```
src/app/
  core/
    data/          site-content.ts, stories.ts, images.ts
    models/        content.models.ts, story.model.ts
    services/      ui.service.ts (the mobile drawer), seo.service.ts
    contact-links.ts  builds every mailto:, wa.me, tel: and Maps link
  shared/
    components/  logo, icon, plant, site-header, site-footer, contact-fab,
                 not-found-content, illustrations/ (guiding-path, watering)
    directives/  reveal.directive.ts, photo.directive.ts
  features/
    home/        hero, nurture, growth, team, story-teaser, alumni, updates,
                 family (with the needs list)
    story/       /stories (timeline), chapter/ (/stories/:slug),
                 chapter-visual, story-body
    not-found/   the 404 page
```

The home page is short and bright: the illustrated tree with a photo of the home
faded in behind it, what we give a child, how a boy grows up here, a taste of the story and
ways to join in. The footer doubles as the "Visit" section. The full history
lives on `/stories`, and each chapter also has its own page at
`/stories/<slug>` with previous/next links.

## Pages, routing and search

| Route | Page |
| --- | --- |
| `/` | Home |
| `/stories` | The whole story as a timeline, with a sticky chapter index |
| `/stories/<slug>` | One chapter, with the main navigation and "Chapter X of 7" |
| anything else | A friendly 404 page (signpost illustration, links to Home and Our story) |

An unknown chapter slug shows the same 404 content. GitHub Pages serves
`404.html` (a copy of `index.html`, made in the deploy workflow) for deep
links, and the app then shows the right page.

**Per-route metadata.** `core/services/seo.service.ts` sets each page's
`<title>`, description, `og:` tags and canonical URL. Chapter pages use
"*Chapter title* | The story of Ammaveedu", the chapter's first sentence as the
description, and the chapter's photo for link previews (the building when it
has none). URLs are made absolute from `<base href>`, so they are right under
the GitHub Pages sub-path. The 404 is marked `noindex`. Routes carry no
`title` of their own, so Angular's title strategy never overrides these.

**Anchor links.** The router scrolls to `#fragments` with `window.scrollTo`,
which ignores CSS `scroll-padding`, so `AppComponent` gives the
`ViewportScroller` an offset equal to everything marked `data-sticky` (the
header, and the chapter index on `/stories`).

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
| `sky` | `#A9D4EA` | One decorative photo frame |
| `ink` | `#23302A`, muted `#52605A` | Body text; secondary text |
| `mist` | `#CFE2D5` | Light text on sage |
| `clay` | `#B4572A` | Eyebrow labels (uppercase, 2px tracking, 15px bold) and focus ring. Cream or white backgrounds only |

**Type.** Headings use **Young Serif** (400), large and airy: hero 40px on
phones up to 76px on wide screens, section titles up to 54px (`.section-title`).
Body text uses **Nunito Sans** (400/600/700/800). Fallback stacks are kept in
`tailwind.config.js`.

**Fonts are self-hosted** in `public/fonts/` as WOFF2 (Latin and Latin
Extended subsets), declared with `@font-face` and `font-display: swap` in
`src/index.html`. Nunito Sans is a variable font, so one file covers weights
400 to 800. The two most-used files are preloaded. Both fonts are SIL Open
Font License; the licences sit beside the files. Nothing is fetched from
Google Fonts, and `ng build` no longer needs network access: it was checked
with all traffic sent to a dead proxy, which does fail the old build.

**Illustrations.** Flat inline-SVG drawings in the leaf, bark, peach and sun
tokens: the hero tree, with the photo of the home faded in behind it (a CSS
mask feathers the photo's edges into the cream; it is not a colour gradient); a grown-up guiding three boys from home along a path towards a tree,
one of them flying a kite (growth section); a grown-up watering sprouts with
two boys helping (family section); and a signpost with a sprout (404). The path
and watering drawings are each one `role="img"` with a label in
`site-content.ts`, and so is the hero tree, except in the window style, where
the tree becomes decoration around the photo (which has its own alt text). The 404 drawing is decorative. The figures are simple and not
portraits of anyone real.

**Shapes.** Pill buttons (`.btn` with `.btn-sage`, `.btn-peach`, `.btn-cream`,
`.btn-outline`); cards at 32px (`rounded-card`) and 40px (`rounded-card-lg`);
photos in soft frames: rounded 4:3 rectangles, circles, arch tops
(`rounded-arch`) and a leaf corner (`rounded-leaf-corner`), with a white border
(`.photo-frame`). Each chapter's frame is chosen so its photo fills it without
being enlarged. No heavy borders, no gradients, no emoji. Icons are inline SVG
(`shared/components/icon`).

**Contrast.** Checked against WCAG: ink on cream is about 13:1, muted on cream
6.2:1, clay on cream 4.5:1, mist on sage 5.6:1, sun on sage 5.3:1, ink on peach
7:1. Clay does not pass on sage-soft or peach-soft, so it isn't used there. On
the peach card, text is ink rather than muted or sage.

## Motion

All CSS, no animation library.

| Effect | Where |
| --- | --- |
| Hero copy rising in, staggered 0.15s | `.hero-rise` |
| Tree crown sways ±1.8° about the foot of the trunk, 6s (the tree on its own, when there is no hero photo) | `.tree-sway` |
| Hero, window style: the canopy and branches around the photo sway ±1° about the trunk, 7s | `.canopy-sway` |
| Sun pulses gently, 5s | `.sun-pulse` |
| Three leaves drift down and fade, 9s / 10s / 11s, staggered | `.leaf-fall`, `.leaf-fall-1`..`-3` |
| Bird flies across the hero (16s) with flapping wings (0.6s) | `.bird-fly`, `.bird-wing` |
| Hero badges, nurture photos, teaser and chapter photos float, offset | `.float`, `.float-1`..`-4` |
| Growth-stage plants spring up from the soil on reveal | `.plant-grow` |
| Timeline leaves sprout from the branch on reveal, then sway | `.leaf-sprout` |
| Story hero, and the home hero's background photo: Ken Burns, 1.02→1.14, 18s alternate | `.ken-burns` |
| Leaves drifting beside the story hero photo | `.leaf-drift` |
| Guiding path: figures bob as they walk (0.9s, offset), path dashes move forward (2.4s), pointing arm lifts (3s) | `.walk-bob`, `.path-dash`, `.point-arm` |
| Watering: can tips (4s), four drops fall (1.6s, staggered), three sprouts sway (4s, offset) | `.can-tip`, `.drip`, `.sprout-sway` |
| Scene life in both drawings: clouds drift (14s), the kite dances (4s), butterflies flutter (0.35s) and wander (7s), the second boy's can tips (3.2s) | `.cloud-drift`, `.kite-fly`, `.butterfly-wing`, `.bf-drift`, `.can-tip-small` |
| Floating contact button fades in and out (0.25s) | `.fab`, `.fab-hidden` |
| Scroll reveals | `shared/directives/reveal.directive.ts` |

**Every keyframe animation and transition-in sits inside `@media
(prefers-reduced-motion: no-preference)`**, including the "hidden before
reveal" states of the plants and leaves. A visitor who has asked for less
motion gets a completely still page, and nothing on it is hidden; smooth
scrolling is switched off too, and the contact button appears and disappears
instantly. Checked under emulation on home, `/stories`, a chapter and the 404:
`document.getAnimations()` is empty and every reveal renders at opacity 1.

## Accessibility

- 3px clay focus ring on `:focus-visible`, turning sun yellow inside sage
  sections (`.on-dark`)
- Meaningful `alt` on every photograph; the illustrations are labelled
  `role="img"`; icons, plants, leaves and the branch are `aria-hidden`
- Real links and buttons throughout. Each family card has one main button and
  small "or" links for the other two channels, each naming its card for
  screen readers
- Tap targets of at least 44×44px in the footer, on chapter pages and in the
  chapter index
- The chapter index marks the chapter being read with
  `aria-current="location"`
- The floating contact button moves focus into its menu when opened, back to
  itself on Escape or when closed, and closes on a click elsewhere (leaving
  focus where the visitor clicked). It steps aside (`inert`) wherever contact
  options are already on screen: the hero, Be part of the family and the
  footer, marked `data-hides-fab`. On phones it docks into the header bar, so
  it never covers text or buttons.
- Phones: the headline and main button show without scrolling (checked at
  390×844), buttons go full width, pillars become rows, growth stages a 2×2
  grid, and the timeline branch moves to the left edge
- Checked at 390, 768 and 1280px on home, `/stories`, a chapter and the 404
  (and the home hero at 1024px too): no horizontal scroll, all images load,
  none is enlarged past its natural size

## Images

- Every `<img>` has its real `width` and `height`, from `core/data/images.ts`.
- The first visible image on each route (the hero photo, the story hero, a
  chapter's lead picture) loads eagerly with `fetchpriority="high"`; all others
  are lazy.
- **NgOptimizedImage isn't used.** It works with a relative `src` under the
  GitHub Pages base href, but it adds little here: with no image CDN or loader,
  it can't generate a `srcset`, and its checks warn in development about
  aspect ratios whenever a photo is cropped into a frame with
  `object-fit: cover`, which is most of them. Its useful parts (width and
  height, lazy by default, a priority hint for the first image) are done by
  `photo.directive.ts`. If the trust moves photos to an image CDN, switching is
  worth revisiting.

## Maintenance

**Angular upgrade (recommended, separate work).** The site is on Angular 18.
Angular releases a major version every six months and supports each for 18
months, so plan to upgrade version by version (`ng update @angular/core@19
@angular/cli@19`, then 20, and so on), running the build and tests at each
step. It was deliberately left out of this redesign.

`@angular/animations` and `@angular/forms` were removed: nothing uses them.

## Safety rules

No payment form, no bank or UPI details anywhere on the site. Giving goes
through Fr. Sebastian directly — email, WhatsApp or phone — so a donor always
knows where the details came from. The Be-part-of-the-family section says so
explicitly, and the note stays visible under its title.
