import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SettingsScreen } from './settings-screen';
import { ThemeSelectorScreen } from './theme-selector-screen';
import { useTranslation } from 'react-i18next';
import { Header } from '@components/header';
import { BackButton } from '@components/back-button';

const Stack = createNativeStackNavigator();

export const SettingsStack = () => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator
      initialRouteName='SettingsScreen'
      screenOptions={{
        headerRight: props => <BackButton {...props} />,
        headerShadowVisible: false
      }}
    >
      <Stack.Screen
        name='SettingsScreen'
        component={SettingsScreen}
        options={{
          headerTitle: props => (
            <Header
              {...props}
              title='Settings'
            />
          )
        }}
      />
      <Stack.Screen
        name='ThemeSelectorScreen'
        component={ThemeSelectorScreen}
        options={{ headerTitle: t('headers.theme-settings') }}
      />
    </Stack.Navigator>
  );
};
