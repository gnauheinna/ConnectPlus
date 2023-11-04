import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet} from "react-native";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
import firebase from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, User, } from "firebase/auth";
import { getApps } from "firebase/app";
import { getFirestore, doc, serverTimestamp, setDoc, collection, updateDoc } from "firebase/firestore";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useUser } from "./context/UserContext";


const AddAvatar = () => {
  const [selectedAvatar, setSelectedAvatar] = useState(false);
  const { user, setUser } = useUser();
  const router = useRouter();
  function directToInterest() {
    router.push("/interest");
  }

  const avatarSelected = async (avatarName: string) => {
    if (!user.userID) {
      console.error("User or userID is undefined");
      return;
    }

    setSelectedAvatar(true)
    const db = getFirestore();
    const userRef = doc(db, "users", user.userID);
    try {
      await updateDoc(userRef, { avatar: avatarName,});
      console.log("Avatar added!");
    } catch (error) {
      console.error("Error adding avatar: ", error);
    }
  }

  return (
    <LinearGradient locations={[0, 1]} colors={["#fff9e9", "#fff"]}>
      <View style={styles.avatarsContainer}>
          <TouchableOpacity onPress={() => avatarSelected("avatar1")}>
            <Image style={[styles.avatar]} source={require("../assets/images/avatars/avatar1.png")}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => avatarSelected("avatar2")}>
            <Image style={[styles.avatar]} source={require("../assets/images/avatars/avatar2.png")}/>
          </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.nextButton} onPress={directToInterest}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  avatarsContainer: {
    flex: 1,
    marginTop: 50,
    flexDirection: "row",
  },
  avatar: {
    width: 80,
    height: 80,
    marginHorizontal: 16,
  },
  nextButton: {
    backgroundColor: "#FFC940",
    marginTop: 40,
    marginBottom: 40,
    width: 240,
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignSelf: "center",
  },
  nextButtonText: {
    fontSize: 18,
    alignSelf: "center",
  },
});

export default AddAvatar;
