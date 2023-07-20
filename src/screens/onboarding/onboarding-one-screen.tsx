import React from 'react';
import { Text, View, YStack } from 'tamagui';

export function OnboardingScreenOne() {
  return (
    <View
      bg='$background'
      f={1}
    >
      <YStack
        jc='center'
        mx={'$4'}
      >
        <Text>Onboarding Screen One</Text>
      </YStack>
    </View>
  );
}
