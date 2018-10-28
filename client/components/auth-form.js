// EXTERNAL IMPORTS
import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

// INTERNAL IMPORTS
import {auth} from '../store'

// MATERIAL UI IMPORTS
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Paper from '@material-ui/core/Paper'
import withStyles from '@material-ui/core/styles/withStyles'
const styles = theme => ({
  layout: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  paper: {
    marginTop: theme.spacing.unit * 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`,
    boxShadow: 'none',
    border: '1px solid #D8DEE2'
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  },
  error: {
    padding: `${theme.spacing.unit * 2}px`,
    backgroundColor: '#FEDCE0',
    border: '1px solid #DCC0C4;',
    boxShadow: 'none'
  },
  newUser: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    textAlign: 'center',
    padding: `${theme.spacing.unit}px`
  },
  link: {
    color: theme.palette.secondary.main,
    textDecoration: 'underline'
  }
})

const AuthForm = props => {
  const {classes, name, displayName, handleSubmit, error} = props

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        {error &&
          error.response && (
            <Paper className={classes.error}> {error.response.data} </Paper>
          )}
        <Paper className={classes.paper}>
          <form className={classes.form} onSubmit={handleSubmit} name={name}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input id="email" name="email" autoComplete="email" autoFocus />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {displayName}
            </Button>
            <a href="/auth/google">
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
              >
                {displayName} With Google
              </Button>
            </a>
          </form>
        </Paper>
        <Paper className={`${classes.paper} ${classes.newUser}`}>
          <p>
            {' '}
            {displayName === 'Sign Up'
              ? 'Already have an account?'
              : 'New to Boilermaker?'}{' '}
            &nbsp;{' '}
          </p>
          <Link
            to={name === 'signup' ? '/login' : '/signup'}
            className={classes.link}
          >
            <p>{displayName === 'Sign Up' ? 'Login' : 'Sign Up'}</p>
          </Link>
        </Paper>
      </main>
    </React.Fragment>
  )
}

const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      console.log('EMAIL, PASSWORD, FORMNAME', email, password, formName)
      dispatch(auth(email, password, formName))
    }
  }
}

export const Login = withStyles(styles)(
  connect(mapLogin, mapDispatch)(AuthForm)
)
export const Signup = withStyles(styles)(
  connect(mapSignup, mapDispatch)(AuthForm)
)

AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
