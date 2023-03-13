const {sequelize} = require('./db');
const {User, Board, Cheese} = require('./index')


describe("User, Cheese, and Board Models", () => {
	
	beforeAll(async () => {
		await sequelize.sync({force: true})
	})


	test('can create a User', async () => {
        // TODO - test creating a band
        let testUser = await User.create({
                name: "Ben",
                email: "Rock@gmail.com"
        })
        expect(testUser.name).toBe('Ben');
        expect(testUser.email).toBe('Rock@gmail.com');
	    })	

	test('can create a Cheese', async () => {
        // TODO - test creating a band
        let testCheese = await Cheese.create({
                title: "Benny",
                description: "Rock"
        })
        expect(testCheese.title).toBe('Benny');
        expect(testCheese.description).toBe('Rock');
	    })

	test('can create a Board', async () => {
        // TODO - test creating a band
        let testBoard= await Board.create({
                type: "Classic",
                description: "Rock",
		rating: 6.0
        })
        expect(testBoard.type).toBe('Classic');
        expect(testBoard.description).toBe('Rock');
	expect(testBoard.rating).toBe(6.0);
	    })


	test('one to many association', async () => {
        let testUser = await User.create({
                name: "the jets",
                email: "rock@gmail.com",

                Boards: [ {
                       type: "benny",
                        description: "guitar",
			rating: 6.0
                }]

        }, {
                include: [
                        //User.Board
                        Board
                ]
        })
                console.log(testUser.Boards)
        expect(testUser.Boards[0].type).toBe("benny")
        })

	test('many to many association', async () => {

	const testBoard = await Board.create({
                type: "the jets",
                description: "rock",
                Cheeses: [{
                        title: "benny",
                        description: "guitar"

                }]
               
        }, {
                include: [
                        //Band.Musician
                        Cheese

                ]
        })
                console.log(testBoard.Cheeses)

        // TODO now query for bands with a particular song, and songs with a particular band

        let partBoardResults = await testBoard.getCheeses();

        console.log(partBoardResults.Cheeses);

        expect(partBoardResults.length).toBe(1)

        let testCheese = await Cheese.create({
                title: "hello there knowledge",
                description: 2021,
                Boards: [{
                        type: "the thrills",  
			description: "indie",
                        rating: 6.0
                }, {
                        type: "the beatles",
                        description: "indie",
                        rating: 6.0
                }]

        }, {
                include: [
                        Board,
                ]
        })

        let partCheeseResults = await testCheese.getBoards();
        console.log("your results" + partCheeseResults);
        expect(partCheeseResults.length).toBe(2)
        })


})
