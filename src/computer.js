import { Gameboard } from "./gameboard";

const computer = () => {
    const gameboard = Gameboard();

    const turn = (enemy) => {

        let hitX = Math.floor(Math.random() * 10);
        let hitY = Math.floor(Math.random() * 10);
        /*
        while (enemy.gameboard.shotX.includes(hitX) && 
               enemy.gameboard.shotY.includes(hitY)) {
                hitX = Math.floor(Math.random() * 10);
                hitY = Math.floor(Math.random() * 10);
               }
        */
       const include = (element) => element[0]==hitX && element[1] == hitY;
       while (enemy.gameboard.shot.some(include)) {
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

export { computer };