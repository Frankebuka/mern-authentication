// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-37639.firebaseapp.com",
  projectId: "mern-auth-37639",
  storageBucket: "mern-auth-37639.appspot.com",
  messagingSenderId: "896458523964",
  appId: "1:896458523964:web:d0a108c53cca1bd9988a39",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
