import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyT-4E8_xhlh6_sxCTHSw8DfKTuufGAAg",
  authDomain: "cosmetic-canvas-c79c9.firebaseapp.com",
  projectId: "cosmetic-canvas-c79c9",
  storageBucket: "cosmetic-canvas-c79c9.firebasestorage.app",
  messagingSenderId: "353823594570",
  appId: "1:353823594570:web:33dbd198982a8f5960aeb3",
  measurementId: "G-DJJM8W7NRX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Firestore
export const db = getFirestore(app);

export default app;
