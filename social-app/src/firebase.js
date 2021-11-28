import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAqIl8SAugvKhfKO-GrHW4PXjVSEVf7waY",
  authDomain: "kamu-48498.firebaseapp.com",
  projectId: "kamu-48498",
  storageBucket: "kamu-48498.appspot.com",
  messagingSenderId: "326747168619",
  appId: "1:326747168619:web:c630fdb770836a809b762e",
  measurementId: "G-C3GE36XTBD"
});
 const db = firebaseApp.firestore()
 const auth = firebase.auth()

 export {db, auth}