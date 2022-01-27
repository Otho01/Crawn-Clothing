import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyDxUMY8sUpOMAoxEyHo41ONilzjL2woWHk',
  authDomain: 'crown-db-d4416.firebaseapp.com',
  projectId: 'crown-db-d4416',
  storageBucket: 'crown-db-d4416.appspot.com',
  messagingSenderId: '887003208895',
  appId: '1:887003208895:web:778f8f55a0ad2c72953a0a',
  measurementId: 'G-6TGCRVN7D3',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth
    .signInWithPopup(googleProvider)
    .then((res) => {
      console.log(res.user);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export default firebase;
