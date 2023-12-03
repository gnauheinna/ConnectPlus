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
  onSnapshot,
  Timestamp,
  doc,
  updateDoc,
  increment,
  addDoc,
  deleteDoc,
  query, 
  where,
  getDoc,
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
  const { posts, setPosts, loading, setLoading } = usePostContext();
  const router = useRouter();
  const db = getFirestore();
  const auth = getAuth();
  const { user, setUser } = useUser();
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [likePressed, setlikePressed] = useState(false);
  // Set the initially selected tag to be All
  const [selectedTag, setSelectedTag] = useState("All");
  const [selectedAll, setSelectedAll] = useState(true);

  function directToPost() {
    router.push("/post");
  }

  useEffect(() => {
    // Define the fetchData function here to use the state and props
    const processPosts = async () => {
      // Check if the new posts are different from the old ones
      if (JSON.stringify(allPosts) !== JSON.stringify(posts)) {
        setAllPosts(posts);
      }
    };
    console.log("here are the posts");
    console.log(posts);
    // Call the fetchData function when the component mounts
    processPosts();
  }, [posts]);

  const filteredPosts = allPosts.filter(
    (post) => post.tag === selectedTag || selectedTag === "All"
  );

  const [likedPostId, setLikedPostId] = useState<string | null>(null);
  const [likedPostLikesCount, setLikedPostLikesCount] = useState<number>(0);

  const handleLikePress = async (postId: string) => {
    console.log('Before pressing:', likePressed);
    const postRef = doc(db, "posts", postId);
    await updateDoc(postRef, {
      likesCount: increment(likePressed ? -1 : 1)
    });

    setLikedPostId(postId);

    // Get a reference to the "likes" subcollection of the post
    const likesCollection = collection(postRef, "likes");

    // Get the updated likesCount
    const postSnapshot = await getDoc(postRef);
    if (postSnapshot.exists()) {
      setLikedPostLikesCount(postSnapshot.data().likesCount);
    }

    // Query to check if the user has already liked the post
    const likesQuery = query(likesCollection, where("userId", "==", user.userID));
    const querySnapshot = await getDocs(likesQuery);

    // Add the current user's userId to the "likes" subcollection
    if (querySnapshot.empty && !likePressed) {
      await addDoc(likesCollection, { userId: user.userID, liked: true });
    } else {
      // If the user is unliking the post, remove their userId from the "likes" subcollection
      querySnapshot.forEach((doc) => {
        if (!likePressed) {
          updateDoc(doc.ref, { liked: true });
        } else {
          updateDoc(doc.ref, { liked: false });
        }
      });
    }
    setlikePressed(!likePressed);
  console.log('After pressing:', !likePressed);
}

  return (
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
              <Image
                source={require("../../assets/images/icons/notification.png")}
                style={styles.notificationIcon}
              />
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
              <View style={styles.postShadowContainer}>
                <IndividualPost postId={item.postID} />
                <View style={styles.bottomPartContainer}>
                  {/* Display the like icon and like number */}
                  <TouchableOpacity 
                    style={styles.postLikesContainer} 
                    onPress={() => handleLikePress(item.postID)}
                  >
                    <Image
                      style={styles.postLikesImg}
                      source={
                        likePressed && likedPostId === item.postID
                          ? require("../../assets/images/icons/filledHeart.png")
                          : require("../../assets/images/icons/unfilledHeart.png")
                      }
                    />
                    <Text style={styles.postLikesText}>
                      {likePressed && likedPostId === item.postID ? likedPostLikesCount : item.likesCount}
                    </Text>
                  </TouchableOpacity>
                  {/* Display the reply button */}
                  <TouchableOpacity style={styles.replyPostContainer}>
                    <Image
                      style={styles.replyPostImg}
                      source={require("../../assets/images/icons/reply.png")}
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
            <Image
              style={styles.postBtnImg}
              source={require("../../assets/images/icons/makeAPost.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outermostContainer: {
    flex: 1,
    backgroundColor: "#F9F6FF",
  },
  mainContainer: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#F9F6FF",
  },
  postShadowContainer: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#49006C",
    shadowOffset: {
      width: -2,
      height: 4,
    },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    marginTop: 80,
  },
  topContainer: {
    paddingTop: 80,
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
  bottomPartContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  postLikesContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  postLikesImg: {
    width: 20,
    height: 20,
    marginRight: 5,
    resizeMode: "contain",
  },
  postLikesText: {
    fontSize: 14,
  },
  replyPostContainer: {},
  replyPostImg: {
    maxWidth: 60,
    maxHeight: 20,
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
    padding: 10,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  postBtnImg: {
    width: 56,
    height: 56,
  },
});
