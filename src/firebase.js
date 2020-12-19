// For Firebase JS SDK v7.20.0 and later, measurementId is optional

  import firebase from "firebase";

  const firebaseApp=firebase.initializeApp({

    apiKey: "AIzaSyBnEcGNO2wyZTSRad_O77-fgPjQ4RPVoY8",
    authDomain: "todo-app-afcab.firebaseapp.com",
    projectId: "todo-app-afcab",
    storageBucket: "todo-app-afcab.appspot.com",
    messagingSenderId: "845863980709",
    appId: "1:845863980709:web:b72bc808ca57562ae2874c",
    measurementId: "G-KYC0RF8SGC"
  });

  const db=firebaseApp.firestore();
  export default db;