import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyCyIsHqUPAWLV5eXLTWZMlKvj557Snz_jU",
	authDomain: "mymoney-d6d4e.firebaseapp.com",
	projectId: "mymoney-d6d4e",
	storageBucket: "mymoney-d6d4e.appspot.com",
	messagingSenderId: "829041142451",
	appId: "1:829041142451:web:3f86e8923ab237b98bdec6",
};
//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

//init TimeStamp

const timeStamp = firebase.firestore.Timestamp;
export { projectFirestore, projectAuth, timeStamp };
