import { renderBoards } from "./render-boards";
import { player } from "./player";
import { renderComputerShips } from "./render-ships";
import { computer } from './computer';
import { placing, changeArrangament } from "./placing";

const playerOne = player();
const playerTwo = computer();

const main = (() => {
    renderBoards();

    playerTwo.placeVerySmallShips();
    playerTwo.placeSmallShips();
    playerTwo.placeMediumShips();
    playerTwo.placeLargeShips();
    renderComputerShips(playerTwo);
    document.querySelector('input[name="length"]').checked = true;
    placing(playerOne, playerTwo);
    changeArrangament(playerOne)
})();