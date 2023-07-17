import React from 'react';
import { SizableText, XStack } from 'tamagui';

type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps): JSX.Element {
  return (
    <XStack>
      <SizableText
        fontFamily='$body'
        size='$7'
        textTransform='uppercase'
      >
        {title}
      </SizableText>
    </XStack>
  );
}
