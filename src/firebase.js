// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyDjyp8B56Y3rKq3TzHjpuJJwXMlJtNUj2k",
  authDomain: "challange-96539.firebaseapp.com",
  projectId: "challange-96539",
  storageBucket: "challange-96539.appspot.com",
  messagingSenderId: "500197024656",
  appId: "1:500197024656:web:76056d0a74ad2cff9e4915",
  measurementId: "G-YY8MZQN9WB"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};