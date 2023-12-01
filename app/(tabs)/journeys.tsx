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
          <Text style={styles.journeySubTitle}>Hear From Others</Text>
          <Text style={styles.seeAll}>See All</Text>
        </View>

        <View style={styles.allJourneysContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* Neri Ajiatas Arreaga's Journey */}
            <TouchableOpacity
              style={styles.individualJourney}
              onPress={() => directToMyJourneyPost("shatevalong")}
            >
              {/* Mentor's Image */}
              <View style={styles.mentorImgContainer}>
                <Image
                  style={styles.mentorImg}
                  source={require("../../assets/images/mentorMyJourneyPics/neri.png")}
                />
              </View>
              {/* Journey's title and mentor's information container */}
              <View style={styles.journeyInfoContainer}>
                {/* Journey's title */}
                <View style={styles.journeyTitleContainer}>
                  <Text style={styles.journeyTitle}>Finding Community</Text>
                </View>
                {/* Mentor's information container */}
                <View style={styles.mentorInfoContainer}>
                    <Text style={styles.mentorName}>Neri Ajiatas Arreaga</Text>
                    <Text style={styles.mentorYear}>Class of 2025, Data Science Major</Text>
                </View>
              </View>
            </TouchableOpacity>

            {/* Shateva Long's Journey */}
            <TouchableOpacity
              style={styles.individualJourney}
              onPress={() => directToMyJourneyPost("shatevalong")}
            >
              {/* Mentor's Image */}
              <View style={styles.mentorImgContainer}>
                <Image
                  style={styles.mentorImg}
                  source={require("../../assets/images/mentorMyJourneyPics/shateva.png")}
                />
              </View>
              {/* Journey's title and mentor's information container */}
              <View style={styles.journeyInfoContainer}>
                {/* Journey's title */}
                <View style={styles.journeyTitleContainer}>
                  <Text style={styles.journeyTitle}>I Got To Create My Own 4 Credit CS Course!</Text>
                </View>
                {/* Mentor's information container */}
                <View style={styles.mentorInfoContainer}>
                    <Text style={styles.mentorName}>Shaetva Long</Text>
                    <Text style={styles.mentorYear}>Alumni</Text>
                </View>
              </View>
            </TouchableOpacity>

            {/* Julia Tran's Journey */}
            <TouchableOpacity
              style={styles.individualJourney}
              onPress={() => directToMyJourneyPost("shatevalong")}
            >
              {/* Mentor's Image */}
              <View style={styles.mentorImgContainer}>
                <Image
                  style={styles.mentorImg}
                  source={require("../../assets/images/mentorMyJourneyPics/julia.png")}
                />
              </View>
              {/* Journey's title and mentor's information container */}
              <View style={styles.journeyInfoContainer}>
                {/* Journey's title */}
                <View style={styles.journeyTitleContainer}>
                  <Text style={styles.journeyTitle}>I (Accidentally) Got a Job!</Text>
                </View>
                {/* Mentor's information container */}
                <View style={styles.mentorInfoContainer}>
                    <Text style={styles.mentorName}>Julia Tran</Text>
                    <Text style={styles.mentorYear}>Class of 2027, Business Administration Major</Text>
                </View>
              </View>
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  seeAll: {
    color: "#B4AEBB",
  },
  journeySubTitle: {
    fontSize: 20,
    color: "#919191",
    fontWeight: "500",
    justifyContent: "flex-start",
  },
  featuredJourneysContainer: {
    marginBottom: 32,
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
  individualJourney: {
    flexDirection: "row",
    marginBottom: 16,
    backgroundColor: "white",
    padding: 12,
    borderRadius: 15,
    shadowColor: "#49006C",
    shadowOffset: {
      width: -2,
      height: 4,
    },
    shadowOpacity: 0.06,
    shadowRadius: 10,
  },
  journeyTextContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  journeyTextNonFeaturedContainer: {
    top: 0,
    backgroundColor: "transparent",
    paddingTop: 16,
    marginRight: 16,
  },
  mentorImgContainer: {
    marginRight: 20,
    justifyContent: 'center',
  },
  mentorImg: {
    maxWidth: 80,
    maxHeight: 80,
  },
  journeyInfoContainer: {
    flexDirection: "column",
    flex: 1,
    justifyContent: 'center',
  },
  journeyTitleContainer: {
  },
  journeyTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 16,
    maxWidth: 200,
    lineHeight: 20,
  },
  mentorInfoContainer: {
  },
  mentorName: {
    fontSize: 13,
    marginBottom: 4,
  },
  mentorYear: {
    fontSize: 10,
    color: "#7C7C7C",

  },
});
