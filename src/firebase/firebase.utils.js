import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBir1XrdUoAcErYVKxxYw53uhRDx1gViRk",
  authDomain: "crown-db-natkes.firebaseapp.com",
  projectId: "crown-db-natkes",
  storageBucket: "crown-db-natkes.appspot.com",
  messagingSenderId: "364777943193",
  appId: "1:364777943193:web:a93553d5516dc9de3cc808",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
