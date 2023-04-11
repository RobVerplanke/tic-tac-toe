/* eslint-disable no-plusplus */

// Create a gameboard object and let it return a display function
const GameBoard = () => {
    const rows = 3;
    const cols = 3;
    const board = [];
    
    // Create a single cell (empty div width fixed size)
    const createCell = (i, j) => {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.textContent = board[i][j];
        // add eventlistener
        return cell;
    }

    // Create a 2d grid in a array and in the html container
    const createGrid = () => {
        const cellContainer = document.getElementById('cell-container');

        for(let i = 0; i < rows; i++){
            board[i] = [];
            for(let j = 0; j < cols; j++){
                board[i][j] = `Row ${i}, Col ${j}`;
                cellContainer.append(createCell(i, j));

            }
        }
    }

    return { createGrid };
};

const newGame = GameBoard();
newGame.createGrid();


// players (factory function)

// displayController (module)

// Game flow
    // pop-up sign in form
        // name and marker first player
        // name second player, auto assign marker
        // submit
    // create players