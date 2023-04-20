const Player = (name, symbol) => ({ name, symbol });


const GameBoard = (() => {
    const board = ['','','','','','','','',''];

    const placeMarker = (index, symbol) => {
        const newBoard = board;
        newBoard[index] = symbol;
        DisplayController.resetBoard();
        DisplayController.printBoard();
        console.log('placeMarker called');
        console.log(newBoard);


        // const availableCells = board.filter();
        // availableCells[index] = symbol;


    };

    const checkForWin = () => {
        // check for win
    };

    return { board, placeMarker, checkForWin };
})();


const DisplayController = (() => {

    // create a button on the grid, set a class, get marker symbol and add event listener
    const createCell = (cell) => {
        const displayBoard = document.querySelector('#grid-container');
        const displayCell = document.createElement('button');
        displayBoard.append(displayCell);
        displayCell.className = 'cell';
        displayCell.innerText = cell;
        displayCell.addEventListener('click', (e) => GameBoard.placeMarker(e, 'x'));
    };

    // clear board
    const resetBoard = () => {
        const displayBoard = document.querySelector('#grid-container');
        displayBoard.innerHTML = '';
        console.log('resetBoard called');
    };

    // show display on screen
    const printBoard = () => {
        GameBoard.board.forEach(cell => createCell(cell));
        console.log('printBoard called');

    };

    // update board
    // const updateBoard = () => {

    //     GameBoard.board.forEach(cell => createCell(cell));

    // };
    
    // show who is winner / tie
    const showResult = () => {
        const displayMsg = document.querySelector('#game-display')

    }

    return { resetBoard, printBoard, showResult};
})();

DisplayController.printBoard();

const GameController = {
    currentPlayer: null,

    // startGame()
    // switchPlayers
    // handlePlayerMove()
};