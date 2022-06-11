// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOddwRbXAF-Om70hfvVbpRTbaQ8fJX88w",
  authDomain: "rifat-gadget-front-to-back.firebaseapp.com",
  projectId: "rifat-gadget-front-to-back",
  storageBucket: "rifat-gadget-front-to-back.appspot.com",
  messagingSenderId: "130627436724",
  appId: "1:130627436724:web:195ad039fbb09a885657e1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
