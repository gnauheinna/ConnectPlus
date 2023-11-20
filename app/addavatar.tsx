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
import { useUser } from "./context/UserContext";

const AddAvatar = () => {
  const [selectedAvatar, setSelectedAvatar] = useState("");
  const auth = getAuth();
  const user = auth.currentUser;
  const userId = user?.uid

  const router = useRouter();

  const directToInterest = async (avatarName: string) => {
    if (!userId) {
      console.error("User or userID is undefined");
      return;
    }
    const db = getFirestore();
    const userRef = doc(db, "users", userId);
    try {
      await updateDoc(userRef, { avatar: avatarName,});
      console.log("Avatar added!");
    } catch (error) {
      console.error("Error adding avatar: ", error);
    }
    router.push("/interest");
  }

  const avatarSelected = async (avatarName: string) => {
    setSelectedAvatar(avatarName)
  }

  function directToSignUp() {
    router.push("/signup");
  }


  return (
   // <LinearGradient locations={[0, 1]} colors={["#fff9e9", "#fff"]} style={styles.container}>
   <View style={styles.outterMostContainer}>

    {/* Back Button */}
    <View style={styles.backBtnContainer}>
            <TouchableOpacity style={styles.backBtn} onPress={directToSignUp}>
              <Image style={styles.backBtnImg} source={require("../assets/images/icons/blackBack.png")}/>
            </TouchableOpacity>
    </View>
<View style={styles.container}>
       <View style={styles.topPortion}>
        <Text style={[styles.title]}>Add an Avatar</Text>
        <Text style={[styles.subTitle]}>
          Lorem ipsum dolor sit amet consectetur. Quisque mi metus aliquam sed
          neque.
        </Text>
      </View>

      <View style={styles.avatarsContainer}>
          <TouchableOpacity onPress={() => avatarSelected("avatar1")}>
              <Image style={[styles.avatar]} source={selectedAvatar === "avatar1" ? require("../assets/images/avatars/avatar1Selected.png") : require("../assets/images/avatars/avatar1.png")}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => avatarSelected("avatar2")}>
              <Image style={[styles.avatar]} source={selectedAvatar === "avatar2" ? require("../assets/images/avatars/avatar2Selected.png") : require("../assets/images/avatars/avatar2.png")}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => avatarSelected("avatar3")}>
              <Image style={[styles.avatar]} source={selectedAvatar === "avatar3" ? require("../assets/images/avatars/avatar3Selected.png") : require("../assets/images/avatars/avatar3.png")}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => avatarSelected("avatar4")}>
              <Image style={[styles.avatar]} source={selectedAvatar === "avatar4" ? require("../assets/images/avatars/avatar4Selected.png") : require("../assets/images/avatars/avatar4.png")}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => avatarSelected("avatar5")}>
              <Image style={[styles.avatar]} source={selectedAvatar === "avatar5" ? require("../assets/images/avatars/avatar5Selected.png") : require("../assets/images/avatars/avatar5.png")}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => avatarSelected("avatar6")}>
              <Image style={[styles.avatar]} source={selectedAvatar === "avatar6" ? require("../assets/images/avatars/avatar6Selected.png") : require("../assets/images/avatars/avatar6.png")}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => avatarSelected("avatar7")}>
              <Image style={[styles.avatar]} source={selectedAvatar === "avatar7" ? require("../assets/images/avatars/avatar7Selected.png") : require("../assets/images/avatars/avatar7.png")}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => avatarSelected("avatar8")}>
              <Image style={[styles.avatar]} source={selectedAvatar === "avatar8" ? require("../assets/images/avatars/avatar8Selected.png") : require("../assets/images/avatars/avatar8.png")}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => avatarSelected("avatar9")}>
              <Image style={[styles.avatar]} source={selectedAvatar === "avatar9" ? require("../assets/images/avatars/avatar9Selected.png") : require("../assets/images/avatars/avatar9.png")}/>
          </TouchableOpacity>
      </View>


      <TouchableOpacity style={[ styles.nextButton,{ backgroundColor: selectedAvatar === "" ? "#E6E6E6" : "#FFC940" } ]} onPress={() => directToInterest(selectedAvatar)}>
              <Text style={[ styles.nextButtonText,{ color: selectedAvatar === "" ? "#9A969F" : "#3A3340",  } ]}>Next</Text>
      </TouchableOpacity>
      </View>
      </View>
  );
};

const styles = StyleSheet.create({
  outterMostContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  backBtnContainer: {
    top: 20, 
    left: 20,
    alignSelf: "flex-start",
    justifyContent: 'center',
    marginBottom: 40,
  },
  backBtn: {
    padding: 5,
    resizeMode: "contain",
    justifyContent: 'center',
  },
  backBtnImg: {
    width: 20,
    height: 20,
  },
  topPortion:{
    padding: 20,
    paddingBottom: 20,
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#453B4F",
  },
  subTitle: {
    fontSize: 16,
    marginBottom: 20,
    color: "#453B4F",
  },
  avatarsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignSelf: "center",
  },
  avatar: {
    width: 90,
    height: 90,
    marginHorizontal: 16,
    marginVertical: 16,
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
