import React, { useState } from "react";
import { Button, StyleSheet, TextInput } from "react-native";
import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { getApps } from "firebase/app";
import { getFirestore, collection, serverTimestamp, addDoc } from "firebase/firestore";
import { TouchableOpacity } from "react-native-gesture-handler";

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
      timestamp: serverTimestamp(),
      upvotes: 0,
      downvotes: 0,
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
      <TextInput
        style={[styles.inputTitle]}
        placeholder="Enter Title"
        placeholderTextColor="#888888"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />

      <TextInput
        style={[styles.inputContent,]}
        placeholder="body text"
        placeholderTextColor="#888888"
        value={content}
        onChangeText={(text) => setContent(text)}
        multiline={true}
        numberOfLines={10} 
      />

<View style={[styles.button]}>
        <Button
          title="Post"
          // accessibilityLabel="increment"
          onPress={handlePost}
          color="#FFC940"
        />
    </View>


{/* <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity> */}

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
  inputTitle: {
    padding: 10,
    width: "80%",
    marginVertical: 10,
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: -10,
    outlineColor: "white",
  },
  inputContent: {
    padding: 10,
    width: "80%",
    fontSize: 24,
    outlineColor: "white",
  },
  button:{
    backgroundColor: "#FFC940",
    padding: 5,
    borderRadius: 5,
    width: 80,
    justifyContent: "flex-end",
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  successMessage: {
    color: "green", 
    marginTop: 10,
    fontSize: 16,
  },
});
