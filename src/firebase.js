// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// import { getFirestore } from "firebase/firestore";x
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXz07K96NhoB3Vbivbtu4z3lbMSkZN4rw",
  authDomain: "salus-92856.firebaseapp.com",
  projectId: "salus-92856",
  storageBucket: "salus-92856.appspot.com",
  messagingSenderId: "680563361394",
  appId: "1:680563361394:web:c9fefb9a2d1d68de78a4eb",
  measurementId: "G-6CZKFS2HR7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
