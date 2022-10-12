import firebase from "firebase";

// CONFIGURE FIREBASE AS YOU LIKE

const firebaseConfig = {
  // CONFIG GOES HERE
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
