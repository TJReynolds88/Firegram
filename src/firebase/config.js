import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCDh3fzvV6m_3V4QgPfCcRzj3Swzu6Tegs",
    authDomain: "firegram-61ba9.firebaseapp.com",
    databaseURL: "https://firegram-61ba9.firebaseio.com",
    projectId: "firegram-61ba9",
    storageBucket: "firegram-61ba9.appspot.com",
    messagingSenderId: "409092703620",
    appId: "1:409092703620:web:0cc5f8674200edc534c9d1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFireStore = firebase.firestore();

  export { projectStorage, projectFireStore};
  