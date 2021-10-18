function renderPlayerShips (player) {
    const allPlayerCells = Array.from(document.querySelectorAll('.player-board > .cell'));
    const playerShips = player.gameboard.ships;

    playerShips.forEach(element => {
        const foundX = element.locationsH;
        const foundY = element.locationsV;
        const found = (element) => foundX.includes(parseInt(element.attributes[1].value)) && foundY.includes(parseInt(element.attributes[2].value));
        const filteredCells = allPlayerCells.filter(found);
        filteredCells.forEach(div => div.classList.add('occupied'));
    });
};


function renderComputerShips (computer) {
    const allComputerCells = Array.from(document.querySelectorAll('.computer-board > .cell'));
    const computerShips = computer.gameboard.ships;

    computerShips.forEach(element => {
        const foundX = element.locationsH;
        const foundY = element.locationsV;
        const found = (element) => foundX.includes(parseInt(element.attributes[1].value)) && foundY.includes(parseInt(element.attributes[2].value));
        const filteredCells = allComputerCells.filter(found);
        filteredCells.forEach(div => div.classList.add('occupied'));
    });
};



export { renderPlayerShips, renderComputerShips }