// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, listAll } from "firebase/storage";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAyadusqGoA-SatOWCUxwRA1ax7irh_mg",
  authDomain: "archiade-58dbc.firebaseapp.com",
  projectId: "archiade-58dbc",
  storageBucket: "archiade-58dbc.appspot.com",
  messagingSenderId: "727156534615",
  appId: "1:727156534615:web:b581790364ef253177e212",
  measurementId: "G-9QMT183LEK",
  storageBucket: "gs://archiade-58dbc.appspot.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);



export { storage };
