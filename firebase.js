import { initializeApp, getApps } from "firebase/app";

export const firebaseConfig = {
  apiKey: "AIzaSyDc_bGbG2I1hQNnd5bLNtr4kEf9U9FwWjA",
  authDomain: "clonstagram-8fd50.firebaseapp.com",
  projectId: "clonstagram-8fd50",
  storageBucket: "clonstagram-8fd50.appspot.com",
  messagingSenderId: "66569549610",
  appId: "1:66569549610:web:3ec599ed369a0823c91053",
  measurementId: "G-TJS62ZVTLD",
};
const firebaseApp;
if (getApps().length === 0) {
 firebaseApp = initializeApp(firebaseConfig, "connectplus");
}

export default firebaseApp;
