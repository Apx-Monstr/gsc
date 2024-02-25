import { initializeApp, getApps } from "firebase/app";
// const firebaseConfig = {
//     apiKey: "AIzaSyC3IRbmbwoxyZdwt6I6iUdVUuBGp0pRGXg",
//     authDomain: "udonate-gsc.firebaseapp.com",
//     databaseURL: "https://udonate-gsc-default-rtdb.firebaseio.com",
//     projectId: "udonate-gsc",
//     storageBucket: "udonate-gsc.appspot.com",
//     messagingSenderId: "557505037201",
//     appId: "1:557505037201:web:9c961924c4ae0146d89030",
//     measurementId: "G-0HM628LN9N"
//   };

const firebaseConfig = {
  apiKey: "AIzaSyCrxoy6eX7p-3IIrbPmVy-YBX3z7ubx_j0",
  authDomain: "gsc-udonate.firebaseapp.com",
  databaseURL: "https://gsc-udonate-default-rtdb.firebaseio.com",
  projectId: "gsc-udonate",
  storageBucket: "gsc-udonate.appspot.com",
  messagingSenderId: "419322842985",
  appId: "1:419322842985:web:4175f345f1c5d0f814b7f8",
  measurementId: "G-QQBKN7JP93"
};

// Initialize Firebase
let fbApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default fbApp;