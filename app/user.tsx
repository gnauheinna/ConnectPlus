import React, { createContext, useContext, useEffect, useState } from "react";
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
import { Text, View } from "../components/Themed";

type User11Type = {
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

export default function UserScreen() {
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
  }, []); // Only run this effect once when the component mounts

  // Fetch user data from the "users" collection in Firebase
  useEffect(() => {
    if (userID) {
      const fetchUser = async () => {
        try {
          const usersCollection = collection(db, "users");
          const userInfo = await getDoc(doc(db, "users", userID));
          console.log("nihao");
          console.log(userInfo);
          setUser(
            userInfo.data() as {
              name: string;
              email: string;
              major: string;
              year: string;
            }
          );
        } catch (error) {
          console.error("Error fetching user data:", error);
          setUser({ name: "", email: "", major: "", year: "" });
        }
      };

      fetchUser();
    } else {
      console.log("no user");
      setUser({ name: "", email: "", major: "", year: "" });
    }
  }, [userID]);

  return (
    <View>
      <Text>User</Text>
    </View>
  );
}
