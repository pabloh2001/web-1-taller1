// Import the functions you need from the SDKs you need
import firebase from "firebase";
import 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyoZtFkIGjw-uzm7fKjda73Jn77vQwKX4",
  authDomain: "web-1-519f2.firebaseapp.com",
  projectId: "web-1-519f2",
  storageBucket: "web-1-519f2.appspot.com",
  messagingSenderId: "157918825352",
  appId: "1:157918825352:web:d05c18b104317e4950483d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export{firebase}