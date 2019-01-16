const BASE_URL = 'http://localhost:8080/public/v1';

const ENDPOINTS = {
  LOGIN: `${BASE_URL}/tokens`,
  ACCOUNT: `${BASE_URL}/myAccount`,
  SEARCH: `${BASE_URL}/search/restaurants`
};

export default ENDPOINTS;
