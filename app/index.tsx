import { View, Text, Button, TextField } from "react-native-ui-lib";
import React, { useState } from "react";
import { StyleSheet, TextInput, Pressable } from "react-native";
import { Link, useRouter } from "expo-router";

import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, Color, Border } from "./GlobalStyles";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { getApps } from "firebase/app";
import {
  getFirestore,
  collection,
  serverTimestamp,
  addDoc,
} from "firebase/firestore";

export default function IndexScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);
  const [signupError, setSignupError] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const provider = new GoogleAuthProvider();
  const router = useRouter();
  const auth = getAuth();

  const handleNewUserEmail = async () => {
    // get a instance of Firebase db
    const db = getFirestore();
    const userCollection = collection(db, "users");
    // create new object
    const newUser = {
      email,
      password,
      timestamp: serverTimestamp(),
      //name, major, year, interest
    };

    await addDoc(userCollection, newUser);
    setEmail("");
    setPassword("");
    // Show the success message
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  const handleNewUserGoogle = async () => {
    // get a instance of Firebase db
    const db = getFirestore();
    const userCollection = collection(db, "users");
    // create new object
    const newUser = {
      email,
      password,
      timestamp: serverTimestamp(),
      //name, major, year, interest
    };

    await addDoc(userCollection, newUser);
    setEmail("");
    setPassword("");
    // Show the success message
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  function nextpage() {
    router.push("/profile");
  }
  function createUser() {
    router.push("/onBoarding1");
  }

  function LogIn() {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log("logged In!");
        setLoginError(null);
        nextpage();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setLoginError(errorMessage);
        console.log(errorCode + errorMessage);
      });
  }

  function GoogleLogin() {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (credential != null) {
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          nextpage();
        }
        console.log("Signed In with Google");
        // check if user exists, if not direct to onBoarding 1
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  function SignUp() {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log("signed up!");
        setSignupError(null);
        handleNewUserEmail();
        createUser();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setSignupError(errorMessage);
        console.log(errorCode + errorMessage);
      });
  }

  return (
    <LinearGradient
      style={styles.iphone1415Pro6}
      locations={[0, 1]}
      colors={["#fff9e9", "#fff"]}
    >
      <Image
        style={[styles.iphone1415Pro6Child, styles.vectorIcon1Layout]}
        contentFit="cover"
        source={require("../assets/images/group-26086143.png")}
      />
      <Text style={styles.welcomeToConnect}>{`Welcome to Connect+ `}</Text>
      <View style={[styles.iphone1415Pro6Item, styles.iphone1415Layout]} />
      <View style={[styles.iphone1415Pro6Inner, styles.iphone1415Layout]} />
      <View style={[styles.rectangleView, styles.iphone1415Layout]} />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/images/ellipse-9.png")}
      />
      <Image
        style={[styles.iphone1415Pro6Child1, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/images/ellipse-10.png")}
      />
      <Pressable style={styles.createAccount} onPress={createUser}>
        <Text>Create Account</Text>
      </Pressable>
      <Text style={[styles.email, styles.emailTypo]}>Email</Text>
      <Text style={[styles.password, styles.emailTypo]}>Password</Text>
      <Text style={[styles.haveAnAccountContainer, styles.emailTypo]}>
        <Text style={styles.haveAnAccount}>Have an account?</Text>
        <Text style={styles.text}>{` `}</Text>
        <Text style={styles.text}>
          <Pressable onPress={LogIn}>
            <Text style={{ textDecorationLine: "underline" }}>Login In</Text>
          </Pressable>
        </Text>
      </Text>
      <Text style={[styles.rememberMe, styles.emailTypo]}>Remember me</Text>
      <View style={styles.iphone1415Pro6Child2} />
      <View style={styles.lineView} />
      <View style={[styles.iphone1415Pro6Child3, styles.vectorIconLayout]} />
      <Text style={styles.or}>or</Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/images/vector.png")}
      />
      <Pressable onPress={GoogleLogin}>
        <Image
          style={[styles.vectorIcon1, styles.vectorIcon1Layout]}
          source={require("../assets/images/vector1.png")}
        />
      </Pressable>
      <TextInput
        style={[styles.examplegmailcom, styles.text1Typo]}
        value={email}
        onChangeText={(email) => setEmail(email)}
        placeholder="example@gmail.com"
      ></TextInput>
      <TextInput
        style={[styles.text1, styles.text1Typo]}
        secureTextEntry
        value={password}
        onChangeText={(password) => setPassword(password)}
        placeholder="123456"
      ></TextInput>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  vectorIcon1Layout: {
    maxWidth: "100%",
    position: "absolute",
    maxHeight: "100%",
    overflow: "hidden",
  },
  iphone1415Layout: {
    height: 48,
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 75,
    width: 75,
    top: 679,
    position: "absolute",
  },
  emailTypo: {
    height: 19,
    fontSize: 16,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    position: "absolute",
  },
  vectorIconLayout: {
    width: 40,
    position: "absolute",
  },
  text1Typo: {
    color: Color.colorGray_200,
    left: 47,
    height: 19,
    width: 190,
    fontFamily: FontFamily.interRegular,
    fontSize: 16,
    textAlign: "left",
    position: "absolute",
  },
  iphone1415Pro6Child: {
    height: "11.85%",
    width: "36.68%",
    top: "8.1%",
    right: "26.93%",
    bottom: "80.05%",
    left: "36.39%",
    maxHeight: "100%",
    aspectRatio: 1,
  },
  welcomeToConnect: {
    marginLeft: -160.5,
    top: 202,
    fontSize: 28,
    fontWeight: "500",
    color: "#453b4f",
    textAlign: "center",
    fontFamily: FontFamily.stolzl,
    left: "50%",
    position: "absolute",
  },
  iphone1415Pro6Item: {
    top: 316,
    width: 327,
    borderWidth: 1,
    borderColor: Color.colorGray_100,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    height: 48,
    left: 36,
  },
  iphone1415Pro6Inner: {
    top: 541,
    left: 63,
    borderRadius: 73,
    backgroundColor: "#e6e6e6",
    width: 267,
  },
  rectangleView: {
    top: 409,
    width: 327,
    borderWidth: 1,
    borderColor: Color.colorGray_100,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    height: 48,
    left: 36,
  },
  ellipseIcon: {
    marginLeft: -109.5,
    left: "50%",
  },
  iphone1415Pro6Child1: {
    left: 231,
  },
  createAccount: {
    top: 551,
    left: 96,
    color: "#9a969f",
    textAlign: "left",
    fontSize: 24,
    fontFamily: FontFamily.stolzl,
    position: "absolute",
  },
  email: {
    top: 285,
    width: 190,
    height: 19,
    color: Color.colorBlack,
    fontSize: 16,
    left: 36,
  },
  password: {
    top: 382,
    width: 190,
    height: 19,
    color: Color.colorBlack,
    fontSize: 16,
    left: 36,
  },
  haveAnAccount: {
    color: Color.colorBlack,
  },
  text: {
    color: Color.colorMediumslateblue,
  },
  loginIn1: {
    textDecorationLine: "underline",
  },
  haveAnAccountContainer: {
    marginLeft: -106.5,
    top: 809,
    width: 219,
    fontSize: 16,
    height: 19,
    left: "50%",
  },
  rememberMe: {
    top: 474,
    left: 70,
    color: "#9b9b9b",
    width: 270,
    fontSize: 16,
    height: 19,
  },
  iphone1415Pro6Child2: {
    top: 471,
    borderRadius: 4,
    backgroundColor: "#d9d9d9",
    width: 22,
    height: 22,
    left: 36,
    position: "absolute",
  },
  lineView: {
    top: 639,
    borderColor: Color.colorBlack,
    borderTopWidth: 1,
    width: 299,
    height: 1,
    left: 47,
    borderStyle: "solid",
    position: "absolute",
  },
  iphone1415Pro6Child3: {
    left: 176,
    backgroundColor: "#fff",
    height: 40,
    top: 623,
  },
  or: {
    left: 164,
    width: 63,
    top: 623,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: 24,
    textAlign: "center",
    position: "absolute",
  },
  vectorIcon: {
    height: "4.81%",
    marginLeft: -91.5,
    top: "81.69%",
    bottom: "13.5%",
    left: "50%",
    maxHeight: "100%",
  },
  vectorIcon1: {
    height: "4.46%",
    width: "11.96%",
    top: "81.92%",
    right: "25.7%",
    bottom: "13.62%",
    left: "62.34%",
    maxHeight: "100%",
  },
  examplegmailcom: {
    top: 332,
  },
  text1: {
    top: 425,
  },
  iphone1415Pro6: {
    borderRadius: 32,
    flex: 1,
    width: "100%",
    height: 852,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});
