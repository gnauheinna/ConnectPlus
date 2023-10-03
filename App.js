import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import { getApps, initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

/// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDc_bGbG2I1hQNnd5bLNtr4kEf9U9FwWjA",
  authDomain: "clonstagram-8fd50.firebaseapp.com",
  projectId: "clonstagram-8fd50",
  storageBucket: "clonstagram-8fd50.appspot.com",
  messagingSenderId: "66569549610",
  appId: "1:66569549610:web:3ec599ed369a0823c91053",
  measurementId: "G-TJS62ZVTLD",
};

/// if you try to initialize an app while firebase is already initialized, it will crash
if (getApps().length === 0) {
  initializeApp(firebaseConfig);
}

import LandingScreen from "./components/auth/Landing";
import RegisterScreen from "./components/auth/Register";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      loggedIn: false,
    };
  }

  componentDidMount() {
    const auth = getAuth();
    auth.onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        });
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        });
      }
    });
  }

  render() {
    const { loggedIn, loaded } = this.state;
    if (!loaded) {
      return (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text>Loading</Text>
        </View>
      );
    }
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          {/*tells navigator the first page go to when page is launched is landing */}
          <Stack.Screen
            name="Landing"
            component={LandingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
