
import { initializeApp } from "firebase/app";

import {getFirestore} from '@firebase/firestore'
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAgHO8dJuCTnU-t__rHsa2-2tPcnszNQCU",
  authDomain: "blog-nextjs-7e926.firebaseapp.com",
  projectId: "blog-nextjs-7e926",
  storageBucket: "blog-nextjs-7e926.appspot.com",
  messagingSenderId: "175914465762",
  appId: "1:175914465762:web:a04da7483c276378bc61bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)