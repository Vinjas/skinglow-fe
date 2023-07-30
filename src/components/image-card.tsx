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

type ImageCardProps = {
  title: string;
  height: number | string;
  image?: any;
  f?: number;
  bg?: string;
  isHalf?: boolean;
  onPress?: () => void;
};

const AnimatedCard = Animated.createAnimatedComponent(Card);
const AnimatedImage = Animated.createAnimatedComponent(Image);

export function ImageCard({
  title,
  height,
  image,
  f,
  bg,
  isHalf,
  onPress
}: ImageCardProps): JSX.Element {
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
        bg={bg ? bg : '$black'}
        br={10}
        width={!isHalf ? '100%' : 'auto'}
        height={height}
        entering={FadeIn}
        style={uasCard}
        onPress={onPress}
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
            text-align={'center'}
            px={16}
          >
            {title}
          </SizableText>
        </Card.Footer>
        <Card.Background>
          {image && (
            <AnimatedImage
              mah={'100%'}
              maw={'100%'}
              borderRadius={10}
              resizeMode='contain'
              alignSelf='center'
              source={image}
              style={uasImage}
            />
          )}
        </Card.Background>
      </AnimatedCard>
    </TapGestureHandler>
  );
}
