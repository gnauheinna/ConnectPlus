import React, { useState, useEffect, useContext } from "react";
import { ScrollView, StyleSheet, FlatList, Image } from "react-native";
import { Text, View } from "../components/Themed";
import { getFirestore, doc, updateDoc, getDoc } from "firebase/firestore";
import { FontAwesome5, Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import IndividualPost from "../components/individualPost";
import { useRouter } from "expo-router";
import { PostIdContext, PostIdProvider } from "./context/PostIDContext";
import { Post, usePostContext, PostProvider } from "./context/postContext";

export default function ChatBox() {

  const router = useRouter();

  return (
    <View style={styles.outermostContainer}>
      {/*  Back Button */}
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => {
          router.push("/message");
        }}
      >
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.mainContainer}>
        <Text style={styles.welcomeMessage}>Get to know your fellow First-Gen colleges, be the first to say hi!</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outermostContainer: {
    flex: 1,
  },
  commentTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 20,
  },
  screen: {
    flex: 1,
    backgroundColor: "white",
  },
  mainContainer: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  backBtn: {
    marginTop: 40,
    marginBottom: 40,
    padding: 5,
    borderRadius: 20,
    width: 80,
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    marginLeft: 40,
  },
  backText: {
    fontSize: 18,
    color: "#45384f",
    fontWeight: "300",
  },
  welcomeMessage:{
    color: "#B7B7B7",
    justifyContent: "center",
    marginLeft: 60,
    marginRight: 60,
    textAlign: "center",
    lineHeight: 20,
  },
});
