import {combineReducers} from 'redux';
import appReducer from './containers/App/reducer';
import homeReducer from './containers/Homepage/';

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    app: appReducer,
    ...injectedReducers,
  });

  return rootReducer;
}