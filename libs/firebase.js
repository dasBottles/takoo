import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCZqd3fqrd_nWSw2p1XxCY5GgJcKnwRv50",
    authDomain: "bun-bun-b53a4.firebaseapp.com",
    projectId: "bun-bun-b53a4",
    storageBucket: "bun-bun-b53a4.appspot.com",
    messagingSenderId: "308028422937",
    appId: "1:308028422937:web:f22a3f8f841095e1246388",
    measurementId: "G-YRB6Y7592C"
  };  
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();