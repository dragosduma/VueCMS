import firebase from "firebase/compat/app"
import "firebase/compat/firestore"

firebase.initializeApp({
    apiKey: "AIzaSyBPRoglBGXs-MKKuvjQ9lY0l1Tm6woxuNk",
    authDomain: "vuetify-cms-8412a.firebaseapp.com",
    projectId: "vuetify-cms-8412a",
    storageBucket: "vuetify-cms-8412a.appspot.com",
    messagingSenderId: "426110387009",
    appId: "1:426110387009:web:53cc1c0af419aacfe497c0"
  });
const db = firebase.firestore();

export default db;

 