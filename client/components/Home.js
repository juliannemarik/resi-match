// EXTERNAL IMPORTS
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchCurrentList} from '../store'

// INTERNAL IMPORTS
import {CurrentList, Welcome} from './index'

class Home extends Component {
  componentDidMount() {
    if (this.props.isLoggedIn) {
      this.props.fetchCurrentList(this.props.user.info.id)
    }
  }

  render() {
    return (Object.keys(this.props.currentList).length ? (
      <CurrentList />
    ) : (
      <Welcome />
    ))
  }
}

const mapState = state => {
  return {
    isLoggedIn: !!state.user.currentUser.info.id,
    user: state.user.currentUser,
    currentList: state.list.currentList
  }
}

const mapDispatch = dispatch => {
  return {
    fetchCurrentList: userId => {
      dispatch(fetchCurrentList(userId))
    }
  }
}

export default connect(mapState, mapDispatch)(Home)
