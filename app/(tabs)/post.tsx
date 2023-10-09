import React, { useState } from "react";
import { Button, StyleSheet, TextInput } from "react-native";
import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { getApps } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

export default function PostScreen() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handlePost = async () => {
    // Get a reference to the Firebase database
    const db = getFirestore();
    const postsCollection = collection(db, "posts");
    // Create a new post object
    const newPost = {
      title,
      content,
      // timestamp
      // user ID
    };
    // Push the new post to the database
    await addDoc(postsCollection, newPost);
    // Clear the input fields
    setTitle('');
    setContent('');
    // Show the success message
    setShowSuccessMessage(true);
    // Hide the success message after a few seconds
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

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
          onPress={handlePost}
          color="black"
        />
      </View>

      <View>
        {showSuccessMessage && (
            <Text style={styles.successMessage}>Post successful!</Text>
        )}
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
    borderRadius: 10,
    padding: 5,
  },
  successMessage: {
    color: "green", 
    marginTop: 10,
    fontSize: 16,
  },
});
