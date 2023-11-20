import React, { useState, useEffect, useContext } from "react";
import { ScrollView, StyleSheet, FlatList, Image } from "react-native";
import { Text, View } from "../components/Themed";
import {
  getFirestore,
  doc,
  updateDoc,
  getDoc,
  Timestamp,
} from "firebase/firestore";
import { FontAwesome5, Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import IndividualPost from "../components/individualPost";
import { useRouter } from "expo-router";
import { PostIdContext, PostIdProvider } from "./context/PostIDContext";
import { Post, usePostContext, PostProvider } from "./context/postContext";
import { useCurrentChat } from "./context/currentChatContext";
import { useUser } from "./context/UserContext";

type Chats = {
  chatID: string;
  date: Timestamp;
  senderID: string;
  text: string;
};
export default function ChatBox() {
  const db = getFirestore();
  const { user, setUser } = useUser();
  const currentUserID = user.userID;
  const { currentChatID, setCurrentChatID } = useCurrentChat();
  const router = useRouter();
  const [chats, setChats] = useState<Chats[]>([]);

  useEffect(() => {
    const fetchUserChat = async () => {
      console.log("curchatID: ", currentChatID);
      const userChatDocRef = doc(db, "chats", currentChatID);
      const userChatDocSnapshot = await getDoc(userChatDocRef);
      console.log("snapshot data: ", userChatDocSnapshot.data());
      const chatArray: Chats[] = [];
      const userChatData = userChatDocSnapshot.data();
      if (userChatData) {
        // Assuming userChatData.messages is an array of Chats
        setChats(userChatData.messages);
      }
    };
    if (currentChatID) {
      fetchUserChat();
    } else {
      console.error("currentChatID is not defined");
    }
  }, [currentChatID]);

  useEffect(() => {
    console.log("these are the chats:  ", chats);
    console.log(chats);
    console.log(user);
    console.log([1, 2, 3]);
  }, [chats]);

  useEffect(() => {
    console.log("this is user:   ", user);
  }, [user]);

  return (
    <View style={styles.outermostContainer}>
      <View style={styles.topPortionContainer}>
        {/*  Back Button */}
        <View style={styles.backBtnContainer}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => {
              router.push("/messages");
            }}
          >
            <Image
              style={styles.backBtnImg}
              source={require("../assets/images/icons/blackBack.png")}
            />
          </TouchableOpacity>
        </View>

        {/*  Recipient Information */}
        <View style={styles.recipientContainer}>
          <Image
            style={styles.recipientImg}
            source={require("../assets/images/avatars/avatar1.png")}
          />
          <Text style={styles.recipient}>Kristi Li</Text>
        </View>
      </View>

      <View style={styles.greyDividerLine}></View>

      <View style={styles.container}>
        {/* <View style={styles.welcomeMessageContainer}>
          <Text style={styles.welcomeMessage}>
            Get to know your fellow First-Gen colleges, be the first to say hi!
          </Text>
        </View> */}

        <FlatList
          data={chats}
          renderItem={({ item }) => (
            <View
              style={
                item.senderID == user.userID
                  ? styles.sentMessageContainer
                  : styles.receivedMessageContainer
              }
            >
              <Text style={styles.sentMessageText}>{item.text}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        {/* 
        <View style={styles.sentMessageContainer}>
          <Text style={styles.sentMessageText}>
            Hey! Do you wanna meet up today?
          </Text>
        </View>

        <View style={styles.receivedMessageContainer}>
          <Text style={styles.sentMessageText}>
            Sounds Good! Zoom or in-person?
          </Text>
        </View>

        <View style={styles.sentMessageContainer}>
          <Text style={styles.sentMessageText}>Zoom works!</Text>
        </View> */}
      </View>

      <View style={styles.inputMessageContainer}>
        {/* Box to type your message */}
        <TouchableOpacity style={styles.inputMessageBox}>
          <Text style={styles.messageText}>Message...</Text>
        </TouchableOpacity>
        {/* Send Icon */}
        <TouchableOpacity>
          <Image
            style={styles.sendIcon}
            source={require("../assets/images/icons/sendMessage.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outermostContainer: {
    flex: 1,
  },
  topPortionContainer: {
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: "space-between",
  },
  container: {
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "white",
  },
  backBtnContainer: {
    alignSelf: "flex-start",
    justifyContent: "center",
  },
  backBtn: {
    padding: 5,
    resizeMode: "contain",
    justifyContent: "center",
  },
  backBtnImg: {
    width: 20,
    height: 20,
  },
  recipientContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 40,
    paddingRight: 120,
  },
  recipient: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  recipientImg: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  greyDividerLine: {
    marginTop: 20,
    width: "100%",
    height: 1,
    backgroundColor: "#D9D9D9",
  },
  welcomeMessageContainer: {
    marginBottom: 450,
  },
  welcomeMessage: {
    color: "#B7B7B7",
    fontSize: 16,
    justifyContent: "center",
    marginLeft: 60,
    marginRight: 60,
    textAlign: "center",
    lineHeight: 25,
  },
  sentMessageContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 0,
    backgroundColor: "#FFD465",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 20,
    maxWidth: 250,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignSelf: "flex-end",
  },
  sentMessageText: {
    color: "#000000",
    fontSize: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  receivedMessageContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 20,
    backgroundColor: "#EAEAEA",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    maxWidth: 250,
    marginBottom: 20,
    flexDirection: "row",
    alignSelf: "flex-start",
  },
  inputMessageContainer: {
    flexDirection: "row",
    // justifyContent: "space-between",
    position: "absolute",
    bottom: 20,
    width: "100%",
    marginLeft: 20,
    marginRight: 20,
  },
  inputMessageBox: {
    borderRadius: 30,
    backgroundColor: "#EFEFEF",
    width: 280,
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
  },
});
