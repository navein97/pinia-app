// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4Xp6OZpT-GesbiJEDKFVnqhdRudhvN_g",
  authDomain: "pinia-app-72cd1.firebaseapp.com",
  databaseURL: "https://pinia-app-72cd1-default-rtdb.firebaseio.com",
  projectId: "pinia-app-72cd1",
  storageBucket: "pinia-app-72cd1.appspot.com",
  messagingSenderId: "173248412360",
  appId: "1:173248412360:web:7c2a281b6303be622e43fd",
  measurementId: "G-SLP8Z4P18L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
