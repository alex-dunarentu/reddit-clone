import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDJRhqfo2x680YxaQeZzZx2SaQtrniapp8",
  authDomain: "reddit-clone-a1da3.firebaseapp.com",
  databaseURL: "https://reddit-clone-a1da3.firebaseio.com",
  projectId: "reddit-clone-a1da3",
  storageBucket: "reddit-clone-a1da3.appspot.com",
  messagingSenderId: "658370725778",
  appId: "1:658370725778:web:85c2a4bbb558f09148634b",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
