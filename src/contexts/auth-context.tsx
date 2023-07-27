import React, { useState, useMemo, createContext } from 'react';

type AuthContextType = {
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
};

export const AuthContext = createContext<AuthContextType | null>(null);

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any>();

  const values = useMemo(() => ({ user, setUser }), [user, setUser]);

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
