import React from 'react';
import { YStack, XStack } from 'tamagui';
import Logo from '../components/Logo';

export function Home(): JSX.Element {
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
    </YStack>
  );
}
