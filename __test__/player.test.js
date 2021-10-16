const Gameboard = require('../gameboard')
const player = require('../player')

const playerOne = player();
const playerTwo = player();



test('players should be able to attack each other', () => {
    playerTwo.gameboard.place(1,2,2),
    playerOne.turn(playerTwo, 2,2),
    expect(playerTwo.gameboard.allSunk()).toBe(true)
})