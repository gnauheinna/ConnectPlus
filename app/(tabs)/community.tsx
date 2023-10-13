import React, { useState, useEffect} from "react";
import { StyleSheet, TextInput, FlatList, ScrollView } from "react-native";
import { Text, View } from "../../components/Themed";
import { getFirestore, collection, getDocs, Timestamp, doc, updateDoc} from "firebase/firestore";
import { AuthErrorCodes } from "firebase/auth";
import{ post } from '../context/PostContext';
import {FontAwesome5, Feather} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

type Post = {
  title: string;
  content: string;
  timestamp: Timestamp;
  upvotes: number;
  downvotes: number;
};

export default function CommunityScreen() {

  const db = getFirestore();

  function PostList() {
    const [posts, setPosts] = useState<Post[]>([]);
    useEffect(() => {
      const postsCollection = collection(db, 'posts');

      const fetchData = async () => {
        try {
          const querySnapshot = await getDocs(postsCollection);
          const postData: any[] = [];
          
          querySnapshot.forEach((doc) => {
            postData.push(doc.data());
          });

          setPosts(postData);
        } catch (error) {
          console.error('Error fetching posts:', error);
        }
      };
      // Call the fetchData function to retrieve posts when the component mounts
      fetchData();
    }, []);
  
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <FlatList
          data={posts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <View style={styles.titleTimestampContainer}>
                <Text style={styles.title}>{item.title}</Text>
                {item.timestamp && (
                  <Text style={styles.timestamp}>
                    {item.timestamp.toDate().toLocaleString('en-US', {
                      year: 'numeric',
                      month: 'numeric',
                      day: 'numeric',
                      hour: 'numeric',
                      minute: 'numeric',
                    })}
                  </Text>
                )}
              </View>
              <Text style={styles.content}>{item.content}</Text>
              <View style={styles.iconsOnPosts}>
                <TouchableOpacity style={styles.iconWrapper}>
                  <FontAwesome5 name="comment" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconWrapper}>
                  <Feather name="bookmark" size={28} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </ScrollView>
    );
  }
  
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <View style={styles.communityTop}>This area is reserved for the title of this page, the search bar, and other information</View>
      <View>
        <PostList />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
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
    width: 300,
    marginBottom: 20,
  },
  communityTop: {
    backgroundColor: 'pink',
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
    marginBottom: 20,
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