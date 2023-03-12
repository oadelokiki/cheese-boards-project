const {sequelize} = require('./db');
const {User, Board, Cheese} = require('./index')


describe("User, Cheese, and Board Models", () => {
	
	beforeAll(async () => {
		await sequelize.sync({force: true})
	})


	
})
