import { combineReducers } from 'redux'
import LoginReducer  from '../screens/login/reducer'
import RegistrationReducer  from '../screens/registration/reducer'

const rootReducer = combineReducers({
  LoginReducer,
  RegistrationReducer
});

export default rootReducer;
