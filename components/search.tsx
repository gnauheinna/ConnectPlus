import { useState, useEffect } from "react";
import { View, Text } from "./Themed";
import { TextInput } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import {
  collection,
  query,
  where,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { useUser } from "../app/context/UserContext";

export default function Search() {
  // the user we're searching
  const [inputUser, setInputUser] = useState("");
  const { user, setUser } = useUser();
  const [err, setErr] = useState(false);
  const db = getFirestore();

  const handleSearch = async () => {
    const q = query(collection(db, "users"), where("name", "==", inputUser));

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <View>
      <View>
        <TextInput
          placeholder="Search"
          onChangeText={setInputUser}
          value={inputUser}
          onSubmitEditing={handleSearch}
        />
      </View>
      {err && <Text>User not found!</Text>}
      {curUser && (
        <TouchableOpacity onPress={handleSelect}>
          {/* <Image source={{ uri: user.photoURL }} /> */}
          <View>
            <Text>{curUser.name}</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}
