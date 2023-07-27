import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { OnboardingStack } from './onboarding/onboarding-stack';
import { LoginStack } from './login/login-stack';
import { LoadingScreen } from './loading-screen';
import { Navbar } from '@components/navbar/navbar';

const Stack = createNativeStackNavigator();

type AppStackProps = {
  isOnboarded: boolean;
};

export const AppStack = ({ isOnboarded }: AppStackProps) => {
  return (
    <Stack.Navigator
      initialRouteName={isOnboarded ? 'LoadinScreen' : 'OnboardingStack'}
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name='Navbar'
        component={Navbar}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='LoadinScreen'
        component={LoadingScreen}
      />
      <Stack.Screen
        name='LoginStack'
        component={LoginStack}
      />
      <Stack.Screen
        name='OnboardingStack'
        component={OnboardingStack}
      />
    </Stack.Navigator>
  );
};
