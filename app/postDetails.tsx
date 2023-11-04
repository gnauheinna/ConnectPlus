import React, { useState, useEffect, useContext } from "react";
import { ScrollView, StyleSheet, FlatList, Image } from "react-native";
import { Text, View } from "../components/Themed";
import { getFirestore, doc, updateDoc, getDoc } from "firebase/firestore";
import { FontAwesome5, Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import IndividualPost from "../components/individualPost";
import IndividualComment from "../components/individualComment";
import { useRouter } from "expo-router";
import { PostIdContext, PostIdProvider } from "../app/context/PostIDContext";
import { Post, usePostContext, PostProvider } from "./context/postContext";

const PostDetails = () => {
  //use PostIDContext
  const { curPostID, setCurPostID } = useContext(PostIdContext);
  const { posts, loading } = usePostContext();
  const [allPosts, setAllPosts] = useState<Post[]>([]);

  // const router = useRouter();
  //   function backToCommunityPage() {
  //     router.push("/community/comm");
  //   }

  useEffect(() => {
    // Define the fetchData function here to use the state and props
    const loadPosts = async () => {
      setAllPosts(posts);
    };
    console.log("here are the posts");
    console.log(posts);
    // Call the fetchData function when the component mounts
    loadPosts();
  }, [posts]);

  const filteredPosts = allPosts.find((post) => post.postID == curPostID);
  console.log(curPostID);
  return (
    <PostProvider>
      <PostIdProvider>
        <View style={styles.outermostContainer}>
          {/*  Back Button */}
          <TouchableOpacity style={styles.backBtn}>
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
          <View style={styles.container}>
            <View style={styles.mainContainer}>
              <View>
                {/* Displays the post */}
                <View>
                  {/* Displays the post */}
                  <IndividualPost postId={curPostID} />
                  <View style={styles.iconsOnPosts}>
                    {/* Displays the upvote/downvote system */}
                    <TouchableOpacity style={styles.voteSystemContainer}>
                      <View style={styles.voteIconsContainer}>
                        <Image
                          style={styles.upvoteIcon}
                          source={require("../assets/images/upvote.png")}
                        />
                        <Text style={styles.voteNumber}>42</Text>
                        <View style={styles.verticalLine} />
                        <Image
                          style={styles.downvoteIcon}
                          source={require("../assets/images/downvote.png")}
                        />
                      </View>
                    </TouchableOpacity>
                    {/* Displays the the comment icon */}
                    <TouchableOpacity style={styles.iconWrapper}>
                      <Image
                        style={styles.icons}
                        source={require("../assets/images/comment.png")}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <ScrollView style={styles.screen}>
                <View>
                  <Text style={styles.commentTitle}>Comments (3)</Text>
                </View>
                <IndividualComment
                  username={"Sally Smith"}
                  intro={"Class of 2026, CS Major"}
                  content={"Thank you for sharing these tips ✨"}
                />
                <IndividualComment
                  username={"Ben Wilson"}
                  intro={"Class of 2027, Business Major"}
                  content={"I would love to connect with you 😊"}
                />
                <IndividualComment
                  username={"Lana Lei"}
                  intro={"Class of 2027, Data Science Major"}
                  content={"Very useful information. Thank you!"}
                />
              </ScrollView>
            </View>
          </View>
        </View>
      </PostIdProvider>
    </PostProvider>
  );
};

export default PostDetails;

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
  itemContainer: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 16,
    marginBottom: 20,
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
  },
  timestamp: {
    fontSize: 12,
    color: "gray",
  },
  content: {
    fontSize: 14,
    textAlign: "left",
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
});
