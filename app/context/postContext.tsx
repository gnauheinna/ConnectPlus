// UserContext.js
import React, { createContext, useContext, useEffect, useState, ReactNode,} from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp, getApps } from "firebase/app";
import { getFirestore, collection, getDocs, Timestamp, doc, updateDoc,} from "firebase/firestore";

// Represents the shape of the context value
export type Post = {
  userID: string;
  title: string;
  content: string;
  postID: string;
  tag: string;
  timestamp: Timestamp;
  userName: string;
};

interface PostContextValue {
  posts: Post[];
  loading: boolean;
}

if (getApps() == null) {
  const app = initializeApp();
}

const PostContext = createContext<PostContextValue | undefined>(undefined);
const PostProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const db = getFirestore();

  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define the fetchData function here to use the state and props
    const loadPosts = async () => {
      try {
        const postsCollection = collection(db, "posts");
        const querySnapshot = await getDocs(postsCollection);
        const postData: Post[] = [];
        querySnapshot.forEach((doc) => {
          postData.push(doc.data() as Post);
        });
        postData.sort(
          (a, b) => b.timestamp.toMillis() - a.timestamp.toMillis()
        );
        setPosts(postData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };
    // Call the fetchData function when the component mounts
    loadPosts();
  }, []);

  return (
    <PostContext.Provider value={{ posts, loading }}>
      {children}
    </PostContext.Provider>
  );
};

const usePostContext = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("usePostContext must be used within a PostProvider");
  }
  return context;
};

export { usePostContext, PostContext, PostProvider };
