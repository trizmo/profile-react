import { combineReducers } from 'redux';
import contactMessagesReducer from './contactMessagesReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import jobDetailReducer from './jobDetailReducer';
import mailerReducer from './admin/mailerReducer'


export default combineReducers({

  contactMessages: contactMessagesReducer,
  error: errorReducer,
  auth: authReducer,
  jobDetails: jobDetailReducer,
  mailer: mailerReducer,

})