import { renderBoards } from "./render-boards";
import { player } from "./player";
import { renderShips } from "./render-ships";

const main = (() => {
    renderBoards();
    const playerOne = player();
    playerOne.gameboard.change();
    playerOne.gameboard.place(2, 3, 3);
    renderShips(playerOne);
})();