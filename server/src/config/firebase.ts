import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Paste your Firebase config here 👇
const firebaseConfig = {
    apiKey: "AIzaSyD-jh0YZ4oiRc0fWztxC0cGANRmO1gc5EI",
    authDomain: "afrigap-dbca1.firebaseapp.com",
    projectId: "afrigap-dbca1",
    storageBucket: "afrigap-dbca1.firebasestorage.app",
    messagingSenderId: "386040059320",
    appId: "1:386040059320:web:88ab533674293634c1eb4d",
    measurementId: "G-CLNPRESE9D"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
