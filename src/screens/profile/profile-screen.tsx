import React from 'react';
import { WelcomeMessage } from '@components/welcome-message';
import { YStack } from 'tamagui';

export function ProfileScreen() {
  return (
    <YStack
      px={16}
      bg={'$background'}
    >
      <WelcomeMessage />
    </YStack>
  );
}
