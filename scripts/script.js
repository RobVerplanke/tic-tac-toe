/* eslint-disable no-plusplus */
const Player = (name, symbol) => ({ name, symbol });


const GameBoard = (() => {
    const board = ['','','','X','','O','','',''];

    // checks wether cell is empty or not
    const checkAvailableCell = (index) => {
        if (board[index] !== '') {
            console.log('already taken');
        };
    };
    
    const placeMarker = (e, index, symbol) => {
        if (checkAvailableCell(index) === true) board[index] = symbol;
        DisplayController.updateBoard();
    };

    const checkForWin = () => {
        // check for win
    };

    return { board, placeMarker, checkForWin };
})();


const DisplayController = (() => {

    // create a button on the grid, set a class, get marker symbol and add event listener
    const createCell = (cell, index) => {
        console.log(index);

        const displayCell = document.createElement('button');
        displayCell.className = 'cell';
        displayCell.innerText = cell;
        displayCell.setAttribute('data', index);
        displayCell.addEventListener('click', (e) => GameBoard.placeMarker(e, index, 'x'));
        
        const displayBoard = document.querySelector('#grid-container');
        displayBoard.append(displayCell);
    };

    // clear current board and create new cell for each array item
    const updateBoard = () => {
        let index = -1; // this way the counter starts at zero
        const displayBoard = document.querySelector('#grid-container');
        displayBoard.innerHTML = '';
        GameBoard.board.forEach(cell => {
            index++;
            createCell(cell, index)});
    };
    
    // show who is winner / tie
    const showResult = () => {
        const displayMsg = document.querySelector('#game-display')
    };

    return { updateBoard, showResult};
})();

DisplayController.updateBoard();

const GameController = {
    currentPlayer: null,

    // startGame()
    // switchPlayers
    // handlePlayerMove()
};