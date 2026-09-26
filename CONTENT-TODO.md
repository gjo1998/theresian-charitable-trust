# Content to confirm with the trust

Facts on this site come from the trust's own published material and public
directory listings. The items below could **not** be verified from a public
source, or need a decision from the trust, before launch.

Content lives in [`src/app/core/data/site-content.ts`](src/app/core/data/site-content.ts)
and [`src/app/core/data/stories.ts`](src/app/core/data/stories.ts).

## 1. Phone number — supplied directly, now live

`TRUST.phone` is **+91 94466 81395**, provided for the site rather than found
online. `phoneVerified` is `true`, so it appears in the Visit section, the
Celebrate-with-us card, the footer and the floating contact button.

Everything is built from `phoneE164` (`919446681395`): `tel:+919446681395`,
`https://wa.me/919446681395`, and the prefilled text in `whatsappMessage`.

Worth confirming: that this number is on WhatsApp, and that whoever answers it
is happy to be the public contact point.

## 2. The site takes no money — by design

There is no payment form and no bank, UPI or IFSC detail anywhere. Every route
in **Be part of the family** ends at Fr. Sebastian: an email with the subject
and opening line written, WhatsApp, or the phone. The section says so in plain
words, so a donor knows to trust only details he gives them directly.

If online giving is wanted later, the right move is a real payment provider
(Razorpay, Instamojo, a UPI QR the trust generates itself), not a form here.

## 3. Registration number and 80G / 12A status

No registration number appears on the site, because none could be confirmed.

Donors in India will ask whether gifts are 80G-deductible. If the trust holds
80G and 12A registration, that is worth adding and displaying.

## 4. Founding year — two dates in circulation

The trust's own account says Fr. Sebastian received permission to leave his
diocese in **2006** and began that year; a public NGO directory lists the
organisation as established **2010**, likely the year of formal registration.
The site uses 2006. Confirm which the trust wants to lead with.

## 5. Two figures are fifteen years old

The trust's published account dates from **November 2011**. The redesign dropped
the statistics block, but two numbers from it still appear as fact:

- **27 boys** — the hero paragraph, the Welcome section, chapter 5
- **around a hundred families** receiving rice — the nurture cards, chapter 6

Also from 2011: the free nursery taking six children from neighbouring families.
Confirm all three and update `site-content.ts` and `stories.ts`.

## 6. Photographs — and a safeguarding decision

Seven photographs in `public/images/`, all stored locally (not hotlinked). Two
are current and high resolution; the rest date from 2011.

| File | Shows | Used in |
| --- | --- | --- |
| `ammaveedu-today.jpg` | **Current, 953×960.** Fr. Sebastian with the boys | Hero slide 1, Moments, chapter 5 |
| `ammaveedu-building.webp` | **Current, 1360×1020.** The building and its sign | Hero slide 2, Moments, story hero, chapter 7 |
| `ammaveedu-boys.jpg` | The boys, 2011 | Welcome, Belonging card, Moments |
| `children-meal.jpg` | Children at a meal, 2011 | Welcome, Learning card, Moments |
| `rice-delivery.jpg` | Rice arriving, 2011 | Nourishment card, Moments, chapter 6 |
| `home-visit.jpg` | Visiting a neighbour, 2011 | Wellbeing card, Moments, chapter 2 |
| `ammaveedu-house.jpg` | The first house, 2011 | Story teaser, Moments, chapter 4 |

**Safeguarding.** Several photographs show identifiable children in the trust's
care, and the site is public and search-indexable. They are already public on
the trust's own channels, but publishing them on an official site is a separate
decision and the trust should make it deliberately. Any photograph can be
swapped or dropped by editing `site-content.ts`; chapters accept a `coverQuote`
instead of an `image`, and chapters 1 and 3 already use one.

**Resolution.** The five 2011 files are around 500px wide. They hold up at card
and marquee size, but more current photographs would let them be retired.

## 7. The story chapters — check the retelling

`stories.ts` holds seven chapters, condensed from the trust's own account and
retold warmly: the hardships are acknowledged without dwelling on them.

Deliberate omissions, all of which the original account included: the drug
detail around the first boy, the rotten oranges, the descriptions of illness,
and the word "slum". **The first boy is not named** — he is a real person who
did not choose to have his childhood published.

Still named, because they are adults who helped: Fr. James, Mr. Jolly and
Mathew Kuravilla. Fr. Sebastian should read the chapters and confirm he is happy
with both the retelling and those names.

## 8. Address — two PIN codes

The site uses **686016** for Thellakom P.O., taken from the trust's own blog.
The Google Maps listing embedded in the Visit section shows **686630** for the
same place. Worth checking which is correct for post.
