import React, { useState, useEffect} from "react";
import { StyleSheet, TextInput, FlatList, ScrollView } from "react-native";
import { Text, View } from "../../components/Themed";
import { getFirestore, collection, getDocs, Timestamp, doc, updateDoc} from "firebase/firestore";

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

    // const updateUpvote = async (post: Post) => {
    //   // Update the upvotes for the post in Firestore
    //   const postRef = doc(db, "posts");
    //   await updateDoc(postRef, { upvotes: post.upvotes + 1 });

    //   // Update the state with the new upvotes count
    //   setPosts((prevPosts) =>
    //     prevPosts.map((p) =>
    //       p.id === post.id ? { ...p, upvotes: p.upvotes + 1 } : p
    //     )
    //   );
    // };
  
    return (
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.container}>
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
            {/* <Button title="👍" onPress={() => updateUpvote(item)} />
            <Button title="👎" onPress={() => updateDownvote(item)} /> */}
          </View>
        )}
      />
    );
  }

  return (
    <ScrollView>
    <View>
      <Text></Text>
      <View
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <PostList />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 48,
    borderWidth: 1, 
    borderColor: "gray",
    borderRadius: 5, 
    padding: 16,
    width: 500,
  },
  title: {
    fontSize: 22,
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
    fontSize: 16,
    textAlign: "left",
  },
});
