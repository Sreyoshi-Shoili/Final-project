
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmzXh7RJj7_WSHUbwdP0SRBiegmyUmUbg",
  authDomain: "airbnb-it.firebaseapp.com",
  projectId: "airbnb-it",
  storageBucket: "airbnb-it.appspot.com",
  messagingSenderId: "489911684618",
  appId: "1:489911684618:web:fd9609d372aaed6eb659f3",
  measurementId: "G-PJG6SFEHXV"
};

// Initialize Firebase
export var app = initializeApp(firebaseConfig);
var analytics = getAnalytics(app);

