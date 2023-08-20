// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXlQFGms3-P1UeBcQmOIO8VcaKqVD-AQc",
  authDomain: "ecommerce-chocosugar.firebaseapp.com",
  projectId: "ecommerce-chocosugar",
  storageBucket: "ecommerce-chocosugar.appspot.com",
  messagingSenderId: "921362312143",
  appId: "1:921362312143:web:ccc6a92abb7bbc616300ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

