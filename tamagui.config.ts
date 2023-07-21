import { shorthands } from '@tamagui/shorthands';
import { tokens, themes } from '@tamagui/themes';
import { createFont, createTamagui, createTheme, createTokens } from 'tamagui';

const kanitFont = createFont({
  family: 'Kanit-Regular',
  size: {
    2: 11,
    3: 12,
    4: 14,
    5: 16,
    6: 18,
    7: 20,
    10: 44,
    true: 16
  },
  weight: {
    3: '300',
    4: '400',
    5: '700'
  },
  letterSpacing: {
    3: 0,
    10: -2
  }
});

const rubikFont = createFont({
  family: 'Rubik-Regular',
  size: {
    2: 11,
    3: 12,
    4: 14,
    5: 16,
    6: 18,
    7: 20,
    10: 44,
    true: 16
  },
  weight: {
    3: '300',
    4: '400',
    7: '700'
  },
  letterSpacing: {
    3: 0,
    10: -2
  },
  textTransform: {
    uppercase: 'uppercase',
    lowercase: 'lowercase'
  }
});

const skinglowTokens = createTokens({
  ...tokens,
  color: {
    'black': '#000',
    'white': '#fff',
    'gray-1': '#979797',
    'dark-gray-1': '#838383',
    'dark-gray-2': '#212121',
    'light-gray-1': '#f6f6f6',
    'light-gray-2': '#cecece',
    'transparent-black-1': 'rgba(0, 0, 0, 0.4)',
    'transparent-black-2': 'rgba(0, 0, 0, 0.6)'
  }
});

const lightTheme = createTheme({
  ...skinglowTokens.color,
  background: skinglowTokens.color.white,
  color: skinglowTokens.color.black,
  logo: 'logoFont'
});

const darkTheme = createTheme({
  ...skinglowTokens.color,
  background: skinglowTokens.color.black,
  color: skinglowTokens.color.white,
  logo: 'logoFont'
});

const skinglowThemes = {
  ...themes,
  lightTheme,
  darkTheme
};

const skinglowShorthands = {
  ...shorthands,
  bdf: 'backdrop-filter'
};

const config = createTamagui({
  themes: skinglowThemes,
  tokens: skinglowTokens,
  shorthands: skinglowShorthands,
  fonts: {
    'body': rubikFont,
    'heading': kanitFont,
    'defaultFont': rubikFont,
    'rubik-light': createFont({
      family: 'Rubik-Light',
      size: {
        10: 44,
        true: 44
      }
    }),
    'rubik-medium': createFont({
      family: 'Rubik-Medium',
      size: {
        5: 16,
        10: 44,
        true: 16
      }
    })
  }
});

type Conf = typeof config;
declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
export default config;
