// TABS

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import React, {useRef} from 'react';
import {
  Animated,
  Image,
  Pressable,
  StyleSheet,
  View,
  type ImageSourcePropType,
  type ViewStyle,
} from 'react-native';

import Farmjkesfinnriddlsjkes from './Farmjkesfinnriddls/Farmjkesfinnriddlsscrns/Farmjkesfinnriddlsjkes';
import Farmjkesfinnriddlsrandm from './Farmjkesfinnriddls/Farmjkesfinnriddlsscrns/Farmjkesfinnriddlsrandm';
import Farmjkesfinnriddlscrckhim from './Farmjkesfinnriddls/Farmjkesfinnriddlsscrns/Farmjkesfinnriddlscrckhim';
import Farmjkesfinnriddlsheros from './Farmjkesfinnriddls/Farmjkesfinnriddlsscrns/Farmjkesfinnriddlsheros';
import Farmjkesfinnriddlsquzz from './Farmjkesfinnriddls/Farmjkesfinnriddlsscrns/Farmjkesfinnriddlsquzz';
import Farmjkesfinnriddlssavd from './Farmjkesfinnriddls/Farmjkesfinnriddlsscrns/Farmjkesfinnriddlssavd';

const Tab = createBottomTabNavigator();

const AnimatedTabButton = (props: Record<string, unknown>) => {
  const {children, style, onPress, onLongPress, ...rest} = props;
  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.88,
      useNativeDriver: true,
      speed: 50,
      bounciness: 4,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
      speed: 50,
      bounciness: 8,
    }).start();
  };

  return (
    <Pressable
      onPress={onPress as () => void}
      onLongPress={onLongPress as (() => void) | undefined}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[style as ViewStyle, styles.farmjkesfinnriddlsatbsButton]}
      {...rest}>
      <Animated.View
        style={[
          styles.farmjkesfinnriddlsatbsButtonInner,
          {transform: [{scale}]},
        ]}>
        {children as React.ReactNode}
      </Animated.View>
    </Pressable>
  );
};

const OceatrippguiddetabIcon = ({
  focused,
  source,
}: {
  focused: boolean;
  source: ImageSourcePropType;
}) => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Image source={source} tintColor={focused ? undefined : '#fff'} />
    </View>
  );
};

const farmjkesfinnriddlsatbsIconPlaces = ({focused}: {focused: boolean}) => (
  <OceatrippguiddetabIcon
    focused={focused}
    source={require('./assets/i/farmjkesfinnriddtab1.png')}
  />
);

const farmjkesfinnriddlsatbsIconSaved = ({focused}: {focused: boolean}) => (
  <OceatrippguiddetabIcon
    focused={focused}
    source={require('./assets/i/farmjkesfinnriddtab2.png')}
  />
);

const farmjkesfinnriddlsatbsIconMap = ({focused}: {focused: boolean}) => (
  <OceatrippguiddetabIcon
    focused={focused}
    source={require('./assets/i/farmjkesfinnriddtab3.png')}
  />
);

const farmjkesfinnriddlsatbsIconBlog = ({focused}: {focused: boolean}) => (
  <OceatrippguiddetabIcon
    focused={focused}
    source={require('./assets/i/farmjkesfinnriddtab4.png')}
  />
);

const farmjkesfinnriddlsatbsIconFacts = ({focused}: {focused: boolean}) => (
  <OceatrippguiddetabIcon
    focused={focused}
    source={require('./assets/i/farmjkesfinnriddtab5.png')}
  />
);

const farmjkesfinnriddlsatbsIconQuiz = ({focused}: {focused: boolean}) => (
  <OceatrippguiddetabIcon
    focused={focused}
    source={require('./assets/i/farmjkesfinnriddtab6.png')}
  />
);

const farmjkesfinnriddlsatbsButton = (props: Record<string, unknown>) => (
  <AnimatedTabButton {...props} />
);

const Farmjkesfinnriddlstab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [styles.farmjkesfinnriddlsatbsBar],
        tabBarActiveTintColor: '#FFFFFF',
        tabBarButton: farmjkesfinnriddlsatbsButton,
      }}>
      <Tab.Screen
        name="Farmjkesfinnriddlsjkes"
        component={Farmjkesfinnriddlsjkes}
        options={{
          tabBarIcon: farmjkesfinnriddlsatbsIconPlaces,
        }}
      />
      <Tab.Screen
        name="Farmjkesfinnriddlsrandm"
        component={Farmjkesfinnriddlsrandm}
        options={{
          tabBarIcon: farmjkesfinnriddlsatbsIconSaved,
        }}
      />
      <Tab.Screen
        name="Farmjkesfinnriddlscrckhim"
        component={Farmjkesfinnriddlscrckhim}
        options={{
          tabBarIcon: farmjkesfinnriddlsatbsIconMap,
        }}
      />
      <Tab.Screen
        name="Farmjkesfinnriddlsheros"
        component={Farmjkesfinnriddlsheros}
        options={{
          tabBarIcon: farmjkesfinnriddlsatbsIconBlog,
        }}
      />
      <Tab.Screen
        name="Farmjkesfinnriddlsquzz"
        component={Farmjkesfinnriddlsquzz}
        options={{
          tabBarIcon: farmjkesfinnriddlsatbsIconFacts,
        }}
      />
      <Tab.Screen
        name="Farmjkesfinnriddlssavd"
        component={Farmjkesfinnriddlssavd}
        options={{
          tabBarIcon: farmjkesfinnriddlsatbsIconQuiz,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  farmjkesfinnriddlsatbsButtonInner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  farmjkesfinnriddlsatbsButton: {
    flex: 1,
  },

  farmjkesfinnriddlsatbsIconCircle: {
    width: 55,
    height: 55,
    borderRadius: 55,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
  },
  farmjkesfinnriddlsatbsIconCircleFocused: {
    borderWidth: 1,
    borderColor: '#fff',
  },
  farmjkesfinnriddlsatbsLabel: {
    fontSize: 8,
    fontWeight: '400',
    marginTop: 2,
  },

  farmjkesfinnriddlsatbsBar: {
    elevation: 0,
    paddingTop: 6,
    justifyContent: 'center',
    position: 'absolute',
    paddingHorizontal: 8,
    borderColor: '#C9CBD9',
    borderTopWidth: 1,
    borderTopColor: '#C9CBD9',
    backgroundColor: '#29210ACC',
    height: 50,
    paddingBottom: 6,
    overflow: 'hidden',
    borderWidth: 1,
    bottom: 30,
    marginHorizontal: 30,
    borderRadius: 10,
  },
});

export default Farmjkesfinnriddlstab;
