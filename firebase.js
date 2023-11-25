// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export const firebaseConfig = {
  apiKey: "AIzaSyA4oxwxAHbIskurrgYHBpcK59jfjX3oB0Y",
  authDomain: "cplus-f7abf.firebaseapp.com",
  projectId: "cplus-f7abf",
  storageBucket: "cplus-f7abf.appspot.com",
  messagingSenderId: "777988076148",
  appId: "1:777988076148:web:005631aaedbe038ff79721",
  measurementId: "G-71LSYRK93B",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const auth = getAuth();
auth.setPersistence(browserSessionPersistence);
