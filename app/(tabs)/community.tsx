import React, { useState, useEffect} from "react";
import { StyleSheet, TextInput, FlatList } from "react-native";
import { Text, View } from "../../components/Themed";
import { getFirestore, collection, getDocs } from "firebase/firestore";

type Post = {
  title: string;
  content: string;
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
          <View>
            <Text>{item.title}</Text>
            <Text>{item.content}</Text>
          </View>
        )}
      />
    );
  }

  return (
    <View>
      <Text>Community</Text>
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
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
