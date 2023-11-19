import { Text, View } from "../../components/Themed";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { Image } from "expo-image";
import { StyleSheet, ScrollView, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontSize, Color, FontFamily } from "../GlobalStyles";
import { useRouter } from "expo-router";
import { useState, useEffect } from "react";
import Search from "../../components/Search";
import {
  collectionGroup,
  query,
  where,
  getDocs,
  getFirestore,
  serverTimestamp,
  DocumentData,
  getDoc,
  setDoc,
  doc,
  orderBy,
  updateDoc,
  QuerySnapshot,
  Timestamp,
} from "firebase/firestore";
import { useUser } from "../context/UserContext";
import { useCurrentChat } from "../context/currentChatContext";

type UserChat = {
  date: Timestamp;
  chatID: string;
  lastMessage: string;
  userInfo: {
    name: string;
    userID: string;
  };
};

export default function Message() {
  const [allMessage, setAllMessages] = useState<UserChat[] | null>(null);
  const { user, setUser } = useUser();
  const currentUserID = user.userID;
  const router = useRouter();
  const db = getFirestore();
  const { currentChatID, setCurrentChatID } = useCurrentChat();

  function directToChatBox(chatID: string) {
    // passes the state to CurrentChatContext
    setCurrentChatID(chatID);
    router.push("/chatbox");
  }

  useEffect(() => {
    console.log("useEffect!");
    const fetchUserChats = async () => {
      console.log("fetching userChats");
      try {
        console.log("trying");
        console.log("current user:  ", currentUserID);

        const userChatDocRef = doc(db, "userChats", currentUserID);
        console.log("chatdocref ", userChatDocRef);
        const userChatDocSnapshot = await getDoc(userChatDocRef);
        console.log("chatdocsnap ", userChatDocSnapshot);
        const userChatsData: UserChat[] = [];
        // we if the current userChat exists
        if (userChatDocSnapshot.exists()) {
          const userData = userChatDocSnapshot.data();
          if (userData) {
            // Iterate through the fields in the userChatDocSnapshot
            Object.keys(userData).forEach((key) => {
              const userChatData = userData[key] as UserChat;
              if (
                userChatData.date &&
                userChatData.lastMessage &&
                userChatData.userInfo
              ) {
                userChatsData.push(userChatData);
              }
            });

            // Sort userChatsData by descending date
            userChatsData.sort((a, b) => b.date.toMillis() - a.date.toMillis());
          }
        }
        setAllMessages(userChatsData);
      } catch (error) {
        console.error("Error fetching user chats: ", error);
      }
    };
    fetchUserChats();
  }, [user]);

  return (
    <View style={styles.outterContainer}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/images/background.png")}
          resizeMode="cover"
          style={styles.gradientBackground}
        >
          <View style={styles.topContainer}>
            {/* Includes the title 'Chat' and the write button */}
            <View style={styles.titleContainer}>
              <Text style={styles.chatBigTitle}>Chat</Text>
              <TouchableOpacity>
                <Image
                  style={styles.startAChatButton}
                  source={require("../../assets/images/edit.png")}
                />
              </TouchableOpacity>
            </View>
            {/* Search Bar */}
            <Search />
          </View>
        </ImageBackground>
      </View>
      {/* Scrollable Container */}
      <ScrollView
        style={styles.messagesContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.messagesMainContainer}>
          {/* Message Box */}
          <FlatList
            data={allMessage}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.individualMessageContainer}
                onPress={() => directToChatBox(item.chatID)}
              >
                <View style={styles.individualMessageMainContainer}>
                  <View style={styles.profilePicContainer}>
                    <Image
                      style={styles.profilePhoto}
                      source={require("../../assets/images/avatars/avatar1.png")}
                    />
                  </View>
                  <View style={styles.userInfoContainer}>
                    <Text style={styles.userName}>{item.userInfo.name}</Text>
                    <Text style={styles.lastMessage}>{item.lastMessage}</Text>
                  </View>
                  <View style={styles.timestampContainer}>
                    <Text style={styles.messageTimestamp}>
                      {item.date.toDate().toLocaleDateString()}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  outterContainer: {
    flex: 1,
  },
  container: {},
  topContainer: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "transparent",
    paddingTop: 50,
  },
  gradientBackground: {
    width: "100%",
    height: 200,
    zIndex: 1,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "transparent",
    marginBottom: 10,
  },
  chatBigTitle: {
    fontSize: 36,
    color: "#453B4F",
    fontWeight: "bold",
    alignItems: "center",
  },
  startAChatButton: {
    height: 24,
    width: 24,
    resizeMode: "contain",
  },
  searchBar: {
    height: 45,
    width: "100%",
    borderRadius: 30,
    backgroundColor: "#FFFFFF",
    opacity: 0.8,
    padding: 10,
    paddingLeft: 20,
    flexDirection: "row",
    justifyCenter: "center",
  },
  searchIcon: {
    width: 22,
    height: 22,
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  searchText: {
    color: "#777777",
    fontSize: 20,
    alignItems: "center",
  },
  messagesContainer: {
    zIndex: 2,
    borderRadius: 30,
    marginTop: -30,
    backgroundColor: "transparent",
    shadowColor: "rgba(0, 0, 0, 0.02)",
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 22,
    elevation: 22,
    shadowOpacity: 1,
  },
  messagesMainContainer: {
    borderRadius: 30,
    backgroundColor: "white",
  },
  individualMessageContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginLeft: 20,
    marginRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F1F1",
    borderRadius: 30,
  },
  individualMessageMainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userInfoContainer: {
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: 20,
    paddingBottom: 20,
    marginRight: 30,
    width: 200,
  },
  profilePicContainer: {
    justifyContent: "center",
    alignContent: "center",
  },
  profilePhoto: {
    width: 64,
    height: 64,
    marginRight: 20,
    alignContent: "center",
  },
  userName: {
    color: "black",
    textAlign: "left",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  lastMessage: {
    fontSize: 14,
    color: "grey",
  },
  messageTextContainer: {
    flex: 1,
    width: "95%",
    justifyContent: "flex-start",
  },
  timestampContainer: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  messageTimestamp: {
    color: "#777777",
    fontSize: 12,
    fontWeight: "600",
    position: "absolute",
  },
});
