import { shorthands } from '@tamagui/shorthands';
import { tokens, themes } from '@tamagui/themes';
import { createFont, createTamagui, createTheme, createTokens } from 'tamagui';

const kanitFont = createFont({
  family: 'Kanit-Regular',
  size: {
    1: 14,
    2: 18,
    3: 22,
    10: 44
  },
  lineHeight: {
    1: 15,
    2: 20
  },
  weight: {
    4: '400',
    5: '500',
    7: '600'
  },
  letterSpacing: {
    4: 0,
    7: -1,
    8: -1.5
  }
});

const rubikFont = createFont({
  family: 'Rubik-Regular',
  size: {
    10: 44
  },
  weight: {
    5: '700'
  },
  letterSpacing: {
    10: -2
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
  color: skinglowTokens.color.black,
  logo: 'logoFont'
});

const darkTheme = createTheme({
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
    body: rubikFont,
    heading: kanitFont,
    defaultFont: rubikFont
  }
});

type Conf = typeof config;
declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
export default config;
