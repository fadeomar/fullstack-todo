import apiCall from '../apiCall';

export const createTodo = (dispatch) => async (todo, Cookies) => {
  try {
    dispatch({ type: 'CREATE_TODO_LOADING'})
    const res = await apiCall('/todos', 'post', Cookies.get('token'));
    if(res){
      dispatch({type: 'CREATE_TODO_SUCCESS', payload: res.data})
    }
  } catch (error) {
    dispatch({type: 'CREATE_TODO_FAILURE', payload: error.response.data})
  }
}

export const fetchTodo = dispatch => async Cookies => {
  try {
    dispatch({type: 'FETCH_TODOS_LOADING' });
    const res = await apiCall('/todos', 'get', null, Cookies.get('token'));
    dispatch({type: 'FETCH_TODOS_SUCCESS', payload: res.data});
    return res;
  } catch (error) {
    return dispatch({ type: 'FETCH_TODOS_FAILURE', payload: error.response.data})
  }
}