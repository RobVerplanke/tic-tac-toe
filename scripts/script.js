/* eslint-disable no-plusplus */

// create a gameboard object and let it return a display function
function GameBoard() {
    const rows = 3;
    const cols = 3;
    const board = [];

    // create a empty 2d grid
    const createGridArray = () => {
        for(let i = 0; i < rows; i++){
        board[i] = [];
            for(let j = 0; j < cols; j++){
                board[i][j] = '';
            }
        }
    };

    // return array item coordinates
    const getBoardItem = (i, j) => board[i][j];
    
    // if selected cell is empty add a marker
    const selectCell = (e) => {
        const selectedCell = e.target;
        if(selectedCell.innerHTML === ''){
            selectedCell.innerHTML = 'X';
            // switch players turn
        } else {
            console.log('not empty');
        }
    };

    // create a single cell with corresponding array value and add a eventlistener to it
    const createCell = (i, j) => {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.innerHTML = getBoardItem(i, j);
        cell.addEventListener('click', e => selectCell(e));
        return cell;
    };

    // create a 2d grid on the display
    const createGridDisplay = () => {
        const cellContainer = document.getElementById('cell-container');
        for(let i = 0; i < rows; i++){
            for(let j = 0; j < cols; j++){
                cellContainer.append(createCell(i, j));
            }
        }
    };
    
    createGridArray();

    return { createGridDisplay };
}

const newGame = GameBoard();
newGame.createGridDisplay();



function gameController() {
   
}

const Player = (name, marker) => {
    const playerName = name;
    const playerMarker = marker;
    
    return {}
};



// sign in form
// function getForm(() {
// 
// })()