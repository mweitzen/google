import { configureStore } from '@reduxjs/toolkit';

import {
  firebaseReducer
} from 'react-redux-firebase'

import { firestoreReducer } from 'redux-firestore'

// Import Reducers
import gapiReducer from './gapi'

export default configureStore({
  reducer: {
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    gapi: gapiReducer,
  },
});
