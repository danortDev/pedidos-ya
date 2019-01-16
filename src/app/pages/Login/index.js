import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose, bindActionCreators } from 'redux';
import { reduxForm, formValueSelector, Field } from 'redux-form';
import { login } from 'app/actions/auth';
import validate from './validate';
import TextField from 'app/components/ui/TextField';
import Button from 'app/components/ui/Button';
import { Container, Spacer, FormError } from './elements';
import {
  LOGIN_FORM,
  USER_FIELD_NAME,
  PASSWORD_FIELD_NAME
} from 'app/constants/names';

class Login extends Component {
  onSubmit = async (values) => {
    const { actions, history } = this.props;
    await actions.login(values);
    history.push('/');
  }

  render() {
    const { invalid, handleSubmit, submitting, error } = this.props;
    return (
      <Container>
        <Field
          name={USER_FIELD_NAME}
          placeholder="User"
          label="Usuario"
          component={TextField}
        />
        <Spacer />
        <Field
          name={PASSWORD_FIELD_NAME}
          type="password"
          placeholder="Password"
          label="Password"
          component={TextField}
        />
        {!error && (<Spacer $size="bg" />)}
        {error && (
          <FormError>
            {error}
          </FormError>
        )}
        <Button
          disabled={invalid || submitting}
          onClick={handleSubmit(this.onSubmit)}
        >
          {submitting ? 'Loading' : 'Login'}
        </Button>
      </Container>
    );
  }
}

const selector = formValueSelector('login-form');
const mapStateToProps = (state) => ({
  user: selector(state, USER_FIELD_NAME),
  password: selector(state, PASSWORD_FIELD_NAME)
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ login }, dispatch)
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: LOGIN_FORM, validate })
)(Login);
