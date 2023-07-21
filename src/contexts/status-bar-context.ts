import { createContext } from 'react';

export const StatusBarContext = createContext({
  isStatusBarTransparent: true,
  setIsStatusBarTransparent: (isTransparent: boolean) => {
    isTransparent;
  }
});
