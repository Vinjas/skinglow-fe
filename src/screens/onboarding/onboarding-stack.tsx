import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnboardingScreenOne } from './onboarding-one-screen';

const Stack = createNativeStackNavigator();

export function OnboardingStack() {
  return (
    <Stack.Navigator
      initialRouteName={'OnboardingScreenOne'}
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name='OnboardingScreenOne'
        component={OnboardingScreenOne}
      />
    </Stack.Navigator>
  );
}
