// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBe3Tf7Ru10WlUwHyk9ngTcpYQP9j6yLgs",
  authDomain: "app-restaurant-3c896.firebaseapp.com",
  projectId: "app-restaurant-3c896",
  storageBucket: "app-restaurant-3c896.appspot.com",
  messagingSenderId: "323529056935",
  appId: "1:323529056935:web:2e04dbac744af505ca7182"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); 


