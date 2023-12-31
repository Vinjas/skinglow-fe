import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ProfileScreen } from './profile-screen';
import { StashScreen } from './stash-screen';
import { FavouritesScreen } from './favourites-screen';

const Tab = createMaterialTopTabNavigator();

export function ProfileStack() {
  return (
    <Tab.Navigator
      initialRouteName={'Profile'}
      screenOptions={{
        tabBarStyle: {
          elevation: 0
        },
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: '700',
          textTransform: 'capitalize',
          fontFamily: 'Kanit-Regular'
        },
        tabBarIndicatorStyle: {
          backgroundColor: '#000'
        }
      }}
    >
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
      />
      <Tab.Screen
        name='Stash'
        component={StashScreen}
      />
      <Tab.Screen
        name='Favourites'
        component={FavouritesScreen}
      />
    </Tab.Navigator>
  );
}
