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
