import { Timestamp } from "firebase/firestore";

export interface post {
  postId: string;
  title: string;
  content: string;
  timestamp: Timestamp;
}
