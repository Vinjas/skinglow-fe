import { createContext } from 'react';

type StatusBarContextType = {
  isStatusBarTransparent: boolean;
  setIsStatusBarTransparent: (isTransparent: boolean) => void;
};

export const StatusBarContext = createContext<StatusBarContextType>({
  isStatusBarTransparent: true,
  setIsStatusBarTransparent: (isTransparent: boolean) => {
    isTransparent;
  }
});
