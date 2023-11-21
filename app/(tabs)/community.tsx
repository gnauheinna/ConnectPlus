import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  TextInput,
  FlatList,
  ScrollView,
  Image,
  ImageBackground,
} from "react-native";
import { Text, View } from "../../components/Themed";
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
import IndividualPost from "../../components/individualPost";
import { useRouter } from "expo-router";
import { initializeApp, getApps } from "firebase/app";
import { firebaseConfig } from "../../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useUser } from "../context/UserContext";
import postQuestions from "../post";
import { Post, PostProvider, usePostContext } from "../context/postContext";

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
  // Set the initially selected tag to be All
  const [selectedTag, setSelectedTag] = useState("All");
  const [selectedAll, setSelectedAll] = useState(true);

  function directToPost() {
    router.push("/post");
  }

  useEffect(() => {
    // Define the fetchData function here to use the state and props
    const loadPosts = async () => {
      // Check if the new posts are different from the old ones
      if (JSON.stringify(allPosts) !== JSON.stringify(posts)) {
        setAllPosts(posts);
      }
    };
    console.log("here are the posts");
    console.log(posts);
    // Call the fetchData function when the component mounts
    loadPosts();
  }, [posts]);

  const filteredPosts = allPosts.filter(
    (post) => post.tag === selectedTag || selectedTag === "All"
  );

  return (
    <PostProvider>
      <View style={styles.outermostContainer}>
      <ImageBackground
          source={require("../../assets/images/gradient/whiteGradientAskNShare.png")}
          resizeMode="cover"
          style={styles.gradientBackground}
        >
          <View style={styles.topContainer}>
            {/* Display the horizontal sub-navigation bar on top of the posts */}
            <View style={styles.bigTitleContainer}>
              <View style={styles.titleContainer}>
                <Text style={styles.askAndShareTitle}>Ask & Share</Text>
              </View>
              <TouchableOpacity>
              <Image source={require("../../assets/images/icons/notification.png")} style={styles.notificationIcon}/>
              </TouchableOpacity>
            </View>
            <View style={styles.horizontalNavOuttermostContainer}>
              <View style={styles.horizontalSubNavMainContainer}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <TouchableOpacity
                    style={
                      selectedAll
                        ? styles.horizontalSubNavSelected
                        : styles.horizontalSubNav
                    }
                    onPress={() => {
                      setSelectedTag("All");
                      setSelectedAll(true);
                    }}
                  >
                    <Text>All</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={
                      selectedTag === "Financial"
                        ? styles.horizontalSubNavSelected
                        : styles.horizontalSubNav
                    }
                    onPress={() => {
                      setSelectedTag("Financial");
                      setSelectedAll(false);
                    }}
                  >
                    <Text>Financial</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={
                      selectedTag === "Academic"
                        ? styles.horizontalSubNavSelected
                        : styles.horizontalSubNav
                    }
                    onPress={() => {
                      setSelectedTag("Academic");
                      setSelectedAll(false);
                    }}
                  >
                    <Text>Academic</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={
                      selectedTag === "Student Life"
                        ? styles.horizontalSubNavSelected
                        : styles.horizontalSubNav
                    }
                    onPress={() => {
                      setSelectedTag("Student Life");
                      setSelectedAll(false);
                    }}
                  >
                    <Text>Student Life</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={
                      selectedTag === "Career"
                        ? styles.horizontalSubNavSelected
                        : styles.horizontalSubNav
                    }
                    onPress={() => {
                      setSelectedTag("Career");
                      setSelectedAll(false);
                    }}
                  >
                    <Text>Career</Text>
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </View>
        </View>
        </ImageBackground>
        {/* render the FlatList directly*/}
        <View style={styles.container}>
          <View style={styles.mainContainer}>
            <FlatList
              data={filteredPosts}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View style={{ margin: 10 , backgroundColor: "transparent"}}>
                  <IndividualPost postId={item.postID} />
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
    </PostProvider>
  );
}

const styles = StyleSheet.create({
  outermostContainer: {
    flex: 1,
    backgroundColor: "#F9F6FF",
  },
  mainContainer: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "#F9F6FF",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    marginTop: 40,
  },
  topContainer: {
    paddingTop: 50,
    backgroundColor: "transparent",
    marginLeft: 20,
    marginRight: 20,
  },
  gradientBackground: {
    width: "100%",
    height: 130,
    zIndex: 1,
  },
  bigTitleContainer: {
    backgroundColor: "transparent",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  titleContainer: {
    backgroundColor: "transparent",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  askAndShareTitle: {
    fontSize: 42,
    color: "#453B4F",
    fontWeight: "bold",
  },
  notificationIcon: {
    width: 32,
    height: 32,
    resizeMode: "contain",
  },
  horizontalNavOuttermostContainer: {
    backgroundColor: "transparent",
  },
  horizontalSubNavMainContainer: {
    position: "sticky",
    top: 0,
    zIndex: 1,
    backgroundColor: "transparent",
  },
  horizontalSubNav: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 30,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 10,
    marginTop: 10,
    marginRight: 10,
    alignItems: "center",
  },
  horizontalSubNavSelected: {
    borderWidth: 0,
    borderRadius: 30,
    backgroundColor: "#FFD465",
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 10,
    marginTop: 10,
    marginRight: 10,
    alignItems: "center",
  },
  postContainer: {
    backgroundColor: "#F9F6FF",
  },
  verticalLine: {
    width: 1.5,
    height: 33,
    backgroundColor: "#9286B1",
    marginRight: 8,
    marginLeft: 8,
  },
  iconsOnPosts: {
    flexDirection: "row",
    justifyContent: "space-between",
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
    backgroundColor: "#3A3340",
    padding: 10,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  postBtnText: {
    color: "white",
    fontSize: 32,
  },
});
