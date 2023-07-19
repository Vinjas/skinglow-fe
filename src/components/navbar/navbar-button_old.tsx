import React, { useCallback, useState } from 'react';
import { Button, View } from 'tamagui';
import HomeSvgBlack from '@assets/svg/navbar/home-black.svg';
import HomeSvgWhite from '@assets/svg/navbar/home-white.svg';
import CalendarSvg from '@assets/svg/navbar/calendar.svg';
import ProfileSvg from '@assets/svg/navbar/profile.svg';
import SearchSvg from '@assets/svg/search.svg';
import { NAVBAR } from '@constants/constants';
import {
  LongPressGestureHandler,
  LongPressGestureHandlerGestureEvent
} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
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
const AnimatedGradientCircle = Animated.createAnimatedComponent(View);

export function NavbarButton({ focused, icon }: NavbarButtonProps) {
  const [svgColor, setSvgColor] = useState(focused ? '#fff' : '#000');

  const { HOME, ROUTINES, SEARCH, PROFILE } = NAVBAR;

  const getHomeIcon = () => {
    if (focused) {
      return (
        <HomeSvgWhite style={!focused && { position: 'absolute', top: 0, left: 0 }} />
      );
    } else {
      return (
        <HomeSvgBlack style={!focused && { position: 'absolute', top: 0, left: 0 }} />
      );
    }
  };

  const pressed = useSharedValue(false);

  const eventHandler = useAnimatedGestureHandler<LongPressGestureHandlerGestureEvent>({
    onStart: () => {
      pressed.value = true;
      runOnJS(setSvgColor)('#fff');
    },
    onFinish: () => {
      pressed.value = false;
      runOnJS(setSvgColor)('#000');
    }
  });

  const uas = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withTiming(pressed.value ? 1.2 : 1) }],
      elevation: withTiming(pressed.value ? 0 : 0)
      //backgroundColor: withTiming(!focused ? (pressed.value ? '#000' : '#fff') : '#000')
      //svgColor: withTiming(pressed.value ? '#fff' : '#000')
    };
  });

  const uasCircle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withTiming(pressed.value ? 5 : 0) }],
      backgroundColor: withTiming(pressed.value ? '#000' : '#000')
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
        {icon === HOME && getHomeIcon()}
        {icon === SEARCH && (
          <SearchSvg
            style={!focused && { position: 'absolute', top: 0, left: 0 }}
            width={30}
            height={30}
            //fill={svgColor}
          />
        )}
        {icon === ROUTINES && (
          <CalendarSvg
            style={!focused && { position: 'absolute', top: 0, left: 0 }}
            width={30}
            height={30}
            fill={svgColor}
          />
        )}
        {icon === PROFILE && (
          <ProfileSvg
            style={!focused && { position: 'absolute', top: 0, left: 0 }}
            width={30}
            height={30}
            fill={svgColor}
          />
        )}
        <AnimatedGradientCircle
          bg={'black'}
          p={5}
          br={200}
          style={!focused ? [uasCircle, { zIndex: -1 }] : { display: 'none' }}
        />
      </AnimatedButton>
    </LongPressGestureHandler>
  );
}
