import { Story } from '../models/story.model';

/**
 * The history of Ammaveedu and of Fr. Sebastian Mannapathuparambil.
 *
 * These articles are condensed from the trust's own published account, which
 * Fr. Sebastian wrote in the first person. Where `firstPerson` is true the page
 * says so and the words stay his; nothing here has been invented to fill a gap.
 * Original posts: November 2011.
 */
export const STORIES: Story[] = [
  {
    slug: 'the-colony-on-the-canal',
    order: 1,
    title: 'A different world',
    dek: 'A philosophy course called Social Action took a young seminarian to a slum built on the banks of a waste canal. He never got over it.',
    published: '7 November 2011',
    era: 'The 1990s',
    coverQuote: 'It was only 13km away from the seminary, but to me it looked like a different world.',
    firstPerson: true,
    body: [
      {
        type: 'p',
        text: 'The life I lead today is entirely different from the life I had envisaged ten years ago. Aged twenty I entered St Joseph\'s Pontifical Seminary, where I would study, be ordained and - or so I thought - dedicate my life to teaching the Word of God as a parish priest.',
      },
      {
        type: 'p',
        text: 'The struggle began with the choice I made at St Joseph\'s to study, for my philosophy course, Social Action. While the ninety-seven students who had chosen science or journalism sat down in their lecture halls, two other brothers and I stood with our professor staring at a colony.',
      },
      {
        type: 'p',
        text: 'This colony - you might know it as a slum - was built on the two banks of a waste canal near Cochin. Our study would consist of neither reading nor writing, but of familiarising ourselves with it: the way its people lived and survived at the lowest imaginable standards.',
      },
      {
        type: 'quote',
        text: 'It was only 13km away from the seminary, but to me it looked like a different world.',
      },
      {
        type: 'p',
        text: 'Five hundred families lived there, each of their situations as tragic as the next. On the floor of one of those tiny, one-roomed houses lay an old woman. She was shaking, her fists clenched, her body curled into itself. She was suffering from rheumatism and receiving absolutely no medical or emotional attention.',
      },
      {
        type: 'p',
        text: 'These were lives devastated by disease, mental illness, crime, addiction and death. That was my introduction to the colonies.',
      },
    ],
  },
  {
    slug: 'the-man-who-kept-his-banana',
    order: 2,
    title: 'The man who kept his banana',
    dek: 'A visitor to the seminary drank his tea but would not touch the fruit. What he said next set thirteen years in motion.',
    published: '7 November 2011',
    era: '1997 - 2006',
    image: 'images/home-visit.jpg',
    imageAlt: 'Fr. Sebastian talking with an elderly man in a village',
    firstPerson: true,
    body: [
      {
        type: 'p',
        text: 'Not long after my striking introduction to the colonies, one of its residents visited my seminary. We routinely gave him a cup of tea and a banana. He drank the tea, but as we talked he kept his hand firmly over the banana, clearly with no intention of eating it.',
      },
      {
        type: 'p',
        text: 'It transpired that the man had TB, was unable to work and therefore unable to feed his wife and children. The banana, he explained, would be shared out between them.',
      },
      {
        type: 'p',
        text: 'My whole life I had lived comfortably, with shelter over my head, clothes on my back and food on the table. My imminent life as a priest would certainly promise all this and more. Being a priest and a follower of Christ, was it not hypocritical for me to simply forget this experience and continue to live in comfort, when Christ himself spent his life helping the disadvantaged?',
      },
      {
        type: 'p',
        text: 'For the next few years I continued my seminary training, but I did not forget the colonies. I spent a month\'s vacation toiling in a rubber and ginger plantation to understand the plight of the working classes. In 1997 I was finally ordained, and by 1999 I was the priest of my own parish.',
      },
      { type: 'h', text: 'Thirteen years of asking' },
      {
        type: 'p',
        text: 'Not more than two years later I telephoned the Bishop, asking permission to leave my diocese and help the poor and marginalised. "You must ask me this in person," came his reply. I made that 120km journey to ask him numerous times over the next six years, and each time my request was denied - until one day he told me to produce a document explaining my reasons and objectives.',
      },
      {
        type: 'p',
        text: 'I did this once, and was denied. Twice, and was denied again. The third time, to my great surprise, the Bishop told me: "Yes, you should leave in two weeks."',
      },
      {
        type: 'quote',
        text: 'On that day, 18th March 2006, my prayers were answered. My family were outraged, my parish appalled. I had but Rs. 4,000, nowhere to go and no idea what I was going to do - but I was pleased and excited all the same.',
      },
    ],
  },
  {
    slug: 'three-oranges-and-a-visiting-card',
    order: 3,
    title: 'Three oranges and a visiting card',
    dek: 'Down to his last ten rupees and packing to go home, Fr. Sebastian found an old card in his things. Within a week there was a house.',
    published: '7 November 2011',
    era: '2006',
    image: 'images/ammaveedu-house.jpg',
    imageAlt: 'The house at Thellakom that became Ammaveedu',
    firstPerson: true,
    body: [
      {
        type: 'p',
        text: 'By God\'s good grace my old friend Fr James agreed to let me stay in a hospital in Kottayam, where he was an assistant director. I knew that the people of the slums can be aggressive towards outsiders, and I was fortunate to meet Mr. Jolly, a social worker who offered to introduce me to the people he worked with in Kottayam\'s colonies.',
      },
      {
        type: 'p',
        text: 'I was not prepared for the hostility I would meet from the residents of Kottayam itself. Despite his efforts, Fr. James could not dispel their notion that a parish priest 400km from his own diocese must have caused a scandal, committed a crime, or angered his parishioners. After a month I left the hospital, and Fr. James took me instead to a children\'s retreat home.',
      },
      {
        type: 'p',
        text: 'Soon I was down to my last Rs. 10. I spent it on three oranges to eat, and peeled them to discover that two were rotten. My life seemed to be in ruins - I faced hunger, criticism, uncertainty and, worst of all, failure. But inside I felt calm.',
      },
      { type: 'h', text: 'Rajeev' },
      {
        type: 'p',
        text: 'I was still visiting the colonies, and had met an eight-year-old boy, Rajeev. He had matted hair, dirty skin, and wore only a pair of tattered trousers. His parents had separated and abandoned him with his grandmother, who told me how he refused to study, how he ran about as he pleased, and how he was being used by his neighbours to distribute heroin.',
      },
      { type: 'quote', text: 'I asked him if he would stay with me if I got a house. "Yes," he replied.' },
      {
        type: 'p',
        text: 'Two months after I left my diocese, the Bishop called to say that if I had not succeeded in my mission I must return immediately. I persuaded him to give me two more weeks. The days passed and success seemed impossible. I had begun to pack my bag when I came across a visiting card: "Mathew Kuravilla", it read, followed by a phone number.',
      },
      {
        type: 'p',
        text: 'I had met Mathew three years earlier and mentioned my intention to work with the poor; he had said I should contact him if my plans ever materialised. I expected his number to have changed, or him to be busy or uninterested. My expectations could not have been further from the reality. He met me the next morning, and within a week he had given me a house in Kottayam.',
      },
      {
        type: 'p',
        text: 'Returning to the colonies, I collected Rajeev and other boys from similar situations. And so began the first initiative of the Theresian Trust: Ammaveedu.',
      },
    ],
  },
  {
    slug: 'the-house-called-mothers-house',
    order: 4,
    title: 'The house called mother\'s house',
    dek: 'Twenty-seven boys, all from the colonies, all of them in school. What Ammaveedu is for.',
    published: '7 November 2011',
    era: 'Ammaveedu today',
    image: 'images/ammaveedu-building.webp',
    imageAlt: 'The Ammaveedu building at Thellakom, its name painted across the front',
    firstPerson: false,
    body: [
      {
        type: 'p',
        text: 'The twenty-seven boys who live at Ammaveedu all come from the colonies. They are boys without families who can provide for them the standard of life they should be entitled to: food, shelter, education - along with the books and uniforms that education requires - toys, recreation, and the ordinary moral formation a household gives.',
      },
      {
        type: 'p',
        text: 'In India there is an assumption that hangs over a child born in a colony: that the children of the wealthy will grow up wealthy and the children of the poor will stay poor. Ammaveedu exists to interrupt it. Every boy over the age of six goes to school, every day.',
      },
      { type: 'h', text: 'The nursery' },
      {
        type: 'p',
        text: 'For the youngest, the trust founded its own nursery school - fully funded, and run at no cost to those who attend. It was intended for the younger members of Ammaveedu, but six other disadvantaged children have since been welcomed at the request of their parents, who could not afford to send them to a traditional nursery.',
      },
      {
        type: 'p',
        text: 'A teacher is employed to give them basic English, Malayalam and mathematics - the foundation of a thorough education later on.',
      },
      {
        type: 'quote',
        text: 'The love of humanity is a gift from God, but with it is given to us a responsibility to act on it.',
      },
    ],
  },
  {
    slug: 'one-sack-of-rice',
    order: 5,
    title: 'One sack of rice',
    dek: 'The cook asked whether she could take some of the surplus to a family she knew. Three years later it was a hundred families a week.',
    published: '7 November 2011',
    era: 'The work spreads',
    image: 'images/rice-delivery.jpg',
    imageAlt: 'A sack of rice being carried in for distribution',
    firstPerson: false,
    body: [
      {
        type: 'p',
        text: 'Not long after Ammaveedu was established, the trust received a generous donation of rice. The cook was able to feed all of the children amply, and seeing that the surplus was great, she asked whether she could take some for a family she knew who had no food and no money to buy any.',
      },
      {
        type: 'p',
        text: 'The trust agreed, and it was not long before it heard of more families in a similar situation: men who through sickness or poor mental health were unable to work, widowed women, families that had come apart. People who could be helped greatly by such a modest gift.',
      },
      {
        type: 'quote',
        text: 'Three years on, this has truly snowballed into its own enterprise. We are currently making weekly deliveries of 5kg of rice to about 100 families, with occasional clothing handouts too.',
      },
      { type: 'h', text: 'And a doctor among us' },
      {
        type: 'p',
        text: 'The trust also arranges and carries out regular health checks for the children of the colonies. One of its own members is a qualified paediatrician, and it has links with a local chemist - so there is both a doctor who can see the children and medicine that can be issued to them freely.',
      },
      {
        type: 'p',
        text: 'The trust prides itself on direct involvement: regular trips to the colonies, a personal relationship with those who receive its aid, and neighbours who now come to it with the names of other families in need. It depends entirely on donations and on the constant support of its members.',
      },
    ],
  },
];

export function storyBySlug(slug: string): Story | undefined {
  return STORIES.find((story) => story.slug === slug);
}
