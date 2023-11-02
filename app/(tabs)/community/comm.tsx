import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  TextInput,
  FlatList,
  ScrollView,
  Image,
} from "react-native";
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
import { useUser } from "../../context/UserContext";
import postQuestions from "../../post";
import { Post, usePostContext } from "../../context/postContext";

export default function CommunityScreen() {
  if (getApps() == null) {
    const app = initializeApp(firebaseConfig);
  }

  const { posts, loading } = usePostContext();

  const router = useRouter();
  const db = getFirestore();
  const auth = getAuth();
  const { user, setUser } = useUser();
  const [allPosts, setAllPosts] = useState<Post[]>([]);

  function directToPost() {
    router.push("/post");
  }

  useEffect(() => {
    console.log("comm: user");
    console.log(user);
    //setUser1(user);
  }, [user]);

  useEffect(() => {
    // Define the fetchData function here to use the state and props
    const loadPosts = async () => {
      setAllPosts(posts);
    };
    // Call the fetchData function when the component mounts
    loadPosts();
  }, [posts]);

  return (
    <View style={styles.outermostContainer}>
      {/* Display the horizontal sub-navigation bar on top of the posts */}
      <View>
        <Text style={styles.communityBigTitle}>Community</Text>
      </View>
      <View>
        <View style={styles.horizontalSubNavMainContainer}>
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
      </View>
      {/* render the FlatList directly*/}
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <FlatList
            data={allPosts}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View>
                <IndividualPost
                  title={item.title}
                  content={item.content}
                  timestamp={item.timestamp.toDate()}
                  name={item.userName}
                  intro={"hi! I'm annie"}
                />
                {/* Displays the the comment icon and the save icon */}
                <View style={styles.iconsOnPosts}>
                  <TouchableOpacity style={styles.iconWrapper}>
                    <Image
                      style={styles.icons}
                      source={require("../../../assets/images/comment.png")}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.iconWrapper}>
                    <Feather name="bookmark" size={28} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>
        {/* Post button */}
        <View style={styles.postBtnContainer}>
          <TouchableOpacity style={styles.postBtn} onPress={directToPost}>
            <Text style={styles.postBtnText}>+</Text>
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
  communityBigTitle: {
    marginLeft: 20,
    marginRight: 20,
    fontSize: 42,
    color: "#453B4F",
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
  },
  horizontalSubNavMainContainer: {
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
  iconsOnPosts: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#E6DBF3",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    paddingHorizontal: 0,
    marginBottom: 20,
  },
  iconWrapper: {
    marginHorizontal: 8,
    paddingTop: 10,
    paddingBottom: 10,
  },
  icons: {
    width: 28,
    height: 28,
    resizeMode: "contain",
  },
  postBtnContainer: {
    position: "absolute",
    backgroundColor: "transparent",
    bottom: 20,
    right: 20,
  },
  postBtn: {
    width: 50,
    height: 50,
    backgroundColor: "#FFD465",
    padding: 10,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  postBtnText: {
    color: "white",
    fontSize: 34,
  },
});
