import WebView from 'react-native-webview';

import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';

import {Animated} from 'react-native';

const av = new Animated.Value(0);
av.addListener(() => {
  return;
});

const farmjkesfinnriddlsLoaderHTML = `
   <!DOCTYPE html>
  <html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      body {
        margin: 0;
        padding: 0;
        background: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }

      .loader {
        width: 84px;
        aspect-ratio: 1;
        background:
          linear-gradient(#ff4500 0 0) left/50% 100% no-repeat,
          conic-gradient(
            from -90deg at 32px 9.47px,
            #fff8dc 135deg,
            #8b0000 0 270deg,
            #ffa500 0
          );
        background-blend-mode: multiply;
        -webkit-mask: linear-gradient(
            to bottom right,
            transparent 8px,
            black 0 52px,
            transparent 0
          ),
          conic-gradient(from -90deg at right 6px bottom 6px, black 90deg, transparent 0);
        mask: linear-gradient(
            to bottom right,
            transparent 8px,
            black 0 52px,
            transparent 0
          ),
          conic-gradient(from -90deg at right 6px bottom 6px, black 90deg, transparent 0);
        background-size: 50% 50%;
        -webkit-mask-size: 50% 50%;
        mask-size: 50% 50%;
        -webkit-mask-composite: source-in;
        mask-composite: intersect;
        animation: l9 1.8s infinite cubic-bezier(0.5, 0.2, 0.5, 1);
        box-shadow: 0 0 15px rgba(255, 69, 0, 0.6);
        transform: perspective(1000px) rotateY(15deg);
      }

      @keyframes l9 {
        0% {
          background-position: 0% 0%, 0 0;
          transform: perspective(1000px) rotateY(15deg) scale(1);
          box-shadow: 0 0 15px rgba(255, 69, 0, 0.6);
        }
        25% {
          background-position: 100% 0%, 0 0;
        }
        50% {
          background-position: 100% 100%, 0 0;
          transform: perspective(1000px) rotateY(15deg) scale(1.08);
          box-shadow: 0 0 25px rgba(255, 69, 0, 0.8);
        }
        75% {
          background-position: 0% 100%, 0 0;
        }
        100% {
          background-position: 0% 0%, 0 0;
          transform: perspective(1000px) rotateY(15deg) scale(1);
          box-shadow: 0 0 15px rgba(255, 69, 0, 0.6);
        }
      }
    </style>
  </head>
  <body>
    <div class="loader"></div>
  </body>
  </html>
`;

const Farmjkesfinnriddlsload = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const brainmathstorieeTimer = setTimeout(() => {
      navigation.replace('Farmjkesfinnriddlsonb' as never);
    }, 6000);

    return () => clearTimeout(brainmathstorieeTimer);
  }, [navigation]);

  return (
    <ImageBackground
      source={require('../../assets/i/farmjkesfinnriddtaload.png')}
      style={styles.farmjkesfinnriddlsImageBg}
      resizeMode="cover">
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.farmjkesfinnriddlsWebviewDock}>
          <WebView
            originWhitelist={['*']}
            source={{html: farmjkesfinnriddlsLoaderHTML}}
            style={styles.farmjkesfinnriddlsLoaderWebview}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Farmjkesfinnriddlsload;

const styles = StyleSheet.create({
  farmjkesfinnriddlsImageBg: {
    flex: 1,
  },
  farmjkesfinnriddlsWebviewDock: {
    alignItems: 'center',
    flex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 20,
  },
  farmjkesfinnriddlsLoaderWebview: {
    backgroundColor: 'transparent',
    width: 260,
    height: 150,
  },
});
