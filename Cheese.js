const {Sequelize, sequelize} = require('./db');

// TODO - define the Musician model
let Cheese = sequelize.define('Cheese', {
        title: Sequelize.STRING,
        description: Sequelize.STRING
});

module.exports = {
    Cheese
};

