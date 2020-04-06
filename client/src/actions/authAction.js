  import apiCall from '../apiCall';

  export const signUp = (user) => async dispatch => {
    const result = await apiCall('/auth/sign_up', 'post', user);
    return dispatch({type: 'SIGNUP_USER', payload: result.data.user})
  }

  export const signIn = (user) => async dispatch => {
    const result = await apiCall('/auth/sign_in', 'post', user);
    return dispatch({type: 'SIGNIN_USER', payload: result.data.user})
  }