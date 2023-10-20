import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { TextInput } from 'react-native-paper';

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [major, setMajor] = useState("");
  const [year, setYear] = useState("");

  const handleSignup = () => {
    // Handle signup logic here
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.textAboveInput]}>First Name</Text>
      <TextInput
        style={[styles.input]}
        mode='outlined'
        value={name}
        onChangeText={(name) => setName(name)}
        underlineColor='transparent'
      />
      <Text style={[styles.textAboveInput]}>Last Name</Text>
      <TextInput
        style={styles.input}
        mode='outlined'
        value={email}
        onChangeText={(email) => setEmail(email)}
        // placeholder="example@gmail.com"
      ></TextInput>
      <Text style={[styles.textAboveInput]}>Password</Text>
      <TextInput
        style={styles.input}
        mode='outlined'
        secureTextEntry
        value={password}
        onChangeText={(password) => setPassword(password)}
        // placeholder="123456"
      ></TextInput>
      <Text style={[styles.textAboveInput]}>Confirm Password</Text>
      <TextInput
        style={styles.input}
        mode='outlined'
        secureTextEntry
        value={confirmPassword}
        onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
        // placeholder="123456"
      ></TextInput>
      <Text style={[styles.textAboveInput]}>Major</Text>
      <TextInput
        style={styles.input}
        mode='outlined'
        value={major}
        onChangeText={(major) => setMajor(major)}
        // placeholder="Computer Science"
      ></TextInput>
      <Text style={[styles.textAboveInput]}>Year</Text>
      <TextInput
        style={styles.input}
        mode='outlined'
        value={year}
        onChangeText={(year) => setYear(year)}
        // placeholder="Senior"
      ></TextInput>
      <View style={[styles.nextButton, { marginTop: 30 }]}>
        <Button title="Next" onPress={handleSignup} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "white",
  },
  textAboveInput: {
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "left",
    alignSelf: "flex-start",
    marginLeft: "10%",
  },
  input: {
    // borderWidth: 1,
    // borderColor: "#FFD465",
    borderRadius: 5,
    // padding: 10,
    width: "80%",
    marginVertical: 10,
    backgroundColor: "white",
  },
  nextButton: {
    backgroundColor: "#FFD465",
    borderRadius: 5,
  },
});

export default SignupForm;
