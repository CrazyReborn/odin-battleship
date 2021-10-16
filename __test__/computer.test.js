const computer = require('../computer');
const player = require('../player');
const playerTwo = computer();
const playerOne = player();

test('make sure comp can\'t shoot at the same spot twice', () => {
    playerTwo.turn(playerOne),
    playerTwo.turn(playerOne),
    playerTwo.turn(playerOne),
    playerTwo.turn(playerOne),
    playerTwo.turn(playerOne),
    playerTwo.turn(playerOne),
    playerTwo.turn(playerOne),
    playerTwo.turn(playerOne),
    playerTwo.turn(playerOne),
    playerTwo.turn(playerOne),
    playerTwo.turn(playerOne),
    playerTwo.turn(playerOne),
    playerTwo.turn(playerOne),
    expect(playerOne.gameboard.shot).toBe(1)
})