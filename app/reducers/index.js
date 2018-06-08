import { combineReducers } from 'redux';
import requestReducer from './requestReducer';
import urlReducer from './urlReducer';
import languageReducer from './languageReducer';

export default combineReducers({
  request: requestReducer,
  url: urlReducer,
  language: languageReducer,
});
