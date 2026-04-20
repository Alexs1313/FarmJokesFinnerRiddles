import React, {useCallback, useState} from 'react';

import {
  farmjkesfinnriddlsQuizQuestions,
  farmjkesfinnriddlsQuizSessionLength,
  type farmjkesfinnriddlsQuizQuestion,
} from '../Farmjkesfinnriddlsdata/farmjkesfinnriddlsquiz';

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

import {useFocusEffect} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {farmjkesfinnriddlsQuizPointsStorageKey} from '../Farmjkesfinnriddlsdata/farmjkesfinnriddlsheroes';

type farmjkesfinnriddlsquzzStage = 'intro' | 'quiz' | 'complete';

type farmjkesfinnriddlsquzzOptionState =
  | 'default'
  | 'selected'
  | 'correct'
  | 'wrong'
  | 'disabled';

const farmjkesfinnriddlsquzzSample = <T,>(
  farmjkesfinnriddlsArr: T[],
  farmjkesfinnriddlsN: number,
): T[] => {
  const farmjkesfinnriddlsCopy = [...farmjkesfinnriddlsArr];
  for (let i = farmjkesfinnriddlsCopy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [farmjkesfinnriddlsCopy[i], farmjkesfinnriddlsCopy[j]] = [
      farmjkesfinnriddlsCopy[j],
      farmjkesfinnriddlsCopy[i],
    ];
  }
  return farmjkesfinnriddlsCopy.slice(
    0,
    Math.min(farmjkesfinnriddlsN, farmjkesfinnriddlsCopy.length),
  );
};

const farmjkesfinnriddlsquzzGetResultCopy = (
  farmjkesfinnriddlsScore: number,
  farmjkesfinnriddlsTotal: number,
) => {
  if (farmjkesfinnriddlsScore === farmjkesfinnriddlsTotal) {
    return 'Perfect score! You’re a farm genius.';
  }
  if (farmjkesfinnriddlsScore >= Math.ceil(farmjkesfinnriddlsTotal * 0.7)) {
    return 'Nice job! Keep going and improve your score';
  }
  return 'Good start! Try again and beat your score.';
};

