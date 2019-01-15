import React from 'react';
import { reduxForm, Field } from 'redux-form';
import TextField from 'app/components/ui/TextField';
import { Container, Spacer } from './elements';

const Login = ({ }) => (
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
  </Container>
);

export default reduxForm({ form: 'login-form' })(Login);
