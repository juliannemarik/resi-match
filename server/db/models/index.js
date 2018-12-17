const User = require('./user')
const List = require('./list')
const School = require('./school')

// MODEL ASSOCIATIONS
User.belongsToMany(School, {through: 'User_School'})
School.belongsToMany(User, {through: 'User_School'})
List.belongsTo(User)

module.exports = {
  User,
  List,
  School
}
