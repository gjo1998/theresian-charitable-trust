# Content to confirm with the trust

Facts on this site come from the trust's own published material and public
directory listings. The items below could **not** be verified from a public
source, or need a decision from the trust, before launch.

Content lives in [`src/app/core/data/site-content.ts`](src/app/core/data/site-content.ts)
and [`src/app/core/data/stories.ts`](src/app/core/data/stories.ts). Wording
changes awaiting approval are listed separately in
[COPY-CHANGES.md](COPY-CHANGES.md).

## Checklist for the trust

Tick each one off as the answer arrives; the section below each says where it
goes.

**Figures and facts**

- [ ] **How many boys live at Ammaveedu today?** The site says 27, from 2011. → `TRUST.boysAtHome` and chapter 5 (§5)
- [ ] **How many families get rice on the weekly round?** The site says "around a hundred", from 2011. → Nourishment pillar and chapter 6 (§5)
- [ ] **How many children are in the free nursery, and how many come from neighbouring families?** 2011 said six from neighbours. (§5)
- [ ] **Which PIN code is right for post: 686016 or 686630?** → `TRUST.address.pin` (§8)
- [ ] **Which founding year to lead with: 2006 (when Fr. Sebastian began) or 2010 (the directory listing)?** → `TRUST.foundedYear` (§4)
- [ ] **All registration numbers** (trust registration, 12A, 80G, and the child care institution registration under the Juvenile Justice Act) → `REGISTRATIONS` (§3)

**New content, all optional; nothing shows until it is filled in**

- [ ] **Two or three alumni stories, each with written consent** → `ALUMNI` (§10)
- [ ] **Team roles** (names optional) → `TEAM` (§10)
- [ ] **A current needs list**, e.g. school supplies before term starts → `NEEDS` (§10)
- [ ] **Social media links** → `SOCIAL_LINKS` (§10). Facebook is in (confirmed 2026-09-27); add Instagram or YouTube if the trust has them.
- [ ] **News updates**, if the trust wants to post them → `UPDATES` (§10)
- [ ] **5 to 10 new high-resolution photographs** (§6, with guidance)

**Wording to approve**

- [ ] Every change in [COPY-CHANGES.md](COPY-CHANGES.md)
- [ ] The retelling of the seven chapters, and the adults named in them (§7)
- [ ] The new claims listed in §9

## 1. Phone number — supplied directly, now live

`TRUST.phone` is **+91 94466 81395**, provided for the site rather than found
online. `phoneVerified` is `true`, so it appears on all three family cards, in
the footer (which is also the Visit section) and on the floating contact button.

Everything is built from `phoneE164` (`919446681395`): `tel:+919446681395`,
`https://wa.me/919446681395`, and the prefilled messages.

Worth confirming: that this number is on WhatsApp, and that whoever answers it
is happy to be the public contact point.

## 2. The site takes no money — by design

There is no payment form and no bank, UPI or IFSC detail anywhere. Every route
in **Be part of the family** ends at Fr. Sebastian: an email with the subject
and opening line written, WhatsApp, or the phone. The section says so in plain
words, so a donor knows to trust only details he gives them directly.

If online giving is wanted later, the right move is a real payment provider
(Razorpay, Instamojo, a UPI QR the trust generates itself), not a form here.

## 3. Registrations — the fields are ready, all empty

No registration number appears on the site, because none could be confirmed.
`REGISTRATIONS` in `site-content.ts` has four optional fields:

| Field | What it is |
| --- | --- |
| `trustRegistration` | The trust's own registration number |
| `section12A` | 12A registration |
| `section80G` | 80G registration: donors in India will ask whether gifts are deductible |
| `jjActCci` | Registration as a child care institution under the Juvenile Justice Act |

Each one appears in a small "Registrations" block in the footer as soon as it
is filled in. While all four are empty, the block doesn't appear at all.

## 4. Founding year — two dates in circulation

