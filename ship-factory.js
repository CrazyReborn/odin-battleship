
const Ship = (shipLength) => {
    const length = shipLength;
    let hitSpots = [];

    const hitSpot = (() => {
        for (let i = 0; i < length; i++) {
            hitSpots.push('');
        }
    })();

    const hit = (spot) => hitSpots[spot] = 'hit';
   
    const isSunk = () => {
        const a = spot => spot === 'hit';
        return hitSpots.every(a)
    }

    return {
        length,
        hitSpots,
        hit,
        isSunk
    }
}


module.exports = Ship;