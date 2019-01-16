import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import WithUser from 'app/components/hocs/WithUser';
import isAuthenticated from 'app/utils/isAuthenticated';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    isAuthenticated() ? (
      <WithUser>
        <Component {...props} />
      </WithUser>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
);

export default PrivateRoute;
