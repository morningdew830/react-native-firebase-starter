// import and configure firebase
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAM7zJHcl_q3yv2xfvQO8bkBS7pOEptp4k",
  authDomain: "newapp-f22cf.firebaseapp.com",
  databaseURL: "https://newapp-f22cf.firebaseio.com",
  projectId: "newapp-f22cf",
  storageBucket: "newapp-f22cf.appspot.com",
  messagingSenderId: "755393795632"
}
export const firebaseApp = firebase.initializeApp(firebaseConfig)
