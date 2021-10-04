import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const config = {
  apiKey: "AIzaSyBMyFsIcvGAJvl009sIUMfHCmVYiLhlxRM",
  authDomain: "crwn-db-254c0.firebaseapp.com",
  projectId: "crwn-db-254c0",
  storageBucket: "crwn-db-254c0.appspot.com",
  messagingSenderId: "28489026834",
  appId: "1:28489026834:web:0d1ce4982f2162f3bf77cb",
  measurementId: "G-DGGYVLNJT3",
};

initializeApp(config);

export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider({ prompt: "select_account" });
export const signInWithGoogle = () => signInWithPopup(auth, provider);
