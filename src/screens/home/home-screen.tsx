import React from 'react';
import { YStack, XStack, Button, Separator } from 'tamagui';
import { Logo } from '../../components/logo';
import SettingsIcon from '@assets/svg/settings.svg';
import { SearchBar } from '@components/search-bar';
import { WelcomeMessage } from '@components/welcome-message';

type HomeScreenProps = {
  navigation: any;
};

export function HomeScreen({ navigation }: HomeScreenProps): JSX.Element {
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
          onPress={() => navigation.navigate('SettingsStack')}
        >
          <SettingsIcon />
        </Button>
      </XStack>

      <SearchBar />

      <WelcomeMessage />

      <Separator
        my={16}
        boc={'$light-gray-2'}
      />
    </YStack>
  );
}
