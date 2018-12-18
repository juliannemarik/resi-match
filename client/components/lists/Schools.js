// EXTERNAL IMPORTS
import React, {Component} from 'react'
import {connect} from 'react-redux'

// MATERIAL UI IMPORTS
import {withStyles} from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    width: '100vw',
    height: window.innerHeight - 64,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
})

class Schools extends Component {
  render() {
    const {classes} = this.props
    return <div className={classes.root}>NO LISTS</div>
  }
}

const mapState = state => {
  return {}
}

export default withStyles(styles)(connect(mapState)(Schools))
