import 'fetch-everywhere';
import omitBy from 'app/utils/omitBy';
import { API_KEY_NAME } from 'app/constants/names';

const buildHeaders = () => {
  return omitBy({
    Authorization: sessionStorage.getItem(API_KEY_NAME)
  }, (header) => !header);
};

const successHandler = (response) => {
  if (!response) return null;
  if (!response.ok) {
    return response.json().then((result) => {
      throw result;
    });
  }
  return response.text().then((text) => {
    return text ? JSON.parse(text) : {};
  });
};

const errorHandler = (error) => {
  throw error;
};

const Client = {
  get: (url, options) => {
    const params = { ...options, method: 'GET' };
    return makeRequest(url, params);
  }
};

const makeRequest = (url, params) => {
  const options = {
    headers: buildHeaders(),
    ...params,
  };
  return fetch(url, options)
    .then(successHandler)
    .catch(errorHandler);
};

export default Client;
