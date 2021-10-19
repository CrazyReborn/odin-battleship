import { renderBoards } from "./render-boards";
import { player } from "./player";
import { renderPlayerShips, renderComputerShips } from "./render-ships";
import { computer } from './computer';
import { Game } from "./game";
import { attackComputer } from "./attack-enemy";

const main = (() => {
    renderBoards();
    const playerOne = player();
    const playerTwo = computer();
    playerOne.gameboard.place(4, 6, 7);
    playerTwo.gameboard.place(3, 3, 3);
    console.log(playerOne.gameboard.allSunk())
    renderPlayerShips(playerOne);
    renderComputerShips(playerTwo);
    attackComputer(playerOne, playerTwo);
})();

