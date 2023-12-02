import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ImageSourcePropType,
} from "react-native";
import { FontAwesome5, Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Card, Avatar, IconButton } from "react-native-paper";
import { Image } from "react-native";
import { useRouter } from "expo-router";

interface IndividualPostProps {
  img: ImageSourcePropType;
  title: string;
  name: string;
  year: string;
  onPress: () => void;
}

const MJPostCard: React.FC<IndividualPostProps> = ({ img, title, name, year, onPress }) => {
  const router = useRouter();
  // function viewPostDetails() {
  //   localStorage.setItem("curPostID", postId);
  //   setCurPostID(postId);
  //   router.push("/postdetails");
  // }

  return (
    <TouchableOpacity style={styles.individualJourney} onPress={onPress}>
        {/* Mentor's Image */}
        <View style={styles.mentorImgContainer}>
          <Image
            style={styles.mentorImg}
            source={img}
          />
        </View>
        {/* Journey's title and mentor's information container */}
        <View style={styles.journeyInfoContainer}>
          {/* Journey's title */}
          <View style={styles.journeyTitleContainer}>
            <Text style={styles.journeyTitle}>{title}</Text>
          </View>
          {/* Mentor's information container */}
          <View style={styles.mentorInfoContainer}>
              <Text style={styles.mentorName}>{name}</Text>
              <Text style={styles.mentorYear}>{year}</Text>
          </View>
        </View>
    </TouchableOpacity>
  );
};

export default MJPostCard;

const styles = StyleSheet.create({
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
