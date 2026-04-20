import LinearGradient from 'react-native-linear-gradient';

import Sound from 'react-native-sound';

import AsyncStorage from '@react-native-async-storage/async-storage';

import React, {useEffect, useMemo, useState} from 'react';
import {
  Image,
  Platform,
  Pressable,
  Share,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Farmjkesfinnriddlslayou from '../Farmjkesfinnriddlscpn/Farmjkesfinnriddlslayou';
import {
  farmjkesfinnriddlsFlattenJokes,
  farmjkesfinnriddlsjkesFavoritesStorageKey,
  type farmjkesfinnriddlsFlatJoke,
} from '../Farmjkesfinnriddlsdata/farmjkesfinnriddlsjokes';

const Farmjkesfinnriddlsrandm = () => {
  const farmjkesfinnriddlsrandmAllJokes = useMemo(
    () => farmjkesfinnriddlsFlattenJokes(),
    [],
  );
  const [farmjkesfinnriddlsrandmJoke, setFarmjkesfinnriddlsrandmJoke] =
    useState<farmjkesfinnriddlsFlatJoke | null>(null);
  const [farmjkesfinnriddlsrandmRating, setFarmjkesfinnriddlsrandmRating] =
    useState<'gold' | 'not_bad' | 'better' | 'hay' | null>(null);

  const [
    farmjkesfinnriddlsrandmFavorites,
    setFarmjkesfinnriddlsrandmFavorites,
  ] = useState<Set<string>>(new Set());
  const [
    farmjkesfinnriddlsrandmFavoritesHydrated,
    setFarmjkesfinnriddlsrandmFavoritesHydrated,
  ] = useState(false);

  useEffect(() => {
    let farmjkesfinnriddlsrandmMounted = true;
    (async () => {
      try {
        const farmjkesfinnriddlsrandmRaw = await AsyncStorage.getItem(
          farmjkesfinnriddlsjkesFavoritesStorageKey,
        );
        if (!farmjkesfinnriddlsrandmMounted) {
          return;
        }
        const farmjkesfinnriddlsrandmList = farmjkesfinnriddlsrandmRaw
          ? (JSON.parse(farmjkesfinnriddlsrandmRaw) as string[])
          : [];
        setFarmjkesfinnriddlsrandmFavorites(
          new Set(farmjkesfinnriddlsrandmList),
        );
      } catch {
        console.log('error');
      } finally {
        if (farmjkesfinnriddlsrandmMounted) {
          setFarmjkesfinnriddlsrandmFavoritesHydrated(true);
        }
      }
    })();
    return () => {
      farmjkesfinnriddlsrandmMounted = false;
    };
  }, []);

  const farmjkesfinnriddlsrandmPersistFavorites = async (
    farmjkesfinnriddlsNext: Set<string>,
  ) => {
    setFarmjkesfinnriddlsrandmFavorites(farmjkesfinnriddlsNext);
    if (!farmjkesfinnriddlsrandmFavoritesHydrated) {
      return;
    }
    try {
      await AsyncStorage.setItem(
        farmjkesfinnriddlsjkesFavoritesStorageKey,
        JSON.stringify(Array.from(farmjkesfinnriddlsNext)),
      );
    } catch {
      console.log('error');
    }
  };

  const farmjkesfinnriddlsrandmToggleFavorite = async (
    farmjkesfinnriddlsJokeId: string,
  ) => {
    const farmjkesfinnriddlsNext = new Set(farmjkesfinnriddlsrandmFavorites);
    if (farmjkesfinnriddlsNext.has(farmjkesfinnriddlsJokeId)) {
      farmjkesfinnriddlsNext.delete(farmjkesfinnriddlsJokeId);
    } else {
      farmjkesfinnriddlsNext.add(farmjkesfinnriddlsJokeId);
    }
    await farmjkesfinnriddlsrandmPersistFavorites(farmjkesfinnriddlsNext);
  };

  const farmjkesfinnriddlsrandmShare = async (
    farmjkesfinnriddlsText: string,
  ) => {
    try {
      await Share.share({message: farmjkesfinnriddlsText});
    } catch {
      console.log('error');
    }
  };

  const farmjkesfinnriddlsrandmClick = () => {
    const farmjkesfinnriddlsrandmClickSound = new Sound(
      'kakaist-ding-sfx-330333.mp3',
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('Failed to load the sound', error);
          return;
        }
        farmjkesfinnriddlsrandmClickSound.play(success => {
          if (!success) {
            console.log('Sound playback failed');
          }
          farmjkesfinnriddlsrandmClickSound.release();
        });
      },
    );
  };

  const farmjkesfinnriddlsrandmPick = () => {
    Platform.OS === 'ios' && farmjkesfinnriddlsrandmClick();
    if (farmjkesfinnriddlsrandmAllJokes.length === 0) {
      return;
    }
    const farmjkesfinnriddlsrandmIndex = Math.floor(
      Math.random() * farmjkesfinnriddlsrandmAllJokes.length,
    );
    setFarmjkesfinnriddlsrandmJoke(
      farmjkesfinnriddlsrandmAllJokes[farmjkesfinnriddlsrandmIndex],
    );
    setFarmjkesfinnriddlsrandmRating(null);
  };

  const farmjkesfinnriddlsrandmReset = () => {
    setFarmjkesfinnriddlsrandmJoke(null);
    setFarmjkesfinnriddlsrandmRating(null);
  };

  const farmjkesfinnriddlsrandmIsRated = farmjkesfinnriddlsrandmRating !== null;

  const farmjkesfinnriddlsrandmRateGradient = (
    farmjkesfinnriddlsActive: boolean,
  ) =>
    farmjkesfinnriddlsActive
      ? ['#2E7BFF', '#1B4EDB']
      : ['#1C1C1ECC', '#1C1C1ECC'];

  return (
    <Farmjkesfinnriddlslayou>
      <SafeAreaView style={styles.farmjkesfinnriddlsrandmSafe}>
        <View style={styles.farmjkesfinnriddlsrandmScreen}>
          <Text style={styles.farmjkesfinnriddlsrandmTitle}>Random Joke</Text>
          <Text style={styles.farmjkesfinnriddlsrandmSubtitle}>
            {farmjkesfinnriddlsrandmJoke
              ? 'Please let me know if you enjoy it.'
              : 'Ring the bell to get your joke!'}
          </Text>

          {!farmjkesfinnriddlsrandmJoke ? (
            <View style={styles.farmjkesfinnriddlsrandmBellCenterWrap}>
              <Pressable
                onPress={farmjkesfinnriddlsrandmPick}
                style={styles.farmjkesfinnriddlsrandmBellWrap}
                hitSlop={10}>
                <Image source={require('../../assets/i/farmjkesfinbll.png')} />
              </Pressable>
            </View>
          ) : (
            <>
              <View style={styles.farmjkesfinnriddlsrandmJokeCard}>
                <Image
                  source={farmjkesfinnriddlsrandmJoke.groupImage}
                  style={styles.farmjkesfinnriddlsrandmJokeImg}
                />
                <Text style={styles.farmjkesfinnriddlsrandmJokeText}>
                  {farmjkesfinnriddlsrandmJoke.text}
                </Text>

                <View style={styles.farmjkesfinnriddlsrandmJokeActions}>
                  <Pressable
                    onPress={() =>
                      farmjkesfinnriddlsrandmToggleFavorite(
                        farmjkesfinnriddlsrandmJoke.jokeId,
                      )
                    }
                    hitSlop={10}
                    style={styles.farmjkesfinnriddlsrandmIconButton}>
                    <Image
                      source={
                        farmjkesfinnriddlsrandmFavorites.has(
                          farmjkesfinnriddlsrandmJoke.jokeId,
                        )
                          ? require('../../assets/i/farmjkesfinsavd.png')
                          : require('../../assets/i/farmjkesfinsave.png')
                      }
                    />
                  </Pressable>

                  <Pressable
                    onPress={() =>
                      farmjkesfinnriddlsrandmShare(
                        farmjkesfinnriddlsrandmJoke.text,
                      )
                    }
                    hitSlop={10}
                    style={styles.farmjkesfinnriddlsrandmIconButton}>
                    <Image
                      source={require('../../assets/i/farmjkesfintshr.png')}
                    />
                  </Pressable>
                </View>
              </View>

              <View style={styles.farmjkesfinnriddlsrandmRatings}>
                <Pressable
                  onPress={() => setFarmjkesfinnriddlsrandmRating('gold')}
                  disabled={farmjkesfinnriddlsrandmIsRated}
                  style={styles.farmjkesfinnriddlsrandmRateButton}>
                  <LinearGradient
                    colors={farmjkesfinnriddlsrandmRateGradient(
                      farmjkesfinnriddlsrandmRating === 'gold',
                    )}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={styles.farmjkesfinnriddlsrandmRateButtonGradient}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 10,
                        justifyContent: 'space-between',
                        width: '100%',
                        height: 47,
                        paddingHorizontal: 24,
                      }}>
                      <Image
                        source={require('../../assets/i/farmjkesfinbopt1.png')}
                      />
                      <Text style={styles.farmjkesfinnriddlsrandmRateText}>
                        That’s Gold
                      </Text>
                      <Image
                        source={require('../../assets/i/farmjkesfinbopt1.png')}
                      />
                    </View>
                  </LinearGradient>
                </Pressable>

                <Pressable
                  onPress={() => setFarmjkesfinnriddlsrandmRating('not_bad')}
                  disabled={farmjkesfinnriddlsrandmIsRated}
                  style={styles.farmjkesfinnriddlsrandmRateButton}>
                  <LinearGradient
                    colors={farmjkesfinnriddlsrandmRateGradient(
                      farmjkesfinnriddlsrandmRating === 'not_bad',
                    )}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={styles.farmjkesfinnriddlsrandmRateButtonGradient}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 10,
                        justifyContent: 'space-between',
                        width: '100%',
                        height: 47,
                        paddingHorizontal: 24,
                      }}>
                      <Image
                        source={require('../../assets/i/farmjkesfinbopt2.png')}
                      />
                      <Text style={styles.farmjkesfinnriddlsrandmRateText}>
                        Not Bad
                      </Text>
                      <Image
                        source={require('../../assets/i/farmjkesfinbopt2.png')}
                      />
                    </View>
                  </LinearGradient>
                </Pressable>

                <Pressable
                  onPress={() => setFarmjkesfinnriddlsrandmRating('better')}
                  disabled={farmjkesfinnriddlsrandmIsRated}
                  style={styles.farmjkesfinnriddlsrandmRateButton}>
                  <LinearGradient
                    colors={farmjkesfinnriddlsrandmRateGradient(
                      farmjkesfinnriddlsrandmRating === 'better',
                    )}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={styles.farmjkesfinnriddlsrandmRateButtonGradient}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 10,
                        justifyContent: 'space-between',
                        width: '100%',
                        height: 47,
                        paddingHorizontal: 24,
                      }}>
                      <Image
                        source={require('../../assets/i/farmjkesfinbopt3.png')}
                      />
                      <Text style={styles.farmjkesfinnriddlsrandmRateText}>
                        Could be better
                      </Text>
                      <Image
                        source={require('../../assets/i/farmjkesfinbopt3.png')}
                      />
                    </View>
                  </LinearGradient>
                </Pressable>

                <Pressable
                  onPress={() => setFarmjkesfinnriddlsrandmRating('hay')}
                  disabled={farmjkesfinnriddlsrandmIsRated}
                  style={styles.farmjkesfinnriddlsrandmRateButton}>
                  <LinearGradient
                    colors={farmjkesfinnriddlsrandmRateGradient(
                      farmjkesfinnriddlsrandmRating === 'hay',
                    )}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={styles.farmjkesfinnriddlsrandmRateButtonGradient}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 10,
                        justifyContent: 'space-between',
                        width: '100%',
                        height: 47,
                        paddingHorizontal: 24,
                      }}>
                      <Image
                        source={require('../../assets/i/farmjkesfinbopt4.png')}
                      />
                      <Text style={styles.farmjkesfinnriddlsrandmRateText}>
                        Day as Hay
                      </Text>
                      <Image
                        source={require('../../assets/i/farmjkesfinbopt4.png')}
                      />
                    </View>
                  </LinearGradient>
                </Pressable>
              </View>

              {farmjkesfinnriddlsrandmIsRated ? (
                <Pressable onPress={farmjkesfinnriddlsrandmReset}>
                  <LinearGradient
                    colors={['#FF7A00', '#FF3D00']}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={styles.farmjkesfinnriddlsrandmReset}>
                    <Text style={styles.farmjkesfinnriddlsrandmResetText}>
                      Reset
                    </Text>
                  </LinearGradient>
                </Pressable>
              ) : null}
            </>
          )}
        </View>
      </SafeAreaView>
    </Farmjkesfinnriddlslayou>
  );
};

