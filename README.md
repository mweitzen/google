# Baseline React-Firebase-Material-GAPI Integration

Hoping to simplify the development of a web app built on Firebase for easy entry to Google services. Styled with Google's Material UI. Access to Google API Javascript Library with 'window.gapi'.

Bootstrapped from Create React App (Redux Template)

Using React Router to navigate. Routes are configured in './app/routeConfig

## Setup
In order to set this integration set up, make sure to update these values:

  1. git clone <repo>
  2. add .env to .gitignore
  3. update package.json name to proper app name
  4. update index.html with proper title and meta tags
  5. create firebase project on firebase.google.com
  6. set up proper credentials, oauth screens, and API access on google cloud
  7. add values from firebase generated config file to .env file
  8. update gapiConfig in './app/gapi' to add proper API discoveryDocs
  9. firebase init
  10. yarn start

## Customize
To customize the app:
  - Add proper app assets to the public folder
  - Update './app/routeConfig' with the Desired Routes
  - Update './app/gapi' with the desired Discovery Docs
  - Add firebase modules to './app/firebase'
    - Be sure add proper firebase config variables to .env
    - as well as firebase script tags in index.html
  - customize material ui theme at './app/theme'
