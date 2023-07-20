import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Navbar } from '@components/navbar/navbar';
import { LoginScreen } from './login-screen';
import { LoginDefaultScreen } from './login-default-screen';

const Stack = createNativeStackNavigator();

type AppStackProps = {
  isLoggedIn: boolean;
};

export const LoginStack = ({ isLoggedIn }: AppStackProps) => {
  return (
    <Stack.Navigator
      initialRouteName={isLoggedIn ? 'Navbar' : 'LoginScreen'}
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name='LoginScreen'
        component={LoginScreen}
      />
      <Stack.Screen
        name='LoginDefaultScreen'
        component={LoginDefaultScreen}
      />
      <Stack.Screen
        name='Navbar'
        component={Navbar}
      />
    </Stack.Navigator>
  );
};
