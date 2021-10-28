import { renderPlayerShips } from './render-ships';
import { attackComputer } from './attack-enemy';

function dnd(player, computer) {
    const allPlayerCells = Array.from(document.querySelectorAll('.player-board > .cell'));
    const arrangament = document.querySelector('#arrangement');
    arrangament.textContent = 'horizontal';

    const vsShip = document.querySelector('.vs');
    const sShip = document.querySelector('.s');
    const mShip = document.querySelector('.m');
    const lShip = document.querySelector('.l');


    let outLength = 0;
    let verysmallShips = 0;
    let smallShips = 0;
    let mediumShips = 0;
    let largeShips = 0;

    vsShip.addEventListener('dragstart', dragStart);
    sShip.addEventListener('dragstart', dragStart);
    mShip.addEventListener('dragstart', dragStart);
    lShip.addEventListener('dragstart', dragStart);

    // function dragEnd(e) {
    //     e.dataTransfer.clearData('text/plain');
    // }

    function dragStart(e) {
        e.dataTransfer.setData('text/plain', this.getAttribute('length'));
        outLength = parseInt(this.getAttribute('length'));
    }

    function dragOver(e) {
        const x = Array.from(this.getAttribute('x')).map(x => parseInt(x));
        const y = Array.from(this.getAttribute('y')).map(y => parseInt(y));
        if (outLength > 1) {
            if (arrangament.textContent == 'horizontal') {
                for (let i = 1; i < outLength; i++) {
                    x.push(x[0] + i);
                }
            } else if (arrangament.textContent == 'vertical') {
                for (let i = 1; i < outLength; i++) {
                    y.push(y[0] + i);
                }
            }
            
        }
        const result = player.gameboard.checkCollision(x, y);
        if (x.length > y.length) { //IF HORIZONTAL
            if (result == false) {
                x.forEach(x => {
                    const div = document.querySelector(`.player-board > div[x="${x}"][y="${y[0]}"]`);
                    div.classList.add('valid');
                })
            }
            else {
                x.forEach(x => {
                    const div = document.querySelector(`.player-board > div[x="${x}"][y="${y[0]}"]`);
                    div.classList.add('invalid');
                })
            }
        }
        else if (x.length < y.length) { //IF VERTICAL
            if (result == false) {
                y.forEach(y => {
                    const div = document.querySelector(`.player-board > div[x="${x[0]}"][y="${y}"]`);
                    div.classList.add('valid');
                })
            }
            else {
                y.forEach(y => {
                    const div = document.querySelector(`.player-board > div[x="${x[0]}"][y="${y}"]`);
                    div.classList.add('invalid');
                })
            }
        }
        else {
            if (result == false) {
                this.classList.add('valid');
            }
            else {
                this.classList.add('invalid');
            }
        }

        e.preventDefault();
    }

    function dragLeave(e) {

        const x = Array.from(this.getAttribute('x')).map(x => parseInt(x));
        const y = Array.from(this.getAttribute('y')).map(y => parseInt(y));
        if (outLength > 1) {
            if (arrangament.textContent == 'horizontal') {
                for (let i = 1; i < outLength; i++) {
                    x.push(x[0] + i);
                }
            } else if (arrangament.textContent == 'vertical') {
                for (let i = 1; i < outLength; i++) {
                    y.push(y[0] + i);
                }
            }
        }
        if (x.length > y.length) {
            x.forEach(x => {
                const div = document.querySelector(`.player-board > div[x="${x}"][y="${y[0]}"]`);
                div.classList.remove('valid', 'invalid');
            })
        }
        else if (x.length < y.length) { //IF VERTICAL
            y.forEach(y => {
                const div = document.querySelector(`.player-board > div[x="${x[0]}"][y="${y}"]`);
                div.classList.remove('valid', 'invalid');
            })
        }
        else {
            this.classList.remove('valid', 'invalid');
        }
    }


function drop(e) {
    const x = parseInt(this.getAttribute('x'));
    const y = parseInt(this.getAttribute('y'));
    const result = player.gameboard.checkCollision([x], [y]);
    const length = parseInt(e.dataTransfer.getData('text/plain'));
    //for 1 cell ships
    if (result == false && length == 1 && verysmallShips < 4) {
        player.gameboard.place(1, x, y);
        verysmallShips++;
    } else if (length == 1 && verysmallShips == 4) {
        console.log(`cant't place more than 4   very small ships!`);  //MAKE IT APPEAR ON DISPLAY
    }
    //for 2 cell ships
    else if (result == false && length == 2 && smallShips < 3) {
        player.gameboard.place(2, x, y);
        smallShips++;
    } else if (length == 2 && smallShips == 3) {
        console.log(`cant't place more than 3 small ships!`);  //MAKE IT APPEAR ON DISPLAY
    }
    //for 3 cell ships 
    else if (result == false && length == 3 && mediumShips < 2) {
        player.gameboard.place(3, x, y);
        mediumShips++;
    } else if (length == 2 && mediumShips == 2) {
        console.log(`cant't place more than 2 medium ships!`);  //MAKE IT APPEAR ON DISPLAY
    }
    //4 cell ship
    else if (result == false && length == 4 && largeShips < 1) {
        player.gameboard.place(4, x, y);
        largeShips++;
    } else if (length == 2 && mediumShips == 2) {
        console.log(`cant't place more than 1 large ships!`);  //MAKE IT APPEAR ON DISPLAY
    }
    allPlayerCells.forEach(div => {
        div.classList.remove('valid', 'invalid');
    });
    renderPlayerShips(player);
    if (verysmallShips == 4 && smallShips == 3 &&
        mediumShips == 2 && largeShips == 1) {
            attackComputer(player,computer);
        }
}

allPlayerCells.forEach(element => {
    element.addEventListener('dragleave', dragLeave)
});

allPlayerCells.forEach(element => {
    element.addEventListener('dragover', dragOver);
})

allPlayerCells.forEach(element => {
    element.addEventListener('drop', drop);
});

}

export { dnd }