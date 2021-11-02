const display = () => {
    const display = document.querySelector('.display');
    //vs - very small ships, s - small ships, m - medium ships, l - large ships
    const clear = () => {
        display.innerHTML = '';
    }

    const updatePlacing = (vs, s, m, l) => {
        display.innerHTML = `<p>1 cell ships placed: ${vs}<p><br>` +
                            `<p>2 cells ships placed: ${s}<p><br>` +
                            `<p>3 cells ships placed: ${m}<p><br>` +
                            `<p>4 cell ships placed: ${l}<p><br>`;

    }

    const start = () => {
        display.innerHTML = `<p>IT IS BATTLESHIP.</p><p>LEFT BOARD BELONGS TO YOU.</p>
                             <p>YOU CAN PLACE SHIPS(PUPRLE)</p>
                             <p>BY DRAGING THEM ON YOUR BOARD.</p>
                             <p>WHEN THE LAST SHIP WILL BE PLACED 
                             <p>THE GAME WILL START AUTOMATICALLY.</p>
                             <p>GOOD LUCK!</p>`
    }
    const playerWon = () => {
        display.innerHTML = '<p>PLAYER WON!</p>';
    }
    const playerHit = () => {
        display.innerHTML = '<p>YOU HIT THE ENEMY.</p><p>YOU CAN MAKE ANOTHER TURN!</p>';
    }
    const computersTurn = () => {
        display.innerHTML = `<p>YOU MISEED THE ENEMY.</p><p>IT IS COMPUTER'S TURN</p>`
    }
    const computerMiss = () => {
        display.innerHTML = `<p>COMPUTER MISSED.</p><p>IT IS NOW YOUR TURN</p>`
    }
    const computerHit = () => {
        display.innerHTML = `<p>COMPUTER HIT YOU.</p><p>IT WILL MAKE ANOTHER TURN</p>`
    }
    const computerWon = () => {
        display.innerHTML = '<p>COMPUTER WON!</p>';
    }
    const noMoreShips = () => {
        display.innerHTML = '<p>YOU CAN\'T PLACE MORE OF THOSE SHIPS</p>';
    }

    return {
        clear,
        updatePlacing,
        start,
        playerWon,
        computerWon,
        playerHit,
        computersTurn,
        computerMiss,
        noMoreShips,
        computerHit,
    }
}

export { display };