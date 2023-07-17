import * as firebase from 'firebase'
import "firebase/firestore";
import "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyCt-fbHoeEfXsnvrvIJabzpMme7i0L0Cy0",
    authDomain: "rn-signal-clone-93b98.firebaseapp.com",
    projectId: "rn-signal-clone-93b98",
    storageBucket: "rn-signal-clone-93b98.appspot.com",
    messagingSenderId: "696632107558",
    appId: "1:696632107558:web:0f1b5083cc58292e927ce7"
  };


  let app;
  if(firebase.apps.length === 0)
  {
    app = firebase.initializeApp(firebaseConfig);
  }
  else {
      app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();

  export  { db, auth };