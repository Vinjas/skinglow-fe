import React from 'react';
import { SizableText, XStack } from 'tamagui';

type HeaderProps = {
  title: string;
  uppercase?: boolean;
  fontSize?: number;
};

export function HeaderText({
  title,
  uppercase = false,
  fontSize
}: HeaderProps): JSX.Element {
  return (
    <XStack>
      <SizableText
        fontFamily='$body'
        size='$7'
        textTransform={uppercase ? 'uppercase' : undefined}
        fontSize={fontSize ? fontSize : undefined}
      >
        {title}
      </SizableText>
    </XStack>
  );
}
