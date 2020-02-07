import firebase from "firebase";
import "firebase/firestore";
import { firebaseCredentials } from "./credentials";

firebase.initializeApp(firebaseCredentials);

const provider = new firebase.auth.FacebookAuthProvider();
const db = firebase.firestore();
const auth = firebase.auth()
const storage = firebase.storage();

export const fbLogin = () => {
  return auth.signInWithPopup(provider)
}

export const getUser = userId => {
  return db.collection("hasnainUsers").doc(userId).get()
}

export const setUser = (userId, payload) => {
  return db.collection("hasnainUsers").doc(userId).set(payload, { merge: true });
}

export const uploadImages = (files) => {
  const res = Promise.all(files.map(file => {
    const fileName = Math.round(Math.random() * 1000000);
    return new Promise((resolve, reject) => {
      storage
        .ref()
        .child("/images/" + fileName + ".jpg")
        .put(file).then(() => {
          storage
            .ref()
            .child("/images/" + fileName + ".jpg")
            .getDownloadURL()
            .then(uri => {
              resolve(uri);
            });
        })
    })
  }))
  return res
}

export const logout = () => {
  return auth.signOut()
}