import React from 'react';
import { Button } from 'tamagui';
import SettingsIcon from '@assets/svg/settings.svg';
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

type SettingsButtonProps = {
  navigation: any;
};

const AnimatedButton = Animated.createAnimatedComponent(Button);

export function SettingsButton({ navigation }: SettingsButtonProps): JSX.Element {
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
      transform: [{ scale: withSpring(pressed.value ? 1.4 : 1) }],
      backgroundColor: withSpring(pressed.value ? '#f3f3f3' : '#fff')
    };
  });

  return (
    <TapGestureHandler onGestureEvent={eventHandler}>
      <AnimatedButton
        unstyled
        p={10}
        br={50}
        bg={'$white'}
        style={uas}
        onPress={() => navigation.navigate('SettingsStack')}
      >
        <SettingsIcon
          width={27}
          height={27}
        />
      </AnimatedButton>
    </TapGestureHandler>
  );
}
