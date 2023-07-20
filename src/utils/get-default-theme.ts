import { appStorage } from '@app-storage/app-storage';
import { CURRENT_THEME } from '@constants/app-storage';
import { THEME } from '@constants/constants';
import { ThemeName } from 'tamagui';

/**
 * Gets the default theme.
 * @returns The default theme.
 */
export function getDefaultTheme(): ThemeName {
  const currentTheme = appStorage.getString(CURRENT_THEME);

  if (currentTheme) {
    return currentTheme as ThemeName;
  } else {
    appStorage.set('theme', THEME.LIGHT);
  }

  return THEME.LIGHT as ThemeName;
}
