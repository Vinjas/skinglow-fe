import React from 'react';
import { SizableText, View } from 'tamagui';
import ProfileIcon from '@assets/svg/navbar/profile_2.svg';
import { RectButton } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';

type FooterProps = {
  text: string;
};

export function Footer({ text }: FooterProps) {
  const styles = StyleSheet.create({
    rectButton: {
      backgroundColor: '#000',
      paddingHorizontal: 24,
      paddingVertical: 16,
      marginTop: 16
    }
  });

  return (
    <RectButton
      style={styles.rectButton}
      rippleColor='#313131'
    >
      <View
        accessible
        accessibilityRole='button'
        fd={'row'}
        jc={'space-between'}
        ai={'center'}
      >
        <ProfileIcon
          width={30}
          height={30}
          fill={'#fff'}
        />

        <SizableText
          fontFamily={'$heading'}
          size={'$5'}
          fontWeight={'700'}
          col={'$white'}
          textTransform='uppercase'
          letterSpacing={1.5}
        >
          {text}
        </SizableText>
      </View>
    </RectButton>
  );
}
