import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { useState, useEffect } from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, Padding, Border, FontSize } from "./ProfileStyles";
import { TouchableOpacity } from "react-native-gesture-handler";
import IndividualPost from "../../components/individualPost";
import { useUser } from "../context/UserContext";
import { Post, usePostContext } from "../context/postContext";
import MJPostCard from "../../components/MJPostCard";
import { useRouter } from "expo-router";
import { useSavedJourneyContext } from "../context/savedJourneyContext";

export default function App() {
  const router = useRouter();
  const { user, setUser } = useUser();
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [major, setMajor] = useState("");
  const [avatar, setAvatar] = useState("");
  const [academic, setAcademic] = useState(false);
  const [career, setCareer] = useState(false);
  const [financial, setFinancial] = useState(false);
  const [studentLife, setStudentLife] = useState(false);
  const { posts, loading } = usePostContext();
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [showLineForQuestions, setshowLineForQuestions] = useState(true);
  const [showLineForJourneys, setshowLineForJourneys] = useState(false);
  const { savedJourneys, setSavedJourneys } = useSavedJourneyContext();
  const [Mname, setMName] = useState("");
  const [img, setImg] = useState(Image);

  useEffect(() => {
    setName(user.name);
    setMajor(user.major);
    setYear(user.year);

    setAcademic(user.academic);
    setCareer(user.career);
    setFinancial(user.financial);
    setStudentLife(user.studentLife);
    console.log("user.avatar =");
    if (user.avatar === undefined) {
      setAvatar("avatar1");
    } else {
      setAvatar(user.avatar);
    }
  }, [user]);

  function mentorName(authorName: string) {
    switch (authorName) {
      case "Rachel Li":
        return "rachel";
        break;
      case "Neri Ajiatas Arreaga":
        return "neri";
        break;
      case "Shateva Long":
        return "shateva";
        break;
      case "Julia Tran":
        return "julia";

      default:
        return "rachel";

        break;
    }
  }
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

  const filteredPosts = allPosts.filter(
    (post) => user && post.userID == user.userID
  );

  const filteredJourneys = savedJourneys;

  const avatarImages: { [key: string]: any } = {
    avatar1: require("../../assets/images/avatars/avatar1.png"),
    avatar2: require("../../assets/images/avatars/avatar2.png"),
    avatar3: require("../../assets/images/avatars/avatar3.png"),
    avatar4: require("../../assets/images/avatars/avatar4.png"),
    avatar5: require("../../assets/images/avatars/avatar5.png"),
    avatar6: require("../../assets/images/avatars/avatar6.png"),
    avatar7: require("../../assets/images/avatars/avatar7.png"),
    avatar8: require("../../assets/images/avatars/avatar8.png"),
    avatar9: require("../../assets/images/avatars/avatar9.png"),
  };
  function directToMyJourneyPost(postName: string) {
    router.push(`/${postName}`);
  }

  return (
    <View style={styles.outterMostContainer}>
      {/* <View style={styles.container}> */}
      <View style={styles.profileInfoContainer}>
        {/* Display the user's profile picture */}
        <View style={styles.profileImg}>
          <Image source={avatarImages[avatar]} style={styles.profileImage} />
          {/* Display the icon for editing the profile picture */}
          {/* <TouchableOpacity style={styles.editBtn}>
            <MaterialIcons name="edit" size={20} color="#ffffff" />
          </TouchableOpacity> */}
        </View>

        {/* Display the user's full name and intro */}
        <View style={styles.infoContainer}>
          <Text style={[styles.userName]}>{name}</Text>
          <Text style={[styles.userIntro]}>
            {" "}
            Class of {year}, {major} Major
          </Text>
        </View>

        {/* Display the user's interests */}
        <View style={styles.interestsContainer}>
          {user && user.academic && (
            <View style={styles.individualInterest}>
              <Text style={styles.interestText}>Academic</Text>
            </View>
          )}
          {user && user.career && (
            <View style={styles.individualInterest}>
              <Text style={styles.interestText}>Career</Text>
            </View>
          )}
          {user && user.financial && (
            <View style={styles.individualInterest}>
              <Text style={styles.interestText}>Financial</Text>
            </View>
          )}
          {user && user.studentLife && (
            <View style={styles.individualInterest}>
              <Text style={styles.interestText}>Student Life</Text>
            </View>
          )}
        </View>
      </View>

      {/* Horizontal Bar */}
      <View style={styles.horizontalBarContainer}>
        {/* Press on the My Questions tab */}
        <TouchableOpacity
          onPress={() => {
            setshowLineForJourneys(false);
            setshowLineForQuestions(true);
          }}
        >
          <Text
            style={[
              styles.myQuestionsText,
              showLineForJourneys
                ? { color: "#85808C", fontFamily: "Stolzl Regular" }
                : {},
            ]}
          >
            My Questions
          </Text>
        </TouchableOpacity>
        {/* Display the line underneath the My Questions tab */}
        {showLineForQuestions && <View style={styles.lineForQuestions}></View>}
        {/* Press on the Saved Journeys tab */}
        <TouchableOpacity
          onPress={() => {
            setshowLineForJourneys(true);
            setshowLineForQuestions(false);
          }}
        >
          <Text
            style={[
              styles.savedJourneysText,
              showLineForQuestions
                ? { color: "#85808C", fontFamily: "Stolzl Regular" }
                : {},
            ]}
          >
            Saved Journeys
          </Text>
        </TouchableOpacity>
        {/* Display the line underneath the Saved Journeys tab */}
        {showLineForJourneys && <View style={styles.lineForJourneys}></View>}
      </View>
      {!showLineForJourneys ? (
        <ScrollView
          style={styles.questionsContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.mainQuestionsContainer}>
            <FlatList
              data={filteredPosts}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View style={styles.postShadowContainer}>
                  {/* Displays the post */}
                  <IndividualPost postId={item.postID} />
                  <View style={styles.bottomPartContainer}>
                    {/* Display the like icon and like number */}
                    <TouchableOpacity style={styles.postLikesContainer}>
                      <Image
                        style={styles.postLikesImg}
                        source={require("../../assets/images/icons/filledHeart.png")}
                      />
                      <Text style={styles.postLikesText}>35</Text>
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
        </ScrollView>
      ) : (
        <ScrollView
          style={styles.questionsContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.mainQuestionsContainer}>
            <FlatList
              data={filteredJourneys}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => {
                const imgSource =
                  item.authorName === "Rachel Li"
                    ? require("../../assets/images/featuredMyJourneyPosts/RachelLi.png")
                    : item.authorName === "Neri Ajiatas Arreaga"
                    ? require("../../assets/images/mentorMyJourneyPics/neri.png")
                    : item.authorName === "Shateva Long"
                    ? require("../../assets/images/mentorMyJourneyPics/shateva.png")
                    : item.authorName === "Julia Tran"
                    ? require("../../assets/images/mentorMyJourneyPics/julia.png")
                    : require("../../assets/images/featuredMyJourneyPosts/RachelLi.png");

                return (
                  <View style={styles.postShadowContainer}>
                    {/* Displays the post */}
                    <MJPostCard
                      onPress={() =>
                        directToMyJourneyPost(mentorName(item.authorName))
                      }
                      img={imgSource}
                      title={item.journeyTitle}
                      name={item.authorName}
                      year={item.Intro}
                    />
                  </View>
                );
              }}
            />
          </View>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  outterMostContainer: {
    flex: 1,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingTop: 60,
  },
  profileInfoContainer: {
    height: 300,
    width: "100%",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "white",
    paddingTop: 20,
  },
  profileImg: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 100,
    overflow: "hidden",
    justifyContent: "center",
  },
  userName: {
    fontFamily: "Stolzl Medium",
    fontSize: 24,
    color: "#000000",
    marginBottom: 8,
  },
  userIntro: {
    fontSize: 14,
    color: "#838383",
    marginBottom: 10,
    fontFamily: "Stolzl Regular",
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
  },
  interestsContainer: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 10,
  },
  individualInterest: {
    marginRight: 10,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#F7F4FA",
  },
  interestText: {
    color: "#724EAE",
    fontFamily: "Stolzl Regular",
  },
  horizontalBarContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderBottomColor: "#F0EAF6",
    borderBottomWidth: 1,
    paddingBottom: 20,
    backgroundColor: "white",
  },
  horizontalBarText: {
    fontWeight: "bold",
    marginHorizontal: 30,
    marginBottom: 0,
  },
  myQuestionsText: {
    fontWeight: "bold",
    marginHorizontal: 30,
    marginBottom: 0,
    fontFamily: "Stolzl Medium",
  },
  savedJourneysText: {
    fontWeight: "bold",
    marginHorizontal: 30,
    marginBottom: 0,
    fontFamily: "Stolzl Medium",
  },
  lineForQuestions: {
    backgroundColor: "#724EAE",
    height: 2,
    width: "50%",
    alignSelf: "flex-start",
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  lineForJourneys: {
    backgroundColor: "#724EAE",
    height: 2,
    width: "50%",
    alignSelf: "flex-end",
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  questionsContainer: {
    flex: 1,
    backgroundColor: "#F9F6FF",
  },
  mainQuestionsContainer: {
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 20,
    backgroundColor: "transparent",
  },
  verticalLine: {
    width: 1.5,
    height: 33,
    backgroundColor: "#9286B1",
    marginRight: 8,
    marginLeft: 8,
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
  bottomPartContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 24,
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
});
