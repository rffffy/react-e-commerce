import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyBzxDR9vdXCFGeeG4oWEWQGTerpggArZN4",
	authDomain: "react-e-commerce-db.firebaseapp.com",
	databaseURL: "https://react-e-commerce-db.firebaseio.com",
	projectId: "react-e-commerce-db",
	storageBucket: "",
	messagingSenderId: "656156615805",
	appId: "1:656156615805:web:9f9492161c62a042207d14"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
