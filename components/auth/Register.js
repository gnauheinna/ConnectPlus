import React, { Component } from "react";
import { View, Button, TextInput } from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp, getApps, firebase } from "firebase/app";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { firebaseApp, firebaseConfig } from "../../firebase";

initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(firebaseApp);

export default class RegisterScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      name: "",
    };
    this.onSignUp = this.onSignUp.bind(this);
  }

  onSignUp() {
    const auth = getAuth();
    const { email, password, name } = this.state;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // Add user data to Firestore
        collection(firestore, "users").doc(db.auth().currentUser.uid).set({
          name,
          email,
        });
        console
          .log(userCredential)
          .then(() => {
            // Successfully signed up and added user data
            console.log("User signed up and data added to Firestore.");
          })
          .catch((error) => {
            console.error("Error adding user data to Firestore:", error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error signing up:", errorCode, errorMessage);
      });
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder="name"
          onChangeText={(name) => this.setState({ name })}
        />
        <TextInput
          placeholder="email"
          onChangeText={(email) => this.setState({ email })}
        />
        <TextInput
          placeholder="password"
          secureTextEntry={true}
          onChangeText={(password) => this.setState({ password })}
        />
        <Button onPress={() => this.onSignUp()} title="Sign Up" />
      </View>
    );
  }
}
