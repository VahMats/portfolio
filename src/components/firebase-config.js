import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDU4GkqjF3aOUxd_adD39OEdFOvXX0q574",
    authDomain: "portfolio-5ee42.firebaseapp.com",
    projectId: "portfolio-5ee42",
    storageBucket: "portfolio-5ee42.appspot.com",
    messagingSenderId: "111326341107",
    appId: "1:111326341107:web:e887a559988cc99dd61486",
    measurementId: "G-BEN4CFSZBK"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);