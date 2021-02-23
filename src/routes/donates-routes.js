import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import DonatesScreen from '../screens/DonatesScreen';

const DonatesRotues = ({navigation}) => {
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
      initialRouteName="DonatesScreen"
      screenOptions={{title: 'Doações'}}>
      <Stack.Screen name="DonatesScreen" component={DonatesScreen} />
    </Stack.Navigator>
  );
};

export default DonatesRotues;
