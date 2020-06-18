// import firebase from "firebase/app";
import * as firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";
// import { functions } from "firebase";

const settings = {timestampsInSnapshots: true};

const firebaseConfig = {
    apiKey: "AIzaSyB9GEjukQsQ99VgOA7EqxBedraANYKuhdk",
    authDomain: "web-dev-guide.firebaseapp.com",
    databaseURL: "https://web-dev-guide.firebaseio.com",
    projectId: "web-dev-guide",
    storageBucket: "web-dev-guide.appspot.com",
    messagingSenderId: "159354667168",
    appId: "1:159354667168:web:0be3581be4641ce1cf89c5",
    measurementId: "G-MXMSRH6TG9"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();

    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};

firebase.firestore().settings(settings);
export default firebase;