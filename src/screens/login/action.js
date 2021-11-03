import api from '../../../api';
import Toast from 'react-native-simple-toast';
import {resetNavigation} from '../../navigationRef';

const displayMessage = message => {
  Toast.show(message, Toast.SHORT);
};

export function loginAttempt() {
  return {
    type: 'LOGIN_ATTEMPT',
  };
}

export function loginSuccess(data, token) {
  return {
    type: 'LOGIN_SUCCESS',
    data: data,
  };
}

export function loginFailed() {
  return {
    type: 'LOGIN_FAILED',
  };
}

const loginAccount = data => async dispatch => {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  const {email, password} = data;
  if (email.length == 0) {
    displayMessage('Please enter email address');
  } else if (reg.test(email) == false) {
    displayMessage('Please enter valid email address');
  } else if (password.length == 0) {
    displayMessage('Please enter password');
  } else if (password.length < 4) {
    displayMessage('Password must be at least four characters');
  } else {
    dispatch(loginAttempt());
    try {
      const response = await api.post('/login', {
        email,
        password,
      });
      const result = response.data;
      dispatch(loginSuccess(result));
      displayMessage('Login successful');
      resetNavigation('home');
    } catch (err) {
      displayMessage('Invalid email address or password');
      dispatch(loginFailed(err));
      console.log(err);
    }
  }
};

export default loginAccount;