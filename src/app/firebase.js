// import firebase from 'firebase'
import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/messaging';

import { createFirestoreInstance } from 'redux-firestore'

// base firebase config
const firebaseConfig = {
  apiKey: (process.env.REACT_APP_FIREBASE_API_KEY || null),
  authDomain: (process.env.REACT_APP_FIREBASE_AUTH || null),
  databaseURL: (process.env.REACT_APP_FIREBASE_DATABASE || null),
  projectId: (process.env.REACT_APP_FIREBASE_PROJECT_ID || null),
  storageBucket: (process.env.REACT_APP_FIREBASE_STORAGE || null),
  messagingSenderId: (process.env.REACT_APP_FIREBASE_MESSAGING_ID || null),
  appId: (process.env.REACT_APP_FIREBASE_APP_ID || null),
  measurementId: (process.env.REACT_APP_FIREBASE_MEASUREMENT_ID || null)
};

firebase.initializeApp(firebaseConfig)

// react-redux-firebase config to use firestore for users auth
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
}

export const rrfProps = {
  firebase,
  config: rrfConfig,
  createFirestoreInstance
}
