import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBN7VwajBdum6dwGnLQ3BBxLdYzUaljj7E",
  authDomain: "react-firebase-todo-d35b6.firebaseapp.com",
  projectId: "react-firebase-todo-d35b6",
  storageBucket: "react-firebase-todo-d35b6.appspot.com",
  messagingSenderId: "625756701942",
  appId: "1:625756701942:web:03a3218a7b1eff75f0d8d7",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
