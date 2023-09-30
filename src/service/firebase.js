import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app";

import {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
  FIREBASE_MEASUREMENT_ID,
} from "config/env";

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId: FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

// auth
const firebaseAuth = getAuth(app);
const firebaseGoogleAuthProvider = new GoogleAuthProvider();

export async function signInWithGooglePopUp() {
  try {
    const { user } = await signInWithPopup(
      firebaseAuth,
      firebaseGoogleAuthProvider
    );

    const userCredentials = {
      username: user.displayName || "",
      email: user.email || "",
      profilePicture: user.photoURL || "",
    };

    return userCredentials;
  } catch (error) {
    console.log(error);
    throw Error(error);
  }
}
