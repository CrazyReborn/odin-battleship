
const attackComputer = (you, computer) => {
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
        } else if (result == 'miss') {
            event.target.classList.add('miss');
            attackPlayer(computer, you);
        }
        if (computer.gameboard.allSunk() || you.gameboard.allSunk()) {
            console.log('done!');
            allComputerDivs.forEach(div => {
                div.removeEventListener('click', attack);
            })
        }
        event.target.removeEventListener('click', attack);
    }

}


const attackPlayer = (computer, player) => {
    const allPlayerCells = Array.from(document.querySelectorAll('.player-board > .cell'));
    let attackResult = computer.turn(player);
    const toFind = (element) => element.attributes[1].value == attackResult[1] && element.attributes[2].value == attackResult[2];
    const found = allPlayerCells.find(toFind);
    if (attackResult[0] == 'miss') {
        found.classList.add('miss')
    } else if (attackResult[0] == 'hit') {
        found.classList.add('hit');
        attackPlayer(computer, player);
    }
    return attackResult[0];
}

export { attackComputer, attackPlayer }