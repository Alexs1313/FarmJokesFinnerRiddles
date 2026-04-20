import {
  farmjkesfinnriddlsGetHeroById,
  farmjkesfinnriddlsHeroes,
  farmjkesfinnriddlsHeroSelectedStorageKey,
  farmjkesfinnriddlsQuizPointsStorageKey,
  type farmjkesfinnriddlsHero,
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
  View,
  type ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Farmjkesfinnriddlslayou from '../Farmjkesfinnriddlscpn/Farmjkesfinnriddlslayou';

const Farmjkesfinnriddlsheros = () => {
  const [
    farmjkesfinnriddlsherosSelectedId,
    setFarmjkesfinnriddlsherosSelectedId,
  ] = useState<farmjkesfinnriddlsHeroId>('mr_orange');
  const [
    farmjkesfinnriddlsherosQuizPoints,
    setFarmjkesfinnriddlsherosQuizPoints,
  ] = useState(0);

  useFocusEffect(
    useCallback(() => {
      let farmjkesfinnriddlsherosMounted = true;
      (async () => {
        try {
          const [farmjkesfinnriddlsSel, farmjkesfinnriddlsPts] =
            await Promise.all([
              AsyncStorage.getItem(farmjkesfinnriddlsHeroSelectedStorageKey),
              AsyncStorage.getItem(farmjkesfinnriddlsQuizPointsStorageKey),
            ]);

          if (!farmjkesfinnriddlsherosMounted) {
            return;
          }

          const farmjkesfinnriddlsParsedPts = farmjkesfinnriddlsPts
            ? Number(farmjkesfinnriddlsPts)
            : 0;
          setFarmjkesfinnriddlsherosQuizPoints(
            Number.isFinite(farmjkesfinnriddlsParsedPts)
              ? Math.max(0, Math.floor(farmjkesfinnriddlsParsedPts))
              : 0,
          );

          const farmjkesfinnriddlsParsedSel =
            (farmjkesfinnriddlsSel as farmjkesfinnriddlsHeroId | null) ??
            'mr_orange';
          setFarmjkesfinnriddlsherosSelectedId(
            farmjkesfinnriddlsGetHeroById(farmjkesfinnriddlsParsedSel)
              ? farmjkesfinnriddlsParsedSel
              : 'mr_orange',
          );
        } catch {
          console.log('error');
        }
      })();

      return () => {
        farmjkesfinnriddlsherosMounted = false;
      };
    }, []),
  );

  const farmjkesfinnriddlsherosOnUse = async (
    farmjkesfinnriddlsId: farmjkesfinnriddlsHeroId,
  ) => {
    setFarmjkesfinnriddlsherosSelectedId(farmjkesfinnriddlsId);
    try {
      await AsyncStorage.setItem(
        farmjkesfinnriddlsHeroSelectedStorageKey,
        farmjkesfinnriddlsId,
      );
    } catch {
      console.log('error');
    }
  };

  const farmjkesfinnriddlsherosList = useMemo(
    () => farmjkesfinnriddlsHeroes,
    [],
  );

  const farmjkesfinnriddlsherosIsUnlocked = (
    farmjkesfinnriddlsHero: farmjkesfinnriddlsHero,
  ) => farmjkesfinnriddlsHero.unlockPoints <= farmjkesfinnriddlsherosQuizPoints;

  return (
    <Farmjkesfinnriddlslayou>
      <View style={styles.farmjkesfinnriddlsherosSafe}>
        <View style={styles.farmjkesfinnriddlsherosScreen}>
          <Text style={styles.farmjkesfinnriddlsherosTitle}>Crack Him Up</Text>
          <Text style={styles.farmjkesfinnriddlsherosSubtitle}>
            Choose Your Character for{'\n'}Crack Him Up mode
          </Text>

          <View style={styles.farmjkesfinnriddlsherosList}>
            {farmjkesfinnriddlsherosList.map(farmjkesfinnriddlsHero => {
              const farmjkesfinnriddlsUnlocked =
                farmjkesfinnriddlsherosIsUnlocked(farmjkesfinnriddlsHero);
              const farmjkesfinnriddlsUsing =
                farmjkesfinnriddlsherosSelectedId === farmjkesfinnriddlsHero.id;

              const farmjkesfinnriddlsProgressMax = Math.max(
                1,
                farmjkesfinnriddlsHero.unlockPoints,
              );
              const farmjkesfinnriddlsProgressNow = Math.min(
                farmjkesfinnriddlsProgressMax,
                farmjkesfinnriddlsherosQuizPoints,
              );
              const farmjkesfinnriddlsProgressPct =
                farmjkesfinnriddlsHero.unlockPoints === 0
                  ? 1
                  : farmjkesfinnriddlsProgressNow /
                    farmjkesfinnriddlsProgressMax;

              return (
                <View
                  key={farmjkesfinnriddlsHero.id}
                  style={styles.farmjkesfinnriddlsherosCard}>
                  {farmjkesfinnriddlsUnlocked ? (
                    <Image
                      source={farmjkesfinnriddlsHero.emotions.neutral}
                      style={styles.farmjkesfinnriddlsherosHeroImage}
                    />
                  ) : (
                    <View style={styles.farmjkesfinnriddlsherosLockedIcon}>
                      <Image
                        source={require('../../assets/i/farmjkesfinqzecls.png')}
                      />
                    </View>
                  )}

                  <Text style={styles.farmjkesfinnriddlsherosHeroTitle}>
                    {farmjkesfinnriddlsHero.title}
                  </Text>

                  {farmjkesfinnriddlsUnlocked ? (
                    <Pressable
                      disabled={farmjkesfinnriddlsUsing}
                      onPress={() =>
                        farmjkesfinnriddlsherosOnUse(farmjkesfinnriddlsHero.id)
                      }
                      style={[
                        styles.farmjkesfinnriddlsherosUseWrap,
                        farmjkesfinnriddlsUsing &&
                          styles.farmjkesfinnriddlsherosUseWrapUsing,
                      ]}>
                      <LinearGradient
                        colors={
                          farmjkesfinnriddlsUsing
                            ? ['#FF7A00', '#FF3D00']
                            : ['#2D6BFF', '#1A3B8F']
                        }
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 0}}
                        style={styles.farmjkesfinnriddlsherosUseGradient}>
                        <Text style={styles.farmjkesfinnriddlsherosUseText}>
                          {farmjkesfinnriddlsUsing ? 'Using' : 'Use'}
                        </Text>
                      </LinearGradient>
                    </Pressable>
                  ) : (
                    <>
                      <Text style={styles.farmjkesfinnriddlsherosLockedCopy}>
                        Receive more Quiz points to get the hero.
                      </Text>
                      <View style={styles.farmjkesfinnriddlsherosProgressTrack}>
                        <View
                          style={[
                            styles.farmjkesfinnriddlsherosProgressFill,
                            {
                              width: `${Math.round(
                                farmjkesfinnriddlsProgressPct * 100,
                              )}%`,
                            },
                          ]}
                        />
                        <Text
                          style={styles.farmjkesfinnriddlsherosProgressText}>
                          {farmjkesfinnriddlsProgressNow}/
                          {farmjkesfinnriddlsProgressMax}
                        </Text>
                      </View>
                    </>
                  )}
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </Farmjkesfinnriddlslayou>
  );
};

export default Farmjkesfinnriddlsheros;

const farmjkesfinnriddlsherosShadow: ViewStyle = {
  shadowColor: '#000',
  shadowOffset: {width: 0, height: 8},
  shadowOpacity: 0.22,
  shadowRadius: 14,
  elevation: 6,
};

const styles = StyleSheet.create({
  farmjkesfinnriddlsherosUseWrap: {
    width: 190,
    marginTop: 12,
    borderRadius: 12,
    overflow: 'hidden',
  },
  farmjkesfinnriddlsherosUseWrapUsing: {
    opacity: 1,
  },

  farmjkesfinnriddlsherosUseGradient: {
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  farmjkesfinnriddlsherosSafe: {
    flex: 1,
    paddingTop: 70,
  },
  farmjkesfinnriddlsherosScreen: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 90,
  },
  farmjkesfinnriddlsherosTitle: {
    fontSize: 20,
    fontFamily: 'Sansation-Bold',
    color: '#fff',
    textAlign: 'center',
  },
  farmjkesfinnriddlsherosSubtitle: {
    marginTop: 10,
    fontSize: 18,
    fontFamily: 'Sansation-Regular',
    fontStyle: 'italic',
    color: '#fff',
    textAlign: 'center',
    lineHeight: 24,
    opacity: 0.95,
  },
  farmjkesfinnriddlsherosList: {
    marginTop: 20,
    gap: 18,
  },
  farmjkesfinnriddlsherosCard: {
    width: '88%',
    alignSelf: 'center',
    backgroundColor: '#1C1C1E',
    borderRadius: 22,
    paddingHorizontal: 18,
    paddingVertical: 18,
    borderWidth: 1,
    borderColor: '#3A3A3C',
    alignItems: 'center',
    ...farmjkesfinnriddlsherosShadow,
  },
  farmjkesfinnriddlsherosHeroImage: {
    width: 190,
    height: 220,
    resizeMode: 'contain',
    marginTop: 6,
  },
  farmjkesfinnriddlsherosLockedIcon: {
    marginTop: 16,
    marginBottom: 18,
  },
  farmjkesfinnriddlsherosLockedIconText: {
    fontSize: 56,
    fontFamily: 'Sansation-Bold',
    color: '#fff',
    marginTop: -4,
  },
  farmjkesfinnriddlsherosHeroTitle: {
    marginTop: 10,
    fontSize: 20,
    fontFamily: 'Sansation-Regular',
    color: '#fff',
    textAlign: 'center',
  },

  farmjkesfinnriddlsherosUseText: {
    fontSize: 18,
    fontFamily: 'Sansation-Bold',
    color: '#fff',
  },
  farmjkesfinnriddlsherosLockedCopy: {
    marginTop: 8,
    fontSize: 14,
    fontFamily: 'Sansation-Regular',
    fontStyle: 'italic',
    color: '#fff',
    opacity: 0.9,
    textAlign: 'center',
    lineHeight: 18,
  },
  farmjkesfinnriddlsherosProgressTrack: {
    marginTop: 12,
    width: '100%',
    height: 23,
    borderRadius: 12,
    backgroundColor: '#17361F',
    overflow: 'hidden',
    justifyContent: 'center',
  },
  farmjkesfinnriddlsherosProgressFill: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#34C759',
  },
  farmjkesfinnriddlsherosProgressText: {
    fontSize: 14,
    fontFamily: 'Sansation-Regular',
    color: '#fff',
    textAlign: 'center',
  },
});
