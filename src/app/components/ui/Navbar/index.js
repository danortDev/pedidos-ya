import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setUser } from 'app/actions/auth';
import { Bar, Text } from './elements';
import { API_KEY_NAME, AUTH_TOKEN_NAME } from 'app/constants/names';

const Navbar = ({ user, actions, history }) => {
  const logout = () => {
    sessionStorage.removeItem(API_KEY_NAME);
    sessionStorage.removeItem(AUTH_TOKEN_NAME);
    actions.setUser(null);
    history.push('/login');
  };

  return (
    <Bar>
      <Text>
        Welcome!
      </Text>
      {user && (
        <Fragment>
          <Text>
            {`${user.name} ${user.lastName}`}
          </Text>
          <Text onClick={logout}>
            Logout
          </Text>
        </Fragment>
      )}
    </Bar>
  );
};


const mapStateToProps = (state) => ({
  user: state.app.user
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ setUser }, dispatch)
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Navbar);
