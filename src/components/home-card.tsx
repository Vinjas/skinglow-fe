import React from 'react';
import { Card, Image, SizableText } from 'tamagui';

type HomeCardProps = {
  title: string;
  height: number | string;
  image: any;
  f?: number;
};

export function HomeCard({ title, height, image, f }: HomeCardProps): JSX.Element {
  return (
    <Card
      f={f}
      br={10}
      width={'100%'}
      height={height}
      scale={0.9}
      hoverStyle={{ scale: 0.925 }}
      pressStyle={{ scale: 0.875 }}
      animation='bouncy'
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
        <Image
          h={'100%'}
          maw={'100%'}
          borderRadius={10}
          resizeMode='contain'
          alignSelf='center'
          source={image}
        />
      </Card.Background>
    </Card>
  );
}
