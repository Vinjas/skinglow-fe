import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProfileScreen } from './profile-screen';

const Stack = createNativeStackNavigator();

export function ProfileStack(): JSX.Element {
  return (
    <Stack.Navigator initialRouteName='StackScreen'>
      <Stack.Screen
        name='ProfileScreen'
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
