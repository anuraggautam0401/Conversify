import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// 
// process.env.REACT_APP_FIREBASE_KEY
const firebaseConfig = {
  apiKey: "AIzaSyBjWSR4TP6hjBk4kxWByTR1TRv23t_m5hc" ,
  authDomain: "chat-app-2a71c.firebaseapp.com",
  projectId: "chat-app-2a71c",
  storageBucket: "chat-app-2a71c.appspot.com",
  messagingSenderId: "191839347085",
  appId: "1:191839347085:web:fd29dfcc4419272da1ddc4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
