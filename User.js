const {Sequelize, sequelize} = require ("./db");

let User = sequelize.define("User", {
	name: Sequelize.STRING,
	email: Sequelize.STRING
});

module.exports = {
	User
	}
