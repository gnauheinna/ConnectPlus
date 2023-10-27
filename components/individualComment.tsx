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
  // profile picture
  content: string;
  // timestamp: Date;
  // onPress?: () => void;
}

const IndividualComment: React.FC<IndividualCommentProps> = ({ username, intro, content }) => {
    return (
      <View style={{...styles.itemContainer}}>
        {/* Display the user's profile image, name, and intro on the top */}
        <View style={styles.userContainer}>
          <Image style={styles.profileImg} source={require("../assets/images/profileImg.png")} />
          <View style={styles.userInfoContainer}>
            <Text style={styles.userName}>{username}</Text>
            <Text style={styles.userIntro}>{intro}</Text>
          </View>
        </View>

        <View style={styles.titleTimestampContainer}>

          {/* Display the timestamp of the comment */}
          {/* <Text style={styles.timestamp}>
            {timestamp.toLocaleString('en-US', {
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
            })}
          </Text> */}
        </View>

        {/* Display the content of the comment */}
        <View style={styles.contentContainer}>
          <Text style={styles.content}>{content}</Text>
        </View>
               {/*  Reply Button */}
      <TouchableOpacity style={styles.replyBtn}>
            <Text style={styles.replyText}>Reply</Text>
      </TouchableOpacity>
      </View>
    );
  };

export default IndividualComment;

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    itemContainer: {
      borderWidth: 1,
      borderColor: "#CAC4D0",
      borderTopColor: "transparent",
      borderBottomColor: "#e6dbf3",
      borderLeftColor: "transparent",
      borderRightColor: "transparent",
      paddingBottom: 0, 
      marginLeft: 40,
      marginRight: 40,
    },
    userContainer:{
      marginTop: 10,
      flexDirection: "row",
      marginBottom: 20,
    },
    profileImg: {
      width: 40,
      height: 40,
      marginRight: 10,
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
    title: {
      fontSize: 18,
      fontWeight: "bold",
      marginRight: 48,
      textAlign: "left",
    },
    titleTimestampContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    timestamp: {
      fontSize: 12,
      color: "gray",
    },
    contentContainer:{
      marginBottom: 5,
    },
    content: {
      fontSize: 14,
      textAlign: "left",
      marginBottom: 10,
    },
    replyBtn: {
      marginBottom: 20,
      justifyContent: "flex-start",
      alignSelf: "flex-start",
    },
    replyText: {
      fontSize: 12,
      color: "#FFC940",
      fontWeight: "500",
    },
  });