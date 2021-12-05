import api from '../../../api';
import Toast from 'react-native-simple-toast';
import { resetNavigation} from '../../navigationRef';

const displayMessage = message => {
  Toast.show(message, Toast.SHORT);
};

export function regAttempt() {
  return {
    type: 'REG_ATTEMPT',
  };
}

export function regSuccess(data) {
  return {
    type: 'REG_SUCCESS',
    data,
  };
}

//need to login after successful register
export function login(data) {
  return {
    type: 'LOGIN_SUCCESS',
    data,
  };
}

export function regFailed() {
  return {
    type: 'REG_FAILED',
  };
}

const registerAccount = data => async dispatch => {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  const {fullName, email, phone, password} = data;
  if (fullName.length == 0) {
    displayMessage('Please enter your full name');
  } else if (email.length == 0) {
    displayMessage('Please enter email address');
  } else if (reg.test(email) == false) {
    displayMessage('Please enter valid email address');
  } else if (phone.length == 0) {
    displayMessage('Please enter your phone number');
  } else if (phone.length < 10) {
    displayMessage('Phone number must be 10 digits');
  } else if (password.length == 0) {
    displayMessage('Please enter password');
  } else if (password.length < 4) {
    displayMessage('Password must be at least four characters');
  } else {
    dispatch(regAttempt());
    try {
      const response = await api.post('/register', {
        email,
        password,
      });
      const result = response.data;
      console.log(result);
      dispatch(regSuccess(result));
      dispatch(login(result));
      displayMessage('Account has been successfully registered');
      resetNavigation('home');
    } catch (err) {
      displayMessage('Request failed with status code 400');
      dispatch(regFailed(err));
      console.log(err);
    }
  }
};
export default registerAccount;

