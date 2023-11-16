import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet, ScrollView, Image } from "react-native";
import MyJourneyPost from "../myjourneypost";
import { useRouter } from "expo-router";

export default function JourneyScreen() {
  const router = useRouter();
  function directToMyJourneyPost() {
    router.push("/myjourneypost");
  }
  return (
    <View style={styles.outermostContainer}>
      <View style={styles.container}>
        <View>
          <Text style={styles.journeyBigTitle}>My Journey</Text>
        </View>

        <View>
          <Text style={styles.journeySubTitle}>Featured</Text>
        </View>

        <View style={styles.featuredJourneysContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {/* 1st Featured Journey */}
            <TouchableOpacity style={styles.featuredJourney1} onPress={directToMyJourneyPost}>
              <Image
                style={styles.featuredJourney1}
                source={require("../../assets/images/gradient/gradient1.png")}
              />
              <View style={styles.overlay}>
                {/* Journey Info */}
                <View style={styles.overlayTextContainer}>
                  <Text style={styles.overlayText}>
                    Alternative Service Break{" "}
                  </Text>
                </View>
                {/* Mentor Info */}
                <View style={styles.userContainer}>
                  <View style={styles.userInfo}>
                    <Image
                      style={styles.profileImg}
                      source={require("../../assets/images/mentorProfilePics/RachelLi.png")}
                    />
                    <View style={styles.userNameAndIntro}>
                      <Text style={styles.userName}>Rachel Li</Text>
                      <Text style={styles.userIntro}>
                        Class of 2024, Data Science Major
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            {/* 2nd Featured Journey */}
            <TouchableOpacity style={styles.featuredJourney2} onPress={directToMyJourneyPost}>
              <Image
                style={styles.featuredJourney2}
                source={require("../../assets/images/gradient/gradient2.png")}
              />
              <View style={styles.overlay}>
                {/* Journey Info */}
                <View style={styles.overlayTextContainer}>
                  <Text style={styles.overlayText}>
                    FirstGen Journey- From Taiwan to Boston{" "}
                  </Text>
                </View>
                {/* Mentor Info */}
                <View style={styles.userContainer}>
                  <View style={styles.userInfo}>
                    <Image
                      style={styles.profileImg}
                      source={require("../../assets/images/mentorProfilePics/RachelLi.png")}
                    />
                    <View style={styles.userNameAndIntro}>
                      <Text style={styles.userName}>Annie Huang</Text>
                      <Text style={styles.userIntro}>
                        Class of 2025, CS Major
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View>
          <Text style={styles.journeySubTitle}>All</Text>
        </View>

        <View style={styles.allJourneysContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* 1st Journey */}
            <TouchableOpacity style={styles.individualJourney} onPress={directToMyJourneyPost}>
              <Image
                style={styles.miniGradient}
                source={require("../../assets/images/gradient/miniGradient1.png")}
              />
              <View style={styles.journeyTextContainer}>
                {/* Journey Title Info */}
                <View style={styles.journeyTextNonFeaturedContainer}>
                  <Text style={styles.journeyTitleNonFeatured}>
                    Lost in Art{" "}
                  </Text>
                </View>
                {/* Mentor Info */}
                <View style={styles.individualJourneyUserContainer}>
                  <View style={styles.userInfo}>
                    <Image
                      style={styles.profileImgNonFeatured}
                      source={require("../../assets/images/mentorProfilePics/RachelLi.png")}
                    />
                    <View style={styles.userNameAndIntro}>
                      <Text style={styles.userNameNonFeatured}>Gaby GM</Text>
                      <Text style={styles.userIntroNonFeatured}>
                        Class of 2025, Art Major
                      </Text>
                    </View>
                  </View>
                  <View style={styles.saveJourneyContainer}>
                    <Image
                      style={styles.saveJourney}
                      source={require("../../assets/images/icons/greySave.png")}
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            {/* 2nd Journey */}
            <TouchableOpacity style={styles.individualJourney} onPress={directToMyJourneyPost}>
              <Image
                style={styles.miniGradient}
                source={require("../../assets/images/gradient/miniGradient2.png")}
              />
              <View style={styles.journeyTextContainer}>
                {/* Journey Info */}
                <View style={styles.journeyTextNonFeaturedContainer}>
                  <Text style={styles.journeyTitleNonFeatured}>
                    Career in UIUX Design{" "}
                  </Text>
                </View>
                {/* Mentor Info */}
                <View style={styles.individualJourneyUserContainer}>
                  <View style={styles.userInfo}>
                    <Image
                      style={styles.profileImgNonFeatured}
                      source={require("../../assets/images/mentorProfilePics/RachelLi.png")}
                    />
                    <View style={styles.userNameAndIntro}>
                      <Text style={styles.userNameNonFeatured}>Kristi Li</Text>
                      <Text style={styles.userIntroNonFeatured}>
                        Class of 2023, CS Major
                      </Text>
                    </View>
                  </View>
                  <View style={styles.saveJourneyContainer}>
                    <Image
                      style={styles.saveJourney}
                      source={require("../../assets/images/icons/greySave.png")}
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            {/* 3rd Journey */}
            <TouchableOpacity style={styles.individualJourney} onPress={directToMyJourneyPost}>
              <Image
                style={styles.miniGradient}
                source={require("../../assets/images/gradient/miniGradient3.png")}
              />
              <View style={styles.journeyTextContainer}>
                {/* Journey Info */}
                <View style={styles.journeyTextNonFeaturedContainer}>
                  <Text style={styles.journeyTitleNonFeatured}>
                    As A CS Girlie{" "}
                  </Text>
                </View>
                {/* Mentor Info */}
                <View style={styles.individualJourneyUserContainer}>
                  <View style={styles.userInfo}>
                    <Image
                      style={styles.profileImgNonFeatured}
                      source={require("../../assets/images/mentorProfilePics/RachelLi.png")}
                    />
                    <View style={styles.userNameAndIntro}>
                      <Text style={styles.userNameNonFeatured}>
                        Annie Huang
                      </Text>
                      <Text style={styles.userIntroNonFeatured}>
                        Class of 2025, CS Major
                      </Text>
                    </View>
                  </View>
                  <View style={styles.saveJourneyContainer}>
                    <Image
                      style={styles.saveJourney}
                      source={require("../../assets/images/icons/greySave.png")}
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outermostContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  journeyBigTitle: {
    fontSize: 36,
    color: "#453B4F",
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
    justifyContent: "flex-start",
  },
  journeySubTitle: {
    fontSize: 22,
    color: "#B3AFB7",
    fontWeight: "500",
    marginBottom: 10,
    justifyContent: "flex-start",
  },
  featuredJourneysContainer: {
    backgroundColor: "white",
    marginBottom: 16,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "transparent",
    marginTop: 16,
  },
  overlayTextContainer: {
    position: "absolute",
    top: 0,
    paddingLeft: 16,
    backgroundColor: "transparent",
  },
  overlayText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 20,
  },
  featuredJourney1: {
    width: 280,
    height: 180,
    borderRadius: 15,
    marginRight: 14,
  },
  userContainer: {
    flexDirection: "row",
    marginBottom: 20,
    backgroundColor: "transparent",
    position: "absolute",
    bottom: 0,
    paddingLeft: 16,
  },
  profileImg: {
    width: 38,
    height: 38,
    marginRight: 10,
    backgroundColor: "transparent",
  },
  userInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "transparent",
  },
  userNameAndIntro: {
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  userName: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 5,
    color: "white",
  },
  userIntro: {
    fontSize: 10,
    color: "white",
  },
  featuredJourney2: {
    width: 280,
    height: 180,
    borderRadius: 15,
  },
  allJourneysContainer: {
    flex: 1,
  },
  individualJourney: {
    width: "100%",
    height: 120,
    borderWidth: 1,
    borderColor: "#CAC4D0",
    borderRadius: 15,
    flexDirection: "row",
    marginBottom: 16,
  },
  miniGradient: {
    height: "100%",
    width: 29,
  },
  journeyTextContainer: {
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  journeyTextNonFeaturedContainer: {
    top: 0,
    backgroundColor: "transparent",
    paddingTop: 16,
  },
  journeyTitleNonFeatured: {
    fontWeight: "bold",
    flexWrap: "wrap",
    fontSize: 16,
  },
  individualJourneyUserContainer: {
    paddingLeft: 16,
    paddingBottom: 16,
    left: 0,
    bottom: 0,
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
  },
  profileImgNonFeatured: {
    width: 36,
    height: 36,
    marginRight: 10,
    backgroundColor: "transparent",
  },
  userNameNonFeatured: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#000000",
  },
  userIntroNonFeatured: {
    fontSize: 10,
    color: "#000000",
  },
  saveJourneyContainer: {
    justifyContent: "flex-end",
    marginLeft: 56,
  },
  saveJourney: {
    width: 22,
    height: 22,
    resizeMode: "contain",
    alignSelf: "center",
    justifyContent: "flex-end",
  },
});
