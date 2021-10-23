import { renderPlayerShips } from "./render-ships";
import { attackComputer } from "./attack-enemy";

const placing = (playerOne, playerTwo) => {
    let count = 1;

    let length = 1;
    ///take arragment, and length and add event listeners for player's board cells

    function place(event) {
        //simple version that just allows us to place ships in order from verysmall  to large
        const x = parseInt(event.target.getAttribute('x'));
        const y = parseInt(event.target.getAttribute('y'));
        const result = playerOne.gameboard.place(length, x, y);
        renderPlayerShips(playerOne);
        count++;
        if (count == 5) length = 2;
        else if (count == 8) length = 3;
        else if (count == 10) length = 4;
        else if (count == 11) {
            const allPlayerCells = document.querySelectorAll('.player-board > .cell');
            allPlayerCells.forEach(cell => {
                cell.removeEventListener('click', place);
            })
            attackComputer(playerOne, playerTwo);
        }
        event.target.removeEventListener('click', place);
    }

    const allPlayerCells = document.querySelectorAll('.player-board > .cell');
    allPlayerCells.forEach(cell => {
        cell.addEventListener('click', place);
    })
}


export { placing }