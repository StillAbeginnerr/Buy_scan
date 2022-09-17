// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAffCbkQHsdMo4cuipwM-WN5TDmW67ir0E",
  authDomain: "pos-react-fb8fc.firebaseapp.com",
  projectId: "pos-react-fb8fc",
  storageBucket: "pos-react-fb8fc.appspot.com",
  messagingSenderId: "111169667882",
  appId: "1:111169667882:web:37751939bad107bb779453",
  measurementId: "G-92YV15TFSD"
};

export const app = initializeApp(firebaseConfig);