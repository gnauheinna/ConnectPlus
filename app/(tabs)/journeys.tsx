import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet, ScrollView, Image, ImageBackground } from "react-native";
import MyJourneyPost from "../myjourneypost";
import { useRouter } from "expo-router";
import React, { useState, useEffect } from "react";
import MJPostCard from '../../components/MJPostCard';

export default function JourneyScreen() {
  const router = useRouter();
  function directToMyJourneyPost(postName: string) {
    router.push(`/${postName}`);
  }
  function directToSeeAllJourneys() {
    router.push("/seeAllJourneys");
  }

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
              onPress={() => directToMyJourneyPost("rachel")}
              style={styles.featuredJourney}
            >
              <Image
                style={styles.featuredJourneyImg}
                source={require("../../assets/images/featuredMyJourneyPosts/RachelLi.png")}
              />
            </TouchableOpacity>

            {/* 2nd Featured Journey */}
            <TouchableOpacity
              onPress={() => directToMyJourneyPost("rachel")}
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
          <TouchableOpacity onPress={directToSeeAllJourneys}>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.allJourneysContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* Neri Ajiatas Arreaga's Journey */}
            <MJPostCard
              onPress={() => directToMyJourneyPost("neri")}
              img={require("../../assets/images/mentorMyJourneyPics/neri.png")}
              title="Finding Community"
              name="Neri Ajiatas Arreaga"
              year="Class of 2025, Data Science Major"
            />

            {/* Shateva Long's Journey */}
            <MJPostCard
              onPress={() => directToMyJourneyPost("shateva")}
              img={require("../../assets/images/mentorMyJourneyPics/shateva.png")}
              title="I Got To Create My Own 4 Credit CS Course!"
              name="Shaetva Long"
              year="Alumni"
            />

            {/* Julia Tran's Journey */}
            <MJPostCard
              onPress={() => directToMyJourneyPost("julia")}
              img={require("../../assets/images/mentorMyJourneyPics/julia.png")}
              title="I (Accidentally) Got a Job!"
              name="Julia Tran"
              year="Class of 2027, Business Administration Major"
            />
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
    height: 130,
    zIndex: 1,
  },
  container: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#F9F6FF",
  },
  journeyBigTitleContainer: {
    marginTop: 50,
    backgroundColor: "transparent",
    marginLeft: 20,
    marginRight: 20,
    zIndex: 2,
  },
  journeyBigTitle: {
    fontSize: 42,
    color: "#453B4F",
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
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
    height: 220,
    backgroundColor: "transparent",
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
    maxHeight: 200,
    borderRadius: 15,
  },
  allJourneysContainer: {
    flex: 1,
    backgroundColor: "#F9F6FF",
    marginTop: 10,
    justifyContent: "flex-start",
  },
});
