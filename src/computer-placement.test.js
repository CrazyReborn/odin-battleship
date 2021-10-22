import { computer } from "./computer";

const one = computer();

/*  WORKS
test('place a (really) big ship and make sure computer can\'t place on the same place', () => {
    one.gameboard.place(10, 0, 0);
    expect(one.randomisePlacement()).toBe(1);
}) 
*/
/* WORKS
test ('try to place small ships', () => {
    one.placeSmallShips();
    expect(one.gameboard.ships).toBe(1);
})
*/


//  test ('colisions after placing a ship', () => {
//      one.gameboard.place(4, 1, 1);
//      expect(one.gameboard.checkCollision([2],[2])).toBe(true);
//      expect(one.gameboard.checkCollision([5,6,7],[1])).toBe(true);
//      expect(one.gameboard.checkCollision([5,6,7],[0])).toBe(true);
//      expect(one.gameboard.checkCollision([5,6,7],[2])).toBe(true);
//      one.gameboard.change();
//      one.gameboard.place(2, 5, 5);
//      expect(one.gameboard.checkCollision([2],[2])).toBe(true);
//  })

//  test ('colisions after placing a ship', () => {
//     one.gameboard.place(4, 2, 2);
//     expect(one.gameboard.place(2, 4, 5)).toBe('failed');
// })

// test ('place a 2 cell ship and try to place a one cell near it', () => {
//     one.gameboard.place(2, 2, 2);
//     //expect(one.gameboard.occupied).toBe(true);
//     expect(one.gameboard.checkCollision([1],[2])).toBe(true);
//     expect(one.gameboard.checkCollision([1],[3])).toBe(true);
//     expect(one.gameboard.checkCollision([2],[3])).toBe(true);
//     expect(one.gameboard.checkCollision([3],[3])).toBe(true);
//     expect(one.gameboard.checkCollision([4],[3])).toBe(true);
//     expect(one.gameboard.checkCollision([4],[2])).toBe(true);
//     expect(one.gameboard.checkCollision([4],[1])).toBe(true);
//     expect(one.gameboard.checkCollision([3],[1])).toBe(true);
//     expect(one.gameboard.checkCollision([2],[1])).toBe(true);
//     expect(one.gameboard.place(4, 4, 2)).toBe('failed');
// })


test ('place a 2 cell ship and try to place a one cell near it', () => {
    one.gameboard.place(2, 0, 3);
    //expect(one.gameboard.occupied).toBe(1);
    expect(one.gameboard.checkCollision([2,3], [3])).toBe(true)
    expect(one.gameboard.place(2, 1, 4)).toBe(true);
})