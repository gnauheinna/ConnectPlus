import React, { useState, useEffect, useContext, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import {
  StyleSheet,
  View,
  Text,
  Linking,
  ScrollView,
  ImageBackground,
  NativeSyntheticEvent,
  TouchableOpacity,
  NativeScrollEvent,
} from "react-native";

export default function MyJourneyPost() {
  const router = useRouter();

  // Extract the mentor's name from the end of the URL
  const urlParams = new URLSearchParams(window.location.search);
  const mentorName = urlParams.get("name");
  //console.log("mentorName: ", mentorName);
  const { name } = useParams();
  //console.log("name:  ", name);

  useEffect(() => {
    console.log("mentorName hook:  ", mentorName);
  }, [mentorName]);

  function directToMyJourney() {
    router.push("/journeys");
  }

  const ShatevaLong = {
    title: "I got to create my own 4 credit computer science course!",
    intro:
      "It was my last year in college and I still needed one more elective course to fulfill my Computer Science degree requirements. I had a poor lottery number, which left me with higher level 500+ courses that did not peak my interest. After lots of searching through our course site, I saw that as a senior computer science student, I was eligible for a directed study so that’s what I did!",
    process: {
      step1:
        "Figure out what to study! This can be anything related to your major.",
      step2: "Find a professor to work with.",
      step3:
        "Fill out your department’s directed study application. It will ask you questions about your project, what assignments you’ll be submitting, how many hours you’ll be working, etc.",
      step4:
        "Go through your “course” content with your professor and submit your application.",
    },
    experience:
      "As my project, I analyzed data from a DEI climate survey I conducted and created an analysis report. I had so much fun. The professor I worked with was amazing. He was extremely helpful throughout the entire process and our work styles meshed well. The project itself was also the perfect combination of challenging and interesting. I got to learn a new programming language and use it to build an interactive data report, and I enjoyed every minute of it. I got to utilize all of the skills I developed over the years and put my all into this project. It  was genuinely the first time I’ve felt overall fulfillment with a course at BU.",
    challenges:
      "The hardest part of the directed study was the initial application process. Finding a professor was not easy since many professors were busy or did not have the skills I needed for my project. Luckily, I was able to find a professor outside of my department who had the exact skills I needed. Everything else was great.",
    takeaways:
      "Doing a directed study is not for everyone. You have to essentially build your own course and keep yourself on track. While it may be challenging, the experience was rewarding.",
  };

  // For the Progress Bar
  const [verticalLine1, setVerticalLine1] = useState(true);
  const [verticalLine2, setVerticalLine2] = useState(false);
  const [verticalLine3, setVerticalLine3] = useState(false);
  const [verticalLine4, setVerticalLine4] = useState(false);
  const [verticalLine5, setVerticalLine5] = useState(false);

  const handleScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const scrollY = event.nativeEvent.contentOffset.y;
      if (scrollY < 300) {
        setVerticalLine1(true);
        setVerticalLine2(false);
        setVerticalLine3(false);
        setVerticalLine4(false);
        setVerticalLine5(false);
      }
      if (scrollY >= 300) {
        setVerticalLine2(true);
        setVerticalLine1(false);
        setVerticalLine3(false);
        setVerticalLine4(false);
        setVerticalLine5(false);
      }
      if (scrollY >= 1050) {
        setVerticalLine3(true);
        setVerticalLine1(false);
        setVerticalLine2(false);
        setVerticalLine4(false);
        setVerticalLine5(false);
      }
      if (scrollY >= 1350) {
        setVerticalLine4(true);
        setVerticalLine1(false);
        setVerticalLine2(false);
        setVerticalLine3(false);
        setVerticalLine5(false);
      }
      if (scrollY >= 1450) {
        setVerticalLine5(true);
        setVerticalLine1(false);
        setVerticalLine2(false);
        setVerticalLine3(false);
        setVerticalLine4(false);
      }
    },
    []
  );

  return (
    <View style={styles.outterContainer}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/images/background.png")}
          resizeMode="cover"
          style={styles.gradientBackground}
        >
          <View style={styles.topContainer}></View>
        </ImageBackground>
      </View>
      {/* {mentorName === "rachelli" && ( */}
      <ScrollView
        style={styles.postContainer}
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <View style={styles.topPortionContainer}>
          {/* Post Title & Save Button */}
          <View style={styles.titleAndSaveButtonContainer}>
            <View style={styles.postTitleContainer}>
              <Text style={styles.postDate}>Nov 6th 2023</Text>
              <Text style={styles.postTitle}>Alternative Service Break</Text>
            </View>
            <View style={styles.saveButton}>
              <Image
                source={require("../assets/images/icons/journeySaved.png")}
              />
            </View>
          </View>
          {/* Author's information */}
          <View style={styles.authorInfoContainer}>
            <Image
              style={styles.profileImg}
              source={require("../assets/images/mentorProfilePics/RachelLi.png")}
            />
            <View style={styles.userNameAndIntro}>
              <Text style={styles.userName}>Rachel Li</Text>
              <Text style={styles.userIntro}>
                Class of 2024, Data Science Major
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.postContentContainer}>
          <View style={styles.postContentMainContainer}>
            {/* 1st Step */}
            <View style={styles.individualStep}>
              <View style={styles.subtitleContainer}>
                <Text style={styles.subtitleText}>Theme</Text>
              </View>
              <View style={styles.regularContentContainer}>
                <Text style={styles.regularContentText}>
                  If you’re a student working part-time, don’t have a meal plan,
                  and shop for groceries on your own, here’s a resource for you:
                  The{" "}
                  <Text style={styles.regularContentTextBolded}>
                    Supplemental Nutrition Assistance Program (SNAP){" "}
                  </Text>
                  gives people who are eligible around $80-$100 monthly funds to
                  buy food. Navigating this process has been a headache. I spent
                  hours on the phone with customer service, figuring out the
                  right document to submit. Here is a guide to applying for SNAP
                  from my own experience so that you can have a much smoother
                  process.
                </Text>
              </View>
            </View>
            {/* 2nd Step */}
            <View style={styles.individualStep}>
              <View style={styles.subtitleContainer}>
                <Text style={styles.subtitleText}>Processes</Text>
              </View>
              <View style={styles.regularContentContainer}>
                <Text style={styles.regularContentText}>
                  {"1. Do a "}
                  <TouchableOpacity
                    onPress={() =>
                      Linking.openURL(
                        "https://dtaconnect.eohhs.mass.gov/screening?_gl=1*19vwokf*_ga*NDU5MDQyNTc0LjE2OTkzODAxNTk.*_ga_SW2TVH2WBY*MTY5OTM4MDE1OS4xLjAuMTY5OTM4MDE1OS4wLjAuMA.."
                      )
                    }
                  >
                    <Text style={styles.linkText}>quick check</Text>
                  </TouchableOpacity>
                  {" to see if you’re eligible."}
                </Text>
                <Text style={styles.regularContentText}>
                  {"2. File the "}
                  <TouchableOpacity
                    onPress={() =>
                      Linking.openURL(
                        "https://dtaconnect.eohhs.mass.gov/?_gl=1*1qkcl0m*_ga*NDU5MDQyNTc0LjE2OTkzODAxNTk.*_ga_SW2TVH2WBY*MTY5OTM4MDE1OS4xLjEuMTY5OTM4MDUxMi4wLjAuMA.."
                      )
                    }
                  >
                    <Text style={styles.linkText}>initial application</Text>
                  </TouchableOpacity>
                  {"."}
                </Text>
                <Text style={styles.regularContentText}>
                  3. The documents I submitted as a full-time student:{" "}
                </Text>
                <View style={styles.indentedContentContainer}>
                  <Text style={styles.regularContentText}>
                    - Financial aid proof
                  </Text>
                  <Text style={styles.regularContentText}>
                    - Proof that you don’t have a meal plan on campus
                  </Text>
                  <Text style={styles.regularContentText}>
                    - Proof of work-study
                  </Text>
                  <Text style={styles.regularContentText}>
                    - Proof of other work you’re (or have been) participating in
                  </Text>
                </View>
                <Text style={styles.regularContentText}>
                  4. After the initial application, they require a phone
                  interview asking you to verify the information.{" "}
                </Text>
                <Text
                  style={[styles.regularContentTextBolded, { marginTop: 20 }]}
                >
                  Additional Info:
                </Text>
                <Text style={styles.regularContentText}>
                  {"1. Reach out to BU Housing "}
                  <TouchableOpacity
                    onPress={() => Linking.openURL("housing@bu.edu")}
                  >
                    <Text style={styles.linkText}>housing@bu.edu</Text>
                  </TouchableOpacity>
                  {" to request a signed document."}
                </Text>
                <Text style={styles.regularContentText}>
                  2. You need to be actively participating in the work-study in
                  order to be qualified. The number of hours you work doesn't
                  matter.
                </Text>
                <Text style={styles.regularContentText}>
                  3. Go to studentlink work portal to see if you can find a
                  printable version. If not, reach out to your supervisor.
                </Text>
                <Text style={styles.regularContentText}>
                  4. The document needs to have a specific start and end date.
                </Text>
              </View>
            </View>
            {/* 3rd Step */}
            <View style={styles.individualStep}>
              <View style={styles.subtitleContainer}>
                <Text style={styles.subtitleText}>Challenges</Text>
              </View>
              <View style={styles.regularContentContainer}>
                <Text style={styles.regularContentText}>
                  Trying to figure out what kind of document they need and being
                  able to connect with a representative is the most daunting
                  part.
                </Text>
              </View>
            </View>
            {/* 4th Step */}
            <View style={styles.individualStep}>
              <View style={styles.subtitleContainer}>
                <Text style={styles.subtitleText}>Takeaways</Text>
              </View>
              <View style={styles.regularContentContainer}>
                <Text style={styles.regularContentText}>
                  - Try your best to not miss the scheduled phone call because
                  it’s very hard to connect with a representative when you dial
                  in yourself. The average wait time is around 30 min.
                </Text>
                <Text style={styles.regularContentText}>
                  - Download DTA Connect App, it’s the place where you submit
                  all the verification documents.
                </Text>
                <Text style={styles.regularContentText}>
                  - Keep an eye on your mail. They will email letters to you
                  with your case number (you need this number to sign into your
                  DTA app account)
                </Text>
              </View>
            </View>
            {/* 5th Step */}
            <View style={styles.individualStep}>
              <View style={styles.subtitleContainer}>
                <Text style={styles.subtitleText}>Resources</Text>
              </View>
              <View style={styles.regularContentContainer}>
                <Text style={styles.regularContentText}>
                  Here are BU resources related to food:
                </Text>
                <View style={styles.indentedContentContainer}>
                  <Text style={styles.regularContentText}>
                    {"- "}
                    <TouchableOpacity
                      onPress={() =>
                        Linking.openURL(
                          "https://www.bu.edu/chapel/programming/community-dinner/"
                        )
                      }
                    >
                      <Text style={styles.linkText}>Marsh Chapel</Text>
                    </TouchableOpacity>
                    {
                      " hosts a community dinner on Mondays from 5 p.m. to 6:30 p.m., you do not need to have any religious affiliation to participate."
                    }
                  </Text>
                  <Text style={styles.regularContentText}>
                    {"- "}
                    <TouchableOpacity
                      onPress={() =>
                        Linking.openURL(
                          "https://www.bu.edu/studentwellbeing/place-a-bu-food-pantry-order/"
                        )
                      }
                    >
                      <Text style={styles.linkText}>BU Food Pantry</Text>
                    </TouchableOpacity>
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* )} */}
      <View style={styles.progressBarContainer}>
        <View
          style={
            verticalLine1 ? styles.verticalLine1Active : styles.verticalLine1
          }
        ></View>
        <View
          style={
            verticalLine2 ? styles.verticalLine2Active : styles.verticalLine2
          }
        ></View>
        <View
          style={
            verticalLine3 ? styles.verticalLine3Active : styles.verticalLine3
          }
        ></View>
        <View
          style={
            verticalLine4 ? styles.verticalLine4Active : styles.verticalLine4
          }
        ></View>
        <View
          style={
            verticalLine5 ? styles.verticalLine5Active : styles.verticalLine5
          }
        ></View>
      </View>
      {/* </View>)} */}
    </View>
  );
}

