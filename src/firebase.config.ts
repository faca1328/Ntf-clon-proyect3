import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAhjvb9e15FAqTL4aWEeiD9fFaHPqH6ppg",
  authDomain: "netflix-clone-proyect3.firebaseapp.com",
  projectId: "netflix-clone-proyect3",
  storageBucket: "netflix-clone-proyect3.appspot.com",
  messagingSenderId: "844953400146",
  appId: "1:844953400146:web:f562427c0c11d6230fc08b",
  measurementId: "G-L57S548ZWS"
};

// Initialize Firebase


export const app = firebase.initializeApp(firebaseConfig);

//permite autenticar
export const auth = getAuth(app)

export const db = getFirestore(app);




