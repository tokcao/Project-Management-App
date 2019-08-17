import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC1CyJs8kiPvZ39XUxBIgsLWuqgJk-Oz6I",
    authDomain: "net-ninja-marioplan-8066f.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-8066f.firebaseio.com",
    projectId: "net-ninja-marioplan-8066f",
    storageBucket: "",
    messagingSenderId: "160086492295",
    appId: "1:160086492295:web:e091fa824a0f8a09"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;