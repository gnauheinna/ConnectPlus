import React, { useState, useEffect, useContext } from "react";
import { Button, StyleSheet, TextInput } from "react-native";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { getApps } from "firebase/app";
import {
  getFirestore,
  collection,
  serverTimestamp,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRouter } from "expo-router";
import { useUser } from "./context/UserContext";

export default function postQuestions() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const { user, setUser } = useUser();
  const [userName, setUserName] = useState("");
  const [userID, setUserID] = useState("");
  // const router = useRouter();
  // function directToComm() {
  //   router.push("/community/comm");
  // }

  useEffect(() => {
    console.log("post user: ");
    console.log(user);
  }, [user]);

  const handlePost = async () => {
    // Get a reference to the Firebase database
    const db = getFirestore();
    const postsCollection = collection(db, "posts");
    // Create a new post object
    const newPost = {
      title,
      content,
      timestamp: serverTimestamp(),
      userName: user.name,
      userID: user.userID,
    };

    setUserName(user.name);
    setUserID(user.userID);
    // Push the new post to the database
    const newPostRef = await addDoc(postsCollection, newPost);
    const postID = newPostRef.id;
    // Update the document with the postID field
    await updateDoc(newPostRef, { postID });
    // Clear the input fields
    setTitle("");
    setContent("");
    setUserName("");
    setUserID("");
    // Show the success message
    setShowSuccessMessage(true);
    // Hide the success message after a few seconds
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
    // Direct back to the community page
    // directToComm();
  };

  return (
    <View style={{ backgroundColor: "white" }}>
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
          style={[styles.inputContent]}
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
    width: "100%",
    fontSize: 18,
    outlineColor: "white",
    marginTop: 10,
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
    alignSelf: "center",
  },
  addTagBtn: {
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
    marginTop: 50,
  },
  addTagText: {
    fontSize: 18,
    color: "#FFC940",
    alignSelf: "center",
    fontWeight: "500",
  },
  successMessage: {
    color: "green",
    marginTop: 10,
    fontSize: 16,
  },
});