export default Farmjkesfinnriddlsrandm;

const styles = StyleSheet.create({
  farmjkesfinnriddlsrandmTitle: {
    fontSize: 20,
    fontFamily: 'Sansation-Bold',
    color: '#fff',
    textAlign: 'center',
  },
  farmjkesfinnriddlsrandmSubtitle: {
    marginTop: 18,
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Sansation-Regular',
    textAlign: 'center',
    lineHeight: 24,
    width: '60%',
  },

  farmjkesfinnriddlsrandmSafe: {
    flex: 1,
  },
  farmjkesfinnriddlsrandmScreen: {
    flex: 1,
    paddingTop: 18,
    paddingHorizontal: 14,
    paddingBottom: 90,
    alignItems: 'center',
  },

  farmjkesfinnriddlsrandmBellWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  farmjkesfinnriddlsrandmBellCenterWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  farmjkesfinnriddlsrandmBell: {
    fontSize: 170,
    textShadowColor: '#00000055',
    textShadowRadius: 18,
    textShadowOffset: {width: 0, height: 6},
  },
  farmjkesfinnriddlsrandmJokeCard: {
    flexDirection: 'row',
    gap: 18,
    alignItems: 'center',
    backgroundColor: '#2D1B13',
    borderRadius: 24,
    paddingVertical: 20,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: '#4A3124',
    minHeight: 160,

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 30,
  },

  farmjkesfinnriddlsrandmJokeImg: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
  },
  farmjkesfinnriddlsrandmJokeText: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Sansation-Regular',
    color: '#fff',
    textAlign: 'center',
  },
  farmjkesfinnriddlsrandmJokeActions: {
    gap: 18,
    alignItems: 'center',
  },
  farmjkesfinnriddlsrandmIconButton: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  farmjkesfinnriddlsrandmIcon: {
    fontSize: 22,
    color: '#fff',
    fontFamily: 'Sansation-Bold',
  },
  farmjkesfinnriddlsrandmIconActive: {
    color: '#FFB000',
  },
  farmjkesfinnriddlsrandmRatings: {
    marginTop: 38,
    width: '100%',
    gap: 14,
  },
  farmjkesfinnriddlsrandmRateButton: {
    width: '78%',

    alignSelf: 'center',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#FFFFFF1F',
    overflow: 'hidden',

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  farmjkesfinnriddlsrandmRateButtonGradient: {
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#FFFFFF1F',
  },
  farmjkesfinnriddlsrandmRateText: {
    fontSize: 18,
    fontFamily: 'Sansation-Regular',
    color: '#fff',
  },
  farmjkesfinnriddlsrandmReset: {
    marginTop: 28,
    width: 250,
    height: 40,
    borderRadius: 12,

    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  farmjkesfinnriddlsrandmResetText: {
    fontSize: 18,
    fontFamily: 'Sansation-Bold',
    color: '#fff',
  },
});
