import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import App from 'app/components/containers/App';
import Login from 'app/pages/Login';
import Home from 'app/pages/Home';
import Results from 'app/pages/Results';

const routes = [
  {
    path: '/login',
    public: true,
    component: Login
  },
  {
    path: '/',
    component: Home
  },
  {
    path: '/results',
    component: Results
  }
];

const Routes = () => (
  <Router>
    <App>
      {routes.map((route, index) => {
        return route.public
          ? <Route key={index} exact {...route} />
          : <PrivateRoute key={index} exact {...route}/>
      })}
    </App>
  </Router>
);

export default Routes;
