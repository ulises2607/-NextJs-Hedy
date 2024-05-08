import firebase from "./firebase";
import {
  getAuth,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const registerWithEmail = async (email, password) => {
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return { user };
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return {
        error: errorCode + ": " + errorMessage,
      };
    });
};
