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

    return {
        ships,
        place,
        change,
        arrangement
    }
}

module.exports = Gameboard;