const Farmjkesfinnriddlsquzz = () => {
  const [farmjkesfinnriddlsquzzStage, setFarmjkesfinnriddlsquzzStage] =
    useState<farmjkesfinnriddlsquzzStage>('intro');

  const [
    farmjkesfinnriddlsquzzSessionQuestions,
    setFarmjkesfinnriddlsquzzSessionQuestions,
  ] = useState<farmjkesfinnriddlsQuizQuestion[]>(() =>
    farmjkesfinnriddlsquzzSample(
      farmjkesfinnriddlsQuizQuestions,
      farmjkesfinnriddlsQuizSessionLength,
    ),
  );

  const [farmjkesfinnriddlsquzzIndex, setFarmjkesfinnriddlsquzzIndex] =
    useState(0);
  const [
    farmjkesfinnriddlsquzzSelectedIndex,
    setFarmjkesfinnriddlsquzzSelectedIndex,
  ] = useState<number | null>(null);
  const [farmjkesfinnriddlsquzzConfirmed, setFarmjkesfinnriddlsquzzConfirmed] =
    useState(false);
  const [farmjkesfinnriddlsquzzScore, setFarmjkesfinnriddlsquzzScore] =
    useState(0);
  const [
    farmjkesfinnriddlsquzzPointsAwarded,
    setFarmjkesfinnriddlsquzzPointsAwarded,
  ] = useState(false);

  const farmjkesfinnriddlsquzzQuestion: farmjkesfinnriddlsQuizQuestion | null =
    farmjkesfinnriddlsquzzSessionQuestions[farmjkesfinnriddlsquzzIndex] ?? null;

  useFocusEffect(
    useCallback(() => {
      setFarmjkesfinnriddlsquzzStage('intro');
      setFarmjkesfinnriddlsquzzSessionQuestions(
        farmjkesfinnriddlsquzzSample(
          farmjkesfinnriddlsQuizQuestions,
          farmjkesfinnriddlsQuizSessionLength,
        ),
      );
      setFarmjkesfinnriddlsquzzIndex(0);
      setFarmjkesfinnriddlsquzzSelectedIndex(null);
      setFarmjkesfinnriddlsquzzConfirmed(false);
      setFarmjkesfinnriddlsquzzScore(0);
      setFarmjkesfinnriddlsquzzPointsAwarded(false);
    }, []),
  );

  const farmjkesfinnriddlsquzzTotal =
    farmjkesfinnriddlsquzzSessionQuestions.length;

  const farmjkesfinnriddlsquzzStart = () => {
    setFarmjkesfinnriddlsquzzIndex(0);
    setFarmjkesfinnriddlsquzzSelectedIndex(null);
    setFarmjkesfinnriddlsquzzConfirmed(false);
    setFarmjkesfinnriddlsquzzScore(0);
    setFarmjkesfinnriddlsquzzPointsAwarded(false);
    setFarmjkesfinnriddlsquzzStage('quiz');
  };

  const farmjkesfinnriddlsquzzTryAgain = () => {
    setFarmjkesfinnriddlsquzzStage('intro');
    setFarmjkesfinnriddlsquzzSessionQuestions(
      farmjkesfinnriddlsquzzSample(
        farmjkesfinnriddlsQuizQuestions,
        farmjkesfinnriddlsQuizSessionLength,
      ),
    );
    setFarmjkesfinnriddlsquzzIndex(0);
    setFarmjkesfinnriddlsquzzSelectedIndex(null);
    setFarmjkesfinnriddlsquzzConfirmed(false);
    setFarmjkesfinnriddlsquzzScore(0);
    setFarmjkesfinnriddlsquzzPointsAwarded(false);
  };

  const farmjkesfinnriddlsquzzAwardPoints = async (
    farmjkesfinnriddlsPoints: number,
  ) => {
    try {
      const farmjkesfinnriddlsRaw = await AsyncStorage.getItem(
        farmjkesfinnriddlsQuizPointsStorageKey,
      );
      const farmjkesfinnriddlsCurrent = farmjkesfinnriddlsRaw
        ? Number(farmjkesfinnriddlsRaw)
        : 0;
      const farmjkesfinnriddlsSafeCurrent = Number.isFinite(
        farmjkesfinnriddlsCurrent,
      )
        ? Math.max(0, Math.floor(farmjkesfinnriddlsCurrent))
        : 0;
      const farmjkesfinnriddlsNext =
        farmjkesfinnriddlsSafeCurrent + farmjkesfinnriddlsPoints;
      await AsyncStorage.setItem(
        farmjkesfinnriddlsQuizPointsStorageKey,
        String(farmjkesfinnriddlsNext),
      );
    } catch {
      console.log('error');
    }
  };

  const farmjkesfinnriddlsquzzConfirm = () => {
    if (!farmjkesfinnriddlsquzzQuestion) {
      return;
    }
    if (farmjkesfinnriddlsquzzSelectedIndex === null) {
      return;
    }
    if (farmjkesfinnriddlsquzzConfirmed) {
      return;
    }
    const farmjkesfinnriddlsIsCorrect =
      farmjkesfinnriddlsquzzSelectedIndex ===
      farmjkesfinnriddlsquzzQuestion.correctIndex;
    if (farmjkesfinnriddlsIsCorrect) {
      setFarmjkesfinnriddlsquzzScore(s => s + 1);
    }
    setFarmjkesfinnriddlsquzzConfirmed(true);
  };

  const farmjkesfinnriddlsquzzNext = () => {
    if (!farmjkesfinnriddlsquzzQuestion) {
      return;
    }
    if (!farmjkesfinnriddlsquzzConfirmed) {
      farmjkesfinnriddlsquzzConfirm();
      return;
    }

    const farmjkesfinnriddlsNextIndex = farmjkesfinnriddlsquzzIndex + 1;
    if (farmjkesfinnriddlsNextIndex >= farmjkesfinnriddlsquzzTotal) {
      setFarmjkesfinnriddlsquzzStage('complete');
      if (!farmjkesfinnriddlsquzzPointsAwarded) {
        setFarmjkesfinnriddlsquzzPointsAwarded(true);
        farmjkesfinnriddlsquzzAwardPoints(farmjkesfinnriddlsquzzScore);
      }
      return;
    }

    setFarmjkesfinnriddlsquzzIndex(farmjkesfinnriddlsNextIndex);
    setFarmjkesfinnriddlsquzzSelectedIndex(null);
    setFarmjkesfinnriddlsquzzConfirmed(false);
  };

  const farmjkesfinnriddlsquzzGetOptionState = (
    farmjkesfinnriddlsOptIndex: number,
  ): farmjkesfinnriddlsquzzOptionState => {
    if (!farmjkesfinnriddlsquzzQuestion) {
      return 'disabled';
    }
    if (!farmjkesfinnriddlsquzzConfirmed) {
      if (farmjkesfinnriddlsquzzSelectedIndex === farmjkesfinnriddlsOptIndex) {
        return 'selected';
      }
      return 'default';
    }

    if (
      farmjkesfinnriddlsOptIndex === farmjkesfinnriddlsquzzQuestion.correctIndex
    ) {
      return 'correct';
    }
    if (farmjkesfinnriddlsquzzSelectedIndex === farmjkesfinnriddlsOptIndex) {
      return 'wrong';
    }
    return 'disabled';
  };

  const farmjkesfinnriddlsquzzGetOptionGradient = (
    farmjkesfinnriddlsState: farmjkesfinnriddlsquzzOptionState,
  ): string[] => {
    switch (farmjkesfinnriddlsState) {
      case 'selected':
        return ['#2D6BFF', '#1A3B8F'];
      case 'correct':
        return ['#34C759', '#1E9E52'];
      case 'wrong':
        return ['#FF3B30', '#B91C1C'];
      case 'disabled':
        return ['#1C1C1ECC', '#1C1C1ECC'];
      case 'default':
      default:
        return ['#1C1C1ECC', '#1C1C1ECC'];
    }
  };

  const farmjkesfinnriddlsquzzPrimaryLabel = farmjkesfinnriddlsquzzConfirmed
    ? farmjkesfinnriddlsquzzIndex === farmjkesfinnriddlsquzzTotal - 1
      ? 'Next'
      : 'Next'
    : 'Confirm';

  const farmjkesfinnriddlsquzzPrimaryDisabled =
    farmjkesfinnriddlsquzzSelectedIndex === null &&
    !farmjkesfinnriddlsquzzConfirmed;

  return (
    <Farmjkesfinnriddlslayou>
      <View style={styles.farmjkesfinnriddlsquzzSafe}>
        <View style={styles.farmjkesfinnriddlsquzzScreen}>
          <Text style={styles.farmjkesfinnriddlsquzzTitle}>Farm Quiz</Text>

          {farmjkesfinnriddlsquzzStage === 'intro' ? (
            <>
              <View style={styles.farmjkesfinnriddlsquzzCard}>
                <Text style={styles.farmjkesfinnriddlsquzzCardTitle}>
                  Test Your Farm Brain
                </Text>
                <Text style={styles.farmjkesfinnriddlsquzzCardSubtitle}>
                  You’ll get {farmjkesfinnriddlsQuizSessionLength} funny farm
                  riddles.
                  {'\n'}
                  Choose the correct answer for each one.
                </Text>
              </View>

              <Image
                source={require('../../assets/i/farmjkesfinqzintro.png')}
                style={styles.farmjkesfinnriddlsquzzCharacterIntro}
              />

              <Pressable
                onPress={farmjkesfinnriddlsquzzStart}
                style={styles.farmjkesfinnriddlsquzzPrimaryWrap}>
                <LinearGradient
                  colors={['#FF7A00', '#FF3D00']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={styles.farmjkesfinnriddlsquzzPrimaryGradient}>
                  <Text style={styles.farmjkesfinnriddlsquzzPrimaryText}>
                    Start Quiz
                  </Text>
                </LinearGradient>
              </Pressable>
            </>
          ) : null}

          {farmjkesfinnriddlsquzzStage === 'quiz' &&
          farmjkesfinnriddlsquzzQuestion ? (
            <>
              <View style={styles.farmjkesfinnriddlsquzzCard}>
                <Text style={styles.farmjkesfinnriddlsquzzQuestionText}>
                  {farmjkesfinnriddlsquzzQuestion.question}
                </Text>

                <View style={styles.farmjkesfinnriddlsquzzDotsRow}>
                  {Array.from({length: farmjkesfinnriddlsquzzTotal}).map(
                    (_, farmjkesfinnriddlsDotIndex) => (
                      <Image
                        key={`dot_${farmjkesfinnriddlsDotIndex}`}
                        source={
                          farmjkesfinnriddlsDotIndex <=
                          farmjkesfinnriddlsquzzIndex
                            ? require('../../assets/i/farmjkesfinact.png')
                            : require('../../assets/i/farmjkesfininact.png')
                        }
                      />
                    ),
                  )}
                </View>
              </View>

              <View style={styles.farmjkesfinnriddlsquzzOptions}>
                {farmjkesfinnriddlsquzzQuestion.options.map(
                  (farmjkesfinnriddlsOpt, farmjkesfinnriddlsOptIndex) => {
                    const farmjkesfinnriddlsState =
                      farmjkesfinnriddlsquzzGetOptionState(
                        farmjkesfinnriddlsOptIndex,
                      );
                    const farmjkesfinnriddlsDisabled =
                      farmjkesfinnriddlsState === 'disabled' &&
                      farmjkesfinnriddlsquzzConfirmed;

                    return (
                      <Pressable
                        key={`opt_${farmjkesfinnriddlsOptIndex}`}
                        disabled={farmjkesfinnriddlsDisabled}
                        onPress={() => {
                          if (farmjkesfinnriddlsquzzConfirmed) {
                            return;
                          }
                          setFarmjkesfinnriddlsquzzSelectedIndex(
                            farmjkesfinnriddlsOptIndex,
                          );
                        }}
                        style={styles.farmjkesfinnriddlsquzzOptionWrap}>
                        <LinearGradient
                          colors={farmjkesfinnriddlsquzzGetOptionGradient(
                            farmjkesfinnriddlsState,
                          )}
                          start={{x: 0, y: 0}}
                          end={{x: 1, y: 0}}
                          style={styles.farmjkesfinnriddlsquzzOptionGradient}>
                          <Text style={styles.farmjkesfinnriddlsquzzOptionText}>
                            {farmjkesfinnriddlsOpt}
                          </Text>
                        </LinearGradient>
                      </Pressable>
                    );
                  },
                )}
              </View>

              <Pressable
                onPress={farmjkesfinnriddlsquzzNext}
                disabled={farmjkesfinnriddlsquzzPrimaryDisabled}
                style={[
                  styles.farmjkesfinnriddlsquzzPrimaryWrap,
                  farmjkesfinnriddlsquzzPrimaryDisabled &&
                    styles.farmjkesfinnriddlsquzzPrimaryWrapDisabled,
                ]}>
                <LinearGradient
                  colors={['#FF7A00', '#FF3D00']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={styles.farmjkesfinnriddlsquzzPrimaryGradient}>
                  <Text style={styles.farmjkesfinnriddlsquzzPrimaryText}>
                    {farmjkesfinnriddlsquzzPrimaryLabel}
                  </Text>
                </LinearGradient>
              </Pressable>
            </>
          ) : null}

          {farmjkesfinnriddlsquzzStage === 'complete' ? (
            <>
              <View style={styles.farmjkesfinnriddlsquzzCard}>
                <Text style={styles.farmjkesfinnriddlsquzzCardTitle}>
                  Quiz Completed
                </Text>
                <Text style={styles.farmjkesfinnriddlsquzzResultScore}>
                  Your Score: {farmjkesfinnriddlsquzzScore}/
                  {farmjkesfinnriddlsquzzTotal}
                </Text>
                <Text style={styles.farmjkesfinnriddlsquzzResultCopy}>
                  {farmjkesfinnriddlsquzzGetResultCopy(
                    farmjkesfinnriddlsquzzScore,
                    farmjkesfinnriddlsquzzTotal,
                  )}
                </Text>
              </View>

              <Image
                source={require('../../assets/i/farmjkesfinqzires.png')}
                style={styles.farmjkesfinnriddlsquzzCharacterComplete}
              />

              <Pressable
                onPress={farmjkesfinnriddlsquzzTryAgain}
                style={[
                  styles.farmjkesfinnriddlsquzzPrimaryWrap,
                  styles.farmjkesfinnriddlsquzzPrimaryWrapNoTop,
                ]}>
                <LinearGradient
                  colors={['#FF7A00', '#FF3D00']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={styles.farmjkesfinnriddlsquzzPrimaryGradient}>
                  <Text style={styles.farmjkesfinnriddlsquzzPrimaryText}>
                    Try Again
                  </Text>
                </LinearGradient>
              </Pressable>
            </>
          ) : null}
        </View>
      </View>
    </Farmjkesfinnriddlslayou>
  );
};

export default Farmjkesfinnriddlsquzz;

const farmjkesfinnriddlsquzzShadow: ViewStyle = {
  shadowColor: '#000',
  shadowOpacity: 0.18,
  shadowRadius: 14,
  shadowOffset: {width: 0, height: 8},
  elevation: 6,
};

const styles = StyleSheet.create({
  farmjkesfinnriddlsquzzDot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FF7A00',
  },
  farmjkesfinnriddlsquzzDotActive: {
    backgroundColor: '#FF7A00',
    opacity: 1,
  },

  farmjkesfinnriddlsquzzSafe: {
    flex: 1,
  },
  farmjkesfinnriddlsquzzScreen: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 20,
    paddingBottom: 90,
    alignItems: 'center',
  },
  farmjkesfinnriddlsquzzTitle: {
    fontSize: 20,
    fontFamily: 'Sansation-Bold',
    color: '#fff',
    textAlign: 'center',
  },
  farmjkesfinnriddlsquzzCard: {
    marginTop: 24,
    width: '100%',
    borderRadius: 22,
    backgroundColor: '#2D1B13',
    paddingHorizontal: 18,
    paddingVertical: 18,
    minHeight: 170,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#4A3124',
    ...farmjkesfinnriddlsquzzShadow,
  },

  farmjkesfinnriddlsquzzCardTitle: {
    fontSize: 20,
    fontFamily: 'Sansation-Bold',
    color: '#fff',
    textAlign: 'center',
  },
  farmjkesfinnriddlsquzzCardSubtitle: {
    marginTop: 12,
    fontSize: 16,
    fontFamily: 'Sansation-Regular',
    fontStyle: 'italic',
    color: '#fff',
    textAlign: 'center',
    lineHeight: 22,
  },
  farmjkesfinnriddlsquzzQuestionText: {
    fontSize: 22,
    fontFamily: 'Sansation-Bold',
    color: '#fff',
    textAlign: 'center',
    lineHeight: 26,
  },
  farmjkesfinnriddlsquzzDotsRow: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },

  farmjkesfinnriddlsquzzOptions: {
    marginTop: 68,
    width: '100%',
    gap: 12,
    marginBottom: 58,
  },
  farmjkesfinnriddlsquzzOptionWrap: {
    width: '80%',
    alignSelf: 'center',
    borderRadius: 12,
    overflow: 'hidden',
  },
  farmjkesfinnriddlsquzzOptionGradient: {
    width: '100%',
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ffffff22',
    borderRadius: 12,
  },
  farmjkesfinnriddlsquzzOptionText: {
    fontSize: 18,
    fontFamily: 'Sansation-Bold',
    color: '#fff',
  },
  farmjkesfinnriddlsquzzPrimaryWrap: {
    width: 250,
    marginTop: 18,
    borderRadius: 12,
    overflow: 'hidden',
  },
  farmjkesfinnriddlsquzzPrimaryWrapNoTop: {
    marginTop: 0,
  },
  farmjkesfinnriddlsquzzPrimaryWrapDisabled: {
    opacity: 0.35,
  },
  farmjkesfinnriddlsquzzPrimaryGradient: {
    width: '100%',
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  farmjkesfinnriddlsquzzPrimaryText: {
    fontSize: 18,
    fontFamily: 'Sansation-Bold',
    color: '#fff',
  },
  farmjkesfinnriddlsquzzCharacterIntro: {
    marginTop: 46,

    resizeMode: 'contain',
  },
  farmjkesfinnriddlsquzzCharacterComplete: {
    marginTop: 54,
    resizeMode: 'contain',
  },
  farmjkesfinnriddlsquzzResultScore: {
    marginTop: 15,
    fontSize: 18,
    fontFamily: 'Sansation-Regular',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 8,
  },
  farmjkesfinnriddlsquzzResultCopy: {
    marginTop: 10,
    fontSize: 16,
    fontFamily: 'Sansation-Regular',
    fontStyle: 'italic',
    color: '#fff',
    textAlign: 'center',
    lineHeight: 22,
    opacity: 0.95,
  },
});
