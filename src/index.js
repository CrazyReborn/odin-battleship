import { renderBoards } from "./render-boards";
import { player } from "./player";
import { renderPlayerShips, renderComputerShips } from "./render-ships";
import { computer } from './computer';
import { Game } from "./game";
import { attackComputer } from "./attack-enemy";
import { collision } from "./collision";
import { placing } from "./placing";

const playerOne = player();

const main = (() => {
    renderBoards();
    placing(playerOne);
    // const playerTwo = computer();
    
    // playerTwo.placeVerySmallShips();
    // playerTwo.placeSmallShips();
    // playerTwo.placeMediumShips();
    // playerTwo.placeLargeShips();
    
    //renderPlayerShips(playerOne);
    // //renderComputerShips(playerTwo);
    // attackComputer(playerOne, playerTwo);
})();

