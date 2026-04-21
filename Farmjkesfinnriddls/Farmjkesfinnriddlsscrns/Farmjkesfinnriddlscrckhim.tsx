import {
  farmjkesfinnriddlsGetHeroById,
  farmjkesfinnriddlsHeroSelectedStorageKey,
  type farmjkesfinnriddlsHeroEmotionId,
  type farmjkesfinnriddlsHeroId,
} from '../Farmjkesfinnriddlsdata/farmjkesfinnriddlsheroes';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useMemo, useState} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Farmjkesfinnriddlslayou from '../Farmjkesfinnriddlscpn/Farmjkesfinnriddlslayou';

const farmjkesfinnriddlscrckhimPickEmotion = (
  farmjkesfinnriddlsText: string,
): farmjkesfinnriddlsHeroEmotionId => {
  const farmjkesfinnriddlsT = farmjkesfinnriddlsText.trim();
  const farmjkesfinnriddlsLen = farmjkesfinnriddlsT.length;

  const farmjkesfinnriddlsPool: farmjkesfinnriddlsHeroEmotionId[] =
    farmjkesfinnriddlsLen < 25
      ? ['neutral', 'smile', 'neutral', 'smile']
      : farmjkesfinnriddlsLen < 80
      ? ['smile', 'bigSmile', 'smile', 'neutral']
      : ['bigSmile', 'laugh', 'bigSmile', 'smile'];

  const farmjkesfinnriddlsHasPunch =
    /[!?]/.test(farmjkesfinnriddlsT) ||
    /\b(haha|lol)\b/i.test(farmjkesfinnriddlsT);
  if (farmjkesfinnriddlsHasPunch && Math.random() < 0.35) {
    return 'laugh';
  }

  const farmjkesfinnriddlsPicked =
    farmjkesfinnriddlsPool[
      Math.floor(Math.random() * farmjkesfinnriddlsPool.length)
    ];
  return farmjkesfinnriddlsPicked;
};

const farmjkesfinnriddlscrckhimPickDifferentEmotion = (
  farmjkesfinnriddlsText: string,
  farmjkesfinnriddlsPrev: farmjkesfinnriddlsHeroEmotionId,
): farmjkesfinnriddlsHeroEmotionId => {
  const farmjkesfinnriddlsFirst = farmjkesfinnriddlscrckhimPickEmotion(
    farmjkesfinnriddlsText,
  );
  if (farmjkesfinnriddlsFirst !== farmjkesfinnriddlsPrev) {
    return farmjkesfinnriddlsFirst;
  }

  const farmjkesfinnriddlsAll: farmjkesfinnriddlsHeroEmotionId[] = [
    'laugh',
    'bigSmile',
    'smile',
    'neutral',
  ];
  const farmjkesfinnriddlsIdx = Math.max(
    0,
    farmjkesfinnriddlsAll.indexOf(farmjkesfinnriddlsPrev),
  );
  return farmjkesfinnriddlsAll[
    (farmjkesfinnriddlsIdx + 1) % farmjkesfinnriddlsAll.length
  ];
};

