import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Navbar } from '@components/navbar/navbar';
import { LoginScreen } from './login-screen';
import { LoginDefaultScreen, LoginFormScreen } from './login-form-screen';
import { BackButton } from '@components/header/back-button';
import { HeaderText } from '@components/header/header-text';
import { useTranslation } from 'react-i18next';

const Stack = createNativeStackNavigator();

type AppStackProps = {
  isLoggedIn: boolean;
};

export const LoginStack = ({ isLoggedIn }: AppStackProps) => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator
      initialRouteName={isLoggedIn ? 'Navbar' : 'LoginScreen'}
      screenOptions={{
        headerRight: props => <BackButton {...props} />,
        headerShadowVisible: false,
        headerBackVisible: false
      }}
    >
      <Stack.Screen
        name='LoginScreen'
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='LoginFormScreen'
        component={LoginFormScreen}
        options={{
          headerTitle: props => (
            <HeaderText
              {...props}
              title={t('headers.login')}
              fontSize={36}
            />
          )
        }}
      />
      <Stack.Screen
        name='Navbar'
        component={Navbar}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
