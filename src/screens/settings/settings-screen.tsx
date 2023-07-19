import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, View, YStack } from 'tamagui';

type SettingsScreenProps = {
  navigation: any;
};

export function SettingsScreen({ navigation }: SettingsScreenProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <View
      bg='$background'
      f={1}
    >
      <YStack
        mx={'$4'}
        jc={'center'}
      >
        <Button onPress={() => navigation.navigate('ThemeSelectorScreen')}>
          {t('settings.theme')}
        </Button>
      </YStack>
    </View>
  );
}