const Farmjkesfinnriddlscrckhim = () => {
  const [farmjkesfinnriddlscrckhimHeroId, setFarmjkesfinnriddlscrckhimHeroId] =
    useState<farmjkesfinnriddlsHeroId>('mr_orange');

  useFocusEffect(
    useCallback(() => {
      setFarmjkesfinnriddlscrckhimSent(false);
      setFarmjkesfinnriddlscrckhimText('');
    }, []),
  );

  useFocusEffect(
    useCallback(() => {
      let farmjkesfinnriddlscrckhimMounted = true;
      (async () => {
        try {
          const farmjkesfinnriddlscrckhimRaw = await AsyncStorage.getItem(
            farmjkesfinnriddlsHeroSelectedStorageKey,
          );
          if (!farmjkesfinnriddlscrckhimMounted) {
            return;
          }
          const farmjkesfinnriddlscrckhimParsed =
            (farmjkesfinnriddlscrckhimRaw as farmjkesfinnriddlsHeroId | null) ??
            'mr_orange';
          setFarmjkesfinnriddlscrckhimHeroId(
            farmjkesfinnriddlsGetHeroById(farmjkesfinnriddlscrckhimParsed)
              ? farmjkesfinnriddlscrckhimParsed
              : 'mr_orange',
          );
        } catch {
          console.log('error');
        }
      })();

      return () => {
        farmjkesfinnriddlscrckhimMounted = false;
      };
    }, []),
  );

  const [farmjkesfinnriddlscrckhimText, setFarmjkesfinnriddlscrckhimText] =
    useState('');
  const [farmjkesfinnriddlscrckhimSent, setFarmjkesfinnriddlscrckhimSent] =
    useState(false);
  const [
    farmjkesfinnriddlscrckhimEmotionId,
    setFarmjkesfinnriddlscrckhimEmotionId,
  ] = useState<farmjkesfinnriddlsHeroEmotionId>('neutral');

  const farmjkesfinnriddlscrckhimCanSend = useMemo(() => {
    return (
      farmjkesfinnriddlscrckhimText.trim().length > 0 &&
      !farmjkesfinnriddlscrckhimSent
    );
  }, [farmjkesfinnriddlscrckhimSent, farmjkesfinnriddlscrckhimText]);

  const farmjkesfinnriddlscrckhimHero = useMemo(() => {
    return (
      farmjkesfinnriddlsGetHeroById(farmjkesfinnriddlscrckhimHeroId) ??
      farmjkesfinnriddlsGetHeroById('mr_orange')!
    );
  }, [farmjkesfinnriddlscrckhimHeroId]);

  const farmjkesfinnriddlscrckhimReaction = useMemo(() => {
    const farmjkesfinnriddlsEmotions = farmjkesfinnriddlscrckhimHero.emotions;
    const farmjkesfinnriddlsImage =
      farmjkesfinnriddlsEmotions[farmjkesfinnriddlscrckhimEmotionId];
    const farmjkesfinnriddlsMessage =
      farmjkesfinnriddlscrckhimHero.reactions[
        farmjkesfinnriddlscrckhimEmotionId
      ];

    return {
      emotionId: farmjkesfinnriddlscrckhimEmotionId,
      message: farmjkesfinnriddlsMessage,
      image: farmjkesfinnriddlsImage,
    };
  }, [farmjkesfinnriddlscrckhimEmotionId, farmjkesfinnriddlscrckhimHero]);

  const farmjkesfinnriddlscrckhimOnChange = (
    farmjkesfinnriddlsNext: string,
  ) => {
    setFarmjkesfinnriddlscrckhimText(farmjkesfinnriddlsNext);
    if (farmjkesfinnriddlscrckhimSent) {
      setFarmjkesfinnriddlscrckhimSent(false);
      setFarmjkesfinnriddlscrckhimEmotionId('neutral');
    }
  };

  const farmjkesfinnriddlscrckhimSend = () => {
    if (!farmjkesfinnriddlscrckhimCanSend) {
      return;
    }
    const farmjkesfinnriddlsPickedEmotion =
      farmjkesfinnriddlscrckhimPickDifferentEmotion(
        farmjkesfinnriddlscrckhimText,
        farmjkesfinnriddlscrckhimEmotionId,
      );
    setFarmjkesfinnriddlscrckhimEmotionId(farmjkesfinnriddlsPickedEmotion);
    setFarmjkesfinnriddlscrckhimSent(true);
    setFarmjkesfinnriddlscrckhimText('');
  };

  return (
    <Farmjkesfinnriddlslayou>
      <View style={styles.farmjkesfinnriddlscrckhimSafe}>
        <View style={styles.farmjkesfinnriddlscrckhimScreen}>
          <Text style={styles.farmjkesfinnriddlscrckhimTitle}>
            Crack Him Up
          </Text>

          <View style={styles.farmjkesfinnriddlscrckhimSpeech}>
            <Text style={styles.farmjkesfinnriddlscrckhimSpeechText}>
              {farmjkesfinnriddlscrckhimSent
                ? farmjkesfinnriddlscrckhimReaction.message?.trim()
                  ? farmjkesfinnriddlscrckhimReaction.message
                  : 'Type a joke to crack me up!'
                : 'Type a joke to crack me up!'}
            </Text>
          </View>

          <Image
            source={farmjkesfinnriddlscrckhimReaction.image}
            style={styles.farmjkesfinnriddlscrckhimCharacter}
          />

          <View style={styles.farmjkesfinnriddlscrckhimInputCard}>
            <TextInput
              value={farmjkesfinnriddlscrckhimText}
              onChangeText={farmjkesfinnriddlscrckhimOnChange}
              placeholder="Type here..."
              placeholderTextColor="#E8DCC4"
              multiline
              style={styles.farmjkesfinnriddlscrckhimInput}
              selectionColor="#FF7A00"
              textAlignVertical="top"
              maxLength={280}
            />
          </View>

          <Pressable
            onPress={farmjkesfinnriddlscrckhimSend}
            disabled={!farmjkesfinnriddlscrckhimCanSend}
            style={[
              styles.farmjkesfinnriddlscrckhimSendWrap,
              !farmjkesfinnriddlscrckhimCanSend &&
                styles.farmjkesfinnriddlscrckhimSendWrapDisabled,
            ]}>
            <LinearGradient
              colors={['#FF7A00', '#FF3D00']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.farmjkesfinnriddlscrckhimSendGradient}>
              <Image source={require('../../assets/i/farmjkesfinsand.png')} />
              <Text style={styles.farmjkesfinnriddlscrckhimSendText}>
                {'SEND JOKE'}
              </Text>
            </LinearGradient>
          </Pressable>
        </View>
      </View>
    </Farmjkesfinnriddlslayou>
  );
};

