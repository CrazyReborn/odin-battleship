const Ship = require('./ship-factory');

const newShip = Ship(4);

test('ship object needs to have next properties: length, hitSpot, sunk', () => {
    expect(newShip.length).toBe(4),
    expect(newShip.hitSpots).toStrictEqual(['','','','']),
    expect(newShip.isSunk()).toBe(false)
}) 

test('hit a ship in a spot and mark this spot as hit', () => {
    newShip.hit(2),
    expect(newShip.hitSpots).toStrictEqual(['','','hit',''])
})


test('hit at every spot and check if the ship isSunk', () => {
    newShip.hit(0),
    newShip.hit(1),
    newShip.hit(3),
    expect(newShip.hitSpots).toStrictEqual(['hit','hit','hit','hit'])
    expect(newShip.isSunk()).toBe(true)
})