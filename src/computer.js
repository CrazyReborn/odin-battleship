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
        let x = Math.floor(Math.random() * 10);
        let y = Math.floor(Math.random() * 10);
        //let find = (ship) => ship.occupied.includes(x) && ship.locationsV.includes(y);
        
        while (gameboard.occupiedX.includes(x) && gameboard.occupiedY.includes(y)) {
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 10);
        }
        return [x, y]
    }

    const placeVerySmallShips = () => {
        let i = 0;
        do {
            const coords = randomisePlacement();
            gameboard.place(1, coords[0], coords[1]);
            i++; 
        } while(i<4)
    }

    const placeSmallShips = () => {
        let i = 0;
        do {
            const coords = randomisePlacement();
            gameboard.place(2, coords[0], coords[1]);
            i++; 
        } while(i<3)
    }

    const placeMediumShips = () => {
        let i = 0;
        do {
            const coords = randomisePlacement();
            gameboard.place(2, coords[0], coords[1]);
            i++; 
        } while(i<3)
    }

    return {
        turn,
        gameboard,
        randomisePlacement,
        placeVerySmallShips
        placeSmallShips,
        placeMediumShips
    }
}

export { computer };