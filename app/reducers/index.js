import { combineReducers } from 'redux';
import requestReducer from './requestReducer';
import urlReducer from './urlReducer';

export default combineReducers({
  request: requestReducer,
  url: urlReducer,
});
