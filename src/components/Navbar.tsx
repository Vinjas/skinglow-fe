import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '@screens/HomeScreen';
import { ProductsScreen } from '@screens/ProductsScreen';
import { RoutinesScreen } from '@screens/RoutinesScreen';
import { ProfileScreen } from '@screens/ProfileScreen';
import HomeSvgBlack from '@assets/svg/navbar/home-black.svg';
import HomeSvgWhite from '@assets/svg/navbar/home-white.svg';
import CalendarSvg from '@assets/svg/navbar/calendar.svg';
import ProfileSvg from '@assets/svg/navbar/profile.svg';
import SearchSvg from '@assets/svg/search.svg';
import { View } from 'tamagui';

const Tab = createBottomTabNavigator();

const HomeIcon = ({ focused }: { focused: boolean }) => (
  <View
    bg={focused ? '$black' : '$white'}
    br={50}
    padding={12}
  >
    {focused ? <HomeSvgWhite /> : <HomeSvgBlack />}
  </View>
);

const CalendarIcon = ({ focused }: { focused: boolean }) => (
  <View
    bg={focused ? '$black' : '$white'}
    br={50}
    padding={12}
  >
    <CalendarSvg
      width={30}
      height={30}
      fill={focused ? '#fff' : '#000'}
    />
  </View>
);

const SearchIcon = ({ focused }: { focused: boolean }) => (
  <View
    bg={focused ? '$black' : '$white'}
    br={50}
    padding={12}
  >
    <SearchSvg
      width={30}
      height={30}
      fill={focused ? '#fff' : '#000'}
    />
  </View>
);

const ProfileIcon = ({ focused }: { focused: boolean }) => (
  <View
    bg={focused ? '$black' : '$white'}
    br={50}
    padding={12}
  >
    <ProfileSvg
      width={30}
      height={30}
      fill={focused ? '#fff' : '#000'}
    />
  </View>
);

export function Navbar() {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        tabBarActiveTintColor: '#000',
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingHorizontal: 16,
          height: 60
        }
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => <HomeIcon focused={focused} />,
          headerShown: false
        }}
      />
      <Tab.Screen
        name='Products'
        component={ProductsScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => <SearchIcon focused={focused} />
        }}
      />
      <Tab.Screen
        name='Routines'
        component={RoutinesScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => <CalendarIcon focused={focused} />
        }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => <ProfileIcon focused={focused} />
        }}
      />
    </Tab.Navigator>
  );
}
