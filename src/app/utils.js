import React, { useEffect, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { isLoaded, isEmpty } from 'react-redux-firebase'

import { useLocation } from "react-router-dom";

import { loadGapi, setGapiLoaded, setGapiError, clearGapi } from './gapi'

// Wrapper to wait for auth.. display loading splash
export const AuthIsLoaded = ({ children }) => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.firebase.auth, shallowEqual)

  const events = {
    setGapiLoaded: () => dispatch(setGapiLoaded()),
    setGapiError: () => dispatch(setGapiError()),
    clearGapi: () => dispatch(clearGapi()),
  }

  if (isLoaded(auth) && !isEmpty(auth)) {
    // check if gapi is already loaded
    const { gapi } = window
    if (Object.keys(gapi).indexOf('loaded_0') === -1 || (gapi.client && !gapi.client.getToken())) {
      loadGapi(auth, events)
    // if loaded then check for a valid token
  } else if (gapi.client && gapi.client.getToken().access_token !== auth.stsTokenManager.accessToken) {
      console.log('Access Tokens dont match!')
      loadGapi(auth, events)
    }
  }

  return !isLoaded(auth) ?
    <div>splash screen...</div>
    : children
}

// Async Local State
export const useAsyncLocalState = (loader) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [payload, setPayload] = useState(null);
  useEffect(() => {
    const load = async () => {
      try {
        setIsLoading(true);
        setLoadError(false);
        const result = await loader();
        setPayload(result);
        setIsLoading(false);
      } catch (e) {
        setLoadError(true);
        setIsLoading(false);
      }
    };
    load();
  }, [loader]);
return { isLoading, loadError, payload };
};

// Reset Scrol Height on Navigation
export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
