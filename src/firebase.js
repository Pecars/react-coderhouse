import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBTwMWdGZZ8YRIzB1b0qi17st06WkjiTP8",
  authDomain: "react-coderhouse-5c2cf.firebaseapp.com",
  projectId: "react-coderhouse-5c2cf",
  storageBucket: "react-coderhouse-5c2cf.appspot.com",
  messagingSenderId: "520931873254",
  appId: "1:520931873254:web:271ceb2de7d72323dec627"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