const styles = StyleSheet.create({
  outterContainer: {
    flex: 1,
  },
  container: {},
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
  authorInfoContainer: {
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
    marginRight: 20,
  },
  individualStep: {
    marginBottom: 20,
  },
  subtitleContainer: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#CA95C8",
    backgroundColor: "#FAF4F9",
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginBottom: 20,
    // This line makes this container to only be as wide as its content (plus padding)!
    alignSelf: "flex-start",
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
  regularContentContainer: {
    marginBottom: 10,
  },
  regularContentText: {
    fontSize: 16,
    lineHeight: 25,
    color: "#393939",
    marginBottom: 10,
  },
  regularContentTextBolded: {
    fontSize: 16,
    lineHeight: 25,
    color: "#393939",
    marginBottom: 10,
    fontWeight: "bold",
  },
  indentedContentContainer: {
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  linkText: {
    fontSize: 16,
    lineHeight: 25,
    color: "#CA95C8",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  progressBarContainer: {
    zIndex: 3,
    position: "absolute",
    right: 20,
    top: 280,
    flexDirection: "column",
    height: 450,
  },
  verticalLine1Active: {
    flex: 1,
    borderLeftColor: "#FFD979",
    borderLeftWidth: 5,
    borderRadius: 20,
    marginLeft: 20,
    marginBottom: 15,
  },
  verticalLine1: {
    flex: 1,
    borderLeftColor: "#EAEAEA",
    borderLeftWidth: 5,
    borderRadius: 20,
    marginLeft: 20,
    marginBottom: 15,
  },
  verticalLine2Active: {
    flex: 1,
    borderLeftColor: "#FFD979",
    borderLeftWidth: 5,
    borderRadius: 20,
    marginLeft: 20,
    marginBottom: 15,
  },
  verticalLine2: {
    flex: 1,
    borderLeftColor: "#EAEAEA",
    borderLeftWidth: 5,
    borderRadius: 20,
    marginLeft: 20,
    marginBottom: 15,
  },
  verticalLine3Active: {
    flex: 1,
    borderLeftColor: "#FFD979",
    borderLeftWidth: 5,
    borderRadius: 20,
    marginLeft: 20,
    marginBottom: 15,
  },
  verticalLine3: {
    flex: 1,
    borderLeftColor: "#EAEAEA",
    borderLeftWidth: 5,
    borderRadius: 20,
    marginLeft: 20,
    marginBottom: 15,
  },
  verticalLine4: {
    flex: 1,
    borderLeftColor: "#EAEAEA",
    borderLeftWidth: 5,
    borderRadius: 20,
    marginLeft: 20,
    marginBottom: 15,
  },
  verticalLine4Active: {
    flex: 1,
    borderLeftColor: "#FFD979",
    borderLeftWidth: 5,
    borderRadius: 20,
    marginLeft: 20,
    marginBottom: 15,
  },
  verticalLine5: {
    flex: 1,
    borderLeftColor: "#EAEAEA",
    borderLeftWidth: 5,
    borderRadius: 20,
    marginLeft: 20,
    marginBottom: 15,
  },
  verticalLine5Active: {
    flex: 1,
    borderLeftColor: "#FFD979",
    borderLeftWidth: 5,
    borderRadius: 20,
    marginLeft: 20,
    marginBottom: 15,
  },
});
