import React from 'react'

import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = (props) => {
  return (
    <Card>
      <h1 className={classes.home}>Welcome Back!</h1>
    </Card>
  )
}

export default Home
