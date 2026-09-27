import { Story, StoryPageContent } from '../models/story.model';
import { TRUST } from './site-content';

/**
 * The story of Ammaveedu, told warmly.
 *
 * The facts come from the trust's own published account, written by
 * Fr. Sebastian. The telling here is gentler than the original: the hardships
 * are acknowledged without dwelling on them, and the first boy is not named,
 * because he is a real person who did not choose to have his childhood
 * published.
 */
export const STORIES: Story[] = [
  {
    slug: 'a-seed-is-planted',
    order: 1,
    title: 'A seed is planted',
    era: 'The 1990s',
    coverQuote: 'A seed of love, planted in a young heart.',
    coverSprout: true,
    coverTone: 'sage',
    body: [
      {
        type: 'p',
        text: 'At twenty, Fr. Sebastian joined St Joseph\'s Pontifical Seminary expecting to spend his life as a parish priest. Then he chose the Social Action course, and it took him somewhere he had not planned to go.',
      },
      {
        type: 'p',
        text: 'Thirteen kilometres away, near Cochin, he met families who were doing their best with very little. He spent his time there listening rather than teaching, and he saw how much difference a little care could make to a household that had been managing alone.',
      },
      {
        type: 'p',
        text: 'He went back to his studies, but something had taken root. It would be years before it grew into anything, and he had no idea yet what shape it would take.',
      },
    ],
  },
  {
    slug: 'love-that-shares',
    order: 2,
    title: 'Love that shares',
    era: 'A lesson he never forgot',
    image: 'images/home-visit.jpg',
    imageAlt: 'Fr. Sebastian talking with a neighbour outside his home',
    body: [
      {
        type: 'p',
        text: 'A visitor came to the seminary one day and was offered tea and a banana. He drank the tea gladly, but kept his hand over the banana. He was unwell and could not work, he explained, and the fruit would go home to be shared between his wife and children.',
      },
      {
        type: 'p',
        text: 'It was a small thing, and it stayed with Fr. Sebastian for the rest of his life: a man with almost nothing, still thinking first of the people he loved.',
      },
      {
        type: 'p',
        text: 'He spent his holidays working on a rubber and ginger plantation, wanting to understand the working families he hoped to serve from the inside rather than from a distance. He was ordained in 1997 and had a parish of his own by 1999 - and still his heart kept pulling him towards families who simply needed a friend.',
      },
    ],
  },
  {
    slug: 'years-of-patient-hope',
    order: 3,
    title: 'Years of patient hope',
    era: '1999 to 2006',
    coverQuote:
      'I had but Rs. 4,000, nowhere to go and no idea what I was going to do, but I was pleased and excited all the same.',
    coverQuoteBy: 'Fr. Sebastian',
    coverTag: '18 March 2006',
    coverTone: 'peach',
    body: [
      {
        type: 'p',
        text: 'He asked his Bishop for permission to go and work among those families. The answer was not yes, so he asked again - making the 120 kilometre journey many times over several years, and setting out his reasons in writing three times over.',
      },
      {
        type: 'p',
        text: 'On 18 March 2006, the answer came back: “Yes, you should leave in two weeks.” He had Rs. 4,000 to his name and a heart full of hope.',
      },
    ],
  },
  {
    slug: 'one-boy-said-yes',
    order: 4,
    title: 'One boy said yes',
    era: '2006',
    image: 'images/ammaveedu-house.jpg',
    imageAlt: 'The first house in Kottayam that became Ammaveedu',
    body: [
      {
        type: 'p',
        text: 'Fr. James gave him somewhere to stay, and a social worker named Mr. Jolly introduced him to the families he knew. Money ran low, and there were days when nothing seemed to be working - yet he felt calm, certain he was finally doing what he had waited years to do.',
      },
      {
        type: 'p',
        text: 'Among the children he met was an eight-year-old boy with no one to look after him. Fr. Sebastian asked him a simple question.',
      },
      {
        type: 'quote',
        text: 'If I get a house, will you stay with me? - Yes.',
      },
      {
        type: 'p',
        text: 'He was close to giving up and going home when he came across an old visiting card in his bag: Mathew Kuravilla, a man he had met three years earlier who had said to call if the plans ever became real. Within a week, Mathew had given him a house in Kottayam.',
      },
    ],
  },
  {
    slug: 'mothers-house',
    order: 5,
    title: "Mother's house",
    era: 'The home takes shape',
    image: 'images/ammaveedu-today.jpg',
    imageAlt: 'Fr. Sebastian with the boys outside the house at Ammaveedu',
    body: [
      {
        type: 'p',
        text: 'Other boys who needed a family followed, one by one. The house was named Ammaveedu - mother\'s house - because that is exactly how it was meant to feel.',
      },
      {
        type: 'p',
        text: 'Today 27 boys call it home. There is good food, there are school books and uniforms, there are toys and time to play, and there are grown-ups who notice when something is wrong. Every boy over six goes to school every single day.',
      },
      {
        type: 'p',
        text: 'A free nursery welcomes the youngest, along with little ones from neighbouring families, where a teacher helps them find their way into English, Malayalam and maths through play.',
      },
    ],
  },
  {
    slug: 'love-overflows',
    order: 6,
    title: 'Love overflows',
    era: 'Sharing what arrives',
    image: 'images/rice-delivery.jpg',
    imageAlt: 'A sack of rice arriving for the weekly round',
    secondImage: 'images/children-meal.jpg',
    secondImageAlt: 'Young children sharing a meal at Ammaveedu',
    body: [
      {
        type: 'p',
        text: 'A generous gift of rice arrived one day. The cook fed all the children amply, saw how much was left, and asked whether she might take some to a family she knew.',
      },
      {
        type: 'p',
        text: 'Word spread gently, the way it does between neighbours. Before long it had become a weekly round: 5 kg of rice to around a hundred families, with clothes alongside it, carried to the door by hand.',
      },
      {
        type: 'p',
        text: 'A paediatrician joined the trust\'s members, and a local chemist helps with medicine, so a child who needs a doctor can see one.',
      },
    ],
  },
  {
    slug: 'still-growing-together',
    order: 7,
    title: 'Still growing, together',
    era: 'Today, and next',
    image: 'images/ammaveedu-building.webp',
    imageAlt: 'The Ammaveedu building at Thellakom, its name painted across the front',
    body: [
      {
        type: 'p',
        text: 'From one house and one boy, Ammaveedu has grown into a big, busy home. Neighbours now arrive with the names of families who could use a hand, which is its own kind of compliment.',
      },
      {
        type: 'p',
        text: 'The dreams keep growing too: skills training for young people, counselling for those who need someone to talk to, care for the elderly and the differently abled, and health camps for the families nearby.',
      },
      {
        type: 'p',
        text: 'There is no endowment behind any of it. Everything here comes from the love of friends - and the next chapter is one we hope to write with you.',
      },
    ],
  },
];

