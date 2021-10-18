const attackEnemy = (you, enemy) => {
    const allComputerDivs = document.querySelectorAll('.computer-board > .cell');
    allComputerDivs.forEach(div => {
        div.addEventListener('click', e => {
            const x = parseInt(e.target.getAttribute('x'));
            const y = parseInt(e.target.getAttribute('y'));
            const result = you.turn(enemy, x, y);
            if (result == 'hit') {
                e.target.classList.add('hit');
            } else {
                e.target.classList.add('miss');
            }
        })
    })
}


export { attackEnemy }