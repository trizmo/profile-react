import { combineReducers } from 'redux';
import contactMessagesReducer from './contactMessagesReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';


export default combineReducers({
  contactMessages: contactMessagesReducer,
  error: errorReducer,
  auth: authReducer,
})