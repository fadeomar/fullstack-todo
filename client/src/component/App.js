import React, { useContext } from 'react';
import { Route, BrowserRouter as Router} from 'react-router-dom';
import Cookies from 'js-cookie';

import { Provider, Context } from '../context/authContext';

import Landing from '../component/Landing';
import SignUp from './auth/SignUp';
import SignIn from './auth/SignIn';
import ListTodos from './todos/ListTodos';

function App() {
  const { signUp, signIn } = useContext(Context)
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/signup" render={({ history }) => {
          return <SignUp signUp={async (user) => {
            const res = await signUp(user)
            if (res) {
              Cookies.set('token', res.data.token);
              history.push('/todos');
            }
          }} />
        }} />
        <Route exact path="/signin" render={({ history }) => {
          return <SignIn signIn={async (user) => {
            const res = await signIn(user)
            if (res) {
              Cookies.set('token', res.data.token);
              history.push('/todos');
            }
          }} />
        }} />
        <Route exact path="/todos" render={() => <ListTodos />} />
      </Router>
    </div>
  );
}

export default () => {
  return (
    <Provider >
      <App />
    </Provider>
  )
};
