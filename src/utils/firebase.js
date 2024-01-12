// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCV3C0TGqsFnk3KVRfkyXsMnPbPOSwu34c",
  authDomain: "netflix-gpt-be012.firebaseapp.com",
  projectId: "netflix-gpt-be012",
  storageBucket: "netflix-gpt-be012.appspot.com",
  messagingSenderId: "730124086076",
  appId: "1:730124086076:web:988b1f0b23dd7842e5cc39",
  measurementId: "G-0S1ENZBVY8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();