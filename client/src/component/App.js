import React, { useContext } from 'react';
import Landing from '../component/Landing';
import { Provider, Context } from '../context/authContext';

function App() {
  const all = useContext(Context)
  console.log(all)
  return (
    <div className="App">
      <Landing />
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