export function storyBySlug(slug: string): Story | undefined {
  return STORIES.find((story) => story.slug === slug);
}

/** Copy for the story page and the single-chapter pages. */
export const STORY_PAGE: StoryPageContent = {
  hero: {
    eyebrow: `Our history · ${TRUST.foundedYear} to today`,
    title: 'From one seed, a whole tree.',
    lead: `How one priest, one boy and one borrowed house grew into ${TRUST.alsoKnownAs} — told in seven short chapters.`,
    image: 'images/ammaveedu-building.webp',
    imageAlt: 'The Ammaveedu building at Thellakom, its name painted across the front',
  },
  chipsLabel: 'Jump to a chapter',
  chapterLabel: 'Chapter',
  readChapterLabel: 'Read this chapter on its own',
  thenAndNow: {
    title: 'Then & now',
    items: [
      {
        image: 'images/ammaveedu-house.jpg',
        alt: 'The first house in Kottayam that became Ammaveedu',
        when: `${TRUST.foundedYear}`,
        caption: 'The seed: one house, one boy',
      },
      {
        image: 'images/ammaveedu-building.webp',
        alt: 'The Ammaveedu building at Thellakom today',
        when: 'Today',
        caption: `The tree: a home for ${TRUST.boysAtHome} brothers`,
      },
    ],
  },
  closing: {
    title: "The next chapter is one we'd love to write with you.",
    body: `There is no endowment behind ${TRUST.alsoKnownAs} — everything here comes from the love of friends. Write to Fr. Sebastian and he will reply to you personally.`,
    emailLabel: 'Email Fr. Sebastian',
    emailSubject: 'I would like to be part of the next chapter at Ammaveedu',
    emailBody:
      'Dear Fr. Sebastian,\n\nI read the story of Ammaveedu and would love to help write the next chapter. Please let me know how I can be part of it.\n\n\n---\nMy name:\nMy phone:\n',
    whatsappLabel: 'WhatsApp',
    homeLabel: 'Back to home',
  },
  article: {
    allChaptersLabel: 'All seven chapters',
    ofLabel: 'of',
    previousLabel: 'Previous chapter',
    nextLabel: 'Next chapter',
    endTitle: 'That is the story so far',
    endBody: 'The next chapter is still being written.',
    endCta: { label: 'Be part of the next chapter', path: '/stories', fragment: 'next-chapter' },
    notFoundTitle: 'We could not find that chapter',
    notFoundBody: 'It may have moved. The whole story is on one page.',
  },
};
