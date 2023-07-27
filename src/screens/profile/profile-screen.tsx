import React from 'react';
import { WelcomeMessage } from '@components/welcome-message';
import { Button, ScrollView, YStack } from 'tamagui';
import { Auth } from 'aws-amplify';
import { appStorage } from '@app-storage/app-storage';
import { REFRESH_TOKEN } from '@constants/app-storage';

type ProfileScreenProps = {
  navigation: any;
};

export function ProfileScreen({ navigation }: ProfileScreenProps) {
  const handleOnPress = async () => {
    try {
      await Auth.signOut();
      appStorage.delete(REFRESH_TOKEN);

      navigation.reset({
        index: 0,
        routes: [{ name: 'LoginStack' }]
      });
    } catch (error) {
      console.log('error signing out: ', error);
    }
  };

  return (
    <ScrollView bg='$background'>
      <YStack m={'$4'}>
        <WelcomeMessage />
        <Button onPress={handleOnPress}>Log out</Button>
      </YStack>
    </ScrollView>
  );
}
