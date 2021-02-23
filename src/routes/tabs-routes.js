import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import HomeRoutes from './home-routes';
import TipsRoutes from './tips-routes';
import DonatesRoutes from './donates-routes';
import {IconHome, LabelTabBar, IconTips, IconDonates} from '../styles';

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
      <Tab.Screen
        name="TipsRoutes"
        component={TipsRoutes}
        options={{
          tabBarIcon: () => <IconTips routeState={routeActive === 1} />,
          tabBarLabel: () => (
            <LabelTabBar routeState={routeActive === 1}>Dicas</LabelTabBar>
          ),
        }}
        listeners={() => ({tabPress: (e) => setRouteActive(1)})}
      />
      <Tab.Screen
        name="DonatesRoutes"
        component={DonatesRoutes}
        options={{
          tabBarIcon: () => <IconDonates routeState={routeActive === 2} />,
          tabBarLabel: () => (
            <LabelTabBar routeState={routeActive === 2}>Doações</LabelTabBar>
          ),
        }}
        listeners={() => ({tabPress: (e) => setRouteActive(2)})}
      />
    </Tab.Navigator>
  );
};

export default TabsRoutes;
