import * as firebase from "firebase/app";
import "firebase/firestore";

// const firebase = require("firebase");
// // Required for side-effects
// require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyArxT63U8FxLjPJ3pPMLTRmPWmpzBQZEC8",
  authDomain: "e-commerce-1205e.firebaseapp.com",
  databaseURL: "https://e-commerce-1205e.firebaseio.com",
  projectId: "e-commerce-1205e",
  storageBucket: "e-commerce-1205e.appspot.com",
  messagingSenderId: "1074092684079",
  appId: "1:1074092684079:web:c597571bea55790d90e7da",
  measurementId: "G-2JKPQN1DM9"
};
// firebase.initializeApp(firebaseConfig);
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
var fireDataBase = firebase.firestore();

export { fireDataBase };
