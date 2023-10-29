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
  [Symbol.iterator]: () => Iterator<any>;
};
if (getApps() == null) {
  const app = initializeApp();
}

// Create an instance of UserContextType and assign it to a variable
const userContextInstance: UserContextType = {
  user: { name: "", email: "", major: "", year: "" },
  setUser: () => {},
  [Symbol.iterator]: function* () {
    yield this.user;
    yield this.setUser;
  },
};
const UserContext = createContext(userContextInstance);
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
    console.log("bboo");
    console.log(Currentuser);
    setUserID(Currentuser?.uid);
  }, [Currentuser]); // Only run this effect once when the component mounts

  // Fetch user data from the "users" collection in Firebase
  useEffect(() => {
    const fetchUser = async (): Promise<void> => {
      try {
        if (userID) {
          // Add null check for userID
          console.log("aaaaaa");
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
    return (): void => {
      fetchUser();
    };
  }, [userID]);

  useEffect(() => {
    console.log("aooo");
    console.log(user);
    //setUser1(user);
  }, [user]);

  return (
    <UserContext.Provider value={userContextInstance}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  return useContext(UserContext);
};

export { UserProvider, useUser, UserContext };
