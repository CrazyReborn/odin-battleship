import { Ship } from './ship-factory';
//const Ship = require('./ship-factory')

const Gameboard = () => {
    const ships = [];
    let arrangement = 'horizontal';
    const shot = [];
    const missed = [];
    let occupied = [];     //// array object that has 2 properties x and y;


    const checkCollision = (coordsH, coordsV) => {
        //if (coordsH.length > coordsV.length) {
            //const matches = (x) => (x[0] == coordsH[0] && x[1] == coordsV[0]) || (x[0] == coordsH[coordsH.length-1] && x[1] == coordsV[0]);
            const matches = (x) => coordsH.includes(x[0]) && coordsV.includes(x[1]);
            return occupied.some(matches);
        }
    //     if (coordsH.length < coordsV.length) {
    //         const matches = (x) => (x[0] == coordsH[0] && x[1] == coordsV[0]) || (x[0] == coordsH[0] && x[1] == coordsV[coordsV.length-1]);
    //         return occupied.some(matches);
    //     }
    //     if (coordsH.length == coordsV.length) {
    //         const matches = (x) => (x[0] == coordsH[0] && x[1] == coordsV[0]);
    //         return occupied.some(matches);
    //     }

    // }

    function change() {
        if (arrangement != 'vertical') {
            arrangement = 'vertical';
            return 'vertical';
        } else {
            arrangement = 'horizontal';
            return 'horizontal';
        }
    }

    const place = (length, coordA, coordB) => {
        if (arrangement == 'horizontal') {
            const newShip = Ship(length);
            const locationsH = [];
            const locationsV = [];
            const fillCoorditanes = (() => {
                for (let i = 0; i < newShip.length; i++) {
                    locationsH.push(coordA + i);
                }
                locationsV.push(coordB);
            })();
            if (checkCollision(locationsH, locationsV)) {
                return 'failed';
            }
            else if (coordA + length > 10) {
                return 'failed';
            } else {
                ships.push({
                    locationsH,
                    locationsV,
                    newShip
                });
                ///the ship and horiznotal; y == y;
                occupied.push([coordA - 1, coordB]);
                occupied.push([coordA + length, coordB])
                locationsH.forEach(x => {
                    occupied.push([x, locationsV[0]]);
                })
                ///the ship ; y == y - 1;
                locationsH.forEach(x => {
                    occupied.push([x, locationsV[0] - 1]);
                })
                ///the ship; y == y + 1 
                locationsH.forEach(x => {
                    occupied.push([x, locationsV[0] + 1]);
                })
                return 'placed'
            }
        }

        else if (arrangement == 'vertical') {
            const newShip = Ship(length);
            const locationsH = [];
            const locationsV = [];
            const fillCoorditanes = (() => {
                locationsH.push(coordA);
                for (let i = 0; i < newShip.length; i++) {
                    locationsV.push(coordB + i);
                }
            })();
            if (checkCollision(locationsH, locationsV)) {
                return 'failed';
            }
            else if (coordB + length > 10) {
                return 'failed';
            } else {
                ships.push({
                    locationsH,
                    locationsV,
                    newShip
                });
                /// x==x
                occupied.push([coordA, coordB - 1]);
                occupied.push([coordA, coordB + length]);
                locationsV.forEach(y => {
                    occupied.push([locationsH[0], y]);
                })
                ///x == x -1
                locationsV.forEach(y => {
                    occupied.push([locationsH[0] - 1, y]);
                })
                ///x == x + 1
                locationsV.forEach(y => {
                    occupied.push([locationsH[0] + 1, y]);
                })
                return 'placed';
            }
        }
    }

    const receiveAttack = (coordX, coordY) => {
        let x;
        let y;
        let foundShip;
        let hitLocation;

        //go over ships and check locationH and locationV for matches
        const findShip = (ship) => ship.locationsH.includes(coordX) && ship.locationsV.includes(coordY);
        foundShip = ships.find(findShip);

        //if not found then push ccords to evaded

        if (foundShip == undefined) {
            missed.push([coordX, coordY]);
            shot.push([coordX, coordY]);
            return 'miss';
        }

        //if the length of locationsV ==1 then we should findIndex of coordX on the locationsH and then pass the index to hit()
        //otherwise use coordY for the same stuff.
        else if (foundShip.locationsV.length == 1) {
            hitLocation = foundShip.locationsH.findIndex(coord => coord == coordX);
            foundShip.newShip.hit(hitLocation);
            missed.push([coordX, coordY]);
            return 'hit';
        }
        else {
            hitLocation = foundShip.locationsV.findIndex(coord => coord == coordY);
            foundShip.newShip.hit(hitLocation);
            missed.push([coordX, coordY]);
            return 'hit';
        }
    }

    const allSunk = () => {
        const allShipSunk = (ship) => ship.newShip.isSunk();
        if (ships.every(allShipSunk) && ships[0]) {
            return true;
        }
        else {
            return false;
        }
    }

    return {
        place,
        change,
        receiveAttack,
        allSunk,
        checkCollision,
        shot,
        missed,
        ships,
        arrangement,
        occupied
    }
}

export { Gameboard }
//module.exports = Gameboard;