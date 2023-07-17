import React from 'react';
import { Text, XStack } from 'tamagui';

type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps): JSX.Element {
  return (
    <XStack>
      <Text>{title}</Text>
    </XStack>
  );
}
