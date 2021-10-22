const collision = (player) => {
    const b = player.gameboard.occupied;
    b.forEach(element => {
        const a = element[0];
        const b = element[1];
        let div = document.querySelector(`.computer-board > [x="${a}"][y="${b}"]`);
        if (div) {
            div.textContent = 'X';
        }
        
    });
}


export {collision}