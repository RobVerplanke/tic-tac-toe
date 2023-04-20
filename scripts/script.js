const Player = (name, symbol) => ({ name, symbol });


const GameBoard = (() => {
    const board = ['','','','','','','','',''];

    // checks wether cell is empty or not
    const checkAvailableCell = (index) => {
        // if board[index] !== '' return false
    };
    
    const placeMarker = (index, symbol) => {
        checkAvailableCell(index);
        // if checkAvailableCell === true > board[index] = symbol
        DisplayController.updateBoard();
    };

    const checkForWin = () => {
        // check for win
    };

    return { board, placeMarker, checkForWin };
})();


const DisplayController = (() => {

    // create a button on the grid, set a class, get marker symbol and add event listener
    const createCell = (cell) => {
        const displayCell = document.createElement('button');
        displayCell.className = 'cell';
        displayCell.innerText = cell;
        displayCell.addEventListener('click', (e) => GameBoard.placeMarker(e, 'x'));
        
        const displayBoard = document.querySelector('#grid-container');
        displayBoard.append(displayCell);
    };

    // clear current board and create new cell for each array item
    const updateBoard = () => {
        const displayBoard = document.querySelector('#grid-container');
        displayBoard.innerHTML = '';
        GameBoard.board.forEach(cell => createCell(cell));
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