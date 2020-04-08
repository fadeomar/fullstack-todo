import React, { useContext } from 'react';
import Landing from '../component/Landing';
import SignUp from './auth/SignUp';
import SignIn from './auth/SignIn';
import { Provider, Context } from '../context/authContext';
import { Route, BrowserRouter as Router} from 'react-router-dom';

function App() {
  const { signUp, signIn } = useContext(Context)
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/signup" render={() => {
          return <SignUp signUp={async (user) => {
            await signUp(user)
          }} />
        }} />
        <Route exact path="/signin" render={() => {
          return <SignIn signIn={async (user) => {
            await signIn(user)
          }} />
        }} />
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
