import { initialState } from "../context/todoContext";

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_TODO_LOADING':
      return { ...state };
    case 'CREATE_TODO_SUCCESS':
      console.log('crate success')
      return {
        ...state,
        todos: [action.payload, ...state.todos]
      };
    case 'CREATE_TODO_FAILURE':
      return {
        ...state,
        createTodoErr: action.payload.error
      };

    case 'FETCH_TODOS_LOADING':
      return {
        ...state,
      };
    case 'FETCH_TODOS_SUCCESS':
      console.log(action)
      return {
        ...state,
        todos: action.payload,
      };
    case 'FETCH_TODOS_FAILURE':
      return {
        ...state,
        fetchTodosErr: action.error,
      };

    default:
      return state;
  }
}

export default todosReducer;