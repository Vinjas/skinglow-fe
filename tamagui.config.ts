import { shorthands } from '@tamagui/shorthands';
import { tokens } from '@tamagui/themes';
import { createFont, createTamagui, createTheme, createTokens } from 'tamagui';

const headingFont = createFont({
  family: 'Arial',
  size: {
    5: 13,
    6: 15,
    9: 32,
    10: 44
  },
  transform: {
    6: 'uppercase',
    7: 'none'
  },
  weight: {
    6: '400',
    7: '700'
  },
  color: {
    6: '$colorFocus',
    7: '$color'
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
    15: -4
  },
  // for native
  face: {
    700: { normal: 'InterBold' },
    800: { normal: 'InterBold' },
    900: { normal: 'InterBold' }
  }
});

const defaultFont = createFont({
  family: 'Arial',
  size: {
    1: 14,
    2: 18,
    3: 22
  },
  lineHeight: {
    1: 15,
    2: 20
  },
  weight: {
    4: '400',
    7: '600'
  },
  letterSpacing: {
    4: 0,
    7: -1
  }
});

const skinglowTokens = createTokens({
  ...tokens,
  color: {
    ...tokens.color,
    'black': '#000',
    'white': '#fff',
    'grey': '#979797',
    'dark-grey': '#838383',
    'light-grey-1': '#f6f6f6',
    'transparent-black': 'rgba(0, 0, 0, 0.4)'
  }
});

const lightTheme = createTheme({
  background: skinglowTokens.color.white,
  color: skinglowTokens.color.black
});

const darkTheme = createTheme({
  background: skinglowTokens.color.black,
  color: skinglowTokens.color.white
});

const skinglowThemes = {
  lightTheme,
  darkTheme
};

const skinglowShorthands = {
  ...shorthands,
  bdf: 'backdrop-filter'
};

const config = createTamagui({
  defaultTheme: 'light',
  defaultFont: 'defaultFont',
  themes: skinglowThemes,
  tokens: skinglowTokens,
  shorthands: skinglowShorthands,
  fonts: {
    defaultFont,
    heading: headingFont,
    body: defaultFont
  }
});

type Conf = typeof config;
declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
export default config;
