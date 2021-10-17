import { player } from './player';

const renderBoards =() => {
    const playerBoard = document.querySelector('.player-board');
    const computerBoard = document.querySelector('.computer-board');
    
    for(let rows = 0; rows < 10; rows++) {
        for(let collums = 0; collums < 10; collums++) {
            const newPlayerDiv = document.createElement('div');
            const newComputerDiv = document.createElement('div');

            //Player
            newPlayerDiv.classList.add('cell');
            newPlayerDiv.setAttribute('x', collums);
            newPlayerDiv.setAttribute('y', rows);
            playerBoard.appendChild(newPlayerDiv);

            //computer
            newComputerDiv.classList.add('cell');
            newComputerDiv.setAttribute('x', collums);
            newComputerDiv.setAttribute('y', rows);
            computerBoard.appendChild(newComputerDiv);
        }
    }
};

export { renderBoards };