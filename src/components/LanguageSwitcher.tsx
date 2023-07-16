import React from 'react';
import { Button, Text, YStack } from 'tamagui';
import { useTranslation } from 'react-i18next';

type LanguageMap = {
  [key: string]: {
    nativeName: string;
  };
};

const lngs: LanguageMap = {
  en: { nativeName: 'English' },
  es: { nativeName: 'Spanish' }
};

export function LanguageSwitcher(): JSX.Element {
  const { i18n } = useTranslation();

  return (
    <YStack>
      <Text>LanguageSwitcher</Text>
      {Object.keys(lngs).map(lng => (
        <Button
          key={lng}
          onPress={() => {
            i18n.changeLanguage(lng);
          }}
        >
          {lngs[lng].nativeName}
        </Button>
      ))}
    </YStack>
  );
}
