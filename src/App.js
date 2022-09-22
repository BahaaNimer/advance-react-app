import React, { useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader/MainHeader';
import AuthContext from './components/store/authContext';

function App() {
  const Context = useContext(AuthContext)

  return (
    <>
      <MainHeader />
      <main>
        {!Context.isLoggedIn && <Login />}
        {Context.isLoggedIn && <Home />}
      </main>
    </>
  );
}

export default App;
