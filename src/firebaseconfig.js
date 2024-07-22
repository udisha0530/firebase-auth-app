// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMIPPeGeHfeB_NE1xvk8_lEQV6zRoBb_I",
  authDomain: "user-authentication-6f725.firebaseapp.com",
  projectId: "user-authentication-6f725",
  storageBucket: "user-authentication-6f725.appspot.com",
  messagingSenderId: "531029343762",
  appId: "1:531029343762:web:22bd7fa0d82a6cf09d22cb",
  measurementId: "G-B14J1Q44VB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth };