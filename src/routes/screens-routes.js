import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import TabsRoutes from './tabs-routes';
import OnBoardingScreen from '../screens/OnBoardingScreen';

const ScreenRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="TabsRoutes" headerMode="none">
      <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
      <Stack.Screen name="TabsRoutes" component={TabsRoutes} />
    </Stack.Navigator>
  );
};

export default ScreenRoutes;
