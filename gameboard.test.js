const createnew = require('./gameboard');
const Gameboard = createnew();

/*
test('create a ship and place it "on the board" with coordinates', () => {
    expect(Gameboard.ships[0]).toBe(4, 3, 2)
})
*/

const Gameboard2 = createnew();

test('should be able to change arrangement', () => {
    expect(Gameboard2.arrangement).toBe('horizontal'),
    Gameboard2.place(4,6,2);
    Gameboard2.change(),
    Gameboard2.place(2,2,2);
    expect(Gameboard2.ships).toBe('vertical')
})