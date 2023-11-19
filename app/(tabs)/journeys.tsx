import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet, ScrollView, Image } from "react-native";
import MyJourneyPost from "../myjourneypost";
import { useRouter } from "expo-router";
import React, { useState, useEffect } from "react";

export default function JourneyScreen() {
  const router = useRouter();
  function directToMyJourneyPost(postName: string) {
    router.push(`/myjourneypost?name=${postName}`);
  }

  const urlParams = new URLSearchParams(window.location.search);

  return (
    <View style={styles.outermostContainer}>
      <View style={styles.container}>
        <View style={styles.journeyBigTitleContainer}>
          <Text style={styles.journeyBigTitle}>My Journey</Text>
        </View>

        <View style={styles.journeySubTitleContainer}>
          <Text style={styles.journeySubTitle}>Featured</Text>
        </View>

        <View style={styles.featuredJourneysContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {/* 1st Featured Journey */}
            <TouchableOpacity
              onPress={() => directToMyJourneyPost("racheili")}
              style={styles.featuredJourney}
            >
              <Image
                style={styles.featuredJourneyImg}
                source={require("../../assets/images/featuredMyJourneyPosts/RachelLi.png")}
              />
            </TouchableOpacity>

            {/* 2nd Featured Journey */}
            <TouchableOpacity
              onPress={() => directToMyJourneyPost("racheili")}
              style={styles.featuredJourney}
            >
              <Image
                style={styles.featuredJourneyImg}
                source={require("../../assets/images/featuredMyJourneyPosts/RachelLi.png")}
              />
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={styles.journeySubTitleContainer}>
          <Text style={styles.journeySubTitle}>All</Text>
        </View>

        <View style={styles.allJourneysContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* 1st Journey */}
            <TouchableOpacity
              style={styles.individualJourney}
              onPress={() => directToMyJourneyPost("shatevalong")}
            >
              <Image
                style={styles.miniGradient}
                source={require("../../assets/images/gradient/miniGradient1.png")}
              />
              <View style={styles.journeyTextContainer}>
                {/* Journey Title Info */}
                <View style={styles.journeyTextNonFeaturedContainer}>
                  <Text style={styles.journeyTitleNonFeatured}>
                    I Got To Create My Own 4 Credit CS Course!{" "}
                  </Text>
                </View>
                {/* Mentor Info */}
                <View style={styles.individualJourneyUserContainer}>
                  <View style={styles.userInfo}>
                    <Image
                      style={styles.profileImgNonFeatured}
                      source={require("../../assets/images/mentorProfilePics/ShatevaLong.png")}
                    />
                    <View style={styles.userNameAndIntro}>
                      <Text style={styles.userNameNonFeatured}>
                        Shateva Long
                      </Text>
                      <Text style={styles.userIntroNonFeatured}>Alumni</Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            {/* 2nd Journey */}
            <TouchableOpacity
              style={styles.individualJourney}
              onPress={() => directToMyJourneyPost("racheili")}
            >
              <Image
                style={styles.miniGradient}
                source={require("../../assets/images/gradient/miniGradient2.png")}
              />
              <View style={styles.journeyTextContainer}>
                {/* Journey Info */}
                <View style={styles.journeyTextNonFeaturedContainer}>
                  <Text style={styles.journeyTitleNonFeatured}>
                    Finding Community{" "}
                  </Text>
                </View>
                {/* Mentor Info */}
                <View style={styles.individualJourneyUserContainer}>
                  <View style={styles.userInfo}>
                    <Image
                      style={styles.profileImgNonFeatured}
                      source={require("../../assets/images/mentorProfilePics/Neri.png")}
                    />
                    <View style={styles.userNameAndIntro}>
                      <Text style={styles.userNameNonFeatured}>
                        Neri Ajiatas Arreaga
                      </Text>
                      <Text style={styles.userIntroNonFeatured}>
                        Class of 2025, Data Science Major
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            {/* 3rd Journey */}
            <TouchableOpacity
              style={styles.individualJourney}
              onPress={() => directToMyJourneyPost("racheili")}
            >
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
                </View>
              </View>
            </TouchableOpacity>
            {/* 4th Journey */}
            <TouchableOpacity
              style={styles.individualJourney}
              onPress={() => directToMyJourneyPost("Rachel Li")}
            >
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
    // backgroundColor: "#FEF7FF",
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    // backgroundColor: "#FEF7FF",
    backgroundColor: "white",
  },
  journeyBigTitleContainer: {
    // backgroundColor: "#FEF7FF",
    backgroundColor: "white",
  },
  journeyBigTitle: {
    fontSize: 36,
    color: "#453B4F",
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
    justifyContent: "flex-start",
  },
  journeySubTitleContainer: {
    // backgroundColor: "#FEF7FF",
    backgroundColor: "white",
  },
  journeySubTitle: {
    fontSize: 22,
    color: "#B3AFB7",
    fontWeight: "500",
    marginBottom: 10,
    justifyContent: "flex-start",
  },
  featuredJourneysContainer: {
    marginBottom: 16,
    // backgroundColor: "#FEF7FF",
    backgroundColor: "white",
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
    color: "black",
    fontWeight: "bold",
    fontSize: 22,
    lineHeight: 25,
    marginTop: 10,
    width: 130,
  },
  featuredJourney: {
    borderRadius: 15,
    marginTop: 10,
    marginLeft: 3,
    marginBottom: 5,
    marginRight: 14,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
      borderRadius: 15,
    },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    // elevation: 5,
  },
  featuredJourneyImg: {
    width: 280,
    height: 180,
    borderRadius: 15,
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
    color: "#000000",
  },
  userIntro: {
    fontSize: 10,
    color: "#000000",
  },
  featuredJourney2: {
    width: 280,
    height: 180,
    borderRadius: 15,
  },
  allJourneysContainer: {
    flex: 1,
    // backgroundColor: "#FEF7FF",
    backgroundColor: "white",
  },
  individualJourney: {
    width: "99%",
    height: 120,
    backgroundColor: "white",
    borderRadius: 15,
    flexDirection: "row",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
      borderRadius: 15,
    },
    shadowOpacity: 0.09,
    shadowRadius: 10,
    // elevation: 5,
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
    width: 280,
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
