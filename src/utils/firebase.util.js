// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8IkvvLxT1_QqZd0jq_IUMtIgSp3nVzPw",
  authDomain: "crox-store-db.firebaseapp.com",
  projectId: "crox-store-db",
  storageBucket: "crox-store-db.appspot.com",
  messagingSenderId: "470115305841",
  appId: "1:470115305841:web:62dff84e4cc1c595a9ced0",
};

// Initialize Firebase
const firabaseApp = initializeApp(firebaseConfig);
const googleAuthProvider = new GoogleAuthProvider();
googleAuthProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth(firabaseApp);
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleAuthProvider);
export const db = getFirestore();
export const createUserDocFromAuth = async (userAuth, additionalInfo) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};


export const signInWithEmailPassword = async (email,password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password)
}


export const signoutUser = async () => {
    return await signOut(auth);
}
  
export const authStateChanged = (callback) => {
  return onAuthStateChanged(auth, callback)
}