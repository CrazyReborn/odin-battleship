import { Gameboard } from "./gameboard";

const computer = () => {
    const gameboard = Gameboard();

    const turn = (enemy) => {

        let hitX = Math.floor(Math.random() * 10);
        let hitY = Math.floor(Math.random() * 10);

       const include = (element) => element[0]==hitX && element[1] == hitY;
       while (enemy.gameboard.shot.some(include)) {
        hitX = Math.floor(Math.random() * 10);
        hitY = Math.floor(Math.random() * 10);
       }
        const result = enemy.gameboard.receiveAttack(hitX, hitY);
        const hits = [result, hitX, hitY];
        return hits;
        
    }

    const randomisePlacement = () => {
        let x;
        let y;
        do{
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 10);
        } while (gameboard.ships.some((ship) => ship.locationsH.includes(x) && ship.locationsV.includes(y)));
        return [x, y]
    }

    const placeSmallShips = () => {
        let i = 0;
        do {
            const coords = randomisePlacement();
            gameboard.place(1, coords[0], coords[1]);
            i++; 
        } while(i<4)

    }

    return {
        turn,
        gameboard,
        randomisePlacement,
        placeSmallShips
    }
}

export { computer };