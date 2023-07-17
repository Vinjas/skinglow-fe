import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SettingsScreen } from './settings-screen';
import { ThemeSelectorScreen } from './theme-selector-screen';
import { useTranslation } from 'react-i18next';
import { HeaderText } from '@components/header/header-text';
import { BackButton } from '@components/header/back-button';

const Stack = createNativeStackNavigator();

export const SettingsStack = () => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator
      initialRouteName='SettingsScreen'
      screenOptions={{
        headerRight: props => <BackButton {...props} />,
        headerShadowVisible: false,
        headerBackVisible: false
      }}
    >
      <Stack.Screen
        name='SettingsScreen'
        component={SettingsScreen}
        options={{
          headerTitle: props => (
            <HeaderText
              {...props}
              title={t('headers.settings')}
              fontSize={36}
            />
          )
        }}
      />
      <Stack.Screen
        name='ThemeSelectorScreen'
        component={ThemeSelectorScreen}
        options={{
          headerTitle: props => (
            <HeaderText
              {...props}
              title={t('settings.theme')}
              uppercase
            />
          )
        }}
      />
    </Stack.Navigator>
  );
};
