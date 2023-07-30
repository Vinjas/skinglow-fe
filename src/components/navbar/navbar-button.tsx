import React from 'react';
import { Button } from 'tamagui';
import { NAVBAR } from '@constants/constants';
import {
  LongPressGestureHandler,
  LongPressGestureHandlerGestureEvent
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming
} from 'react-native-reanimated';
import HomeIcon from '@assets/svg/navbar/home_1.svg';
import HomeIconFocus from '@assets/svg/navbar/home_2.svg';
import CalendarIcon from '@assets/svg/navbar/calendar_1.svg';
import CalendarIconFocus from '@assets/svg/navbar/calendar_2.svg';
import ProfileIcon from '@assets/svg/navbar/profile_1.svg';
import ProfileIconFocus from '@assets/svg/navbar/profile_2.svg';
import SearchIcon from '@assets/svg/navbar/search_1.svg';
import SearchIconFocus from '@assets/svg/navbar/search_2.svg';
import CompassIcon from '@assets/svg/navbar/compass_1.svg';
import CompassIconFocus from '@assets/svg/navbar/compass_2.svg';

type NavbarButtonProps = {
  focused: boolean;
  icon: string;
};

const AnimatedButton = Animated.createAnimatedComponent(Button);

export function NavbarButton({ focused, icon }: NavbarButtonProps) {
  const { HOME, ROUTINES, SEARCH, PROFILE, COMPASS } = NAVBAR;

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
      padding: withSpring(pressed.value ? 28 : 12),
      backgroundColor: withSpring(
        !focused ? (pressed.value ? '#f3f3f3' : '#fff') : '#000'
      )
    };
  });

  const HomeButton = () =>
    focused ? (
      <HomeIconFocus
        width={27}
        height={27}
      />
    ) : (
      <HomeIcon
        width={27}
        height={27}
      />
    );
  const CalendarButton = () =>
    focused ? (
      <CalendarIconFocus
        width={27}
        height={27}
      />
    ) : (
      <CalendarIcon
        width={27}
        height={27}
      />
    );

  const ProfileButton = () =>
    focused ? (
      <ProfileIconFocus
        width={27}
        height={27}
      />
    ) : (
      <ProfileIcon
        width={27}
        height={27}
      />
    );

  const SearchButton = () =>
    focused ? (
      <SearchIconFocus
        width={27}
        height={27}
      />
    ) : (
      <SearchIcon
        width={27}
        height={27}
      />
    );

  const CompassButton = () =>
    focused ? (
      <CompassIconFocus
        width={27}
        height={27}
      />
    ) : (
      <CompassIcon
        width={27}
        height={27}
      />
    );

  return (
    <LongPressGestureHandler
      onGestureEvent={eventHandler}
      onEnded={() => (pressed.value = false)}
    >
      <AnimatedButton
        unstyled
        bg={!focused ? '#fff' : '#000'}
        br={200}
        //padding={12}
        elevation={0}
        style={uas}
      >
        {icon === HOME && <HomeButton />}
        {icon === SEARCH && <SearchButton />}
        {icon === COMPASS && <CompassButton />}
        {icon === ROUTINES && <CalendarButton />}
        {icon === PROFILE && <ProfileButton />}
      </AnimatedButton>
    </LongPressGestureHandler>
  );
}
