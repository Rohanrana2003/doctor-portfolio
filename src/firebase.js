/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArP7ZTgLW2CXK7_dtQuSHOWajjZ0rE7vk",
  authDomain: "doctordevanshi-26c7b.firebaseapp.com",
  projectId: "doctordevanshi-26c7b",
  storageBucket: "doctordevanshi-26c7b.firebasestorage.app",
  messagingSenderId: "42949180676",
  appId: "1:42949180676:web:a440cb3a44637ace562451",
  measurementId: "G-2FDVSNGSL6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
