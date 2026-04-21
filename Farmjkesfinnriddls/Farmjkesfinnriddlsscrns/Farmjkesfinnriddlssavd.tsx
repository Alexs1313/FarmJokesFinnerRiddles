import {
  farmjkesfinnriddlsFlattenJokes,
  farmjkesfinnriddlsjkesFavoritesStorageKey,
  type farmjkesfinnriddlsFlatJoke,
} from '../Farmjkesfinnriddlsdata/farmjkesfinnriddlsjokes';
import Orientation from 'react-native-orientation-locker';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  Image,
  Modal,
  Platform,
  Pressable,
  Share,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Farmjkesfinnriddlslayou from '../Farmjkesfinnriddlscpn/Farmjkesfinnriddlslayou';

const Farmjkesfinnriddlssavd = () => {
  const navigation = useNavigation();

  const farmjkesfinnriddlssavdAllJokes = useMemo(
    () => farmjkesfinnriddlsFlattenJokes(),
    [],
  );

  const [farmjkesfinnriddlssavdFavorites, setFarmjkesfinnriddlssavdFavorites] =
    useState<Set<string>>(new Set());
  const [farmjkesfinnriddlssavdClearOpen, setFarmjkesfinnriddlssavdClearOpen] =
    useState(false);

  const farmjkesfinnriddlssavdHydrateFavorites = async () => {
    try {
      const farmjkesfinnriddlssavdRaw = await AsyncStorage.getItem(
        farmjkesfinnriddlsjkesFavoritesStorageKey,
      );
      const farmjkesfinnriddlssavdList = farmjkesfinnriddlssavdRaw
        ? (JSON.parse(farmjkesfinnriddlssavdRaw) as string[])
        : [];
      setFarmjkesfinnriddlssavdFavorites(new Set(farmjkesfinnriddlssavdList));
    } catch {
      // ignore storage failures
    }
  };

  useEffect(() => {
    farmjkesfinnriddlssavdHydrateFavorites();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      farmjkesfinnriddlssavdHydrateFavorites();
    }, []),
  );

  const farmjkesfinnriddlssavdPersistFavorites = async (
    farmjkesfinnriddlsNext: Set<string>,
  ) => {
    setFarmjkesfinnriddlssavdFavorites(farmjkesfinnriddlsNext);
    try {
      await AsyncStorage.setItem(
        farmjkesfinnriddlsjkesFavoritesStorageKey,
        JSON.stringify(Array.from(farmjkesfinnriddlsNext)),
      );
    } catch {
      // ignore storage failures
    }
  };

  const farmjkesfinnriddlssavdToggleFavorite = async (
    farmjkesfinnriddlsJokeId: string,
  ) => {
    const farmjkesfinnriddlsNext = new Set(farmjkesfinnriddlssavdFavorites);
    if (farmjkesfinnriddlsNext.has(farmjkesfinnriddlsJokeId)) {
      farmjkesfinnriddlsNext.delete(farmjkesfinnriddlsJokeId);
    } else {
      farmjkesfinnriddlsNext.add(farmjkesfinnriddlsJokeId);
    }
    await farmjkesfinnriddlssavdPersistFavorites(farmjkesfinnriddlsNext);
  };

  const farmjkesfinnriddlssavdShare = async (
    farmjkesfinnriddlsText: string,
  ) => {
    try {
      await Share.share({message: farmjkesfinnriddlsText});
    } catch {
      console.log('error');
    }
  };

  const farmjkesfinnriddlssavdFavoriteJokes = useMemo(() => {
    const farmjkesfinnriddlssavdIds = farmjkesfinnriddlssavdFavorites;
    const farmjkesfinnriddlssavdMap = new Map(
      farmjkesfinnriddlssavdAllJokes.map(j => [j.jokeId, j]),
    );
    return Array.from(farmjkesfinnriddlssavdIds)
      .map(id => farmjkesfinnriddlssavdMap.get(id))
      .filter(Boolean) as farmjkesfinnriddlsFlatJoke[];
  }, [farmjkesfinnriddlssavdAllJokes, farmjkesfinnriddlssavdFavorites]);

  const farmjkesfinnriddlssavdClearAll = async () => {
    setFarmjkesfinnriddlssavdClearOpen(false);
    await farmjkesfinnriddlssavdPersistFavorites(new Set());
  };

  const farmjkesfinnriddlssavdExplore = () => {
    navigation.navigate('Farmjkesfinnriddlsjkes' as never);
  };

  useFocusEffect(
    useCallback(() => {
      if (Platform.OS === 'android' && farmjkesfinnriddlssavdClearOpen) {
        Orientation.lockToPortrait();
      }

      return () => {
        Orientation.unlockAllOrientations();
      };
    }, [farmjkesfinnriddlssavdClearOpen]),
  );

  return (
    <Farmjkesfinnriddlslayou>
      <View style={styles.farmjkesfinnriddlssavdSafe}>
        <View style={styles.farmjkesfinnriddlssavdScreen}>
          <Text style={styles.farmjkesfinnriddlssavdTitle}>Favorite Jokes</Text>

          {farmjkesfinnriddlssavdFavoriteJokes.length === 0 ? (
            <>
              <View style={styles.farmjkesfinnriddlssavdEmptyCard}>
                <Text style={styles.farmjkesfinnriddlssavdEmptyTitle}>
                  No favorite jokes yet
                </Text>
                <Text style={styles.farmjkesfinnriddlssavdEmptySubtitle}>
                  He’s already on his second{'\n'}watermelon
                </Text>
              </View>

              <Image
                source={require('../../assets/i/farmjkesfinqzemptsv.png')}
                style={styles.farmjkesfinnriddlssavdEmptyCharacter}
              />

              <Pressable
                style={styles.farmjkesfinnriddlssavdCtaWrap}
                onPress={farmjkesfinnriddlssavdExplore}>
                <LinearGradient
                  colors={['#FF7A00', '#FF3D00']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={styles.farmjkesfinnriddlssavdCtaGradient}>
                  <Text style={styles.farmjkesfinnriddlssavdCtaText}>
                    Explore Jokes
                  </Text>
                </LinearGradient>
              </Pressable>
            </>
          ) : (
            <>
              <View style={styles.farmjkesfinnriddlssavdList}>
                {farmjkesfinnriddlssavdFavoriteJokes.map(
                  farmjkesfinnriddlsJoke => (
                    <View
                      key={farmjkesfinnriddlsJoke.jokeId}
                      style={styles.farmjkesfinnriddlssavdJokeCard}>
                      <Image
                        source={farmjkesfinnriddlsJoke.groupImage}
                        style={styles.farmjkesfinnriddlssavdJokeImg}
                      />

                      <Text style={styles.farmjkesfinnriddlssavdJokeText}>
                        {farmjkesfinnriddlsJoke.text}
                      </Text>

                      <View style={styles.farmjkesfinnriddlssavdJokeActions}>
                        <Pressable
                          onPress={() =>
                            farmjkesfinnriddlssavdToggleFavorite(
                              farmjkesfinnriddlsJoke.jokeId,
                            )
                          }
                          hitSlop={10}
                          style={styles.farmjkesfinnriddlssavdIconButton}>
                          <Image
                            source={require('../../assets/i/farmjkesfinsavd.png')}
                          />
                        </Pressable>

                        <Pressable
                          onPress={() =>
                            farmjkesfinnriddlssavdShare(
                              farmjkesfinnriddlsJoke.text,
                            )
                          }
                          hitSlop={10}
                          style={styles.farmjkesfinnriddlssavdIconButton}>
                          <Image
                            source={require('../../assets/i/farmjkesfintshr.png')}
                          />
                        </Pressable>
                      </View>
                    </View>
                  ),
                )}
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                  paddingBottom: 20,
                }}>
                <Pressable
                  style={styles.farmjkesfinnriddlssavdClearWrap}
                  onPress={() => setFarmjkesfinnriddlssavdClearOpen(true)}>
                  <LinearGradient
                    colors={['#FF7A00', '#FF3D00']}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={styles.farmjkesfinnriddlssavdClearGradient}>
                    <Text style={styles.farmjkesfinnriddlssavdClearText}>
                      Clear Favorite Jokes
                    </Text>
                  </LinearGradient>
                </Pressable>
              </View>
            </>
          )}
        </View>

        <Modal
          visible={farmjkesfinnriddlssavdClearOpen}
          transparent
          statusBarTranslucent={Platform.OS === 'android'}
          animationType="fade"
          onRequestClose={() => setFarmjkesfinnriddlssavdClearOpen(false)}>
          <View style={styles.farmjkesfinnriddlssavdModalOverlay}>
            <View style={styles.farmjkesfinnriddlssavdModalCard}>
              <Text style={styles.farmjkesfinnriddlssavdModalTitle}>
                Clear Favorite Jokes?
              </Text>
              <Text style={styles.farmjkesfinnriddlssavdModalSubtitle}>
                This will remove all your favorite{'\n'}jokes.
              </Text>
            </View>
            <View style={styles.farmjkesfinnriddlssavdModalButtons}>
              <Pressable
                onPress={() => setFarmjkesfinnriddlssavdClearOpen(false)}
                style={styles.farmjkesfinnriddlssavdModalBtnWrap}>
                <LinearGradient
                  colors={['#34C759', '#1E9E52']}
                  style={styles.farmjkesfinnriddlssavdModalBtnGradient}>
                  <Text style={styles.farmjkesfinnriddlssavdModalBtnText}>
                    Cancel
                  </Text>
                </LinearGradient>
              </Pressable>

              <Pressable
                onPress={farmjkesfinnriddlssavdClearAll}
                style={styles.farmjkesfinnriddlssavdModalBtnWrap}>
                <LinearGradient
                  colors={['#FF3B30', '#B91C1C']}
                  style={styles.farmjkesfinnriddlssavdModalBtnGradient}>
                  <Text style={styles.farmjkesfinnriddlssavdModalBtnText}>
                    Confirm
                  </Text>
                </LinearGradient>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </Farmjkesfinnriddlslayou>
  );
};

