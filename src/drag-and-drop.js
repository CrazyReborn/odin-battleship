import {renderPlayerShips} from './render-ships'

function dnd (player) {
    const allPlayerCells = Array.from(document.querySelectorAll('.player-board > .cell'));
    const vsShip = document.querySelector('.vs');


    let smallShips = 0;

    vsShip.addEventListener('dragstart', dragStart);

    function dragStart(e) {
        const data = e.dataTransfer.setData('text/plain', this.getAttribute('length'));
    }

    function dragEnter(e) {
        e.preventDefault();
        const x = parseInt(this.getAttribute('x'));
        const y = parseInt(this.getAttribute('y'));
        const result = player.gameboard.checkCollision([x], [y]);
        if (result == false) {
            this.classList.add('valid');
        }
        else {
            this.classList.add('invalid');
        }
    };

    function dragLeave(e) {
        this.classList.remove('valid', 'invalid');
    };


    function drop(e) {
        this.classList.remove('valid', 'invalid');
        const x = parseInt(this.getAttribute('x'));
        const y = parseInt(this.getAttribute('y'));
        const result = player.gameboard.checkCollision([x], [y]);
        const length = parseInt(e.dataTransfer.getData('text/plain'));
        //for 1 cell ships
        if (result == false && length == 1 && smallShips < 4) {
            player.gameboard.place(length, x, y);
            smallShips++;
        } else if (length == 1 && smallShips == 4) {
            console.log(`cant't place more than 4   very small ships!`);  //MAKE IT APPEAR ON DISPLAY
        }

        renderPlayerShips(player);
    }

    allPlayerCells.forEach(element => {
        element.addEventListener('dragenter', dragEnter)
    });

    allPlayerCells.forEach(element => {
        element.addEventListener('dragleave', dragLeave)
    });
    allPlayerCells.forEach(element => {
        element.addEventListener('dragover', e => {
            e.preventDefault();
        })
    });

    allPlayerCells.forEach(element => {
        element.addEventListener('drop', drop)
    });

}

export { dnd }