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
      // postId
      title,
      content,
      timestamp: serverTimestamp(),
      // upvotes: 0,
      // downvotes: 0,
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
    <View style={{backgroundColor: "white"}}>
      <View style={styles.mainContainer}>

        {/* Post Button */}
        <TouchableOpacity style={styles.postBtn} onPress={handlePost}>
            <Text style={styles.postText}>Post</Text>
        </TouchableOpacity>

        {/* Enter the title of the post */}
        <TextInput
          style={[styles.inputTitle]}
          placeholder="Enter Title"
          placeholderTextColor="#888888"
          value={title}
          onChangeText={(text) => setTitle(text)}
        />

        {/* Enter the content of the post */}
        <TextInput
          style={[styles.inputContent,]}
          placeholder="body text"
          placeholderTextColor="#888888"
          value={content}
          onChangeText={(text) => setContent(text)}
          multiline={true}
          numberOfLines={10} 
        />

        {/* Add a tag for this post: Financial, Academics, Student Life, or Career */}
        <TouchableOpacity style={styles.addTagBtn}>
            <Text style={styles.addTagText}>Add a Tag</Text>
        </TouchableOpacity>

        {/* Display a success message after clicking the Post button */}
        <View>
          {showSuccessMessage && (
              <Text style={styles.successMessage}>Post successful!</Text>)}
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  mainContainer: {
    flex: 1,
    justifyContent: "flex-start",
    marginLeft: 40,
    marginRight: 40,
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
  postBtn: {
    backgroundColor: "#FFC940",
    marginTop: 40,
    marginBottom: 40,
    paddingVertical: 10,
    paddingHorizontal: 20,
    padding: 5,
    borderRadius: 20,
    width: 80,
    justifyContent: "flex-end",
    alignSelf: "flex-end",
  },
  postText: {
    fontSize: 18,
    alignSelf: 'center',
  },
  addTagBtn:{
    borderColor: "#FFC940",
    borderWidth: 1.5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    padding: 5,
    borderRadius: 20,
    width: 130,
    justifyContent: "flex-end",
    alignSelf: "flex-end",
    marginBottom: 300,
  },
  addTagText: {
    fontSize: 18,
    color: "#FFC940",
    alignSelf: 'center',
    fontWeight: "500",
  },
  successMessage: {
    color: "green", 
    marginTop: 10,
    fontSize: 16,
  },
});
