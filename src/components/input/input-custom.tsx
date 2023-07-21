import React from 'react';
import { Input, SizableText, View } from 'tamagui';

type InputCustomProps = {
  placeholder: string;
  onChangeText: (text: string) => void;
  onBlur: (e: any) => void;
  value: string;
  label: string;
};

export function InputCustom({
  placeholder,
  onChangeText,
  onBlur,
  value,
  label
}: InputCustomProps) {
  return (
    <View>
      <SizableText>{label}</SizableText>
      <Input
        unstyled
        p={16}
        br={10}
        fontFamily={'$heading'}
        fontSize={16}
        col='$dark-gray-1'
        placeholderTextColor={'$dark-gray-1'}
        bg='$light-gray-1'
        placeholder={placeholder}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
      />
    </View>
  );
}
