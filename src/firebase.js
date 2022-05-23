import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCb9nNoPjQs9p-kc5-wpvszmSDB6bX4pts",
  authDomain: "clone-6993e.firebaseapp.com",
  projectId: "clone-6993e",
  storageBucket: "clone-6993e.appspot.com",
  messagingSenderId: "816233656496",
  appId: "1:816233656496:web:b73ba1b3ede2f516364b75",
  measurementId: "G-12FP3MMSCH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
