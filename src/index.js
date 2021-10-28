import { renderBoards } from "./render-boards";
import { player } from "./player";
import { renderComputerShips, renderPlayerShips } from "./render-ships";
import { computer } from './computer';
import { placing, changeArrangament } from "./placing";
import { dnd } from './drag-and-drop'

const playerOne = player();
const playerTwo = computer();

const main = (() => {
    renderBoards();
    changeArrangament(playerOne);
    dnd(playerOne, playerTwo);
    playerTwo.placeVerySmallShips();
    playerTwo.placeSmallShips();
    playerTwo.placeMediumShips();
    playerTwo.placeLargeShips();

    //commentout to enable classic placing
    
    //Uncoment to enable classic placing
   // document.querySelector('input[name="length"]').checked = true;
   // placing(playerOne, playerTwo);
   
})();