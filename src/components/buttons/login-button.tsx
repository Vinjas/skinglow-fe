import React from 'react';
import {
  TapGestureHandler,
  TapGestureHandlerGestureEvent
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from 'react-native-reanimated';
import { Button } from 'tamagui';

const AnimatedLoginButton = Animated.createAnimatedComponent(Button);

type LoginButtonProps = {
  text: string;
  isForgetPassword?: boolean;
  onPress: () => void;
};

export function LoginButton({ text, isForgetPassword, onPress }: LoginButtonProps) {
  const pressed = useSharedValue(false);

  const eventHandler = useAnimatedGestureHandler<TapGestureHandlerGestureEvent>({
    onStart: () => {
      pressed.value = true;
    },
    onFinish: () => {
      pressed.value = false;
    }
  });

  const uasLogin = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withSpring(pressed.value ? 0.9 : 1) }],
      backgroundColor: withSpring(
        pressed.value ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.4)'
      )
    };
  });

  return (
    <TapGestureHandler
      onGestureEvent={eventHandler}
      onEnded={() => (pressed.value = false)}
    >
      <AnimatedLoginButton
        unstyled
        bg='$transparent-black-1'
        color={'$white'}
        br={10}
        py={isForgetPassword ? 4 : 16}
        mt={isForgetPassword ? 8 : 0}
        mx={24}
        fontSize={isForgetPassword ? '$5' : '$7'}
        ai={'center'}
        jc={'center'}
        style={uasLogin}
        onPress={onPress}
      >
        {text}
      </AnimatedLoginButton>
    </TapGestureHandler>
  );
}
