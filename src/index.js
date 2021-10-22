import { renderBoards } from "./render-boards";
import { player } from "./player";
import { renderPlayerShips, renderComputerShips } from "./render-ships";
import { computer } from './computer';
import { Game } from "./game";
import { attackComputer } from "./attack-enemy";
import { collision } from "./collision";


const playerOne = player();
playerOne.gameboard.place(4, 6, 7);
const main = (() => {
    renderBoards();
    
    const playerTwo = computer();
    
    playerTwo.placeVerySmallShips();
    playerTwo.placeSmallShips();
    playerTwo.placeMediumShips();
    playerTwo.placeLargeShips();
    
    renderPlayerShips(playerOne);
    //renderComputerShips(playerTwo);
    attackComputer(playerOne, playerTwo);
})();

