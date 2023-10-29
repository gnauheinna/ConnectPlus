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
  getDoc,
  Timestamp,
  doc,
  updateDoc,
} from "firebase/firestore";

// represents the shape of the context value
export type UserContextType = {
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
if (getApps() == null) {
  const app = initializeApp();
}

const UserContext = createContext<UserContextType | undefined>(undefined);
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

  useEffect(() => {
    console.log("E THis is Current User");
    console.log(Currentuser);
    setUserID(Currentuser?.uid);
  }, [Currentuser]); // Only run this effect once when the component mounts
  useEffect(() => {
    console.log("E this is User ID");
    console.log(userID);
  }, [userID]);
  // Fetch user data from the "users" collection in Firebase
  useEffect(() => {
    const fetchUser = async (): Promise<void> => {
      try {
        if (userID) {
          // Add null check for userID
          console.log("Fetch user!");
          const usersCollection = collection(db, "users");
          const userInfo = await getDoc(doc(db, "users", userID));
          const userData = userInfo.data() as {
            name: string;
            email: string;
            major: string;
            year: string;
          };
          setUser(userData);
          console.log(userData);
          console.log(user);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setUser({ name: "", email: "", major: "", year: "" });
      }
    };
    // Clean up the listener when the component unmounts
    fetchUser();
  }, [userID]);

  useEffect(() => {
    console.log("E This is user");
    console.log(user);
    //setUser1(user);
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export { UserProvider, useUser, UserContext };
