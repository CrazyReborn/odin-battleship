const createnew = require('./gameboard');
const Gameboard = createnew();

/*
test('create a ship and place it "on the board" with coordinates', () => {
    Gameboard.place(4, 3, 2),
    expect(Gameboard.ships).toBe()
})
*/


const Gameboard2 = createnew();
/*
test('should be able to change arrangement', () => {
    expect(Gameboard2.arrangement).toBe('horizontal'),
    Gameboard2.place(4,6,2);
    Gameboard2.change(),
    Gameboard2.place(2,2,2)
})
*/

/* WORKS!!!!
test('recieve attack and register a hit on a corrent ship in a correct spot', () => {
    Gameboard2.place(4,6,2),
    Gameboard2.place(2,2,2),
    Gameboard2.receiveAttack(3,2),
    expect(Gameboard2.ships).toBe(12)
})
*/
/*WORKS!!!!
test('after receiving all hit marks are hit isSunk of the hit ship sould be true', () => {
    Gameboard2.place(4,6,2),
    Gameboard2.place(2,2,2),
    Gameboard2.receiveAttack(3,2),
    Gameboard2.receiveAttack(2,2),
    expect(Gameboard2.ships[1].newShip.isSunk()).toBe(true)
})
*/

/* WORKS!
test('after receiving all hit marks are hit isSunk of the hit ship sould be true', () => {
    Gameboard2.place(4,6,2),
    Gameboard2.receiveAttack(9,9),
   //Gameboard2.receiveAttack(2,2),
    expect(Gameboard2.missed).toStrictEqual([[9, 9]])
})
*/