import firebase from "firebase";
import "firebase/firestore";
import { firebaseCredentials } from "./credentials";

firebase.initializeApp(firebaseCredentials);

const provider = new firebase.auth.FacebookAuthProvider();
const db = firebase.firestore();
const auth = firebase.auth()

export const fbLogin = () => {
  return auth.signInWithPopup(provider)
}

export const getUser = userId => {
  return db.collection("hasnainUsers").doc(userId).get()
}

export const setUser = (userId, payload) => {
  return db.collection("hasnainUsers").doc(userId).set(payload, { merge: true });
}