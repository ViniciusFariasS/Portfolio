import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6_YRj9v9XNlQqSydv8f58EQR9FQUnes4",
  authDomain: "portfolio-534b6.firebaseapp.com",
  projectId: "portfolio-534b6",
  storageBucket: "portfolio-534b6.appspot.com",
  messagingSenderId: "921520199230",
  appId: "1:921520199230:web:4de13bf7856383dd8ce36f"
};

export const app = initializeApp(firebaseConfig);

//inicializar firestore

export const db = getFirestore(app)