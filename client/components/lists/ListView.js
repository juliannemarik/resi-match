// EXTERNAL IMPORTS
import React, {Component} from 'react'
import {connect} from 'react-redux'

// INTERNAL IMPORTS
import {CurrentList, Schools} from '../index';

class ListView extends Component {
  render() {
    return Object.keys(this.props.currentList).length ? (
      <CurrentList />
    ) : (
      <Schools />
    )
  }
}

const mapState = state => {
  return {
    currentList: state.list.currentList
  }
}

export default connect(mapState)(ListView)
