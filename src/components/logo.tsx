import React from 'react';
import { useTranslation } from 'react-i18next';
import { SizableText } from 'tamagui';

export function Logo(): JSX.Element {
  const { t } = useTranslation();

  return (
    <SizableText
      fontFamily='$rubik-medium'
      size='$10'
      letterSpacing={-4}
    >
      {t('skinglow')}
    </SizableText>
  );
}
