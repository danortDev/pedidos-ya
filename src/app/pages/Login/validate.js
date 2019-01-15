import omitBy from 'app/utils/omitBy';

const validate = (values) => {
  const noUsernameError = !values.user
    && 'User is required';

  const noPasswordError = !values.password
    && 'Password is required';

  return omitBy({
    user: noUsernameError,
    password: noPasswordError
  }, (item) => !item);
};

export default validate;
