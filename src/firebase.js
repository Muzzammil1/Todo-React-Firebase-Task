// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "todoapp-bb7f1.firebaseapp.com",
  projectId: "todoapp-bb7f1",
  storageBucket: "todoapp-bb7f1.appspot.com",
  messagingSenderId: "569523729907",
  appId: "1:569523729907:web:b9172c9a2f33c6adeb4e86",
  measurementId: "G-6508ZZY9C6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
const analytics = getAnalytics(app);