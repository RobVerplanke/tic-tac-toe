const Player = (name, symbol) => ({ name, symbol });


const GameBoard = (() => {
    const board = ['X','O','O','X','O','X','X','O','X'];

    const placeMarker = (index, symbol) => {
        // const availableCells = board.filter();
        // availableCells[index] = symbol;
    };

    const checkForWin = () => {
        // check for win
    };

    return { board, placeMarker, checkForWin };
})();


const DisplayController = (() => {

    // show display on screen - create a button for each array item
    const printBoard = () => {
        GameBoard.board.forEach( cell => { 
            const displayBoard = document.querySelector('#grid-container');
            const printCell = document.createElement('button');
            displayBoard.append(printCell);
            printCell.classList.add('cell');
            printCell.innerText = cell;
        });
    }

    // show who is winner / tie
    const showResult = () => {
        const displayMsg = document.querySelector('#game-display')

    }

    return { printBoard, showResult};
})();

DisplayController.printBoard();

const GameController = {
    currentPlayer: null,

    // startGame()
    // switchPlayers
    // handlePlayerMove()
};