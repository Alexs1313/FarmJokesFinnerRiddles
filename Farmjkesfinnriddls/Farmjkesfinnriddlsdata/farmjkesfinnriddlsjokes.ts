import type {ImageSourcePropType} from 'react-native';

export type farmjkesfinnriddlsJokeGroup = {
  id: string;
  title: string;
  image: ImageSourcePropType;
  jokes: string[];
};

export type farmjkesfinnriddlsJokesCategory = {
  id: 'fruit' | 'vegetable' | 'vehicle';
  title: string;
  previewImage: ImageSourcePropType;
  groups: farmjkesfinnriddlsJokeGroup[];
};

export const farmjkesfinnriddlsjkesFavoritesStorageKey =
  'farmjkesfinnriddls_jokes_favorites_v1';

export const farmjkesfinnriddlsjokesCategories: farmjkesfinnriddlsJokesCategory[] =
  [
    {
      id: 'fruit',
      title: 'Fruit Jokes',
      previewImage: require('../../assets/i/farmjkesfintprev1.png'),
      groups: [
        {
          id: 'orange',
          title: 'Orange',
          image: require('../../assets/i/farmjkesfinnfrt1.png'),
          jokes: [
            'The orange tried to stay calm during an argument. It took a deep breath and said nothing. Then it exploded… with juice.',
            'The orange went to the gym for a month. It worked really hard every day. Now it proudly says it’s in great shape… round and perfect.',
            'The orange woke up in a great mood. Nothing could ruin its day. Even getting squeezed felt like part of the plan.',
          ],
        },
        {
          id: 'watermelon',
          title: 'Watermelon',
          image: require('../../assets/i/farmjkesfinnfrt2.png'),
          jokes: [
            'The watermelon decided to go on a diet. It started eating less and moving more. After a week, it realized it was still just a big watermelon.',
            'The watermelon was invited to a party. It got excited and showed up early. Five minutes later, someone brought a knife.',
            'The watermelon wanted to relax. It found a quiet place and stayed there all day. No one bothered it… until summer started.',
          ],
        },
        {
          id: 'grapes',
          title: 'Grapes',
          image: require('../../assets/i/farmjkesfinnfrt3.png'),
          jokes: [
            'The grapes wanted to become something more. They stayed together and worked under pressure. Eventually, they turned into wine and forgot why they started.',
            'One grape tried to leave the group. It walked away confidently. Two minutes later, it came back because it felt weird alone.',
            'The grapes were having a conversation. No one wanted to speak first. They all agreed they weren’t ripe for it yet.',
          ],
        },
        {
          id: 'banana',
          title: 'Banana',
          image: require('../../assets/i/farmjkesfinnfrt4.png'),
          jokes: [
            'The banana was walking down the street. Suddenly it slipped and fell. It stood up and said, “Yeah… I saw that coming.”',
            'The banana wanted a new life. It tried to act serious and professional. But everyone still found it funny for no reason.',
            'The banana went on vacation. It wanted to relax and do nothing. By the end, it felt completely peeled off from reality.',
          ],
        },
        {
          id: 'apple',
          title: 'Apple',
          image: require('../../assets/i/farmjkesfinnfrt5.png'),
          jokes: [
            'The apple joined a conversation. It didn’t say much at first. Then someone took a bite, and suddenly it had everyone’s attention.',
            'The apple was very confident. It believed it was the best in the basket. Until it rolled off the table and realized gravity exists.',
            'The apple tried to lie once. It almost got away with it. But someone quickly saw right through it.',
          ],
        },
        {
          id: 'pineapple',
          title: 'Pineapple',
          image: require('../../assets/i/farmjkesfinnfrt6.png'),
          jokes: [
            'The pineapple walked into a room. Everyone kept their distance. It smiled and said, “I know… I look complicated.”',
            'The pineapple tried to make friends. It acted tough and distant at first. But inside, it just wanted someone to understand it.',
            'The pineapple joined a group chat. It didn’t say much for a while. Then suddenly dropped something sweet and disappeared again.',
          ],
        },
        {
          id: 'strawberry',
          title: 'Strawberry',
          image: require('../../assets/i/farmjkesfinnfrt7.png'),
          jokes: [
            'The strawberry went on a date. It tried to be cute and charming. By the end, it realized it didn’t even need to try.',
            'The strawberry got a compliment. It smiled and said thank you. Then thought about it all day.',
            'The strawberry joined a competition. Everyone thought it was soft. It proved them wrong in the sweetest way.',
          ],
        },
        {
          id: 'cherries',
          title: 'Cherries',
          image: require('../../assets/i/farmjkesfinnfrt8.png'),
          jokes: [
            'The cherries went everywhere together. They talked, laughed, and stayed close. No one ever saw just one of them.',
            'One cherry tried to be independent. It left the pair and walked away. Five seconds later, it turned back and said, “Okay, that felt wrong.”',
            'The cherries were at a party. They didn’t try too hard. Somehow, they still became everyone’s favorite.',
          ],
        },
      ],
    },
    {
      id: 'vegetable',
      title: 'Vegetable Jokes',
      previewImage: require('../../assets/i/farmjkesfintprev2.png'),
      groups: [
        {
          id: 'carrot',
          title: 'Carrot',
          image: require('../../assets/i/farmjkesfinveg1.png'),
          jokes: [
            'The carrot decided to get serious about life. It stood up straight and tried to act important. No one noticed, but it felt better.',
            'The carrot joined a competition. It was confident and ready to win. Then it realized everyone else was also very “rooted.”',
            'The carrot tried to hide. It went deep into the ground. Still, everyone knew exactly where it was.',
          ],
        },
        {
          id: 'cucumber',
          title: 'Cucumber',
          image: require('../../assets/i/farmjkesfinveg2.png'),
          jokes: [
            'The cucumber stayed calm in every situation. Nothing seemed to bother it. It said, “I’ve been in worse pickles.”',
            'The cucumber wanted to change. It tried something new and unexpected. Next thing it knew, it became a pickle.',
            'The cucumber went to relax. It lay quietly and did nothing. That’s basically its lifestyle.',
          ],
        },
        {
          id: 'tomato',
          title: 'Tomato',
          image: require('../../assets/i/farmjkesfinveg3.png'),
          jokes: [
            'The tomato walked into a conversation. It stayed quiet at first. Then suddenly, it got smashed into the topic.',
            'The tomato got embarrassed. It turned bright red instantly. Everyone knew exactly what happened.',
            'The tomato tried to act cool. It kept a straight face for a while. Then it cracked under pressure.',
          ],
        },
        {
          id: 'onion',
          title: 'Onion',
          image: require('../../assets/i/farmjkesfinveg4.png'),
          jokes: [
            'The onion started telling a story. It went deeper and deeper. By the end, everyone was crying.',
            'The onion met someone new. It tried to open up slowly. But every layer made things more emotional.',
            'The onion didn’t want drama. It just existed quietly. Still, people couldn’t handle it.',
          ],
        },
        {
          id: 'pepper',
          title: 'Pepper',
          image: require('../../assets/i/farmjkesfinveg5.png'),
          jokes: [
            'The pepper entered the room confidently. It looked bold and strong. Then someone asked, “Are you sweet or spicy?”',
            'The pepper tried to stay calm. Everything was fine at first. Then things got a little too heated.',
            'The pepper joined a team. It brought energy and attitude. Suddenly, everything became more intense.',
          ],
        },
        {
          id: 'potato',
          title: 'Potato',
          image: require('../../assets/i/farmjkesfinveg6.png'),
          jokes: [
            'The potato had big dreams. It wanted to become something great. Eventually, it just became fries.',
            'The potato tried to be active. It moved a little, then stopped. That was enough for the day.',
            'The potato stayed quiet in the group. It didn’t say much. Still, it was everyone’s favorite.',
          ],
        },
        {
          id: 'broccoli',
          title: 'Broccoli',
          image: require('../../assets/i/farmjkesfinveg7.png'),
          jokes: [
            'The broccoli wanted to look strong. It stood tall and proud. Inside, it was still just soft.',
            'The broccoli joined a healthy lifestyle. It felt important and needed. Not everyone agreed, but it didn’t care.',
            'The broccoli tried to impress others. It showed up looking fresh and green. Kids still didn’t trust it.',
          ],
        },
        {
          id: 'cauliflower',
          title: 'Cauliflower',
          image: require('../../assets/i/farmjkesfinveg8.png'),
          jokes: [
            'The cauliflower walked into the group. It looked different from everyone else. Still, it fit in just fine.',
            'The cauliflower tried to be unique. It didn’t follow trends. Somehow, it still ended up everywhere.',
            'The cauliflower stayed quiet. It didn’t try to stand out. But people kept talking about it anyway.',
          ],
        },
      ],
    },
    {
      id: 'vehicle',
      title: 'Vehicle Jokes',
      previewImage: require('../../assets/i/farmjkesfintprev3.png'),
      groups: [
        {
          id: 'tractor',
          title: 'Tractor',
          image: require('../../assets/i/farmjkesfintrac1.png'),
          jokes: [
            'The tractor woke up early as always. It didn’t complain, just started working. That’s just how it rolls.',
            'The tractor tried to relax one day. It parked in the shade and did nothing. Five minutes later, it felt guilty and went back to work.',
            'The tractor joined a race. It didn’t rush or panic. It just moved steady and said, “I’ll get there eventually.”',
          ],
        },
        {
          id: 'green-tractor',
          title: 'Green Tractor',
          image: require('../../assets/i/farmjkesfintrac2.png'),
          jokes: [
            'The green tractor wanted to stand out. It showed up clean and shiny. By the end of the day, it looked exactly like the others — covered in dirt.',
            'The green tractor met a new machine. It tried to act cool and modern. But deep down, it knew it was old school.',
            'The green tractor got a compliment. It didn’t say much. Just quietly felt proud the whole day.',
          ],
        },
        {
          id: 'blue-tractor',
          title: 'Blue Tractor',
          image: require('../../assets/i/farmjkesfintrac3.png'),
          jokes: [
            'The blue tractor was calm and quiet. It didn’t talk much with others. But when it worked, everyone noticed.',
            'The blue tractor tried to be fast. It pushed itself harder than usual. Then it remembered… it’s not built for speed.',
            'The blue tractor stood in the field. It watched everything around. Sometimes doing nothing felt just right.',
          ],
        },
        {
          id: 'combine-harvester',
          title: 'Combine Harvester',
          image: require('../../assets/i/farmjkesfintrac4.png'),
          jokes: [
            'The combine entered the field like a boss. It didn’t rush or hesitate. It just handled everything in one go.',
            'The combine had a busy day. It worked nonstop from morning to sunset. By the end, there was nothing left behind.',
            'The combine met smaller machines. They all looked at it with respect. It just said, “I do what I have to.”',
          ],
        },
        {
          id: 'seeder-machine',
          title: 'Seeder Machine',
          image: require('../../assets/i/farmjkesfintrac5.png'),
          jokes: [
            'The seeder started its job quietly. No one paid much attention at first. But later, everything grew because of it.',
            'The seeder liked simple work. It just went forward and dropped seeds. No drama, just results.',
            'The seeder met the tractor. It said, “You go first.” Then followed and did its thing.',
          ],
        },
        {
          id: 'cultivator',
          title: 'Cultivator',
          image: require('../../assets/i/farmjkesfintrac6.png'),
          jokes: [
            'The cultivator didn’t like easy paths. It went deep into the ground. That’s where the real work was.',
            'The cultivator joined the field early. It made everything ready for others. Then left without asking for credit.',
            'The cultivator worked in silence. It didn’t try to impress anyone. Still, everything depended on it.',
          ],
        },
        {
          id: 'trailer',
          title: 'Trailer',
          image: require('../../assets/i/farmjkesfintrac7.png'),
          jokes: [
            'The trailer didn’t do much on its own. It just followed the tractor everywhere. But it carried all the weight.',
            'The trailer got overloaded one day. It didn’t complain at all. Just moved forward like always.',
            'The trailer watched others work. It stayed behind quietly. But without it, nothing would move.',
          ],
        },
        {
          id: 'sprayer',
          title: 'Sprayer',
          image: require('../../assets/i/farmjkesfintrac8.png'),
          jokes: [
            'The sprayer rolled into the field slowly. It spread everything evenly and carefully. No rush, just precision.',
            'The sprayer liked doing things right. It checked every line twice. Missing a spot was not an option.',
            'The sprayer joined the team. It didn’t make noise or stand out. But everything looked better after it passed.',
          ],
        },
      ],
    },
  ];

