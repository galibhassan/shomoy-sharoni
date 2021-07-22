import firebase from "firebase/app";
import "firebase/database"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIzIAEuu-CmhvPZOx57ZdAvai7tRhSjKw",
  authDomain: "shomoy-sharoni-demo.firebaseapp.com",
  projectId: "shomoy-sharoni-demo",
  storageBucket: "shomoy-sharoni-demo.appspot.com",
  messagingSenderId: "1062987285533",
  appId: "1:1062987285533:web:b4e034cd99b646a7f0f2f4",
  measurementId: "G-FMYYPN0R8K",
};

firebase.initializeApp(firebaseConfig);

export default firebase