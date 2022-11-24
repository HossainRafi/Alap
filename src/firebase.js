// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_qd44TTGjnOLxI7Rtcjar8XlGnthPKmM",
  authDomain: "tidbit-d9e14.firebaseapp.com",
  projectId: "tidbit-d9e14",
  storageBucket: "tidbit-d9e14.appspot.com",
  messagingSenderId: "359356439343",
  appId: "1:359356439343:web:0b9a5bce686b0154b5dfda",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
