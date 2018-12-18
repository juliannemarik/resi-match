const Sequelize = require('sequelize')
const db = require('../db')

const List = db.define('List', {
  schools: {
    type: Sequelize.ARRAY(Sequelize.JSON)
  }
})

module.exports = List
