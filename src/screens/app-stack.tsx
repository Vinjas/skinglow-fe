import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { OnboardingStack } from './onboarding/onboarding-stack';
import { LoginStack } from './login/login-stack';

const Stack = createNativeStackNavigator();

type AppStackProps = {
  isOnboarded: boolean;
  isLoggedIn: boolean;
};

export const AppStack = ({ isOnboarded, isLoggedIn }: AppStackProps) => {
  return (
    <Stack.Navigator
      initialRouteName={isOnboarded ? 'LoginStack' : 'OnboardingStack'}
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='LoginStack'>
        {props => (
          <LoginStack
            {...props}
            isLoggedIn={isLoggedIn}
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name='OnboardingStack'
        component={OnboardingStack}
      />
    </Stack.Navigator>
  );
};
