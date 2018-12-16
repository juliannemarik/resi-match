import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

export const Home = props => {
  const {email} = props

  return (
    <div>
      <h3>Welcome, {email}</h3>
    </div>
  )
}

const mapState = state => {
  return {
    email: state.user.currentUser.email
  }
}

export default connect(mapState)(Home)

Home.propTypes = {
  email: PropTypes.string
}
