/* eslint-disable no-plusplus */

// Create a gameboard object and let it return a display function
const GameBoard = () => {
    const rows = 3;
    const cols = 3;
    const board = [];
    
    // Create a 2d grid array
    for(let i = 0; i < rows; i++){
        board[i] = [];
        for(let j = 0; j < cols; j++){
            board[i][j] = `Row ${i}, Col ${j}`;
        }
    }

    // Create a single cell (empty div width fixed size)
    const createCell = (i, j) => {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.textContent = board[i][j];
        // add eventlistener
        return cell;
    }

    // Display the board
    const printBoard = () => {
        const cellContainer = document.getElementById('cell-container');
        
        // Create a 2d grid on display
        for(let i = 0; i < rows; i++){
            for(let j = 0; j < cols; j++){
                cellContainer.append(createCell(i, j));
            }
        }
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