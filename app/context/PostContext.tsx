import { Timestamp } from "firebase/firestore";

export interface post {
  post_id: string;
  title: string;
  content: string;
  timestamp: Timestamp;
}
