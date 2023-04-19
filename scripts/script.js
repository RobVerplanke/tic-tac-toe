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
    const displayBoard = document.querySelector('#grid-container');
    const displayMsg = document.querySelector('#game-display')
    
    const updateBoard = () => {
        // update display
    }

    const showResult = () => {
        // show who is winner / tie
    }

    return { updateBoard, showResult};
})();


const GameController = {
    currentPlayer: null,

    // startGame()
    // switchPlayers
    // handlePlayerMove()
};