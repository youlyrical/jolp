import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGxSwx7UQDF0bWrrcqNnF0KPxKcaPTl9M",
  authDomain: "usw-community.firebaseapp.com",
  projectId: "usw-community",
  storageBucket: "usw-community.firebasestorage.app",
  messagingSenderId: "808194801467",
  appId: "1:808194801467:web:beefd8ceb00ca42dc4c11e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;