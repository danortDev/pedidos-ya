import createReducer from 'app/utils/createReducer';
import { SET_USER, SET_RESULTS } from 'app/constants/actions';

const initialState = {
  user: null,
  results: null
};

const actionHandlers = {
  [SET_USER]: (state, action) => ({
    ...state,
    user: action.payload
  }),
  [SET_RESULTS]: (state, action) => ({
    ...state,
    results: action.payload
  })
};

export default createReducer(initialState, actionHandlers);
