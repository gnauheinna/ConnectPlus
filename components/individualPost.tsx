import React, { useState, useEffect} from "react";
import { StyleSheet, TextInput, FlatList, ScrollView, View, Text } from "react-native";
import { getFirestore, collection, getDocs, Timestamp, doc, getDoc} from "firebase/firestore";
import {FontAwesome5, Feather} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Card } from 'react-native-paper';

// Defines the properties that the IndividualPost component expects: title, content and timestamp
interface IndividualPostProps {
  // postId: string;
  title: string;
  content: string;
  timestamp: Date;
  onPress?: () => void;
}

const IndividualPost: React.FC<IndividualPostProps> = ({ title, content, timestamp, onPress }) => {
    return (
      <Card style={styles.itemContainer}>
        <View style={styles.titleTimestampContainer}>
          <Text style={styles.title}>{title}</Text>
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
        <Text style={styles.content}>{content}</Text>
        <View style={styles.iconsOnPosts}>
          <TouchableOpacity style={styles.iconWrapper}>
            <FontAwesome5 name="comment" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconWrapper}>
            <Feather name="bookmark" size={28} color="black" />
          </TouchableOpacity>
        </View>
      </Card>
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
    iconsOnPosts: {
      flexDirection: 'row', 
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginTop: 20,
    },
    iconWrapper: {
      marginHorizontal: 8, 
    },
  });
