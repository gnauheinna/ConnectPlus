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
  getDoc,
  doc,
  Timestamp,
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
  setUserChats: (userChats: UserChat[]) => void;
}

const UserChatContext = createContext<UserChatContextValue | undefined>(
  undefined
);
const UserChatProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const auth = getAuth();
  if (getApps() == null) {
    const app = initializeApp();
  }
  const currentUser = auth.currentUser;
  const currentUserID = currentUser?.uid;

  const [userChats, setUserChats] = useState<UserChat[]>([]);
  const [loading, setLoading] = useState(true);
  const db = getFirestore();

  const fetchUserChats = async () => {
    console.log("fetching userChats");
    try {
      console.log("trying");
      console.log("current user:  ", currentUserID);

      const userChatDocRef = doc(collection(db, "userChats"), currentUserID);
      console.log("chatdocref ", userChatDocRef);
      const userChatDocSnapshot = await getDoc(userChatDocRef);
      console.log("chatdocsnap ", userChatDocSnapshot);
      const userChatsData: UserChat[] = [];
      // we if the current userChat exists
      if (userChatDocSnapshot.exists()) {
        const userData = userChatDocSnapshot.data();
        if (userData) {
          // Iterate through the fields in the userChatDocSnapshot
          Object.keys(userData).forEach((key) => {
            const userChatData = userData[key] as UserChat;
            if (
              userChatData.date &&
              userChatData.lastMessage &&
              userChatData.userInfo
            ) {
              userChatsData.push(userChatData);
            }
          });

          // Sort userChatsData by descending date
          userChatsData.sort((a, b) => b.date.toMillis() - a.date.toMillis());
        }
      }
      setUserChats(userChatsData);
    } catch (error) {
      console.error("Error fetching user chats: ", error);
    }
  };
  if (currentUser) {
    fetchUserChats();
  }

  return (
    <UserChatContext.Provider value={{ userChats, setUserChats }}>
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
