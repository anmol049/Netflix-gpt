// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhd_ClMRhKK6-nDEI0AE0puABYeOvPdcs",
  authDomain: "netflixgpt-1cea6.firebaseapp.com",
  projectId: "netflixgpt-1cea6",
  storageBucket: "netflixgpt-1cea6.appspot.com",
  messagingSenderId: "704981223872",
  appId: "1:704981223872:web:840a0ec6bb58485071e025",
  measurementId: "G-C6XEBMYSQL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();