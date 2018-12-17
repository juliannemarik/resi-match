// EXTERNAL IMPORTS
import React from 'react'
import {connect} from 'react-redux'

// MATERIAL UI IMPORTS
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  root: {
    width: '100vw',
    height: window.innerHeight - 64,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontWeight: 200,
    color: 'inherit',
    letterSpacing: theme.spacing.unit * 2
  },
  subtitle: {
    fontWeight: 300,
    color: '#686666',
    letterSpacing: theme.spacing.unit * 1 / 4
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    fontWeight: 300,
    letterSpacing: theme.spacing.unit * 1 / 4,
  }
})

export const Home = props => {
  const {classes} = props
  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h4" gutterBottom>
        WELCOME TO RESI-MATCH
      </Typography>
      <Typography className={classes.subtitle} variant="body2" gutterBottom>
        an application to help medical students rank their residency options
      </Typography>
      <Button variant="outlined" color="secondary" className={classes.button}>
        BEGIN HERE
      </Button>
    </div>
  )
}

const mapState = state => {
  return {}
}

export default withStyles(styles)(connect(mapState)(Home))
