import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";
import { TextInput } from "react-native-paper";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
import firebase from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  User,
} from "firebase/auth";
import { getApps } from "firebase/app";
import {
  getFirestore,
  doc,
  serverTimestamp,
  setDoc,
  collection,
  updateDoc,
} from "firebase/firestore";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [signupError, setSignupError] = useState(null);
  const [major, setMajor] = useState("");
  const [year, setYear] = useState("");
  const [userID, setUserID] = useState("");
  const [avatar, setAvatar] = useState("");
  const [user, setUser] = useState<User | null>(null);
  const [academic, setAcademic] = useState(false);
  const [financial, setFinancial] = useState(false);
  const [studentLife, setStudentLife] = useState(false);
  const [career, setCareer] = useState(false);

  const router = useRouter();
  const auth = getAuth();
  const curuser = auth.currentUser;

  // create new object
  const newUser = {
    email,
    password,
    timestamp: serverTimestamp(),
    name,
    major,
    year,
    academic,
    financial,
    career,
    studentLife,
    userID,
    avatar,
  };

  //triggers Firebase Auth to create new user
  function SignUp() {
    return new Promise<void>((resolve, reject) => {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("User:", user);
          console.log("User ID:", user.uid);
          setUserID(user.uid);
          //console.log("userID state after set:", userID);
          console.log("signed up!");
          setSignupError(null);
          resolve();
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setSignupError(errorMessage);
          console.log(errorCode + errorMessage);
          reject(error);
        });
    });
  }
  useEffect(() => {
    console.log("userID state after set:", userID);
  }, [userID]);
  // saves user data to firestore
  const handleNewUserEmail = async () => {
    // get a instance of Firebase db
    const db = getFirestore();
    const user = auth.currentUser;
    try {
      if (user) {
        const userID = user.uid;
        // create user on firestore
        const newUserRef = doc(db, "users", user.uid);
        await setDoc(newUserRef, newUser);

        // Update the document with the userID field
        await updateDoc(newUserRef, { userID });
        //create empty user chats on firestore
        await setDoc(doc(db, "userChats", user.uid), {});
      }
    } catch (error) {
      console.log(error);
    }

    setEmail("");
    setPassword("");
    setName("");
    setMajor("");
    setYear("");
    setUserID("");
    // Show the success message
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  const handleSignup = async () => {
    try {
      if (password === confirmPassword) {
        // Passwords match
        await SignUp();
        await handleNewUserEmail();
        router.push("/addavatar");
      } else {
        // Passwords don't match
        Alert.alert("Error", "Passwords do not match");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
   
      <View style={styles.container}>
        <Text style={[styles.title]}>Create Your Account</Text>
        <Text style={[styles.subTitle]}>
          Lorem ipsum dolor sit amet consectetur. Quisque mi metus aliquam sed
          neque.
        </Text>

        <View style={{ marginTop: 5 }}>
          <View style={[styles.inputContainer]}>
            <Image
              style={[styles.signUpIcons]}
              source={require("../assets/images/signUpIcons/name.png")}
            />
            <TextInput
              placeholder="Name"
              style={[styles.input]}
              value={name}
              onChangeText={(name) => setName(name)}
              placeholderTextColor="#A3A3A3"
            />
          </View>
        </View>

        <View style={{ marginTop: 5 }}>
          <View style={[styles.inputContainer]}>
            <Image
              style={[styles.signUpIcons]}
              source={require("../assets/images/signUpIcons/email.png")}
            />
            <TextInput
              placeholder="Email"
              style={[styles.input]}
              value={email}
              onChangeText={(email) => setEmail(email)}
              placeholderTextColor="#A3A3A3"
            />
          </View>
        </View>

        <View style={{ marginTop: 5 }}>
          <View style={[styles.inputContainer]}>
            <Image
              style={[styles.signUpIcons]}
              source={require("../assets/images/signUpIcons/password.png")}
            />
            <TextInput
              placeholder="Password"
              style={[styles.input]}
              value={password}
              onChangeText={(password) => setPassword(password)}
              placeholderTextColor="#A3A3A3"
            />
          </View>
        </View>

        <View style={{ marginTop: 5 }}>
          <View style={[styles.inputContainer]}>
            <Image
              style={[styles.signUpIcons]}
              source={require("../assets/images/signUpIcons/password.png")}
            />
            <TextInput
              placeholder="Confirm Password"
              style={[styles.input]}
              value={confirmPassword}
              onChangeText={(confirmPassword) =>
                setConfirmPassword(confirmPassword)
              }
              placeholderTextColor="#A3A3A3"
            />
          </View>
        </View>

        <View style={{ marginTop: 5 }}>
          <View style={[styles.inputContainer]}>
            <Image
              style={[styles.signUpIcons]}
              source={require("../assets/images/signUpIcons/major.png")}
            />
            <TextInput
              placeholder="Major"
              style={[styles.input]}
              value={major}
              onChangeText={(major) => setMajor(major)}
              placeholderTextColor="#A3A3A3"
            />
          </View>
        </View>

        <View style={{ marginTop: 5 }}>
          <View style={[styles.inputContainer]}>
            <Image
              style={[styles.signUpIcons]}
              source={require("../assets/images/signUpIcons/password.png")}
            />
            <TextInput
              placeholder="Year"
              style={[styles.input]}
              value={year}
              onChangeText={(year) => setYear(year)}
              placeholderTextColor="#A3A3A3"
            />
          </View>
        </View>

        <TouchableOpacity style={styles.nextButton} onPress={handleSignup}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 40,
    marginTop: 50,
  },
  inputContainer: {
    flexDirection: "row",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#453B4F",
  },
  subTitle: {
    fontSize: 16,
    marginBottom: 30,
    color: "#453B4F",
  },
  signUpIcons: {
    width: 26,
    height: 26,
    position: "absolute",
    resizeMode: "contain",
    alignSelf: "center",
  },
  input: {
    borderRadius: 5,
    paddingLeft: 30,
    width: "80%",
    marginVertical: 10,
    backgroundColor: "transparent",
    borderBottomWidth: 0.5,
    borderColor: "#E3E3E3",
    flex: 1,
    fontSize: 16,
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

export default SignupForm;
