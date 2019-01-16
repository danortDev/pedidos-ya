import { AUTH_TOKEN_NAME, API_KEY_NAME } from 'app/constants/names';

const isAuthenticated = () => {
  return (
    !!sessionStorage.getItem(AUTH_TOKEN_NAME)
    && !!sessionStorage.getItem(API_KEY_NAME)
  )
}

export default isAuthenticated;
