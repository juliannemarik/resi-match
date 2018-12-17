import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../../store'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Button from '@material-ui/core/Button'
import FormatListNumbered from '@material-ui/icons/FormatListNumbered'

const styles = theme => ({
  root: {
    width: '100%'
  },
  grow: {
    flexGrow: 1
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    },
    fontWeight: 300,
    letterSpacing: theme.spacing.unit * 1 / 4
  },
  navLinks: {
    color: 'inherit',
    fontWeight: 300
  },
  icon: {
    marginLeft: '15px'
  },
  logo: {
    width: '50px',
    paddingRight: '15px'
  },
  navLinkText: {
    fontWeight: 300,
    color: 'inherit',
    letterSpacing: theme.spacing.unit * 1 / 4
  },
  appBar: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  }
})

class Navbar extends Component {
  componentDidMount() {}

  render() {
    const {classes, handleClick, isLoggedIn, isAdmin} = this.props
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <Link to="/" className={classes.navLinks}>
              <img
                className={classes.logo}
                src="https://images.vexels.com/media/users/3/151981/isolated/preview/f8863741dba8034b3e1d4809a01c782a-stethoscope-icon-medical-icons-by-vexels.png"
              />
            </Link>
            <Link to="/" className={classes.navLinks}>
              <Typography
                className={classes.title}
                variant="h6"
                color="inherit"
                noWrap
              >
                RESI-MATCH
              </Typography>
            </Link>
            <div className={classes.grow} />
            {isLoggedIn ? (
              <React.Fragment>
                <Link to="/list" className={classes.navLinks}>
                  <IconButton color="inherit" className={classes.icon}>
                    <FormatListNumbered />
                  </IconButton>
                </Link>
                <Link to="/user" className={classes.navLinks}>
                  <IconButton color="inherit" className={classes.icon}>
                    <AccountCircle />
                  </IconButton>
                </Link>
                <a href="#" onClick={handleClick} className={classes.navLinks}>
                  <Button color="inherit" className={classes.navLinkText}>
                    Logout
                  </Button>
                </a>
              </React.Fragment>
            ) : (
              <div>
                <Link to="/login" className={classes.navLinks}>
                  <Button color="inherit" className={classes.navLinkText}>
                    Login
                  </Button>
                </Link>
                <Link to="/signup" className={classes.navLinks}>
                  <Button color="inherit" className={classes.navLinkText}>
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

const mapState = state => {
  return {
    isLoggedIn: !!state.user.currentUser.id,
    user: state.user.currentUser
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
