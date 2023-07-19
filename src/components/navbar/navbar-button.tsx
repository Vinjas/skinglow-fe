import React from 'react';
import { Button } from 'tamagui';
import HomeSvg from '@assets/svg/navbar/home_2.svg';
import CalendarSvg from '@assets/svg/navbar/calendar.svg';
import ProfileSvg from '@assets/svg/navbar/profile.svg';
import SearchSvg from '@assets/svg/search.svg';
import { NAVBAR } from '@constants/constants';
import {
  LongPressGestureHandler,
  LongPressGestureHandlerGestureEvent
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';

type NavbarButtonProps = {
  focused: boolean;
  icon: string;
};

const AnimatedButton = Animated.createAnimatedComponent(Button);

export function NavbarButton({ focused, icon }: NavbarButtonProps) {
  const { HOME, ROUTINES, SEARCH, PROFILE } = NAVBAR;

  const pressed = useSharedValue(false);

  const eventHandler = useAnimatedGestureHandler<LongPressGestureHandlerGestureEvent>({
    onStart: () => {
      pressed.value = true;
    },
    onFinish: () => {
      pressed.value = false;
    }
  });

  const uas = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withTiming(pressed.value ? 1.3 : 1) }],
      elevation: withTiming(pressed.value ? 0 : 0),
      backgroundColor: withTiming(
        !focused ? (pressed.value ? '#cecece' : '#fff') : '#000'
      )
    };
  });

  return (
    <LongPressGestureHandler
      onGestureEvent={eventHandler}
      onEnded={() => (pressed.value = false)}
    >
      <AnimatedButton
        unstyled
        bg={!focused ? '#fff' : '#000'}
        br={50}
        padding={12}
        elevation={0}
        style={uas}
      >
        {icon === HOME && (
          <HomeSvg
            width={30}
            height={30}
            fill={focused ? '#fff' : '#000'}
          />
        )}
        {icon === SEARCH && (
          <SearchSvg
            width={30}
            height={30}
            fill={focused ? '#fff' : '#000'}
          />
        )}
        {icon === ROUTINES && (
          <CalendarSvg
            width={30}
            height={30}
            fill={focused ? '#fff' : '#000'}
          />
        )}
        {icon === PROFILE && (
          <ProfileSvg
            width={30}
            height={30}
            fill={focused ? '#fff' : '#000'}
          />
        )}
      </AnimatedButton>
    </LongPressGestureHandler>
  );
}
