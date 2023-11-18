// chatContext.js
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp, getApps } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  Timestamp,
  doc,
  updateDoc,
} from "firebase/firestore";

// Represents the shape of the context value
export type UserChat = {
  date: Timestamp;
  lastMessage: string;
  userInfo: {
    name: string;
    userID: string;
  };
};

interface UserChatContextValue {
  userChats: UserChat[];
  loading: boolean;
}

const UserChatContext = createContext<UserChatContextValue | undefined>(
  undefined
);
const UserChatProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const db = getFirestore();
  if (getApps() == null) {
    const app = initializeApp();
  }
  const [userChats, setUserChats] = useState<UserChat[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadChats = async () => {
      try {
        const UserChatsCollection = collection(db, "userChat");
        const querySnapshot = await getDocs(UserChatsCollection);
        const userChatsData: UserChat[] = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          if (data) {
            // validatePostData is a function you'd need to implement
            userChatsData.push(data as UserChat);
          }
        });
        userChatsData.sort((a, b) => b.date.toMillis() - a.date.toMillis());
        setUserChats(userChatsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching userChats:", error);
        setLoading(false);
      }
    };
    loadChats();
  }, []);

  return (
    <UserChatContext.Provider value={{ userChats, loading }}>
      {children}
    </UserChatContext.Provider>
  );
};

const useUserChatContext = () => {
  const context = useContext(UserChatContext);
  if (!context) {
    throw new Error(
      "useUserChatContext must be used within a userChatProvider"
    );
  }
  return context;
};

export { useUserChatContext, UserChatContext, UserChatProvider };
