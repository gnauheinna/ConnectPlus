import React, { useState, useEffect, useContext } from "react";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useUser } from "./context/UserContext";
import { StyleSheet, View, Text, ScrollView, ImageBackground } from "react-native";

export default function MyJourneyPost() {
  const router = useRouter();
  function directToMyJourney() {
    router.push("/journeys");
  }

  return (
    <View style={styles.outterContainer}>

      <View style={styles.container}>
        <ImageBackground source={require("../assets/images/background.png")} resizeMode="cover" style={styles.gradientBackground}>
            <View style={styles.topContainer}>
              </View>
          </ImageBackground> 
     </View>

      <ScrollView style={styles.postContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.topPortionContainer}>
          {/* Post Title & Save Button */}
            <View style={styles.titleAndSaveButtonContainer}>
                <View style={styles.postTitleContainer}>
                  <Text style={styles.postDate}>Nov 6th 2023</Text>
                  <Text style={styles.postTitle}>Alternative Service Break</Text>
                </View>
                <View style={styles.saveButton}>
                  <Image source={require("../assets/images/icons/journeySaved.png")}/>
                </View>
            </View>
            {/* Author's information */}
            <View style={styles.authorInfoContainer}>
              <Image style={styles.profileImg} source={require("../assets/images/mentorProfilePics/RachelLi.png")}/>
              <View style={styles.userNameAndIntro}>
                <Text style={styles.userName}>Rachel Li</Text>
                <Text style={styles.userIntro}>Class of 2024, Data Science Major</Text>
              </View>
            </View>
        </View>
    
        <View style={styles.postContentContainer}>
            <View style={styles.postContentMainContainer}>
              {/* 1st Step */}
              <View style={styles.individualStep}>
                  <View style={styles.subtitleContainer}>
                      <Text style={styles.subtitleText}>Processes</Text>
                  </View>
                  <View style={styles.boldedContentContainer}>
                    <Text style={styles.boldedContentText}>Lorem ipsum dolor sit amet consectetur.</Text>
                  </View>
                  <View style={styles.regularContentContainer}>
                    <Text style={styles.regularContentText}>Justo scelerisque pharetra tellus sagittis porta. Nisi diam sem ut et. Sed pretium praesent faucibus gravida viverra convallis. Vulputate consectetur egestas aliquam nec tortor congue.</Text>
                    <Text style={styles.regularContentText}>Justo scelerisque pharetra tellus sagittis porta. Nisi diam sem ut et. Sed pretium praesent faucibus gravida viverra convallis. Vulputate consectetur egestas aliquam nec tortor congue.</Text>
                  </View>
              </View>
              {/* 2nd Step */}
              <View style={styles.individualStep}>
                  <View style={styles.subtitleContainer}>
                      <Text style={styles.subtitleText}>Experiences</Text>
                  </View>
                  <View style={styles.boldedContentContainer}>
                    <Text style={styles.boldedContentText}>Lorem ipsum dolor sit amet consectetur.</Text>
                  </View>
                  <View style={styles.regularContentContainer}>
                    <Text style={styles.regularContentText}>Justo scelerisque pharetra tellus sagittis porta. Nisi diam sem ut et. Sed pretium praesent faucibus gravida viverra convallis. Vulputate consectetur egestas aliquam nec tortor congue.</Text>
                  </View>
              </View>
              {/* 3rd Step */}
              <View style={styles.individualStep}>
                  <View style={styles.subtitleContainer}>
                      <Text style={styles.subtitleText}>Resources</Text>
                  </View>
                  <View style={styles.boldedContentContainer}>
                    <Text style={styles.boldedContentText}>Lorem ipsum dolor sit amet consectetur.</Text>
                  </View>
                  <View style={styles.regularContentContainer}>
                    <Text style={styles.regularContentText}>Justo scelerisque pharetra tellus sagittis porta. Nisi diam sem ut et. Sed pretium praesent faucibus gravida viverra convallis. Vulputate consectetur egestas aliquam nec tortor congue.</Text>
                  </View>
              </View>
            </View>
            <View style={styles.progressBarContainer}>
                <View style={styles.verticalLine1}></View>
                <View style={styles.verticalLine2}></View>
                <View style={styles.verticalLine3}></View>
            </View>
        </View>
      </ScrollView>
      </View>

  );
}

const styles = StyleSheet.create({
  outterContainer: {
    flex: 1,
  },
  container: {
  },
  topContainer: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "transparent",
    paddingTop: 50,
  },
  gradientBackground: {
    width: 390, 
    height: 200,
    zIndex: 1,
  },
  postContainer: {
    flex: 1,
    zIndex: 2,  
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: -150,
    backgroundColor: "white",
    shadowColor: "rgba(0, 0, 0, 0.02)",
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 22,
    elevation: 22,
    shadowOpacity: 1,
  },
  topPortionContainer: {
    marginBottom: 20,
    backgroundColor: "white",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 40,
  },
  titleAndSaveButtonContainer: {
    flexDirection: "row",
    width: "100%",
  },
  postTitleContainer: {
    width: 320,
  },
  postDate: {
    color: "#818181",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
  },
  postTitle: {
    color: "#000000",
    fontSize: 28,
    fontWeight: "bold",
  },
  saveButton: {
    width: 36,
    height: 36,
  },
  authorInfoContainer:{
    flexDirection: "row",
    paddingTop: 20,
    paddingBottom: 20,
  },
  profileImg: {
    width: 36,
    height: 36,
    marginRight: 10,
  },
  userInfo: {
    flexDirection: "row",
  },
  userNameAndIntro: {
    justifyContent: "center",
  },
  userName: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  userIntro: {
    fontSize: 12,
    color: "#888888",
  },
  postContentContainer: {
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20,
  },
  postContentMainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  individualStep: {
    marginBottom: 20,
  },
  subtitleContainer: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#CA95C8",
    backgroundColor: "#FAF4F9",
    width: 120,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20,
  },
  subtitleText: {
    color: "#AF6BAB",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  boldedContentContainer: {
    marginBottom: 10,
  },
  boldedContentText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  regularContentContainer:{
    marginBottom: 10,
  },
  regularContentText: {
    fontSize: 16,
    lineHeight: 25,
    color: "#818181",
    marginBottom: 10,
  },
  progressBarContainer: {
    // zIndex: 3,
    flexDirection: 'column',
    height: 450,
    // position: "relative",
  },
  verticalLine1: {
    flex: 1,
    borderLeftColor: '#FFD979',
    borderLeftWidth: 5,
    borderRadius: 20,
    marginLeft: 20,
    marginBottom: 15,
  },
  verticalLine2: {
    flex: 1,
    borderLeftColor: '#EAEAEA',
    borderLeftWidth: 5,
    borderRadius: 20,
    marginLeft: 20,
    marginBottom: 15,
  },
  verticalLine3: {
    flex: 1,
    borderLeftColor: '#EAEAEA',
    borderLeftWidth: 5,
    borderRadius: 20,
    marginLeft: 20,
    // position: "absolute",
  },
});
