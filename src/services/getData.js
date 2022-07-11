import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCLwec1lzWLOBtypc0Wa_pxH0Kdk6CdjiA",
    authDomain: "taskmanagerapp-19a8a.firebaseapp.com",
    projectId: "taskmanagerapp-19a8a",
    storageBucket: "taskmanagerapp-19a8a.appspot.com",
    messagingSenderId: "991889875333",
    appId: "1:991889875333:web:1b6b1d9ffb790679a164ec"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export const signupAuth = (email,password) => createUserWithEmailAndPassword(auth,email,password) 

export const loginAuth = (email,password) => signInWithEmailAndPassword(auth,email,password)

export const loginChanged = (setUser,setLoading) => onAuthStateChanged(auth, currentUser => {
    setUser(currentUser)
    setLoading(true)
})
export const logout = signOut(auth)

