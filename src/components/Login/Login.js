import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import classes from './Login.module.css';
import { emailReducer, initialEmailState } from '../Reducer/EmailReducer/EmailReducer';
import { passwordReducer, initialPasswordState } from '../Reducer/PasswordReducer/PasswordReducer';
import AuthContext from '../store/authContext';

const Login = () => {
  const AuthCtx = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [emailState, dispatchEmail] = useReducer(emailReducer, initialEmailState);
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, initialPasswordState);
  const [formIsValid, setFormIsValid] = useState(false);

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);
    return () => {
      clearTimeout(identifier);
    }
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (e) => {
    dispatchEmail({ type: 'EMAIL_INPUT', value: e.target.value });
  };

  const passwordChangeHandler = (e) => {
    dispatchPassword({ type: 'PASSWORD_INPUT', value: e.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'EMAIL_BLUR' });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'PASSWORD_BLUR' });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (formIsValid) {
      AuthCtx.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          id="email"
          label="E-Mail"
          type="email"
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          placeholder="Enter Your Email Address"
        />
        <Input
          ref={passwordInputRef}
          id="password"
          label="Password"
          type="password"
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          placeholder="Enter your password..."
        />
        <div className={classes.actions}>
          <Button
            className={classes.btn}
            type='submit'
            disabled={!formIsValid}
          >
            Login
          </Button>
        </div>
      </form>
    </Card>
  )
}

export default Login;
