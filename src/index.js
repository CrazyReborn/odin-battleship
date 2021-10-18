import { renderBoards } from "./render-boards";
import { player } from "./player";
import { renderPlayerShips, renderComputerShips } from "./render-ships";
import { computer } from './computer';
import { attackComputer, attackPlayer } from './attack-enemy';

const main = (() => {
    renderBoards();
    const playerOne = player();
    const playerTwo = computer();
    playerOne.gameboard.place(2,3,3);
    playerTwo.gameboard.place(2,3,3);
    renderPlayerShips(playerOne);
    renderComputerShips(playerTwo);
    attackComputer(playerOne, playerTwo);
    attackPlayer(playerTwo, playerOne);
})();