import React, { useState, useEffect, useContext } from "react";
import {
  ScrollView,
  StyleSheet,
  FlatList,
  Image,
  Modal,
  TextInput,
} from "react-native";
import { Text, View } from "../components/Themed";
import {
  getFirestore,
  doc,
  updateDoc,
  getDoc,
  arrayUnion,
  Timestamp,
  collection,
} from "firebase/firestore";
import { FontAwesome5, Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import IndividualPost from "../components/individualPost";
import IndividualComment from "../components/individualComment";
import { useRouter } from "expo-router";
import { useUser } from "./context/UserContext";
import { PostIdContext, PostIdProvider } from "./context/PostIDContext";
import { Post, usePostContext } from "./context/postContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type Comment = {
  commentID: string;
  date: Timestamp;
  userIntro: string;
  userID: string;
  userName: string;
  text: string;
};

export default function PostDetails() {
  const [commentarr, setCommentArr] = useState<Comment[]>([]);
  const { curPostID, setCurPostID } = useContext(PostIdContext);
  const { posts, loading } = usePostContext();
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [content, setContent] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const { user, setUser } = useUser();
  const db = getFirestore();
  const router = useRouter();
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const comment = async () => {
    const randomString = Math.random().toString(36).substring(7);
    await updateDoc(doc(db, "comments", curPostID), {
      comment: arrayUnion({
        commentID: randomString,
        text: content,
        userID: user.userID,
        userName: user.name,
        avatar: user.avatar,
        userIntro: "Class of " + user.year + ", " + user.major + " Major",
        date: Timestamp.now(),
      }),
    });
    console.log("current senderID: ", user.userID);
  };

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

  // useEffect hook to load comments
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const cmtdoc = await getDoc(doc(db, "comments", curPostID));
        console.log("comment snapshot data: ", cmtdoc.data());
        const commentData = cmtdoc.data();
        console.log("comment snapshot array: ", commentData?.commentArr);
        if (commentData && commentData.commentArr) {
          setCommentArr(commentData.commentArr);
        } else {
        }
      } catch (error) {
        console.error("Error fetching comments: ", error);
      }
    };
    fetchComments();
  }, []);

  useEffect(() => {
    console.log("comment array: ", commentarr);
  }, [commentarr]);

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
                <TouchableOpacity
                  style={styles.replyPostContainer}
                  onPress={openModal}
                >
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
            {/* Comment Modal */}
            <View>
              <Modal
                style={styles.modalContainer}
                visible={modalVisible}
                animationType="slide"
              >
                <View>
                  <Text>Comment:</Text>
                  <TextInput
                    style={[styles.inputContent]}
                    placeholder="Enter your comment here"
                    placeholderTextColor="#888888"
                    value={content}
                    onChangeText={(text) => setContent(text)}
                    multiline={true}
                    numberOfLines={10}
                  />
                  <TouchableOpacity
                    style={[
                      styles.postBtn,
                      {
                        backgroundColor: "#E6E6E6",
                      },
                    ]}
                    onPress={comment}
                  >
                    <Text style={[styles.postText, { color: "#3A3340" }]}>
                      comment
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={closeModal}>
                    <Text>Close Modal</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
            </View>

            <ScrollView
              style={styles.commentsContainer}
              showsHorizontalScrollIndicator={false}
            >
              <FlatList
                data={commentarr}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <IndividualComment
                    username={item.userName}
                    intro={item.userIntro}
                    timestamp={item.date.toString()}
                    content={item.text}
                  />
                )}
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
  replyPostContainer: {},
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
  modalContainer: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#49006C",
    shadowOffset: {
      width: -2,
      height: 4,
    },
  },
  inputContent: {
    padding: 10,
    width: "100%",
    fontSize: 18,
    outlineColor: "white",
    marginTop: 10,
  },
  postBtn: {
    backgroundColor: "#E2B8E0",
    marginTop: 40,
    marginBottom: 40,
    paddingVertical: 10,
    paddingHorizontal: 20,
    padding: 5,
    borderRadius: 20,
    width: 80,
    justifyContent: "flex-end",
    alignSelf: "flex-end",
  },
  postText: {
    fontSize: 18,
    alignSelf: "center",
    color: "#9A969F",
  },
});
