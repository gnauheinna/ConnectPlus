import { Timestamp } from "firebase/firestore";

export interface post {
  title: string;
  content: string;
  timestamp: Timestamp;
  upvotes: number;
  downvotes: number;
}
