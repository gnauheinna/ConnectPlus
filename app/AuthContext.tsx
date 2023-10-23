import React, { createContext, useState, ReactNode } from "react";

type AuthContextType = {
  isLoggedIn: boolean;
  setLoggedIn: (value: boolean) => void;
};

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  setLoggedIn: () => {},
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
