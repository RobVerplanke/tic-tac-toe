/* eslint-disable no-plusplus */

// create a gameboard object and let it return a display function
const GameBoard = () => {
    const rows = 3;
    const cols = 3;
    const board = [['X','O','O'],['X','O','X'],['O','X','X']];
    
    // select a cell
    function selectCell(e) {
    const selectedCell = e.target;
    selectedCell.innerHTML = 'X';
}
    // create a single cell with corresponding array value and add a eventlistener to it
    const createCell = (i, j) => {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.innerHTML = board[i][j];
        cell.addEventListener('click', e => selectCell(e));
        return cell;
    }

    // create a 2d grid on the display
    const createDisplayGrid = () => {
        const cellContainer = document.getElementById('cell-container');
        for(let i = 0; i < rows; i++){
            for(let j = 0; j < cols; j++){
                cellContainer.append(createCell(i, j));
            }
        }
    }

    return { createDisplayGrid };
};

const newGame = GameBoard();
newGame.createDisplayGrid();


// players (factory function)

// displayController (module)

// game flow
    // pop-up sign in form
        // name and marker first player
        // name second player, auto assign marker
        // submit
    // create players