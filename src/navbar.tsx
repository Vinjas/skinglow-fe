import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProductsScreen } from '@screens/products-screen';
import HomeSvgBlack from '@assets/svg/navbar/home-black.svg';
import HomeSvgWhite from '@assets/svg/navbar/home-white.svg';
import CalendarSvg from '@assets/svg/navbar/calendar.svg';
import ProfileSvg from '@assets/svg/navbar/profile.svg';
import SearchSvg from '@assets/svg/search.svg';
import { View } from 'tamagui';
import { HomeStack } from '@screens/home/home-stack';
import { RoutinesScreen } from '@screens/routines-screen';
import { BackButton } from '@components/header/back-button';
import { ProfileStack } from '@screens/profile/profile-stack';

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
          tabBarIcon: ({ focused }) => <HomeIcon focused={focused} />,
          headerShown: false
        }}
      />
      <Tab.Screen
        name='Products'
        component={ProductsScreen}
        options={{
          tabBarIcon: ({ focused }) => <SearchIcon focused={focused} />,
          headerShown: false
        }}
      />
      <Tab.Screen
        name='Routines'
        component={RoutinesScreen}
        options={{
          tabBarIcon: ({ focused }) => <CalendarIcon focused={focused} />,
          headerShown: false
        }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileStack}
        options={{
          tabBarIcon: ({ focused }) => <ProfileIcon focused={focused} />,
          headerShown: false
        }}
      />
    </Tab.Navigator>
  );
}
