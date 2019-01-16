import Client from 'app/client';
import createAction from 'app/utils/createAction';
import objectToQueryString from 'app/utils/objectToQueryString';
import ENDPOINTS from 'app/constants/endpoints';
import { SET_RESULTS } from 'app/constants/actions';

const setResults = createAction(SET_RESULTS);

export const search = ({ lat, lng }) => {
  return async (dispatch) => {
    const query = objectToQueryString({
      country: 1,
      point: `${lat},${lng}`
    });
    try {
      const response = await Client.get(`${ENDPOINTS.SEARCH}${query}`);
      return dispatch(setResults(response));
    } catch (error) {
      console.log('error', error);
    }
  };
};
