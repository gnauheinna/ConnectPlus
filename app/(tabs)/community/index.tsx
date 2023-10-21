import React, { useState, useEffect } from "react";
import { StyleSheet, TextInput, FlatList, ScrollView } from "react-native";
import { Text, View } from "../../../components/Themed";
import {
  getFirestore,
  collection,
  getDocs,
  Timestamp,
  doc,
  updateDoc,
} from "firebase/firestore";
import { AuthErrorCodes } from "firebase/auth";
import { FontAwesome5, Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Avatar, Button, Card } from "react-native-paper";
import IndividualPost from "../../../components/individualPost";
import { useRouter } from "expo-router";
import { initializeApp, getApps } from "firebase/app";
import { firebaseConfig } from "../../../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

type Post = {
  postId: string;
  title: string;
  content: string;
  timestamp: Timestamp;
};

const router = useRouter();
const db = getFirestore();

function showPostDetails() {
  router.push("../../postDetails");
}

export default function CommunityScreen() {
  const [allPosts, setAllPosts] = useState<Post[]>([]);

  const auth = getAuth();

  if (getApps() == null) {
    const app = initializeApp(firebaseConfig);
  }

  // This function will fetch all of the posts in the database and print them out
  const fetchData = async () => {
    try {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          // User is signed in
          const uid = user.uid;
          const postsCollection = collection(db, "posts");
          const querySnapshot = await getDocs(postsCollection);
          const postData: any[] = [];

          querySnapshot.forEach((doc) => {
            postData.push(doc.data());
          });

          setAllPosts(postData);
        } else {
          // User is signed out
          console.log("User not logged in");
        }
      });
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  // Call the fetchData function when the component mounts and when the page is refreshed
  useEffect(() => {
    fetchData();
  }, []);

  return (
    // <ScrollView>
    <ScrollView>
      {/* Display the horizontal sub-navigation bar on top of the posts */}
      <View style={styles.horizontalSubNavContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.horizontalSubNavSelected}>
            <Text>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.horizontalSubNav}>
            <Text>Financial</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.horizontalSubNav}>
            <Text>Academic</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.horizontalSubNav}>
            <Text>Student Life</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.horizontalSubNav}>
            <Text>Career</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      {/* render the FlatList directly*/}
      <View style={styles.screen}>
        <FlatList
          data={allPosts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <IndividualPost
              title={item.title}
              content={item.content}
              timestamp={item.timestamp.toDate()}
              onPress={showPostDetails}
            />
          )}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "white",
  },
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: "#CAC4D0",
    borderRadius: 5,
    padding: 16,
    marginBottom: 20,
    flex: 1.5,
    backgroundColor: "#FEF7FF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 48,
    textAlign: "left",
  },
  titleTimestampContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
    backgroundColor: "#FEF7FF",
  },
  timestamp: {
    fontSize: 12,
    color: "gray",
  },
  content: {
    fontSize: 14,
    textAlign: "left",
  },
  iconWrapper: {
    marginHorizontal: 8,
  },
  horizontalSubNavContainer: {
    marginLeft: 20,
    position: "sticky",
    top: 0,
    zIndex: 1,
    backgroundColor: "white",
  },
  horizontalSubNav: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 30,
    padding: 10,
    marginBottom: 15,
    marginTop: 15,
    marginRight: 10,
    alignItems: "center",
  },
  horizontalSubNavSelected: {
    borderWidth: 0,
    borderRadius: 30,
    padding: 10,
    marginBottom: 15,
    marginTop: 15,
    marginRight: 10,
    alignItems: "center",
    backgroundColor: "#FFD465",
  },
});
