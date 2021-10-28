import { renderPlayerShips } from "./render-ships";
import { attackComputer } from "./attack-enemy";
import { display } from "./display";


const placing = (playerOne, playerTwo) => {
    
    let lengthRadio = document.querySelectorAll('input[name="length"]');
    let length = 1;
    lengthRadio.forEach(radio => {
        radio.addEventListener('change', e => {
           length = parseInt(e.target.value);
        })
    })

    const disp = display();

    let verySmallShips = 0;
    let smallShips = 0;
    let mediumShips = 0;
    let largeShips = 0;


    function place(event) {
        const x = parseInt(event.target.getAttribute('x'));
        const y = parseInt(event.target.getAttribute('y'));
        if (length == 1 && verySmallShips < 4) {
            const result = playerOne.gameboard.place(length, x, y);
            if (result == 'placed') {
                verySmallShips++;
                event.target.removeEventListener('click', place);
                disp.updatePlacing(verySmallShips, smallShips, mediumShips, largeShips);
            }
            else {
                return;
            }
        }
        else if (length == 2 && smallShips < 3) {
            const result = playerOne.gameboard.place(length, x, y);
            if (result == 'placed') {
                smallShips++;
                event.target.removeEventListener('click', place);
                disp.updatePlacing(verySmallShips, smallShips, mediumShips, largeShips);
            }
            else {
                return;
            }
        }
        else if (length == 3 && mediumShips < 2) {
            const result = playerOne.gameboard.place(length, x, y);
            if (result == 'placed') {
                mediumShips++;
                event.target.removeEventListener('click', place);
                disp.updatePlacing(verySmallShips, smallShips, mediumShips, largeShips);
            }
            else {
                return;
            }
        }
        else if (length == 4 && largeShips < 1) {
            const result = playerOne.gameboard.place(length, x, y);
            if (result == 'placed') {
                largeShips++;
                event.target.removeEventListener('click', place);
                disp.updatePlacing(verySmallShips, smallShips, mediumShips, largeShips);
            }
            else {
                return;
            }
        }
        if (verySmallShips == 4 && smallShips == 3 &&
            mediumShips == 2 && largeShips == 1) {
            disp.clear();
            allPlayerCells.forEach(cell => {
                cell.removeEventListener('click', place);
            })
            attackComputer(playerOne, playerTwo);
        }
        renderPlayerShips(playerOne);
    }

    const allPlayerCells = document.querySelectorAll('.player-board > .cell');
    allPlayerCells.forEach(cell => {
        cell.addEventListener('click', place);
        disp.updatePlacing(verySmallShips, smallShips, mediumShips, largeShips);
    })
}


const changeArrangament = (playerOne) => {
    const arrBtn = document.querySelector('#change-arrangement');
    const arrStatus = document.querySelector('#arrangement');
    const ships = document.querySelector('.ships');
    const vs = document.querySelector('.vs');
    const s = document.querySelector('.s');
    const m = document.querySelector('.m');
    const l = document.querySelector('.l');


    arrStatus.textContent = playerOne.gameboard.arrangament
    arrBtn.addEventListener('click', () => {
        const changeValue = playerOne.gameboard.change();
        arrStatus.textContent = changeValue;
        if (changeValue == 'horizontal') {
            ships.style.flexDirection = 'column';
            vs.style.flexDirection = 'row';
            s.style.flexDirection = 'row';
            m.style.flexDirection = 'row';
            l.style.flexDirection = 'row';
        }
        else if (changeValue == 'vertical') {
            ships.style.flexDirection = 'row';
            vs.style.flexDirection = 'column';
            s.style.flexDirection = 'column';
            m.style.flexDirection = 'column';
            l.style.flexDirection = 'column';
        }
        
    })
}



export { placing, changeArrangament }