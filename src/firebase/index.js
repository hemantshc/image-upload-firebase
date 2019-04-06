import firebase from 'firebase/app';
import 'firebase/storage';


// Initialize Firebase
var config = {
    apiKey: "AIzaSyCbQG7O1gxMNbzN3CjCHt-2ELafP7SuYLk",
    authDomain: "firebasics-45330.firebaseapp.com",
    databaseURL: "https://firebasics-45330.firebaseio.com",
    projectId: "firebasics-45330",
    storageBucket: "firebasics-45330.appspot.com",
    messagingSenderId: "1094321756615"
  };
  firebase.initializeApp(config);

  const storage = firebase.storage();

  export {
      storage , firebase as default
  }