// UserContext.js
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

// represents the shape of the context value
type UserContextType = {
  user: {
    name: string;
    email: string;
    major: string;
    year: string;
  };
  setUser: (user: {
    name: string;
    email: string;
    major: string;
    year: string;
  }) => void;
};

// createz a new context object and
const UserContext = createContext<UserContextType>({
  user: { name: "", email: "", major: "", year: "" },
  setUser: () => {},
});

const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const auth = getAuth();
  const Currentuser = auth.currentUser;
  const db = getFirestore();

  const [userID, setUserID] = useState<any>();

  const [user, setUser] = useState({
    name: "",
    email: "",
    major: "",
    year: "",
  });

  setUserID(Currentuser?.uid);
  useEffect(() => {
    // Fetch user data from the "users" collection in Firebase
    const fetchUser = async () => {
      try {
        if (userID) {
          const usersCollection = collection(db, "users");
          const userInfo = await getDoc;
        }

        const userDoc = await db.collection("users").doc("YOUR_USER_ID").get();
        if (userDoc.exists) {
          setUser(userDoc.data());
        } else {
          setUser({ name: "", email: "", major: "", year: "" });
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setUser({ name: "", email: "", major: "", year: "" });
      }
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  return useContext(UserContext);
};

export { UserProvider, useUser };
