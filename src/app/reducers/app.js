import createReducer from 'app/utils/createReducer';
import { SET_USER } from 'app/constants/actions';

const initialState = {
  user: {}
};

const actionHandlers = {
  [SET_USER]: (state, action) => ({
    ...state,
    user: action.payload
  })
};

export default createReducer(initialState, actionHandlers);
