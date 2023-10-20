// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRz4NsLkbW2EJBAV52twnypUnLwan8JE0",
  authDomain: "authentication-61299.firebaseapp.com",
  projectId: "authentication-61299",
  storageBucket: "authentication-61299.appspot.com",
  messagingSenderId: "487152762064",
  appId: "1:487152762064:web:2dcb56286dfb8aa7e072d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth