import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SettingsScreen } from './settings-screen';
import { ThemeSelectorScreen } from './theme-selector-screen';
import { useTranslation } from 'react-i18next';

const Stack = createNativeStackNavigator();

export const SettingsStack = () => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator initialRouteName='SettingsScreen'>
      <Stack.Screen
        name='SettingsScreen'
        component={SettingsScreen}
        options={{ headerTitle: t('headers.settings') }}
      />
      <Stack.Screen
        name='ThemeSelectorScreen'
        component={ThemeSelectorScreen}
        options={{ headerTitle: t('headers.theme-settings') }}
      />
    </Stack.Navigator>
  );
};
