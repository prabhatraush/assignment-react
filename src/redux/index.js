import { combineReducers } from 'redux';  
import userReducer from './user/reducer'; 
import highlightReducer from './highlight/reducer';
import formReducer from './form/reducer';

export default combineReducers({ 
  user: userReducer,
  forms: formReducer,
  highlight: highlightReducer,
});

