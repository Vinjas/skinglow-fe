import React from 'react';
import { YStack, XStack, Text } from 'tamagui';
import { Logo } from '../components/Logo';
import { useTranslation } from 'react-i18next';

export function Home(): JSX.Element {
  const { t } = useTranslation();

  return (
    <YStack
      f={1}
      ai='flex-start'
      bg='$background'
      px='$4'
    >
      <XStack>
        <Logo />
      </XStack>
      <Text>{t('hello')}</Text>
    </YStack>
  );
}
