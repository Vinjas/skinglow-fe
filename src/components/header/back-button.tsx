import { Button, SizableText } from 'tamagui';
import React from 'react';
import LeftArrowSvg from '@assets/svg/left-arrow.svg';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from 'react-native-reanimated';
import {
  TapGestureHandler,
  TapGestureHandlerGestureEvent
} from 'react-native-gesture-handler';

type BackButtonProps = {
  canGoBack?: boolean;
  tintColor?: string | undefined;
  pressColor?: string | undefined;
  pressOpacity?: number | undefined;
};

const AnimatedButton = Animated.createAnimatedComponent(Button);

export function BackButton({ canGoBack }: BackButtonProps) {
  const navigation = useNavigation();

  const { t } = useTranslation();

  function handleGoBack() {
    if (canGoBack) {
      navigation.goBack();
    }
  }

  const pressed = useSharedValue(false);

  const eventHandler = useAnimatedGestureHandler<TapGestureHandlerGestureEvent>({
    onStart: () => {
      pressed.value = true;
    },
    onFinish: () => {
      pressed.value = false;
    }
  });

  const uas = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withSpring(pressed.value ? 1.2 : 1) }],
      backgroundColor: withSpring(pressed.value ? '#f3f3f3' : '#fff')
    };
  });

  return (
    <TapGestureHandler onGestureEvent={eventHandler}>
      <AnimatedButton
        unstyled
        display='flex'
        fd='row'
        p={10}
        br={10}
        bg={'$white'}
        ai='center'
        style={uas}
        onPress={handleGoBack}
      >
        <LeftArrowSvg />
        <SizableText
          fontFamily='$heading'
          size='$5'
        >
          {t('headers.back')}
        </SizableText>
      </AnimatedButton>
    </TapGestureHandler>
  );
}
