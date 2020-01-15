import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDTUtw5seDRJPD_GQh0S5-FJ-QemDPce04",
  authDomain: "crwn-db-db8f6.firebaseapp.com",
  databaseURL: "https://crwn-db-db8f6.firebaseio.com",
  projectId: "crwn-db-db8f6",
  storageBucket: "crwn-db-db8f6.appspot.com",
  messagingSenderId: "52438309848",
  appId: "1:52438309848:web:baa6bf2c8c55b4233b30ad",
  measurementId: "G-PKY2GFEFRL"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
