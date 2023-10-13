import { Timestamp } from "firebase/firestore";

export interface post {
  postId: number;
  title: string;
  content: string;
  timestamp: Timestamp;
  comments: comment[];
  // upvotes: number;
  // downvotes: number;
  // savePost?: () => void;
  // unSavePost?: () => void;
  makeComment?: () => void;
}

export interface comment{
  // id: number;
  // author: number;
  text: string;
  timestamp: Timestamp;
}
