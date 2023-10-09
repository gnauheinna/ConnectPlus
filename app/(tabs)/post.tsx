import React, { useState } from "react";
import { Button, StyleSheet, TextInput } from "react-native";
import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";

export default function PostScreen() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Post</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      <Text
        style={[
          styles.title,
          { color: "grey", fontWeight: "bold", fontSize: 12 },
        ]}
      >
        TITLE
      </Text>
      <TextInput
        style={[styles.input, { borderWidth: 1, borderColor: "#ccc" }]}
        placeholder="Enter Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />

      <Text
        style={[
          styles.title,
          { color: "grey", fontWeight: "bold", fontSize: 12 },
        ]}
      >
        DESCRIPTION
      </Text>
      <TextInput
        style={[
          styles.input,
          { height: 150, borderWidth: 1, borderColor: "#ccc" },
        ]}
        placeholder="Enter Content"
        value={content}
        onChangeText={(text) => setContent(text)}
      />

      <View style={[styles.postBtn]}>
        <Button
          title="Post"
          accessibilityLabel="increment"
          // onPress={onIncrement}
          color="white"
        />
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
    borderColor: "gray",
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
