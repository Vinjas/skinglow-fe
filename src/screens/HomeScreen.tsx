import React from 'react';
import { YStack, XStack, Text, Button } from 'tamagui';
import { Logo } from '../components/Logo';
import { useTranslation } from 'react-i18next';
import SettingsIcon from '@assets/svg/settings.svg';
//import { LanguageSwitcher } from '@components/LanguageSwitcher';

type HomeScreenProps = {
  navigation: any;
};

export function HomeScreen({ navigation }: HomeScreenProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <YStack
      bg='$background'
      px='$4'
    >
      <XStack
        ai='center'
        jc='space-between'
      >
        <Logo />
        <Button
          unstyled
          onPress={() => navigation.navigate('Settings')}
        >
          <SettingsIcon />
        </Button>
      </XStack>
      <Text>{t('hello')}</Text>
      {/* <LanguageSwitcher /> */}
    </YStack>
  );
}
