import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import getReducers from 'app/utils/getReducers';

const rootReducer = combineReducers(getReducers());

const storeWithDevToolsConfig = composeWithDevTools(
  applyMiddleware(thunk)
)(createStore);

const storeConfig = storeWithDevToolsConfig(rootReducer);

export default storeConfig;
