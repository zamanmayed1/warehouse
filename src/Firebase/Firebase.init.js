// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJD0MHKsVj3HxCZhC6xYLp2ZHJLWKn-eo",
  authDomain: "stockroom-97369.firebaseapp.com",
  projectId: "stockroom-97369",
  storageBucket: "stockroom-97369.appspot.com",
  messagingSenderId: "162980668493",
  appId: "1:162980668493:web:799f7e2ef75bb8ec6be804"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth 