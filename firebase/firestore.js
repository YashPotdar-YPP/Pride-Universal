import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import "firebase/compat/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD6WYKD9no-EPsEbrRDl1FKe0DbI_wSSPY",
  authDomain: "pride-universal-775e3.firebaseapp.com",
  databaseURL: "https://pride-universal-775e3-default-rtdb.firebaseio.com",
  projectId: "pride-universal-775e3",
  storageBucket: "pride-universal-775e3.appspot.com",
  messagingSenderId: "1098381574531",
  appId: "1:1098381574531:web:d6c438ccb5feccf0d436b6",
  measurementId: "G-7MHHXFSRBT",
};

const app = firebase.initializeApp(firebaseConfig)
const db = getFirestore(app)

export {app , db , firebaseConfig};
