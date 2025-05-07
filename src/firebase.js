// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDrRA2wvWcBv6LsOnmg_VptGXsd0xj_BvQ",
  authDomain: "tnfp-filevault.firebaseapp.com",
  projectId: "tnfp-filevault",
  storageBucket: "tnfp-filevault.appspot.com",
  messagingSenderId: "228173390113",
  appId: "1:228173390113:web:e8863e55ef7d9eafd7de60",
  measurementId: "G-7FDTFG36GB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Export db so other files can use it
export { db };
