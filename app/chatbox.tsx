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
      {/* <TouchableOpacity style={styles.backBtn} onPress={() => {router.push("/message"); }}>
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity> */}

      <View style={styles.container}>
        <View style={styles.recipientContainer}>
          <Text style={styles.recipient}>Rachel Li</Text>
        </View>

        <View style={styles.welcomeMessageContainer}>
          <Text style={styles.welcomeMessage}>Get to know your fellow First-Gen colleges, be the first to say hi!</Text>
        </View>

        <View style={styles.inputMessageContainer}>
          {/* Box to type your message */}
          <TouchableOpacity style={styles.inputMessageBox}>
            <Text style={styles.messageText}>Message...</Text>
          </TouchableOpacity>
          {/* Send Icon */}
          <TouchableOpacity>
            <Image style={styles.sendIcon} source={require("../assets/images/icons/sendMessage.png")} />
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outermostContainer: {
    flex: 1,
  },
  mainContainer: {
    marginLeft: 40,
    marginRight: 40,
    backgroundColor: "white",
  },
  container: {
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  backBtn: {
    marginTop: 40,
    marginBottom: 10,
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
  recipientContainer: {
    marginBottom: 120,

  },
  recipient: {
    color: "black",
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
  },
  welcomeMessageContainer: {
    marginBottom: 450,
  },
  welcomeMessage:{
    color: "#B7B7B7",
    fontSize: 16,
    justifyContent: "center",
    marginLeft: 60,
    marginRight: 60,
    textAlign: "center",
    lineHeight: 25,
  },
  inputMessageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
  },
  inputMessageBox: {
    borderRadius: 30,
    backgroundColor: "#EFEFEF",
    width: 240,
    marginRight: 20,
  },
  messageText: {
    color: "#9A969F",
    fontSize: 14,
    marginLeft: 20,
    marginRight: 70,
    marginTop: 15,
    marginBottom: 15,
  },
  sendIcon: {
    width: 42,
    height: 42,
  }
});
