# Content to confirm with the trust

Everything on the site came from the trust's own published material and public
directory listings. The items below could **not** be verified from a public
source and need someone at the trust to confirm them before the site goes live.

All of them live in one file: [`src/app/core/data/site-content.ts`](src/app/core/data/site-content.ts).

## 1. Phone number — supplied directly, now live

`TRUST.phone` is **+91 94466 81395**, provided for the site rather than found
online (it is not the number the reference mock-up carried, which has been
discarded). `phoneVerified` is `true`, so it now appears in the announcement bar,
the contact section, the volunteer panel, the footer, and the floating
WhatsApp/call button.

It drives three link types, all built from `phoneE164` (`919446681395`):
`tel:+919446681395`, `https://wa.me/919446681395`, and the prefilled WhatsApp
message in `whatsappMessage`.

Worth confirming: that this number is on WhatsApp, and that whoever answers it is
happy to be the public contact point for the site.

## 2. The site takes no money — by design

There is no donation feature and no payment form. Every "Donate" and "Support"
button on the site scrolls to **Get Involved**, where the three tabs each end at
Fr. Sebastian: an email with the subject and opening line already written,
WhatsApp, or the phone.

No bank account, IFSC or UPI handle is published anywhere. That is deliberate —
an unverified account number on a charity page is how donation fraud works, and
a donor who asks Fr. Sebastian directly knows where the details came from.

If the trust later wants online giving, the right move is a real payment
provider (Razorpay, Instamojo, a UPI QR the trust generates itself), not a form
on this site.

## 3. Registration number and 80G / 12A status

The reference mock-up showed "Reg No: 184/IV/06 (Ettumanoor Sub-Registrar)". This
could not be confirmed, so no registration number appears on the site; it says
only "a registered charitable trust", which the public listings do support.

Donors in India will ask whether gifts are 80G-deductible. If the trust holds 80G
and 12A registration, add the numbers to `TrustProfile` and display them — it
measurably improves donations.

## 4. Founding year — two dates in circulation

The trust's own account says Fr. Sebastian received permission to leave his
diocese in **2006** and started Ammaveedu that year; a public NGO directory lists
the organisation as established **2010**, which is likely the year of formal
registration. The site uses 2006 and describes it as when the work began. Confirm
which date the trust wants to lead with.

## 5. Figures that need re-checking — the source material is from 2011

This is the most important item on the list. **The trust's own published account
dates from November 2011.** Every number on the site comes from it:

- **27 boys at Ammaveedu**
- **~100 families receiving 5kg of rice weekly** (described there as "3 years on"
  from when the distribution began)
- **Six additional nursery children** beyond the Ammaveedu residents

The site does not claim these are current — the impact section says "figures as
stated by the trust in its own published account" — but they are fifteen years
old and almost certainly wrong by now. Get current numbers before launch and
update `STATS` and `PROGRAMS` in `site-content.ts`.

The founding date, the founder's story, the objectives and the programme
descriptions are not time-sensitive in the same way.

## 6. Photographs — the trust's own, and a safeguarding decision

All five photographs in `public/images/` were taken from the trust's own
published material and are stored locally (not hotlinked). They date from 2011.

| File | Shows |
| --- | --- |
| `ammaveedu-boys.jpg` | The boys of Ammaveedu with Fr. Sebastian — hero background, Ammaveedu card, Chapter 4 |
| `ammaveedu-house.jpg` | The house at Thellakom — About section, Chapter 3 |
| `children-meal.jpg` | Children over a meal — Nursery card |
| `rice-delivery.jpg` | A rice sack being carried in — Food & Clothing card, Give tab, Chapter 5 |
| `home-visit.jpg` | A home visit to an elderly man — Health card, Chapter 2 |

Four further photographs have been removed on request and deleted from the
project: a tarpaulin shelter, homes along a canal, children in a colony street,
and a woman holding her week's rice.

Chapter 1 now carries **no photograph at all**. It describes a colony near Cochin
in the 1990s, and no photograph of that place exists in the set — so rather than
pair it with an unrelated image, the chapter leads with its own pull-quote on a
typographic cover. `image` is optional on a `Story`; set `coverQuote` instead.

### No photograph from Google Maps

A newer photograph of Ammaveedu could not be taken from the Google Maps listing.
Maps place photos are served only through the Places API (which needs a billed
API key), and they belong to whoever contributed them — they are not licensed
for reuse on the trust's own website. Instead the contact section now embeds the
live Google map of the location, which is permitted and gives visitors
directions.

The best fix remains a current photograph taken by the trust. Drop it in
`public/images/` and point `houseImage` in `about.component.ts` at it.

Two things for the trust to decide:

1. **Safeguarding.** Several photographs show identifiable children in the
   trust's care. They are already public on the trust's own channels, but
   publishing them again on an official site is a separate decision, and the
   trust should make it deliberately. Any image can be swapped or dropped by
   editing `PROGRAMS` in `site-content.ts` and `houseImage` in
   `about.component.ts`.
2. **Resolution.** The originals are only 500px wide. They are fine at the sizes
   used here and under the hero's gradient, but newer, larger photographs would
   noticeably improve the site — particularly the hero.

## 7. The story chapters — check the retelling

`src/app/core/data/stories.ts` holds five chapters covering the history of
Ammaveedu and of Fr. Sebastian, from the seminary Social Action course through to
the weekly rice deliveries. They are **condensed from the trust's own account**,
published November 2011, and three of the five keep Fr. Sebastian's first-person
voice — the article page states that above each one.

Light editing was needed (British spelling, sentence breaks, a few connecting
phrases). Nothing was invented, but Fr. Sebastian should read them and confirm he
is happy with the retelling and with the named people who appear: Mathew
Kuravilla, Fr. James, Mr. Jolly and the boy Rajeev. **Rajeev's story includes
details about his family and his neighbours' use of him** — worth a deliberate
decision about whether to keep his real name on a public site.

Chapters live at `/stories/<slug>` and are listed on the home page under
"Our Story".

## 8. The contact form still has no backend

Get Involved no longer contains a form — every action there opens the visitor's
own email, WhatsApp or phone, so those all work today with nothing to host.

The **contact section** at the bottom of the page still has a message form. It
validates and confirms to the visitor, but there is no backend, so nothing is
delivered; alongside it is a "send from my email instead" button that does work.
Either wire the form to a real endpoint (Formspree, a small API, the trust's own
mail service) or drop it and leave the direct contact buttons.

## Sources used

The trust's own blog is the primary source for the copy, the founder's story, the
objectives, the figures and all five photographs. Its posts date from
November 2011 — see item 5.


- Ammaveedu / Theresian Trust blog — <https://ammaveedu-blog.tumblr.com/>
- Give.do NGO listing — <https://give.do/discover/14WY/theresian-charitable-trust/>
- Ammaveedu Orphanage on Facebook — <https://www.facebook.com/Ammaveedu.Orphanage/>
- Justdial listing, Ammaveedu Thellakom — <https://www.justdial.com/Kottayam/Ammaveedu-Thellakom/9999PX481-X481-230223203911-B9Z7_BZDET>
