import { View, Text, Button, TextField } from "react-native-ui-lib";
import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import { Link, useRouter } from "expo-router";
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
        nextpage();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setSignupError(errorMessage);
        console.log(errorCode + errorMessage);
      });
  }

  return (
    <View flex paddingH-25 paddingT-120>
      <Text yellow10 text20>
        Welcome
      </Text>
      <TextField
        style={[
          styles.input,
          { height: 25, borderWidth: 1, borderColor: "#ccc" },
        ]}
        placeholder="email"
        yellow10
        value={email}
        onChangeText={(email) => setEmail(email)}
      />
      <TextField
        style={[
          styles.input,
          { height: 25, borderWidth: 1, borderColor: "#ccc" },
        ]}
        placeholder="password"
        yellow10
        secureTextEntry
        value={password}
        onChangeText={(password) => setPassword(password)}
      />
      <View marginT-100 center>
        <Button
          text70
          white
          background-yellow10
          label="Login"
          onPress={LogIn}
        />
        <Button link text70 white label="Sign Up" marginT-20 onPress={SignUp} />
        <View marginT-100 center>
          <Button
            text70
            white
            background-yellow10
            label="Google Login"
            onPress={GoogleLogin}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  input: {
    borderWidth: 1,
    borderColor: "yellow",
    borderRadius: 5,
    padding: 10,
    width: "80%",
    marginVertical: 10,
  },
  postBtn: {
    backgroundColor: "black",
    borderRadius: 10,
    padding: 5,
  },
});
