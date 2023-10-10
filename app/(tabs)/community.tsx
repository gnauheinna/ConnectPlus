import React, { useState, useEffect} from "react";
import { StyleSheet, TextInput, FlatList } from "react-native";
import { Text, View } from "../../components/Themed";
import { getFirestore, collection, getDocs, Timestamp } from "firebase/firestore";

type Post = {
  title: string;
  content: string;
  timestamp: Timestamp;
};

export default function CommunityScreen() {

  function PostList() {
    const [posts, setPosts] = useState<Post[]>([]);
    useEffect(() => {
      const db = getFirestore();
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
    
          </View>
        )}
      />
    );
  }

  return (
    <View>
      <Text></Text>
      <View
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <PostList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 48,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 48,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  titleTimestampContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  timestamp: {
    fontSize: 12,
    color: "gray",
  },
  content: {
    fontSize: 16,
  },
});
