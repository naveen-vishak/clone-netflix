// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQP9qtIqUZhK7DtYCrDHHaPiAWCg28TlU",
  authDomain: "clone-netflix-backend-ac34a.firebaseapp.com",
  projectId: "clone-netflix-backend-ac34a",
  storageBucket: "clone-netflix-backend-ac34a.appspot.com",
  messagingSenderId: "198491415212",
  appId: "1:198491415212:web:95929c39754d7aacd8b509",
  measurementId: "G-ECCL35E0LW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);