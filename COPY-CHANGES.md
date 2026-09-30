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

## Part 3 — pages and search

### The "page not found" page

A new page for addresses the site doesn't have. It replaces the old
chapter-only message, so an unknown chapter shows the same page.

| Old (unknown chapter only) | New (any unknown address) |
| --- | --- |
| We could not find that chapter | We couldn't find that page |
| It may have moved. The whole story is on one page. | It may have moved, or the link may have a typo. Everything else is just a click away. |
| All seven chapters (button) | Back to home · Read our story (buttons) |

### What search engines and link previews show

These are not visible on the page, but appear in Google results and when a
link is shared on WhatsApp.

| Page | Title | Description |
| --- | --- | --- |
| Home | Ammaveedu \| A family home for boys in Thellakom, Kottayam (unchanged) | Ammaveedu is a family home in Thellakom, Kottayam, where 27 boys grow up together as brothers — cared for, cheered on and helped to become everything they can be. (unchanged, except " - " became " — ") |
| Story | The story of Ammaveedu \| Theresian Charitable Trust (unchanged) | How one priest, one boy and the gift of a house grew into Ammaveedu — told in seven short chapters. (the story page's own lead) |
| Each chapter (new) | *Chapter title* \| The story of Ammaveedu | The chapter's first sentence, unchanged |
| Not found (new) | Page not found \| Ammaveedu | The page you were looking for is not on the Ammaveedu website. |

## Part 4 — a warmer, more poetic voice (2026-09-30)

The site's words now lean on one image: a home as a garden, where boys are
planted, tended and grow toward the light. No facts changed. Every number,
name and date is exactly as before.

### Home: hero

| Old | New |
| --- | --- |
| Every boy here is growing — taller, braver, kinder. | Every boy here is growing, rooted in love. |
| … is a home for boys who need a family and care. Fr. Sebastian has run it since 2006. | … is a home where boys who need a family find one. Fr. Sebastian has tended it since 2006. |
| Here each boy has love, good food, school every day and a big family of brothers to grow up with. | Here every boy is held in love, fed at a shared table, sent to school each morning and surrounded by a big family of brothers to grow up with. |

### Home: how we nurture

| Old | New |
| --- | --- |
| What a boy needs to grow — we make sure he has it. | Good soil, warm sun, gentle hands — all a boy needs to grow. |
| Four things every boy here can count on: … | Four things every boy here can count on, as sure as sunrise: … |
| A place to belong | A place to put down roots |
| … grown-ups who are there for him. Feeling at home comes first. | … grown-ups who are always there. Before anything can grow, a child must know he is home. |
| A love of learning | Minds that blossom |
| Our free nursery gives little ones a happy start … | Our free nursery gives little ones a gentle, happy start … |
| Good food, shared | Nourished at one table |
| Warm meals around the table, and a weekly rice round that shares our blessings with … | Warm meals shared around one table, and a weekly rice round that carries our blessings to … |
| Healthy and cared for | Tended with care |
| A paediatrician on our team keeps an eye on every child … | A paediatrician on our team watches over every child … |

### Home: raising a well-rounded child

| Old | New |
| --- | --- |
| Food and a roof are only the start. We help every boy grow in every way, and these are the nine things we nurture, day in and day out. | A roof and a meal are only the soil. What grows from it is the heart of a good man, and we tend it every day in nine gentle ways. |
| Kindness: … the little ones learn by watching. | … the little ones learn by watching: kindness, passed from hand to hand. |
| Emotional strength: It is all right to feel sad, angry or let down. We help each boy put his feelings into words and find his calm again. | Sad, angry or let down, every feeling is welcome here. We help each boy find words for his heart and, after the rain, his calm again. |
| Discipline: Simple daily routines, from waking up to homework time, teach a boy to respect time … | Gentle daily rhythms, from sunrise to homework time, teach a boy to honour time … |
| Physical health: … keep growing bodies strong. | … keep growing bodies strong and spirits bright. |
| Learning: … No question here is ever too small. | … No question here is too small, and every "why?" is a seed. |
| Respect: … together with the confidence to think for himself. | … alongside the courage to think for himself. |
| Responsibility: … and owning up to mistakes without fear. | … and the courage to own a mistake without fear. |
| Honesty: … even when nobody is watching. | … even when no one is watching: a quiet strength that grows with him. |
| Communication: … saying sorry like he means it. | … saying sorry like he means it. Building bridges, not walls. |
| Little by little, a sprout becomes a young man who can stand on his own. | Leaf by leaf, year by year, a sprout becomes a young man who can stand tall on his own. |

### Home: growing up, our history, be part of the family

| Old | New |
| --- | --- |
| Every boy grows at his own pace. Here is what each stage looks like at Ammaveedu. | Every boy grows in his own season. Here is how each stage unfolds at Ammaveedu. |
| The youngest start in our free nursery, finding their way into English, Malayalam and maths through play. | The youngest begin in our free nursery, discovering English, Malayalam and maths through play. |
| … cheering him on. Confidence grows here. | … cheering him on. Here, confidence takes root. |
| … It is the next thing we hope to build. | … It is the next dream we hope to plant. |
| … set out with Rs. 4,000 and a lot of hope. One boy said yes, a friend gave a house, and Ammaveedu began to grow. | … set out with Rs. 4,000 and a heart full of hope. One boy said yes, a friend gave a house, and a small seed of love began to grow into Ammaveedu. |
| Every meal, school book and birthday cake here is made possible by friends. There's a place for you too. | Every meal, school book and birthday cake here grows from the kindness of friends. There's a place in this garden for you too. |
| Help a child grow: … or our nursery. Fr. Sebastian will reply … | … or our nursery, and watch it bloom. Fr. Sebastian will reply … |
| Share your time: … Every hour spent with them matters. | … Every hour you give is sunlight to a growing child. |
| Celebrate with us: … and make a memory together. | … and plant a memory that blossoms long after the day. |

### Other pages

| Where | Old | New |
| --- | --- | --- |
| Gallery | Snapshots of our home, from the first little house to the boys growing up together today. | Snapshots of a home in full bloom, from the first little house to the brothers growing up together today. |
| Story page lead | How one priest, one boy and the gift of a house grew into Ammaveedu — told in seven short chapters. | How one priest, one boy and the gift of a house took root and grew into Ammaveedu, told in seven short chapters. |
| Story page closing | … — everything here comes from the love of friends. | … Every meal and every lesson grows from the love of friends. |
| Not found | We couldn't find that page | This path seems to have wandered off |
| Not found | It may have moved, or the link may have a typo. Everything else is just a click away. | The page may have moved, or the link may have a typo. Every other path leads back home. |
| Home, search description | … where 27 boys grow up together as brothers — cared for, cheered on and helped to become everything they can be. | … where 27 boys grow up as brothers: rooted in love, cared for and cheered on to become all they can be. (148 characters, within Google's limit) |

Unchanged on purpose: the trust's own quote, the giving note (it has to stay
plain and exact), button labels, the seven chapters, and the headings of the
optional blocks.
