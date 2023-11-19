import React, { createContext, useState, ReactNode, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp, getApps } from "firebase/app";
import { firebaseConfig } from "../../firebase";
import { useContext } from "react";

type CurrentChatContextType = {
  currentChatID: string;
  setCurrentChatID: (value: string) => void;
};

export const CurrentChatContext = createContext<CurrentChatContextType>({
  currentChatID: "",
  setCurrentChatID: () => {},
});

export const ContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  if (getApps() == null) {
    const app = initializeApp(firebaseConfig);
  }

  const [currentChatID, setCurrentChatID] = useState(""); // Initialize the state with empty

  return (
    <CurrentChatContext.Provider value={{ currentChatID, setCurrentChatID }}>
      {children}
    </CurrentChatContext.Provider>
  );
};

export const useCurrentChat = (): CurrentChatContextType => {
  const context = useContext(CurrentChatContext);
  if (context === undefined) {
    throw new Error("useCurrentChat must be used within a CurrentChatProvider");
  }
  return context;
};
