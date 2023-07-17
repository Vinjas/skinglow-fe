import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './home-screen';
import { SettingsStack } from '@screens/settings/settings-stack';

const Stack = createNativeStackNavigator();

export function HomeStack(): JSX.Element {
  return (
    <Stack.Navigator initialRouteName='HomeScreen'>
      <Stack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='SettingsStack'
        component={SettingsStack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
