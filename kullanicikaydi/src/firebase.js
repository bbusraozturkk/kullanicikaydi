
// firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCebjrlOACe_I0G18YtmQTjbZFJKpq-Apk",
    authDomain: "posts-app-61c5b.firebaseapp.com",
    projectId: "posts-app-61c5b",
    storageBucket: "posts-app-61c5b.appspot.com",
    messagingSenderId: "50570102239",
    appId: "1:50570102239:web:8663b9b9094d74ccdbf06a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const db = getFirestore(app);


export { auth, firestore, db };

