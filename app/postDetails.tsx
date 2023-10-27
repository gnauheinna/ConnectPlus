import React, { useState, useEffect} from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { getFirestore, doc, updateDoc, getDoc} from "firebase/firestore";
import {FontAwesome5, Feather} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import IndividualPost from "../components/individualPost";
import IndividualComment from "../components/individualComment";

const PostDetails = () =>{

  return (
  <View>

    {/*  Back Button */}
    <TouchableOpacity style={styles.backBtn}>
            <Text style={styles.backText}>Back</Text>
    </TouchableOpacity>

    <ScrollView style={styles.screen}>
      <View>
        <Text style={styles.commentTitle}>Comments (3)</Text>
      </View>
      <IndividualComment
        username={"Sally Smith"}
        intro={"Class of 2026, CS Major"}
        content={"Thank you for sharing these tips ✨"}
       />
       <IndividualComment
        username={"Ben Wilson"}
        intro={"Class of 2027, Business Major"}
        content={"I would love to connect with you 😊"}
       />
       <IndividualComment
        username={"Lana Lei"}
        intro={"Class of 2027, Data Science Major"}
        content={"Very useful information. Thank you!"}
       />
    </ScrollView>
    </View>
  )
};

export default PostDetails

const styles = StyleSheet.create({
  commentTitle:{
    fontSize: 28,
    fontWeight: "bold",
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 20,
  },
    screen: {
      flex: 1,
      backgroundColor: 'white',
    },
    container: {
      flexGrow: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    backBtn: {
      marginTop: 40,
      marginBottom: 40,
      padding: 5,
      borderRadius: 20,
      width: 80,
      justifyContent: "flex-start",
      alignSelf: "flex-start",
      marginLeft: 40,
    },
    backText: {
      fontSize: 18,
      color: "#45384f",
      fontWeight: "300",
    },
    itemContainer: {
      borderWidth: 1,
      borderColor: "gray",
      borderRadius: 5,
      padding: 16,
      marginBottom: 20,
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
    },
  });