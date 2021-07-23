import firebase from "firebase/app";
import "firebase/database"
import { firebaseConfig } from "../../appConfig";

firebase.initializeApp(firebaseConfig);

export default firebase