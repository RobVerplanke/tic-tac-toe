const Player = (name, symbol) => ({ name, symbol });


const GameBoard = (() => {
    const board = ['X','O','O','X','O','X','X','O','X'];

    const placeMarker = (index, symbol) => {
        board[index] = symbol;
    };

    const checkForWin = () => {
        // check for win
    };

    return { board, placeMarker, checkForWin };
})();


const DisplayController = (() => {
    const updateBoard = () => {
        // update display
    }

    const showResult = () => {
        // show result
    }

    return { updateBoard, showResult};
})();


const GameController = {
    currentPlayer: null,
    
    // startGame()
    // switchPlayers
    // handlePlayerMove()
};