import firebase from 'firebase/app'; 
import 'firebase/firestore'; 
import 'firebase/auth'; 

const config = {
    apiKey: "AIzaSyA8vZhxE2cvqTGTwt5EWgekvSiQGaEW86g",
    authDomain: "crwn-db-55455.firebaseapp.com",
    databaseURL: "https://crwn-db-55455.firebaseio.com",
    projectId: "crwn-db-55455",
    storageBucket: "crwn-db-55455.appspot.com",
    messagingSenderId: "957662573273",
    appId: "1:957662573273:web:99bcda44313474a08144c8",
    measurementId: "G-RLJD1HX53Z"
}; 

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return; 

    console.log(firestore.doc('users/foweijvo;jw')); 
}

firebase.initializeApp(config); 

export const auth = firebase.auth(); 
export const firestore = firebase.firestore(); 

const provider = new firebase.auth.GoogleAuthProvider(); 
provider.setCustomParameters({propmt: 'select_account'}); 
export const signInWithGoogle = () => auth.signInWithPopup(provider); 

export default firebase; 
