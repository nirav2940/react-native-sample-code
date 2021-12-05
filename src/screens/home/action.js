import {resetNavigation} from '../../navigationRef';
import Toast from 'react-native-simple-toast';

const logOut = () => async dispatch => {
  dispatch({type: 'LOGOUT'});
  Toast.show('Logout successful', Toast.SHORT);
  resetNavigation('login');
};

export default logOut;
