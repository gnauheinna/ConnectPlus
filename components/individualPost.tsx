import React, { useState, useEffect} from "react";
import { StyleSheet, TextInput, FlatList, ScrollView, View, Text } from "react-native";
import { getFirestore, collection, getDocs, Timestamp, doc, getDoc} from "firebase/firestore";
import {FontAwesome5, Feather} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Card, Avatar, IconButton } from 'react-native-paper';
import { Image } from "react-native";
import { useRouter } from "expo-router";

// Defines the properties that the IndividualPost component expects: title, content and timestamp
interface IndividualPostProps {
  // postId: string;
  name: string;
  intro: string;
  title: string;
  content: string;
  timestamp: Date;
}

const IndividualPost: React.FC<IndividualPostProps> = ({ name, intro, title, content, timestamp }) => {
    const router = useRouter();
    function viewPostDetails() {
      router.push("/postdetails");
    }
    return (
      <TouchableOpacity onPress={viewPostDetails}>
        <View style={{...styles.itemContainer}}>
          {/* Display the user's profile image, name, and intro on the top */}
          <View style={styles.userContainer}>
            <View style={styles.userInfo}>
              <Image style={styles.profileImg} source={require("../assets/images/profileImg.png")} />
              <View style={styles.userNameAndIntro}>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userIntro}>{intro}</Text>
              </View>
            </View>
            {/* Display the tag that is associated with the post to the right of the user's information */}
            <View style={styles.tagContainer}>
              <Text style={styles.tagText}>Academic</Text>
            </View>
          </View>

          <View style={styles.titleTimestampContainer}>
          {/* Display the title of the post */}
            <Text style={styles.title}>{title}</Text>
          </View>
          
          {/* Display the content of the post */}
          <Text style={styles.content}>{content}</Text>

          {/* Display the timestamp of the post */}
          <Text style={styles.timestamp}>
              {timestamp.toLocaleString('en-US', {
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
              })}
            </Text>
        </View>
      </TouchableOpacity>
    );
  };
  

export default IndividualPost;

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    itemContainer: {
      borderWidth: 1,
      borderTopLeftRadius: 12, 
      borderTopRightRadius: 12, 
      padding: 16,
      borderBottomColor: "transparent", 
      borderColor: "#CAC4D0",
      backgroundColor: "#FEF7FF",
      paddingBottom: 0, 
    },
    userContainer:{
      flexDirection: "row",
      marginBottom: 20,
      justifyContent: "space-between",
    },
    profileImg: {
      width: 48,
      height: 48,
      marginRight: 10,
    },
    userInfo: {
      flexDirection: "row",
    },
    userNameAndIntro:{
      justifyContent: "center",
    },
    userName:{
      fontSize: 16,
      fontWeight: "500",
      marginBottom: 5,
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
      marginBottom: 10,
    },
    timestamp: {
      fontSize: 12,
      color: "gray",
      marginBottom: 10,
    },
    content: {
      fontSize: 14,
      textAlign: "left",
      marginBottom: 10,
    },
    tagContainer: {
      backgroundColor: "#FFD465",
      width: 100,
      borderRadius: 25,
      paddingVertical: 12,
      alignSelf: "flex-end",
    },
    tagText: {
      fontSize: 14,
      alignSelf: "center",
    },
    iconsOnPosts: {
      flexDirection: 'row', 
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginTop: 20,
      backgroundColor: '#E6DBF3',
      borderBottomLeftRadius: 12,
      borderBottomRightRadius: 12,
      paddingHorizontal: 0,
    },
    iconWrapper: {
      marginHorizontal: 8, 
      paddingTop: 10,
      paddingBottom: 10,
    },
  });
