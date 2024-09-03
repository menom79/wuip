import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyAUHfI3rzDRMwUhGdjwzPcd_6pNWLZHHt8",
    authDomain: "todo-cb00f.firebaseapp.com",
    projectId: "todo-cb00f",
    storageBucket: "todo-cb00f.appspot.com",
    messagingSenderId: "591949933854",
    appId: "1:591949933854:web:3bc78b6cb98e7b8d6bad0f",
    measurementId: "G-S2KLLL861V"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db, firebaseConfig };