// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVXw34XXYILB-gfyb3zki5UQgh0Elt1ss",
  authDomain: "sjekkminhybel.firebaseapp.com",
  projectId: "sjekkminhybel",
  storageBucket: "sjekkminhybel.appspot.com",
  messagingSenderId: "417442903401",
  appId: "1:417442903401:web:1b83c593d40ed1cb2f79f8",
  measurementId: "G-7Y9XVEVXG4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);


export { app, auth, db, storage };