The trust's own account says Fr. Sebastian received permission to leave his
diocese in **2006** and began that year; a public NGO directory lists the
organisation as established **2010**, likely the year of formal registration.
The site uses 2006, in the hero sentence ("Fr. Sebastian has run it since
2006"), the "Growing since" badge and the story page. Confirm which the trust
wants to lead with.

## 5. Figures from 2011

The trust's published account dates from **November 2011**. These figures
still appear as fact:

- **27 boys**: `TRUST.boysAtHome`, used in the hero badge ("27 brothers under
  one roof"), the "Today" caption in Then & now and the page description for
  search engines; chapter 5 also says it in words (`stories.ts`)
- **around a hundred families** receiving rice: the Nourishment pillar and
  chapter 6
- **the free nursery**: 2011 said it took six children from neighbouring
  families. The site doesn't give a number, but confirm the nursery still runs.

## 6. Photographs — and a safeguarding decision

Seven photographs in `public/images/`, all stored locally (not hotlinked). Two
are current and high resolution; the rest date from 2011.

| File | Shows | Used in |
| --- | --- | --- |
| `ammaveedu-today.jpg` | **Current, 953×960.** Fr. Sebastian with the boys | Chapter 5 |
| `ammaveedu-building.webp` | **Current, 1360×1020.** The building and its sign | Home hero, home story teaser, story hero, chapter 7, Then & now |
| `ammaveedu-boys.jpg` | The boys, 2011 (500×237) | Belonging pillar |
| `children-meal.jpg` | Children at a meal, 2011 (500×288) | Learning pillar, chapter 6 (second photo) |
| `rice-delivery.jpg` | Rice arriving, 2011 (500×400) | Nourishment pillar, chapter 6 |
| `home-visit.jpg` | Visiting a neighbour, 2011 (500×375) | Wellbeing pillar, chapter 2 |
| `ammaveedu-house.jpg` | The first house, 2011 (500×244) | Home story teaser, chapter 4, Then & now |

**Safeguarding.** Several photographs show identifiable children in the trust's
care, and the site is public and search-indexable. They are already public on
the trust's own channels, but publishing them on an official site is a separate
decision and the trust should make it deliberately. Any photograph can be
swapped or dropped by editing the data files; chapters accept a `coverQuote`
instead of an `image`, and chapters 1 and 3 already use one.

**Gallery photos.** Eight recent photos in `public/images/gallery/` came from
the trust's Facebook page (added 2026-09-30). Several show the boys' faces
clearly; the same safeguarding decision applies to them.

**Resolution.** The five 2011 files are only 500px wide. The site never
stretches a photo past its natural size, so these five set the size of the
"How we nurture" frames, the story teaser and Then & now. Better photographs
would let those frames grow.

### New photographs: what would help most

Five to ten new photographs, as large as the camera allows (at least 1600px
wide):

- **Daily life:** the boys at the table, doing homework, playing outside, the
  nursery, the weekly rice round, the building and garden.
- **Natural light.** Outdoors or near a window; no flash.
- **Groups from a distance, or from behind, are fine** and often the most
  natural. Hands at work (serving food, carrying rice, writing in a notebook)
  tell the story without showing a face.
- **No child should be identifiable without written consent from their
  guardian.** When in doubt, choose the photo where faces can't be made out.
- Landscape (wider than tall) suits most frames on the site.

**Where they go.** Put the files in `public/images/`, add each one's size to
`src/app/core/data/images.ts`, and point the content at it. These are the
slots, all in the data files:

| Slot | Where it shows |
| --- | --- |
| `HOME_HERO.heroPhoto` | The large arch in the home hero |
| `NURTURE_PILLARS[].image` | The four "How we nurture" frames |
| `STORY_TEASER.photos` | The two photos in "From one seed, a whole tree" |
| `STORIES[].image`, `secondImage` | The chapter pictures |
| `STORY_PAGE.thenAndNow.items` | Then & now |
| `ALUMNI[].photo`, `TEAM[].photo`, `UPDATES[].image` | Optional, only with consent |

Each photo can take a `focalPoint` (for example `'50% 25%'`) so faces near the
top aren't cropped out of a frame.

## 7. The story chapters — check the retelling

`stories.ts` holds seven chapters, condensed from the trust's own account and
retold warmly: the hardships are acknowledged without dwelling on them.

Deliberate omissions, all of which the original account included: the drug
detail around the first boy, the rotten oranges, the descriptions of illness,
and the word "slum". **The first boy is not named**: he is a real person who
did not choose to have his childhood published.

Still named, because they are adults who helped: Fr. James, Mr. Jolly and
Mathew Kuravilla. Fr. Sebastian should read the chapters and confirm he is happy
with both the retelling and those names.

**Chapter 1, optional.** The original said Fr. Sebastian met the families
"thirteen kilometres away", without saying from where. The chapter now reads
"The course took him to families near Cochin". If the distance matters to the
story, tell us what it was measured from and it can go back in.

## 8. Address — two PIN codes

The site uses **686016** for Thellakom P.O., taken from the trust's own blog.
The Google Maps listing (linked from the footer) shows **686630** for the same
place. Worth checking which is correct for post.

## 9. Claims to confirm

Most of the site's wording restates facts above, but these points are new or
need Fr. Sebastian's confirmation:

- **The hero sentence**: "Ammaveedu, in Thellakom, Kottayam, is a home for boys
  who need a family and care. Fr. Sebastian has run it since 2006." Built from
  `TRUST`; confirm "has run it" describes his role.
- **Homework help.** The Sapling stage says every boy at school gets "a helping
  hand at homework time". Earlier copy only offered homework help as something
  volunteers could do.
- **Skills training "for life after 18".** The Branching out stage presents
  this as a dream, not something that exists yet. The trust's account mentions
  skills training for young people but not the age of 18. Confirm the wording,
  and whether boys stay on after 18 today.
- **"Friends, games, confidence among brothers"** (the Growing strong stage) is
  general, but check it sounds right.
- **Chapter 3.** The cover card shows Fr. Sebastian's own quote ("I had but
  Rs. 4,000…") under an "18 March 2006" pill. The Bishop's reply, "Yes, you
  should leave in two weeks", sits in the paragraph about that date. Both are
  the trust's own words, but confirm the reply is quoted accurately.
- **The house was a gift.** Chapter 4 says Mathew Kuravilla "had given him a
  house", and the home page and story page now both say the same. (The story
  page previously said "borrowed"; that has been corrected.) Confirm it was
  given outright.

## 10. Optional blocks, ready and empty

These are built and tested, but hidden until the trust supplies content. Each
one renders nothing at all while it is empty: no heading, no gap.

| Data | Shows as | Notes |
| --- | --- | --- |
| `ALUMNI` | "Where they are now" on the home page | Only entries with `consentConfirmed: true` appear. Get **written** consent first. First name or initial only. |
| `TEAM` | "Who looks after the boys" on the home page | A role on its own is fine (e.g. "Cook"); a name is optional. |
| `NEEDS` | "What we need right now", inside Be part of the family | Each item gets a WhatsApp button that opens with "I'd like to help with: <item>". `season` and `quantity` are optional. Keep it current; remove items once met. |
| `UPDATES` | "Latest from Ammaveedu" on the home page | The newest three show. `date` is written as `'2026-06-01'`. |
| `SOCIAL_LINKS` | Icons in the footer | Platforms: facebook, instagram, youtube, x, website. |
| `GALLERY_PHOTOS` | The gallery page (`/gallery`), newest first | Only the trust's own photos, and only ones it is happy to publish (§6 on children's faces). Put the file in `public/images/`, add its size to `images.ts`, then add a line with `image`, `alt`, `caption` and, optionally, `when`. |
| `REGISTRATIONS` | "Registrations" in the footer | See §3. |
