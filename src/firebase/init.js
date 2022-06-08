// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from"firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0A4orZHOOTvKLKRoinlHQSc50FHkoQwM",
  authDomain: "tinder213-9f36c.firebaseapp.com",
  projectId: "tinder213-9f36c",
  storageBucket: "tinder213-9f36c.appspot.com",
  messagingSenderId: "985450253981",
  appId: "1:985450253981:web:69308dbf38ecec7439ce74",
  measurementId: "G-0ECB1ZVEY2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const firestore= getFirestore(app);