import { View, Text, Button, TextField } from "react-native-ui-lib";
import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, TextInput, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, Color, Border } from "./GlobalStyles";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { getApps } from "firebase/app";
import {
  getFirestore,
  collection,
  serverTimestamp,
  addDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { CheckBox } from "react-native-elements";
import { AuthContext } from "./context/AuthContext";
import { useUser } from "./context/UserContext";
import { usePostContext } from "./context/postContext";

export default function Login() {
  const db = getFirestore();
  const { user, setUser } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);
  const [signupError, setSignupError] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userID, setUserID] = useState("");

  const provider = new GoogleAuthProvider();
  const router = useRouter();
  const auth = getAuth();
  const { setLoggedIn } = useContext(AuthContext);

  const handleNewUserGoogle = async () => {
    // get a instance of Firebase db

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
    router.push("/signup");
  }

  useEffect(() => {
    const updateUser = async () => {
      const usersCollection = collection(db, "users");
      if (userID) {
        const userInfo = await getDoc(doc(db, "users", userID));
        const userData = userInfo.data() as {
          name: string;
          email: string;
          major: string;
          year: string;
          userID: string;
          academic: boolean;
          career: boolean;
          avatar: string;
          financial: boolean;
          studentLife: boolean;
        };
        console.log("Index UserDATA: ", userData);
        setUser(userData);
      } else {
        console.error("User is not logged in");
      }
    };
    if (userID != "") {
      updateUser();
    }
  }, [userID]);

  useEffect(() => {
    console.log("USER: ", user);
  }, [user]);

  // useEffect(() => {
  //   if (user.name != "") {
  //     nextpage();
  //   }
  // }, [user]);

  function LogIn() {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log("logged In!");
        setLoginError(null);
        setUserID(user.uid);
        setIsLoggedIn(true);
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
          setIsLoggedIn(true);
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

  return (
    <View style={styles.outterMostContainer}>
      <View style={styles.container}>
        {/* ConnectPlus Logo */}
        <Image
          style={styles.connectPlusLogo}
          source={require("../assets/images/connectPlusLogo.png")}
        />

        {/* Welcome Message */}
        <View style={styles.welcomeMessageContainer}>
          <Text style={styles.welcomeMessage}>{`Welcome to Connect+ `}</Text>
        </View>

        {/* Email Input */}
        <View style={styles.emailInputContainer}>
          <Text style={styles.inputTitle}>Email</Text>
          <TextInput
            style={[styles.input]}
            value={email}
            onChangeText={(email) => setEmail(email)}
            // placeholder="example@gmail.com"
          ></TextInput>
        </View>

        {/* Password Input */}
         <View style={styles.passwordInputContainer}>
        <Text style={styles.inputTitle}>Password</Text>
        <TextInput
          style={[styles.input]}
          secureTextEntry
          value={password}
          onChangeText={(password) => setPassword(password)}
          // placeholder="123456"
        ></TextInput>
        </View>

        {/* Checkbox + Remember Me Text */}
        {/* <View style={styles.rememberMeContainer}>
          <CheckBox
            checked={false} // Set the initial checked state here
            onPress={() => {}}
            containerStyle={styles.checkboxContainer}
          />
          <Text style={[styles.rememberMeText]}>Remember me</Text>
        </View> */}

        {/* Sign In Button */}
        <View style={styles.signInBtn}>
          <TouchableOpacity onPress={LogIn}>
            <Text style={styles.createAccountText}>Sign In</Text>
          </TouchableOpacity>
        </View>

        {/* Divider for 3rd Party Login Options */}
        <View style={styles.orDivider}>
          <View style={styles.line1}></View>
          <Text style={styles.orText}>OR</Text>
          <View style={styles.line2}></View>
        </View>

        <View style={styles.thirdPartyLogIn}>
          {/* Google Login Button */}
          <View>
          <TouchableOpacity onPress={GoogleLogin}>
            <Image
              source={require("../assets/images/googleLogo.png")}
              style={[styles.thirdPartyIcon]}
            />
          </TouchableOpacity>
          </View>
          <View style={{ width: 50 }}></View>
          {/* Kerberos Login Button */}
          <View>
          <TouchableOpacity>
            <Image
              source={require("../assets/images/kerberosLogo.png")}
              style={[styles.thirdPartyIcon]}
            />
          </TouchableOpacity>
          </View>
        </View>

        {/* Switch to Sign Up Option */}
        <View style={styles.switchToSignUp}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity onPress={createUser}>
            <Text style={{ fontWeight: "bold"}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outterMostContainer: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    marginLeft: 40,
    marginRight: 40,
    backgroundColor: "white",
  },
  connectPlusLogo: {
    height: 100,
    width: 120,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
    resizeMode: "contain",
  },
  welcomeMessageContainer: {
    marginBottom: 24,
  },
  welcomeMessage: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#453b4f",
    textAlign: "center",
  },
  emailInputContainer: {
    marginBottom: 10,
  },
  passwordInputContainer: {
    marginBottom: 24,
  },
  inputTitle: {
    color: "black",
    fontSize: 14,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#828282",
    borderRadius: 5,
    padding: 10,
    width: "100%",
    marginVertical: 10,
    height: 40,
  },
  rememberMeContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  rememberMeText: {
    color: "#9b9b9b",
    fontSize: 14,
  },
  checkboxContainer: {
    marginRight: 0,
  },
  signInBtn: {
    backgroundColor: "#FFC940",
    marginBottom: 30,
    width: "100%",
    height: 48,
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignSelf: "center",
  },
  createAccountText: {
    fontSize: 18,
    alignSelf: "center",
  },
  orDivider: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  line1: {
    height: 1,
    width: 80,
    marginRight: 15,
    backgroundColor: "#8F8F8F",
  },
  line2: {
    height: 1,
    width: 80,
    marginLeft: 15,
    backgroundColor: "#8F8F8F",
  },
  orText: {
    color: "#8F8F8F",
    fontSize: 12,
  },
  thirdPartyLogIn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  thirdPartyIcon: {
    borderRadius: 50,
    backgroundColor: "#FEF7FF",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  switchToSignUp: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 18,
  },
});
