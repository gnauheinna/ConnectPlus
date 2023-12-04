import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet, ScrollView, Image, ImageBackground } from "react-native";
import MyJourneyPost from "./myjourneypost";
import { useRouter } from "expo-router";
import React, { useState, useEffect } from "react";
import MJPostCard from '../components/MJPostCard';

export default function allJourneys() {
  const router = useRouter();
  function directToMyJourneyPost(postName: string) {
    router.push(`/${postName}`);
  }
  function directToMyJourney() {
    router.push("/journeys");
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.outermostContainer}>
      <ImageBackground
        source={require("../assets/images/gradient/whiteGradientAskNShare.png")}
        resizeMode="cover"
        style={styles.gradientBackground}
      >
      {/* Back Button */}
      <View style={styles.backBtnContainer}>
          <TouchableOpacity style={styles.backBtn} onPress={directToMyJourney}>
            <Image style={styles.backBtnImg} source={require("../assets/images/icons/blackBack.png")}/>
          </TouchableOpacity>
        </View>
      <View style={styles.journeyBigTitleContainer}>
          <Text style={styles.journeyBigTitle}>All Journeys</Text>
      </View>
      </ImageBackground>

      <View style={styles.container}>
        <View style={styles.allJourneysContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* Neri Ajiatas Arreaga's Journey */}
            <MJPostCard
              onPress={() => directToMyJourneyPost("neri")}
              img={require("../assets/images/mentorMyJourneyPics/neri.png")}
              title="Finding Community"
              name="Neri Ajiatas Arreaga"
              year="Class of 2025, Data Science Major"
            />

            {/* Shateva Long's Journey */}
            <MJPostCard
              onPress={() => directToMyJourneyPost("shateva")}
              img={require("../assets/images/mentorMyJourneyPics/shateva.png")}
              title="I Got To Create My Own 4 Credit CS Course!"
              name="Shaetva Long"
              year="Alumni"
            />

            {/* Julia Tran's Journey */}
            <MJPostCard
              onPress={() => directToMyJourneyPost("julia")}
              img={require("../assets/images/mentorMyJourneyPics/julia.png")}
              title="I (Accidentally) Got a Job!"
              name="Julia Tran"
              year="Class of 2027, Business Administration Major"
            />

            {/* Annie Huang's Journey */}
            <MJPostCard
              onPress={() => directToMyJourneyPost("annie")}
              img={require("../assets/images/mentorMyJourneyPics/julia.png")}
              title="I (Accidentally) Got a Job!"
              name="Annie Huang"
              year="Class of 2025, Computer Science Major"
            />

            {/* Kristi Li's Journey */}
            <MJPostCard
              onPress={() => directToMyJourneyPost("kristi")}
              img={require("../assets/images/mentorMyJourneyPics/julia.png")}
              title="I (Accidentally) Got a Job!"
              name="Kristi Li"
              year="Class of 2023, CS & Advertising Major"
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
    height: 150,
    zIndex: 1,
  },
  backBtnContainer: {
    top: 60, 
    left: 20,
    alignSelf: "flex-start",
    justifyContent: 'center',
    marginBottom: 20,
    zIndex: 2,
    backgroundColor: "transparent",
  },
  backBtn: {
    padding: 5,
    resizeMode: "contain",
    justifyContent: 'center',
  },
  backBtnImg: {
    width: 20,
    height: 20,
  },
  container: {
    flex: 1,
    marginTop: 20,
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
    fontSize: 42,
    color: "#453B4F",
    fontWeight: "bold",
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
    marginTop: 20,
    marginBottom: 32,
    height: 220,
    flex: 1,
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
