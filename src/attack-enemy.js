const attackComputer = (you, computer) => {
    const allComputerDivs = document.querySelectorAll('.computer-board > .cell');
    allComputerDivs.forEach(div => {
        div.addEventListener('click', e => {
            const x = parseInt(e.target.getAttribute('x'));
            const y = parseInt(e.target.getAttribute('y'));
            const result = you.turn(computer, x, y);
            if (result == 'hit') {
                e.target.classList.add('hit');
            } else {
                e.target.classList.add('miss');
            }
        })
    })
}

const attackPlayer = (computer, player) => {
    const allPlayerCells = Array.from(document.querySelectorAll('.player-board > .cell'));
    const attackResult = computer.turn(player);
    console.log(attackResult);
    const toFind = (element) => element.attributes[1].value == attackResult[1] && element.attributes[2].value == attackResult[2];
    const found = allPlayerCells.find(toFind);
    if (attackResult[0] == 'miss') {
        found.classList.add('miss')
    } else if (attackResult[0] == 'hit') {
        found.classList.add('hit')
    }
} 

export { attackComputer, attackPlayer}