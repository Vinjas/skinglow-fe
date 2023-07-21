import React from 'react';
import { Button } from 'tamagui';
import RightArrowIcon from '@assets/svg/rigth-arrow.svg';
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

type SubmitButtonProps = {
  text: string;
  onPress: () => void;
  disabled?: boolean;
};

const AnimatedButton = Animated.createAnimatedComponent(Button);

export function SubmitButton({ text, onPress, disabled }: SubmitButtonProps) {
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
      transform: [{ scale: withSpring(pressed.value ? 0.9 : 1) }],
      backgroundColor: withSpring(pressed.value ? '#838383' : '#000')
    };
  });

  return (
    <TapGestureHandler
      onGestureEvent={eventHandler}
      onEnded={() => (pressed.value = false)}
    >
      <AnimatedButton
        unstyled
        jc={'center'}
        ai={'center'}
        fd={'row'}
        color='$white'
        mt={24}
        br={25}
        py={12}
        bg={'$black'}
        style={uas}
        onPress={onPress}
        disabled={disabled}
      >
        {text}
        <RightArrowIcon fill={'#fff'} />
      </AnimatedButton>
    </TapGestureHandler>
  );
}
