const Ship = require("./ship-factory");

const Gameboard = () => {
    const ships = [];
    let arrangement = 'horizontal'

    const change = () => {
        if (arrangement != 'vertical') {
            arrangement = 'vertical'
        } else {
            arrangement = 'horizontal'
        }
    }

    const place = (length, coordA, coordB) => {
        if (arrangement == 'horizontal') {
            const newShip = Ship(length);
            const locationsH = [];
            const locationsV = [];
            const fillCoorditanes = (() => {
            for(let i = 0;i < newShip.length; i++) {
                locationsH.push(coordA+i);
            }
            locationsV.push(coordB);
        })();
        ships.push({
            locationsH,
            locationsV,
            newShip});
        }
        else if (arrangement == 'vertical') {
            const newShip = Ship(length);
            const locationsH = [];
            const locationsV = [];
            const fillCoorditanes = (() => {
            locationsH.push(coordA);
            for(let i = 0;i < newShip.length; i++) {
                locationsV.push(coordB+i);
            }
        })();
        ships.push({
            locationsH,
            locationsV,
            newShip});
        }
        
    }

    const receiveAttack = (coordX, coordY) => {
        let x;
        let y;
        let foundShip;
        let hitLocation;

        //go over ships and check locationH and locationV for matches
        foundShip = ships.find(ship =>
           ship.locationsH.includes(coordX) && ship.locationsV.includes(coordY)
        )

        //if the length of locationsV ==1 then we should findIndex of coordX on the locationsH and then pass the index to hit()
        //otherwise use coordY for the same stuff.
        if (foundShip.locationsV.length == 1) {
            hitLocation = foundShip.locationsH.findIndex(coord => coord == coordX);
            foundShip.newShip.hit(hitLocation);
        }
        else {
            hitLocation = foundShip.locationsV.findIndex(coord => coord == coordY);
            foundShip.newShip.hit(hitLocation);
        }
    }

    return {
        ships,
        place,
        change,
        arrangement,
        receiveAttack
    }
}

module.exports = Gameboard;