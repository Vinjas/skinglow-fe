import { getSession } from '@utils/get-session';
import React, { useCallback, useEffect } from 'react';
import { View } from 'tamagui';

type LoadingScreenProps = {
  navigation: any;
};

export function LoadingScreen({ navigation }: LoadingScreenProps) {
  const navigateToInitialScreen = useCallback(
    (hasValidSession: boolean) => {
      if (hasValidSession) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Navbar' }]
        });
      } else {
        navigation.reset({
          index: 0,
          routes: [{ name: 'LoginStack' }]
        });
      }
    },
    [navigation]
  );

  const checkTokensAndNavigate = useCallback(async () => {
    try {
      const isValidSession = await getSession();
      navigateToInitialScreen(isValidSession);
    } catch (error) {
      console.log(error);

      navigation.reset({
        index: 0,
        routes: [{ name: 'LoginStack' }]
      });
    }
  }, [navigateToInitialScreen, navigation]);

  useEffect(() => {
    checkTokensAndNavigate();
  }, [checkTokensAndNavigate]);

  return (
    <View
      bg='$background'
      f={1}
    />
  );
}
