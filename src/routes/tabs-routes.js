import React, {useState} from 'react';
import {IconHome, LabelTabBar} from '../styles';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import HomeRoutes from './home-routes';

const TabsRoutes = () => {
  const [routeActive, setRouteActive] = useState(0);

  return (
    <Tab.Navigator initialRouteName="HomeRoutes">
      <Tab.Screen
        name="HomeRoutes"
        component={HomeRoutes}
        options={{
          tabBarIcon: () => <IconHome routeState={routeActive === 0} />,
          tabBarLabel: () => (
            <LabelTabBar routeState={routeActive === 0}>Home</LabelTabBar>
          ),
        }}
        listeners={() => ({tabPress: (e) => setRouteActive(0)})}
      />
    </Tab.Navigator>
  );
};

export default TabsRoutes;
