import { renderComputerShips } from "./render-ships";
import { display } from "./display";

const attackComputer = (you, computer) => {

    const displ = display();

    const allComputerDivs = document.querySelectorAll('.computer-board > .cell');
    if ((computer.gameboard.allSunk() || you.gameboard.allSunk())) {
        allComputerDivs.forEach(div => {
            div.removeEventListener('click', attack);
        })
    }

    allComputerDivs.forEach(div => {
        div.addEventListener('click', attack);
    })
    function attack(event) {
        const x = parseInt(event.target.getAttribute('x'));
        const y = parseInt(event.target.getAttribute('y'));
        const result = you.turn(computer, x, y);
        if (result == 'hit') {
            event.target.classList.add('hit');
            displ.playerHit();
        } else if (result == 'miss') {
            event.target.classList.add('miss');
            displ.computersTurn();
            setTimeout(() => attackPlayer(computer, you), 500);
        }

        if (you.gameboard.allSunk() && you.gameboard.ships[0].newShip.isSunk()) {
            displ.clear();
            displ.computerWon();  ///SHOW ON DISPLAY
            allComputerDivs.forEach(div => {
                div.removeEventListener('click', attack);
            })
        }
        else if (computer.gameboard.allSunk() && computer.gameboard.ships[0].newShip.isSunk()) {
            displ.clear();
            displ.playerWon(); ///SHOW ON DISPLAY  DID NOT TEST YET
            allComputerDivs.forEach(div => {
                div.removeEventListener('click', attack);
            })
        }

        // if (computer.gameboard.allSunk() || you.gameboard.allSunk()) {
        //     allComputerDivs.forEach(div => {
        //         div.removeEventListener('click', attack);
        //     })
        // }
        renderComputerShips(computer);
        event.target.removeEventListener('click', attack);
    }

}




const attackPlayer = (computer, player) => {
    const allPlayerCells = Array.from(document.querySelectorAll('.player-board > .cell'));
    const displ = display();
    let attackResult = computer.turn(player);
    const toFind = (element) => element.attributes[1].value == attackResult[1] && element.attributes[2].value == attackResult[2];
    const found = allPlayerCells.find(toFind);
    if (attackResult[0] == 'miss') {
        found.classList.add('miss')
        displ.computerMiss();
    } else if (attackResult[0] == 'hit') {
        found.classList.add('hit');
        displ.computerHit();
        setTimeout(() => attackPlayer(computer, player), 500);
    }
    return attackResult[0];
}

export { attackComputer, attackPlayer }