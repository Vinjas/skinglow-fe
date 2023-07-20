import React from 'react';
import { Text, View, YStack } from 'tamagui';

export function LoginDefaultScreen() {
  return (
    <View
      bg='$background'
      f={1}
    >
      <YStack
        jc='space-between'
        f={1}
      >
        <Text>Test</Text>
      </YStack>
    </View>
  );
}
