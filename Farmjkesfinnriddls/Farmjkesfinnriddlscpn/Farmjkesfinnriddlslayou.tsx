import React from 'react';

import {ImageBackground, ScrollView, StyleSheet} from 'react-native';

const Farmjkesfinnriddlslayou = ({children}: {children: React.ReactNode}) => {
  return (
    <ImageBackground
      source={require('../../assets/i/farmjkesfinnridlay.png')}
      style={styles.container}
      resizeMode="cover">
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
    </ImageBackground>
  );
};

export default Farmjkesfinnriddlslayou;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
