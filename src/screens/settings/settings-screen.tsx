import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Text, YStack } from 'tamagui';

type SettingsScreenProps = {
  navigation: any;
};

export function SettingsScreen({ navigation }: SettingsScreenProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <YStack
      f={1}
      jc='center'
      bg='$background'
    >
      <Button onPress={() => navigation.navigate('ThemeSelectorScreen')}>
        {t('settings.theme')}
      </Button>
    </YStack>
  );
}
