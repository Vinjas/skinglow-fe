import { Button, Text } from 'tamagui';
import React from 'react';
import LeftArrowSvg from '@assets/svg/left-arrow.svg';
import { useNavigation } from '@react-navigation/native';

export function BackButton() {
  const navigation = useNavigation();

  return (
    <Button
      unstyled
      display='flex'
      fd='row'
      ai='center'
      onPress={() => navigation.goBack()}
    >
      <LeftArrowSvg />
      <Text>Back</Text>
    </Button>
  );
}
