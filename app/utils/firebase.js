import firebase from "firebase/app";
import * as firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC4-UnOc0KLWxq3CjR8kWWwlqgwyo4v0pY",
  authDomain: "supper-6ff67.firebaseapp.com",
  projectId: "supper-6ff67",
  storageBucket: "supper-6ff67.appspot.com",
  messagingSenderId: "256969806368",
  appId: "1:256969806368:web:6af00f1602499556802245"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);