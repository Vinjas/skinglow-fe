import { getDefaultTheme } from '@utils/get-default-theme';
import { createContext } from 'react';
import { ThemeName } from 'tamagui';

export const ThemeContext = createContext({
  theme: getDefaultTheme(),
  setTheme: (newTheme: ThemeName) => {
    newTheme;
  }
});
