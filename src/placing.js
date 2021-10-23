import { renderPlayerShips } from "./render-ships";

const placing = (player) => {
    let count = 1;

    let length = 1;
    ///take arragment, and length and add event listeners for player's board cells

    function place(event) {
        //simple version that just allows us to place ships in order from verysmall  to large
        const x = parseInt(event.target.getAttribute('x'));
        const y = parseInt(event.target.getAttribute('y'));
            const result = player.gameboard.place(length, x , y);
            renderPlayerShips(player);
            count++;
            if (count == 5) length = 2;
            else if (count == 8) length = 3;
            else if (count == 10) length = 4;
            else if (count == 11) {
                const allPlayerCells = document.querySelectorAll('.player-board > .cell');
                allPlayerCells.forEach(cell => {
                    cell.removeEventListener('click', place);
                })
            }
            event.target.removeEventListener('click', place);
    }

    const allPlayerCells = document.querySelectorAll('.player-board > .cell');
    allPlayerCells.forEach(cell => {
        cell.addEventListener('click', place);
    })

    // let arragment = document.querySelector('input[name="arragment"]:checked').value;
    // let length = document.querySelector('input[name="length"]:checked').value;
    // if (arragment && length) {
        
    // }
}


export { placing }