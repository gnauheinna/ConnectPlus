import React, { useState, useEffect, useContext } from "react";
import { ScrollView, StyleSheet, FlatList, Image } from "react-native";
import { Text, View } from "../components/Themed";
import { getFirestore, doc, updateDoc, getDoc } from "firebase/firestore";
import { FontAwesome5, Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import IndividualPost from "../components/individualPost";
import IndividualComment from "../components/individualComment";
import { useRouter } from "expo-router";
import { PostIdContext, PostIdProvider } from "./context/PostIDContext";
import { Post, usePostContext } from "./context/postContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function PostDetails() {
  //use PostIDContext
  const { curPostID, setCurPostID } = useContext(PostIdContext);
  const { posts, loading } = usePostContext();
  const [allPosts, setAllPosts] = useState<Post[]>([]);

  const router = useRouter();

  useEffect(() => {
    // set curPostID from local storage when the page refreshes
    const setPostIDFromStorage = async () => {
      if (curPostID != "") {
        const storedPostID = await AsyncStorage.getItem("curPostID");
        if (storedPostID !== null) {
          console.log("this is storedChatID: ", storedPostID);
          setCurPostID(storedPostID);
        }
      } else {
        console.log("this is useEffect hook curPostID :", curPostID);
      }
    };
    setPostIDFromStorage();
  }, []);

  useEffect(() => {
    // Define the fetchData function here to use the state and props
    const loadPosts = async () => {
      setAllPosts(posts);
    };
    console.log("here are the posts");
    console.log(posts);
    // Call the fetchData function when the component mounts
    loadPosts();
  }, [posts, curPostID]);

  useEffect(() => {
    const filteredPosts = allPosts.find((post) => post.postID == curPostID);
    console.log(curPostID);
  }, [allPosts]);
  return (
    <View style={styles.outermostContainer}>
      <View style={styles.tempContainer}>
        {/*  Back Button */}
        <View style={styles.backBtnContainer}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => {
              router.push("/community");
            }}
          >
            <Image
              style={styles.backBtnImg}
              source={require("../assets/images/icons/blackBack.png")}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <View style={styles.mainContainer}>
            <View style={styles.postContainer}>
              {/* Displays the post */}
              <IndividualPost postId={curPostID} />
              <View style={styles.bottomPartContainer}>
                {/* Display the like icon and like number */}
                <TouchableOpacity style={styles.postLikesContainer}>
                  <Image
                    style={styles.postLikesImg}
                    source={require("../assets/images/icons/filledHeart.png")}
                  />
                  <Text style={styles.postLikesText}>35</Text>
                </TouchableOpacity>
                {/* Display the reply button */}
                <TouchableOpacity style={styles.replyPostContainer}>
                  <Image
                    style={styles.replyPostImg}
                    source={require("../assets/images/icons/reply.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {/* Divider line */}
            <View style={styles.dividerLine} />
            {/* Display the comments */}
            <View style={styles.repliesTitle}>
              <Text style={styles.replyTitle}>Replies</Text>
            </View>

            <ScrollView
              style={styles.commentsContainer}
              showsHorizontalScrollIndicator={false}
            >
              <IndividualComment
                username={"Ben Wilson"}
                intro={"Class of 2027, Business Major"}
                timestamp={"5h"}
                content={"I would love to connect with you."}
              />
              <IndividualComment
                username={"Stella Liam"}
                intro={"Class of 2026, Biology Major"}
                timestamp={"1d"}
                content={
                  "Who should I reach out to for more academic guidance?"
                }
              />
              <IndividualComment
                username={"Lana Lei"}
                intro={"Class of 2027, Data Science Major"}
                timestamp={"2d"}
                content={"Very useful information. Thank you!"}
              />
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outermostContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  tempContainer: {
    marginLeft: 20,
    marginRight: 20,
  },
  backBtnContainer: {
    marginTop: 40,
    marginBottom: 20,
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
  replyTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
    color: "#7F7F7F",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  postContainer: {
    marginLeft: 20,
    marginRight: 20,
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
  dividerLine: {
    borderBottomColor: "#EEEEEE",
    borderBottomWidth: 1,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  replyPostContainer: {
  },
  replyPostImg: {
    maxWidth: 60,
    maxHeight: 20,
    resizeMode: "contain",
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
  verticalLine: {
    width: 1.5,
    height: 33,
    backgroundColor: "#9286B1",
    marginRight: 8,
    marginLeft: 8,
  },
  repliesTitle: {
    marginRight: 20,
    marginLeft: 20,
  },
  commentsContainer: {
    // marginRight: 20,
    // marginLeft: 20,
  },
});
