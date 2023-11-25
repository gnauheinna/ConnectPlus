import React, { useState, useEffect} from "react";
import { StyleSheet, TextInput, FlatList, ScrollView, View, Text } from "react-native";
import { getFirestore, collection, getDocs, Timestamp, doc, getDoc} from "firebase/firestore";
import {FontAwesome5, Feather} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Card, Avatar, IconButton } from 'react-native-paper';
import { Image } from "react-native";

// Defines the properties that the individualComment component expects: user's name, profile picture, content, timestamp, and the reply button
interface IndividualCommentProps {
  username: string;
  intro: string;
  timestamp: string;
  content: string;
}


const IndividualComment: React.FC<IndividualCommentProps> = ({ username, intro, timestamp, content }) => {
    return (
      <View style={styles.outermostContainer}>
        <View style={styles.mainContainer}>
          {/* Display the profile image */}
          <View style={styles.profileImgContainer}>
              <Image style={styles.profileImg} source={require("../assets/images/avatars/avatar1.png")} />
          </View>
          {/* Display the comment box */}
          <View style={styles.commentContainer}>
            {/* Display the user info and timestamp of the comment */}
            <View style={styles.topPortionContainer}>
                {/* Display the username and intro */}
                <View style={styles.userInfoContainer}>
                    <Text style={styles.userName}>{username}</Text>
                    <Text style={styles.userIntro}>{intro}</Text>
                </View>
                {/* Display the timestamp */}
                <View style={styles.timestampContainer}>
                    <Text style={styles.timestamp}>{timestamp}</Text>
                </View>
            </View>
            {/* Display the comment content */}
            <View style={styles.bottomPortionContainer}>
                {/* Display the content */}
                <Text style={styles.commentContent}>{content}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

export default IndividualComment;

const styles = StyleSheet.create({
    outermostContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 20,
    },
    mainContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    profileImgContainer: {
      marginRight: 10,
    },
    profileImg: {
      width: 60,
      height: 60,
    },
    commentContainer: {
      width: 310,
      backgroundColor: "#F9F6FF",
      borderBottomLeftRadius: 12,
      borderTopRightRadius: 12,
      padding: 15,
    },
    topPortionContainer:{
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 10,
    },
    userInfoContainer:{
      justifyContent: "center",
    },
    userName:{
      fontSize: 16,
      fontWeight: "500",
    },
    userIntro:{
      fontSize: 12,
      color: "#888888",
    },
    timestampContainer: {

    },
    timestamp: {
      fontSize: 12,
      color: "gray",
    },
    bottomPortionContainer: {

    },
    commentContent: {
      fontSize: 14,
      textAlign: "left",
    },
  });