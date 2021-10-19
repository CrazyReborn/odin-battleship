import { attackComputer, stopAttack} from './attack-enemy';
import { player } from './player';

const Game = (playerOne, playerTwo) => {
    attackComputer(playerOne, playerTwo);
};


export { Game }