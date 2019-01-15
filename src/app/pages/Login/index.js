import React from 'react';
import { reduxForm, Field } from 'redux-form';
import TextField from 'app/components/ui/TextField';
import Button from 'app/components/ui/Button';
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
    <Spacer $size="bg" />
    <Button>
      Login
    </Button>
  </Container>
);

export default reduxForm({ form: 'login-form' })(Login);
