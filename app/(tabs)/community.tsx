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

  // This function will fetch all of the posts in the database and print them out
  function PostList() {
    const [allPosts, setAllPosts] = useState<Post[]>([]);
    useEffect(() => {
      const postsCollection = collection(db, 'posts');

      const fetchData = async () => {
        try {
          const querySnapshot = await getDocs(postsCollection);
          const postData: any[] = [];
          
          querySnapshot.forEach((doc) => {
            postData.push(doc.data());
          });

          setAllPosts(postData);
        } catch (error) {
          console.error('Error fetching posts:', error);
        }
      };
      fetchData();
    }, []);
  
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <FlatList
          data={allPosts}
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
  <ScrollView>
    {/* Display the horizontal sub-navigation bar on top of the posts */}
    <View style={styles.horizontalSubNavContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.horizontalSubNav}>
            <Text>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.horizontalSubNav}>
            <Text>Financial</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.horizontalSubNav}>
            <Text>Academic</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.horizontalSubNav}>
            <Text>Student Life</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.horizontalSubNav}>
            <Text>Career</Text>
          </TouchableOpacity>
        </ScrollView>
    </View>
    {/* Call the function PostList and print out all of the posts in the database */}
    <ScrollView style={styles.screen}>
        <PostList />
    </ScrollView>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    // flex: 1,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'white',
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
    marginBottom: 20,
  },
  communityTop: {
    // backgroundColor: 'pink',
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
  horizontalSubNavContainer: {
    marginLeft: 20,
    position: 'sticky',
    top: 0,
    zIndex: 1,
    backgroundColor: 'white',
  },
  horizontalSubNav: {
    borderWidth: 1, 
    borderColor: 'black', 
    borderRadius: 30,
    padding: 10,
    marginBottom: 15,
    marginTop: 15,
    marginRight: 10,
    alignItems: 'center', 
  },
});