import { initializeApp, getApps } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyC3IRbmbwoxyZdwt6I6iUdVUuBGp0pRGXg",
    authDomain: "udonate-gsc.firebaseapp.com",
    databaseURL: "https://udonate-gsc-default-rtdb.firebaseio.com",
    projectId: "udonate-gsc",
    storageBucket: "udonate-gsc.appspot.com",
    messagingSenderId: "557505037201",
    appId: "1:557505037201:web:9c961924c4ae0146d89030",
    measurementId: "G-0HM628LN9N"
  };
// Initialize Firebase
let fbApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default fbApp;