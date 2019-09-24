import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form'
import {withStyles} from '@material-ui/core/styles';
import {Card, CardHeader, CardContent} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

// Import custom components
import renderText from '../common/renderText';
import CustomizedSnackbar from '../common/CustomizedSnackbar';

const styles = {
  root: {
    flexGrow: 1,
  },
  login_form: {
    minWidth: 320,
    maxWidth: 400,
    marginTop: '25%',
    margin: 'auto'
  },
  cardHeader: {
    textAlign: 'center',
    color: '#F37541',
    fontSize: '35px',
    fontWeight: 'Bold'
  },
  subTitle: {
    textAlign: 'center',
    color: '#4D4F5C',
    fontSize: '18px'
  },
  btnDiv: {
    textAlign: 'center'
  },
  btn: {
    marginTop: 21,
    backgroundColor: '#F37541',
    fontSize: '18px'
  },
  img: {
    height: '100vh',
    width: '100%'
  },
  login: {
    background: '#fff'
  }
};

const LoginForm = props => {

  const {handleSubmit, onSubmit, classes, errorMessage} = props;

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={6}>
          <img className={classes.img} src="/img/login.png" alt=""/>
        </Grid>
        <Grid className={classes.login} item xs={6}>
          <div className={classes.login_form}>
            <p className={classes.cardHeader}> ADMIN </p>
            <p className= {classes.subTitle}>Log in</p>
            {errorMessage  &&
            <CustomizedSnackbar
              variant="error"
              className={classes.margin}
              message={ errorMessage }
            />}
            <CardContent>
              <form method="post" onSubmit={handleSubmit(onSubmit)}>
                <Field
                  type="text"
                  name="email"
                  component={renderText}
                  label="Username"
                />
                <br />
                <Field
                  type="password"
                  name="password"
                  component={renderText}
                  label="Password"

                />
                <br />
                <div className={classes.btnDiv}>
                  <Button className={classes.btn} type="submit" variant="contained" color="primary">Continue</Button>
                </div>
              </form>
            </CardContent>
          </div>
        </Grid>
      </Grid>
    </div>
  )
};

const validateLogin = values => {
  const errors = {};

  const requiredFields = [
    'email',
    'password'
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = '(The ' + field + ' field is required.)';
    }
  });

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = '(Invalid email address.)';
  }
  return errors
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

export default reduxForm({
  form: 'LoginForm', // a unique identifier for this form
  validate: validateLogin // ←Callback function for client-side validation
})(withStyles(styles)(LoginForm))