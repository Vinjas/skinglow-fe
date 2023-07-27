import { appStorage } from '@app-storage/app-storage';
import { LoginButton } from '@components/buttons/login-button';
import { Footer } from '@components/footer';
import { Logo } from '@components/logo';
import { REFRESH_TOKEN, USER_EMAIL } from '@constants/app-storage';
import { cognitoPool } from '@utils/cognito-pool';
import { CognitoAccessToken, CognitoUser } from 'amazon-cognito-identity-js';
import React, { useCallback, useEffect } from 'react';
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

  useEffect(() => {
    getSession();
  }, []);

  const getSession = useCallback(async () => {
    const storageToken = appStorage.getString(REFRESH_TOKEN);
    const userEmail = appStorage.getString(USER_EMAIL);

    console.log('storageToken :>> ', storageToken);
    console.log('userEmail :>> ', userEmail);

    if (!storageToken || !userEmail) {
      return;
    }

    const user = new CognitoUser({
      Username: userEmail, // Puedes usar un nombre de usuario temporal o cualquier valor válido
      Pool: cognitoPool
    });

    console.log('user :>> ', user);

    if (!user) {
      return;
    }

    user.getSession((err, session) => {
      if (err) {
        return;
      }

      const sessionToken = session?.getRefreshToken()?.getToken();

      if (sessionToken === storageToken) {
        navigation.navigate('Navbar');
      }
    });
  }, []);

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
