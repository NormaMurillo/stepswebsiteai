// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaFE8Bfy7_oSJzQVIV6HwzxyscOEai4lw",
  authDomain: "stepswebsiteai.firebaseapp.com",
  projectId: "stepswebsiteai",
  storageBucket: "stepswebsiteai.firebasestorage.app",
  messagingSenderId: "675727315819",
  appId: "1:675727315819:web:451aa945c33444ee65b22e",
  measurementId: "G-J0HSL5FD6V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);