const {Sequelize, sequelize} = require('./db');

// TODO - define the Musician model
let Board = sequelize.define('Board', {
        type: Sequelize.STRING,
        description: Sequelize.STRING,
	rating: Sequelize.DOUBLE
});

module.exports = {
    Board
};

