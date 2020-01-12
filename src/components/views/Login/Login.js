import React from 'react';
import styles from './Login.module.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Login = () => (
  <form className={styles.container}>
    <h2>Login to pizzeria portal</h2>
    <TextField className={styles.input} id="outlined-basic" label="Login" variant="outlined" />
    <TextField className={styles.input} id="outlined-basic" label="Password" variant="outlined" />
    <Button className={styles.submit} variant="contained" color="primary">Submit</Button>
  </form>
);

export default Login;
