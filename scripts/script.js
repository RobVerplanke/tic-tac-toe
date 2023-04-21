/* eslint-disable no-plusplus */
const GameBoard = (() => {
    const board = ['','','','X','','O','','',''];

    // checks wether selected cell is empty or not
    const checkAvailableCell = (index) => {
        if (board[index] !== '') {
            console.log('already taken');
            return false;
        }
        return true;
    };

    const checkForWin = () => {
        // check for win
    };
    
    // if selected cell is empty, place a marker
    const placeMarker = (index, marker) => {
        if (checkAvailableCell(index) === true) {
            board[index] = marker;
            // checkForWin();
            console.log(GameController.currentPlayer);
            GameController.switchPlayers();
        };
        
        DisplayController.updateBoard();
    };

    return { board, checkAvailableCell, placeMarker, checkForWin };
})();

const DisplayController = (() => {

    // create a button on the grid and set a class, inner text, data attribute,
    // marker symbol and a event listener for each one
    const createCell = (cell, index) => {

        const displayCell = document.createElement('button');
        displayCell.className = 'cell';
        displayCell.innerText = cell;
        displayCell.setAttribute('data', index);
        displayCell.addEventListener('click', () => GameController.placeMarker(index));
        
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

const Player = (name, marker) => ({ name, marker });
const player1 = Player('Player 1', 'X');
const player2 = Player('Player 2', 'O');

const GameController = (() => {
    let currentPlayer = player1;
    
    // startGame()
    // handlePlayerMove()

    const switchPlayers = () => {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    };
    
     // if selected cell is empty, place a marker
     const placeMarker = (index) => {
        if (GameBoard.checkAvailableCell(index) === true) {
            GameBoard.board[index] = currentPlayer.marker;
            // checkForWin();
            console.log(currentPlayer);
            switchPlayers();
        };
        
        DisplayController.updateBoard();
    };

    return { currentPlayer, placeMarker, switchPlayers };
})();

DisplayController.updateBoard();