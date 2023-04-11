/* eslint-disable no-plusplus */

// Create a gameboard object and let it return a display function
const GameBoard = () => {
    const boardRows = 3;
    const boardCols = 3;
    const board = [];
    
    // Create a single cell (empty div width fixed size)
    const createCell = () => {
        const cell = document.createElement('div');
        cell.classList.add('single-cell');
        // add eventlistener
        return cell;
    }

    // Create a 2d grid
    for(let i = 0; i < boardRows; i++){
        board[i] = [];
        for(let j = 0; j < boardCols; j++){
            board[i].push(createCell()); // push new cell 
        }
    }

    // Return the board to display
    const printBoard = () => {
        const gridContainer = document.getElementById('grid-container');
        const cellContainer = document.createElement('div');
        cellContainer.classList.add('cell-container');
        
        for(let i = 0; i < boardRows; i++){
            for(let j = 0; j < boardCols; j++){
                cellContainer.appendChild(board[i][j]);
            }
        }

        gridContainer.append(cellContainer);        

    }

    return { printBoard };
};

const newGame = GameBoard();
newGame.printBoard();


// players (factory function)

// displayController (module)

// Game flow
    // pop-up sign in form
        // name and marker first player
        // name second player, auto assign marker
        // submit
    // create players