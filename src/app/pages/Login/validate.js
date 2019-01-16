import omitBy from 'app/utils/omitBy';
import { USER_FIELD_NAME, PASSWORD_FIELD_NAME } from 'app/constants/names';

const validate = (values) => {
  const noUsernameError = !values[USER_FIELD_NAME]
    && 'User is required';

  const noPasswordError = !values[PASSWORD_FIELD_NAME]
    && 'Password is required';

  return omitBy({
    [USER_FIELD_NAME]: noUsernameError,
    [PASSWORD_FIELD_NAME]: noPasswordError
  }, (item) => !item);
};

export default validate;
