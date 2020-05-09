import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom'

import {
  routes,
  redirects,
  PrivateRoute,
  RouteWithSubRoutes,
  Fallback
} from './app/routeConfig'

import { ScrollToTop } from './app/utils'

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Switch>
            {/*
              * REDIRECTS
              * Above routes to ensure proper handling
              */}
            {
              redirects.map((params, i) => (
                <Redirect key={i} {...params} />
              ))
            }
            {/*
              * ROUTES
              */}
            {
              routes.map((route, i) => (
                route.private ?
                  (
                    <PrivateRoute key={i} {...route} >
                      <RouteWithSubRoutes />
                    </PrivateRoute>
                  )
                  : (
                    <RouteWithSubRoutes key={i} {...route} />
                  )
                )
              )
            }
            {/*
              * FALLBACK to Home or App (if logged in)
              */}
            <Fallback />
          </Switch>
        </React.Suspense>
      </div>
    </Router>
  )
}

export default App
