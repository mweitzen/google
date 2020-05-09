import React from 'react'

import {Switch, Route, Redirect, useLocation } from 'react-router-dom';

import { useSelector } from 'react-redux'
import { isLoaded, isEmpty } from 'react-redux-firebase'

// import route components
import Dashboard from '../pages/Dashboard'
import LandingPage from '../pages/LandingPage'

import Login from '../pages/Login'

// import ProfilePage from '../pages/ProfilePage'
import About from '../pages/About'
import Jack from '../pages/Jack'
import Jill from '../pages/Jill'

export const routes = [
  {
    path: '/app',
    component: Dashboard,
    exact: true,
    private: true
  },
  {
    path: '/login',
    component: Login,
    exact: true
  },
  {
    path: '/about',
    component: About,
    routes: [
      {
        path: '/about/jack',
        component: Jack,
        routes: [
          {
            path: '/about/jack/babe1',
            component: Jill,
            exact: true
          },
          {
            path: '/about/jack/babe2',
            component: Jill,
            exact: true
          },
        ]
      },
      {
        path: '/about/jill',
        component: Jill,
        exact: true
      },
    ]
  },
  {
    path: '/',
    component: LandingPage,
    exact: true
  },
]

export const redirects = [
  // REVIEW: need to catch everything except the exact match and redirect back to login
  // {
  //   from: '/login/*',
  //   to: '/login'
  // },
]

export const Fallback = ({realAuth}) => {
  const auth = useSelector(state => state.firebase.auth)

  return (
    isLoaded(auth) && !isEmpty(auth) ?
      <Redirect from="*" to="/app" />
      : <Redirect from="*" to="/" />
  )
}

export const PrivateRoute = (route) => {
  const location = useLocation();
  const auth = useSelector(state => state.firebase.auth)

  return (
    isLoaded(auth) && !isEmpty(auth) ?
      <RouteWithSubRoutes {...route} />
      : <Redirect to={{
            pathname: "/login",
            state: {from: location}
          }}
        />
  )
}

export const RouteWithSubRoutes = ({ component: Component, path, routes, exact, children }) => {
  const NestedSwitch = (
    <Switch >
      {
        (routes && routes.length !== 0) &&
        routes.map((nestedRoute, i) => <RouteWithSubRoutes key={i} {...nestedRoute} />)
      }
    </Switch>
  )
  const InjectedComponent = () => <Component switch={NestedSwitch} />
  return (
    <Route
      exact={exact || false}
      path={path}
      component={ InjectedComponent }
    />
  )
}
