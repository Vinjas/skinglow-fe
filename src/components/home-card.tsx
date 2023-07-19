import React from 'react';
import { Card, Image, SizableText } from 'tamagui';
import Animated, {
  FadeIn,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from 'react-native-reanimated';
import {
  TapGestureHandler,
  TapGestureHandlerGestureEvent
} from 'react-native-gesture-handler';

type HomeCardProps = {
  title: string;
  height: number | string;
  image: any;
  f?: number;
};

const AnimatedCard = Animated.createAnimatedComponent(Card);
const AnimatedImage = Animated.createAnimatedComponent(Image);

export function HomeCard({ title, height, image, f }: HomeCardProps): JSX.Element {
  const pressed = useSharedValue(false);

  const eventHandler = useAnimatedGestureHandler<TapGestureHandlerGestureEvent>({
    onStart: () => {
      pressed.value = true;
    },
    onEnd: () => {
      pressed.value = false;
    }
  });

  const uas = useAnimatedStyle(() => {
    return {
      opacity: withSpring(pressed.value ? 0.8 : 1, {
        damping: 10,
        stiffness: 100
      }),
      transform: [{ scale: withSpring(pressed.value ? 0.9 : 1) }],
      elevation: withSpring(pressed.value ? 1 : 3, {
        damping: 10,
        stiffness: 100
      })
    };
  });

  return (
    <TapGestureHandler onGestureEvent={eventHandler}>
      <AnimatedCard
        f={f}
        br={10}
        width={'100%'}
        height={height}
        entering={FadeIn}
        style={uas}
        bg={'$gray'}
        elevation={3}
      >
        <Card.Footer
          py={8}
          bg={'$transparent-black'}
          ai={'center'}
          jc={'center'}
          bblr={10}
          bbrr={10}
        >
          <SizableText
            fontFamily={'$body'}
            size={'$5'}
            col={'$white'}
            ls={1.4}
          >
            {title}
          </SizableText>
        </Card.Footer>
        <Card.Background>
          <AnimatedImage
            mah={'100%'}
            maw={'100%'}
            borderRadius={10}
            resizeMode='contain'
            alignSelf='center'
            source={image}
          />
        </Card.Background>
      </AnimatedCard>
    </TapGestureHandler>
  );
}
