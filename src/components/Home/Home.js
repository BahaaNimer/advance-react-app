import React, { useContext } from 'react';

import AuthContext from '../store/authContext';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = () => {
  const AuthCtx = useContext(AuthContext);
  return (
    <>
      <Card>
        <h1 className={classes.home}>Welcome Back!</h1>
        <Button onClick={AuthCtx.onLogout} >Logout</Button>
      </Card>
      <Card>
        <h2 className={classes.home}>What Do You Want To Do!</h2>
        <Button>Go Somewhere</Button>
      </Card>
      <Card>
        <h2 className={classes.home}>What Do You Want To Do!</h2>
        <Button>Go Somewhere</Button>
      </Card>
    </>
  )
}

export default Home
