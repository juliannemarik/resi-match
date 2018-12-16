import React, {Component} from 'react'
import {connect} from 'react-redux'
import {updateMe} from '../../store/user'
import history from '../../history'


import {withStyles} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import GridList from '@material-ui/core/GridList'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    height: 100
  },
  textField: {
    paddingBottom: 0,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 0
  },
  menu: {
    width: 200
  },
  card: {
    boxShadow: 'none',
    border: '1px solid #D8DEE2',
  }
})

class Settings extends Component {
  constructor(props) {
    super()
    this.state = {
      firstName: props.user.firstName,
      lastName: props.user.lastName,
      email: props.user.email,
      imageUrl: props.user.imageUrl,
      address: props.user.address
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit(event) {
    event.preventDefault()
    this.props.updateMe(this.state)
    history.push('/')
  }

  render() {
    const {classes} = this.props
    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Update User Settings
            </Typography>
          </CardContent>
          <CardContent className={classes.form}>
            <GridList
              cellHeight="auto"
              className={classes.gridList}
              cols={1}
              spacing={15}
            >
              <TextField
                name="firstName"
                id="filled-name"
                label="First Name"
                className={classes.textField}
                value={this.state.firstName}
                onChange={this.handleChange}
                margin="normal"
                variant="outlined"
              />
              <TextField
                name="lastName"
                id="filled-name"
                label="Last Name"
                className={classes.textField}
                value={this.state.lastName}
                onChange={this.handleChange}
                margin="normal"
                variant="outlined"
              />
              <TextField
                name="email"
                id="filled-multiline-flexible"
                label="Email"
                multiline
                className={classes.textField}
                value={this.state.email}
                onChange={this.handleChange}
                margin="normal"
                variant="outlined"
              />
              <TextField
                name="imageUrl"
                id="filled-multiline-flexible"
                label="Profile Picture URL"
                multiline
                className={classes.textField}
                value={this.state.imageUrl}
                onChange={this.handleChange}
                margin="normal"
                variant="outlined"
              />
            </GridList>
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Button type="button" onClick={this.handleSubmit}>
              Update
            </Button>
          </CardActions>
        </Card>
      </div>
    )
  }
}

const mapState = state => {
  return {
    user: state.user.currentUser
  }
}

const mapDispatch = dispatch => {
  return {
    updateMe: userData => {
      dispatch(updateMe(userData))
    }
  }
}

export default withStyles(styles)(connect(mapState, mapDispatch)(Settings))
