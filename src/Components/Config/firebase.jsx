// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtEd8GybUCqraPw1XDKpjnffAMX1Nm22I",
  authDomain: "dashbyte-ddee0.firebaseapp.com",
  projectId: "dashbyte-ddee0",
  storageBucket: "dashbyte-ddee0.appspot.com",
  messagingSenderId: "649632368363",
  appId: "1:649632368363:web:f2d8979875dc04b53b20ae",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
