import type {ImageSourcePropType} from 'react-native';

export type farmjkesfinnriddlsHeroId =
  | 'mr_orange'
  | 'watermelon_farmer'
  | 'senor_tomato'
  | 'tractor_farmer';

export type farmjkesfinnriddlsHeroEmotionId =
  | 'laugh'
  | 'bigSmile'
  | 'smile'
  | 'neutral';

export type farmjkesfinnriddlsHeroEmotions = {
  laugh: ImageSourcePropType;
  bigSmile: ImageSourcePropType;
  smile: ImageSourcePropType;
  neutral: ImageSourcePropType;
};

export type farmjkesfinnriddlsHeroReactions = Record<
  farmjkesfinnriddlsHeroEmotionId,
  string
>;

export type farmjkesfinnriddlsHero = {
  id: farmjkesfinnriddlsHeroId;
  title: string;
  emotions: farmjkesfinnriddlsHeroEmotions;
  reactions: farmjkesfinnriddlsHeroReactions;
  // Points needed to unlock. 0 means unlocked by default.
  unlockPoints: number;
};

export const farmjkesfinnriddlsHeroSelectedStorageKey =
  'farmjkesfinnriddls_selected_hero_v1';
export const farmjkesfinnriddlsQuizPointsStorageKey =
  'farmjkesfinnriddls_quiz_points_v1';

export const farmjkesfinnriddlsHeroes: farmjkesfinnriddlsHero[] = [
  {
    id: 'mr_orange',
    title: 'Mr. Orange',
    emotions: {
      laugh: require('../../assets/i/farmjkesfmrang.png'),
      bigSmile: require('../../assets/i/farmjkesfinneu2.png'),
      smile: require('../../assets/i/farmjkesfinnok.png'),
      neutral: require('../../assets/i/farmjkesfinneu.png'),
    },
    reactions: {
      laugh: 'Okay, that actually got me',
      bigSmile: 'Not bad, I see potential',
      smile: 'Hmm… could be juicier',
      neutral: 'That was dry… even for me',
    },
    unlockPoints: 0,
  },
  {
    id: 'watermelon_farmer',
    title: 'Watermelon Farmer',
    emotions: {
      laugh: require('../../assets/i/farmjkesfinang.png'),
      bigSmile: require('../../assets/i/farmjkesfinhap.png'),
      smile: require('../../assets/i/farmjkesfinok.png'),
      neutral: require('../../assets/i/farmjkesfinneu3.png'),
    },
    reactions: {
      laugh: 'Haha… yeah, that’s a good one',
      bigSmile: 'It’s alright… I’m not mad',
      smile: 'Meh… I’ve heard worse',
      neutral: 'That drained my energy…',
    },
    unlockPoints: 0,
  },
  {
    id: 'senor_tomato',
    title: 'Señor Tomato',
    emotions: {
      laugh: require('../../assets/i/farmjkesfiangrr.png'),
      bigSmile: require('../../assets/i/farmjkesfinahappp.png'),
      smile: require('../../assets/i/farmjkesfismil.png'),
      neutral: require('../../assets/i/farmjkesfinneu4.png'),
    },
    reactions: {
      laugh: 'HAHA! That’s brilliant!',
      bigSmile: 'Hmm… not bad at all',
      smile: 'I expected more…',
      neutral: 'This is a tragedy. A full tragedy',
    },
    unlockPoints: 20,
  },
  {
    id: 'tractor_farmer',
    title: 'Tractor Farmer',
    emotions: {
      laugh: require('../../assets/i/farmjkesfinangg.png'),
      bigSmile: require('../../assets/i/farmjkesha.png'),
      smile: require('../../assets/i/farmjkeok.png'),
      neutral: require('../../assets/i/farmjkesfinneu5.png'),
    },
    reactions: {
      laugh: 'Now that’s a proper joke',
      bigSmile: 'Yeah… that works',
      smile: 'Could be better',
      neutral: 'Nope. That ain’t it.',
    },
    unlockPoints: 40,
  },
];

export const farmjkesfinnriddlsGetHeroById = (
  farmjkesfinnriddlsId: farmjkesfinnriddlsHeroId | null | undefined,
) => farmjkesfinnriddlsHeroes.find(h => h.id === farmjkesfinnriddlsId) ?? null;
