import {shorthands} from '@tamagui/shorthands';
import {themes, tokens} from '@tamagui/themes';
import {createFont, createTamagui} from 'tamagui';

const headingFont = createFont({
  family: 'Arial',
  size: {
    5: 13,
    6: 15,
    9: 32,
    10: 44,
  },
  transform: {
    6: 'uppercase',
    7: 'none',
  },
  weight: {
    6: '400',
    7: '700',
  },
  color: {
    6: '$colorFocus',
    7: '$color',
  },
  letterSpacing: {
    5: 2,
    6: 1,
    7: 0,
    8: 0,
    9: -1,
    10: -1.5,
    12: -2,
    14: -3,
    15: -4,
  },
  // for native
  face: {
    700: {normal: 'InterBold'},
    800: {normal: 'InterBold'},
    900: {normal: 'InterBold'},
  },
});

const bodyFont = createFont({
  family: 'Arial',
  weight: {
    1: '400',
    7: '600',
  },
  size: {
    5: 13,
    6: 15,
    9: 32,
    10: 44,
  },
});

export default createTamagui({
  themes,
  tokens,
  shorthands,
  fonts: {
    heading: headingFont,
    bodyAlternative: bodyFont,
    body: createFont({
      family: 'Arial',
      size: {
        // You'll want to fill these values in so you can use them
        // for now, fontSize="$4" will be 14px.
        // You can define different keys, but `tamagui`
        // standardizes on 1-15.
        4: 14,
      },
      lineHeight: {
        4: 16,
      },
    }),
  },
});
