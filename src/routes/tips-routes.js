import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import TipsScreen from '../screens/TipsScreen';

const TipsRoutes = ({navigation}) => {
  const {routes, index} = navigation.dangerouslyGetState();
  useEffect(() => {
    navigation.setOptions({
      tabBarVisible:
        routes &&
        routes[index] &&
        routes[index].state &&
        routes[index].state.index
          ? false
          : true,
    });
  }, [index, navigation, routes]);

  return (
    <Stack.Navigator
      initialRouteName="TipsScreen"
      screenOptions={{title: 'Dicas'}}>
      <Stack.Screen name="TipsScreen" component={TipsScreen} />
    </Stack.Navigator>
  );
};

export default TipsRoutes;
