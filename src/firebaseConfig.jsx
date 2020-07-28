import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkskLw6jF_OUQdnT_qIjm9RMFv1UZsf90",
  authDomain: "istanbul-capstone-sdp.firebaseapp.com",
  databaseURL: "https://istanbul-capstone-sdp.firebaseio.com",
  projectId: "istanbul-capstone-sdp",
  storageBucket: "istanbul-capstone-sdp.appspot.com",
  messagingSenderId: "1063575986913",
  appId: "1:1063575986913:web:3bdafb89139dc5fc9c4da0",
  measurementId: "G-0JTC6QVEMJ",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
