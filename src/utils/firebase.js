// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBC33AxOXOv55CuUC17n6LzXgncIx1bQZE",
  authDomain: "flix-e1e0c.firebaseapp.com",
  projectId: "flix-e1e0c",
  storageBucket: "flix-e1e0c.appspot.com",
  messagingSenderId: "802500837873",
  appId: "1:802500837873:web:e51f83ba4afb749700c450",
  measurementId: "G-91CC8VH01H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()