export default Farmjkesfinnriddlssavd;

const styles = StyleSheet.create({
  farmjkesfinnriddlssavdJokeImg: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
  },
  farmjkesfinnriddlssavdJokeText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 18,
    fontFamily: 'Sansation-Regular',
    color: '#fff',
    textAlign: 'center',
  },

  farmjkesfinnriddlssavdSafe: {
    flex: 1,
  },
  farmjkesfinnriddlssavdScreen: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 20,
    paddingBottom: 90,
  },
  farmjkesfinnriddlssavdTitle: {
    fontSize: 20,
    fontFamily: 'Sansation-Bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
  },
  farmjkesfinnriddlssavdList: {
    gap: 14,
  },
  farmjkesfinnriddlssavdJokeCard: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    backgroundColor: '#2D1B13',
    borderRadius: 24,
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: '#4A3124',
    minHeight: 150,

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  farmjkesfinnriddlssavdJokeActions: {
    gap: 10,
    alignItems: 'center',
  },
  farmjkesfinnriddlssavdIconButton: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },

  farmjkesfinnriddlssavdIcon: {
    fontSize: 22,
    color: '#fff',
    fontFamily: 'Sansation-Bold',
  },
  farmjkesfinnriddlssavdIconActive: {
    color: '#FFB000',
  },
  farmjkesfinnriddlssavdClearWrap: {
    width: 250,
    alignSelf: 'center',
    marginTop: 18,
    borderRadius: 12,
    overflow: 'hidden',

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  farmjkesfinnriddlssavdClearGradient: {
    width: '100%',
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  farmjkesfinnriddlssavdClearText: {
    fontSize: 18,
    fontFamily: 'Sansation-Bold',
    color: '#fff',
  },
  farmjkesfinnriddlssavdEmptyCard: {
    backgroundColor: '#2D1B13',
    borderRadius: 22,
    paddingHorizontal: 18,
    paddingVertical: 18,
    borderWidth: 1,
    borderColor: '#4A3124',
    minHeight: 170,
    justifyContent: 'center',
  },
  farmjkesfinnriddlssavdEmptyTitle: {
    fontSize: 20,
    fontFamily: 'Sansation-Bold',
    color: '#fff',
    textAlign: 'center',
  },
  farmjkesfinnriddlssavdEmptySubtitle: {
    marginTop: 15,
    fontSize: 16,
    fontFamily: 'Sansation-Regular',
    fontStyle: 'italic',
    color: '#fff',
    textAlign: 'center',
    lineHeight: 22,
    opacity: 0.95,
  },
  farmjkesfinnriddlssavdEmptyCharacter: {
    marginTop: 44,

    alignSelf: 'center',
    resizeMode: 'contain',
  },
  farmjkesfinnriddlssavdCtaWrap: {
    width: 250,
    marginTop: 24,
    borderRadius: 12,
    overflow: 'hidden',
    alignSelf: 'center',

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  farmjkesfinnriddlssavdCtaGradient: {
    width: '100%',
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  farmjkesfinnriddlssavdCtaText: {
    fontSize: 18,
    fontFamily: 'Sansation-Bold',
    color: '#fff',
  },
  farmjkesfinnriddlssavdModalOverlay: {
    flex: 1,
    backgroundColor: '#00000066',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  farmjkesfinnriddlssavdModalCard: {
    width: '100%',
    backgroundColor: '#2D1B13',
    borderRadius: 22,
    paddingHorizontal: 18,
    paddingVertical: 18,
    borderWidth: 1,
    borderColor: '#4A3124',
  },
  farmjkesfinnriddlssavdModalTitle: {
    fontSize: 20,
    fontFamily: 'Sansation-Bold',
    color: '#fff',
    textAlign: 'center',
  },
  farmjkesfinnriddlssavdModalSubtitle: {
    marginTop: 10,
    fontSize: 16,
    fontFamily: 'Sansation-Regular',
    fontStyle: 'italic',
    color: '#fff',
    textAlign: 'center',
    lineHeight: 22,
    opacity: 0.95,
  },
  farmjkesfinnriddlssavdModalButtons: {
    marginTop: 16,
    flexDirection: 'row',
    gap: 24,
    width: '80%',
  },
  farmjkesfinnriddlssavdModalBtnWrap: {
    flex: 1,
    borderRadius: 22,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  farmjkesfinnriddlssavdModalBtnGradient: {
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  farmjkesfinnriddlssavdModalBtnText: {
    fontSize: 16,
    fontFamily: 'Sansation-Regular',
    color: '#fff',
  },
});
