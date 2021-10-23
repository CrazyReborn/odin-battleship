import { renderBoards } from "./render-boards";
import { player } from "./player";
import { renderPlayerShips, renderComputerShips } from "./render-ships";
import { computer } from './computer';
import { placing } from "./placing";

const playerOne = player();

const main = (() => {
    renderBoards();
    const playerTwo = computer();
    playerTwo.placeVerySmallShips();
    playerTwo.placeSmallShips();
    playerTwo.placeMediumShips();
    playerTwo.placeLargeShips();
    placing(playerOne, playerTwo);

    if (playerOne.gameboard.allSunk() && !playerOne.gameboard.ships[0].newShip.isSunk()) {
        alert('you win!')
    }
    else if (playerTwo.gameboard.allSunk() && !playerTwo.gameboard.ships[0].newShip.isSunk()) {
        alert('you wins!')
    }
})();

