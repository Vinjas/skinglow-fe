import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStack } from '@screens/home/home-stack';
import { RoutinesScreen } from '@screens/routines-screen';
import { BackButton } from '@components/header/back-button';
import { ProfileStack } from '@screens/profile/profile-stack';
import { NavbarButton } from './navbar-button';
import { NAVBAR } from '@constants/constants';
import { DiscoverScreen } from '@screens/discover-screen';
import { SearchStack } from '@screens/search/search-stack';

const Tab = createBottomTabNavigator();
const { HOME, ROUTINES, SEARCH, PROFILE, COMPASS } = NAVBAR;

export function Navbar() {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        tabBarActiveTintColor: '#000',
        // tabBarShowLabel: false,
        tabBarStyle: {
          paddingHorizontal: 8,
          paddingBottom: 8,
          height: 70,
          borderTopWidth: 0,
          elevation: 0
        },
        headerRight: props => <BackButton {...props} />,
        headerShadowVisible: false
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <NavbarButton
              focused={focused}
              icon={HOME}
            />
          ),
          headerShown: false
        }}
      />
      <Tab.Screen
        name='Search'
        component={SearchStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <NavbarButton
              focused={focused}
              icon={SEARCH}
            />
          ),
          tabBarLabel: 'Search',
          headerShown: false
        }}
      />
      <Tab.Screen
        name='Discover'
        component={DiscoverScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <NavbarButton
              focused={focused}
              icon={COMPASS}
            />
          ),
          headerShown: false
        }}
      />
      <Tab.Screen
        name='Routines'
        component={RoutinesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <NavbarButton
              focused={focused}
              icon={ROUTINES}
            />
          ),
          headerShown: false
        }}
      />
      <Tab.Screen
        name='ProfileStack'
        component={ProfileStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <NavbarButton
              focused={focused}
              icon={PROFILE}
            />
          ),
          headerShown: false,
          tabBarLabel: 'Profile'
        }}
      />
    </Tab.Navigator>
  );
}
