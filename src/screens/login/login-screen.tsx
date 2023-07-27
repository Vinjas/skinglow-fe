import { LoginButton } from '@components/buttons/login-button';
import { Footer } from '@components/footer';
import { Logo } from '@components/logo';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, YStack } from 'tamagui';

const loginImage = require('@assets/img/login-image.png');

type LoginScreenProps = {
  navigation: any;
};

export function LoginScreen({ navigation }: LoginScreenProps) {
  const { t } = useTranslation();

  return (
    <View
      bg='$background'
      f={1}
    >
      <YStack
        jc='space-between'
        f={1}
      >
        <ImageBackground
          source={loginImage}
          style={{ flex: 1, justifyContent: 'space-between' }}
        >
          <SafeAreaView style={{ flex: 1, justifyContent: 'space-between' }}>
            <YStack mx={24}>
              <Logo />
            </YStack>

            <YStack gap={24}>
              <LoginButton
                text={t('login.login-default')}
                onPress={() => navigation.navigate('LoginFormScreen')}
              />

              <LoginButton
                text={t('login.forget-password')}
                onPress={() => navigation.navigate('Navbar')}
                isForgetPassword
              />

              <Footer text={t('login.register')} />
            </YStack>
          </SafeAreaView>
        </ImageBackground>
      </YStack>
    </View>
  );
}
