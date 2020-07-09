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
    // console.log(userAuth); 

    const userRef = firestore.doc(`users/${userAuth.uid}`); 
    const collectionRef = firestore.collection('users'); 
    console.log(collectionRef); 
    // console.log(userRef); 
    
    const snapShot = await userRef.get(); 
    const collectionSnapshot = await collectionRef.get(); 
    console.log(collectionSnapshot.docs.map(doc => doc.data())); 
    // console.log(snapShot); 

    if(!snapShot.exists){
        const {displayName, email} = userAuth; 
        const createdAt = new Date(); 

        try{
            await userRef.set({
                displayName, 
                email, 
                createdAt, 
                ...additionalData
            }); 
        } catch(error){
            console.log('error creating user', error.message); 
        } 

        console.log('called'); 
    }

    return userRef; 
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey); 
    
    const batch = firestore.batch(); 
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc(); 
        batch.set(newDocRef, obj); 
    })

    console.log('caaa'); 
    return await batch.commit(); 

}

export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(doc => {
        const {title, items} = doc.data(); 

        return{
            routeName: encodeURI(title.toLowerCase()), 
            id: doc.id, 
            title, 
            items
        }
    })
    
    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection; 
        return accumulator; 
    }, {}); 

}; 


firebase.initializeApp(config); 

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe(); 
            resolve(userAuth); 
        }, reject)
    }); 
}

export const auth = firebase.auth(); 
export const firestore = firebase.firestore(); 

export const googleProvider = new firebase.auth.GoogleAuthProvider(); 
googleProvider.setCustomParameters({propmt: 'select_account'}); 
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider); 

export default firebase; 
