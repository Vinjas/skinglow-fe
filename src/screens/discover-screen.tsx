import { HeaderText } from '@components/header/header-text';
import { cognitoPool } from '@utils/cognito-pool';
import { AuthContext } from 'contexts/auth-context';
import React, { useContext } from 'react';
import { Button, ScrollView, Text, YStack } from 'tamagui';

export function DiscoverScreen(): JSX.Element {
  const { user } = useContext(AuthContext);

  function handleOnPress() {
    console.log('user :>> ', user);

    //const session = user.getSession();

    //console.log('session :>> ', session);

    const currentUser = cognitoPool.getCurrentUser();

    console.log('currentUser :>> ', currentUser);
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
