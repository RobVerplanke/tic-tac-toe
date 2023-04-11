/* eslint-disable no-plusplus */

// Create a gameboard object and let it return a display function
const GameBoard = () => {
    const rows = 3;
    const cols = 3;
    const board = [];
    
    // Create a single empty cell
    const createCell = () => {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        // add eventlistener
        return cell;
    }

    // Create a 2d grid in the 'board' array
    const createArrayGrid = () => {
        for(let i = 0; i < rows; i++){
            board[i] = [];
            for(let j = 0; j < cols; j++){
                board[i][j] = createCell();
            }
        }
    }

    // Create a 2d grid on the display
    const createDisplayGrid = () => {
        const cellContainer = document.getElementById('cell-container');
        for(let i = 0; i < rows; i++){
            for(let j = 0; j < cols; j++){
                cellContainer.append(createCell());
            }
        }
    }

    createArrayGrid();

    return { createDisplayGrid };
};

const newGame = GameBoard();
newGame.createDisplayGrid();


// players (factory function)

// displayController (module)

// Game flow
    // pop-up sign in form
        // name and marker first player
        // name second player, auto assign marker
        // submit
    // create players