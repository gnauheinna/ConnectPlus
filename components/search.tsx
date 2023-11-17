import { useState, useEffect } from "react";
import { View, Text } from "./Themed";
import { TextInput } from "react-native-paper";
import { TouchableOpacity, StyleSheet, Image } from "react-native";
import {
  collection,
  query,
  where,
  getDocs,
  getFirestore,
  serverTimestamp,
  DocumentData,
  getDoc,
  setDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { useUser } from "../app/context/UserContext";

export default function Search() {
  // the user we're searching
  const { user, setUser } = useUser();
  const [inputName, setInputName] = useState("");
  const [searchUser, setSearchUser] = useState<DocumentData | null>(null);
  const [err, setErr] = useState(false);
  const db = getFirestore();

  const handleSearch = async () => {
    console.log("handling search!!");
    // searches for target user from database
    const q = query(collection(db, "users"), where("name", "==", inputName));
    console.log(q);
    try {
      console.log("try block");
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        console.log("empty query!!");
        setErr(true);
      }
      console.log("quersnapshot: ", querySnapshot);
      querySnapshot.forEach((doc) => {
        console.log("this is searched username :", inputName);
        setSearchUser(doc.data() || null);
      });
    } catch (err) {
      // searched user doesn't exist
      console.log("err == true: ", err);
      setErr(true);
    }
  };

  const handleSelect = async () => {
    console.log("Err at handleSelect: ", err);
    //check whether the group(chats in firestore) exists, if not create
    if (user != null && searchUser != null) {
      const combinedId =
        user.userID > searchUser.userID
          ? user.userID + searchUser.userID
          : searchUser.userID + user.userID;

      try {
        const res = await getDoc(doc(db, "chats", combinedId));
        console.log("chat for: ", combinedId);
        if (!res.exists()) {
          console.log("chat doesn't exist");
          //create a chat in chats collection
          await setDoc(doc(db, "chats", combinedId), { messages: [] });

          //create user chats (for currentuser)
          await updateDoc(doc(db, "userChats", user.userID), {
            [combinedId + ".userInfo"]: {
              userID: searchUser.userID,
              name: searchUser.name,
              //photo: searchUser.photoURL,
            },
            [combinedId + ".date"]: serverTimestamp(),
          });

          //create user chats (for targetuser)
          await updateDoc(doc(db, "userChats", searchUser.userID), {
            [combinedId + ".userInfo"]: {
              userID: user.userID,
              name: user.name,
              //photoURL: user.photoURL,
            },
            [combinedId + ".date"]: serverTimestamp(),
          });
        }
      } catch (error) {
        console.error("Error creating chat:", error);
      }
    }
  };
  return (
    <View>
      <View>
        {/* Search Bar */}
        <TouchableOpacity>
          <View style={styles.searchBar}>
            <Image
              style={styles.searchIcon}
              source={require("../assets/images/search.png")}
            />
            <TextInput
              style={styles.searchText}
              placeholder="Search"
              onChangeText={(text) => {
                setInputName(text);
                setSearchUser(null); // Reset searchUser to null when input text changes
              }}
              value={inputName}
              onSubmitEditing={handleSearch}
              onEndEditing={handleSearch}
            />
          </View>
        </TouchableOpacity>
      </View>
      {err ? (
        <Text>User not found!</Text>
      ) : (
        inputName !== "" &&
        searchUser && (
          <TouchableOpacity onPress={handleSelect}>
            {/*<Image source={require("../assets/images/avatars/avatar9.png")} />*/}
            <View>
              <Text>{searchUser.name}</Text>
            </View>
          </TouchableOpacity>
        )
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    height: 45,
    width: "100%",
    borderRadius: 30,
    backgroundColor: "#FFFFFF",
    opacity: 0.8,
    padding: 10,
    paddingLeft: 20,
    flexDirection: "row",
    justifyCenter: "center",
  },
  searchIcon: {
    width: 22,
    height: 22,
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  searchText: {
    color: "#777777",
    fontSize: 20,
    alignItems: "center",
  },
});
