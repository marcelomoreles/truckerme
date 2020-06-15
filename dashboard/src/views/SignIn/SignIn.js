import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import validate from 'validate.js';
import { useStyles } from './styles'
import {
  Grid,
  Button,
  TextField,
  Typography
} from '@material-ui/core';
import { firebaseImpl as firebase } from '../../firebase-config'

const schema = {
  userName: {
    presence: { allowEmpty: false, message: '^Email é obrigatório' },
    email : true
  },
  password: {
    presence: { allowEmpty: false, message: '^Senha é obrigatório' },
    length: {
      minimum: 6,
      maximum: 10,
      message : "^Senha deve conter de 6 a 10 digitos"
    }
  }
};


const SignIn = props => {
  
  const { history } = props;

  const classes = useStyles();

  const [isAlert, setIsAlert] = useState(false)
  const [message, setMessage] = useState("")
  const [severity, setSeverity] = useState("error")

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    errors: {},
    touched: {}
  });

  useEffect(() => {

    if(props.location.state !== undefined) {
      setMessage(props.location.state.message);
      setIsAlert(true);
      setSeverity("error")
    }

    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));
  }, [formState.values, props.location.state]);

  const handleChange = event => {
    event.persist();

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]: event.target.value
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true
      }
    }));
  };

  const handleSignIn = event => {
    event.preventDefault();
    setIsAlert(false);

    
    const userName = formState.values.userName
    const pass =  formState.values.password
    

    firebase
    .auth()
    .signInWithEmailAndPassword(userName, pass)
    .then(res => {
      if (res.user) localStorage.setItem("isLogged", "true")  //Auth.setLoggedIn(true);
      history.push("/")
    })
    .catch(e => {
      console.log('erro');
      console.log(e.message);
      //setErrors(e.message);
    });

  };

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <div className={classes.root}>
      <Grid
        className={classes.grid}
        container
      >
        <Grid
          className={classes.quoteContainer}
          item
          lg={5}
        >
          <div className={classes.quote}></div>
        </Grid>
        <Grid
          className={classes.content}
          item
          lg={7}
          xs={12}
        >
          <div className={classes.content}>
     
            <div className={classes.contentBody}>
              <form
                className={classes.form}
                onSubmit={handleSignIn}
              >
                <Typography
                  className={classes.title}
                  variant="h2"
                >
                  Sign in
                </Typography>
                <TextField
                  className={classes.textField}
                  error={hasError('userName')}
                  fullWidth
                  helperText={
                    hasError('userName') ? formState.errors.userName[0] : null
                  }
                  label="Nome de usuario"
                  name="userName"
                  onChange={handleChange}
                  type="text"
                  value={formState.values.userName || ''}
                  variant="outlined"
                />
                <TextField
                  className={classes.textField}
                  error={hasError('password')}
                  fullWidth
                  helperText={
                    hasError('password') ? formState.errors.password[0] : null
                  }
                  label="Senha"
                  name="password"
                  onChange={handleChange}
                  type="password"
                  value={formState.values.password || ''}
                  variant="outlined"
                />
                <Button
                  className={classes.signInButton}
                  color="primary"
                  disabled={!formState.isValid}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Sign in
                </Button>
              </form>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

SignIn.propTypes = {
  history: PropTypes.object
};

export default withRouter(SignIn);
