import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, TextInput, FlatList, ScrollView, Image } from "react-native";
import { Text, View } from "../../components/Themed";
import { getFirestore, collection, getDocs, Timestamp, doc, updateDoc } from "firebase/firestore";
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
  }, []);

  const filteredPosts = allPosts.filter(
    (post) => post.tag === selectedTag || selectedTag === "All"
  );

  return (
    <PostProvider>
      <View style={styles.outermostContainer}>
        {/* Display the horizontal sub-navigation bar on top of the posts */}
        <View>
          <Text style={styles.communityBigTitle}>Community</Text>
        </View>
        <View>
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
        {/* render the FlatList directly*/}
        <View style={styles.container}>
          <View style={styles.mainContainer}>
            <FlatList
              data={filteredPosts}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View>
                  {/* Displays the post */}
                  <IndividualPost postId={item.postID} />
                  <View style={styles.iconsOnPosts}>
                    {/* Displays the upvote/downvote system */}
                    <TouchableOpacity style={styles.voteSystemContainer}>
                      <View style={styles.voteIconsContainer}>
                        <Image
                          style={styles.upvoteIcon}
                          source={require("../../assets/images/upvote.png")}
                        />
                        <Text style={styles.voteNumber}>42</Text>
                        <View style={styles.verticalLine} />
                        <Image
                          style={styles.downvoteIcon}
                          source={require("../../assets/images/downvote.png")}
                        />
                      </View>
                    </TouchableOpacity>
                    {/* Displays the the comment icon */}
                    <TouchableOpacity style={styles.iconWrapper}>
                      <Image
                        style={styles.icons}
                        source={require("../../assets/images/comment.png")}
                      />
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
    </PostProvider>
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
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 15,
    marginTop: 15,
    marginRight: 10,
    alignItems: "center",
  },
  horizontalSubNavSelected: {
    borderWidth: 0,
    borderRadius: 30,
    marginBottom: 15,
    marginTop: 15,
    marginRight: 10,
    alignItems: "center",
    backgroundColor: "#FFD465",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  voteSystemContainer: {
    marginLeft: 16,
    borderWidth: 1.5,
    backgroundColor: "white",
    borderColor: "#9286B1",
    width: 120,
    height: 35,
    borderRadius: 20,
    resizeMode: "contain",
    paddingLeft: 15,
    paddingRight: 15,
  },
  voteIconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  voteNumber: {
    marginLeft: 8,
    fontWeight: "400",
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
  upvoteIcon: {
    width: 22,
    height: 22,
    resizeMode: "contain",
  },
  downvoteIcon: {
    width: 22,
    height: 22,
    resizeMode: "contain",
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
