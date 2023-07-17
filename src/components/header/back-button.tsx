import { Button, SizableText } from 'tamagui';
import React from 'react';
import LeftArrowSvg from '@assets/svg/left-arrow.svg';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

type BackButtonProps = {
  canGoBack?: boolean;
  tintColor?: string | undefined;
  pressColor?: string | undefined;
  pressOpacity?: number | undefined;
};

export function BackButton({ canGoBack }: BackButtonProps) {
  const navigation = useNavigation();

  const { t } = useTranslation();

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
        {t('headers.back')}
      </SizableText>
    </Button>
  );
}
