import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Farmjkesfinnriddlslayou from '../Farmjkesfinnriddlscpn/Farmjkesfinnriddlslayou';

import {useState} from 'react';

const farmjkesfinnriddlsdata = [
  {
    title: 'Welcome to the Farm',
    description:
      'Meet Mr. Orange — your cheerful guide into a world of jokes, smiles, and farm moments.',
    image: require('../../assets/i/farmjkesfinnriddon1.png'),
  },
  {
    title: 'Fresh Jokes Daily ',
    description:
      'Discover humorous stories about fruits, vegetables, and farm life — simple, light, and engaging.',
    image: require('../../assets/i/farmjkesfinnriddon2.png'),
  },
  {
    title: 'Ring & Laugh ',
    description:
      'Get your daily joke and rate it based on your mood. Come back tomorrow for more.',
    image: require('../../assets/i/farmjkesfinnriddon3.png'),
  },
  {
    title: 'Your Joke Matters',
    description:
      'Write your own joke and see how Mr. Orange reacts. Sometimes amusing, sometimes… not',
    image: require('../../assets/i/farmjkesfinnriddon4.png'),
  },
  {
    title: 'Test Your Farm Brain ',
    description:
      'Solve fun riddles, track your progress, and unlock new characters along the way.',
    image: require('../../assets/i/farmjkesfinnriddon5.png'),
  },
];

const Farmjkesfinnriddlsonb = () => {
  const navigation = useNavigation();
  const [farmjkesfinnriddlsindex, setFarmjkesfinnriddlsindex] = useState(0);

  const farmjkesfinnriddlsNext = () => {
    farmjkesfinnriddlsindex < 4
      ? setFarmjkesfinnriddlsindex(farmjkesfinnriddlsindex + 1)
      : navigation.replace('Farmjkesfinnriddlstab' as never);
  };
  return (
    <Farmjkesfinnriddlslayou>
      <View style={styles.farmjkesfinnriddlscontainer}>
        <View style={styles.farmjkesfinnriddlbox}>
          <Text style={styles.farmjkesfinnriddlboxtitle}>
            {farmjkesfinnriddlsdata[farmjkesfinnriddlsindex].title}
          </Text>
          <Text style={styles.farmjkesfinnriddlboxdescription}>
            {farmjkesfinnriddlsdata[farmjkesfinnriddlsindex].description}
          </Text>
        </View>

        <View style={{alignItems: 'center'}}>
          <Image
            source={farmjkesfinnriddlsdata[farmjkesfinnriddlsindex].image}
          />

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={farmjkesfinnriddlsNext}>
            <LinearGradient
              colors={['#FF7A00', '#FF3D00']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.farmjkesfinnriddlsgradient}>
              <Text style={styles.farmjkesfinnriddlsgradienttext}>
                {farmjkesfinnriddlsindex === 4 ? 'Start' : 'Next'}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </Farmjkesfinnriddlslayou>
  );
};

const styles = StyleSheet.create({
  farmjkesfinnriddlsgradient: {
    borderRadius: 12,
    width: 250,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 36,
  },

  farmjkesfinnriddlscontainer: {
    flex: 1,
    paddingBottom: 55,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 90,
  },
  farmjkesfinnriddlbox: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4A3124',
    minHeight: 190,
    borderRadius: 24,
    width: '90%',
    alignSelf: 'center',
    padding: 25,
  },
  farmjkesfinnriddlboxtitle: {
    fontSize: 20,
    fontFamily: 'Sansation-Bold',
    color: '#fff',
    textAlign: 'center',
  },
  farmjkesfinnriddlboxdescription: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Sansation-Regular',
    fontStyle: 'italic',
    marginTop: 25,
    textAlign: 'center',
    lineHeight: 24,
  },

  farmjkesfinnriddlsgradienttext: {
    fontSize: 18,
    fontFamily: 'Sansation-Bold',
    color: '#fff',
  },
});

export default Farmjkesfinnriddlsonb;
