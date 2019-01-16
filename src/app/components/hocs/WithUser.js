import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserData } from 'app/actions/auth';

class WithUser extends Component {
  componentDidMount() {
    const { user, actions } = this.props;
    if (!user) actions.getUserData();
  }

  render() {
    const { children, ...props } = this.props;
    return React.Children.map(children, child =>
      React.cloneElement(child, props)
    );
  }
};

const mapStateToProps = (state) => ({
  user: state.app.user
});

const mapDispatchToProps = (dispatch) => ({
  actions: { getUserData: () => dispatch(getUserData()) }
});

export default connect(mapStateToProps, mapDispatchToProps)(WithUser);
