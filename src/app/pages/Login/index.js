import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, formValueSelector, Field } from 'redux-form';
import validate from './validate';
import TextField from 'app/components/ui/TextField';
import Button from 'app/components/ui/Button';
import { Container, Spacer } from './elements';

class Login extends Component {
  onSubmit = (values) => {
    console.log('values', values);
  }

  render() {
    const { invalid, handleSubmit, submitting } = this.props;
    return (
      <Container>
        <Field
          name="user"
          placeholder="User"
          label="Usuario"
          component={TextField}
        />
        <Spacer />
        <Field
          name="password"
          type="password"
          placeholder="Password"
          label="Password"
          component={TextField}
        />
        <Spacer $size="bg" />
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
  user: selector(state, 'user'),
  password: selector(state, 'password')
});

export default compose(
  connect(mapStateToProps),
  reduxForm({ form: 'login-form', validate })
)(Login);
