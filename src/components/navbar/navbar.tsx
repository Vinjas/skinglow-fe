import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProductsScreen } from '@screens/products-screen';
import { HomeStack } from '@screens/home/home-stack';
import { RoutinesScreen } from '@screens/routines-screen';
import { BackButton } from '@components/header/back-button';
import { ProfileStack } from '@screens/profile/profile-stack';
import { NavbarButton } from './navbar-button';
import { NAVBAR } from '@constants/constants';

const Tab = createBottomTabNavigator();
const { HOME, ROUTINES, SEARCH, PROFILE } = NAVBAR;

export function Navbar() {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        tabBarActiveTintColor: '#000',
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingHorizontal: 16,
          height: 60,
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
        name='Products'
        component={ProductsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <NavbarButton
              focused={focused}
              icon={SEARCH}
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
        name='Profile'
        component={ProfileStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <NavbarButton
              focused={focused}
              icon={PROFILE}
            />
          ),
          headerShown: false
        }}
      />
    </Tab.Navigator>
  );
}
