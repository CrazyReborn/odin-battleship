import { Gameboard } from './gameboard'

const player = () => {
    const gameboard = Gameboard();
    const turn = (enemy, hitX, hitY) => {
        enemy.gameboard.receiveAttack(hitX, hitY);
    }
    return {
        turn,
        gameboard
    }
}

export { player }