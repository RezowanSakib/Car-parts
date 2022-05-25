// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBv_2FboHxrjnLpHc0PVuCeGk9q9aOgSK0",
  authDomain: "cars-parts-b9fb2.firebaseapp.com",
  projectId: "cars-parts-b9fb2",
  storageBucket: "cars-parts-b9fb2.appspot.com",
  messagingSenderId: "824757855665",
  appId: "1:824757855665:web:0a8b224c814730e09bc990",
  measurementId: "G-100SJ3YCD9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth;
