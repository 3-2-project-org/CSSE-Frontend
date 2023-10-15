// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7658edJ5cKIciP83zgQjGwQlbU1ghNKo",
  authDomain: "csse-f2cba.firebaseapp.com",
  projectId: "csse-f2cba",
  storageBucket: "csse-f2cba.appspot.com",
  messagingSenderId: "104892525707",
  appId: "1:104892525707:web:a5fb9d035db810151af88e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
export default storage;