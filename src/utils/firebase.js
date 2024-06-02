// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCC_bqEicIZhbaw37a5rUhAH5uBdTE1i8w",
  authDomain: "netflix-gemini-552f7.firebaseapp.com",
  projectId: "netflix-gemini-552f7",
  storageBucket: "netflix-gemini-552f7.appspot.com",
  messagingSenderId: "339977614524",
  appId: "1:339977614524:web:3d437c7cc815bc4cb70cb9",
  measurementId: "G-27037V24WN"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
