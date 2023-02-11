import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAcd6gaHf1slFQEHRxpFK3-lMXA7DZipGc",
  authDomain: "line-clone-4d652.firebaseapp.com",
  projectId: "line-clone-4d652",
  storageBucket: "line-clone-4d652.appspot.com",
  messagingSenderId: "548138763803",
  appId: "1:548138763803:web:5c994e3a391c469fb6dabe",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
