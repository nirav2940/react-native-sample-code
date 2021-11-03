const INITIAL_STATE = {
  isLoading: false,
  error: null,
  token: null,
};

const LoginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOGIN_ATTEMPT':
      return {
        ...state,
        isLoading: true,
      };
      break;
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLoading: false,
        id: action.data.id,
        token: action.data.token,
      };
      break;
    case 'LOGIN_FAILED':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
      break;
    case 'LOGOUT':
      return {
        ...state,
        id: null,
        token: null,
      };
      break;
    default:
      return state;
  }
};

export default LoginReducer;