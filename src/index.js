import React from 'react';
import { render } from 'react-dom';

/* STYLING */
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './app/theme'

/* REDUX STORE */
import store from './app/store';
import { Provider } from 'react-redux';
import {
  ReactReduxFirebaseProvider
} from 'react-redux-firebase'

/* FIREBASE CONFIG */
import { rrfProps } from './app/firebase'

/* SERVICE WORKER */
import * as serviceWorker from './serviceWorker';

/* APP */
import App from './App';
import { AuthIsLoaded } from './app/utils'

render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps} dispatch={store.dispatch} >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AuthIsLoaded>
            <App />
          </AuthIsLoaded>
        </ThemeProvider>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
