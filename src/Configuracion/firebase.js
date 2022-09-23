import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDO-U4FlKu-XD49Ole7tFSb74GTLnRoCIo",
    authDomain: "react2022-1c3b0.firebaseapp.com",
    projectId: "react2022-1c3b0",
    storageBucket: "react2022-1c3b0.appspot.com",
    messagingSenderId: "110772312638",
    appId: "1:110772312638:web:93272a3224cec0a2fc4f6f",
    measurementId: "G-1TVB36TMF4"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);

  export default firebase
