const {User} = require("./User")
const {Board} = require("./Board")
const {Cheese} = require("./Cheese")

User.hasMany(Board)
Board.belongsTo(User)


Board.hasMany(Cheese)

Cheese.hasMany(Board)



module.exports = {
	User,
	Board, 
	Cheese
};
