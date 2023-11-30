import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet, ScrollView, Image, ImageBackground } from "react-native";
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
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.outermostContainer}>
    {/* <ImageBackground
        source={require("../../assets/images/gradient/whiteGradientAskNShare.png")}
        resizeMode="cover"
        style={styles.gradientBackground}
      > */}
      <ImageBackground
        source={require("../../assets/images/gradient/whiteGradientAskNShare.png")}
        resizeMode="cover"
        style={styles.gradientBackground}
      >
      <View style={styles.journeyBigTitleContainer}>
          <Text style={styles.journeyBigTitle}>My Journey</Text>
      </View>
      </ImageBackground>
      <View style={styles.container}>
        <View style={styles.journeySubTitleContainer}>
          <Text style={styles.journeySubTitle}>Featured</Text>
        </View>

        <View style={styles.featuredJourneysContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {/* 1st Featured Journey */}
            <TouchableOpacity
              onPress={() => directToMyJourneyPost("rachelli")}
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
              {/* <View style={styles.mentorImgContainer}> */}
                <Image style={styles.mentorImg} source={require("../../assets/images/mentorMyJourneyPics/shateva.png")} />
              {/* </View> */}
            </TouchableOpacity>

            {/* 2nd Journey */}
            <TouchableOpacity
              style={styles.individualJourney}
              onPress={() => directToMyJourneyPost("shatevalong")}
            >
              {/* <View style={styles.mentorImgContainer}> */}
                <Image style={styles.mentorImg} source={require("../../assets/images/mentorMyJourneyPics/shateva.png")} />
              {/* </View> */}
            </TouchableOpacity>

            {/* 3rd Journey */}
            <TouchableOpacity
              style={styles.individualJourney}
              onPress={() => directToMyJourneyPost("shatevalong")}
            >
              {/* <View style={styles.mentorImgContainer}> */}
                <Image style={styles.mentorImg} source={require("../../assets/images/mentorMyJourneyPics/shateva.png")} />
              {/* </View> */}
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  outermostContainer: {
    flex: 1,
    backgroundColor: "#F9F6FF",
  },
  gradientBackground: {
    width: "100%",
    height: 150,
    zIndex: 1,
  },
  container: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#F9F6FF",
  },
  journeyBigTitleContainer: {
    marginTop: 60,
    backgroundColor: "transparent",
    marginLeft: 20,
    marginRight: 20,
    zIndex: 2,
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
    backgroundColor: "#F9F6FF",
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
    backgroundColor: "#F9F6FF",
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
      height: 1,
      borderRadius: 15,
    },
    shadowOpacity: 0.08,
    shadowRadius: 10,
  },
  featuredJourneyImg: {
    maxWidth: 300,
    maxHeight: 210,
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
  // profileImg: {
  //   width: 38,
  //   height: 38,
  //   marginRight: 10,
  //   backgroundColor: "transparent",
  // },
  // userInfo: {
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   backgroundColor: "transparent",
  // },
  // userNameAndIntro: {
  //   justifyContent: "center",
  //   backgroundColor: "transparent",
  // },
  // userName: {
  //   fontSize: 12,
  //   fontWeight: "bold",
  //   marginBottom: 5,
  //   color: "#000000",
  // },
  // userIntro: {
  //   fontSize: 10,
  //   color: "#000000",
  // },
  featuredJourney2: {
    width: 280,
    height: 180,
    borderRadius: 15,
  },
  allJourneysContainer: {
    flex: 1,
    backgroundColor: "#F9F6FF",
    marginTop: 10,
    justifyContent: "flex-start",
  },
  // individualJourney: {
  //   flexDirection: "row",
  //   marginBottom: 16,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    //   borderRadius: 15,
    // },
    // shadowOpacity: 0.09,
    // shadowRadius: 10,
  // },
  journeyTextContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    // width: 240,
  },
  journeyTextNonFeaturedContainer: {
    top: 0,
    backgroundColor: "transparent",
    paddingTop: 16,
    marginRight: 16,
    // width: 200,
  },
  individualJourney: {
    marginBottom: 5,
    justifyContent: "flex-start",
  },
  mentorImg: {
    flex: 1,
    width: "100%",
    height: 130,
    // height: 130,
  },
});
