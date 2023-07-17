import { Button, SizableText } from 'tamagui';
import React from 'react';
import LeftArrowSvg from '@assets/svg/left-arrow.svg';
import { useNavigation } from '@react-navigation/native';

type BackButtonProps = {
  canGoBack: boolean;
};

export function BackButton({ canGoBack }: BackButtonProps) {
  const navigation = useNavigation();

  function handleGoBack() {
    if (canGoBack) {
      navigation.goBack();
    }
  }

  return (
    <Button
      unstyled
      display='flex'
      fd='row'
      ai='center'
      onPress={handleGoBack}
    >
      <LeftArrowSvg />
      <SizableText
        fontFamily='$heading'
        size='$5'
      >
        Back
      </SizableText>
    </Button>
  );
}
