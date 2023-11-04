<<<<<<< HEAD
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  FlatList,
} from "react-native";
=======
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
>>>>>>> aaed4a45704727c48cfbf25c4b906fbaa9ea7f42
import { useState, useEffect } from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, Padding, Border, FontSize } from "./ProfileStyles";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import CardContent from "react-native-paper/lib/typescript/components/Card/CardContent";
import { TouchableOpacity } from "react-native-gesture-handler";
import IndividualPost from "../../components/individualPost";
import { useUser } from "../context/UserContext";
import { Post, usePostContext } from "../context/postContext";

export default function App() {
  const {user, setUser } = useUser();
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [major, setMajor] = useState("");
  const [academic, setAcademic] = useState(false);
  const [career, setCareer] = useState(false);
  const [financial, setFinancial] = useState(false);
  const [studentLife, setStudentLife] = useState(false);
  const { posts, loading } = usePostContext();
  const [allPosts, setAllPosts] = useState<Post[]>([]);

  useEffect(() => {
    setName(user.name);
    setMajor(user.major);
    setYear(user.year);
    setAcademic(user.academic);
    setCareer(user.career);
    setFinancial(user.financial);
    setStudentLife(user.studentLife);
  }, [user]);

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

  const filteredPosts = allPosts.filter((post) => post.userID == user.userID);

  return (
    <View style={styles.container}>
      {/* <View style={styles.profileInfoContainer}> */}
      <LinearGradient
        style={styles.profileInfoContainer}
        locations={[0, 1]}
        colors={["#fff", "#ffe59a"]}
      >
        {/* Display the user's profile picture */}
        <View style={styles.profileImg}>
          <Image
            source={require("../../assets/images/avatars/avatar1.png")}
            style={styles.profileImage}
          />
          {/* Display the icon for editing the profile picture */}
          <TouchableOpacity style={styles.editBtn}>
            <MaterialIcons name="edit" size={20} color="#ffffff" />
          </TouchableOpacity>
        </View>

        {/* Display the user's full name and intro */}
        <View style={styles.infoContainer}>
          <Text style={[styles.userName]}>{name}</Text>
          <Text style={[styles.userIntro]}> Class of {year}, {major} Major</Text>
        </View>

        {/* Display the user's interests */}
        <TouchableOpacity style={styles.interestsContainer}>
          {user.academic && (
            <View style={styles.individualInterest}>
              <Text style={styles.interestText}>Academic</Text>
            </View>
          )}
          {user.career && (
            <View style={styles.individualInterest}>
              <Text style={styles.interestText}>Career</Text>
            </View>
          )}
          {user.financial && (
            <View style={styles.individualInterest}>
              <Text style={styles.interestText}>Financial</Text>
            </View>
          )}
          {user.studentLife && (
            <View style={styles.individualInterest}>
              <Text style={styles.interestText}>Student Life</Text>
            </View>
          )}
        </TouchableOpacity>
      </LinearGradient>

      {/* Display Posts and Mentions */}
      <View style={styles.horizontalBar}>
        <TouchableOpacity style={styles.postsContainer}>
          <Text>Posts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mentionsContainer}>
          <Text>Mentions</Text>
        </TouchableOpacity>
      </View>
      {/* Display only the Borderline */}
      <View style={styles.borderLine}></View>
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  profileInfoContainer: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignSelf: "center",
    paddingVertical: 40,
  },
  profileImg: {
    flexDirection: "row",
    justifyContent: "center",
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 100,
    overflow: "hidden",
    justifyContent: "center",
    marginHorizontal: -10,
  },
  editBtn: {
    backgroundColor: "#41444B",
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 30,
    height: 30,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  userName: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#000000",
    marginBottom: 10,
  },
  userIntro: {
    fontSize: 16,
    color: "#000000",
    marginBottom: 10,
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16,
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
  interestText: {
    color: "#3A3340",
    fontWeight: "500",
  },
  horizontalBar: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  postsContainer: {
    padding: 10,
    marginTop: -17,
    fontWeight: "bold",
  },
  borderLine: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    width: 150,
  },
  mentionsContainer: {
    padding: 10,
    marginTop: -17,
    fontWeight: "bold",
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
