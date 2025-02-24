// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEEjiDP4WdzcH6zX20RDrYkAcq_tWeu44",
  authDomain: "grand-slam-app.firebaseapp.com",
  projectId: "grand-slam-app",
  storageBucket: "grand-slam-app.firebasestorage.app",
  messagingSenderId: "321511751564",
  appId: "1:321511751564:web:9606a64b44f52e492fa0a9",
  measurementId: "G-7ZQMJ3V7LM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};
