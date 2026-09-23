# The Theresian Charitable Trust (Ammaveedu)

Website for The Theresian Charitable Trust, which runs **Ammaveedu** — a
residential home for boys — together with a free nursery and relief work at
Thellakom P.O., Ettumanoor, Kottayam, Kerala.

Built with **Angular 18** (standalone components, signals) and **Tailwind CSS**.

## Running it

```bash
npm install
npm start          # dev server on http://localhost:4200
npm run build      # production build into dist/
npm test           # unit tests (Karma + Jasmine)
```

## Where the content lives

All site copy is in one typed file:

```
src/app/core/data/site-content.ts
```

Nothing else needs editing to change text, programmes, statistics, contact
details or navigation. The shapes are defined in
`src/app/core/models/content.models.ts`.

**Read [CONTENT-TODO.md](CONTENT-TODO.md) before launch** — it lists the handful
of facts (phone number, bank details, registration number) that could not be
verified from a public source and are currently suppressed in the UI rather than
guessed at.

## Structure

```
src/app/
  core/
    data/site-content.ts        all editable copy
    models/content.models.ts    types for that copy
    services/ui.service.ts      modals, mobile drawer, toast (signals)
  shared/components/
    announcement-bar/           top contact strip
    site-header/                sticky nav + mobile drawer
    site-footer/
    program-modal/              programme detail dialog
    toast/
  features/
    home/
      home.component.ts         composes the page
      sections/
        hero/ about/ programs/ stories/ objectives/ impact/
        get-involved/ contact/
    story/                      full article page at /stories/:slug
```

## The story section

`src/app/core/data/stories.ts` holds the history of Ammaveedu as five numbered
chapters, condensed from the trust's own published account. The home page lists
them under "Our Story"; each opens a full article at `/stories/<slug>` with
previous/next navigation. Adding a chapter means adding one entry to that array —
the list, the article page and the navigation all follow from `order` and `slug`.

Each section is a standalone `OnPush` component that reads from
`site-content.ts`, so sections can be reordered or dropped from
`home.component.ts` without touching anything else.

## Motion

Animation is deliberately restrained and entirely CSS-driven; there is no
animation library.

| Effect | Where it lives |
| --- | --- |
| Scroll reveal (fade up, optional stagger) | `shared/directives/reveal.directive.ts` — put `appReveal` on anything, `[appReveal]="90"` to delay |
| Counting statistics | `shared/directives/count-up.directive.ts` — animates only the digits, so "~100" and "20+" keep their punctuation |
| Slow hero zoom | `.hero-bg::before` in `styles.scss`, a GPU `transform: scale()` on its own layer |
| Staggered hero copy | `.hero-rise` |
| Card lift on hover | `.lift` |
| Nav underline + active section | `.nav-link` plus the IntersectionObserver in `site-header.component.ts` |
| Header shrink and shadow on scroll | `scrolled` signal in the header |

Both directives observe with `IntersectionObserver` **outside the Angular zone**,
so scrolling never triggers change detection, and each unobserves its element
once it has fired.

**Reduced motion is honoured.** Both directives check
`prefers-reduced-motion` and simply apply the finished state, and a media query
at the foot of `styles.scss` disables every transition and animation site-wide.
The scroll-spy is the one piece that keeps working either way, since it moves no
pixels of its own.

## Design notes

The palette and layout follow the reference mock-up: emerald green for the
trust's identity, amber for calls to action, slate navy for depth. The Tailwind
theme extends these as `emeraldTrust`, `amberGold` and `slateNavy` in
`tailwind.config.js`. Headings use Outfit; body text uses Plus Jakarta Sans.

Two substantive departures from the mock-up, both deliberate:

1. **No payment feature at all.** The mock-up had a fake checkout that produced a
   "receipt". For a real charity that invites donors to believe money moved when
   none did. Every Donate/Support button now scrolls to Get Involved.
2. **No unverified financial or registration details.** See CONTENT-TODO.md.

## How giving works

There is nothing to host and nothing to process. Get Involved has three tabs —
Give, Volunteer, Partner — and each one ends at Fr. Sebastian directly:

- **Email** with the subject and opening line already written (`mailto:`)
- **WhatsApp** with a prefilled message (`wa.me`)
- **Phone** (`tel:`)

On the Volunteer tab the role picker writes the chosen interest into both the
email and the WhatsApp message. All of it is built from `phoneE164` and `email`
in `site-content.ts`, and the phone options only render while `phoneVerified` is
true.

The contact section at the foot of the page still has a message form with no
backend — see CONTENT-TODO.md item 8.
