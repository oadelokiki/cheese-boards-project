const {User} = require("./User")
const {Board} = require("./Board")
const {Cheese} = require("./Cheese")

User.hasMany(Board)
Board.belongsTo(User)

Cheese.belongsTo(Board)
Board.hasMany(Cheese)

module.exports = {
	User,
	Board, 
	Cheese
};
