import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA8olYWw_Y3RGeYtir9jq9ONhAgL1nr29E",
  authDomain: "ecommerce-project-e010f.firebaseapp.com",
  databaseURL: "https://ecommerce-project-e010f.firebaseio.com",
  projectId: "ecommerce-project-e010f",
  storageBucket: "ecommerce-project-e010f.appspot.com",
  messagingSenderId: "873740052957",
  appId: "1:873740052957:web:b0782caed55f485aefee34",
  measurementId: "G-3X7JC54HSQ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
