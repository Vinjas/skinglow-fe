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
    onFinish: () => {
      pressed.value = false;
    }
  });

  const uasCard = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withSpring(pressed.value ? 0.95 : 1) }],
      elevation: withSpring(pressed.value ? 0 : 5)
    };
  });

  const uasImage = useAnimatedStyle(() => {
    return {
      opacity: withSpring(pressed.value ? 0.7 : 1)
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
        style={uasCard}
        bg={'$black'}
      >
        <Card.Footer
          py={8}
          bg={'$transparent-black-1'}
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
            style={uasImage}
          />
        </Card.Background>
      </AnimatedCard>
    </TapGestureHandler>
  );
}
