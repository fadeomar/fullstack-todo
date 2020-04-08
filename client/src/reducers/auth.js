import { initialState } from "../context/authContext";

const authReducer = (state = initialState , action) => {
  switch (action.type){
    case 'SIGNUP_USER_SUCCESS':
      return {...state, user: action.payload, isAuthenticated: true};
    case 'SIGNUP_USER_FAILURE':
      return { ...state, signUpErr: action.payload.error };
    case 'SIGNIN_USER_SUCCESS':
      return {...state, user: action.payload, isAuthenticated: true};
    case 'SIGNIN_USER_FAILURE':
      return { ...state, signInErr: action.payload.error };
    default:
      return state;
  };
};

export default authReducer;