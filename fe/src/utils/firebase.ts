// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqELNIYeOu00oAMKMW8VII61hB29g3HNI",
  authDomain: "app-restaurante-29c84.firebaseapp.com",
  projectId: "app-restaurante-29c84",
  storageBucket: "app-restaurante-29c84.appspot.com",
  messagingSenderId: "394883616578",
  appId: "1:394883616578:web:1b167d9ecff09b7a4c42db"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword, signOut,  };
