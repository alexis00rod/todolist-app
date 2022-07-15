import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCLwec1lzWLOBtypc0Wa_pxH0Kdk6CdjiA",
    authDomain: "taskmanagerapp-19a8a.firebaseapp.com",
    projectId: "taskmanagerapp-19a8a",
    storageBucket: "gs://taskmanagerapp-19a8a.appspot.com",
    messagingSenderId: "991889875333",
    appId: "1:991889875333:web:1b6b1d9ffb790679a164ec"
};

export const app = initializeApp(firebaseConfig);