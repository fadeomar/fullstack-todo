import { initialState } from "../context/authContext";

const authReducer = (state = initialState , action) => {
  switch (action.type){
    case 'SIGNUP_USER_SUCESS':
      return {...state, user: action.payload, isAuthenticated: true};
    case 'SIGNIN_USER':
      return {...state, user: action.payload, isAuthenticated: true};
    default:
      return state;
  };
};

export default authReducer;