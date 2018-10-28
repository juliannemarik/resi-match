// EXTERNAL IMPORTS
import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

// INTERNAL IMPORTS
import {logout} from '../store'

// MATERIAL UI IMPORTS
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home'
import {withStyles} from '@material-ui/core/styles'
const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingBottom: theme.spacing.unit * 5,
  },
  grow: {
    flexGrow: 1
  },
  homeButton: {
    marginLeft: -12,
    marginRight: 20
  },
  link: {
    color: 'inherit'
  }
})

const Navbar = props => {
  const {classes, handleClick, isLoggedIn} = props
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            BOILERMAKER
          </Typography>
          {isLoggedIn ? (
            <Fragment>
              <IconButton
                className={classes.homeButton}
                color="inherit"
                aria-label="home"
              >
                <Link to="/home" className={classes.link}>
                  <HomeIcon />
                </Link>
              </IconButton>
              <Link to="/login" className={classes.link}>
                <Button color="inherit" onClick={handleClick}>
                  Logout
                </Button>
              </Link>
            </Fragment>
          ) : (
            <Fragment>
              <Link to="/login" className={classes.link}>
                <Button color="inherit">Login</Button>
              </Link>
              <Link to="/signup" className={classes.link}>
                <Button color="inherit">Signup</Button>
              </Link>
            </Fragment>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default withStyles(styles)(connect(mapState, mapDispatch)(Navbar))

Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired
}
