import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB393pvQHpH9sbwJPIvyYqcwR32EImL1A0",
  authDomain: "chatapp-fc83c.firebaseapp.com",
  projectId: "chatapp-fc83c",
  storageBucket: "chatapp-fc83c.appspot.com",
  messagingSenderId: "884608495265",
  appId: "1:884608495265:web:b00dba5f790f15df180ae0",
  measurementId: "G-3MR5N45NP9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app;