export type farmjkesfinnriddlsFlatJoke = {
  jokeId: string;
  categoryId: farmjkesfinnriddlsJokesCategory['id'];
  categoryTitle: string;
  groupId: string;
  groupTitle: string;
  groupImage: ImageSourcePropType;
  text: string;
};

export const farmjkesfinnriddlsMakeJokeId = (
  farmjkesfinnriddlsCategoryId: string,
  farmjkesfinnriddlsGroupId: string,
  farmjkesfinnriddlsJokeIndex: number,
) =>
  `farmjkesfinnriddls_${farmjkesfinnriddlsCategoryId}_${farmjkesfinnriddlsGroupId}_${farmjkesfinnriddlsJokeIndex}`;

export const farmjkesfinnriddlsFlattenJokes = (): farmjkesfinnriddlsFlatJoke[] =>
  farmjkesfinnriddlsjokesCategories.flatMap(farmjkesfinnriddlsCategory =>
    farmjkesfinnriddlsCategory.groups.flatMap(farmjkesfinnriddlsGroup =>
      farmjkesfinnriddlsGroup.jokes.map((text, index) => ({
        jokeId: farmjkesfinnriddlsMakeJokeId(
          farmjkesfinnriddlsCategory.id,
          farmjkesfinnriddlsGroup.id,
          index,
        ),
        categoryId: farmjkesfinnriddlsCategory.id,
        categoryTitle: farmjkesfinnriddlsCategory.title,
        groupId: farmjkesfinnriddlsGroup.id,
        groupTitle: farmjkesfinnriddlsGroup.title,
        groupImage: farmjkesfinnriddlsGroup.image,
        text,
      })),
    ),
  );

