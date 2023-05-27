import { initializeApp } from "firebase/app";

// ? database
import { getFirestore } from "firebase/firestore";

// ? authentication
import { getAuth } from "firebase/auth";

// storage
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDTfTp7zbRNODmRc_z8NAbEkpsAmrmhHdA",
  authDomain: "resumer-c05fd.firebaseapp.com",
  projectId: "resumer-c05fd",
  storageBucket: "resumer-c05fd.appspot.com",
  messagingSenderId: "247329019468",
  appId: "1:247329019468:web:ef88c991e47a81f69f06e9",
};

// ? firebase configuration
const app = initializeApp(firebaseConfig);

// ? exports
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, auth, storage };
