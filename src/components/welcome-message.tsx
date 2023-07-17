import React from 'react';
import { useTranslation } from 'react-i18next';
import { SizableText, Text, View, XStack } from 'tamagui';

export function WelcomeMessage(): JSX.Element {
  const { t } = useTranslation();

  const user = 'Alyssa';

  return (
    <View>
      <XStack pt={16}>
        <Text
          fontFamily={'$rubik-light'}
          fontSize={44}
          fontWeight={'200'}
          lineHeight={44}
        >
          {t('home.user-welcome-1')}
        </Text>
        <SizableText
          fontFamily='$rubik-medium'
          size='$10'
          lineHeight={44}
        >
          {`${user},`}
        </SizableText>
      </XStack>
      <SizableText
        fontFamily='$heading'
        size={5}
        col='$gray-1'
        lineHeight={20}
      >
        {t('home.user-welcome-2')}
      </SizableText>
    </View>
  );
}
