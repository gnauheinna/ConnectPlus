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
            <Image style={styles.profileImg} source={require("../assets/images/profileImg.png")} />
            <View style={styles.userInfoContainer}>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userIntro}>{intro}</Text>
            </View>
          </View>

          <View style={styles.titleTimestampContainer}>
          {/* Display the title of the post */}
            <Text style={styles.title}>{title}</Text>

            {/* Display the timestamp of the post */}
            <Text style={styles.timestamp}>
              {timestamp.toLocaleString('en-US', {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
              })}
            </Text>
          </View>
          
          {/* Display the content of the post */}
          <Text style={styles.content}>{content}</Text>
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
    },
    profileImg: {
      width: 48,
      height: 48,
      marginRight: 10,
    },
    userInfoContainer:{
      justifyContent: "center",
    },
    userName:{
      fontSize: 18,
      fontWeight: "500",
      marginBottom: 5,
    },
    userIntro:{
      fontSize: 14,
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
      marginBottom: 30,
    },
    timestamp: {
      fontSize: 12,
      color: "gray",
    },
    content: {
      fontSize: 14,
      textAlign: "left",
      marginBottom: 20,
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
