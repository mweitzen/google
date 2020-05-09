import { createSlice } from '@reduxjs/toolkit'

const gapiConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  // Add docs for additional apis
  discoveryDocs: [/* Add Discovery Docs for the APIs you would like to use */],
  clientId: process.env.REACT_APP_GAPI_CLIENT_ID,
  // the scope is set by Firebase, this seems to just be necessary so it doesn't break
  scope: 'email profile'
}

// Load Gapi (Google API)
export const loadGapi = async (auth, events) => {
  events.clearGapi()
  let { gapi } = window
  gapi && await gapi.load('client', async () => {
      await gapi.client.init(gapiConfig)
      .then(data => {
        events.setGapiLoaded()
        console.log("Gapi Loaded!")
      })
      .catch(err => {
        events.setGapiError()
        console.log("Uh Oh!", err)
      })
  })
}

// create simple gapi reducer
const gapiSlice = createSlice({
  name: 'gapi',
  initialState: {
    loaded: false,
    error: false
  },
  reducers: {
    setGapiLoaded: (state, {payload}) => {
      state.loaded = true;
      state.error = false;
    },
    setGapiError: (state, {payload}) => {
      state.loaded = false;
      state.error = true;
    },
    clearGapi: (state) => {
      state.loaded = false;
      state.error = false
    }
  }
})

export const { setGapiLoaded, setGapiError, clearGapi } = gapiSlice.actions
export default gapiSlice.reducer
