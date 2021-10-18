import { Gameboard } from './gameboard'
//const Gameboard = require('./gameboard');
const player = () => {
    const gameboard = Gameboard();
    const turn = (enemy, hitX, hitY) => {
        const result = enemy.gameboard.receiveAttack(hitX, hitY);
        return result;
    }
    return {
        turn,
        gameboard
    }
}

export { player }
//module.exports = player;