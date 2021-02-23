import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import HomeScreen from '../screens/HomeScreen';
import ListCounty from '../screens/ListCountyScreen';

const HomeRoutes = ({navigation}) => {
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
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ListCounty" component={ListCounty} />
    </Stack.Navigator>
  );
};

export default HomeRoutes;
