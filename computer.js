const Gameboard = require('./gameboard')

const computer = () => {
    const gameboard = Gameboard();

    const turn = (enemy) => {
        let hitX = Math.floor(Math.random() * 10);
        let hitY = Math.floor(Math.random() * 10);
        while (enemy.gameboard.missedX.includes(hitX) && 
               enemy.gameboard.missedY.includes(hitY)) {
                hitX = Math.floor(Math.random() * 10);
                hitY = Math.floor(Math.random() * 10);
               }
        

        enemy.gameboard.receiveAttack(hitX, hitY);
    }
    return {
        turn,
        gameboard
    }
}

module.exports = computer;