export default Farmjkesfinnriddlscrckhim;

const styles = StyleSheet.create({
  farmjkesfinnriddlscrckhimInputCard: {
    width: '100%',
    minHeight: 150,
    borderRadius: 24,
    backgroundColor: '#2D1B13',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: '#4A3124',

    color: '#E8DCC4',
  },

  farmjkesfinnriddlscrckhimSafe: {
    flex: 1,
    paddingTop: 70,
  },
  farmjkesfinnriddlscrckhimScreen: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 90,
    alignItems: 'center',
  },
  farmjkesfinnriddlscrckhimTitle: {
    fontSize: 20,
    fontFamily: 'Sansation-Bold',
    color: '#fff',
    textAlign: 'center',
  },
  farmjkesfinnriddlscrckhimSpeech: {
    marginTop: 38,
    width: '100%',
    minHeight: 80,
    borderRadius: 24,
    backgroundColor: '#2D1B13',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: '#4A3124',
    marginBottom: 16,
  },
  farmjkesfinnriddlscrckhimSpeechText: {
    fontSize: 20,
    fontFamily: 'Sansation-Regular',
    color: '#fff',
    textAlign: 'center',
    lineHeight: 22,
  },
  farmjkesfinnriddlscrckhimCharacter: {
    marginTop: 18,
    top: 8,
    resizeMode: 'contain',
    zIndex: 1,
    width: 190,
    height: 270,
  },

  farmjkesfinnriddlscrckhimInput: {
    minHeight: 90,
    fontSize: 14,
    lineHeight: 18,
    fontFamily: 'Sansation-Regular',
    color: '#fff',
  },
  farmjkesfinnriddlscrckhimSendWrap: {
    width: 250,
    marginTop: 18,
    borderRadius: 12,
    overflow: 'hidden',
  },
  farmjkesfinnriddlscrckhimSendWrapDisabled: {
    opacity: 0.6,
  },

  farmjkesfinnriddlscrckhimSendGradient: {
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  farmjkesfinnriddlscrckhimSendText: {
    fontSize: 18,
    fontFamily: 'Sansation-Bold',
    color: '#fff',
  },
});
