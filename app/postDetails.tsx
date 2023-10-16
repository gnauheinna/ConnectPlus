import React, { useState, useEffect} from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { getFirestore, doc, updateDoc, getDoc} from "firebase/firestore";
import {FontAwesome5, Feather} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import IndividualPost from "../components/individualPost";
import{ post } from './context/PostContext';

// interface IndividualPostProps {
//   postId: string;
// }

const PostDetails = (postId : string) =>{
  // const post_id = route.params.post_id;
  const db = getFirestore();
  const [post, setPost] = useState<post | null>(null);

  useEffect(() => {
    const postDoc = doc(db, 'posts', postId);

    const fetchData = async () => {
      try {
        const docSnapshot = await getDoc(postDoc);
        if (docSnapshot.exists()) {
          setPost(docSnapshot.data() as post);
        } else {
          console.error('No such post!');
        }
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <View style={styles.screen}>
      {post && (
        <IndividualPost 
          title={post.title} 
          content={post.content} 
          timestamp={post.timestamp?.toDate()}
        />
      )}
    </View>
  )
};

export default PostDetails

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
  });