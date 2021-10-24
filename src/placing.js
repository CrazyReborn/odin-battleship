import { renderPlayerShips } from "./render-ships";
import { attackComputer } from "./attack-enemy";

const placing = (playerOne, playerTwo) => {
    let lengthRadio = document.querySelectorAll('input[name="length"]');
    let length = 1;
    lengthRadio.forEach(radio => {
        radio.addEventListener('change', e => {
           length = parseInt(e.target.value);
        })
    })
    let verySmallShips = 0;
    let smallShips = 0;
    let mediumShips = 0;
    let largeShips = 0;

    function place(event) {
        console.log(length);
        const x = parseInt(event.target.getAttribute('x'));
        const y = parseInt(event.target.getAttribute('y'));
        if (length == 1 && verySmallShips < 4) {
            const result = playerOne.gameboard.place(length, x, y);
            if (result == 'placed') {
                verySmallShips++;
            }
            else {
                return;
            }
        }
        else if (length == 2 && smallShips < 3) {
            const result = playerOne.gameboard.place(length, x, y);
            if (result == 'placed') {
                smallShips++;
            }
            else {
                return;
            }
        }
        else if (length == 3 && mediumShips < 2) {
            const result = playerOne.gameboard.place(length, x, y);
            if (result == 'placed') {
                mediumShips++;
            }
            else {
                return;
            }
        }
        else if (length == 4 && largeShips < 1) {
            const result = playerOne.gameboard.place(length, x, y);
            if (result == 'placed') {
                largeShips++;
            }
            else {
                return;
            }
        }
        if (verySmallShips == 4 && smallShips == 3 &&
            mediumShips == 2 && largeShips == 1) {
            allPlayerCells.forEach(cell => {
                cell.removeEventListener('click', place);
            })
            attackComputer(playerOne, playerTwo);
        }
        renderPlayerShips(playerOne);
        console.log('vsmall' + verySmallShips + ' small' + smallShips + ' med ' + mediumShips + ' l ' + largeShips )
        event.target.removeEventListener('click', place);
    }

    const allPlayerCells = document.querySelectorAll('.player-board > .cell');
    allPlayerCells.forEach(cell => {
        cell.addEventListener('click', place);
    })
}



export { placing }