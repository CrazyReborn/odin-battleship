
const Ship = (shipLength) => {
    const length = shipLength;
    let hitSpots = [];

    const hitSpot = (() => {
        for (let i = 0; i < length; i++) {
            hitSpots.push('');
        }
    })();

    const hit = (spot) => {
        hitSpots[spot] = 'hit';
        isSunk();
    }
   
    const isSunk = () => {
        const allSpotsHit = spot => spot === 'hit';
        return hitSpots.every(allSpotsHit);
    }

    return {
        length,
        hitSpots,
        hit,
        isSunk
    }
}

export { Ship }
//module.exports = Ship;  