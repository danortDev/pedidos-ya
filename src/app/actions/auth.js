import Client from 'app/client';
import createAction from 'app/utils/createAction';
import { SubmissionError } from 'redux-form';
import objectToQueryString from 'app/utils/objectToQueryString';
import ENDPOINTS from 'app/constants/endpoints';
import { API_KEY_NAME, AUTH_TOKEN_NAME } from 'app/constants/names';
import { SET_USER } from 'app/constants/actions';


const setUser = createAction(SET_USER);


const getApiKey = async () => {
  const query = objectToQueryString({
    clientId: process.env.REACT_APP_CLIENT_ID,
    clientSecret: process.env.REACT_APP_CLIENT_SECRET
  });
  try {
    const response = await Client.get(`${ENDPOINTS.LOGIN}${query}`);
    sessionStorage.setItem(API_KEY_NAME, response.access_token);
  } catch (error) {
    throw new SubmissionError({
      _error: 'There was an error trying to get the API KEY'
    });
  }
}


const authenticate = async (userData) => {
  const query = objectToQueryString(userData);
  try {
    const response = await Client.get(`${ENDPOINTS.LOGIN}${query}`);
    sessionStorage.setItem(AUTH_TOKEN_NAME, response.access_token);
  } catch (error) {
    throw new SubmissionError({
      _error: 'Something wrong with the user and password'
    });
  }
}


export const login = (userData) => {
  return async (dispatch) => {
    await getApiKey();
    await authenticate(userData);
    try {
      const response = await Client.get(ENDPOINTS.ACCOUNT, {
        headers: { Authorization: sessionStorage.getItem(AUTH_TOKEN_NAME) }
      });
      return dispatch(setUser(response));
    } catch (error) {
      throw new SubmissionError({
        _error: 'Something wrong trying to get user data'
      });
    }
  };
};
