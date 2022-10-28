const { Model } = require('sequelize');
const {Board} = require('./Board');
const {Cheese} = require('./Cheese');
const {User} = require('./User');

Board.belongsTo(User);
User.hasMany(Board);


module.exports = {
    Board,
    User,
    Cheese
}