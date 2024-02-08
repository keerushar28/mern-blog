// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-e289a.firebaseapp.com",
  projectId: "mern-blog-e289a",
  storageBucket: "mern-blog-e289a.appspot.com",
  messagingSenderId: "884615808775",
  appId: "1:884615808775:web:2460ce4f7ed5d7456fa7a2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);