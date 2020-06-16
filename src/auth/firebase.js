import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

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

  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  export const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
  };