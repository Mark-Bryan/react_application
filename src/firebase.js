import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAjcOKxlYbSprMxHXF5M9CXWOlQcA_5k4M",
  authDomain: "react-application-caedf.firebaseapp.com",
  projectId: "react-application-caedf",
  storageBucket: "react-application-caedf.appspot.com",
  messagingSenderId: "702745217192",
  appId: "1:702745217192:web:421c8f515787b85de4da9d",
  measurementId: "G-YBBCP34MBG"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };