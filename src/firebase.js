// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
// import { getFirestore } from "firebase/firestore";x
import  { getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBp1CVYUruLUo14GnP5XGpuqXvU9Yp171E",
  authDomain: "salus-a4f1e.firebaseapp.com",
  projectId: "salus-a4f1e",
  storageBucket: "salus-a4f1e.appspot.com",
  messagingSenderId: "788536929524",
  appId: "1:788536929524:web:c052461d057dcffdaac2a1",
  measurementId: "G-9V3TT46RHF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage= getStorage(app)
export const db = getFirestore(app)