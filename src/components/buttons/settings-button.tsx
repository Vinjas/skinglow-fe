import React, { useEffect } from 'react';
import { Button, getTokens } from 'tamagui';
import SettingsIcon from '@assets/svg/settings.svg';
import { TapGesture } from 'react-native-gesture-handler/lib/typescript/handlers/gestures/tapGesture';
import {
  Gesture,
  GestureDetector,
  LongPressGestureHandler,
  PanGestureHandler,
  TapGestureHandler,
  TapGestureHandlerGestureEvent,
  createNativeWrapper
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from 'react-native-reanimated';

type SettingsButtonProps = {
  navigation: any;
};

const AnimatedButton = Animated.createAnimatedComponent(Button);

export function SettingsButton({ navigation }: SettingsButtonProps): JSX.Element {
  const pressed = useSharedValue(false);

  const eventHandler = useAnimatedGestureHandler<TapGestureHandlerGestureEvent>({
    onStart: () => {
      pressed.value = true;
      console.log('pressed.value :>> ', pressed.value);
    },
    onFinish: () => {
      pressed.value = false;
      console.log('pressed.value :>> ', pressed.value);
    }
  });

  const uas = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withSpring(pressed.value ? 1.2 : 1) }],
      backgroundColor: withSpring(pressed.value ? '#f6f6f6' : '#fff', {
        damping: 10,
        stiffness: 100
      }),
      padding: withSpring(pressed.value ? 10 : 0, {
        damping: 10,
        stiffness: 100
      }),
      elevation: withSpring(pressed.value ? 3 : 0)
    };
  });

  return (
    <LongPressGestureHandler onGestureEvent={eventHandler}>
      <AnimatedButton
        unstyled
        br={50}
        style={uas}
        onPress={() => navigation.navigate('SettingsStack')}
      >
        <SettingsIcon />
      </AnimatedButton>
    </LongPressGestureHandler>
  );
}
