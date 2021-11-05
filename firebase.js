// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAwhT6ZOVaLJS3kwrInuKMKReRghHr5OqQ",
  authDomain: "airbnb-clone-fda84.firebaseapp.com",
  projectId: "airbnb-clone-fda84",
  storageBucket: "airbnb-clone-fda84.appspot.com",
  messagingSenderId: "655012544788",
  appId: "1:655012544788:web:32f466c201e66cb91c4201"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { app, auth, provider, storage};
export default db;