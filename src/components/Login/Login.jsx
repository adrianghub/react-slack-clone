import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from '../../firebase';
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';

const Login = () => {
  const [state, dispatch] = useStateValue();

  const handleSignIn = () => {
    auth
      .signInWithPopup(provider)
      .then(result => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })
      })
      .catch(error => {
        alert(error.message);
      })
  }

  return (
    <div className="login">
      <div className="login__container">
        <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd-970-80.jpg.webp" alt="Slack logo."/>
        <h1>Sing in to your Slack Account</h1>
        <p>accountdetails.slack.com</p>
        <Button onClick={handleSignIn}>Sign In with Google</Button>
      </div>
    </div>
  );
};

export default Login;