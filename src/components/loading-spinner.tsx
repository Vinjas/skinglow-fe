import { appStorage } from '@app-storage/app-storage';
import { CURRENT_THEME } from '@constants/app-storage';
import { THEME } from '@constants/constants';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { YStack } from 'tamagui';

type LoadingSpinnerProps = {
  isAbsolute?: boolean;
};

export function LoadingSpinner({ isAbsolute }: LoadingSpinnerProps) {
  const theme = appStorage.getString(CURRENT_THEME);

  return (
    <YStack
      f={1}
      jc={'center'}
      ai={'center'}
      p={isAbsolute ? 250 : 0}
    >
      <ActivityIndicator
        size={80}
        color={theme === THEME.LIGHT ? '#000' : '#fff'}
      />
    </YStack>
  );
}
