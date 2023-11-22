import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  TextInput,
  FlatList,
  ScrollView,
  View,
  Text,
} from "react-native";
import {
  getFirestore,
  collection,
  getDocs,
  Timestamp,
  doc,
  getDoc,
} from "firebase/firestore";
import { FontAwesome5, Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Card, Avatar, IconButton } from "react-native-paper";
import { Image } from "react-native";
import { useRouter } from "expo-router";
import { useUser } from "../app/context/UserContext";
import { PostProvider, usePostContext } from "../app/context/postContext";
import { PostIdContext } from "../app/context/PostIDContext";

interface IndividualPostProps {
  postId: string;
}

const IndividualPost: React.FC<IndividualPostProps> = ({ postId }) => {
  const router = useRouter();
  function viewPostDetails() {
    setCurPostID(postId);
    router.push("/postdetails");
  }

  // User PostContext
  const { posts, loading } = usePostContext();
  const [tag, setTag] = useState("");
  const post = posts.find((post) => post.postID === postId);

  //use PostIDContext
  const { curPostID, setCurPostID } = useContext(PostIdContext);

  useEffect(() => {
    if (post) {
      setTag(post.tag);
    }
  }, [posts, postId]);

  const avatarImages: { [key: string]: any } = {
    avatar1: require("../assets/images/avatars/avatar1.png"),
    avatar2: require("../assets/images/avatars/avatar2.png"),
    avatar3: require("../assets/images/avatars/avatar3.png"),
    avatar4: require("../assets/images/avatars/avatar4.png"),
    avatar5: require("../assets/images/avatars/avatar5.png"),
    avatar6: require("../assets/images/avatars/avatar6.png"),
    avatar7: require("../assets/images/avatars/avatar7.png"),
    avatar8: require("../assets/images/avatars/avatar8.png"),
    avatar9: require("../assets/images/avatars/avatar9.png"),
  };

  return (
    <TouchableOpacity onPress={viewPostDetails}>
      {post && (
        <View style={{ ...styles.itemContainer }}>
          {/* Display the user's profile image, name, and intro on the top */}
          <View style={styles.userContainer}>
            <View style={styles.userInfo}>
              <Image
                style={styles.profileImg}
                source={avatarImages[post.avatar]}
              />
              <View style={styles.userNameAndIntro}>
                <Text style={styles.userName}>{post.userName}</Text>
                <Text style={styles.userIntro}>{post.major}</Text>
              </View>
            </View>
            {/* Display the tag that is associated with the post to the right of the user's information */}
            <View style={styles.tagContainer}>
              {post.tag && (
                // <View style={styles.individualInterest}>
                <View>
                  <Text style={styles.tagText}>{post.tag}</Text>
                </View>
              )}
            </View>
          </View>

          <View style={styles.titleTimestampContainer}>
            {/* Display the title of the post */}
            <Text style={styles.title}>{post.title}</Text>
          </View>

          {/* Display the content of the post */}
          <Text style={styles.content}>{post.content}</Text>

          {/* Display the timestamp of the post */}
          <Text style={styles.timestamp}>
            {post.timestamp &&
              new Date(post.timestamp.toDate()).toLocaleString("en-US", {
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
              })}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default IndividualPost;

const styles = StyleSheet.create({
  itemContainer: {
  },
  userContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  profileImg: {
    width: 48,
    height: 48,
    marginRight: 10,
  },
  userInfo: {
    flexDirection: "row",
  },
  userNameAndIntro: {
    justifyContent: "center",
  },
  userName: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
  },
  userIntro: {
    fontSize: 12,
    color: "#888888",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 48,
    textAlign: "left",
  },
  titleTimestampContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  timestamp: {
    fontSize: 12,
    color: "gray",
    marginBottom: 20,
  },
  content: {
    fontSize: 14,
    textAlign: "left",
    marginBottom: 10,
  },
  tagContainer: {
    backgroundColor: "#FFD465",
    alignItems: "center",
    borderRadius: 30,
    alignSelf: "flex-end",
    borderColor: "black",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 15,
    marginTop: 5,
  },
  tagText: {
    fontSize: 14,
    alignSelf: "center",
    fontWeight: "400",
  },
  interestsContainer: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "center",
  },
  individualInterest: {
    marginRight: 10,
    backgroundColor: "#F6F5F0",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  iconsOnPosts: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#E6DBF3",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    paddingHorizontal: 0,
  },
  iconWrapper: {
    marginHorizontal: 8,
    paddingTop: 10,
    paddingBottom: 10,
  },
  bottomPartContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  postLikesContainer: {
    flexDirection: "row",
    alignItems: 'center',
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
  replyPostContainer:{

  },
  replyPostImg:{
    maxWidth: 60,
    maxHeight: 20,
    resizeMode: "contain",
  },
});
