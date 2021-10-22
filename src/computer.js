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


    const placeVerySmallShips = () => {
        let i = 0;
        do {
            let x = Math.floor(Math.random() * 10);
            let y = Math.floor(Math.random() * 10);
            let result = gameboard.place(1, x, y);
            if (result == 'failed') continue;
            i++; 
        } while(i<4)
    }

    const placeSmallShips = () => {
        let i = 0;
        do {
            let x = Math.floor(Math.random() * 10);
            let y = Math.floor(Math.random() * 10);
            let result = gameboard.place(2, x, y);
            if (result == 'failed') {
                gameboard.change();
                continue
            };
            i++; 
        } while(i<3)
    }

    const placeMediumShips = () => {
        let i = 0;
        do {
            let x = Math.floor(Math.random() * 10);
            let y = Math.floor(Math.random() * 10);
            let result = gameboard.place(3, x, y);
            if (result == 'failed') continue;
            i++; 
        } while(i<2)
    }

    const placeLargeShips = () => {
        let i = 0;
        do {
            let x = Math.floor(Math.random() * 10);
            let y = Math.floor(Math.random() * 10);
            let result = gameboard.place(4, x, y);
            if (result == 'failed') {
                gameboard.change();
                continue};
            i++;
        } while(i!=1)
    }

    return {
        turn,
        gameboard,
        placeVerySmallShips,
        placeSmallShips,
        placeMediumShips,
        placeLargeShips
    }
}

export { computer };