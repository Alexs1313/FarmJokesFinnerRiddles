import {createStackNavigator} from '@react-navigation/stack';
import Farmjkesfinnriddlsonb from '../Farmjkesfinnriddlsscrns/Farmjkesfinnriddlsonb';
import Farmjkesfinnriddlsload from '../Farmjkesfinnriddlscpn/Farmjkesfinnriddlsload';
import Farmjkesfinnriddlstab from '../../Farmjkesfinnriddlstab';

const Stack = createStackNavigator();

const Farmjkesfinnriddlsstack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Farmjkesfinnriddlsload"
        component={Farmjkesfinnriddlsload}
      />
      <Stack.Screen
        name="Farmjkesfinnriddlsonb"
        component={Farmjkesfinnriddlsonb}
      />
      <Stack.Screen
        name="Farmjkesfinnriddlstab"
        component={Farmjkesfinnriddlstab}
      />
    </Stack.Navigator>
  );
};

export default Farmjkesfinnriddlsstack;
