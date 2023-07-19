import { HeaderText } from '@components/header/header-text';
import React from 'react';
import { ScrollView, YStack } from 'tamagui';

export function RoutinesScreen(): JSX.Element {
  return (
    <ScrollView bg='$background'>
      <YStack m={'$4'}>
        <HeaderText title='Routines' />
      </YStack>
    </ScrollView>
  );
}
