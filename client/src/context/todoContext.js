import createDataContext from './createDataContext';
import {fetchTodo, createTodo} from '../actions';
import todosReducer from '../reducers/todosreducer';

export const initialState = {
createTodoErr: '',
fetchTodoErr: '',
todos: []
};

export const { Provider, Context } = createDataContext(
  todosReducer,
  {fetchTodo, createTodo},
  initialState
)