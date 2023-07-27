import { HeaderText } from '@components/header/header-text';
import { Auth } from 'aws-amplify';
import { AuthContext } from 'contexts/auth-context';
import React, { useContext } from 'react';
import { Button, ScrollView, Text, YStack } from 'tamagui';

export function DiscoverScreen(): JSX.Element {
  const { user } = useContext(AuthContext);

  function handleOnPress() {
    console.log('user :>> ', user);

    const session = Auth.currentSession();

    console.log('session :>> ', session);
  }

  return (
    <ScrollView bg='$background'>
      <YStack m={'$4'}>
        <HeaderText title='Discover' />

        <Button onPress={handleOnPress}>
          <Text>Session</Text>
        </Button>
      </YStack>
    </ScrollView>
  );
}
