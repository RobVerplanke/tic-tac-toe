/* eslint-disable no-plusplus */

const GameBoard = () => {
    const boardRows = 3;
    const boardCols = 3;
    const board = [];

    // Make a 2d grid
    for(let i = 0; i < boardRows; i ++){
        board[i] = [];
        for(let j = 0; j < boardCols; j++){
            board[i].push('X');
        }
    }

    // Display the grid
    const getBoard = () => board;

    return { getBoard };
};

const DisplayController = () => {
    const gridContainer = document.getElementById('game-container');

    gridContainer.append(GameBoard.getBoard);
};

DisplayController();








// function Player(name, marker) {
//     name;
//     marker;
// }


// const player1 = Player('Rob', 'X');
// const player2 = Player('Karel', 'O');
