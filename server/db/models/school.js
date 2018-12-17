const Sequelize = require('sequelize')
const db = require('../db')

const School = db.define('School', {
  name: {
    type: Sequelize.STRING
  },

})

module.exports = School
