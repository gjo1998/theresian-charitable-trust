# Copy changes for Fr. Sebastian to approve

Every sentence on the site that was reworded or newly written, old → new.
None of these add new facts; where a line depends on a fact the trust still
needs to confirm, it says so and the fact is listed in
[CONTENT-TODO.md](CONTENT-TODO.md).

Content lives in [`src/app/core/data/site-content.ts`](src/app/core/data/site-content.ts)
and [`src/app/core/data/stories.ts`](src/app/core/data/stories.ts). To undo any
change, put the old wording back there.

## Part 1 — layout and navigation

### One name for one action

The button that leads to "Be part of the family" now has the same label
everywhere. "Help a child grow" stays as the title of the first family card.

| Where | Old | New |
| --- | --- | --- |
| Home hero, main button | Help a child grow | Be part of the family |
| Story page header button | Be part of the next chapter | Be part of the family |

### New short labels

| Where | New wording |
| --- | --- |
| Hero photo caption | Our home in Thellakom, Kottayam |
| Family cards, under each main button | or Email · WhatsApp · Call (the two channels not on the button) |
| Chapter pages | Chapter 4 of 7 (and so on) |

### New prefilled messages

Each family card now offers all three channels, and each channel opens with
that card's own message. These are new or adapted; the existing ones are
unchanged.

| Card | Channel | Message |
| --- | --- | --- |
| Help a child grow | WhatsApp (new) | Hello Fr. Sebastian, I would like to help a child at Ammaveedu. Please let me know how best to give. |
| Share your time | Email subject (new) | I would like to share some time with the boys at Ammaveedu |
| Share your time | Email body (new) | Dear Fr. Sebastian, I would love to share some time with the boys at Ammaveedu. Please let me know how I could help. |
| Celebrate with us | Email subject (new) | I would like to celebrate a special day at Ammaveedu |
| Celebrate with us | Email body (new) | Dear Fr. Sebastian, I would like to spend a birthday or special day with the boys at Ammaveedu. Please let me know what would work. |
| Celebrate with us | WhatsApp (new) | Hello Fr. Sebastian, I would like to celebrate a birthday or special day with the boys at Ammaveedu. |

Every email body ends with the existing "My name: / My phone:" lines.

## Part 2 — content

### Saying plainly what Ammaveedu is

A new sentence directly under the home page headline, built from the trust's
details (place, founder, founding year), so it updates itself if they change.

| Where | New wording |
| --- | --- |
| Home hero, under the headline | Ammaveedu, in Thellakom, Kottayam, is a home for boys who need a family and care. Fr. Sebastian has run it since 2006. |

"Has run it" needs confirming; see CONTENT-TODO §9.

### Plain words in the body, the metaphor kept for titles

Section titles keep the growing-tree image. The lines under them now say
plainly what the section covers.

| Where | Old | New |
| --- | --- | --- |
| "How we nurture", under the title | Four roots, planted deep, so every boy can stretch toward his own sky. | Four things every boy here can count on: a place to belong, a love of learning, good food and good health care. |
| "From little sprout to young man", under the title | Every boy grows at his own pace. We walk beside him at every stage. | Every boy grows at his own pace. Here is what each stage looks like at Ammaveedu. |

### A factual correction

| Where | Old | New |
| --- | --- | --- |
| Story page, under the title | How one priest, one boy and one borrowed house grew into Ammaveedu — told in seven short chapters. | How one priest, one boy and the gift of a house grew into Ammaveedu — told in seven short chapters. |

Chapter 4 says Mathew Kuravilla *gave* the house; "borrowed" contradicted it.

### Chapter 1: a distance without a starting point

| Old | New |
| --- | --- |
| Thirteen kilometres away, near Cochin, he met families who were doing their best with very little. | The course took him to families near Cochin who were doing their best with very little. |

The rest of the paragraph is unchanged. If the distance matters, CONTENT-TODO
§7 asks what it was measured from.

### Dashes and small fixes

A spaced hyphen ( - ) used as a dash is now an em dash ( — ), as elsewhere on
the site. Hyphenated words and number ranges (such as office hours) are
unchanged.

| Chapter | Old | New |
| --- | --- | --- |
| 2 | …had a parish of his own by 1999 - and still his heart… | …had a parish of his own by 1999 — and still his heart… |
| 3 | …so he asked again - making the 120 kilometre journey… | …so he asked again — making the 120-kilometre journey… |
| 4 | …nothing seemed to be working - yet he felt calm… | …nothing seemed to be working — yet he felt calm… |
| 4 | "If I get a house, will you stay with me? - Yes." | "If I get a house, will you stay with me? — Yes." |
| 5 | The house was named Ammaveedu - mother's house - because… | The house was named Ammaveedu — mother's house — because… |
| 7 | …the love of friends - and the next chapter… | …the love of friends — and the next chapter… |

"120-kilometre" also gains the hyphen it takes before a noun.

Proofread for British/Indian spelling: the only change needed was "toward" to
"towards", and that line was rewritten anyway (above).

### Headings and labels for the new optional blocks

These appear only once the trust supplies the content behind them.

| Block | New wording |
| --- | --- |
| Alumni | Grown up at Ammaveedu (small label) · Where they are now · At Ammaveedu: *years* |
| Team | Who looks after the boys |
| Needs | What we need right now · I can help · How many: *quantity* |
| Needs, WhatsApp message | I'd like to help with: *item* |
| Updates | Latest from Ammaveedu |
| Footer | Follow Ammaveedu · Registrations · Trust registration · 12A registration · 80G registration · Child care institution registration (Juvenile Justice Act) |
