/* eslint-disable no-plusplus */

const GameBoard = () => {
    const boardRows = 3;
    const boardCols = 3;
    const board = [];

    // Make a 2d grid
    for(let i = 0; i < boardRows; i ++){
        board[i] = [];
        for(let j = 0; j < boardCols; j++){
            board[i].push('test');
        }
    }

    // Allow to display the grid
    const getBoard = () => board;

    return { getBoard };
};

const DisplayController = (() => {

})();


function Player(name, marker) {

}

console.log(GameBoard.boardRows);

// const player1 = Player('Rob', 'X');
// const player2 = Player('Karel', 'O');
