import React, { useContext } from 'react';

import AuthContext from '../../store/authContext';
import Navigation from '../Navigation/Navigation';
import classes from './MainHeader.module.css';

const MainHeader = () => {
  const AuthCtx = useContext(AuthContext);

  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <Navigation
        isLoggedIn={AuthCtx.isLoggedIn}
        onLogout={AuthCtx.onLogout}
      />
    </header>
  )
}

export default MainHeader
