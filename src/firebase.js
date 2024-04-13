// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from "firebase/database";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAosld0xrG14VDzCk17Ct7rI0j7JVnT2vM",
  authDomain: "shades-10470.firebaseapp.com",
  projectId: "shades-10470",
  storageBucket: "shades-10470.appspot.com",
  messagingSenderId: "540353645495",
  appId: "1:540353645495:web:f5af4836617bee1625b632",
  measurementId: "G-9R7P7ZMS10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);
export const auth = getAuth();