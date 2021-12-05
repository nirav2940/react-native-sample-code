const INITIAL_STATE = {
  isLoading: false,
  error: null,
  token: null,
  id: null,
};

const RegistrationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'REG_ATTEMPT':
      return {
        ...state,
        isLoading: true,
      };
      break;
    case 'REG_SUCCESS':
      return {
        ...state,
        isLoading: false,
        id: action.data.id,
        token: action.data.token,
      };
      break;
    case 'REG_FAILED':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
      break;
    default:
      return state;
  }
};

export default RegistrationReducer;