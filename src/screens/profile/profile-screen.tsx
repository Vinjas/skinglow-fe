import React from 'react';
import { WelcomeMessage } from '@components/welcome-message';
import { ScrollView, YStack } from 'tamagui';

export function ProfileScreen() {
  return (
    <ScrollView bg='$background'>
      <YStack m={'$4'}>
        <WelcomeMessage />
      </YStack>
    </ScrollView>
  );
}
