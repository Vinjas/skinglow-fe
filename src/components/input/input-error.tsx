import React from 'react';
import { SizableText, View } from 'tamagui';

type InputErrorProps = {
  error: string;
};

export function InputError({ error }: InputErrorProps) {
  return (
    <View>
      <SizableText col='red'>{error}</SizableText>
    </View>
  );
}
