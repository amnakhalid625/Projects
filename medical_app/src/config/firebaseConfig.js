import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD1SLWRaNw5w5csbXfc5gHhF9aK-6SvqIQ",
    authDomain: "insta-clone-c5510.firebaseapp.com",
    projectId: "insta-clone-c5510",
    storageBucket: "insta-clone-c5510.firebasestorage.app",
    messagingSenderId: "1095347891232",
    appId: "1:1095347891232:web:c90ad173b372c1415da045"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }; 
